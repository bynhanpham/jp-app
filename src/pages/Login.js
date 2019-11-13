import React, { useContext } from "react";
import { UserContext } from "./../components/Context";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  page: {
    position: "absolute",
    width: "100%",
    height: "100%",
    minHeight: "100%",
    background:
      "url(https://wallpaperaccess.com/full/27927.jpg) rgba(0,0,0, 0.5)",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply"
  },
  center: {
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: "translate(50%,-70%)"
  },
  form: {
    border: "3px solid black",
    display: "inline-block",
    padding: "95px 75px 95px 75px",
    margin: "20px",
    borderRadius: "25px",
    background: "rgba(255,255,255,0.95 )"
  },
  button: {
    marginTop: "15px"
  }
}));

export default function Login(props) {
  const { user, userActions } = useContext(UserContext);
  const classes = useStyles();
  if (!!user)
    return (
      <>
        <div>already logged in</div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => userActions.logout()}
        >
          Logout
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.history.push("/")}
        >
          Return Home
        </Button>
      </>
    );
  return (
    <>
      <div className={classes.page}>
        <div className={classes.center}>
          <Formik
            initialValues={{
              username: "",
              password: ""
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              userActions.login(values.username, values.password);
              setSubmitting(false);
              props.history.push("/");
            }}
          >
            {({ isSubmitting, values }) => (
              <Form className={classes.form}>
                <h2>Login</h2>
                <div>
                  <Field
                    name="username"
                    type="input"
                    label="username"
                    component={TextField}
                    autoFocus
                  />
                </div>
                <div>
                  <Field
                    name="password"
                    type="password"
                    label="password"
                    component={TextField}
                  />
                </div>
                <div className={classes.button}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting}
                    fullWidth
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
