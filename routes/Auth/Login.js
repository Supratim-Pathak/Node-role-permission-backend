const express = require('express')
const Router = express.Router()
const ROUTE_PREFIX = '/login'

const LoginController = require('../../app/Controllers/Auth/LoginController')

Router.get(`${ROUTE_PREFIX}/`, LoginController.Login )

module.exports = Router