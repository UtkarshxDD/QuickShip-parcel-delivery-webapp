import React, { useState } from "react";

const Tracking = () => {
  const [activeTab, setActiveTab] = useState("trackingNumber");

  const renderContent = () => {
    switch (activeTab) {
      case "trackingNumber":
        return (
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter Tracking Number"
              className="p-[0.75rem] border border-gray-300 rounded-lg w-[80%] mb-[1rem]"
            />
            <button className="bg-[#2874fc] text-white px-[2rem] py-[0.75rem] rounded-lg hover:bg-[#1a63d8] transition duration-300">
              Track
            </button>
          </div>
        );
      case "phoneNumber":
        return (
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="p-[0.75rem] border border-gray-300 rounded-lg w-[80%] mb-[1rem]"
            />
            <button className="bg-[#2874fc] text-white px-[2rem] py-[0.75rem] rounded-lg hover:bg-[#1a63d8] transition duration-300">
              Track
            </button>
          </div>
        );
      case "email":
        return (
          <div className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-[0.75rem] border border-gray-300 rounded-lg w-[80%] mb-[1rem]"
            />
            <button className="bg-[#2874fc] text-white px-[2rem] py-[0.75rem] rounded-lg hover:bg-[#1a63d8] transition duration-300">
              Track
            </button>
          </div>
        );
      case "orderId":
        return (
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter Order ID"
              className="p-[0.75rem] border border-gray-300 rounded-lg w-[80%] mb-[1rem]"
            />
            <button className="bg-[#2874fc] text-white px-[2rem] py-[0.75rem] rounded-lg hover:bg-[#1a63d8] transition duration-300">
              Track
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-[90%] mx-auto pt-[2rem] pb-[3rem] bg-gray-50">
      <h1 className="text-[2.5rem] font-bold text-[#2874fc] mb-[1.5rem] text-center">
        Track Your Parcel
      </h1>
      <div className="flex justify-center mb-[2rem]">
        <button
          className={`px-[1.5rem] py-[0.75rem] text-[1.2rem] font-medium ${
            activeTab === "trackingNumber"
              ? "text-white bg-[#2874fc]"
              : "text-gray-700 bg-gray-200"
          } rounded-l-lg`}
          onClick={() => setActiveTab("trackingNumber")}
        >
          Tracking Number
        </button>
        <button
          className={`px-[1.5rem] py-[0.75rem] text-[1.2rem] font-medium ${
            activeTab === "phoneNumber"
              ? "text-white bg-[#2874fc]"
              : "text-gray-700 bg-gray-200"
          }`}
          onClick={() => setActiveTab("phoneNumber")}
        >
          Phone Number
        </button>
        <button
          className={`px-[1.6rem] py-[0.75rem] text-[1.2rem] font-medium ${
            activeTab === "email"
              ? "text-white bg-[#2874fc]"
              : "text-gray-700 bg-gray-200"
          }`}
          onClick={() => setActiveTab("email")}
        >
          Email
        </button>
        <button
          className={`px-[1.5rem] py-[0.75rem] text-[1.2rem] font-medium ${
            activeTab === "orderId"
              ? "text-white bg-[#2874fc]"
              : "text-gray-700 bg-gray-200"
          } rounded-r-lg`}
          onClick={() => setActiveTab("orderId")}
        >
          Order ID
        </button>
      </div>
      <div className="tracking-content">{renderContent()}</div>
    </div>
  );
};

export default Tracking;
