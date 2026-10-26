import React from 'react'
import ResumeInput from '../Components/ResumeInput'
import Preview from '../Components/Preview'

function Info() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <ResumeInput/>
          </div>
          <div className="col-lg-6">
            <Preview/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
