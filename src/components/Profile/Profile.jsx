import React, { useState } from "react";
import { Link } from 'react-router-dom';

import ProfileIcon from "../../assets/user.png";
import Book from "../../assets/book.png";
import Human from "../../assets/human.png";
import Knowledge from "../../assets/knowledge.png";
import BottomLeft from "../../assets/bottom-left.png";
import BottomRight from "../../assets/bottom-right.png";

import Input from "../General/Input";

import "./Profile.css";

const Profile = () => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const [stydingInfo, setStydingInfo] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <div className="root">
      <header className="profileHeader">
        <Link to="/general" className="profilelink">
          <div className="title">Your profile</div>
        </Link>
        {/* <div className="title">Your profile</div> */}
      </header>
      <div>
        <div className="content">
          <div className="userInfo">
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <img src={ProfileIcon} className="profileIcon" alt="Profile icon" />
            <Input
              placeholder="Change my info"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
            <Input
              placeholder="About me"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
          <div className="contentInfo">
            <div className="contentItem">
              <Input
                placeholder="Your skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
              <img src={Human} className="humanIcon" alt="Human icon" />
            </div>
            <div className="contentInfoSecond">
              <img
                src={Knowledge}
                className="knowledgeIcon"
                alt="Knowledge icon"
              />
              <Input
                placeholder="What I am studying"
                value={stydingInfo}
                onChange={(e) => setStydingInfo(e.target.value)}
              />
            </div>
            <div className="contentItem">
              <Input
                placeholder="Subject*"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <img src={Book} className="bookIcon" alt="Book icon" />
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
