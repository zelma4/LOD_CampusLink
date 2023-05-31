import React from 'react'
import "./Subjects.css"
import {subjects} from '../constants'
import { Link } from 'react-router-dom'

//const data = [{ id: 'test-id-1', url: 'link to image1', text: 'test-text-1' }, { id: 'test-id-2', url: 'link to image2', text: 'test-text-2' }, { id: 'test-id-3', url: 'link to image3', text: 'test-text-3' }, { id: 'test-id-4', url: 'link to image4',  text: 'test-text-4'}]

const Subjects = () => {
  return (
    <div className='back_subjects'>
      {
        subjects.map((el, index) => (
          <Link to={`/students/${el.name}`} style={{textDecoration: 'none'}}>
          <div className='subject-card' key={index}>
            <div>
                <div className='icon'>{el.icon}</div>
                <div className='name'>{el.name}</div>
                {/* <div className='credits'>{el.credits}</div>
                <div className='lecturer'>{el.lecturer}</div>
                <div className='depatment'>{el.department}</div> */}
            </div>
          </div>   
          </Link>
        ))
      }
    </div>
  )
}



export default Subjects