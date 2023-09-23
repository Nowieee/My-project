import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import RequestForm from './RequestForm';
import Engineering from './Engineering';
import Header from './Header';
import Monitoring from './Monitoring';

function AuthenticatedRoutes() {
  return (
    <div className="sidebar-layout">
      <Header />
      <div className='main-content'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/request-form" element={<RequestForm />} />
          <Route path="/engineering-form" element={<Engineering />} />
          <Route path="/monitoring" element={<Monitoring />}/>
      </Routes>
      </div>
    </div>
  );
}

export default AuthenticatedRoutes;
