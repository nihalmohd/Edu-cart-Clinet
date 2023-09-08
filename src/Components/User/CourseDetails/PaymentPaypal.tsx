import React, { useRef, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate, useParams } from 'react-router-dom';
import { axiosIntance } from '../../../Api/config';

const PaymentPaypal = () => {
  const { _id } = useParams();
  const [showPayPalButton, setShowPayPalButton] = useState(false);
  const PaypalButtonRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleClickButton = () => {
    setShowPayPalButton(true);
    if (PaypalButtonRef.current) {
      PaypalButtonRef.current?.click();
    }
  };

  const HanldeCourse =async()=>{
    const {data} = await axiosIntance.post("/UpdateCouseid",{CourseId:_id})
    if(data){
      console.log(data);
      
    }
  }

  return (
    <div>
      <div className="w-full h-screen  flex justify-center items-center">
        <div className="w-1/2 h-96 bg-slate-300  border-2 border-black p-1 drop-shadow-2xl">
          <div className="w-full h-10  border-2 border-black flex justify-center items-center">
            <h1 className='font-bold text-xl text-black '>This is EduCart payment</h1>
          </div>
          <button className='bg-black w-full h-10 text-white text-lg font-bold flex justify-center items-center hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-xl hover:scale-x-95 mt-3' onClick={() => handleClickButton()}>Pay Now</button>
          <button className='bg-black w-full h-10 text-white text-lg font-bold flex justify-center items-center hover:bg-white hover:text-black hover:border-2 hover:border-black shadow-xl hover:scale-x-95 mt-3' onClick={() => { navigate(`/showCourse/${_id}`) }}>Cancel Payment</button>
          <div className="w-full h-80 p-2 " style={{ display: showPayPalButton ? 'block' : 'none' }} ref={PaypalButtonRef}>
            <PayPalScriptProvider options={{ clientId:import.meta.env.VITE_PAYPAL_CLIENTID }}>
              <PayPalButtons style={{ layout: "horizontal" }}
            //   className="my-3"
            //  createOrder={async (data, actions) => {
            //         return actions.order
            //             .create({
            //               purchase_units: []
            //             })
            //             .then((orderId) => {
            //                 return orderId;
            //             });
            //     }}
              
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPaypal;
