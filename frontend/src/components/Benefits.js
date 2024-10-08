// import React from 'react'
// const Benefits = () => {
//     return (
//         <div className='mt-[2rem] flex flex-col'>
//             <div className='flex flex-col gap-[0.2rem] px-[4rem] '>

//                 <h3 className='text-bold text-[1.4rem] underline-offset-4'>Our Benefits</h3>
//                 <div className='h-[0.2rem] w-[5rem] bg-[#2874fc]' />
//             </div>
//             <div className='flex mx-auto gap-[4rem]'>
//                 <div className='flex flex-col shadow-xl px-6 py-6 hover:text-white hover:bg-[#2874fc] ease-in-out duration-300 rounded-xl'>
//                     <div className='flex flex-col gap-[0.2rem] items-center'>

//                         <img src="/dollar.png" className='w-[4rem]' alt="" />
//                         <div className='flex items-center'>

//                             <h3 className='text-bold text-[1.3rem] '>Transaction Fee</h3>
//                         </div>
//                     </div>
//                     <h3 className='w-[12rem] yantramanav-regular'>Enjoy reduced transaction fees thanks to our  finance principles, cutting unnecessary costs and maximizing your returns.</h3>
//                 </div>
//                 <div className='flex flex-col shadow-xl px-6 py-6 hover:text-white hover:bg-[#2874fc] ease-in-out duration-300 rounded-xl'>
//                     <div className='flex flex-col gap-[0.2rem] items-center'>

//                         <img src="/innovation.png" className='w-[4rem]' alt="" />
//                         <div className='flex items-center'>

//                             <h3 className='text-bold text-[1.3rem]'>Rapid Transfer</h3>
//                         </div>
//                     </div>
//                     <h3 className='w-[12rem] yantramanav-regular'>Experience lightning-fast transactions ensuring swift and seamless transfers across borders in seconds, not days.</h3>
//                 </div>
//                 <div className='flex flex-col shadow-xl px-6 py-6 hover:text-white hover:bg-[#2874fc] ease-in-out duration-300 rounded-xl'>
//                     <div className='flex flex-col gap-[0.2rem] items-center'>

//                         <img src="/data-encryption.png" className='w-[4rem]' alt="" />
//                         <div className='flex items-center'>

//                             <h3 className='text-bold text-[1.3rem]'>Safe and Secure</h3>
//                         </div>
//                     </div>
//                     <h3 className='w-[12rem] yantramanav-regular'>Rest easy knowing your transactions are fortified with blockchain smart contracts. Your financial assets are safeguarded like never before.</h3>
//                 </div>
//                 <div className='flex flex-col shadow-xl px-6 py-6 hover:text-white hover:bg-[#2874fc] ease-in-out duration-300 rounded-xl'>
//                     <div className='flex flex-col gap-[0.2rem] items-center'>

//                         <img src="/global-network.png" className='w-[4rem]' alt="" />
//                         <div className='flex items-center'>

//                             <h3 className='text-bold text-[1.3rem]'>Globally Accessible</h3>
//                         </div>
//                     </div>
//                     <h3 className='w-[12rem] yantramanav-regular'>Seamlessly conduct transactions across the globe with ease, empowering you to manage your finances regardless of your location.</h3>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Benefits

//2nd part
import React from "react";

const Benefits = () => {
  return (
    <div className="mt-[4rem] flex flex-col">
      <div className="flex flex-col items-center gap-[0.5rem] mb-[3rem]">
        <h3 className="text-bold text-[2rem] underline underline-offset-8 decoration-[#2874fc]">
          Our Benefits
        </h3>
        <div className="h-[0.25rem] w-[5rem] bg-gradient-to-r from-[#2874fc] to-[#00d2ff] rounded-full" />
      </div>
      <div className="flex flex-wrap justify-center gap-[2rem]">
        <div className="flex flex-col shadow-lg px-8 py-10 bg-white hover:text-white hover:bg-gradient-to-r from-[#2874fc] to-[#00d2ff] transform hover:-translate-y-2 transition ease-in-out duration-300 rounded-2xl">
          <div className="flex flex-col gap-[1rem] items-center">
            <img src="/dollar.png" className="w-[5rem]" alt="" />
            <h3 className="text-bold text-[1.5rem] text-center">
              Cost-Effective
            </h3>
          </div>
          <p className="w-full text-center mt-[1rem] text-[1.1rem] leading-relaxed">
            Save money on parcel deliveries by leveraging travelers already
            heading to your destination.
          </p>
        </div>
        <div className="flex flex-col shadow-lg px-8 py-10 bg-white hover:text-white hover:bg-gradient-to-r from-[#2874fc] to-[#00d2ff] transform hover:-translate-y-2 transition ease-in-out duration-300 rounded-2xl">
          <div className="flex flex-col gap-[1rem] items-center">
            <img src="/innovation.png" className="w-[5rem]" alt="" />
            <h3 className="text-bold text-[1.5rem] text-center">
              Faster Delivery
            </h3>
          </div>
          <p className="w-full text-center mt-[1rem] text-[1.1rem] leading-relaxed">
            Get your parcels delivered in hours, not days, by using existing
            travel routes.
          </p>
        </div>
        <div className="flex flex-col shadow-lg px-8 py-10 bg-white hover:text-white hover:bg-gradient-to-r from-[#2874fc] to-[#00d2ff] transform hover:-translate-y-2 transition ease-in-out duration-300 rounded-2xl">
          <div className="flex flex-col gap-[1rem] items-center">
            <img src="/data-encryption.png" className="w-[5rem]" alt="" />
            <h3 className="text-bold text-[1.5rem] text-center">
              Secure Transfers
            </h3>
          </div>
          <p className="w-full text-center mt-[1rem] text-[1.1rem] leading-relaxed">
            Send parcels securely with verified travelers in AC coaches,
            ensuring safety and peace of mind.
          </p>
        </div>
        <div className="flex flex-col shadow-lg px-8 py-10 bg-white hover:text-white hover:bg-gradient-to-r from-[#2874fc] to-[#00d2ff] transform hover:-translate-y-2 transition ease-in-out duration-300 rounded-2xl">
          <div className="flex flex-col gap-[1rem] items-center">
            <img src="/global-network.png" className="w-[5rem]" alt="" />
            <h3 className="text-bold text-[1.5rem] text-center">Wide Reach</h3>
          </div>
          <p className="w-full text-center mt-[1rem] text-[1.1rem] leading-relaxed">
            Access a network of travelers across the country, making parcel
            delivery quick and convenient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
