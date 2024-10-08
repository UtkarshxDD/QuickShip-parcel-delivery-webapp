// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Application = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       {/* FastTrack Delivery  */}
//       <div className="mt-[5rem] flex flex-col ">
//         <div className="flex flex-col gap-[0.2rem] px-[4rem] items-center">
//           <h3 className="text-bold text-[4rem] underline-offset-4">
//             Our Services
//           </h3>
//           <div className="h-[0.4rem] w-[10rem] bg-[#2874fc]" />
//         </div>
//         <div className="flex justify-around">
//           <div className="flex flex-col w-[35rem] mt-[1rem] gap-[1rem] px-auto justify-center">
//             <h1 className="text-[#2874fc] madimi-one-regular text-[1.3rem]">
//               FastTrack Delivery
//             </h1>
//             <h1 className="anton-regular text-[2.5rem]">
//               Rapid Parcel Delivery Service
//             </h1>
//             <h3 className="yantramanav-regular text-[1.1rem]">
//               FastTrack Delivery connects people who want to send parcels with
//               travelers on the same route, drastically reducing delivery times.
//               Instead of waiting 4-5 days for a conventional courier, your
//               parcel can arrive within 1 day by leveraging travelers using
//               trains or personal vehicles.
//             </h3>
//             <h4 className="text-[1.1rem] text-gray-500">
//               Your parcel is securely delivered through verified carriers,
//               ensuring both speed and safety.
//             </h4>
//             <div
//               className="bg-[#2874fc] hover:bg-[#2876fcf1] w-[12rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold"
//               onClick={() => navigate("/fasttrack")}
//             >
//               Learn More
//               <img src="./right.png" alt="Arrow" className="w-[2rem]" />
//             </div>
//           </div>
//           <div className="flex items-center">
//             <img
//               src="/rapid.png"
//               className="w-[40rem] border-2"
//               alt="FastTrack Delivery"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Secure Transit */}
//       <div className="flex justify-around">
//         <div className="flex items-center">
//           <img
//             src="/secure.png"
//             className="w-[35rem] h-[20rem] border-2"
//             alt="Secure Transit"
//           />
//         </div>
//         <div className="flex flex-col w-[35rem] mt-[1rem] gap-[1rem] px-auto justify-center">
//           <h1 className="text-[#2874fc] madimi-one-regular text-[1.3rem]">
//             Secure Transit
//           </h1>
//           <h1 className="anton-regular text-[2.5rem]">
//             Safe & Verified Parcel Handling
//           </h1>
//           <h3 className="yantramanav-regular text-[1.1rem]">
//             Secure Transit ensures that your parcel is handled by verified
//             carriers only. All parcels are transported in AC coaches to prevent
//             theft or damage, with a strict weight limit of 5-6 kg to minimize
//             inconvenience for other passengers.
//           </h3>
//           <h4 className="text-[1.1rem] text-gray-500">
//             Trust Secure Transit for safe and reliable delivery every time.
//           </h4>
//           <div
//             className="bg-[#2874fc] hover:bg-[#2876fcf1] w-[12rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold"
//             onClick={() => navigate("/securetransit")}
//           >
//             Learn More
//             <img src="./right.png" alt="Arrow" className="w-[2rem]" />
//           </div>
//         </div>
//       </div>

//       {/* ExpressPath */}
//       <div className="flex justify-around">
//         <div className="flex flex-col w-[35rem] mt-[1rem] gap-[1rem] px-auto justify-center">
//           <h1 className="text-[#2874fc] madimi-one-regular text-[1.3rem]">
//             ExpressPath
//           </h1>
//           <h1 className="anton-regular text-[2.5rem]">
//             Optimized Delivery Routes
//           </h1>
//           <h3 className="yantramanav-regular text-[1.1rem]">
//             ExpressPath optimizes delivery routes by matching your parcel with
//             travelers already heading in your desired direction. This service
//             reduces the environmental impact of delivery and ensures your parcel
//             arrives as quickly as possible.
//           </h3>
//           <h4 className="text-[1.1rem] text-gray-500">
//             Eco-friendly, efficient, and quick parcel delivery.
//           </h4>
//           <div className="bg-[#2874fc] hover:bg-[#2876fcf1] w-[12rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold">
//             Learn More
//             <img src="./right.png" alt="Arrow" className="w-[2rem]" />
//           </div>
//         </div>
//         <div>
//           <img src="/opt.png" className="w-[40rem]" alt="ExpressPath" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Application;

