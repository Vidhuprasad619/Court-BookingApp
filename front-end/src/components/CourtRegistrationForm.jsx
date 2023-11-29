import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import AxiosInstance from "../config/axiosInstance";

function CourtRegistrationForm() {
  const [registrationData, setRegistrationData] = useState({
    name: "",
    location: "",
    price: 0,
    contact: 0,
    about: "",
  });

  const [courtImage, setCourtImage] = useState();

  const handleCourtImage = (e) => {
    setCourtImage({ file:e.target.files[0] });
  };

  const handleCourtRegistration = () => {
    let fileData = new FormData();
    fileData.append("image", courtImage.file);
    AxiosInstance.post("/users/court-register", fileData, {
      params: registrationData,
    },{
        Headers:{'content-type' : 'multipart/form-data'}
    }).then((res) => {
      alert(res.data.message);
    }).catch(res=>{
        alert(res.data.message);
    })
  };

  return (
    <>
      <div className=" d-flex flex-column justify-content-cente align-items-center pb-5">
        <Form className="w-50">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Court Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg: D sports"
              value={registrationData.name}
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  name: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg: Kozhikode"
              value={registrationData.location}
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  location: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Charge per day</Form.Label>
            <Form.Control
              type="number"
              placeholder="eg: 1500"
              value={registrationData.price}
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  price: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="contact"
              placeholder="eg: 9945564240"
              value={registrationData.contact}
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  contact: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Court Image</Form.Label>
            <Form.Control type="file" onChange={handleCourtImage} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>About your Court</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={registrationData.about}
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  about: e.target.value,
                })
              }
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={handleCourtRegistration}
          >
            Register
          </Button>
        </Form>
      </div>
    </>
  );
}

export default CourtRegistrationForm;
