import React, { useEffect } from "react";
import axios from "axios";

const Wishlist = () => {
  useEffect(() => {
    const res = axios
      .get(
        "https://www.mercadolivre.com.br/placa-de-video-nvidia-asus-cerberus-geforce-gtx-10-series-gtx-1050-ti-cerberus-gtx1050ti-o4g-oc-edition-4gb/p/MLB13875455?pdp_filters=category:MLB1658#searchVariation=MLB13875455&position=1&type=product&tracking_id=54a68080-cbd9-4201-b7d5-5b9f3afb07c2"
      )
      .then()
      .catch((error) => console.log(error.message));
    console.log(res.data);
  });
  return <div>This is the wishlist component</div>;
};

export default Wishlist;
