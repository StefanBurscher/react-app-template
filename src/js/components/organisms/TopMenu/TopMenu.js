import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as appActions from '../../../redux/actions'
import './TopMenu.css'

class TopMenu extends Component {
    render() {
        return (
            <>
                <Navbar className="topMenu" expand="lg" variant="light" sticky="top">
                    <Container>
                        <Link to="/">
                            <Navbar.Brand>Logo</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Link className="nav-link" to="/search">
                                    Search
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.profile
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(appActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopMenu)
