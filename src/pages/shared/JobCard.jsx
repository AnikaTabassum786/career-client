
import React from 'react';
// import { IoLocation } from "react-icons/io5";
// import { Link } from 'react-router';

const JobCard = ({job}) => {
    const {_id,title,company_logo,company,description,requirements,salaryRange} =job
    return (
        <div className="card bg-base-100 w-80 shadow-sm">
 <div className='flex'>
     <figure>
    <img className='w-16'
      src={company_logo}
      alt="Logo" />
  </figure>

  <div>
      <p className='text-4xl'>{company}</p>
      {/* <p className='flex gap-1 items-center'><IoLocation />{location}</p> */}
    </div>
 </div>


  <div className="card-body">
    <h2 className="card-title">
        {title}
        <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
    
    <div className="card-actions ">
      
      {
        requirements.map((skill,index)=>{
            return(
                <div key={index}>
                    <div className="badge badge-outline">{skill}</div>
                </div>
            )
        })
      }
    </div>
    <div className='card-actions justify-end'>
       {/* <Link to={`/jobs/${_id}`}><button className='btn btn-primary'>Details</button></Link> */}
    </div>
  </div>
</div>
    );
};

export default JobCard;