import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Download() {
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center'>
      <h1>Downloaded Resume History</h1>
      <Link to={'/resume-details'}><FaArrowLeft className='mx-1'/>Back</Link>
      </div>
      <div className='row my-5'>
        {/* Duplicate the row according to the resume count */}
        <div className='col-lg-4'>
          <div style={{height:'350px'}} className='rounded shadow p-3'>
            <h6>Review at : Time stamp</h6>
            <div className='mt-4 text-center'>
              <Link to={'/resume/:id'}><img className='w-50' src="https://tse4.mm.bing.net/th/id/OIP.zsuU8XswcDF8MpJFxaX5lQHaKa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="resume" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download
