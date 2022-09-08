const db = require("../models");

create = {
  post: async (req, res, next) => {
    try {
      console.log(req.body);
      

      exercise = await new db.exercise({
        ...req.body,
      }).save();

      res.json({
        status: "success",
      });
    } catch (error) {
      next(error);
    }
  },
};

getAll = {
  get: async (req, res, next) => {
    try {
      exercise = await db.exercise.find();

      res.json({
        exercises: exercise,
      });
    } catch (error) {
      next(error);
    }
  },
};

findExercises = {
	get: async (req, res, next) => {
		try {
			
			exercise = await db.exercise.findByName(req.params.name)

			res.json({
				exercises: exercise,
			});

		} catch (error) {
			next(error);
		}
	},
};

module.exports = {
  create,
  getAll,
  findExercises
};
