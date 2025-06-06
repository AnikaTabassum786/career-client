import React, { useEffect, useState } from 'react';
import JobCard from '../shared/JobCard';

const HotJobs = () => {

    const [jobs,setJobs] = useState([])

    useEffect(()=>{
       fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data)) // set the fetched data
            .catch(error => {
                console.log('Error fetching jobs:', error);
            });
        
    },[])
    return (
        <>
        <p className='mt-8'>{jobs.length}</p>
             <p>Hot Jobs</p>
        <div className='grid grid-cols-3 gap-4 '>
            
           {jobs.map((job, index) => (
                    <JobCard job={job} key={index}>

                    </JobCard>
                ))}
        </div>
        </>
    );
};

export default HotJobs;