import { Button,Divider } from '@mui/material'
import React from 'react'

function Preview({resumeDetails}) {
  return (
    <div className='w-100'>
      <h1>{resumeDetails?.fullname}</h1>
      <p className='fs-5 lh-1'>Phone:{resumeDetails?.phone}</p>
      <p className='fs-5 lh-1'>Email:{resumeDetails?.email}</p>
      <p className='fs-5 lh-1'>LinkedIn:{resumeDetails?.linkedin}</p>
      <p className='fs-5 lh-1'>Github:{resumeDetails?.github}</p>
      <p className='fs-5 lh-1'>Location:{resumeDetails?.location}</p>
      <Divider className='bg-dark mb-3'/>
      <h2>Proffessional Summary</h2>
      <p>{resumeDetails?.summary}</p>
      <Divider className='bg-dark mb-3'/>
      <h2>Technical Skills</h2>
      {/* duplicate according to skill number */}
      {
        resumeDetails?.skills?.map(skill=>(
          <span><Button key={skill} variant='text' className='bg-dark text-light rounded m-2'>{skill}</Button></span>
        ))
      }

      
      <Divider className='bg-dark mt-3'/>
      <p>Bacherlor's Degree in {resumeDetails?.degree}</p>
      <p>University/College Name:{resumeDetails?.college}</p>
      <p>Year of Graduation:{resumeDetails?.year}</p>
    </div>
  )
}

export default Preview
