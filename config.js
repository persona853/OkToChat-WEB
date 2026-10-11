/*
 * OkToChat settings. Fill these in from your Firebase project:
 * Firebase console > Project settings > Your apps > Web app > SDK setup and configuration > Config.
 * These values are not secret; your data is protected by the rules in firebase/firestore.rules.
 */
window.OK_CONFIG = {
  firebase: {
    apiKey: 'AIzaSyCxvvYwt88REraNfd_g83EDyognSN1KRcM',
    authDomain: 'oktochat-8dadf.firebaseapp.com',
    projectId: 'oktochat-8dadf',
    storageBucket: 'oktochat-8dadf.firebasestorage.app',
    messagingSenderId: '1023900174878',
    appId: '1:1023900174878:web:5e9b75adebe71d35d63c0f'
  },
  // Turn on after enabling Firebase Storage (needs the Blaze plan) to allow video posts.
  videos: false,
  // The email you will sign in with. This account can moderate the app.
  ownerEmail: 'fenixstar@virgilio.it',
  // GIF search key from klipy.com. Leave empty to hide the GIF buttons.
  klipyKey: 'rF284GoekpLmZsIxKLSfkBYhUHdUa7It7BmLelWXahPne9yuC20E9HPt2rW2plOk'
};
