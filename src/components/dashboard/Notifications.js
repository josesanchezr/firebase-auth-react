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

const Notifications = (props) => {
    const classes = useStyles()
    const { notifications } = props
    console.log(notifications)

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    notifications
                </Typography>
                <Grid container>
                    {notifications && notifications.map(notification => {
                        return (
                            <Grid item xs={12} key={notification.id}>
                                <Typography variant="body2" color="secondary" component="span">
                                    {`${notification.user} `}
                                </Typography>
                                <Typography variant="body2" color="textPrimary" component="span">
                                    {`${notification.content} `}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="span">
                                    {moment(notification.time.toDate()).fromNow()}
                                </Typography>
                            </Grid>
                        )
                    })}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Notifications