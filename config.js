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
  // SHA-256 of the owner's sign-in email in lowercase (the email itself stays private). This account can moderate the app.
  ownerHash: '5d94a86697e5dd750497df982088439179aefed09d56b21fcd5fb2df07cfd06c',
  // Firebase App Check (security pack): a reCAPTCHA v3 site key. Empty = off. See docs/SECURITY-SETUP.md.
  appCheckKey: '',
  // GIF search key from klipy.com. Leave empty to hide the GIF buttons.
  klipyKey: 'rF284GoekpLmZsIxKLSfkBYhUHdUa7It7BmLelWXahPne9yuC20E9HPt2rW2plOk'
};
