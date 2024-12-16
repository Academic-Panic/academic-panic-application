'use client';

// pages/agreement.tsx
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import PanicSessionAgreement from '@/components/PanicSessionAgreement';
import Cookies from 'js-cookie';

const AgreementPage: React.FC = () => {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    if (agreed) {
      Cookies.set('agreed', 'true'); // Set a cookie to remember agreement
      router.push('/addSession');
    } else {
      alert('You must agree to the terms before proceeding.');
    }
  };

  return (
    <Container
      className="mt-5"
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
      }}
    >
      <PanicSessionAgreement />
      <Form.Check
        type="checkbox"
        label="I read the terms and conditions"
        onChange={(e) => setAgreed(e.target.checked)}
        className="mb-3"
      />
      <Button variant="warning" className="mx-2" size="lg" style={{ marginBottom: '10px' }} onClick={handleAgree}>
        I AGREE
      </Button>
    </Container>
  );
};

export default AgreementPage;
