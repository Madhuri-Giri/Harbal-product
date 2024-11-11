import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Fade.css";

function Fade() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://img.freepik.com/free-vector/sandalwood-sticks-powder-flower-cosmetic-products-green-blurred-background-horizontal-poster-realistic-vector-illustration_1284-71361.jpg"
            alt="Slide 1"
            className="slider-image"
          />
          <div className="slider-text">
            <h2>Herbal Products</h2>
            <p>
              and mass production of chemically synthesized drugs have
              revolutionized health care in most parts of the word. However,
              large sections of the population in developing countries still
              rely on traditional practitioners and herbal medicines for their
              primary care. In Africa up to 90% and in India 70% of the
              population depend on traditional medicine to help meet their
              health care needs.
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://www.lotusherbals.com/cdn/shop/articles/How_to_Create_a_Simple_Skincare_Routine_with_Lotus_Herbal_Products.jpg?v=1681134148"
            alt="Slide 4"
            className="slider-image"
          />
          <div className="slider-text">
            <h2>Herbal Products</h2>
            <p>
              Experience the natural essence of herbal products. the development
              and mass production of chemically synthesized drugs have
              revolutionized health care in most parts of the word. However,
              large sections of the population in developing countries still
              rely on traditional practitioners and herbal medicines for their
              primary care. In Africa up to 90% and in India 70% of the
              population depend on traditional medicine to help meet their
              health care needs.
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://www.chamakkatt.com/wp-content/uploads/2023/12/herbal-product.jpeg"
            alt="Slide 3"
            className="slider-image"
          />
          <div className="slider-text">
            <h2>Herbal Products</h2>
            <p>
              Experience the natural essence of herbal products. the development
              and mass production of chemically synthesized drugs have
              revolutionized health care in most parts of the word. However,
              large sections of the population in developing countries still
              rely on traditional practitioners and herbal medicines for their
              primary care. In Africa up to 90% and in India 70% of the
              population depend on traditional medicine to help meet their
              health care needs.
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://media.licdn.com/dms/image/v2/D4E12AQHfrU-IceYIYA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687436227363?e=2147483647&v=beta&t=AcbcaSVfU_2BIzUQijsY2GhzvAgmwHXWAYK2kujp96k"
            alt="Slide 2"
            className="slider-image"
          />
          <div className="slider-text">
            <h2>Herbal Products</h2>
            <p>
              Experience the natural essence of herbal products. the development
              and mass production of chemically synthesized drugs have
              revolutionized health care in most parts of the word. However,
              large sections of the population in developing countries still
              rely on traditional practitioners and herbal medicines for their
              primary care. In Africa up to 90% and in India 70% of the
              population depend on traditional medicine to help meet their
              health care needs.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
