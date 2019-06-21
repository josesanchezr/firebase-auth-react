import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    title: {
        textAlign: "center",
        marginTop: theme.spacing(3),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%",
    },
    containerButton: {
        textAlign: "center",
    },
    button: {
        margin: theme.spacing(1),
    },
    error: {
        marginLeft: theme.spacing(1),
    },
}))

const SignUpTemp = (props) => {
    const classes = useStyles()
    const { handleSubmit, handleChange, authError } = props

    return (
        <Container maxWidth="xs">
            <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
                <Grid container className={classes.root}>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h5" className={classes.title} color="primary">Sign Up</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            className={classes.textField}
                            autoComplete="username"
                            onChange={handleChange}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            className={classes.textField}
                            autoComplete="new-password"
                            onChange={handleChange}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="firstName"
                            label="First Name"
                            type="text"
                            className={classes.textField}
                            onChange={handleChange}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="lastName"
                            label="Last Name"
                            type="text"
                            className={classes.textField}
                            onChange={handleChange}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.containerButton}>
                        <Button variant="contained" color="primary" type="submit" size="large" className={classes.button}>Sign up</Button>
                    </Grid>
                    <Grid item xs={12}>
                        {authError ?
                            <Typography variant="body1" component="p" color="error"
                                className={classes.error} role="alert" aria-atomic="true">
                                {authError}
                            </Typography>
                            : null
                        }
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default SignUpTemp
