import React from 'react';
import { ToCall } from '../components';

const CallMe = () => {
  const me = {
    name: 'jjanmo',
    phone: '01012345678',
  };

  return (
    <div>
      <ToCall color="#eee" bgColor="dodgerblue" phone={me.phone}>
        <h1>{`Call ${me.name} later : ${me.phone}`}</h1>
      </ToCall>
    </div>
  );
};

export default CallMe;
