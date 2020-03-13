const jwt = require('jsonwebtoken')

// used to sign the JWTs being issued to users
const APP_SECRET = 'asd'
// console.log(process.env.UTILS_APP_SECRET)


// This is a helper function called in resolvers
//  which require authentication (such as creating a project)
// It first retrieves the Authorization header 
// (which contains the User’s JWT) from the context. 
// It then verifies the JWT and retrieves the User’s ID from it.
function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }

  throw new Error('Not authenticated')
}

module.exports = {
  APP_SECRET,
  getUserId,
}