"use client";
import { App_products } from "@/utils/product";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider className="text-center my-5 py-5" {...settings}>
      {App_products.map((product, index) => (
        <div
          className="py-10 transition hover: ease-in duration-300 hover:delay-300 hover:scale-110"
          key={product.name}>
          <Link href={`products/${index + 1}`}>
            <div>
              <img src={product.img} alt="" width={370} height={374} />
            </div>

            <div className="font-bold">
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default Products;
