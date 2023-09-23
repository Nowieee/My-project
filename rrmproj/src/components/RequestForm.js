import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { useRequestContext } from './RequestContext';
import "./RequestForm.css";
import { useNavigate } from 'react-router-dom';


function RequestForm() {
  const navigate = useNavigate ();
  const { addRequest, requests } = useRequestContext();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [date, setDate] = useState('');
  const [areaOfOccurrence, setAreaOfOccurrence] = useState('');
  const [department, setDepartment] = useState('');
  const [section, setSection] = useState('');
  const [requesterName, setRequesterName] = useState('');
  const [immediateHead, setImmediateHead] = useState('');
  const [workPrioritization, setWorkPrioritization] = useState('');
  const [locationMachine, setLocationMachine] = useState('');
  const [complaints, setComplaints] = useState('');
  const [remarks, setremarks] = useState('');
  const [requestNo, setRequestNo] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    if (requests.length > 0) { // Check if there are requests
      const lastRequest = requests[requests.length - 1]; // Get the last request
      const lastRequestNumber = parseInt(lastRequest.requestNo, 10); // Parse the request number
      const nextRequestNumber = lastRequestNumber + 1;
      const formattedRequestNumber = nextRequestNumber.toString().padStart(4, '0');
      setRequestNo(formattedRequestNumber);
    } else {
      setRequestNo('0001'); // Start from 0001 if there are no requests yet
    }
  }, [requests]);


  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestData = {
      id: uuidv4(),
      date, 
      areaOfOccurrence, 
      department, 
      section, 
      requesterName, 
      immediateHead, 
      workPrioritization,
      locationMachine,
      complaints,
      remarks,
      requestNo,
      status: 'Queued'
    };

      addRequest(requestData);
      setDate ('');
      setAreaOfOccurrence ('');
      setDepartment ('');
      setSection ('');
      setRequesterName ('');
      setImmediateHead ('');
      setWorkPrioritization ('');
      setLocationMachine ('');
      setComplaints ('');
      setremarks ('');
      setRequestNo('');
      
      setIsSubmitted(true);
      setTimeout(() => {
      setIsSubmitted(false);
      }, 3000)
  };


  return ( 
    <div className="request-form-container">
      <div className="request-form-details">
        <h1 className="request-header">Request Form</h1>
        {isSubmitted && (
          <div className="success-message">
            <p>Request submitted successfully!</p>
          </div>
        )}      
      <form onSubmit={handleSubmit}>
        <div className="horizontal-form">
          <div className="form-row">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className="form-row">
            <label htmlFor="areaOfOccurrence">Area of Occurrence:</label>
              <select id="areaOfOccurrence" name="areaOfOccurrence" value={areaOfOccurrence} onChange={(e) => setAreaOfOccurrence(e.target.value)} required>
                  <option value="">Select an option</option>
                  <option value="Plant 1">Plant 1</option>
                  <option value="Plant 2">Plant 2</option>
                  <option value="Plant 3">Plant 3</option>
                  <option value="Plant 4">Plant 4</option>
              </select>
          </div>
          <div className="form-row">
            <label htmlFor="department">Department:</label>
              <select id="department" name="department" value={department} onChange={(e) => setDepartment(e.target.value)} required>
                  <option value="">Select an option</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Materials Management">Materials Management</option>
                  <option value="General Affairs">General Affairs</option>
                  <option value="Technical Center">Technical Center</option>
                  <option value="Quality Assurance">Quality Assurance</option>
                  <option value="Finance & Accounting">Finance & Accounting</option>
                  <option value="Sales">Sales</option>
              </select>
          </div>
          <div className="form-row">
            <label htmlFor="section">Section:</label>
              <select id="section" name="section" value={section} onChange={(e) => setSection(e.target.value)} required>
                  <option value="">Select an option</option>
                  <option value="Industrial Engineering">Industrial Engineering</option>
                  <option value="Facilities Engineering">Facilities Engineering</option>
                  <option value="Human Resource">Human Resource</option>
                  <option value="Training">Training</option>
                  <option value="Environment & Safety">Environment & Safety</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Quality Assurance">Quality Assurance</option>
                  <option value="Inspection Equipment Management">Inspection Equipment Management</option>
                  <option value="Quality System">Quality System</option>
                  <option value="Finance & Accounting">Finance & Accounting</option>
                  <option value="Automated Inspection">Automated Inspection</option>
                  <option value="Brazing">Brazing</option>
                  <option value="Cutting">Cutting</option>
                  <option value="Final Inspection">Final Inspection</option>
                  <option value="Heat Treatment">Heat Treatment</option>
                  <option value="Machining Center">Machining Center</option>
                  <option value="NC Process">NC Process</option>
                  <option value="Packing">Packing</option>
                  <option value="Press Cutting">Press Cutting</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Materials Management">Materials Management</option>
                  <option value="Production Control">Production Control</option>
                  <option value="Purchasing">Purchasing</option>
                  <option value="Shipping">Shipping</option>
                  <option value="Warehouse & Material Control">Warehouse & Material Control</option>
                  <option value="New Parts">New Parts</option>
                  <option value="Press Forming">Press Forming</option>
                  <option value="Sales">Sales</option>
              </select>
          </div>  
          <div className="form-row">
            <label htmlFor="requesterName">Requester's Name:</label>
            <input type="requesterName" id="requesterName" name="requesterName" value={requesterName} onChange={(e) => setRequesterName(e.target.value)} required />
          </div>  
          <div className="form-row">
            <label htmlFor="immediateHead">Immediate Head:</label>
            <input type="immediateHead" id="immediateHead" name="immediateHead" value={immediateHead} onChange={(e) => setImmediateHead(e.target.value)} required />
          </div>
          <div className="form-row">
            <label htmlFor="workPrioritization">Work Prioritazation:</label>
              <select id="workPrioritization" name="workPrioritization" value={workPrioritization} onChange={(e) => setWorkPrioritization(e.target.value)} required>
                  <option value="">Select an option</option>
                  <option value="A - Immediate, complete by end of the day">A- Immediate, complete by end of the day</option>
                  <option value="B - Within 24 hours">B- Within 24 hours</option>
                  <option value="C - Within 48 hours">C- Within 48 hours</option>
                  <option value="D - As schedule">D- As schedule</option>
                  <option value="E - When resources are available">E- When resources are available</option>                
              </select>
          </div>   
          <div className="form-row">
            <label htmlFor="locationMachine">Location/Machine/Equipment/Facility:</label>
            <textarea id="locationMachine" name="locationMachine" value={locationMachine} onChange={(e) => setLocationMachine(e.target.value)} required />
          </div>
          <div className="form-row">
            <label htmlFor="complaints">Complaints/Problems/Observed:</label>
            <textarea id="complaints" name="complaints" value={complaints} onChange={(e) => setComplaints(e.target.value)} required />
          </div>
          <div className="form-row">
            <label htmlFor="remarks">Remarks:</label>
            <textarea id="remarks" name="remarks" value={remarks} onChange={(e) => setremarks(e.target.value)} required />
          </div> 
          <div className="form-row">
            <label htmlFor="requestNo">Request No.:</label>
            <input type="text" id="requestNo" name="requestNo" value={requestNo} onChange={(e) => setRequestNo(e.target.value)} readOnly required />
          </div> 
          <div className="submit-button">
          <input type="submit" value="Submit Request" />
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestForm;
