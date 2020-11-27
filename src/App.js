import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import './App.css';

function App() {
  return (
    <Fade in="true" timeout={10000}>
      <Container align="right" className="container">
        <Fade in="true" timeout={16000}>
          <Typography variant="h1">Hello World</Typography>
        </Fade>
        <Fade in="true" timeout={22000}>
          <Typography variant="h5">by Adrian Sudbury</Typography>
        </Fade>
        <Fade in="true" timeout={30000}>
          <Button
            variant="contained"
            color="primary"
            href="https://github.com/asudbury/react-hello-world"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </Button>
        </Fade>
      </Container>
    </Fade>
  );
}

export default App;
