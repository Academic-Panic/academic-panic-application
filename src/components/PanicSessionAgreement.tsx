'use client';

import React from 'react';
import { Row } from 'react-bootstrap';

const PanicSessionAgreement: React.FC = () => (
  <div
    className="panic-session-agreement"
    style={{
      marginTop: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // height: '100vh',
      // textAlign: 'center', // Optional: Centers text inside the content
    }}
  >
    <Row className="text-box p-4 rounded">
      <h1 style={{ textAlign: 'center' }}>Panic Session Agreement</h1>

      <div
        style={{
          marginTop: '50px', // Adjust this value to move the text further down
        }}
      >
        <ol>
          <li>
            <strong>Meet in Public Places:</strong>
            <ul>
              <li>Always hold study sessions in safe, public locations.</li>
              <li>Avoid private residences or secluded areas.</li>
            </ul>
          </li>
          <li>
            <strong>Respect Personal Privacy:</strong>
            <ul>
              <li>Do not ask for or share sensitive information.</li>
            </ul>
          </li>
          <li>
            <strong>Be Respectful and Inclusive:</strong>
            <ul>
              <li>Discrimination or offensive behavior will not be tolerated.</li>
            </ul>
          </li>
          <li>
            <strong>Report Suspicious Behavior:</strong>
            <ul>
              <li>Report any inappropriate or threatening behavior immediately.</li>
            </ul>
          </li>
          <li>
            <strong>Do Not Exchange Account Credentials:</strong>
            <ul>
              <li>Never share login information.</li>
            </ul>
          </li>
        </ol>
      </div>
    </Row>
  </div>
);

export default PanicSessionAgreement;
