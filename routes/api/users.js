const express=require('express');
const router=express.Router();

// Importing Users Controller.
const usersApiController= require('../../controller/api/usersApi')


// means - /api/users/
// Adding Controller: UsersApi
router.get('/', usersApiController.index);

// means - /api/users/login/
router.get('/login', ()=>{});

// means - /api/users/signup/
router.get('signup', ()=>{});

module.exports=router;




