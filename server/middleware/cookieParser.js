const parseCookies = (req, res, next) => {
  // console.log(typeof req.headers); //object
  
  //get the string
  const cookiesStr = req.headers.cookie;
  // console.log('this is headers.cookie: ', req.headers.cookie); //{}
  if (cookiesStr===undefined) {
    req.cookies = {}; 
    return; 
  }
  const cookieObject = cookiesStr.split(';').reduce((acc, curr) => {
    const trimmed = curr.trim().split('=');
    acc[trimmed[0]] = trimmed[1];  
    return acc; 
  }, {}); 
  req.cookies = cookieObject; //{cookies: cookieObject}
  
  next();
};

module.exports = parseCookies;