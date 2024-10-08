import React, { useState } from "react";
import { FaSearchLocation, FaClipboardList } from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TrackingSection from "./TrackingSection";

const TrackingSupport = () => {
  // const [trackingNumber, setTrackingNumber] = useState("");

  // const handleTrackingInputChange = (e) => {
  //   setTrackingNumber(e.target.value);
  // };

  // const handleTrackParcel = () => {
  //   // Implement tracking logic here
  // };

  return (
    <div className="flex flex-col w-[90%] mx-auto pt-[2rem] pb-[3rem] bg-gray-50">
      {/* Hero Section
      <div className="text-center mb-[3rem]">
        <h1 className="text-[3rem] font-bold text-[#2874fc] mb-[1rem]">
          Track Your Parcel
        </h1>
        <p className="text-[1.25rem] text-gray-700 max-w-2xl mx-auto">
          Enter your tracking number to get real-time updates on your parcel's
          status.
        </p>
      </div> */}

      {/* Tracking Input Section
      <div className="flex justify-center items-center mb-[3rem]">
        <input
          type="text"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={handleTrackingInputChange}
          className="w-[60%] md:w-[50%] p-[0.75rem] border-2 border-[#2874fc] rounded-l-lg text-[1.2rem] focus:outline-none"
        />
        <button
          onClick={handleTrackParcel}
          className="bg-[#2874fc] text-white p-[0.75rem] rounded-r-lg hover:bg-[#1a63d8] transition duration-300 .ml-20"
        >
          Track
        </button>
      </div> */}
      <TrackingSection></TrackingSection>

      {/* FAQs Section */}
      <div className="flex flex-col my-[3rem]">
        <div className="flex flex-col gap-[0.2rem] mx-auto items-center mb-[1rem]">
          <h3 className="text-bold text-[2.5rem] underline-offset-4 text-[#2874fc]">
            Frequently Asked Questions
          </h3>
          <div className="h-[0.3rem] w-[12rem] bg-[#2874fc] rounded-lg" />
        </div>
        <div className="w-[80%] mx-auto flex flex-col gap-[1.5rem]">
          <Accordion className="border border-[#2874fc] rounded-lg shadow-md">
            <AccordionSummary
              expandIcon={<AddCircleIcon style={{ color: "#2874fc" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="font-bold text-[#2874fc] text-[1.2rem]">
                How can I track my parcel?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-gray-700">
                You can track your parcel in real-time through our website. Once
                your parcel is assigned to a traveler, you'll receive updates
                and be able to monitor its progress until delivery.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="border border-[#2874fc] rounded-lg shadow-md">
            <AccordionSummary
              expandIcon={<AddCircleIcon style={{ color: "#2874fc" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="font-bold text-[#2874fc] text-[1.2rem]">
                How do I ensure my parcel is secure?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-gray-700">
                We ensure that all parcels are securely handled by verified
                travelers. Additionally, parcels are only transported in AC
                coaches to minimize the risk of damage.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="border border-[#2874fc] rounded-lg shadow-md">
            <AccordionSummary
              expandIcon={<AddCircleIcon style={{ color: "#2874fc" }} />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className="font-bold text-[#2874fc] text-[1.2rem]">
                What if my parcel is delayed?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-gray-700">
                If your parcel is delayed, our support team will provide
                real-time updates and assist you in tracking its progress. We
                strive to minimize delays and ensure timely delivery.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      {/* Support Ticket Section */}
      <div className="flex flex-col items-center mt-[4rem]">
        <h2 className="text-[2.5rem] font-semibold text-[#2874fc] mb-[1.5rem]">
          Need Further Assistance?
        </h2>
        <p className="text-[1.2rem] text-gray-600 mb-[2rem]">
          If you have any issues or need more help, please fill out the support
          ticket form below.
        </p>
        <div className="w-[80%] md:w-[50%] bg-white p-[2rem] border-2 border-[#2874fc] rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-[1rem] p-[0.75rem] border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#2874fc]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-[1rem] p-[0.75rem] border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#2874fc]"
          />
          <textarea
            placeholder="Describe your issue..."
            className="w-full mb-[1.5rem] p-[0.75rem] border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#2874fc]"
            rows="5"
          />
          <button className="bg-[#2874fc] text-white px-[2rem] py-[0.75rem] rounded-lg text-[1.1rem] font-semibold hover:bg-[#1a63d8] transition duration-300 w-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackingSupport;
