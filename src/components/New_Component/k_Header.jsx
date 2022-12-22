import React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #fff;
  elevation:5;
`;
const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
  color: #445578;
  text-decoration: none;
  margin-left: 10px;
  font-size: 16px;
`;

const K_Headers = () => {
  return (
    <Header position="static" >
      <Toolbar>
       
        <div style={{ marginLeft: "55%" }}>
          <Tabs>Already Register?</Tabs>

          <Tabs to="/login" style={{ color: "blue","margin":"0  -2px 0 -5px" }}>
            Login
          </Tabs>
          <Tabs>here</Tabs>
        </div>
      </Toolbar>
    </Header>
  );
};

export default K_Headers;
