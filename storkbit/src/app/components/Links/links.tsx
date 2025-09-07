import React from "react";
import Container from 'react-bootstrap/Container';
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail, MdPhone } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";
import { personalData } from "./../../personal-data";
import "./links.css"


const Links = () => {
    return (
        <Container className="links tc">
          <a>
            
            <Link href={personalData.resume}>
              <IoDocumentText size={50} className="icon"/>
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
            >
              <BsLinkedin size={50} className="icon"/>
            </Link>
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
          </a>
        </Container>
    );
}

export default Links;