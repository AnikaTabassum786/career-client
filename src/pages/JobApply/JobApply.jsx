import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const JobApply = () => {

    const {id: jobId} = useParams();
    const {user} = useAuth()
    
    return (
       <div>
            <form 
            // onSubmit={handleApplyForSubmit}
            >
                {/* <div>Apply for <span><Link to={`/jobs/${jobId}`}>Details</Link></span></div> */}
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