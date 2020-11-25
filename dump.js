// <input type="hidden" name="_csrf" value="<%= csrfToken  %>">

// const token = document.querySelector('input[name="_csrf"]').value;

// headers: {
//   // 'Authorization':'Basic xxxxxxxxxxxxx',
//   'X-CSRF-TOKEN':token,
//   'Content-Type':'application/json'
// },

// app.js
// const cookieParser = require('cookie-parser')
// app.use(cookieParser())

// todocontroller.js
// const csrf = require('csurf');
// let csrfProtection = csrf({ cookie: true });