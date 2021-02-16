'use strict';

function checkSetup() {
  if (!window.firebase || !(firebase.app instanceof Function) || !firebase.app().options) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
      'Make sure you go through the codelab setup instructions and make ' +
      'sure you are running the codelab using `firebase serve`');
  }
}
  
  // Checks that Firebase has been imported.
checkSetup();

function signIn() {
  // Sign into Firebase using popup auth & Google as the identity provider.
  console.log('working');
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  console.log('working');
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) { // User is signed in!
    // Get the signed-in user's profile pic and name.
  /*  var profilePicUrl = getProfilePicUrl();
    var userName = getUserName();

    // Set the user's profile pic and name.
    userPicElement.style.backgroundImage = 'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
    userNameElement.textContent = userName;
  */ 
    // Show user's profile and sign-out button.
   // userNameElement.removeAttribute('hidden');
   // userPicElement.removeAttribute('hidden');
    //signOutButtonElement.removeAttribute('hidden');

    // Hide sign-in button.
    signInButtonElement.setAttribute('hidden', 'true');
    //signInButtonElement.textContent = 'Sign Out';

    // We save the Firebase Messaging Device token and enable notifications.
    //saveMessagingDeviceToken();
  } else { // User is signed out!
    // Hide user's profile and sign-out button.
  /*  userNameElement.setAttribute('hidden', 'true');
    userPicElement.setAttribute('hidden', 'true');
    signOutButtonElement.setAttribute('hidden', 'true');
    */
    // Show sign-in button.
    signOutButtonElement.removeAttribute('hidden');
    
    //signInButtonElement.textContent = 'Sign In';
  }
}

function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
}

//initFirebaseAuth();

let signInButtonElement = document.getElementById('sign-in');
let signOutButtonElement = document.getElementById('sign-out');

signInButtonElement.addEventListener('click', signIn);

initFirebaseAuth();

firebase.performance();