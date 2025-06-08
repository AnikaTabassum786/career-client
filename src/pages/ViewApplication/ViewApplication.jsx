import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplication = () => {
    const {job_id} = useParams();
    const applications = useLoaderData();
    console.log(applications)
    return (
        <div>
            View Application
            <p>Application for:{job_id}</p>
            <p>{applications.length}</p>

            <div className='mt-4'>
                {
applications.map((application)=>{
return(
    <div className='mt-4'>
    <p>{application.applicant}</p>
    <p>{application.github}</p>
    <p>{application.linkedin}</p>
    <p>{application.resume}</p>
    </div>
)
})
            }
            </div>
        </div>
    );
};

export default ViewApplication;