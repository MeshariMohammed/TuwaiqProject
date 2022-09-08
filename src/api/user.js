const db = require('../models');
const joi = require('joi');
const bcrypt = require('bcrypt');


register = {
	post: async (req, res, next) => {
		try {
			console.log(req.body);
			const schema = joi
				.object({
					username: joi.string().alphanum().min(3).max(55).required(),
					email: joi.string().email().min(3).max(55).required(),
					password: joi.string().alphanum().min(3).max(55).required(),
					role: joi.string().alphanum(),
					height: joi.number().min(1).max(3).required(),
					weight: joi.number().min(1).max(3).required(),
					age: joi.number().min(3).max(55).required(),
					gender: joi.string().alphanum().required(),
				})
				.options({ stripUnknown: true });

			schema.validate(req.body);

			req.body.password = await bcrypt.hash(req.body.password, 10);


			const userEmail = await db.user.findOne({email: req.body.email})
			if (userEmail) {
				res.send("The email is used ")
				return;
			}

			const userName = await db.semester.findOne({ username: req.body.usernmae})
			if ( userName ) {
				res.send("The username is used")
				return;
			}

			console.log(req.body);

			
			user = await new db.user({
				...req.body,
			}).save();

			res.json({
				status: 'success',
			});

			
		} catch (error) {
			next(error);
		}
	},
};



login = {
	post: async (req, res, next) => {
		try {
			const schema = joi.object({
				email: joi.string().email()
					.required(),
				password: joi.string()
					.required(),
			}).options({ stripUnknown: true });

			schema.validate(req.body);

			let user = await db.user.findOne({
					email: req.body.email
			});

			if (!user) {
				res.status(403).json({ code: 1103, message: 'password or user incorrect' });
				return;
			}

			if (!await bcrypt.compare(req.body.password, user.password)) {
				res.status(403).json({ code: 1104, message: 'password or user incorrect' });
				return;
			}

			res.json({
				status: 'logged in',
			});
		} catch (error) {
			res.status(500).json({
				status: 'failed',
				message: err
			})
		}
	}
}


getAll = {
	get: async (req, res, next) => {
		try {
			
			user = await  db.user.find()

			res.json({
				users: user,
			});

		} catch (error) {
			next(error);
		}
	},
};

findUsers = {
	get: async (req, res, next) => {
		try {
			
			user = await db.user.findByName(req.params.name)

			res.json({
				students: user,
			});

		} catch (error) {
			next(error);
		}
	},
};

remove = {
	delete: async (req, res, next) => {
		try {
			
			user = await db.user.findByIdAndUpdate({ _id: req.params.id}, {isDeleted: true})

			res.json({
				message: "user deleted!",
			});

		} catch (error) {
			next(error);
		}
	},
};

update = {
	put: async (req, res, next) => {
		try {
			
			user = await db.user.findByIdAndUpdate({ _id: req.params.id}, {...req.body})

			res.json({
				message: "user updated!",
			});

		} catch (error) {
			next(error);
		}
	},
};

module.exports = {
	register,
	login,
	getAll,
	findUsers,
	remove,
	update

};




