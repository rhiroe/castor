import './App.css';
import React from 'react';
import FullWidthTabs from './full_width_tabs';
import { Container } from '@material-ui/core';
import Form from "./form";

function App() {
  return (
    <div>
      <FullWidthTabs />
      <Container maxWidth="sm">
        {/*<div>*/}
        {/*  <span>10月</span>*/}
        {/*  <span>円</span>*/}
        {/*</div>*/}
        <Form />
      </Container>
    </div>
  );
}

export default App;