import React from "react";
import { useNavigate } from "react-router-dom";

const Application = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* FastTrack Delivery */}
      <div className="mt-[5rem] flex flex-col">
        <div className="flex flex-col gap-[0.2rem] px-[4rem] items-center">
          <h3 className="text-bold text-[4rem] underline-offset-4">
            Our Services
          </h3>
          <div className="h-[0.4rem] w-[10rem] bg-[#2874fc]" />
        </div>
        <div className="flex justify-around items-center mt-[2rem]">
          <div className="flex flex-col w-[35rem] gap-[1rem] px-auto justify-center">
            <h1 className="text-[#2874fc] madimi-one-regular text-[1.3rem]">
              FastTrack Delivery
            </h1>
            <h1 className="anton-regular text-[2.5rem]">
              Rapid Parcel Delivery Service
            </h1>
            <h3 className="yantramanav-regular text-[1.1rem]">
              FastTrack Delivery connects people who want to send parcels with
              travelers on the same route, drastically reducing delivery times.
            </h3>
            <h4 className="text-[1.1rem] text-gray-500">
              Your parcel is securely delivered through verified carriers,
              ensuring both speed and safety.
            </h4>
            <div
              className="bg-[#2874fc] hover:bg-[#2876fcf1] w-[12rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold"
              onClick={() => navigate("/fasttrack")}
            >
              Learn More
              <img src="./right.png" alt="Arrow" className="w-[2rem]" />
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="/rapid.png"
              className="w-[40rem] border-2 border-gray-300 rounded-lg shadow-lg p-[1rem] m-[1rem]"
              alt="FastTrack Delivery"
            />
          </div>
        </div>
      </div>

      {/* Secure Transit */}
      <div className="flex justify-around items-center mt-[3rem]">
        <div className="flex items-center">
          <img
            src="/secure.png"
            className="w-[35rem] h-[20rem] border-2 border-gray-300 rounded-lg shadow-lg p-[1rem] m-[1rem]"
            alt="Secure Transit"
          />
        </div>
        <div className="flex flex-col w-[35rem] gap-[1rem] px-auto justify-center">
          <h1 className="text-[#2874fc] madimi-one-regular text-[1.3rem]">
            Secure Transit
          </h1>
          <h1 className="anton-regular text-[2.5rem]">
            Safe & Verified Parcel Handling
          </h1>
          <h3 className="yantramanav-regular text-[1.1rem]">
            Secure Transit ensures that your parcel is handled by verified
            carriers only. All parcels are transported in AC coaches to prevent
            theft or damage.
          </h3>
          <h4 className="text-[1.1rem] text-gray-500">
            Trust Secure Transit for safe and reliable delivery every time.
          </h4>
          <div
            className="bg-[#2874fc] hover:bg-[#2876fcf1] w-[12rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold"
            onClick={() => navigate("/securetransit")}
          >
            Learn More
            <img src="./right.png" alt="Arrow" className="w-[2rem]" />
          </div>
        </div>
      </div>

      {/* ExpressPath */}
      <div className="flex justify-around items-center mt-[3rem]">
        <div className="flex flex-col w-[35rem] gap-[1rem] px-auto justify-center">
          <h1 className="text-[#2874fc] madimi-one-regular text-[1.3rem]">
            ExpressPath
          </h1>
          <h1 className="anton-regular text-[2.5rem]">
            Optimized Delivery Routes
          </h1>
          <h3 className="yantramanav-regular text-[1.1rem]">
            ExpressPath optimizes delivery routes by matching your parcel with
            travelers already heading in your desired direction.
          </h3>
          <h4 className="text-[1.1rem] text-gray-500">
            Eco-friendly, efficient, and quick parcel delivery.
          </h4>
          <div className="bg-[#2874fc] hover:bg-[#2876fcf1] w-[12rem] flex gap-[0.5rem] hover:gap-[0.8rem] justify-center cursor-pointer py-[1rem] text-[1.1rem] text-white font-bold">
            Learn More
            <img src="./right.png" alt="Arrow" className="w-[2rem]" />
          </div>
        </div>
        <div>
          <img
            src="/opt.png"
            className="w-[40rem] border-2 border-gray-300 rounded-lg shadow-lg p-[1rem] m-[1rem]"
            alt="ExpressPath"
          />
        </div>
      </div>
    </div>
  );
};

export default Application;
