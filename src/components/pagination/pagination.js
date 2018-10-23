import React, {Component} from "react";
import {Pagination} from 'react-bootstrap';
class Paginator extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPageNumber : 1,
            totalItems : 1
        }
    }
    componentWillReceiveProps(newProps){ console.log('----------------------************',newProps)
        this.setState({
            currentPageNumber:newProps.currentPageNumber,
            totalItems:newProps.totalItems
        });
    }
    handleSelect(eventKey){console.log('*****************************compo',eventKey);
        this.props.pageChangeHandler(eventKey)
    }
    render(){
        return(
           <Pagination className="paginationholder" bsSize="medium" activePage={this.state.currentPageNumber}   onSelect={this.handleSelect}>{this.state.totalItems}</Pagination>
        );
    }
}
export default Paginator;