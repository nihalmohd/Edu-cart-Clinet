import React,{useRef} from 'react'

const AdminBannerForm = () => {
  const ImgInputRef=useRef(null)
  return (
    <div className="max-w-2xl mx-auto">
      <form className="border-dotted border-2 border-black p-2 relative m-4">
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
            <div className="w-full h-12 rounded-lg bg-gray-200 border-2 border-black flex justify-center items-center cursor-pointer">
              Take a Banner Image
            </div>
          </div>
          <div className="w-1/2 h-28 p-1">
            <div className="w-2/4 h-10 p-1">
              <label htmlFor="bannerContent" className="text-black font-semibold sm:text-sm md:text">
                Banner Content<span className="text-red-700">*</span>
              </label>
            </div>
            <input
          type="file"
          ref={ImgInputRef}
          id="image"
          name="image"
          accept="image/*" // To restrict the selection to image files
          className=" hidden w-full h-12 rounded-lg bg-transparent border-2 border-black"
        />
            <textarea
            required
              id="bannerContent"
              name="bannerContent"
              className="w-full h-12 rounded-lg bg-transparent border-2 text-lg border-black"
            ></textarea>
          </div>
        </div>
        {/* You can add the "Browse" button if you prefer */}
        <div className="w-full flex justify-center items-center mt-3">
          <label
            htmlFor="image"
            className="w-40 h-10 bg-black rounded-lg text-white hover:bg-white hover:text-black hover:border-2 hover:border-black flex justify-center items-center cursor-pointer"
          >
            Upload
          </label>
        </div>
      </form>
    </div>


  )
}

export default AdminBannerForm