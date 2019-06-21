import React from 'react'
import { Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    card: {
        maxWidth: 927,
    },
    media: {
        height: "auto",
        maxHeight: 300,
    },
}))

const ProjectDetails = (props) => {
    const classes = useStyles()
    const { project, auth } = props
    if (!auth.uid) return <Redirect to='/signin' />

    if (project) {
        return (
            <Grid container className={classes.root}>
                <Grid item xs={12} md={6}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {project.content}
                            </Typography>
                            <p></p>
                            <Grid container justify="space-between">
                                <Typography variant="body2" color="textPrimary" component="span">
                                    Posted by {project.authorFirstName} {project.authorLastName}
                                </Typography>
                                <Typography variant="body2" color="textPrimary" component="span">
                                    {moment(project.createdAt.toDate()).calendar()}
                                </Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    } else {
        return (
            <Grid item xs={12}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Loading project...
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null

    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)
