import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function Application(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <Navbar toggleSidebar={handleDrawerToggle} {...props} />
      <Sidebar
        mobileOpen={mobileOpen}
        toggleSidebar={handleDrawerToggle}
        {...props}
      />
      <Container className={classes.content}>{props.children}</Container>
    </>
  );
}

export default withRouter(Application);
