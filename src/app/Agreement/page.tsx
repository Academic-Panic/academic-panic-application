// pages/agreement.tsx
import { useRouter } from 'next/router';
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
      router.push('../addSession/page.tsx');
    } else {
      alert('You must agree to the terms before proceeding.');
    }
  };

  return (
    <Container className="mt-5">
      <PanicSessionAgreement />
      <Form.Check
        type="checkbox"
        label="I agree to the terms and conditions"
        onChange={(e) => setAgreed(e.target.checked)}
        className="mb-3"
      />
      <Button variant="primary" onClick={handleAgree}>
        Proceed
      </Button>
    </Container>
  );
};

export default AgreementPage;
