// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Nav = () => {
//   const navigate = useNavigate();
//   const [isLoggedInUser, setIsLoggedInUser] = useState(null);
//   useEffect(() => {
//     setIsLoggedInUser(localStorage.getItem("emailData"));

//     // console.log("loggind user details",isLoggedInUser);
//   }, []);
//   const onLogout = () => {
//     localStorage.removeItem("emailData");
//     window.location.reload();
//   };
//   return (
//     <div className="flex flex-col w-[80%] mx-auto pt-[2rem] ">
//       <div className="flex justify-between items-center">
//         <div className="flex gap-[0.5rem] items-center justify-center">
//           <img
//             src="/currency.png"
//             alt="Logo"
//             className="w-[3rem] h-[3rem] cursor-pointer"
//             onClick={() => navigate("/")}
//           />
//           <h1
//             className=" text-[3rem] teko cursor-pointer"
//             onClick={() => navigate("/")}
//           >
//             QuickShip
//           </h1>
//         </div>
//         <div className="flex gap-[4rem]">
//           <p
//             className="yantramanav-regular text-[1rem] cursor-pointer hover:text-[#2874fc]"
//             onClick={() => navigate("/p2p")}
//           >
//             P2P
//           </p>

//           <p
//             className="yantramanav-regular text-[1rem] cursor-pointer hover:text-[#2874fc]"
//             onClick={() => navigate("/ifb")}
//           >
//             IFB
//           </p>
//           <p className="yantramanav-regular text-[1rem] cursor-pointer hover:text-[#2874fc]">
//             GlobalPay
//           </p>
//         </div>

//         {isLoggedInUser ? (
//           <>
//             <div
//               className="bg-[#2874fc] rounded-lg px-[2rem] cursor-pointer py-[0.6rem] text-white text-[0.9rem] font-semibold"
//               onClick={() => onLogout()}
//             >
//               Logout
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="flex gap-[1rem] items-center">
//               <p
//                 className="curor-pointer madimi-one-regular text-[1.3rem] cursor-pointer"
//                 onClick={() => navigate("/login")}
//               >
//                 Login
//               </p>
//               <div
//                 className="bg-[#2874fc] rounded-lg px-[2rem] cursor-pointer py-[0.6rem] text-white text-[0.9rem] font-semibold"
//                 onClick={() => navigate("/signup")}
//               >
//                 Get Started
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//       <div className="w-full h-[0.2rem] bg-gray-300 mt-[1rem]" />
//     </div>
//   );
// };

// export default Nav;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [isLoggedInUser, setIsLoggedInUser] = useState(null);

  useEffect(() => {
    setIsLoggedInUser(localStorage.getItem("emailData"));
  }, []);

  const onLogout = () => {
    localStorage.removeItem("emailData");
    window.location.reload();
  };

  return (
    <div className="flex flex-col w-[90%] mx-auto pt-[1.5rem]">
      <div className="flex justify-between items-center">
        <div className="flex gap-[1rem] items-center">
          <img
            src="/currency.png"
            alt="Logo"
            className="w-[2.5rem] h-[2.5rem] cursor-pointer"
            onClick={() => navigate("/")}
          />
          <h1
            className="text-[2.5rem] font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            QuickShip
          </h1>
        </div>
        <div className="flex gap-[2rem] items-center">
          <p
            className="text-[1rem] cursor-pointer hover:text-[#2874fc] font-medium"
            onClick={() => navigate("/shipments")}
          >
            Shipments
          </p>
          <p
            className="text-[1rem] cursor-pointer hover:text-[#2874fc] font-medium"
            onClick={() => navigate("/tracking")}
          >
            Tracking & Support
          </p>
          <p
            className="text-[1rem] cursor-pointer hover:text-[#2874fc] font-medium"
            onClick={() => navigate("/AboutUs")}
          >
            About-Us
          </p>
        </div>

        {isLoggedInUser ? (
          <div
            className="bg-[#2874fc] rounded-lg px-[1.5rem] py-[0.5rem] cursor-pointer text-white text-[0.9rem] font-semibold"
            onClick={onLogout}
          >
            Logout
          </div>
        ) : (
          <div className="flex gap-[1rem] items-center">
            <p
              className="text-[1rem] cursor-pointer hover:text-[#2874fc] font-medium"
              onClick={() => navigate("/login")}
            >
              Login
            </p>
            <div
              className="bg-[#2874fc] rounded-lg px-[1.5rem] py-[0.5rem] cursor-pointer text-white text-[0.9rem] font-semibold"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </div>
          </div>
        )}
      </div>
      <div className="w-full h-[0.2rem] bg-gray-300 mt-[1rem]" />
    </div>
  );
};

export default Nav;
