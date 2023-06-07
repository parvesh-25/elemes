import React from "react";
import "../category/category.css";
import dataCategory from "../../data/dataCategory";

const Category = () => {
return (
<section className="category">

  <div className="category__heading">
    <p className="category__heading-text">
      Browse Our Category <span>Receipt</span>
    </p>
  </div>

  <div className="category__card-list">
    {dataCategory.map((category) => (
    <div className="category__card" key={category.id} style={{ backgroundColor: category.color }}>
      <img src={category.image} alt="" className="category__card-img" />
      <p className="category__card-name">{category.name}</p>
      <p className="category__card-items">{category.items}</p>
    </div>
    ))}
  </div>
  <div className="category__buttons">
    <button className="category__button-prev category__button">
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="33" height="33" rx="16.5" fill="white" />
        <path
          d="M9.02582 15.8218L18.4694 7.28048C18.8838 6.90651 19.5552 6.90651 19.9706 7.28048C20.385 7.65444 20.385 8.26186 19.9706 8.63583L11.276 16.4995L19.9695 24.3631C20.3839 24.7371 20.3839 25.3445 19.9695 25.7194C19.5552 26.0934 18.8828 26.0934 18.4684 25.7194L9.02478 17.1781C8.61667 16.808 8.61668 16.191 9.02582 15.8218Z"
          fill="#8BAC3E" />
      </svg>

      Prev
    </button>
    <button className="category__button-next category__button">
      Next
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="33" height="33" rx="16.5" fill="white" />
        <g clip-path="url(#clip0_18_195)">
          <path
            d="M21.2314 15.8522L13.0695 7.69292C12.7113 7.33568 12.1311 7.33568 11.772 7.69292C11.4139 8.05015 11.4139 8.6304 11.772 8.98764L19.2866 16.4995L11.7729 24.0114C11.4148 24.3686 11.4148 24.9488 11.7729 25.307C12.1311 25.6642 12.7122 25.6642 13.0704 25.307L21.2323 17.1477C21.585 16.7942 21.585 16.2048 21.2314 15.8522Z"
            fill="#8BAC3E" />
        </g>
        <defs>
          <clipPath id="clip0_18_195">
            <rect width="18.15" height="18.15" fill="white" transform="translate(7.42505 7.42499)" />
          </clipPath>
        </defs>
      </svg>


    </button>
  </div>
</section>
);
};

export default Category;