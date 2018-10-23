import React, {Component} from "react";
import Table from 'react-bootstrap/lib/Table';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Form from 'react-bootstrap/lib/Form';

{/*class PurchasEntry extends Component {*/}
  const PurchasEntry = (prop) => (
       
            <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={1}>Invoice no</Col>
              <Col sm={1}>
                    <FormControl componentClass="select" placeholder="select">
                        <option selected value={prop.props.weight_type_Point}>{prop.props.weight_type_Point}</option>
                        <option value="other">Other</option>
                    </FormControl>
              </Col>
              <Col sm={1}><FormControl type="text" disabled value={prop.props.invoice_no} /></Col>
              <Col componentClass={ControlLabel} sm={1}>Select the inward entry</Col>
              <Col sm={2}>
                    <FormControl componentClass="select" placeholder="select">
                        <option selected value={prop.props.vehicle_no}>{prop.props.billing_date +'-'+ prop.props.vehicle_no}</option>
                        <option value="other">Other</option>
                    </FormControl>
            </Col>

              <Col componentClass={ControlLabel} sm={1}>Date</Col>
              <Col sm={2}><FormControl type="text" value={prop.props.order_date} /></Col>
              <Col componentClass={ControlLabel} sm={1}>Drive Name</Col>
              <Col sm={2}><FormControl type="text" value={prop.props.driver_name} /></Col>
              
            </FormGroup>

             <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={1}>Customer</Col>
              <Col sm={2}><FormControl type="text" value={prop.props.sales_rep}/></Col>
              <Col componentClass={ControlLabel} sm={1}>Broker</Col>
              <Col sm={2}><FormControl type="text" value={prop.props.broker} /></Col>

              <Col componentClass={ControlLabel} sm={1}>Location</Col>
              <Col sm={2}><FormControl type="text" value={prop.props.location} /></Col>
              <Col componentClass={ControlLabel} sm={1}>Mobile no</Col>
              <Col sm={2}><FormControl type="text" value={prop.props.driver_mobile} /></Col>
              
            </FormGroup>


             <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={1}>Inward Entry Date</Col>
              <Col sm={2}><FormControl type="text" value={prop.props.billing_date} /></Col>
              <Col componentClass={ControlLabel} sm={1}>Product</Col>
              <Col sm={2}><FormControl type="text" value={prop.props.product} /></Col>

              <Col componentClass={ControlLabel} sm={1}>Labour</Col>
              <Col sm={2}><FormControl type="text" value={prop.props.labour_name} /></Col>
              <Col componentClass={ControlLabel} sm={1}>Vehicle No</Col>
              <Col sm={2}><FormControl type="text" value={prop.props.vehicle_no} /></Col>
              
            </FormGroup>

           
<Table striped bordered condensed hover responsive>
  <thead>
    <tr>
      <th>Load Weight</th>
      <th>Empty Weight</th>
      <th>Gross Weight</th>
      <th>Shortage in kgs</th>
      <th>Net Volume</th>
      <th>Deduction %</th>
      <th>Units by Prefix</th>
      <th>Rate (Amount)</th>
      <th>Value (Total)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><FormControl type="text" value={prop.props.load_weight}/></td>
      <td><FormControl type="text" value={prop.props.empty_weight} /></td>
      <td><FormControl type="text" value={prop.props.gross_weight} /></td>
      <td><FormControl type="text" value={prop.props.shortage} /></td>
      <td><FormControl type="text" value={prop.props.net_weight} /></td>
      <td><FormControl type="text" value={prop.props.deduction} /></td>
      <td><FormControl type="text" value={prop.props.unit} /></td>
      <td><FormControl type="text" value={prop.props.purchase_withoutsplit_point_totalamt} /></td>
      <td><FormControl type="text" className="txtbxalignright" value={prop.props.netamount} /></td>
      
    </tr>
    <tr>
      <td colSpan="6">
              <Col componentClass={ControlLabel} sm={2}>Lorry Advance</Col>
              <Col sm={2}><FormControl type="text" /></Col>
              <Col sm={2}><FormControl type="text" /></Col>
        </td>
        <td ><FormControl type="text" /></td>
      <td ><FormControl type="text" /></td>
      <td ><FormControl type="text" /></td>
    </tr>
    <tr>
      <td colSpan="6">
                <Col componentClass={ControlLabel} sm={2}>Labour Advance</Col>
              <Col sm={2}><FormControl type="text" /></Col>
              <Col sm={2}><FormControl type="text" /></Col>
      </td>
      <td ><FormControl type="text" /></td>
      <td ><FormControl type="text" /></td>
      <td ><FormControl type="text" /></td>
    </tr>
    <tr>
      <td colSpan="6">
                <Col componentClass={ControlLabel} sm={2}>Agent Advance</Col>
              <Col sm={2}><FormControl type="text" /></Col>
              <Col sm={2}><FormControl type="text" /></Col>
      </td>
      <td ><FormControl type="text" /></td>
      <td ><FormControl type="text" /></td>
      <td ><FormControl type="text"/></td>
    </tr>
    <tr>
      <td colSpan="6">
                <Col componentClass={ControlLabel} sm={2}>Customer Advance</Col>
              <Col sm={2}><FormControl type="text" /></Col>
              <Col sm={2}><FormControl type="text" /></Col>
      </td>
      <td ><FormControl type="text" /></td>
      <td ><FormControl type="text" /></td>
      <td ><FormControl type="text" /></td>
    </tr>

    <tr>
      <td colSpan="4">
        
        <Col componentClass={ControlLabel} sm={3}>Agent Commision II</Col>
        <Col sm={4}>
        <ButtonGroup>
            <Button bsSize="small">Yes</Button>
            <Button bsSize="small" active>No</Button>
        </ButtonGroup>
        </Col>
      </td>
      <td colSpan="4">
      <Col componentClass={ControlLabel} sm={4}>Agent Commision</Col>

            <ButtonGroup>
                <Button bsSize="small"active>Add</Button>
                <Button bsSize="small">Dont Add</Button>
            </ButtonGroup>
      
      </td>
      <td><FormControl type="text"  className="txtbxalignright" value={prop.props.agent_commision}/></td>
    </tr>




    <tr>
    <td colSpan="4">
      <Col componentClass={ControlLabel} sm={3}>Unloading Charges</Col>
         <Col sm={3}><FormControl type="text" /></Col>
      </td>
      <td colSpan="4">
      <Col componentClass={ControlLabel} sm={4}>Unloading</Col>
            <ButtonGroup>
                <Button bsSize="small" active>Deduct</Button>
                <Button bsSize="small">Dont Deduct</Button>
            </ButtonGroup>
      
      </td>
      <td colSpan="1"><FormControl type="text" className="txtbxalignright" /></td>
    </tr>
    <tr>
    <td colSpan="4">
         <Col componentClass={ControlLabel} sm={3}>Lorry Frieght </Col>
         <Col sm={3}><FormControl type="text" />[ F2 for breakup ]</Col>
         <Col componentClass={ControlLabel} sm={3}>Labour charges</Col>
         <Col sm={3}><FormControl type="text" />[ F2 for breakup ]</Col>
      
    
    </td>
    <td colSpan="4">
      <Col componentClass={ControlLabel} sm={4}>Labour & Freight</Col>
            <ButtonGroup>
                <Button bsSize="small">Deduct</Button>
                <Button bsSize="small">Dont Deduct</Button>
            </ButtonGroup>
      
      </td>
      <td colSpan="1"><FormControl type="text" className="txtbxalignright"/></td>
    </tr>

    <tr>
    <td colSpan="4">
         <Col componentClass={ControlLabel} sm={3}>Miscellaneous </Col>
         <Col sm={3}><FormControl type="text" /></Col>
         <Col componentClass={ControlLabel} sm={3}>Remarks</Col>
         <Col sm={3}><FormControl type="text" /></Col>
      
    
    </td>
    <td colSpan="4">
      <Col componentClass={ControlLabel} sm={4}>Miscellaneous</Col>
            <ButtonGroup>
                <Button bsSize="small">Deduct</Button>
                <Button bsSize="small">Dont Deduct</Button>
            </ButtonGroup>
      
      </td>
    
      <td colSpan="1"><FormControl type="text" className="txtbxalignright"/></td>
    </tr>
    <tr>
    <td colSpan="8">
    <Col componentClass={ControlLabel} sm={9}>PRINT:&nbsp;
    <ButtonGroup >
        <Button bsStyle="info" bsSize="small">பட்டியல்</Button>
        <Button bsStyle="info" bsSize="small">ஏஜென்ட் கமிசன்</Button>
        <Button bsSize="small">ஏஜென்ட் கமிசன் II</Button>
        <Button bsStyle="info" bsSize="small">லாரி பிரைட் </Button>
        <Button bsSize="small">வெட்டுக்கூலி </Button>
        <Button bsSize="small">கஸ்டமர் </Button>
        <Button bsSize="small">இதர செலவுகள் </Button>
    </ButtonGroup>
    </Col>
    <Col componentClass={ControlLabel} smOffset={1} sm={2}>Total Amount </Col>
    
    </td>
    <td colSpan="1" className="txtalignright">{prop.props.profitlossFval}</td>

    </tr>

  </tbody>
</Table>

            
          
           { /*<FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>*/}
          
            <FormGroup>
              <Col smOffset={11} sm={1}>
                <Button type="submit" bsStyle="success">SUBMIT</Button>
              </Col>
            </FormGroup>
          </Form>
  );
   
export default PurchasEntry;