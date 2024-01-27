import { useEffect, useState } from "react";
import data from "../../data.json";

const handleProductCatalog = (page) => {
  const [pageProduct, setpageProduct] = useState();

  const speakers = data?.sort((a, b) => b.id - a.id).slice(0, 2);
  const earphones = data?.sort((a, b) => b.id - a.id).slice(5);
  const headphones = data?.sort((a, b) => b.id - a.id).slice(2, 5);

  useEffect(() => {
    if (page === "speakers") setpageProduct(speakers);
    if (page === "earphones") setpageProduct(earphones);
    if (page === "headphones") setpageProduct(headphones);
  }, [page]);

  return {
    pageProduct,
  };
};

export default handleProductCatalog;
