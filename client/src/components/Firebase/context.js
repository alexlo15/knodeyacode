<<<<<<< HEAD
// import React from 'react';

// //we create our context here so we can use Firebase anywhere

// const FirebaseContext = React.createContext(null);

// // use a higher order component to wrap whatever components that need to use Firebase methods with the context as a consumer.

// export const withFirebase = Component => props => (
//   <FirebaseContext.Consumer>
//     {firebase => <Component {...props} firebase={firebase} />}
//   </FirebaseContext.Consumer>
// );

// export default FirebaseContext;
=======
import React from 'react';

//we create our context here so we can use Firebase anywhere

const FirebaseContext = React.createContext(null);

// use a higher order component to wrap whatever components that need to use Firebase methods with the context as a consumer.

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
>>>>>>> 2db880f94ed2d55094be02153089d4f58df07396
