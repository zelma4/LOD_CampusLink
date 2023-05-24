import React from 'react'
import {subjects} from '../constants'
import { Link } from 'react-router-dom'

//const data = [{ id: 'test-id-1', url: 'link to image1', text: 'test-text-1' }, { id: 'test-id-2', url: 'link to image2', text: 'test-text-2' }, { id: 'test-id-3', url: 'link to image3', text: 'test-text-3' }, { id: 'test-id-4', url: 'link to image4',  text: 'test-text-4'}]

const Subjects = () => {
  return (
    <div>
      {
        subjects.map((el, index) => (
          <Link to={`/students/${el.name}`} >
          <div key={index}>
            <div>{el.icon}</div>
            <div>{el.name}</div>
          </div>   
          </Link>
        ))
      }
    </div>
  )
}



export default Subjects