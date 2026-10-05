import React from 'react'
import '../css/componentCss/Header.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { NavLink } from 'react-router-dom';

export default function MainHeader({ pageHeading }) {
  return (
    <header id="mainHeader">
        <Row id="mainHeaderRow1">
            <Col id="mainHeaderCol1"/>
        </Row>
        <Row id="mainHeaderRow2">
            <Col/>
            <Col xs={6} id="mainHeaderCol2">
                <div id="mainHeaderPanal">
                    {/* Header Content */}
                    <h1 id="mainHeaderTitle">Welcome to Our Application</h1>
                    <h2>{pageHeading}</h2>
                </div>
            </Col>
            <Col/>
        </Row>
        <Row id="mainHeaderNavRow">
            <Col id="mainHeaderCol3">
             <Stack direction="horizontal" gap={3} id="mainHeaderNavStack">
      <div className="p-2">First item</div>
      <div className="p-2 ms-auto">Second item</div>
      <div className="vr" />
      <div className="p-2">
        <nav id="mainHeaderNav">
                    <ul id="mainHeaderNavList">
                        <li className='linkItem'><NavLink className="navLink" to="/">Login</NavLink></li>
                        <li className='linkItem'><NavLink className="navLink" to="/reg">Register</NavLink></li>
                    </ul> 
                </nav>
      </div>
    </Stack>
                
            </Col>
        </Row>
    </header>
  )
}
