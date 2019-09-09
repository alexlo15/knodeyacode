var userID = null;

$(document).ready(function () {

  var firebaseConfig = {
    apiKey: "AIzaSyDSbjaSd8Av8BJSn40Wnl8PrOQ_7KWK2SE",
    authDomain: "knodeyourcode.firebaseapp.com",
    databaseURL: "https://knodeyourcode.firebaseio.com",
    projectId: "knodeyourcode",
    storageBucket: "",
    messagingSenderId: "904576463987",
    appId: "1:904576463987:web:4ab18526d87b1b32"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Choose providers to use in your firebase auth settings and whitelist domains where you allow it. localhost is whitelisted by default.

  const provider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth()

  $(document).on('click', '#login', function () {
    event.preventDefault();
    login(provider, isLoggedIn);
    $(this).removeID('login')
      .addClass('logout')
      .html('Logout');
  });

  $(document).on('click', '.log-out', function () {
    event.preventDefault();
    console.clear();
    auth.signOut().then(() => {
      $(this).removeClass('log-out')
        .addID('login')
        .html('Login');
      isLoggedOut();
    }).catch((error) => {
      if (error) throw error
    });
  });

  const login = (provider, isLoggedIn) => {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
      auth.signInWithPopup(provider).then((result) => {
        const user = result.user;
        console.log(user)
        isLoggedIn(user);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error) {
          console.log(errorCode)
          console.log(errorMessage)
        }
      });
    })
  }

  const isLoggedIn = user => {
    //DO SOMETHING
    $("#user").text(`Welcome, ` + user.displayName);
    window.location.href = "/open-page";

  }

  const isLoggedOut = () => {
    //DO SOMETHING
    $("#user").html(`Goodbye`);
    
  }
})
