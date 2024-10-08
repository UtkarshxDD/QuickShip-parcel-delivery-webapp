import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const [count, setCount] = useState({ parcels: 0, cities: 0, customers: 0 });
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setCount((prev) => ({
          parcels: Math.min(prev.parcels + 100, 10000),
          cities: Math.min(prev.cities + 5, 50),
          customers: Math.min(prev.customers + 50, 5000),
        }));
      }, 100);
      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <div className="flex flex-col w-[90%] mx-auto pt-[2rem] pb-[3rem] bg-gray-50">
      {/* Hero Section */}
      <div className="text-center mb-[3rem]">
        <h1 className="text-[3rem] font-bold text-[#2874fc] mb-[1rem]">
          About QuickShip
        </h1>
        <p className="text-[1.25rem] text-gray-700 max-w-2xl mx-auto">
          Revolutionizing parcel delivery with speed, security, and trust. Our
          goal is to make shipping as seamless as possible, connecting senders
          and travelers efficiently.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col md:flex-row items-center md:space-x-[2rem] mb-[3rem] px-[1rem] md:px-0">
        <div className="md:w-1/2">
          <h2 className="text-[2.5rem] font-semibold text-[#2874fc] mb-[1rem]">
            Our Mission
          </h2>
          <p className="text-[1.2rem] text-gray-600 leading-relaxed">
            At QuickShip, our mission is to connect people and parcels in the
            most efficient way possible. We believe that everyone should have
            access to fast, secure, and reliable delivery services, whether
            you're sending a gift to a loved one or a crucial document to a
            business partner.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-[2rem] md:mt-0">
          <img
            src="/our-mission.jpeg"
            alt="Our Mission"
            className="w-full max-w-[500px] h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mb-[3rem] px-[1rem] md:px-0">
        <h2 className="text-[2.5rem] font-semibold text-[#2874fc] mb-[1.5rem] text-center">
          Our Story
        </h2>
        <div className="space-y-[2rem]">
          <div className="flex flex-col md:flex-row items-center md:space-x-[2rem]">
            <div className="md:w-1/2">
              <h3 className="text-[1.75rem] font-medium text-gray-800 mb-[1rem]">
                Founded in 2024
              </h3>
              <p className="text-[1.1rem] text-gray-600 leading-relaxed">
                QuickShip was born out of a simple idea: why wait days for a
                parcel when it can be delivered in hours? We started our journey
                to bridge the gap between senders and travelers, creating a
                platform that leverages everyday travel to expedite parcel
                delivery.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center mt-[2rem] md:mt-0">
              <img
                src="/founded.jpeg"
                alt="Founded in 2024"
                className="w-full max-w-[500px] h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="mb-[3rem] px-[1rem] md:px-0">
        <h2 className="text-[2.5rem] font-semibold text-[#2874fc] mb-[1.5rem] text-center">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
          <div className="flex flex-col items-center text-center">
            <img
              src="/kaustubh.jpg"
              alt="Kaustubh Sharma"
              className="w-[12rem] h-[15rem] rounded-full mb-[1rem] shadow-lg object-cover"
            />
            <h3 className="text-[1.5rem] font-medium text-gray-800 mb-[0.5rem]">
              Kaustubh Sharma
            </h3>
            <p className="text-[1.1rem] text-gray-600">Dev and Blockchain</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="masti.JPG"
              alt="Utkarsh Singh"
              className="w-[[12rem] h-[15rem] rounded-full mb-[1rem] shadow-lg object-cover"
            />
            <h3 className="text-[1.5rem] font-medium text-gray-800 mb-[0.5rem]">
              Utkarsh Singh
            </h3>
            <p className="text-[1.1rem] text-gray-600">Dev Lead</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/kartik.jpeg"
              alt="Kartik Shivhare"
              className="w-[[12rem] h-[15rem] rounded-full mb-[1rem] shadow-lg object-cover"
            />
            <h3 className="text-[1.5rem] font-medium text-gray-800 mb-[0.5rem]">
              Kartik Shivhare
            </h3>
            <p className="text-[1.1rem] text-gray-600">Blockchain Lead</p>
          </div>
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="flex flex-col items-center mb-[3rem] px-[1rem] md:px-0">
        <h2 className="text-[2.5rem] font-semibold text-[#2874fc] mb-[1.5rem] text-center">
          Our Impact
        </h2>
        <div className="flex flex-col md:flex-row justify-around w-full text-center">
          <div ref={ref} className="mb-[1.5rem] md:mb-0 animate-count">
            <h3 className="text-[2.5rem] font-bold text-[#2874fc]">
              {count.parcels.toLocaleString()}
            </h3>
            <p className="text-[1.2rem] text-gray-600">Parcels Delivered</p>
          </div>
          <div ref={ref} className="mb-[1.5rem] md:mb-0 animate-count">
            <h3 className="text-[2.5rem] font-bold text-[#2874fc]">
              {count.cities.toLocaleString()}
            </h3>
            <p className="text-[1.2rem] text-gray-600">Cities Covered</p>
          </div>
          <div ref={ref} className="animate-count">
            <h3 className="text-[2.5rem] font-bold text-[#2874fc]">
              {count.customers.toLocaleString()}
            </h3>
            <p className="text-[1.2rem] text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center px-[1rem] md:px-0">
        <h2 className="text-[2.5rem] font-semibold text-[#2874fc] mb-[1rem]">
          Join Our Journey
        </h2>
        <p className="text-[1.2rem] text-gray-600 mb-[1.5rem]">
          Whether you're looking to send a parcel or help us deliver, QuickShip
          is your go-to platform for fast and secure delivery.
        </p>
        <button className="bg-[#2874fc] text-white px-[2rem] py-[0.75rem] rounded-lg text-[1.1rem] font-semibold hover:bg-[#1a63d8] transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
