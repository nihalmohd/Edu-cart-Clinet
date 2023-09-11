import React from 'react'
import "../404page/Pagenotfound.css"
import { useNavigate } from 'react-router-dom'
const pagenotfound = () => {
    const navigate =useNavigate()
  return (
    <div>
	<div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h3>Oops! Page not found</h3>
				<h1><span>4</span><span>0</span><span>4</span></h1>
			</div>
			<h2>we are sorry, but the page you requested was not found</h2>
            <button className='w-2/4 h-10 border-2 border-black hover:bg-black hover:text-white font-bold text-xl' onClick={()=>{navigate(-1)}}>Go Back</button>
		</div>
	</div>
    </div>
  )
}

export default pagenotfound