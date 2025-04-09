import { AiFillStar } from "react-icons/ai";

const data = [
  {
    img: "https://media.itechstore.com.np/f_webp/img/product/variants/5a3e4dd4-5f7c-48e5-b9f4-e04b9e41f53d/iphone-14-product-red-main.png", // Example image URL
    title: "Smartphone XYZ",
    star: <AiFillStar  className="rating-star" />, // Star icon from react-icons
    reviews: "(123 reviews)", // Number of reviews
    prevPrice: 599.99, // Previous price
    newPrice: 499.99, // New discounted price
    company: "TechCorp",
    color: "Black",
    category: "Smartphones", // Corrected category from `categoryL`
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbF_Gnc53o-4_NSrBQvpj_KCwG3rUNibFHYw&s://via.placeholder.com/150", // Example image URL
    title: "Laptop ABC",
    star: <AiFillStar  className="rating-star"/>, // Star icon
    reviews: 2500, // Number of reviews
    prevPrice: 999.99,
    newPrice: 899.99,
    company: "LaptopWorld",
    color: "Silver",
    category: "Laptops",
  },
  {
    img: "https://iremaxnepal.com.np/wp-content/uploads/2024/11/RB-705HB-Web-1.webp", // Example image URL
    title: "Wireless Headphones",
    star: <AiFillStar className="rating-star" />,
    reviews: 800,
    prevPrice: 150.00,
    newPrice: 120.00,
    company: "AudioPlus",
    color: "White",
    category: "Accessories",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZsUnzZB0QPlQxNPqFugwoUBRJSnbsU8uQw&s", // Example image URL
    title: "Smartwatch Pro",
    star: <AiFillStar  className="rating-star" />,
    reviews: 350,
    prevPrice: 199.99,
    newPrice: 149.99,
    company: "WearTech",
    color: "Blue",
    category: "Watches",
  },
];

export default data;
