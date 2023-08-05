import React, { useRef, ChangeEvent, useState,FormEvent } from 'react';
import { axiosIntance } from '../../Api/config';

const AdminBannerForm: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [bannerdata,setBannerdata]=useState({
    Image:imagePreview,
    Content:""
  })

  
  const handleBannerForm=(e:FormEvent)=>{
     
  }

  const handleBrowseButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('upload_preset', 'Educart');
      
      try {
        const { data } = await axiosIntance.post(
          'https://api.cloudinary.com/v1_1/dgb07yvbv/image/upload/',
          formData
          );
          const imageUrl=data.secure_url
          console.log(imageUrl,
            'cloudinrn data kittiiyo');
          setImagePreview(imageUrl);
      } catch (error) {
        console.error('Upload error:', error);
      }
    } else {
      setImagePreview(null);
    }

    // Handle the file as needed (e.g., upload to server)
    console.log('Selected file:', selectedFile);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    formRef.current?.submit(); // Submit the form using the submit() method
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form
        ref={formRef} // Attach the form ref here
        className="border-dotted border-2 border-black p-2 relative m-4"
        onSubmit={handleFormSubmit} // Attach the form submission handler
      >
        <div className="w-full flex justify-center items-center p-2">
          <h1 className="font-bold text-2xl sm:text-lg md:text-2xl">Educart Banners</h1>
        </div>
        <div className="w-full h-28 flex items-start">
          <div className="w-1/2 h-28 p-1">
            <div className="w-2/4 h-10 p-1">
              <label htmlFor="image" className="text-black font-semibold">
                Image<span className="text-red-700 flex-row">*</span>
              </label>
            </div>
            {/* Replace the input element with a custom-styled div */}
            <div
              className="w-full h-12 rounded-lg bg-gray-200 border-2 border-black flex justify-center items-center cursor-pointer"
              onClick={handleBrowseButtonClick}
            >
              Take a Banner Image
            </div>
            {/* Use the hidden file input and attach the ref */}
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*" // To restrict the selection to image files
              className="hidden w-full h-12 rounded-lg bg-transparent border-2 border-black"
              ref={fileInputRef} // Attach the ref here
              onChange={handleFileChange}
            />
          </div>
          <div className="w-1/2 h-28 p-1">
            <div className="w-2/4 h-10 p-1">
              <label htmlFor="bannerContent" className="text-black font-semibold sm:text-sm md:text">
                Banner Content<span className="text-red-700">*</span>
              </label>
            </div>
            <textarea
              required
              id="bannerContent"
              name="bannerContent"
              className="w-full h-12 rounded-lg bg-transparent border-2 text-lg border-black"
            ></textarea>
          </div>
        </div>
        {/* Image preview div */}
        {imagePreview && (
          <div className="w-full mt-3">
            <img src={imagePreview} alt="Banner Preview" className="w-full h-40 object-cover rounded-lg" />
          </div>
        )}
        {/* You can add the "Browse" button if you prefer */}
        <div className="w-full flex justify-center items-center mt-3">
          <button
            className="w-40 h-10 bg-black rounded-lg text-white hover:bg-white hover:text-black hover:border-2 hover:border-black flex justify-center items-center cursor-pointer"
            onClick={handleBannerForm}
           >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminBannerForm;
