// components/Products.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const cardProducts = [
  {
    id: 1,
    name: "Golden Necklace",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlbpCKySXMdRGlVT5hzEoezrw7o65UrNdpFa7-ccFVpv7FX7oA91-H8rb8sPPYJQLUkGJv53X2UJgcSQdfuHnMbAZbELR7LYJCQR1i882sn8LyqUGRZg",
    tel: "+123 456 789",
    email: "gold@store.com",
    price: "₹5,499",
  },
  {
    id: 2,
    name: "Elegant Earrings",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlbpCKySXMdRGlVT5hzEoezrw7o65UrNdpFa7-ccFVpv7FX7oA91-H8rb8sPPYJQLUkGJv53X2UJgcSQdfuHnMbAZbELR7LYJCQR1i882sn8LyqUGRZg",
    tel: "+321 654 987",
    email: "earrings@shop.com",
    price: "₹899",
  },
  {
    id: 3,
    name: "Antique Choker",
    img: "https://images.meesho.com/images/products/87877510/qsyih_1200.jpg",
    tel: "+111 222 333",
    email: "choker@shop.com",
    price: "₹3,299",
  },
  {
    id: 4,
    name: "Designer Necklace Set",
    img: "https://images.meesho.com/images/products/314436847/e3tw3_1200.jpg",
    email: "design@shop.com",
    price: "₹4,799",
  },
  {
    id: 5,
    name: "Classic Pendant",
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIu-b3VFOqm6w6M7RxM4satWxANMH6DI_YRM1AmUDhsw4sI4MwJzj5FnmoLvuWQZMxe7wZjJF3T0ew3pLhnRs4IwFemwTTM4XHW2EtAXKAdNV4mBKSqLxfGQ",
    tel: "+111 222 333",
    email: "pendant@shop.com",
    price: "₹1,299",
  },
  {
    id: 6,
    name: "Luxury Necklace",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDo4PKx3I6Fc6DZtEpJ73db15xrb77zPCOh8eQ_G3AQ-kbY-sUHruzmGi0K8ja7vPhpVwk804TPPd9tTynznPrdI65GS03Sv8Mra96tNe7gPC6HE_Hqdog2o2XnJw85vLpj5Ugyg&usqp=CAc",
    tel: "+111 222 333",
    email: "lux@shop.com",
    price: "₹9,999",
  },
  {
    id: 7,
    name: "Wedding Special",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsq1_WYSbcvjYftV7pL4VPVbuM1ZO8QWGvdMZPgCxX_jACAqh9xkNSvyVM9tF62iDhzsJwwg6Tt0V_DbMboMczkUzOj-3eJxYpTnSdzjRQfvPJk25jTmLH3UJCxsv4pg7S2GDnDA&usqp=CAc",
    tel: "+111 222 333",
    email: "wedding@shop.com",
    price: "₹12,499",
  },
  {
    id: 8,
    name: "Stone Choker",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR-ZtyYIUFGQnRIEKKqNKDkXW6z8CLoBufiA_ppkM7C2C44BQJMahLQ-bqMrdp2FOWAX5_lM7aXx3jOzqj6bhm1ySP8End4L_1kzuv7LfupF3baTjEljXodBP1S4nNylxHUtjke-Q&usqp=CAc",
    tel: "+111 222 333",
    email: "stone@shop.com",
    price: "₹2,199",
  },
  {
    id: 9,
    name: "Traditional Set",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_Q5Xv1DFwWRFV4hfTLvbJE3G-FqcK7uApKY1jXOYsAnI3rTEb8QN5rwgRr8n3ofF-ijlni226-_rTlZY_VHX-eqSQSquBoJt_LjgFbZCQMWsTRuyzWeSHueT44sDSV7Rptw7e1m4&usqp=CAc",
    tel: "+111 222 333",
    email: "trad@shop.com",
    price: "₹6,899",
  },
  {
    id: 10,
    name: "Pearl Chain",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRHbyl9HKr_OBSzaylX9S5e-GuvQTVgXnRoGqEYbjoDECrfuUgIEd3njqSnJAXCzoKcr0sc-4meWmnRPj1foytJgqYvJNifbRORk3JQ7lR7s8j-3HY4R9sadLShHo8FPZ922lr2zTgV9A&usqp=CAc",
    email: "pearl@shop.com",
    price: "₹3,499",
  },
  {
    id: 11,
    name: "Ruby Necklace",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_Q5Xv1DFwWRFV4hfTLvbJE3G-FqcK7uApKY1jXOYsAnI3rTEb8QN5rwgRr8n3ofF-ijlni226-_rTlZY_VHX-eqSQSquBoJt_LjgFbZCQMWsTRuyzWeSHueT44sDSV7Rptw7e1m4&usqp=CAc",
    tel: "+111 222 333",
    email: "ruby@shop.com",
    price: "₹7,199",
  },
  {
    id: 12,
    name: "Lakshmi Antique",
    img: "https://gehnashop.com/cdn/shop/files/antique-golden-goddess-lakshmi-temple-jewellery-for-weddings-by-gehna-shop-gehna-shop-buy-temple-jewellery-latest-designs-for-weddings-gehnashop-com-41752070291771.jpg?v=1688062322",
    tel: "+111 222 333",
    email: "lakshmi@shop.com",
    price: "₹11,999",
  },
  {
    id: 13,
    name: "Diamond Cut Chain",
    img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/APRIL/3/X5sEYqun_d46ec16fa8bb4321812da48c1eafcad5.jpg",
    tel: "+111 222 333",
    email: "diamond@shop.com",
    price: "₹2,699",
  },
  {
    id: 14,
    name: "Temple Necklace",
    img: "https://jewellerykhazana.com/wp-content/uploads/2024/10/Your-paragraph-text-33.jpg",
    tel: "+111 222 333",
    email: "temple@shop.com",
    price: "₹4,299",
  },
  {
    id: 15,
    name: "Royal Jaipur Set",
    img: "https://assets.cntraveller.in/photos/63c94b5ed7caa4e531855005/16:9/w_2580,c_limit/jewellery-jaipur-lead-fin.jpg",
    tel: "+111 222 333",
    email: "royal@shop.com",
    price: "₹8,899",
  },
];

const Products = () => {
  return (
    <div className="products-container">
      <h1>All Products</h1>
      <div className="products-grid">
        {cardProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.img} alt={product.name} />
              <h2>{product.name}</h2>
              <p className="price">{product.price}</p>
              <p>{product.tel}</p>
              <p>{product.email}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
