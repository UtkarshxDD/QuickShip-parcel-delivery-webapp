import React from "react";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Anil Kumar",
    review:
      "QuickShip transformed my delivery experience! The process was smooth, and my parcel reached on time. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    review:
      "Fantastic service! The tracking was spot-on, and I received my parcel in record time. Kudos to the team!",
  },
  {
    name: "Raj Patel",
    review:
      "A lifesaver for urgent deliveries. I’ve used QuickShip multiple times, and each time the service has exceeded my expectations.",
  },
  {
    name: "Sneha Rao",
    review:
      "Very impressed with the professionalism and speed. The interface is user-friendly, and my experience was seamless.",
  },
  // Add more reviews as needed
];

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
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
    <div className="mt-16 px-4">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">
          Customer Reviews
        </h3>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto" />
      </div>
      <Carousel {...settings} className="w-full max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 ease-in-out duration-300"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {review.name}
            </h4>
            <p className="text-gray-600 text-base">{review.review}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomerReviews;
