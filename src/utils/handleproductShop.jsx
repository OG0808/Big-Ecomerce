import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";
import { useEffect, useState } from "react";
import { handleSeeProduct } from "./handleSeeProduct";

const handleproductShop = (name) => {
  const navigate = useNavigate();
  const { addItem, decreaseItem } = useCartStore();
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCount(0);
  }, [name, check]);

  const handleAddItem = (product) => {
    setCount(count + 1);
    addItem(product);
  };

  const handleDecreaseItem = (product) => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      decreaseItem(product);
    }
  };

  const { handleSee } = handleSeeProduct();

  const hadleBack = () => {
    if (name === "XX99 Mark II Headphones") navigate("/productcatalog/headphones");
    if (name === "XX99 Mark I Headphones") navigate("/productcatalog/headphones");
    if (name === "XX59 Headphones") navigate("/productcatalog/headphones");
    if (name === "ZX9 Speaker") navigate("/productcatalog/speakers");
    if (name === "ZX7 Speaker") navigate("/productcatalog/speakers");
    if (name === "YX1 Wireless Earphones") navigate("/productcatalog/earphones");
  };
  return {
    hadleBack,
    setCheck,
    handleAddItem,
    handleDecreaseItem,
    handleSee,
    count,
    check
  };
};

export default handleproductShop;
