import React from 'react'
import '../css/componentsCss/Header.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
export default function Header({ pageHeader, currentUser }) {
  return (
    <div className="header">
    <Row>
        <Col></Col>
    </Row>
    <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>
            <span>
 <h1>My App</h1>
      <h2>{pageHeader}</h2>
            </span>
        </Col>
        <Col>3 of 3</Col>
      </Row>
    <Row>
    <Col md={12}>
        <nav className="headerNav">
            <ul className="headerNavList">
                <li>
                    <NavLink className="navLink" to="/">HOME</NavLink>
                </li>
            </ul>
        </nav>
    </Col>
    </Row>
     

    </div>
  )
}
