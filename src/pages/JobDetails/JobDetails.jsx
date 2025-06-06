import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id,company,title} = useLoaderData()
    return (
        <div>
            <p>{title}</p>
            <p>{company}</p>

            <div>
                <Link to={`/jobApply/${_id}`}><button className='btn btn-pr'>Apply</button></Link>
            </div>
        </div>
    );
};

export default JobDetails;