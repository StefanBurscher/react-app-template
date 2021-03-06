import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as appActions from '../redux/actions'
import apiUtils from '../utils/api-utils'
import GuestUserRoute from './atoms/GuestUserRoute/GuestUserRoute'
import HomePage from './pages/HomePage/HomePage'
// import AuthUserRoute from './atoms/AuthUserRoute/AuthUserRoute'
import LoadingPage from './pages/LoadingPage/LoadingPage'
import SomethingWentWrong from './pages/SomethingWentWrongPage/SomethingWentWrongPage'

apiUtils.initInterceptors()
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        document.title = process.env.REACT_APP_COMPANY_NAME

        this.setState({ loading: false })
    }

    render() {
        const { loading } = this.state
        if (loading) return <LoadingPage />
        return (
            <Switch>
                <GuestUserRoute exact path="/" component={HomePage} />

                {/* <AuthUserRoute exact path='/profile' component={ProfilePage} /> */}
                <Route component={SomethingWentWrong} />
            </Switch>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.profile
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(appActions, dispatch)
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
)
