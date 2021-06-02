import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import AccountIcon from "@material-ui/icons/AccountCircle"


const styles = {
  avatar: {
    backgroundColor: "grey",
    height: 50,
    width: 50,
    margin: "auto"
  },

  root: {
    margin: 20
  },
  paper: {
    height: 100
  }
};

class MyComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography> ONE </Typography></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
                    <AccountIcon className={classes.icon} />
                  </Avatar>
</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>THREE</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>FOUR</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(MyComponent);

