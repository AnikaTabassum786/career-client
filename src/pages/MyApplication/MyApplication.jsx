import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import { myApplicationsPromise } from '../../api/applicationsAPI';
import useAuth from '../../hooks/useAuth';



const MyApplication = () => {
  const {user} = useAuth()
    return (
        <div>
            My Application
            <ApplicationStat></ApplicationStat>
            <Suspense fallback={'Loading your applications'}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;