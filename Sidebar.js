// Sidebar.js
import React from 'react';
import './Sidebar.css'; // Link to the CSS file

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul >
          <li >< a href="#current">Current Weather</a></li>
          <li><a href="#forecast">Forecast</a></li>
          <li><a href="#maps">Weather Maps</a></li>
          <li><a href="#alerts">Weather Alerts</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
