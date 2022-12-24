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
import Form from "react-bootstrap/Form";
import FormHelperText from "@mui/material/FormHelperText";
import { useState } from "react";
import { addProduct } from "../../Components/service/api";
import { useNavigate } from "react-router-dom";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 25px;
  }
`;

const payload = {
    title: "",
    price: "",
    rating: "",
    cat: "",
    qunty: "",
};
const AddProduct = () => {
  const [user, setUser] = useState(payload);
  const [picture, setPicture] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [picMessage, setPicMessage] = useState(null);
  const navigate = useNavigate();
  const onValueChnage = (e) => {
    //================== HERE KEY-VALUE PAIRS ARE VARIABLES SO WE NEED TO USE SQUARE BRACKETS FOR KEY ==================
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addUserDetails = async () => {
    await addProduct(user);
    navigate("/product");
  };

  const postDetails = (pics) => {
    if (!picture) {
      return setPicMessage("Please Select an image!.. ");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "shkoq3qc");
      data.append("cloud_name", "du3acgzcg");

      fetch("https://api.cloudinary.com/v1_1/du3acgzcg/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPicture(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };
  return (
    <Container>
        
      <Typography variant="h3">Add Product</Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input onChange={(e) => onValueChnage(e)} name="title" />
      </FormControl>

      <FormControl>
        <InputLabel>price</InputLabel>
        <Input onChange={(e) => onValueChnage(e)} name="price" />
      </FormControl>
      <FormControl>
        <InputLabel>rating</InputLabel>
        <Input onChange={(e) => onValueChnage(e)} name="rating" />
      </FormControl>
      <FormControl>
        <InputLabel>category</InputLabel>
        <Input onChange={(e) => onValueChnage(e)} name="cat" />
      </FormControl>
      <FormControl>
        <InputLabel>Quantity</InputLabel>
        <Input onChange={(e) => onValueChnage(e)} name="qunty" />
      </FormControl>
      <FormControl>
            <Form.Group className="mb-3">
                  <Form.Label style={{ marginLeft: "-0.5%", marginBottom:"-2%",fontSize: "20px" }}>
                    Product Picture{" "}
                  </Form.Label>

                  <Form.Control
                    type="file"
                    name="picture"
                    style={{ width: "35%", size: "xl", marginTop: "10px" }}
                    onChange={(e) => postDetails(e.target.files[0])}
                    id="custom-file"
                  />
                
                </Form.Group>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Add Product
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddProduct;
