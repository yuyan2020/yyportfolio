import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <a href="https://www.linkedin.com/in/yanyunolimit/">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
