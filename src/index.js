import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// const functions = require('firebase-functions')
//   const nodemailer = require('nodemailer')
//   const cors = require('cors')({
//     origin: true
//   })
//   const gmailEmail = functions.config().gmail.email
//   const gmailPassword = functions.config().gmail.password
  
//   const mailTransport = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: gmailEmail,
//       pass: gmailPassword,
//     },
//   })
  
//   exports.submit = functions.https.onRequest((req, res) => {
//     res.set('Access-Control-Allow-Origin', '*')
//     res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
//     res.set('Access-Control-Allow-Headers', '*')
  
//     if (req.method === 'OPTIONS') {
//       res.end()
//     } else {
//       cors(req, res, () => {
//         if (req.method !== 'POST') {
//           return
//         }
  
//         const mailOptions = {
//           from: req.body.email,
//           replyTo: req.body.email,
//           to: gmailEmail,
//           subject: `${req.body.name} just messaged me from my website`,
//           text: req.body.message,
//           html: `<p>${req.body.message}</p>`,
//         }
  
//         return mailTransport.sendMail(mailOptions).then(() => {
//           console.log('New email sent to:', gmailEmail)
//           res.status(200).send({
//             isEmailSend: true
//           })
//           return
//         })
//       })
//     }
//   })
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
