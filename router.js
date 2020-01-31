const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.use(express.json())


router.route('/setCompanySteps').post(controller.setCompanySteps)


module.exports = router

console.log('Starting router')
