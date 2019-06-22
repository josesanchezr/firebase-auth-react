import React from 'react'
import { Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core'

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

const Notifications = () => {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Notifications
                </Typography>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="textPrimary" component="span">
                            Notification
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="textPrimary" component="span">
                            Notification
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Notifications