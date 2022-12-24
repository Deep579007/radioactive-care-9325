import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteUsers, getUsers } from "../../Components/service/api";
import {Link} from "react-router-dom"

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;
const THaed = styled(TableRow)`
  background: #111111;
  & > th {
    color: #ffff;
    font-size: 20px;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const UserList = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers =  async() => {
    let res = await getUsers();
    setusers(res.data);
    console.log(res.data);
  };
  const deleteUserDetails=async (id)=>{
  await deleteUsers(id)
  getAllUsers()
  }
  return (
    <StyledTable>
      <TableHead>
        <THaed>
          <TableCell>Name</TableCell>
          <TableCell>User</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Actions</TableCell>
        </THaed>
      </TableHead>
      <TableBody>
        {users &&
          users.map((el) => (
            <TBody key={el._id}>
              <TableCell>{el.name}</TableCell>
              <TableCell>{el.username}</TableCell>
              <TableCell>{el.email}</TableCell>
              <TableCell>{el.phone}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${el._id}`}  >
                  <EditIcon />
                </Button>
                <Button variant="contained" color="secondary" onClick={()=>deleteUserDetails(el._id)}>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TBody>
          ))}
      </TableBody>
    </StyledTable>
  );
};

export default UserList;
