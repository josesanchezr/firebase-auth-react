import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(12),
    },
    toolBar: {
        height: 76,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    linkLogo: {
        textDecoration: "none",
        '&:hover': {
            textDecoration: "none",
        }
    },

}))

const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)

const Navbar = (props) => {
    const classes = useStyles()
    const { auth, profile } = props
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.toolBar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link component={AdapterLink} color="inherit" to="/" className={classes.linkLogo}>
                            JosePlan
                        </Link>
                    </Typography>
                    {links}
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)