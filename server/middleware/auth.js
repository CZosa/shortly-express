const models = require('../models');
const Promise = require('bluebird');
const parseCookies = require('./cookieParser');
const _ = require('lodash'); 

module.exports.createSession = (req, res, next) => {
  
  const queryStr = 'SLECT * FROM sessions';
  
  if (_.isEmpty(req.cookies)) {
    models.Sessions.create()
      .then((result) => { //use the new ID here to get the hash from the sessions table
        result.insertId = hash;
      //new Id 
      });
    
  }


  
  
  
  // if (req.cookies === {}) {
  //   models.Sessions.create();
  // } 
  next();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

// models.Sessions.get(parseCookies)
//   .then( cookies => {
//     if (req.cookie !== {}) {
//       if (models.Sessions.isLoggedIn(models.Sessions)) {
//         var userInfoObj = {};
//         //getting the user info to put INTO this object
//         //is what would happen here 
//         req.sessions = userInfoObj; //{sessions: {hash: userId:}}
//       }
//     }
//   });
  
  
  


//access parsed cookies from the request (at req.cookies)

//look up the user data related to that particular session
//should we use 'is logged in' func and if the answer is no
//then we just return out immediately ? or is this function
//useless in this context 


//req.session = {relevant user info}; 
//ask yourself: what info about the user would you want to keep?
//USE Sessions.get()  --- this will get the record
//from the table adn return the user info if the userId
//is present on the session object



//an incoming request with NO COOKIES should generate a session
//with a unique hash and STORE IT IN THE SESSIONS DATABASE --> use Sessions.create()



//The function should use this unique hash to set a cookie in the response header
//how do we set cookies using Express? 
  
  
  
//if an incoming request DOES HAVE a cookie, the middleware should VERIFY
//that the cookie is valid (by checking that it is a session stored in your database)



//if an incoming cookie is NOT VALID what should we do??????


// =================FUNCTIONS TO USE==================
// Sessions.get => retrieves one record in the table
// matching the specified conditions and attaches
// the user information if the userId is present on the 
// sessions object

// Sessions.create => creates a new session -- within this
// function, a hash is randomly generated