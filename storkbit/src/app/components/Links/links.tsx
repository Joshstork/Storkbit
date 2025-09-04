import React from "react";
import Container from 'react-bootstrap/Container';
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

import { personalData } from "./../../personal-data";
import "./links.css"


const Links = () => {
    return (
        <Container className="links tc">
          <a>
            <Link
              href={personalData.github}
              target='_blank'
            >
              <BsGithub size={30} className="icon ma3"/>
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
            >
              <BsLinkedin size={30} className="icon ma3"/>
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
            >
              <SiLeetcode size={30} className="icon ma3"/>
            </Link>
          </a>

          <a>
            <Link role="button" 
            className="resumeBtn"
            target="_blank"
            href={personalData.resume}>
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </a>
        </Container>
    );
}

export default Links;