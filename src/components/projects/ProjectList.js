import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import ProjectSummary from './ProjectSummary'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    itemProject: {
        marginBottom: theme.spacing(1),
    },
    linkProject: {
        textDecoration: "none",
        '&:hover': {
            textDecoration: "none",
        },
    },
}))

const ProjectList = ({ projects }) => {
    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            {projects && projects.map(project => {
                return (
                    <Grid item xs={12} key={project.id} className={classes.itemProject}>
                        <Link component={AdapterLink} color="inherit" to={'/project/' + project.id} className={classes.linkProject}>
                            <ProjectSummary project={project} />
                        </Link>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ProjectList