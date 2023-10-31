import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Form from "react-bootstrap/Form";
import CardBody from "react-bootstrap/esm/CardBody";
import { useRef } from "react";

const Contact = () => {

  const name=useRef();
  const email=useRef();
  const mobile=useRef();

  const submitHandler=async (event)=>{
   event.preventDefault();
   const enteredName=name.current.value;
   const enteredEmail=email.current.value;
   const enteredMobile=mobile.current.value;
  
   const data=[]
   const userData={
    userName:enteredName,
    userEmail:enteredEmail,
    userMobile:enteredMobile
   }
   data.push(userData);

  //  console.log(data)


   const res = await fetch("https://react-post-request-6ba75-default-rtdb.firebaseio.com/movies.json",{
    method:'POST',
    body:JSON.stringify(data),
    header:{
      'Content-Type':'application/json'
    },
   })

   const main_data=await res.json();

   console.log(main_data)

   alert('Your Query is Registerd, We will Contact You Soon')


  }

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={4}>
          <Card className="shadow-lg, m-5">
            <Card.Header style={{ backgroundColor: " rgb(151, 118, 252)" }}>
              <h2>Contact Us</h2>
            </Card.Header>
            <CardBody>
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="mb-3"
                    type="text"
                    placeholder="Enter Your Name"
                    ref={name}
                  />
                  <Form.Label> Email</Form.Label>
                  <Form.Control
                    className="mb-3"
                    type="email"
                    placeholder="Enter Your Email"
                    ref={email}
                  />
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    className="mb-3"
                    type="number"
                    placeholder="Enter Your Mobile_Number"
                    ref={mobile}
                  />
                  <Button type="submit">Contact Us</Button>
                </Form.Group>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Contact;
