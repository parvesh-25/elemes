import React from "react";
import "../trending/trending.css";
import dataTrending from "../../data/dataTrending";


const Trending = ()=>{
return(
<section className="trending">
    <div className="trending__heading">
        <p className="trending__heading-text">
            Browse Our Trending <span>Receipt</span>
        </p>
    </div>

    <div className="trending__card-column">
        {dataTrending.map((trending) => (
        <div className="trending__card" key={trending.id} style={{ backgroundColor: trending.color }}>
            <img src={trending.image} alt="" className="trending__card-img" />
            <div className="trending__card-text">
            <p className="trending__card-title">{trending.title}</p>
            <p className="trending__card-subtitle">{trending.subtitle}</p>
            <div className="trending__rating">
                <img src={trending.star1} alt="" className="trending__rate-star" />
                <img src={trending.star2} alt="" className="trending__rate-star" />
                <img src={trending.star3} alt="" className="trending__rate-star" />
                <img src={trending.star4} alt="" className="trending__rate-star" />
                <img src={trending.star5} alt="" className="trending__rate-star" />
            </div>
            </div>
        </div>
        ))}
    </div>

<div className="trending__btn">
<button className="trending__btn-all">
        ALL Receipt
    </button>
</div>
    
</section>
)
}

export default Trending;