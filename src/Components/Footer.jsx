import React from 'react'
import { FaFacebook, FaInstagramSquare, FaPhoneAlt } from 'react-icons/fa'
import { FaSquareWhatsapp } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <div style={{backgroundColor:'#672420',height:'300px'}} className='container-fluid text-light p-5'>
      <div className='row'>
        <div className="col-lg-4">
          <h4 className='mb-3'>AI rBuilder</h4>
          <p style={{textAlign:'justify'}}>An AI Powered Resume Builder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4 mt-3">
          <h4>Contact US</h4>
          <p> <MdEmail/> resumebuilder@gmail.com</p>
          <p> <FaPhoneAlt /> 45458745545</p>
          <h4>Connect With Us</h4>
          <div>
            <FaInstagramSquare />
            <FaFacebook className='mx-3'/>
            <FaSquareWhatsapp />
          </div>
        </div>
      </div>
      <h4 className='text-center mt-3'>Designed & built with ❤️ using React</h4>
    </div>
  )
}

export default Footer
