import { useNavigate } from "react-router-dom";

export const handleSeeProduct = () => {
  const navigate = useNavigate();

  const handleSee = (productSlug) => {
    navigate(`/product/${productSlug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSeeShop = (productSlug) => {
    navigate(`${productSlug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    handleSee,
    handleSeeShop
  };
};
