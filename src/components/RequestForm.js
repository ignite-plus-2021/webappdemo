import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mainContent: {
    height: "100vh",
    backgroundColor: "#9e9e9e52",
    padding: "1%",
  },
  mainGrid: {
    justifyContent: "Center",
  },
  gridItem: {
    backgroundColor: "#03a9f461",
  },
  content: {
    width: "50%",
    marginLeft: "25%",
    padding: "4%",
  },
}));

export default function RequestForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Support Hub
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.mainContent}>
          <div className={classes.content}>
            <Grid container className={classes.mainGrid} spacing={8}>
              <Grid item lg={6} sm={3} className={classes.gridItem}>
                <TextField id="standard-basic" label="Request Number" />
              </Grid>
              <Grid item lg={6} sm={3} className={classes.gridItem}>
                <TextField id="standard-basic" label="Request State" />
              </Grid>
              <Grid item lg={6} sm={3} className={classes.gridItem}>
                <TextField id="standard-basic" label="Requester Name" />
              </Grid>
              <Grid item lg={6} sm={3} className={classes.gridItem}>
                <TextField id="standard-basic" label="Impacted Service" />
              </Grid>
              <Grid item lg={12} sm={3} className={classes.gridItem}>
                <TextField
                  fullWidth="true"
                  id="standard-basic"
                  multiline
                  label="Short Description"
                  maxRows={4}
                />
              </Grid>
              <Grid item className={classes.gridItem}>
                <Button variant="contained" color="secondary">
                  Secondary
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </main>
    </div>
  );
}
