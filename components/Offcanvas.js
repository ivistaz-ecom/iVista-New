import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';



function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Offcanvas show={show} onHide={handleClose} placement='end' >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        I will not close if you click outside of me.
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Example;