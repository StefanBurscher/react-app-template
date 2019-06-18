import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'
import './HomePage.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    render() {
        return (
            <RegularLayout>
                <h1>HOME PAGE</h1>
            </RegularLayout>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(appActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)
