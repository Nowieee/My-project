import React, { useState, useEffect } from 'react';
import { useRequestContext } from './RequestContext';
import { v4 as uuidv4 } from 'uuid';
import './Engineering.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

function EngineeringForm() {
  const { addRequest } = useRequestContext();
  const [currentTime, setCurrentTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [actionsDone, setActionsDone] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateFinished, setDateFinished] = useState('');
  const [noOfDaysHours, setNoOfDaysHours] = useState('');
  const [remarks, setRemarks] = useState('');
  const [workPerformed, setWorkPerformed] = useState('');
  const [checkReviewed, setCheckReviewed] = useState('');
  const [approved, setApproved] = useState('');

  const calculateNoOfDaysHours = () => {
    if (dateStart && dateFinished) {
      const start = new Date(dateStart);
      const finished = new Date(dateFinished);
      const timeDifference = Math.abs(finished - start);
      const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
      const days = Math.floor(timeDifference / oneDayInMilliseconds);
      setNoOfDaysHours(`${days} day(s)`);
    }
  };

  useEffect(() => {
    calculateNoOfDaysHours();
  }, [dateStart, dateFinished]);

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
      actionsDone,
      dateStart,
      dateFinished,
      noOfDaysHours,
      remarks,
      workPerformed,
      checkReviewed,
      approved,
      status: 'Done'
    };

    addRequest(requestData);
    setActionsDone('');
    setDateStart('');
    setDateFinished('');
    setNoOfDaysHours('');
    setRemarks('');
    setWorkPerformed('');
    setCheckReviewed('');
    setApproved('');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
      
  return (
    <div className="engineering-form-container">
      <div className="engineering-form-details">
        <h1 className="engineering-header">Engineering Form</h1>
        {isSubmitted && (
          <div className="success-message">
            <p>Request submitted successfully!</p>
          </div>
        )}
      <form onSubmit={handleSubmit}>
          <div className="horizontal-form">
            <div className="form-row">
              <label htmlFor="actionsDone">Actions Done:</label>
              <textarea id="actionsDone" name="actionsDone" value={actionsDone} onChange={(e) => setActionsDone(e.target.value)} required />
            </div>
            <div className="form-row">
              <label htmlFor="dateStart">Date Start:</label>
              <input type="date" id="dateStart" name="dateStart" value={dateStart} onChange={(e) => setDateStart(e.target.value)} required />
            </div>
            <div className="form-row">
              <label htmlFor="dateFinished">Date Finished:</label>
              <input type="date" id="dateFinished" name="dateFinished" value={dateFinished} onChange={(e) => setDateFinished(e.target.value)} required />
            </div>
            <div className="form-row">
              <label htmlFor="noOfDays">No. of Day(s)/Hr(s):</label>
              <input
                type="text"
                id="noOfDays"
                name="noOfDays"
                value={`${noOfDaysHours} day(s)`}
                onChange={(e) => setNoOfDaysHours(e.target.value)}
                disabled
              />
              </div>
            <div className="form-row">
              <label htmlFor="remarks">Remarks:</label>
              <input type="remarks" id="remarks" name="remarks" value={remarks} onChange={(e) => setRemarks(e.target.value)} required />
            </div> 
            <div className="form-row">
              <label htmlFor="workPerformed">Work Performed:</label>
              <select id="workPerformed" name="workPerformed" value={workPerformed} onChange={(e) => setWorkPerformed(e.target.value)} required >
                  <option value="">Select an option</option>
                  <option value="Dale R. Alogoso">Dale R. Alogoso</option>
                  <option value="Rey Castro S. Cagay">Rey Castro S. Cagay</option>
                  <option value="Mark Rhafe H. Hubac">Mark Rhafe H. Hubac</option>
                  <option value="Ruel J. Pabihar">Ruel J. Pabihar</option>
                  <option value="Harvey Q. Pepito">Harvey Q. Pepito</option>
                  <option value="Ralph Ericson N. Tiempo">Ralph Ericson N. Tiempo</option>
                  <option value="Jason O. Tisoy">Jason O. Tisoy</option>
              </select>
              </div>  
              <div className="form-row">
              <label htmlFor="checkReviewed">Check Reviewed:</label>
              <input type="checkReviewed" id="checkReviewed" name="checkReviewed" value={checkReviewed} onChange={(e) => setCheckReviewed(e.target.value)} required />
            </div> 
            <div className="form-row">
              <label htmlFor="approved">Approved:</label>
              <select id="approved" name="approved" value={approved} onChange={(e) => setApproved(e.target.value)} required >
                  <option value="">Select an option</option>
                  <option value="Zandro A. Flores">Zandro A. Flores</option>
                  <option value="Daniel L. Ruperto">Daniel L. Ruperto</option>
                  <option value="Robert L. Pansoy">Robert L. Pansoy</option>
                  <option value="Francis Niño D. Bernados">Francis Niño D. Bernados</option>
                  <option value="Darlene Dale M. Orence">Darlene Dale M. Orence</option>
              </select>
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

export default EngineeringForm;
