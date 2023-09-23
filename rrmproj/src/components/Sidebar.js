import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact';
import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {


  return (
    <div className="sidebar-wrapper">
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            RRM
          </Link>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link to="/dashboard" className="sidebar-link">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </Link>
            <Link to="/sidebar/request-form" className="sidebar-link">
              <CDBSidebarMenuItem icon="edit">Request Form</CDBSidebarMenuItem>
            </Link>
            <CDBSidebarMenuItem icon="chart-line">
              Monitoring
            <ul className="submenu">
              <li>
                <Link to="/sidebar/monitoring" className="sidebar-link">
                 Overview
                </Link>
              </li>
              <li>
                <Link to="/sidebar/done-requests" className="sidebar-link">
                Done
                </Link>
              </li>
            </ul>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }} />
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
