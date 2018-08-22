import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import {
  Nav,
  Navbar,
  NavItem,
  Button,
  ButtonToolbar,
  FormGroup,
  FormControl
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const {
      branding,
      upload,
      about,
      search,
      loginbutton,
      logoutbutton
    } = this.props;
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">{branding}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/add">
              <NavItem eventKey={1}>{upload}</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={2}>{about}</NavItem>
            </LinkContainer>
          </Nav>
          <Nav>
            <FormGroup controlId="formBasicText">
              <FormControl
                type="text"
                value={this.state.value}
                placeholder={search}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Nav>
          <Nav pullRight>
            <ButtonToolbar>
              <Button bsStyle="primary">{loginbutton}</Button>
              <Button bsStyle="danger">{logoutbutton}</Button>
            </ButtonToolbar>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.defaultProps = {
  branding: 'Bar Peak',
  about: 'About',
  upload: 'Upload',
  search: 'Search...',
  loginbutton: 'Log In',
  logoutbutton: 'Log Out'
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
