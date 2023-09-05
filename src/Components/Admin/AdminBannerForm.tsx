import React, { useRef, ChangeEvent, useState, FormEvent, useEffect } from 'react';
import { axiosIntance } from '../../Api/config';
import AdminDisplayBanner from './AdminDisplayBanner';
import axios from 'axios';

interface BannerForm {
  Image: string | null
  Content: string
}
interface ApiError {
  message: string;
}
const AdminBannerForm: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [bannerdata, setBannerdata] = useState<BannerForm>({
    Image: "",
    Content: ""
  })
  // const [dataProps, setDataprops] = useState()
  useEffect(() => {
    setBannerdata({ ...bannerdata, Image: imagePreview })
  },[]);
  console.log(imagePreview);


  console.log({ bannerdata });


  const handleBannerForm = async (e: FormEvent) => {
    e.preventDefault()
    const { data } = await axiosIntance.post("/Admin/BannerUpload", { ...bannerdata })
    console.log(data, "agskgdakgdkasdkaskdkasdkj");
    // setDataprops(data)
  }

  const handleBrowseButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const Cloudname = import.meta.env.VITE_CLOUDNAME
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {

      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('upload_preset', 'Educart');

      try {
        const { data } = await axios.post(
          `https://api.cloudinary.com/v1_1/${Cloudname}/image/upload?upload_preset=Educart`,
          formData
        );
        const imageUrl = data.secure_url
        // console.log(imageUrl,
        //   'cloudinrn data kittiiyo');
        setImagePreview(imageUrl);
      } catch (error) {
        console.error('Upload error:', error);
      }
    } else {
      setImagePreview(null);
    }
    console.log('Selected file:', selectedFile);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formRef.current?.submit();
  };

  return (
    <div className="max-w-2xl mx-auto flex-row">
      <form
        ref={formRef}
        className="border-dotted border-2 border-black p-2 relative m-4"
        onSubmit={handleFormSubmit}
      >
        <div className="w-full flex justify-center items-center p-2">
          <h1 className="font-bold text-2xl sm:text-lg md:text-2xl">Educart Banners</h1>
        </div>
        <div className="w-full h-28 flex items-start">
          <div className="w-1/2 h-28 p-1">
            <div className="w-2/4 h-10 p-1">
              <label htmlFor="image" className="text-black font-semibold sm:text-sm md:text-base">
                Image<span className="text-red-700 flex-row">*</span>
              </label>
            </div>

            <div
              className=" w-full h-12 rounded-lg bg-gray-200 border-2 border-black flex justify-center items-center cursor-pointer"
              onClick={handleBrowseButtonClick}
            >
              Take a Banner Image
            </div>

            <input
              required
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="hidden w-full h-12 rounded-lg bg-transparent border-2 border-black"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>
          <div className="w-1/2 h-28 p-1">
            <div className=" sm:w-fullw-2/4 h-10 p-1">
              <label htmlFor="bannerContent" className="text-black font-semibold sm:text-sm md:text-base">
                Banner Content<span className="text-red-700">*</span>
              </label>
            </div>
            <textarea
            placeholder='Please Enter any banner Content'
              onChange={(e) => setBannerdata({ ...bannerdata, [e.target.name]: e.target.value })}
              required
              id="bannerContent"
              name="Content"
              className="w-full h-12 rounded-lg bg-transparent border-2 border-black p-2 "
            ></textarea>
          </div>
        </div>

        {imagePreview && (
          <div className="w-full mt-3">
            <img src={imagePreview} alt="Banner Preview" className="w-full h-40 object-cover rounded-lg" />
          </div>
        )}

        <div className="w-full flex justify-center items-center mt-3">
          <button
            className="w-40 h-10 bg-black rounded-lg text-white hover:bg-white hover:text-black hover:border-2 hover:border-black flex justify-center items-center cursor-pointer"
            onClick={handleBannerForm}
          >
            Upload
          </button>
        </div>
      </form>
    <AdminDisplayBanner/>
      
    </div>
  );
};

export default AdminBannerForm;
