import React from 'react';
import Heading from './components/Heading';
import Input from './components/Input';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      hellooo, This is the App
      <br /><br />

      Below we are attaching the Components
      <br /><br />

      <Heading/>
      Username : <Input/>
      Password  : <Input/>
<br />
      <Button/>

    </div>
  );
}

export default App;
