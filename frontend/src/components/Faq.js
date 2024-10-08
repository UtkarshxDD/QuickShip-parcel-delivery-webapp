// import React from 'react'
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// const Faq = () => {
//     return (
//         <div className='flex flex-col my-[3rem]'>
//             <div className='flex flex-col gap-[0.2rem] mx-auto items-center mb-[1rem]' >

//                 <h3 className='text-bold text-[2rem] underline-offset-4'>Frequently Asked Questions</h3>
//                 <div className='h-[0.2rem] w-[10rem] bg-[#2874fc]' />
//             </div>
//             <div>
//                 <div className='w-[80%] mx-auto flex flex-col gap-[1rem]'>
//                     <Accordion className='border-2 border-blue-300'>
//                         <AccordionSummary
//                             expandIcon={<AddCircleIcon />}
//                             aria-controls="panel2-content"
//                             id="panel2-header"

//                         >
//                             <Typography ><p className='font-bold yantramanav-regular text-[1.3rem]'>What is BridgeLine?</p></Typography>
//                         </AccordionSummary>
//                         <AccordionDetails>
//                             <Typography className='text-gray-500 '>
//                                 BridgeLine is a cutting-edge Cross Border Payments Portal that revolutionizes global transactions. It serves as a convergence point for Web3, blockchain, and machine learning technologies, offering a range of features to enhance efficiency, reduce costs, and provide unparalleled security in cross-border payments. With bridgeLine, you can experience the future of financial transactions and unlock a world of possibilities.
//                             </Typography>
//                         </AccordionDetails>
//                     </Accordion>

//                     <Accordion className='border-2 border-blue-300'>
//                         <AccordionSummary
//                             expandIcon={<AddCircleIcon />}
//                             aria-controls="panel2-content"
//                             id="panel2-header"

//                         >
//                             <Typography ><p className='font-bold yantramanav-regular text-[1.3rem]'>Why use BridgeLine?</p></Typography>
//                         </AccordionSummary>
//                         <AccordionDetails>
//                             <Typography className='text-gray-500 '>
//                                 BridgeLine offers a revolutionary approach to cross-border payments, leveraging the latest advancements in Web3, blockchain, and machine learning technologies. By choosing bridgeLine, you benefit from Cost-efficient transactions,
//                                 Streamlined international education fee payments,
//                                 Reduced import duties,
//                                 Flexibility with scheduled payments,
//                                 Advanced expense tracking and analytics,
//                                 Enhanced user experience with a customer support chatbot,
//                                 Rewards based on credit score.
//                             </Typography>
//                         </AccordionDetails>
//                     </Accordion>
//                     <Accordion className='border-2 border-blue-300'>
//                         <AccordionSummary
//                             expandIcon={<AddCircleIcon />}
//                             aria-controls="panel2-content"
//                             id="panel2-header"

//                         >
//                             <Typography ><p className='font-bold yantramanav-regular text-[1.3rem]'>Is bridgeLine secure?</p></Typography>
//                         </AccordionSummary>
//                         <AccordionDetails>
//                             <Typography className='text-gray-500 '>
//                                 Yes, bridgeLine prioritizes security by leveraging blockchain technology, which ensures transparency and immutability of transactions. Additionally, our platform employs advanced encryption techniques to safeguard your data and funds during cross-border transactions.
//                             </Typography>
//                         </AccordionDetails>
//                     </Accordion>
//                     <Accordion className='border-2 border-blue-300'>
//                         <AccordionSummary
//                             expandIcon={<AddCircleIcon />}
//                             aria-controls="panel2-content"
//                             id="panel2-header"

//                         >
//                             <Typography ><p className='font-bold yantramanav-regular text-[1.3rem]'>How can I trust bridgeLine with my financial transactions?</p></Typography>
//                         </AccordionSummary>
//                         <AccordionDetails>
//                             <Typography className='text-gray-500 '>
//                                 BridgeLine is built upon the principles of trust and transparency. Our platform's decentralized nature ensures that transactions are verified and recorded on the blockchain, providing you with a secure and reliable environment for conducting cross-border payments. Moreover, our commitment to compliance and adherence to regulatory standards further reinforces the trustworthiness of bridgeLine.
//                             </Typography>
//                         </AccordionDetails>
//                     </Accordion>
//                     <Accordion className='border-2 border-blue-300'>
//                         <AccordionSummary
//                             expandIcon={<AddCircleIcon />}
//                             aria-controls="panel2-content"
//                             id="panel2-header"

//                         >
//                             <Typography ><p className='font-bold yantramanav-regular text-[1.3rem]'>Is bridgeLine available globally?</p></Typography>
//                         </AccordionSummary>
//                         <AccordionDetails>
//                             <Typography className='font-bold yantramanav-regular text-[1.3rem]'
//                             >
//                                 Yes, bridgeLine is accessible worldwide, allowing users from any country to benefit from its innovative features and conduct cross-border transactions seamlessly.
//                             </Typography>
//                         </AccordionDetails>
//                     </Accordion>

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Faq

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Faq = () => {
  return (
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
              What is FastTrack Delivery?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-700">
              FastTrack Delivery connects people who want to send parcels with
              travelers on the same route. By leveraging travelers using trains
              or personal vehicles, we drastically reduce delivery times from
              4-5 days to just 1 day.
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
              How does Secure Transit ensure safety?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-700">
              Secure Transit ensures safety by only allowing parcels to be
              transported in AC coaches and verifying the identity of carriers.
              We also enforce a weight limit of 5-6 kg to avoid inconvenience to
              other passengers.
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
              How can I track my parcel?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-700">
              You can track your parcel in real-time through our website. Once
              your parcel is assigned to a traveler, you'll receive updates and
              be able to monitor its progress until delivery.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="border border-[#2874fc] rounded-lg shadow-md">
          <AccordionSummary
            expandIcon={<AddCircleIcon style={{ color: "#2874fc" }} />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography className="font-bold text-[#2874fc] text-[1.2rem]">
              Are there any restrictions on parcel size?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-700">
              Yes, to ensure smooth delivery and avoid inconvenience, we have a
              weight limit of 5-6 kg per parcel. This helps in managing space
              and ensuring a comfortable travel experience for all passengers.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
