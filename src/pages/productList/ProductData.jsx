import Product1 from "../../assets/images/product1.png";
import Product2 from "../../assets/images/product2.png";
import Product3 from "../../assets/images/product3.png";
import Product4 from "../../assets/images/product4.png";
import Product5 from "../../assets/images/product5.png";
import Product6 from "../../assets/images/product6.png";
import { FaShoppingCart } from "react-icons/fa";

export const products = [
  {
    id: 1,
    name: "Cacti Plant",
    price: 19.99,
    icon: FaShoppingCart,
    visit: "/",
    image: Product1,
  },
  {
    id: 2,
    name: "Cactus Plant",
    price: 11.99,
    icon: FaShoppingCart,
    visit: "/",
    image: Product2,
  },
  {
    id: 3,
    name: "Aloe Vera Plant",
    price: 7.99,
    icon: FaShoppingCart,
    visit: "/",
    image: Product3,
  },

  {
    id: 4,
    name: "Succulent Plant",
    price: 5.99,
    icon: FaShoppingCart,
    visit: "/",
    image: Product4,
  },

  {
    id: 5,
    name: "Succulent Plant",
    price: 10.99,
    icon: FaShoppingCart,
    visit: "/",
    image: Product5,
  },

  {
    id: 6,
    name: "Green Plant",
    price: 8.99,
    icon: FaShoppingCart,
    visit: "/",
    image: Product6,
  },
];
