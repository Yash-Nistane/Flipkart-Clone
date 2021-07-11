import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../../../actions";
import Card from "../../../components/UI/Card";
import { generatePublicUrl } from "../../../urlConfig";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import Rating from "../../../components/UI/Rating";

import "./style.css";

/**
 * @author
 * @function ClothingAndAccessories
 **/

const ClothingAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductBySlug(match.params.slug));
  }, []);

  return (
    <div style={{ padding: "10px", width:"90%", margin:"auto" }}>
      <div
        style={{
          boxSizing: "border-box",
          padding: "10px",
          display: "flex",
          flexWrap:"wrap",
          margin:"auto"
        }}
      >
        {product.products.map((product) => (
          <div style={{
                padding:"5px",
                position:"relative", 
                width:"300px", 
                display:"flex",
                justifyContent:"center",
                margin:"5px",
                height:"500px"
              }}>
              <Link
                className="caImgContainer"
                to={`/${product.slug}/${product._id}/p`}
              >
                <img src={generatePublicUrl(product.productPictures[0].img)} />
              </Link>
              
              <div style={{position:'absolute',bottom:"25px",left:"15px"}}>
                  <div className="caProductName">{product.name}</div>
                  <div className="caProductPrice">
                    ₹ {product.price} <Rating value="4.3" />
                  </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingAndAccessories;