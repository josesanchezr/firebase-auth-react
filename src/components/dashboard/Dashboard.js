import React, { Component } from 'react'
import DashboardTemp from './DashboardTemp'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {

    render() {
        const { projects, auth } = this.props
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <DashboardTemp projects={projects} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard)