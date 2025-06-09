import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplication = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();
    console.log(applications)

    const handleStatusChange = (e, application) => {
        console.log(e.target.value, application)

        axios.patch(`http://localhost:3000/applications/${application}`, { status: e.target.value })
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You Status Updated!",
                        icon: "success"
                    });
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            View Application
            <p>Application for:{job_id}</p>
            <p>{applications.length}</p>

            <div className='mt-4'>
                <table className="w-full table-auto border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-4 py-2">Applicant</th>
                            <th className="border px-4 py-2">GitHub</th>
                            <th className="border px-4 py-2">LinkedIn</th>
                            <th className="border px-4 py-2">Resume</th>
                            <th className="border px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application, index) => (
                            <tr key={index} className="text-center">
                                <td className="border px-4 py-2">{application.applicant}</td>
                                <td className="border px-4 py-2">
                                    <a href={application.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                        GitHub
                                    </a>
                                </td>
                                <td className="border px-4 py-2">
                                    <a href={application.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                        LinkedIn
                                    </a>
                                </td>
                                <td className="border px-4 py-2">
                                    <a href={application.resume} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                        Resume
                                    </a>
                                </td>
                                <td>
                                    <select className="select" defaultValue={application.status}
                                        onChange={e => handleStatusChange(e, application._id)}
                                    >
                                        <option value="" disabled>Update Status</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Interview">Interview</option>
                                        <option value="Hired">Hired</option>
                                    </select>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;