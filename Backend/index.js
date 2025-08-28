import express from "express";
import session from "cookie-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import cors from "cors";
import pkg from "pg";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Razorpay from "razorpay";

dotenv.config();

const { Pool } = pkg;
const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  
  name: "session",
  keys: [process.env.COOKIE_KEY],
  maxAge: 24 * 60 * 60 * 1000,
}));

app.use(passport.initialize());
app.use(passport.session());

// PostgreSQL Connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// ✅ Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,       // <-- put in .env
  key_secret: process.env.RAZORPAY_KEY_SECRET, // <-- put in .env
});

// 🔹 Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
    callbackURL: `${process.env.SERVER_URL}/auth/google/callback`

    
  },
  async function (accessToken, refreshToken, profile, done) {
    const { email, name } = profile._json;
    try {
      const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      let user = userResult.rows[0];
      if (!user) {
        const hashedPassword = await bcrypt.hash("default_password", 10);
        const insertResult = await pool.query(
          "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
          [name, email, hashedPassword]
        );
        user = insertResult.rows[0];
      }
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
  const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  done(null, userResult.rows[0]);
});

// 🔹 Google Auth Routes
app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: `${process.env.CLIENT_URL}/login`,
  })
);

// 🔹 Get Current User
app.get("/api/user", (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.status(401).send("Not logged in");
  }
});

// 🔹 Logout
app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect(`${process.env.CLIENT_URL}/login`);
  });
});

// 🔹 Razorpay Create Order Route
app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount, // amount in paise
    currency: "INR",
    receipt: "receipt_" + Date.now(),
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error("❌ Error creating order:", err);
    res.status(500).send("Error creating order");
  }
});
// 🔹 Health Check Route (for Render)
app.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});


app.listen(process.env.PORT, () => {
  console.log(`✅ Backend running on http://localhost:${process.env.PORT}`);
});
