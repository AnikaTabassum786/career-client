import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {

    const {id: jobId} = useParams();
    const {user} = useAuth()


    const handleApplyForSubmit=(e)=>{
         e.preventDefault()
     const form = e.target;
     const linkedin =form.linkedin.value;
     const github  = form.github.value;
     const resume = form.resume.value;

     console.log(linkedin,github,resume)

     const application={
        jobId,
        applicant: user.email,
        linkedin,
        github,
        resume
     }

     axios.post('http://localhost:3000/applications',application)
     .then(res => {
        console.log(res.data)
        if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
     })
     .catch(error => {
        console.log(error)
     })

    }
    
    return (
       <div>
            <form 
             onSubmit={handleApplyForSubmit}
            >
                <div>Apply for <span><Link to={`/jobs/${jobId}`}>Details</Link></span></div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                {/* <legend className="fieldset-legend">Page details</legend> */}

                <label className="label">LinkedIn Link</label>
                <input type="url" name='linkedin' className="input" placeholder="LinkedIn Profile Link" />

                <label className="label">Github Link</label>
                <input type="url" name='github' className="input" placeholder="Github Profile LinK" />

                <label className="label">Resume</label>
                <input type="url" name='resume' className="input" placeholder="Resume Link" />

                <input type="submit" className='btn' value='Apply'/>
            </fieldset>
            </form>
        </div>
    );
};

export default JobApply;