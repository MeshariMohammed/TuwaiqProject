const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
  weeks: [
    {
      week: {
        days: [
          {
            day: {
              exercises: [
                {
                  exercise: {
                    type: Schema.Types.ObjectId, ref: "exercise" 
                  },
                  sets: [
                    {
                      set: {
                        type: Number,
                        required: true
                      },
                      count: {
                        type: Number,
                        required: true
                      },
                    },
                  ],
                }
              ]
            },
          }
        ]
      },
    }
  ],
  user: {
     type: Schema.Types.ObjectId, ref: "user" 
  },
  isDeleted: false,
  },
  { timestamps: true }
);

const plan = mongoose.model("plans", planSchema);

module.exports = plan;
