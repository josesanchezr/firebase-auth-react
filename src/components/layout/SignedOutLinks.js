import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    root: {
        width: '10%',
        minWidth: 150,
    },
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    linkLogo: {
        margin: 10,
        textDecoration: "none",
        '&:hover': {
            textDecoration: "none",
        }
    },
})

const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)

const SignedOutLinks = () => {
    const classes = useStyles()

    return (
        <Grid container justify="flex-end" alignItems="center" className={classes.root}>
            <Link component={AdapterLink} color="inherit" to="/signup" className={classes.linkLogo}>Signup</Link>
            <Link component={AdapterLink} color="inherit" to="/signin" className={classes.linkLogo}>Login</Link>
        </Grid>
    )
}

export default SignedOutLinks