// this section is copied from ...

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../../context/ProductsContext";
import {
  Container,
  Images,
  Wrapper,
  Text,
  Selection,
  CarouselImg,
  Btns,
  Select,
} from "./style";
import Footer from "../Footer";
import { Rate } from "antd";
import Button from "../Botton";
import { CiHeart } from "react-icons/ci";
import { RiHeartFill } from "react-icons/ri";
import { ACTION_TYPES } from "../../context/ProductsContext/reducer";

const Product = () => {
  const param = useParams();
  const { state, dispatch } = useProductsContext();
  const [signleProduct, setSignleProduct] = useState({});
  const [sliderData, setSliderData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const res = state.newDatas.filter((product) => product.id === +param.id);
    setSignleProduct(res[0]);
  }, [state.newDatas, param.id]);

  const handleClick = (index) => {
    const slider = signleProduct?.images[index];
    setSliderData(slider);
  };
  return (
    <Container>
      <Wrapper>
        <Images>
          <img
            src={sliderData?.img || signleProduct?.img}
            width="460"
            height="518"
            alt="logo"
          />
          <CarouselImg>
            {signleProduct?.images?.map((img, i) => (
              <img
                key={img.id}
                width="110"
                height="123"
                onClick={() => handleClick(i)}
                alt={img?.title}
                src={img.img}
              />
            ))}
          </CarouselImg>
        </Images>
        <Text>
          <h4 style={{ color: "rgb(51, 51, 51)", opacity: "0.6" }}>
            <span onClick={() => navigate("/")}>Home</span> /{" "}
            <span>featuredProducts</span>
          </h4>
          <h4>{signleProduct?.title}</h4>
          <h3>${signleProduct?.price}.00</h3>
          <Rate defaultValue={signleProduct?.rate} />
          <Selection>
            <Select name="selectec size" defaultValue="select">
              <option value="select">Select Size</option>
              {signleProduct?.sizes?.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </Select>
            <Select name="selectec color" defaultValue="select">
              <option value="select">Select Color</option>
              {signleProduct?.colors?.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </Select>
          </Selection>
          <Btns>
            <span>
              <Button>ADD TO CART</Button>
            </span>
            <span>
              {" "}
              {signleProduct?.liked ? (
                <RiHeartFill />
              ) : (
                <CiHeart
                  onClick={() =>
                    dispatch({
                      type: ACTION_TYPES.LIKED_ITEM,
                      payload: { product_id: signleProduct.id },
                    })
                  }
                  style={{
                    border: "1px solid rgb(29, 29, 29)",
                    borderRadius: "5px",
                    width: "38px",
                    height: "38px",
                  }}
                  size={25}
                />
              )}{" "}
            </span>
          </Btns>
          <h4>Product Details</h4>
          <p>{signleProduct?.description}</p>
        </Text>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
