import React, { use } from 'react';
import { Link } from 'react-router';

const JobList = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise)
    console.log(jobs)
    return (
        <div>
            <p>{jobs.length}</p>

            <div>
                <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Deadline</th>
                            <th className="border border-gray-300 px-4 py-2">Count</th>
                            <th className="border border-gray-300 px-4 py-2">View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <tr >
                                <td className="border border-gray-300 px-4 py-2">{job.title}</td>
                                <td className="border border-gray-300 px-4 py-2">{job.deadline}</td>
                                <td className="border border-gray-300 px-4 py-2">{job.application_count}</td>
                                <td><Link to={`/applications/${job._id}`}>View Details</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default JobList;