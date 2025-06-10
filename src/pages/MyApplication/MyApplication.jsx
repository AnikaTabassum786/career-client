import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import { myApplicationsPromise } from '../../api/applicationsAPI';
import useAuth from '../../hooks/useAuth';



const MyApplication = () => {
    const { user } = useAuth()
    console.log('token firebase token', user.accessToken)

    return (
        <div>
            My Application
            <ApplicationStat></ApplicationStat>
            <Suspense fallback={'Loading your applications'}>
                {/* Cookie */}

                {/* <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationList> */}

                {/* firebase admin */}
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email,user.accessToken)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;