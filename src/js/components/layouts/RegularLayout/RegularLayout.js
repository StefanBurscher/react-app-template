import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import TopMenu from '../../organisms/TopMenu/TopMenu'
import './RegularLayout.css'

class RegularLayout extends Component {
    render() {
        const { children } = this.props
        return (
            <>
                <TopMenu />
                <Container>{children}</Container>
            </>
        )
    }
}

export default RegularLayout
