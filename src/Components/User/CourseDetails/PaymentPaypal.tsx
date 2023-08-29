import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaymentPaypal = () => {
  return (
    <div>
      <div className="w-full h-screen  flex justify-center items-center">
        <div className="w-1/2 h-96 bg-slate-300  border-2 border-black p-1 drop-shadow-2xl">
          <div className="w-full h-10  border-2 border-black flex justify-center items-center">
            <h1 className='font-bold text-xl text-black '>This is Edcuart payment</h1>
          </div>
          <div className="w-full h-80 bg-yellow-300 ">
            <PayPalScriptProvider options={{ clientId: "test" }}>
              <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider></div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPaypal