import React from 'react';
import { withFirebase } from '../components/Firebase/index';

//YOU CAN DO THIS EVERY COMPONENT FOR EVERY COMPONENT YOU NEED YOUR FIREBASE METHODS


class MessageContainer extends React.Component {
  state = {}

  render() {
    console.log(this.props)
    return (
      <h1>HI!</h1>
    )
  }
}

const Message = withFirebase(MessageContainer)
// const MessageContainer = props => {
//   console.log(props.firebase);


//   return (
//     <div>
//       This will be your message component that has access to firebase methods
//       via the withFirebase higher order component
//     </div>
//   );
// };

// const Message = withFirebase(MessageContainer);

export default Message;
