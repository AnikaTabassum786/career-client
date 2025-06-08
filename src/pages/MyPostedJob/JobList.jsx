import React, { use } from 'react';

const JobList = ({jobsCreatedByPromise}) => {
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
      </tr>
    </thead>
    <tbody>
      {jobs.map((job) => (
        <tr key={job.id}>
          <td className="border border-gray-300 px-4 py-2">{job.title}</td>
          <td className="border border-gray-300 px-4 py-2">{job.deadline}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


          
        </div>
    );
};

export default JobList;