import React from 'react'
import ResumeInput from '../Components/ResumeInput'
import Preview from '../Components/Preview'

function Info() {

const [resumeDetails,setResumeDetails] = React.useState({
  fullname:"",location:"",job:"",phone:"",email:"",github:"",linkedin:"",degree:"",college:"",year:"",skills:[],summary:""
})


  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <ResumeInput resumeDetails={resumeDetails} setResumeDetails={setResumeDetails} />
          </div>
          <div className="col-lg-6">
            {resumeDetails.fullname && <Preview resumeDetails={resumeDetails}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
