const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const pool = require("./db");
require("dotenv").config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const result = await pool.query("SELECT * FROM userss WHERE id = $1", [id]);
    done(null, result.rows[0]);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const username = profile.displayName;
      const email = profile.emails[0].value;

      try {
        // Check if user already exists by email
        const userCheck = await pool.query("SELECT * FROM userss WHERE email = $1", [email]);

        if (userCheck.rows.length > 0) {
          return done(null, userCheck.rows[0]);
        } else {
          // Store default password (can be anything, since login is Google-only)
          const defaultPassword = "google_oauth_placeholder";
          const newUser = await pool.query(
            "INSERT INTO userss (username, email, password) VALUES ($1, $2, $3) RETURNING *",
            [username, email, defaultPassword]
          );
          return done(null, newUser.rows[0]);
        }
      } catch (err) {
        return done(err, null);
      }
    }
  )
);
