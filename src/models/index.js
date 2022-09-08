require('../config/database');
const user = require('./user')
const exercise = require('./exercise')
const plan = require('./plan')

module.exports = {
	user,
	exercise,
	plan
}