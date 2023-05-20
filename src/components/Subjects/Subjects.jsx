import "./Subjects.css"
import React from 'react'

const data = [{ id: 'test-id-1', url: 'link to image1', text: 'test-text-1' }, { id: 'test-id-2', url: 'link to image2', text: 'test-text-2' }, { id: 'test-id-3', url: 'link to image3', text: 'test-text-3' }, { id: 'test-id-4', url: 'link to image4', text: 'test-text-4'}]

const Subjects = () => {
  return (
    <>
    <div>Subjects</div>
    <div>
        {
             data.map(el => (
                  <div key={el.id}>
                        <div><img src={el.url} /></div>
                        <div>{el.text}</div>
                  </div>   
              ))
         }
    </div>
    </>

  )
}

export default Subjects