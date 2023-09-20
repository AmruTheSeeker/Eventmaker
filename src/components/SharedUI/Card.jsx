
import React from 'react'

export const Card = () => {
  return (
  <div className="card w-96 bg-base-100 shadow-xl"> 
      <figure><img src="/MobileLegend.jpg" alt="Mobile Legend" /></figure>
  
    <div className="card-body">
    <h2 className="card-title font-bold">Mobile Legend competition</h2>
    <p>Bring you lot of new experience and excitement</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Join Now</button>
    </div>
  </div>
</div>
  )
}
