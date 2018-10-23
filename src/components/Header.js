import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { Link } from 'react-router-dom';
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
  <Navbar  collapseOnSelect fixedTop>
  <Navbar.Header>
    <Navbar.Brand><Link to='/'>SK inventory Management</Link></Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem ><Link to='/'>Dashboard</Link></NavItem>
      <NavDropdown eventKey={3} title="Inward" id="basic-nav-dropdown">
        <MenuItem ><Link to='/inwardentry'>Inward Entry</Link></MenuItem>
        <MenuItem ><Link to='/inwardreport'>Inward Report</Link> </MenuItem>
        <MenuItem divider />
        <MenuItem ><Link to='/todaysinward'>Today's Entry</Link> </MenuItem>
      </NavDropdown>
      <NavDropdown eventKey={3} title="Purchase" id="basic-nav-dropdown">
        <MenuItem ><Link to='/purchaseentry'>Purchase Entry</Link></MenuItem>
        <MenuItem ><Link to='/purchasereprot'>Purchase Report</Link> </MenuItem>
        <MenuItem divider />
        <MenuItem ><Link to='/todayspurchase'>Today's Entry</Link> </MenuItem>
      </NavDropdown>

      <NavDropdown eventKey={3} title="Sales" id="basic-nav-dropdown">
        <MenuItem ><Link to='/purchaseentry'>Sale Entry</Link></MenuItem>
        <MenuItem ><Link to='/purchasereprot'>Sale Report</Link> </MenuItem>
        <MenuItem divider />
        <MenuItem ><Link to='/todayspurchase'>Today's Entry</Link> </MenuItem>
      </NavDropdown>
      <NavDropdown eventKey={3} title="Advance" id="basic-nav-dropdown">
        <MenuItem ><Link to='/labouradvance'>Labour</Link></MenuItem>
        <MenuItem ><Link to='/agentadvance'>Agent</Link> </MenuItem>
        <MenuItem ><Link to='/customeradvance'>Customer</Link> </MenuItem>
        <MenuItem ><Link to='/freightadvance'>Friehgt</Link> </MenuItem>
      </NavDropdown>
       <NavDropdown eventKey={3} title="Report" id="basic-nav-dropdown">
        <MenuItem ><Link to='/labourreport'>Labour</Link></MenuItem>
        <MenuItem ><Link to='/agentreport'>Agent</Link> </MenuItem>
        <MenuItem ><Link to='/customerreport'>Customer</Link> </MenuItem>
        <MenuItem ><Link to='/freightreport'>Friehgt</Link> </MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
    <NavDropdown eventKey={3} title="Settings" id="basic-nav-dropdown">
        <MenuItem ><Link to='/createenewagent'>Create New Agent</Link></MenuItem>
        <MenuItem ><Link to='/createnewcustomer'>Create New Customer</Link></MenuItem>
        <MenuItem ><Link to='/createnewuser'>Create New User</Link></MenuItem>
        <MenuItem ><Link to='/createnewfreight'>Create New Freight</Link></MenuItem>
        <MenuItem ><Link to='/createnewfreight'>Prefix Setup</Link></MenuItem>
        <MenuItem ><Link to='/createnewfreight'>Sales Location</Link></MenuItem>
        <MenuItem divider />
        <MenuItem ><Link to='/logout'>Logout</Link> </MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    </nav>
  </header>
)

export default Header