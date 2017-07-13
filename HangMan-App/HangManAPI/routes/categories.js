const express = require('express')
const router = express.Router()


router.get('/categories', function (req, res) {
    res.render('categories', {
        loggedInUser: req.user
      })
  })



module.exports = router
