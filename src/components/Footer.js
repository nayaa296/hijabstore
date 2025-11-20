import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f3e5f5',
      color: '#6a1b9a',
      padding: '20px 0',
      marginTop: '40px',
      textAlign: 'center',
      borderTop: '2px solid #ce93d8'
    }}>
      <Container>
        <p style={{ marginBottom: '5px', fontWeight: '500' }}>
          © 2025 Aura Hijab. All rights reserved.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
          <a 
            href="https://www.instagram.com/hfzhnyaah_?igsh=MXRpNm52cHBjcjhtag==" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#6a1b9a', textDecoration: 'none', fontWeight: '500' }}
          >
            <i className="bi bi-instagram" style={{ marginRight: '8px' }}></i>@aurahijab.id
          </a>
          <a 
            href="https://wa.me/6287758879537" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#388e3c', textDecoration: 'none', fontWeight: '500' }}
          >
            <i className="bi bi-whatsapp" style={{ marginRight: '8px' }}></i>+62 812-3456-7890
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;