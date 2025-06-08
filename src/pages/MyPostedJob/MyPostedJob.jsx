import React, { Suspense } from 'react';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../api/jobsAPI';
import useAuth from '../../hooks/useAuth';

const MyPostedJob = () => {
    const {user} = useAuth()
    return (
        <div>
            <p>My Posted Job</p>
            <Suspense>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;