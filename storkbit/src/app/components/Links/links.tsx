import React from "react";
import Container from 'react-bootstrap/Container';
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { personalData } from "./../../personal-data";
import Tooltip from '@mui/material/Tooltip';
import "./links.css"


const Links = () => {
    return (
        <Container className="links tc">

            <Tooltip title="CV">
              <Link href={personalData.resume}>
                <IoDocumentText size={50} className="icon"/>
              </Link>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <Link
                href={personalData.linkedIn}
                target='_blank'>
                <BsLinkedin size={50} className="icon"/>
              </Link>
            </Tooltip>
            <Tooltip title="Email">
              <Link href={'mailto:' + personalData.email}>
                <MdEmail size={50} className="icon"/>
              </Link>
            </Tooltip>
            <Tooltip title="Mobile">
              <Link href={'tel:' + personalData.phone}>
                <MdPhone size={50} className="icon"/>
              </Link>
            </Tooltip>
            <Tooltip title="GitHub Website Code">
              <Link
                href={personalData.github}
                target='_blank'
              >
                <BsGithub size={50} className="icon"/>
              </Link>
            </Tooltip>
        </Container>
    );
}

export default Links;