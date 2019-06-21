import React, { Component } from 'react'
import SignInTemp from './SignInTemp'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.signIn(this.state)
    }

    render() {
        const {authError, auth} = this.props
        if (auth.uid) return <Redirect to='/' />

        return (
            <SignInTemp handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange}
                authError={authError} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
