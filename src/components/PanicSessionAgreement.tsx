'use client';

import React from 'react';
import { Row } from 'react-bootstrap';

const PanicSessionAgreement: React.FC = () => (
  <div
    className="panic-session-agreement"
    style={{
      marginTop: '30px',
      width: '80%',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'center',
      // height: '100vh',
      // textAlign: 'center', // Optional: Centers text inside the content
    }}
  >
    <h1 style={{ textAlign: 'center', color: 'white', padding: '20px' }}>Panic Session Agreement</h1>

    <Row
      className="text-box2 p-4 rounded"
      style={{
        width: '100%', // Matches the width of the parent div
        padding: '20px', // Adjusts internal spacing
      }}
    >

      {/* <div
        style={{
          marginTop: '50px', // Adjust this value to move the text further down
        }}
      > */}
      <ol>
        <li style={{ fontSize: '18px' }}>
          <strong>Meet in Public Places:</strong>
          <ul>
            <li>
              Always hold study sessions in safe, public locations such as libraries, coffee shops,
              or deignated study areas. Avoid private residences or secluded areas.
            </li>
          </ul>
        </li>
        <li style={{ fontSize: '18px' }}>
          <strong>Respect Personal Privacy:</strong>
          <ul>
            <li>
              Do not ask for or share sensitive information, such as home addresses, phone numbers,
              or financial details, with other group members.
            </li>
          </ul>
        </li>
        <li style={{ fontSize: '18px' }}>
          <strong>Be Respectful and Inclusive:</strong>
          <ul>
            <li>
              Treat all participants with respect, regardless of their background,
              beliefs, or opinions. Harrasment, discrimination, or offensive behavior will not be tolerated.
            </li>
          </ul>
        </li>
        <li style={{ fontSize: '18px' }}>
          <strong>Report Suspicious Behavior:</strong>
          <ul>
            <li>
              Immediately report any inappropriate, threatening, or suspicious
              behavior to the app administrators and your institution, if necessary.
            </li>
          </ul>
        </li>
        <li style={{ fontSize: '18px' }}>
          <strong>Do Not Exchange Account Credentials:</strong>
          <ul>
            <li>
              Never share login information for university portals,
              course materials, or any other accounts with study group members.
            </li>
          </ul>
        </li>
      </ol>
      {/* </div> */}
    </Row>
  </div>
);

export default PanicSessionAgreement;
