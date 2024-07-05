import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-area">
            <Container>
                <Row className="align-items-center">
                    <Col xl={6}>
                        <div className="copyright">
                            <p>© <a href="https://github.com/ibrahim31898" target="_blank" rel="referred">Echooling</a>. All Rights Reserved</p>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div className="footer-social">
                            <span>Follow us</span>
                            <Link to="/" className="icon"><FaFacebookF></FaFacebookF></Link>
                            <Link to="/" className="icon"><FaTwitter></FaTwitter></Link>
                            <Link to="/" className="icon"><FaGithub></FaGithub></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;