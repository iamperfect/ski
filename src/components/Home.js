import React, {Component} from "react";
import axios from "axios";
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import PurchaseEntry from './purchase/Purchaseentry';
import Pagination from 'react-bootstrap/lib/Pagination';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      row:{},
      showResults:false,
      forEdit:null
    };
    this.handleLogoutClick = this.handleLogoutClick.bind(this);

  }
  componentDidMount(state){
    const that = this;
    axios('http://localhost/ski/api/v1/purchaseReport', {
      method: 'GET',
      config: { headers: {'Content-Type': 'multipart/form-data' }}
     
    }).then(function (response) {
      that.setState({
            row :response.data
          });
          //console.log(that.state.row);

         // that.state.row.map((row,index) => (console.log(row,index)));
          if(response.data.status==="error"){
            alert(response.data.message);
           

          }else if(response.data.status==="success"){
            alert(response.data.message);
          }

      }).catch(function (response) {
          console.log(response);
          
      });

  }

  handleLogoutClick(e) {
    console.log('test',e);
    this.setState({ showResults: true,forEdit: e });

    this.setState({
      forEdit:e,
      showResults: true
  },() => {
      console.log(this.state.forEdit);
  });


    console.log(this.state.forEdit);
  }


  render() {

    let active = 1;
    let items = [];
    for (let number = 1; number <= 10; number++) {
      items.push(
        <Pagination.Item active={number === active}>{number}</Pagination.Item>
      );
    }


    const paginationBasic = (
      <div className="paginationholder">
         <Pagination bsSize="small">{items}</Pagination>
      </div>
    );



      var  list = null;
      if(this.state.row.length){ console.log(this.state.forEdit);
      list = this.state.row.map(p =>{ //console.log(p);
        let editButton = "";
        if (p['order_status']==="Done") { //console.log(p['order_status']);
          editButton = <Button bsStyle="info"  bsSize="xsmall" key="{p.id}" onClick={()=>this.handleLogoutClick(p)}>Edit</Button>;
        }else{
          editButton = <Button bsStyle="info"  bsSize="xsmall" key="{p.id}" disabled>Sold</Button>;
        }

          return (
              <tr className="grey2" key={p.id+p['lsno']}>
                  {/* {Object.keys(p).filter(k => k !== 'id').map(k => { */}
                          <td key={p.id}>{p['lsno']}</td>
                          <td key={p.id}>{p['purchase_id']}</td>
                          <td key={p.id}>{p['order_date']}</td>
                          <td key={p.id}>{p['location']}</td>
                          <td key={p.id}>{p['vehicle_no']}</td>
                          <td key={p.id}>{p['driver_name']}</td>
                          <td key={p.id}>{p['broker']}</td>
                          <td key={p.id}>{p['load_weight']}</td>
                          <td key={p.id}>{p['empty_weight']}</td>
                          <td key={p.id}>{p['gross_weight']}</td>
                          <td key={p.id}>{p['shortage']}</td>
                          <td key={p.id}>{p['deduction']}</td>
                          <td key={p.id}>{p['unit']}</td>
                          <td key={p.id}>{p['order_status']}</td>
                          <td key={p.id}>{p['purchaseTotalamt']}</td>
                          <td key={p.id}>
                          <ButtonGroup >
                            {editButton}<span >&nbsp;</span><Button bsStyle="warning"  bsSize="xsmall">Print</Button>
                          </ButtonGroup>
                          
                          </td>
                    
                {/* })}*/}
              </tr>
          );
      });
    

    }


    return (
      <div className="fluidcontainer">
      <Table striped bordered condensed hover responsive pagination>
      <thead>
        <tr>
        <th>#</th>
        <th>Bill no</th>
        <th>Purchase Date</th>
        <th>Location</th>
        <th>Vehicle no</th>
        <th>Driver name</th>
        <th>Broker</th>
        <th>Load weight</th>
        <th>Empty</th>
        <th>Gross</th>
        <th>Shortage</th>
        <th>Deduction %</th>
        <th>Unit</th>
        <th>Status</th>
        <th>Purchase  Amount</th>
        <th>Operations</th>
        </tr>
      </thead>
      <tbody>
       {/* this.state.row.map((val,index) => (<tr>{val}</tr>));*/}
       {list}
      </tbody>
    </Table>
      {paginationBasic}
    {this.state.showResults &&   <PurchaseEntry props={this.state.forEdit}/>  }
    </div>
    )
  }
}
export default Home
