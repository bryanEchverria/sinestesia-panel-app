import { Navbar, Nav, Button  } from 'react-bootstrap';
import MainOffCanvas from './offCanvas';
import { useState } from 'react';
const MainNavBar =()=>{
    const urlMenuIcon ='https://res.cloudinary.com/dlg0ke5dy/image/upload/v1679633211/sinestesia/icons8-men%C3%BA_mt0a1p.svg'
    const [showCanvas, setShowCanvas] = useState(false);
    const handleCloseCanvas = () => setShowCanvas(false);
    const handleShowCanvas = () => setShowCanvas(true);

    return (<>
      <Navbar className="container_navbar d-flex
       justify-content-between align-items-center" bg="" expand="lg">
      <Navbar.Brand href="#home">Panel de control sinestesia</Navbar.Brand>
        <Button onClick={handleShowCanvas} ><img src={urlMenuIcon}/></Button>
      
    </Navbar>
    <MainOffCanvas showCanvas={showCanvas} handleCloseCanvas={handleCloseCanvas}  />
    </>)
}

export default MainNavBar;