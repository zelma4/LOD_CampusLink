import "./Students.css"
import React from 'react'
import { Link } from 'react-router-dom';

const Students = () => {
  return (
    <div className="back">
      <Link to="./students">
        <h1 className="title_logo">Students</h1>
      </Link>
      <div className="students">
        <div className="students_row_1">
          <div className="student">1</div>
          <div className="student">2</div>
          <div className="student">3</div>
          <div className="student">4</div>
        </div>
        <div className="students_row_2">
          <div className="student">5</div>
          <div className="student">6</div>
          <div className="student">7</div>
          <div className="student">8</div>
        </div>
        <div className="students_row_3">
          <div className="student">9</div>
          <div className="student">10</div>
          <div className="student">11</div>
          <div className="student">12</div>
        </div>
        <div className="students_row_4">
          <div className="student">13</div>
          <div className="student">14</div>
          <div className="student">15</div>
        </div>
      </div>
    </div>
  )
}

export default Students