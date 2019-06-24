import React, { Component } from 'react'
import DashboardTemp from './DashboardTemp'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {

    render() {
        const { projects, auth, notifications } = this.props
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <DashboardTemp projects={projects} notifications={notifications} />
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notification
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notification', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard)