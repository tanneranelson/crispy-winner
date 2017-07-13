const express = require('express')
const router = express.Router()

router.get('/players', function (req, res) {
    res.render('players', {
      loggedInUser: req.user
    })
})




module.exports = router
