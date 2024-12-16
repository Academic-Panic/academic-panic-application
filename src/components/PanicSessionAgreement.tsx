'use client';

import React from 'react';
import { Row, Button } from 'react-bootstrap';

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
      fontFamily: 'AmollaRaspersItalic',
      // height: '100vh',
      // textAlign: 'center', // Optional: Centers text inside the content
      paddingBottom: '30px',
    }}
  >
    <h1
      style={{
        textAlign: 'center',
        color: 'white',
        padding: '15px',
        marginTop: '10px',
        fontFamily: 'AmollaRaspersItalic',
      }}
    >
      PANIC SESSION AGREEMENT
    </h1>

    <Row
      className="text-box2 p-4 rounded"
      style={{
        width: '100%', // Matches the width of the parent div
        // padding: '10px', // Adjusts internal spacing
      }}
    >

      {/* <div
        style={{
          marginTop: '50px', // Adjust this value to move the text further down
        }}
      > */}
      <ol>
        <li style={{ fontSize: '18px' }}>
          <strong>MEET IN PUBLIC PLACES:</strong>
          <ul>
            <li>
              ALWAYS HOLD STUDY SESSIONS IN SAFE, PUBLIC LOCATIONS SUCH AS LIBRARIES, COFFEE SHOPS,
              OR DESIGNATED STUDY AREAS. AVOID PRIVATE RESIDENCES OR SECLUDED AREAS.
            </li>
          </ul>
        </li>
        <li style={{ fontSize: '18px' }}>
          <strong>RESPECT PERSONAL PRIVACY:</strong>
          <ul>
            <li>
              DO NOT ASK FOR A SHARE SENSITIVE INFORMATION, SUCH AS HOME ADDRESSES, PHONE NUMBERS,
              OR FINANCIAL DETAILS, WITH OTHER GROUP MEMBERS.
            </li>
          </ul>
        </li>
        <li style={{ fontSize: '18px' }}>
          <strong>BE RESPSECTFUL AND INCLUSIVE:</strong>
          <ul>
            <li>
              TREAT ALL PARTICIPANTS WITH RESPECT, REGARDLESS OF THEIR BACKGROUND,
              BELIEFS, OR OPINIONS. HARRASMENT, DISCRIMINATION, OR OFFENSIVE BEHAVIOR WILL NOT BE TOLERATED.
            </li>
          </ul>
        </li>
        <li style={{ fontSize: '18px' }}>
          <strong>REPORT SUSPICIOUS BEHAVIOR:</strong>
          <ul>
            <li>
              IMMEDIATELY REPORT ANY INNAPROPRIATE, THREATENING, OR SUSPICIOUS
              BEHAVIOR TO THE APP ADMINISTRATORS AND YOUR INSTITUTION, IF NECESSARY.
            </li>
          </ul>
        </li>
        <li style={{ fontSize: '18px' }}>
          <strong>DO NOT EXCHANGE ACCOUNT CREDENTIALS:</strong>
          <ul>
            <li>
              NEVER SHARE LOGIN INFORMATION FOR UNIVERSITY PORTALS,
              COURSE MATERIALS, OR ANY OTHER ACCOUNTS WITH STUDY GROUP MEMBERS.
            </li>
          </ul>
        </li>
      </ol>
      {/* </div> */}
    </Row>
    {/* <div className="button-group mt-3">
      <Button variant="primary" className="mx-2">
        I AGREE
      </Button>
      <Button variant="success" className="mx-2">
        Signup
      </Button>
    </div>
    <Button variant="warning" className="mx-2" size="lg" style={{ marginTop: '10px' }}>
      I AGREE
    </Button>
    <Button variant="link" style={{ color: 'white' }}>
      CANCEL
    </Button>
    */}
  </div>
);

export default PanicSessionAgreement;
