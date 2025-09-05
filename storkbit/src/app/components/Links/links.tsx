import React from "react";
import Container from 'react-bootstrap/Container';
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload, MdEmail, MdPhone } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { personalData } from "./../../personal-data";
import "./links.css"


const Links = () => {
    return (
        <Container className="links tc">
          <a>
            <Link href={'mailto:' + personalData.email}>
              <MdEmail size={50} className="icon"/>
            </Link>
            <Link href={'tel:' + personalData.phone}>
              <MdPhone size={50} className="icon"/>
            </Link>
            <Link
              href={personalData.github}
              target='_blank'
            >
              <BsGithub size={50} className="icon"/>
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
            >
              <BsLinkedin size={50} className="icon"/>
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
            >
              <SiLeetcode size={50} className="icon"/>
            </Link>
            <Link role="button" 
            className="resumeBtn"
            target="_blank"
            href={personalData.resume}>
              <span>CV</span>
              <MdDownload size={20} />
            </Link>
          </a>
        </Container>
    );
}

export default Links;