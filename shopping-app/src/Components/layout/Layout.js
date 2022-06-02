import React from 'react';
import Header from './Header';
import { Container } from 'react-bootstrap';
import '../../App.css';
import Footer from './Footer';

function Layout(props) {
  return (
    <div>
      <Header />
      <main className="main-container">
        <Container>{props.children}</Container>
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
