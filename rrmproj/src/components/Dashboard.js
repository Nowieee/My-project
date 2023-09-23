import React from 'react';
import { useRequestContext } from './RequestContext';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { requests } = useRequestContext();
  const navigate = useNavigate();
  const { pendingCount, doneCount } = useRequestContext();

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="status-counts">
        <div className="pending-count">
          <span>Pending Requests: {pendingCount}</span>
        </div>
        <div className="done-count">
          <span>Done Requests: {doneCount}</span>
        </div>
      </div>
      {/* ...other dashboard content */}
    </div>
  );
}


export default Dashboard;
