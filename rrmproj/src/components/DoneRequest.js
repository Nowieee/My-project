import React from 'react';
import './DoneRequest.css';

function DoneRequests({ doneRequests }) {
  return (
    <div className="done-requests">
      <h2>Done Requests</h2>
      <table className="request-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Area of Occurrence</th>
            <th>Department</th>
            <th>Section</th>
            <th>Requester's Name</th>
            <th>Immediate Head</th>
            <th>Work Prioritization</th>
            <th>Location/Machine/Equipment/Facility</th>
            <th>Complaints/Problems/Observed</th>
            <th>Remarks</th>
            <th>Request No.</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {doneRequests.map((request) => (
            <tr key={request.id}>
            <td>{request.date}</td>
            <td>{request.areaOfOccurrence}</td>
            <td>{request.department}</td>
            <td>{request.section}</td>
            <td>{request.requesterName}</td>
            <td>{request.immediateHead}</td>
            <td>{request.workPrioritization}</td>
            <td>{request.locationMachine}</td>
            <td>{request.complaints}</td>
            <td>{request.remarks}</td>
            <td>{request.requestNo}</td>
            <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoneRequests;
