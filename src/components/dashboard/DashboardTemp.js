import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

const useStyles = makeStyles(theme => ({
    root: {
        flexFlow: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

const DashboardTemp = ({ projects, notifications }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={0} justify="center" alignItems="flex-start">
                <Grid item xs={12} md={6}>
                    <ProjectList projects={projects} />
                </Grid>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={5}>
                    <Notifications notifications={notifications} />
                </Grid>
            </Grid>
        </div>
    )
}

export default DashboardTemp