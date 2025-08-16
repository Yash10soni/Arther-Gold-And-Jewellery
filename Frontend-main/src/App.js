import Card from "./components/Card";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardGallery from "./components/CardGallery";
import ProductDetail from "./components/ProductDetail";
import "./styles.css";
import Frontpage from "./components/Frontpage";
import InstagramFeed from "./components/InstagramFeed";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import BrandStory from "./components/BrandStory";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { CheckoutPage } from "./components/CheckoutPage"; 

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Frontpage /> */}
        <HeroSection />

        {/* <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
        <div className="card-grid">
          <Card
            name="beyonce"
            img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlbpCKySXMdRGlVT5hzEoezrw7o65UrNdpFa7-ccFVpv7FX7oA91-H8rb8sPPYJQLUkGJv53X2UJgcSQdfuHnMbAZbELR7LYJCQR1i882sn8LyqUGRZg"
            tel="+123 456 789"
            email="B@beyonce.com"
          />
          <Card
            name="beyonce"
            img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlbpCKySXMdRGlVT5hzEoezrw7o65UrNdpFa7-ccFVpv7FX7oA91-H8rb8sPPYJQLUkGJv53X2UJgcSQdfuHnMbAZbELR7LYJCQR1i882sn8LyqUGRZg"
            tel="+123 456 789"
            email="B@beyonce.com"
          />
          <Card
            name="beyonce"
            img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlbpCKySXMdRGlVT5hzEoezrw7o65UrNdpFa7-ccFVpv7FX7oA91-H8rb8sPPYJQLUkGJv53X2UJgcSQdfuHnMbAZbELR7LYJCQR1i882sn8LyqUGRZg"
            tel="+123 456 789"
            email="B@beyonce.com"
          />
          <Card
            name="beyonce"
            img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlbpCKySXMdRGlVT5hzEoezrw7o65UrNdpFa7-ccFVpv7FX7oA91-H8rb8sPPYJQLUkGJv53X2UJgcSQdfuHnMbAZbELR7LYJCQR1i882sn8LyqUGRZg"
            tel="+123 456 789"
            email="B@beyonce.com"
          />
          <Card
            name="beyonce"
            img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlbpCKySXMdRGlVT5hzEoezrw7o65UrNdpFa7-ccFVpv7FX7oA91-H8rb8sPPYJQLUkGJv53X2UJgcSQdfuHnMbAZbELR7LYJCQR1i882sn8LyqUGRZg"
            tel="+123 456 789"
            email="B@beyonce.com"
          />
          <Card
            name="beyonce"
            img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlbpCKySXMdRGlVT5hzEoezrw7o65UrNdpFa7-ccFVpv7FX7oA91-H8rb8sPPYJQLUkGJv53X2UJgcSQdfuHnMbAZbELR7LYJCQR1i882sn8LyqUGRZg"
            tel="+123 456 789"
            email="B@beyonce.com"
          />
          <Card
            name="beyonce"
            img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlbpCKySXMdRGlVT5hzEoezrw7o65UrNdpFa7-ccFVpv7FX7oA91-H8rb8sPPYJQLUkGJv53X2UJgcSQdfuHnMbAZbELR7LYJCQR1i882sn8LyqUGRZg"
            tel="+123 456 789"
            email="B@beyonce.com"
          />
          <Card
            name="beyonce"
            img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlbpCKySXMdRGlVT5hzEoezrw7o65UrNdpFa7-ccFVpv7FX7oA91-H8rb8sPPYJQLUkGJv53X2UJgcSQdfuHnMbAZbELR7LYJCQR1i882sn8LyqUGRZg"
            tel="+123 456 789"
            email="B@beyonce.com"
          />
          <Card
            name="beyonce"
            img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlbpCKySXMdRGlVT5hzEoezrw7o65UrNdpFa7-ccFVpv7FX7oA91-H8rb8sPPYJQLUkGJv53X2UJgcSQdfuHnMbAZbELR7LYJCQR1i882sn8LyqUGRZg"
            tel="+123 456 789"
            email="B@beyonce.com"
          />
          <Card
            name="beyonce"
            img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlbpCKySXMdRGlVT5hzEoezrw7o65UrNdpFa7-ccFVpv7FX7oA91-H8rb8sPPYJQLUkGJv53X2UJgcSQdfuHnMbAZbELR7LYJCQR1i882sn8LyqUGRZg"
            tel="+123 456 789"
            email="B@beyonce.com"
          />
        </div> */}
        <Routes>
          {/* <Route path="/" element={<CardGallery />} /> */}
          <Route
            path="/"
            element={
              <>
                <CardGallery />
                <BrandStory />
                <InstagramFeed />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
           <Route path="/login" element={<Login />} /> {/* 👈 Add this */}
           <Route path="/profile" element={<Profile/>} /> {/* 👈 Add this */}
           <Route path="/checkout" element={<CheckoutPage />} /> {/* 👈 Add this */}
        </Routes>
        <BrandStory />
        <Testimonials />
        <InstagramFeed />
        <Footer />
      </Router>
    </>
  );
}