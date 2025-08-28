// components/CardGallery.jsx
import React from "react";
import ProductCard from "./ProductCard";
import "./Cardgallery.css";

const CardGallery = () => {
  const cardProducts = [
    {
      id: 1,
      name: "Beyonce Gold Pendant",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlbpCKySXMdRGlVT5hzEoezrw7o65UrNdpFa7-ccFVpv7FX7oA91-H8rb8sPPYJQLUkGJv53X2UJgcSQdfuHnMbAZbELR7LYJCQR1i882sn8LyqUGRZg",
      tel: "+123 456 789",
      email: "B@beyonce.com",
      price: 1299,
    },
    {
      id: 2,
      name: "Beyonce 2 Diamond Ring",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlbpCKySXMdRGlVT5hzEoezrw7o65UrNdpFa7-ccFVpv7FX7oA91-H8rb8sPPYJQLUkGJv53X2UJgcSQdfuHnMbAZbELR7LYJCQR1i882sn8LyqUGRZg",
      tel: "+321 654 987",
      email: "B2@beyonce.com",
      price: 799,
    },
    {
      id: 3,
      name: "Gold Necklace Set",
      img: "https://images.meesho.com/images/products/87877510/qsyih_1200.jpg",
      tel: "+111 222 333",
      email: "b3@beyonce.com",
      price: 1599,
    },
    {
      id: 4,
      name: "Traditional Jewellery",
      img: "https://images.meesho.com/images/products/314436847/e3tw3_1200.jpg",
      tel: "+111 222 333",
      email: "b3@beyonce.com",
      price: 1199,
    },
    {
      id: 5,
      name: "Antique Gold Set",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIu-b3VFOqm6w6M7RxM4satWxANMH6DI_YRM1AmUDhsw4sI4MwJzj5FnmoLvuWQZMxe7wZjJF3T0ew3pLhnRs4IwFemwTTM4XHW2EtAXKAdNV4mBKSqLxfGQ",
      tel: "+111 222 333",
      email: "b3@beyonce.com",
      price: 999,
    },
    {
      id: 6,
      name: "Elegant Pendant",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDo4PKx3I6Fc6DZtEpJ73db15xrb77zPCOh8eQ_G3AQ-kbY-sUHruzmGi0K8ja7vPhpVwk804TPPd9tTynznPrdI65GS03Sv8Mra96tNe7gPC6HE_Hqdog2o2XnJw85vLpj5Ugyg&usqp=CAc",
      tel: "+111 222 333",
      email: "b3@beyonce.com",
      price: 899,
    },
    {
      id: 7,
      name: "Kundan Earrings",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsq1_WYSbcvjYftV7pL4VPVbuM1ZO8QWGvdMZPgCxX_jACAqh9xkNSvyVM9tF62iDhzsJwwg6Tt0V_DbMboMczkUzOj-3eJxYpTnSdzjRQfvPJk25jTmLH3UJCxsv4pg7S2GDnDA&usqp=CAc",
      tel: "+111 222 333",
      email: "b3@beyonce.com",
      price: 649,
    },
    {
      id: 8,
      name: "Bridal Jewellery Set",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR-ZtyYIUFGQnRIEKKqNKDkXW6z8CLoBufiA_ppkM7C2C44BQJMahLQ-bqMrdp2FOWAX5_lM7aXx3jOzqj6bhm1ySP8End4L_1kzuv7LfupF3baTjEljXodBP1S4nNylxHUtjke-Q&usqp=CAc",
      tel: "+111 222 333",
      email: "b3@beyonce.com",
      price: 1799,
    },
    {
      id: 9,
      name: "Designer Necklace",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_Q5Xv1DFwWRFV4hfTLvbJE3G-FqcK7uApKY1jXOYsAnI3rTEb8QN5rwgRr8n3ofF-ijlni226-_rTlZY_VHX-eqSQSquBoJt_LjgFbZCQMWsTRuyzWeSHueT44sDSV7Rptw7e1m4&usqp=CAc",
      tel: "+111 222 333",
      email: "b3@beyonce.com",
      price: 1399,
    },
    {
      id: 10,
      name: "Lakshmi Temple Jewellery",
      img: "https://gehnashop.com/cdn/shop/files/antique-golden-goddess-lakshmi-temple-jewellery-for-weddings-by-gehna-shop-gehna-shop-buy-temple-jewellery-latest-designs-for-weddings-gehnashop-com-41752070291771.jpg?v=1688062322",
      tel: "+111 222 333",
      email: "b3@beyonce.com",
      price: 2099,
    },
    {
      id: 11,
      name: "Classic Necklace",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_Q5Xv1DFwWRFV4hfTLvbJE3G-FqcK7uApKY1jXOYsAnI3rTEb8QN5rwgRr8n3ofF-ijlni226-_rTlZY_VHX-eqSQSquBoJt_LjgFbZCQMWsTRuyzWeSHueT44sDSV7Rptw7e1m4&usqp=CAc",
      tel: "+111 222 333",
      email: "b3@beyonce.com",
      price: 1149,
    },
    {
      id: 12,
      name: "Wedding Gold Jewellery",
      img: "https://gehnashop.com/cdn/shop/files/antique-golden-goddess-lakshmi-temple-jewellery-for-weddings-by-gehna-shop-gehna-shop-buy-temple-jewellery-latest-designs-for-weddings-gehnashop-com-41752070291771.jpg?v=1688062322",
      tel: "+111 222 333",
      email: "b3@beyonce.com",
      price: 2499,
    },
    {
      id: 13,
      name: "Ruby Embedded Set",
      img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/APRIL/3/X5sEYqun_d46ec16fa8bb4321812da48c1eafcad5.jpg",
      tel: "+111 222 333",
      email: "b3@beyonce.com",
      price: 1699,
    },
    {
      id: 14,
      name: "Designer Gold Set",
      img: "https://jewellerykhazana.com/wp-content/uploads/2024/10/Your-paragraph-text-33.jpg",
      tel: "+111 222 333",
      email: "b3@beyonce.com",
      price: 1499,
    },
    {
      id: 15,
      name: "Luxury Jaipur Set",
      img: "https://assets.cntraveller.in/photos/63c94b5ed7caa4e531855005/16:9/w_2580,c_limit/jewellery-jaipur-lead-fin.jpg",
      tel: "+111 222 333",
      email: "b3@beyonce.com",
      price: 1999,
    },
  ];

  return (
    <div className="card-grid">
      {cardProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardGallery;
