import React, { useState } from 'react';
import { useRequestContext } from './RequestContext';
import EngineeringFormModal from './EngineeringFormModal';
import DoneRequests from './DoneRequest';
import './Monitoring.css';
import './SearchModal.css';

function Monitoring() {
  const { requests, markRequestAsDone } = useRequestContext();
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [searchedRequest, setSearchedRequest] = useState(null);
  const [doneRequests, setDoneRequests] = useState([]);


  const handleViewClick = (request) => {
    setSelectedRequest(request);
    setIsViewModalOpen(true);
  };

  const handleFormSubmit = (data) => {
    // Update the request's status to "Done" and close the modal
    markRequestAsDone(data.id);
    setDoneRequests([...doneRequests, data]);
    setIsViewModalOpen(false);
  };

  const handleSearchClick = (request) => {
    setSearchedRequest(request);
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <div className="monitoring-container">
      <h1>Monitoring Lists</h1>
      <div className="request-panel">
        <h2>Request Records</h2>
        <table className="request-table">
          <thead>
            <tr>
              <th className="date-column">Date</th>
              <th className="area-column">Area of Occurrence</th>
              <th className="department-column">Department</th>
              <th className="section-column">Section</th>
              <th className="requesters-name-column">Requester's Name</th>
              <th className="immediate-head-column">Immediate Head</th>
              <th className="work-prio-column">Work Prioritization</th>
              <th className="location-column">Location/Machine/Equipment/Facility</th>
              <th className="complaints-column">Complaints/Problems/Observed</th>
              <th className="remarks-column">Remarks</th>
              <th className="request-no-column">Request No.</th>
              <th>Status</th>
              <th>Perform</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
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
                <td>
                  <button className="view-button" onClick={() => handleViewClick(request)}>
                    <i className="fa fa-eye"></i>
                  </button>
                </td>
                <td>
                  <button className="view-details-search-button" onClick={() => handleSearchClick(selectedRequest)}>
                  <i className="fa fa-search"></i>
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isViewModalOpen && (
          <EngineeringFormModal
            request={selectedRequest}
            onClose={() => setIsViewModalOpen(false)}
            onFormSubmit={handleFormSubmit}
          />
        )}
        {isSearchModalOpen && searchedRequest && (
          <div className="search-modal">
            <div className="search-modal-content">
              <h2>Search Results</h2>
              <p>Date: {searchedRequest.date}</p>
              <p>Area of Occurrence: {searchedRequest.areaOfOccurrence}</p>
              <p>Department: {searchedRequest.department}</p>
              <p>Section: {searchedRequest.section}</p>
              <p>Requester's Name: {searchedRequest.requesterName}</p>
              <p>Immediate Head: {searchedRequest.immediateHead}</p>
              <p>Work Prioritization: {searchedRequest.workPrioritization}</p>
              <p>Location/Machine/Equipment/Facility: {searchedRequest.locationMachine}</p>
              <p>Complaints/Problems/Observed: {searchedRequest.complaints}</p>
              <p>Remarks: {searchedRequest.remarks}</p>
              <p>Request No.: {searchedRequest.requestNo}</p>
            <button className="close-search-modal" onClick={closeSearchModal}>Close</button>
             </div>
          </div>
         )}
      </div>
        <DoneRequests doneRequests={doneRequests} />
    </div>
  );
}

export default Monitoring;
