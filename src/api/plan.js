const db = require('../models');

create = {
	post: async (req, res, next) => {
		try {

			user = db.user.findOne({_id: req.params.id})
			if (!user) {
				res.send("user is not found")
			}
			console.log(req.body);

			
			plan = await new db.plan({
				...req.body,
				name: req.params.goal,
				user: req.params.id
			}).save();

			res.json({
				status: 'success',
			});

			
		} catch (error) {
			next(error);
		}
	},
};


getAll = {
	get: async (req, res, next) => {
		try {
			
			plan = await  db.plan.find()

			res.json({
				plans: plan,
			});

		} catch (error) {
			next(error);
		}
	},
};



remove = {
	delete: async (req, res, next) => {
		try {
			
			plan = await db.plan.findByIdAndUpdate({ _id: req.params.id}, {isDeleted: true})

			res.json({
				message: "plan deleted!",
			});

		} catch (error) {
			next(error);
		}
	},
};

module.exports = {
	create,
	getAll,
	remove

};




