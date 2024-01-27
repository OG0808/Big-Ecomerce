import { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize ";


const useWidth = () => {
  const { width } = useScreenSize();
   
  const [screen, setScreen] = useState();
  
  useEffect(() => {
    if (width <= 768) {
      setScreen("tablet");
    } else{
        setScreen("desktop")
    }
  }, [width]);

  return {
    screen
  };
};

export default useWidth;
