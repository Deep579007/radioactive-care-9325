import "./sidebar.css";

import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
// import PersonIcon from '@mui/icons-material/Person';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/add" className="link">
              <li className="sidebarListItem">
                <PersonAddAltIcon className="sidebarIcon" />
                
                User
              </li>
            </Link>
            <Link to="/addProduct" className="link">
              <li className="sidebarListItem">
                <StorefrontIcon className="sidebarIcon" />
                Product
              </li>
            </Link>
            <Link to="/product" className="link">
              <li className="sidebarListItem">
                <StorefrontIcon className="sidebarIcon" />
                Products
              </li>
            </Link>
            
          </ul>
        </div>

        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
            
              Manage
            </li>
            <li className="sidebarListItem">
            
              Analytics
            </li>
            <li className="sidebarListItem">
              
              Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
