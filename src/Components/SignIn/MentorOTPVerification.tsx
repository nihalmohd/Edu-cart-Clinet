import React, { useState, useEffect } from 'react';
import { axiosIntance } from '../../Api/config';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

interface ApiError {
  message: string;
}
interface NextComponentProps {
  Mentor: {
    Email: string;
    Username: string;
    Password: string;
  };
}

const MentorOtpVerification:React.FC<NextComponentProps>  = ({Mentor}) => {
    const Email=Mentor.Email

    const navigate=useNavigate()
    const [OTP, setOTP] = useState('');
    const [remainingTime, setRemainingTime] = useState(120); // 120 seconds (2 minutes)
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [OtpErr,setOtperr]=useState<string |null>(null)
    console.log(OTP ,"otpppppp");
    useEffect(() => {
      let timer: number | undefined;
      if (isTimerRunning && remainingTime > 0) {
        timer = setTimeout(() => {
          setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
        }, 1000); // Update the timer every second (1000ms)
      } else {
        setIsTimerRunning(false);
      }
    
      return () => clearTimeout(timer);
    }, [isTimerRunning, remainingTime]);
    const handleResendOTP = () => {
      // Call the API to resend OTP to the user
      // Reset the timer and enable it again
      setRemainingTime(120); // Reset the timer to 2 minutes
      setIsTimerRunning(true); // Start the timer again
    };
    const handleOTPVerification = async() => {
      try {
        const {data} = await axiosIntance.post("/user/VerifyOTP",{Email,OTP})
        if(!data){
            setOtperr("Please Enter Valid OTP")
        navigate("/SignUp")
        }else{
       navigate('/MentorHome')
        }
      } catch (error) {
        const OTPErr=error as AxiosError
        const OTPErrMsg=OTPErr?.response?.data as ApiError
        const OTPErrMess=OTPErrMsg.message
        setOtperr(OTPErrMess)
      }
    };
    const handleError =()=>{
    setOtperr(null)
    }

    return (
        <div>
        <div className="w-full h-9 justify-center items-center flex"><h1 className='text-lg font-bold' >OTP Verification Educart</h1></div>
        <input className='w-full h-10 rounded-3xl border border-black pl-2 '
          type="text" onInput={handleError} value={OTP}
          onChange={(e) => setOTP(e.target.value)}
          placeholder=" Please Enter OTP"
        />
        <p className='text-red-500 ml-4'>{OtpErr}</p>
        <div className='w-full h-9 flex justify-center items-center mt-3'>
        <button className='bg-white  w-28 h-9  hover:bg-black border border-black text-center text-black hover:text-white hover:scale-105' onClick={handleOTPVerification}>Verify OTP</button>
        </div>
        {isTimerRunning && remainingTime > 0 && (
          <div>
            Time Remaining: {Math.floor(remainingTime / 60)}:{(remainingTime % 60).toString().padStart(2, '0')}
          </div>
        )}
  
        {!isTimerRunning && remainingTime === 0 && (
          <button onClick={handleResendOTP}>Resend OTP</button>
        )}
      </div>
    );
  };

export default MentorOtpVerification



