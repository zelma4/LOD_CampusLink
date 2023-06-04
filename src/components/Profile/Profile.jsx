import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { subjects } from "../constants.js";
import Select from "react-select";

import Book from "../../assets/book.png";
import BottomLeft from "../../assets/bottom-left.png";
import BottomRight from "../../assets/bottom-right.png";

import Input from "../General/Input";

import "./Profile.css";

const Profile = () => {
  const data = useLoaderData();
  const studentInfo = data[0];

  const [name, setName] = useState(studentInfo?.name || "");
  const [age, setAge] = useState(studentInfo?.age || "");
  const [email, setEmail] = useState(studentInfo?.email || "");
 
  const [subject, setSubject] = useState(studentInfo?.subjects || []);
  const [photo, setPhoto] = useState(studentInfo?.photo || "");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const saveChanges = () => {
    const data = {
      name: name,
      age: age,
      email: email,
      subjects: subject,
      photo: photo,
    };

    fetch(`${process.env.REACT_APP_BASE_URL}api/update/646a35c275b2bb232921e47d`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const subjectsOptions = subjects.map((el) => ({
    label: el.name,
    value: el.name,
  }));

  // Стилі для компонента Select
  const selectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#FDEFE0", // Колір фону
      
    }),
  };

  return (
    <div className="root">
      <header className="profileHeader">
        <Link to="/general" className="profilelink">
          <div className="title">Your profile</div>
        </Link>
      </header>
      <div>
        <div className="content">
          <div className="userInfo">
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="profile_image_box">
              <div>
                <img
                  src={photo}
                  alt="profile_image"
                  className="profile_image"
                />
              </div>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="photo_upload_input"
              />
            </div>
            <div className="contentItem">
              <Input
                placeholder="Your age"
                value={age} 
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="contentInfoSecond">
              <Input
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="contentInfo">
            <div>
            <img src={Book} className="bookIcon" alt="Book icon" />
            </div>
            <div className="contentItem">
              <Select
                isMulti
                menuPlacement="auto"
                placeholder="Select subjects"
                value={subject.map((sub) => ({
                  label: sub,
                  value: sub,
                }))}
                options={subjectsOptions}
                onChange={(selectedOptions) => {
                  const selectedSubjects = selectedOptions.map(
                    (option) => option.value
                  );
                  setSubject(selectedSubjects);
                }}
                styles={selectStyles} // Передача стилів для Select
              />
            </div>
            <div>
              <button className="save_effect" onClick={() => saveChanges()}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={BottomLeft}
          className="bottomLeftSection"
          alt="Bottom left section"
        />
        <img
          src={BottomRight}
          className="bottomRightSection"
          alt="Bottom right section"
        />
      </div>
    </div>
  );
};

export default Profile; 