import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({myApplicationsPromise}) => {
    const applications = use(myApplicationsPromise)
    return (
        <div>
            <p> Application List</p>
            <p>Application length: {applications.length}</p>

             <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">#</th>
                        <th className="border border-gray-300 p-2 text-left">Job Title</th>
                        <th className="border border-gray-300 p-2 text-left">Company</th>
                        <th className="border border-gray-300 p-2 text-left">Status</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {
                        applications.map((application) => (
                            <JobApplicationRow application={application}  />
                        ))
                    }
                </tbody>
            </table>
           
        </div>
    );
};

export default ApplicationList;