//add express and express router
const express = require('express');
const router = express.Router();

//create a route add a call back to test user route
//@route  GET api/posts
//@desc   Test route
//@access Public (Doesn't require a token like Private does to access)
router.get('/', (req, res) => res.send('Posts route'));


module.exports = router;