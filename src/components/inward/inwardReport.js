import React, {Component} from "react";
import axios from "axios";
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import {Pagination} from 'react-bootstrap';
import Paginator from '../pagination/pagination';
class InwardReport extends Component{
    constructor(props){
        super(props);
        this.state={
            row:{},
            showResults:false,
            forEdit:null,
            activePage: 1,
            currentPageNumber: 1,
            numItemsPerPage: 10,
            totalItems: 1,
            limit: 10,
            toshow:10,
            currentIndex:0,
            renderD:{}
          };
          this.pageChangeHandler = this.pageChangeHandler.bind(this);
    };
    componentDidMount(state){
        const that = this;
        axios('http://localhost/ski/api/v1/inwardEntries', {
          method: 'GET',
          config: { headers: {'Content-Type': 'multipart/form-data' }}
         
        }).then(function (response) {//alert('test');
           console.log('----------------------------------------',Math.ceil(response.data.length/10));
           var tempData = [];
           if(Math.ceil(response.data.length/10)>1){
             for(var i=0;i<10;i++)
             tempData.push(response.data[i])
           }
          that.setState({
                row :response.data,
                renderD:tempData,
                totalItems : Math.ceil(response.data.length/10)
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
      pageChangeHandler(e,i){ console.log(i.refs);
         //this.props.onPaginate(e);
         let whichpage = (e-1)*10+1,limit=whichpage+10;
         this.setState({
           currentPageNumber: e,
           currentIndex:whichpage
          });
         // limit = e==1 ? 10 | limit;
          console.log(whichpage-1,limit);
          let tempData =[];
          for(var i=whichpage-1;i<=limit;i++){ console.log(this.state.row[i]);
            if(this.state.row[i])
             tempData.push(this.state.row[i]);
          }
           console.log(tempData);
          this.setState({
               
                renderD:tempData
               
              });
          

         //console.log();
      }
    render(){


     let active = 1;
     let items = [];
  


    //var  paginationBasic = null;
        var  list = "No record Found ! ";
        if(this.state.row.length){ 
          
            var lengths = Math.ceil(this.state.row.length/10)
            if(lengths>1){
            for (let number = 1; number <=lengths ; number++) {
                items.push(
                  <Pagination.Item key={number} active={number === active} onClick={()=>this.pageChangeHandler(number,this)}>{number}</Pagination.Item>
                );
              }
            }

             /* paginationBasic = (
                <div className="paginationholder">
                   <Pagination bsSize="small" >{items}</Pagination>
                </div>
              );
            }
            var startOffset = (this.state.activePage-1) * 10;
            var startCount = 0;*/

        list = this.state.renderD.map((p,index) =>{ //console.log(p);
          let editButton = "";
          if (p['order_status']==="Done") { //console.log(p['order_status']);
            editButton = <Button bsStyle="info"  bsSize="xsmall" key="{p.id}" onClick={()=>this.handleLogoutClick(p)}>Edit</Button>;
          }
          //if(index >= startOffset && startCount < 9){
              
            //this.startCount++;
            return (
                
                <tr className="grey2" key={p.id+p['lsno']}>
                    {/* {Object.keys(p).filter(k => k !== 'id').map(k => { */}
                            <td key={p.id}>{index+1}</td>
                            <td key={p.id}>{p['purchase_id']}</td>
                            <td key={p.id}>{p['order_date']}</td>
                            <td key={p.id}>{p['location']}</td>
                            <td key={p.id}>{p['vehicle_no']}</td>
                            <td key={p.id}>{p['driver_name']}</td>
                            <td key={p.id}>{p['broker']}</td>
                            <td key={p.id}>{p['load_weight']}</td>
                            <td key={p.id}>{p['empty_weight']}</td>
                            <td key={p.id}>{p['gross_weight']}</td>
                            <td key={p.id}>{p['order_status']}</td>
                            <td key={p.id}>
                            <Button bsStyle="info"  bsSize="xsmall" key="{p.id}" onClick={()=>this.handleLogoutClick(p)}>Edit</Button>
                            
                            </td>
                      
                  {/* })}*/}
                </tr>
                   
            );
        //}
        });
      
  
      }


        return(
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
        <th>Status</th>
        <th>Need to change ?</th>
        </tr>
      </thead>
      <tbody>
       {/* this.state.row.map((val,index) => (<tr>{val}</tr>));*/}
       {list}
      </tbody>
    </Table>
      {/*paginationBasic*/}
      <Paginator 
        totalItems={items || 1} 
        currentPageNumber={this.state.currentPageNumber || 1} 
        pageChangeHandler={this.pageChangeHandler.bind(this)}>
        </Paginator>
    </div>
        )
    };
}
export default InwardReport;