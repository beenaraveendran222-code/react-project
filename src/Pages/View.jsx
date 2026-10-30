import React, { useEffect, useRef, useState } from 'react'
import { FaBackward, FaFileDownload } from 'react-icons/fa'
import Edit from '../Components/Edit'
import { Link, useParams } from 'react-router-dom'
import { IoDocumentText, IoRefreshOutline } from 'react-icons/io5'
import Preview from '../Components/Preview'
import { downloadResumeApi, viewResumeApi } from '../service/apiService'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function View() {

  const [resume, setResume] = useState()
  const previewRef = useRef()

  const { id } = useParams()
  console.log(resume);

  useEffect(() => {
    getResumeDetails()
  }, [])

  const getResumeDetails = async () => {
    const response = await viewResumeApi(id)
    if (response.status === 200) {
      setResume(response.data)
    }
  }


  const downloadCV = async () => {
    const previeTag = previewRef.current
    const canvas = await html2canvas(previeTag)
    canvas.toBlob(async (imgFile)=>{
      //create form data to send file via API
      const formData = new FormData()
      formData.append("file",imgFile)
      formData.append("upload_preset","my-resume")
      const result = await fetch("https://api.cloudinary.com/v1_1/w6lswqow/image/upload",{
        method:"POST",
        body:formData
      })
      const serverData = await result.json()
      const url = serverData.secure_url
      // console.log(url);
      generatePDF(url)
      
    })
  }





  const generatePDF = async (resumeImg) => {


    const pdf = new jsPDF()
    const imageWidth = pdf.internal.pageSize.getWidth()
    const imageHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(resumeImg, "PNG", 0, 0, imageWidth, imageHeight)

    const today = new Date()
    const timestamp = `${today.toLocaleDateString()} , ${today.toLocaleTimeString()}`
    // console.log(timestamp);
    
    const result = await downloadResumeApi({timestamp,resumeImg,resumeId:resume.id,jobRole:resume.job})

    if(result.status===201){
      //download CV
      pdf.save(`${resume.fullname} CV.pdf`)
    }
  }







  //{
  //"timestamp" :
  //  "resumeId" :
  // "resumeImgUrl" :
  // jobRole :
  //}

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* Navigation icons */}
          <div className='d-flex justify-content-center align-items-center'>
            {/* Download */}
            <button onClick={downloadCV} style={{ color: '#672420' }} className='btn'><FaFileDownload />Download CV</button>
            {/* Edit */}
            <Edit resumeDetails={resume} setResumeDetails={setResume} />
            {/* All resumes */}
            {/* <Link style={{color:'#672420'}} to={'/all-resumes'} className='btn mx-2'><IoDocumentText />All Resumes</Link> */}
            {/* Download History */}
            {/* <Link style={{color:'#672420'}} to={'/downloads'} className='btn mx-2'><IoRefreshOutline />Download History</Link> */}
            {/* Back */}
            <Link style={{ color: '#672420' }} to={'/resume-details'} className='btn mx-2'><FaBackward />Previous</Link>
          </div>
          <div ref={previewRef} className='p-5'>
            <Preview resumeDetails={resume} />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>

    </div>
  )
}

export default View
