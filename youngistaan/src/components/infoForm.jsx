import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../axios";
import MultiSelect from "react-multi-select-component";


import { Form, Button } from "react-bootstrap";
const InfoForm = () => {
  const history = useHistory();
  const initialInfoData = Object.freeze({
    projectsInterested: [],
    phoneNumber: "",
    age: "",
    nameofCompanyorCollege: "",
    city: "",
    pastVolunteeringExperience: "",
    howDidYouHearAboutUs: "",
  });
  const config={
      headers:{'Authorization':`Bearer ${localStorage.getItem('access_token')}`,}};
  const [infoData, updateInfoData] = useState(initialInfoData);
  const [selected, setSelected] = useState([]);
  const handleChange = (e) => {
    updateInfoData({
      ...infoData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleCheckChange = (event) => {
    var info = infoData
    console.log(event)
    if (!event.target.defaultChecked) {
      if (!infoData.projectsInterested.includes(event.target.label)) {
        info.projectsInterested.push(event.target.label)
        updateInfoData(info)
      }
    } else {
      info.projectsInterested = infoData.projectsInterested.filter(function (value, index, arr) {
        return value === event.target.label
      });
    }
    console.log(infoData.projectsInterested);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(infoData);
    axiosInstance
      .post("api/user/userData/", {
        projectsInterested: selected,
    phoneNumber: infoData.phoneNumber,
    age:infoData.age,
    nameofCompanyorCollege: infoData.nameofCompanyorCollege,
    city: infoData.city,
    pastVolunteeringExperience:infoData.pastVolunteeringExperience,
    howDidYouHearAboutUs: infoData.howDidYouHearAboutUs,
      },config);
      
  };
  const options = [
    { label: "Bright Spark Education Program", value: "Bright Spark Education Program" },
    { label: "Transformers (Livelihood)", value: "Transformers (Livelihood)" },
    { label: "Feeding Program (Zero Hunger)", value: "Feeding Program (Zero Hunger)"},
    { label: "Women of Courage (Gender)", value: "Women of Courage (Gender)" },
    { label: "Youngistaan Animal Heroes", value: "Youngistaan Animal Heroes" },
    { label: "Blood Donor", value: "Blood Donor" },
    { label: "Other", value: "Other" },
  ];



  return (
    <div className="container d-flex align-self-center justify-content-center m-3 p-3">
      {/* let formStyle={
                background: 'white',
                padding: '1.5em',
                borderRadius: '1em'
            }
            let formGroupStyle={
                justifyContent:'center',
                alignItems: 'center'
            }
            let nameStyle={
                width: '35%',
                display: 'inline',
                margin: '0px 15px'
            }
            let labelStyle={
                float: 'left',
                margin: '7px 0px',
                fontWeight: '500',
                fontFamily: 'Fira Sans, sans-serif'
            }
            let textStyle={
                width: '95%'
            }
            let headingStyle={
                fontWeight: '500',
                fontFamily: 'Fira Sans, sans-serif'
            }
            let containerStyle={
                minHeight: '100vh',
                display: 'flex',
                fontWeight: '400',
                fontFamily: 'Fira Sans, sans-serif',
                width: '100%',
                height: '100%'
            }
            let rootStyle={
                width: '35vw',
                margin: '50px 490px',
                background: '#e1edf7'
            } */}

      <Form
        style={{ border: "1 px solid ", borderRadius: "1 em" }}
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="password">
          <Form.Label>Phone No. </Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age : </Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Enter your age"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="company">
          <Form.Label>College/Company : </Form.Label>
          <Form.Control
            type="text"
            name="nameofCompanyorCollege"
            placeholder="College/Company"
            onchange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City : </Form.Label>
          <Form.Control
            type="text"
            name="city"
            placeholder="Enter your city"
            onChange={handleChange}
          />
        </Form.Group>

        <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />

        <Form.Group controlId="experience">
          <Form.Label>Past Volunteering Experiences : </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            type="text"
            name="pastVolunteeringExperience"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="how">
          <Form.Label>How did you hear about us? </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            type="text"
            name="howDidYouHearAboutUs"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default InfoForm
