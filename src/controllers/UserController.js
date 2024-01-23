const express = require('express');

const {User} = require('../models/UserModel');
const{comparePassword, generateJWT} = require('../utils/userAuthFunctions')

const router = express.Router();

//get all the users from the DB
//localhost:3000/users
/*
*[
  {
    userID:
    username:
  },
    {
    userID:
    username:
  },
]
*/
router.get('/', async (request, response) =>{
    let result = await User.find();
    response.json({result});
})

// get a user by id from the DB
//localhost:3000/users/123
/*
  {
    userID:
    username:
  }
*/
router.get('/:id', async (response, request) => {
    return null;
})


// create a new user in the DB
// localhost:3000/users/signup
// request.body = {username: 'admin, password:'passowrd'}
// respond with jwt
router.post('/signup', async (request, response) => {
    let newUser = await User.create(request.body).catch(error => error);
    response.json(newUser);
})

//log in the user
// localhost:3000/users/login
// request.body = {username: 'admin, password:'passowrd'}
//respond with jwt
router.post('/login', async (request, response) =>{
    //find user by provided username
    let user = await User.findOne({username: request.body.username}).catch(errer => error);

    //check if password is correct'
    let isPasswordCorrect = await comparePassword(request.body.password, user.password);

    if (!isPasswordCorrect){
      response.status(403).json({error: 'wrong password'})
    }

    // if the credentials are correct, generate a jwt
    let jwt = generateJWT(user._id.toString());

    response.json({
      jwt: jwt
    })
})

//localhost:3000/users/verify
//jwt in request.headers['jwt'] or request.header['authorization']
// respond with jwt
router.get('/verify', async(request, response) =>{
    return null;
})

//jwt in request.headers['jwt'] or request.header['authorization']
// respond with jwt
router.get('/regeberate', async(request, response) =>{
    return null;
})

module.exports = router;
