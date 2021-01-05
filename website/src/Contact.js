import React from 'react';
import {Form,FormGroup,Label,Input,Row,Col,Button} from "reactstrap";
import Helpers from "./Helpers"

const Contact = (props) => {
    const [email,setEmail,rEmail]=Helpers("");
    const [etext,setText,rText]=Helpers("");
    const [etext2,setText2,rText2]=Helpers("");
    const [emes,setmes,rmes]=Helpers("");
    return(
        <div id="cont">
        <Form>
        <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleText">Name</Label>
            <Input value={etext} onChange={setText} type="text" name="text" id="exampleText" placeholder="First Name" />
          </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="exampleText">Surname</Label>
        <Input value={etext2} onChange={setText2} type="text" name="text" id="exampleText" placeholder="Last Name" />
      </FormGroup>
        </Col>
      </Row>
        <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input value={email} onChange={setEmail} type="email" name="email" id="exampleEmail" placeholder="Please enter email" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Message</Label>
        <Input value={emes} onChange={setmes} type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button onClick={()=>{rEmail();rText();rText2();rmes()}} color="primary">Send</Button>
    
    </Form>
        </div>
        )
}

export default Contact
