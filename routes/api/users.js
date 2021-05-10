
//add express and express router
const express = require('express');
const router = express.Router();

/* TEST THE ROUTE 1ST STEP
//create a route add a call back to test user route
//@route  GET api/users
//@desc   Test route
//@access Public (Doesn't require a token like Private does to access)
router.get('/', (req, res) => res.send('User route'));
*/

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('User route');
});

module.exports = router;