import { Box } from "@chakra-ui/react";
import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
//Login
const Login_V = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Mobile", data);
    alert("OTP has been sent to Mobile number");
    navigate("/LoginAuth");
  };

  return (
    <div className="LoginCon">
      <div>
        <div className="imgBox">
          <img
            src="https://media.sugarcosmetics.com/upload/authSIe2.jpg"
            width={"100%"}
            height={"645px"}
            alt=""
          />
        </div>
      </div>
      <div className="inputBox">
        <div style={{ width: "50%", margin: "auto", textAlign: "center" }}>
          <Box
            className="smartBox"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "5%",
              fontSize: "25px",
              textAlign: "center",
              marginLeft: "20px",
            }}
          >
            <SmartphoneIcon sx={{ width: "30px", height: "40px" }} />
            Login/Signup Using Phone
          </Box>
          <form onSubmit={formSubmit}>
            <div>
              <Input
                type="tel"
                placeholder="Mobile Number"
                onChange={(e) => setData(e.target.value)}
                className="input"
                maxLength={10}
                required
              />
              {data < 1000000000 && data > 0 ? (
                <div
                  style={{
                    color: "red",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2021_10_27_16_49/images/Error.svg"
                    alt=""
                  />
                  <span style={{ marginLeft: "10px" }}>
                    Please enter a valid 10-digit mobile number
                  </span>
                </div>
              ) : (
                ""
              )}
              <br />
            </div>
            <Button
              type="submit"
              sx={{
                cursor: "pointer",
                backgroundColor: "#333333",
                color: "#ffffff",
                width: "130px",
                height: "41px",
                padding: "10px",
                margin: "10px 0px 0px 5px",
                borderRadius: "0px",
                "&:hover": {
                  backgroundColor: "#333333",
                  color: "#ffffff",
                },
              }}
            >
              Request OTP
            </Button>
            <Link to="/login">
              <Button
                type="submit"
                sx={{
                  cursor: "pointer",
                  backgroundColor: "#333333",
                  color: "#ffffff",
                  width: "170px",
                  height: "41px",
                  padding: "10px",
                  margin: "10px 0px 0px 5px",
                  borderRadius: "0px",

                  "&:hover": {
                    backgroundColor: "#333333",
                    color: "#ffffff",
                  },
                }}
              >
                Register With Email
              </Button>
            </Link>
          </form>
          <Box
            sx={{
              color: "#FC2779",
              margin: "20px 5px",
              fontSize: "15px",
              padding: "4px 0px",
            }}
          >
            Enter your phone number to request an OTP
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                width: "100%",
                fontWeight: "300",
                margin: "15px 0px",
                textAlign: "center",
                fontSize: "15px",
                padding: "0px, 0px, 0px, 0px",
              }}
            >
              Registering for this site allows you to access your order status
              and history. Just fill in the fields below, and we'll get a new
              account set up for you in no time. We will only ask you for
              information necessary to make the purchase process faster and
              easier.
            </Box>
            <Box
              sx={{
                margin: "5px 10px",
                display: "flex",
                flexDirection: "row",
                gap: "2.5%",
                justifyContent: "center",
                padding: "10px 0px",
                fontSize: "12px",
              }}
            >
              <Box>
                <p
                  style={{
                    display: "inline-block",
                    margin: "3px 0px",
                  }}
                >
                  By Signing up or logging in, you agree to our
                </p>
              </Box>
              <Box
                sx={{
                  margin: "4px 0px",
                  cursor: "pointer",
                }}
              >
                <Link sx={{ color: "#000000DE", "&:hover": { color: "blue" } }}>
                  Terms and Conditions
                </Link>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login_V;
