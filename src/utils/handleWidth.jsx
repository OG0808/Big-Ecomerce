import { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize ";


const useWidth = () => {
  const { width } = useScreenSize();
   
  const [screen, setScreen] = useState();
  const [footer, seTfooter] = useState()
  
  useEffect(() => {
    if (width <= 768) {
      setScreen("tablet");
    } else{
        setScreen("desktop")
    }
  }, [width]);


  if (footer<=768) {
    seTfooter
  }

  return {
    screen
  };
};

export default useWidth;
