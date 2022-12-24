import React from "react";
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useState } from "react";
import {addUser} from "../../Components/service/api"
import { useNavigate} from "react-router-dom"
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 25px;
  }
`;

const payload = {
  name: "",
  email: "",
  password:"",
  phone: "",
  
};
const AddUser = () => {
  const [user, setUser] = useState(payload);
  const navigate=useNavigate()
  const onValueChnage = (e) => {
    //================== HERE KEY-VALUE PAIRS ARE VARIABLES SO WE NEED TO USE SQUARE BRACKETS FOR KEY ==================
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addUserDetails = async () => {
   await addUser(user)
   navigate("/users")
  };

  return (
    <Container>
      <Typography variant="h3">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChnage(e)} name="name" />
      </FormControl>
     
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChnage(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>password</InputLabel>
        <Input onChange={(e) => onValueChnage(e)} name="password" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChnage(e)} name="phone" />
      </FormControl>
      <FormControl>
        
        <Button variant="contained" onClick={() => addUserDetails()} >
          Add User
        </Button>
    
      </FormControl>
    </Container>
  );
};

export default AddUser;
