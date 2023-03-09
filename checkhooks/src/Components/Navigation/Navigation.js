import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css'
function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
       
        <Navbar.Brand href="#home"><img src='https://4.bp.blogspot.com/-HnIoCfZyQCA/X5Xk3inGz0I/AAAAAAAAEBw/5yTkdXvY9sY-7Mfy6Z6OAzpakGziVIUoACK4BGAYYCw/s1600/F.png' alt='Movie Time'/> </Navbar.Brand>
  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Navigation;