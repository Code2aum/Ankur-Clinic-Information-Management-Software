import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router-dom';

import { Box, Heading } from 'grommet';

import './App.css';

const theme = {
  global: {
    colors: {
      brand: '#000000',
      focus: '#000000',
      active: '#000000',
    },
    font: {
      family: 'Lato',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    style={{ zIndex: '1' }}
    {...props}
  />
);
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    margin: '1rem 0',
  },
});

function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const hardcodedEmail = 'example@email.com';
      const hardcodedPassword = 'password';
      if (email === hardcodedEmail && password === hardcodedPassword) {
        localStorage.setItem('token', 'dummy_token');
        history.push('/Admin');
      } else {
        alert('Invalid Email or Password');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const AppBar = (props) => (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      style={{ zIndex: '1' }}
      {...props}
    />
  );

  return (
    <>
      <div>
        <AppBar>
          <a style={{ color: 'inherit', textDecoration: 'inherit' }} href="/">
            <Heading level="3" margin="none">
              HMS
            </Heading>
          </a>
        </AppBar>
      </div>
      <div style={{ marginTop: '200px' }}>
        <Card className={classes.root}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                fullWidth
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
                fullWidth
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Login;
