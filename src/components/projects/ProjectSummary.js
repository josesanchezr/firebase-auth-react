import React from 'react'
import { Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core'
import moment from 'moment'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 927,
    },
    media: {
        height: "auto",
        maxHeight: 300,
    },
}))

const ProjectSummary = ({ project }) => {
    const classes = useStyles()

    return (

        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                </Typography>
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

    )
}

export default ProjectSummary