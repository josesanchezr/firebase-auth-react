import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { deepOrange } from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const useStyles = makeStyles(theme => ({
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    linkLogo: {
        margin: theme.spacing(1),
        textDecoration: "none",
        '&:hover': {
            textDecoration: "none",
        },
        fontFamily: "Roboto",
    },
}))

const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)

const SignedInLinks = (props) => {
    const classes = useStyles()
    const { profile } = props

    return (
        <Grid container justify="flex-end" alignItems="center">
            <Link component={AdapterLink} color="inherit" to="/create" className={classes.linkLogo}>New Project</Link>
            <Link component="button" variant="body1" color="inherit" onClick={props.signOut} className={classes.linkLogo}>Log Out</Link>
            <Link component={AdapterLink} color="inherit" to="/" className={classes.linkLogo}>
                <Avatar className={classes.orangeAvatar}>{profile.initials}</Avatar>
            </Link>
        </Grid>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            console.log('Haciendo log out')
            dispatch(signOut())
        }
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)