'use client';

import React from 'react';

const PanicSessionAgreement: React.FC = () => {
  return (
    <div className="panic-session-agreement">
      <h1>Panic Session Agreement</h1>
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
  );
};

export default PanicSessionAgreement;
