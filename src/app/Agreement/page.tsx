// pages/agreement.tsx
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import PanicSessionAgreement from '@/components/PanicSessionAgreement'

const AgreementPage: React.FC = () => {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    if (agreed) {
      router.push('src/app/AddSession/page.tsx'); // Replace with the actual path for creating a study session
    } else {
      alert('You must agree to the terms before proceeding.');
    }
  };

  return (
    <Container>
      <PanicSessionAgreement/>
    </Container>
  );
};

export default AgreementPage;
