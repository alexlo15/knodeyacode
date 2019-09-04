import React from 'react';

const MessageAlt = props => {
  console.log(props.firebase);
  return (
    <div>
      This is the alt message component that receives firebase methods via props
      from App.js
    </div>
  );
};

export default MessageAlt;
