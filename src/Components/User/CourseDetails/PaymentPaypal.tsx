import  { useEffect, useRef, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate, useParams } from 'react-router-dom';
import { axiosIntance } from '../../../Api/config';

interface Course {
  _id: string;
  courseTitle: string;
  courseDescription: string;
  courseLearning: string;
  courseIncludes: string;
  coursePrice: number;
  ThumbnailLocation: string;
  SelectedCategory: string;
  SelectedSubCategory: string;
  DemoVideoLocation: string;
  Class?: [{ classVideoLocation: string; classname: string; ClassDescription: string }];
  Mentorname: string;
  Status?: boolean;
}

const PaymentPaypal = () => {
  const { _id } = useParams();
  const [courseDetails, setCourseDetails] = useState<Course>();
  const [coursePrice, setcoursePrice] = useState<number>()

  const [showPayPalButton, setShowPayPalButton] = useState(false);
  const PaypalButtonRef = useRef<HTMLDivElement>(null);
  console.log(courseDetails);
  console.log(coursePrice);

  const navigate = useNavigate();


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosIntance.get('/CourseDeatailsByid', {
          params: { _id },
        });
        const { FoundedCourseByid } = response.data;
        setCourseDetails(FoundedCourseByid);
        setcoursePrice(courseDetails?.coursePrice)

      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    }

    fetchData();
  }, [_id]);
  useEffect(() => {
    setcoursePrice(courseDetails?.coursePrice)
  }, [courseDetails])
  const handleClickButton = () => {
    setShowPayPalButton(true);
    if (PaypalButtonRef.current) {
      PaypalButtonRef.current?.click();
    }
  };

  const HanldeCourse = async () => {
    console.log("halo");
    
    const { data } = await axiosIntance.post("/UpdateCouseid", { CourseId: _id })
    if (data) {
      const {UpdatedCourseId} = data
      console.log(UpdatedCourseId);
      if(UpdatedCourseId){
        navigate('/Mycourses')
      }
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
            <PayPalScriptProvider options={{ clientId: "AQ_VtAoAHy4-tPWs1_sXBapzBkyNgKiIU96Xmd7N-h-z7ONzRQSd4wJPGOIBXciDZxbFfIyiKzUcDeij" }}>
              <PayPalButtons style={{ layout: "horizontal" }}
                createOrder={(_data: any, actions: any) => {
                  return actions.order.create({
                    "intent": "CAPTURE",
                    "purchase_units": [
                      {
                        "reference_id": "default",
                        "amount": {
                          "currency_code": "USD",
                          "value": coursePrice ? coursePrice.toFixed(2) : "0.00" // Use coursePrice here
                        }
                      }
                    ]
                  });
                }}
                onApprove={(_data: any, actions: any) => {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                  return actions.order.capture().then(async function () {
                     HanldeCourse();
                   
                  })
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .catch(function (error: any) {
                      console.log(error, "Payment Faild");

                    });
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPaypal;
