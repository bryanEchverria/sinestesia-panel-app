import { Offcanvas ,Nav} from "react-bootstrap";

const MainOffCanvas = (props)=>{
    const {showCanvas, handleCloseCanvas} = props;
    console.log(showCanvas,handleCloseCanvas)
    return(<>
          <Offcanvas show={showCanvas} onHide={handleCloseCanvas} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu admin</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="flex-column">
            <Nav.Link className=""  href="/product">PRODUCTOS</Nav.Link>
            <Nav.Link href="#">USUARIOS</Nav.Link>
            <Nav.Link href="#">VENTAS</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>)
}

export default MainOffCanvas;