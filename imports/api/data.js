import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
export const Teams = new Mongo.Collection('teams');
export const Players = new Mongo.Collection('players');
export const Games = new Mongo.Collection('games');
export const Sessions = new Mongo.Collection('sessions');
export const IndyGameEvals = new Mongo.Collection('indygameevals');

export const Schemas = {};

SimpleSchema.debug = true;

Schemas.Team = new SimpleSchema({
  coach: {
    type: String,
    autoValue: function () {
      return Meteor.userId();
    },
        autoform: {
          type: "hidden"
        }
        },
  teamId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoValue: function() {
      return Random.id();
        },
    denyUpdate: true,
    autoform: {
        type: 'hidden'
       }
  },
  teamname: { type: String, label: "Team Name", max: 30 },
  clubname: { type: String, label: "Club Name", max: 30 },
  ageyear: { type: Number, label: "Team Birth Year",
     autoform: {type: 'select'}
},
});
Schemas.Exercise = new SimpleSchema({
  exerciseDetails: {
    type: String,
    label: 'Exercise Description and Details',
    autoform: {
      rows: 6
    },
    optional: true,
  },
  totalTime: {
    type: Number,
    label: 'Duration',
    optional: true,
  },
  workTime: {
    type: Number,
    label: 'Work Duration',
    optional: true,
  },
  restTime: {
    type: Number,
    label: 'Rest Duration',
    optional: true,
  },
  intervals: {
    type: Number,
    label: 'Intervals',
    optional: true,
  },
});

Schemas.Session = new SimpleSchema({
  teamId: {
    type: String,
    autoform: {
      value: function() {
        return FlowRouter.getParam('teamId');
      },
      type: 'hidden'
    },
    denyUpdate: true,
  },
  sessionId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoValue: function () {
      if (this.isInsert)
      return Random.id();
        },
    denyUpdate: true,
    autoform: {
      type: 'hidden'
    }
  },
  date: {
    type: Date,
    label: 'Date',
  },
  theme: {
    type: String,
    label: 'Session Theme'
  },
  warmup: {
    type: Schemas.Exercise,
    label: 'Warmup',
    optional: true,
  },
  exercise1: {
    type: Schemas.Exercise,
    label: 'Exercise 1',
    optional: true,
  },
  exercise2: {
    type: Schemas.Exercise,
    label: 'Exercise 2',
    optional: true,
  },
  exercise3: {
    type: Schemas.Exercise,
    label: 'Exercise 3',
    optional: true,
  },
  exercise4: {
    type: Schemas.Exercise,
    label: 'Exercise 4',
    optional: true,
  },
  sessionEval: {
    type: [String],
    label: 'Post Session Notes',
    optional: true,
  },
});

Schemas.seasonEvaluationSchema = new SimpleSchema({
  textComments: {
    type: String,
    label: 'Written notes for the evaluation',
    max: 100,
    optional: true
  },
  seasonRating: {type: Number,
  label: 'Overall Rating',
    min: 1,
    max: 5,
  optional: true
}
});

Schemas.indyPlayerEvalForGameSchema = new SimpleSchema({
  playerId: {
    type: String,
    autoform: {
      type: 'hidden'
    },
    denyUpdate: true,
  },
  gameId: {
    type: String,
    autoform: {
      autoValue() {
        FlowRouter.getParam('gameId');
      },
      type: 'hidden',
    },
    denyUpdate: true,
  },
  indybuildup: {
    type: Number,
    label: 'Individual Buildup Rating',
    min: 1,
    max: 5,
    optional: true,
  },
  indydrbuildup: {
    type: Number,
    label: 'Individual Disrupting the Buildup Rating',
    min: 1,
    max: 5,
    optional: true,
  },
  indyattrans: {
    type: Number,
    label: 'Individual Attacking Transition Rating',
    min: 1,
    max: 5,
    optional: true,
  },
  indydeftrans: {
    type: Number,
    label: 'Individual Defending Transition Rating',
    min: 1,
    max: 5,
    optional: true,
  },
  indyfincore: {
    type: Number,
    label: 'Individual Finishing Scoring Chances Rating',
    min: 1,
    max: 5,
    optional: true,
  },
  indystopscore: {
    type: Number,
    label: 'Individual Stopping Scoring Chances Rating',
    min: 1,
    max: 5,
    optional: true,
  },
  indyGameComments: {
    type: String,
    label: 'Comments for Individual Game Evaluation',
    optional: true,
    autoform: {
      rows: 3,
    },
  },
});

Schemas.Player = new SimpleSchema({
  playerId: { type: String,
    regEx: SimpleSchema.RegEx.Id,
      autoValue: function () {
        if (this.isInsert) {
        return Random.id();
        }
      },
    autoform: {
      type: 'hidden'
    },
    denyUpdate: true,
},
  teamId: {
    type: String,
    autoValue: function() {
      if (this.isInsert)
      return FlowRouter.getParam('teamId');
    },
    autoform: {
      type: 'hidden',
      },
    denyUpdate: true,
  },
  name: {
    type: String,
    label: 'Name',
    max: 30
  },
/*
return age year of team and attach it to all added players
	age: {type: Number,
        autoValue: function () {
          return this.Teams.ageyear.findOne();
        },
        autoform: {type: "hidden"}
      },
*/
  position: { type: String, label: 'Position', max: 13 },
  rosternumber: { type: Number, label: 'Roster Number' },
  //playerevals: { type: ['PlayerEval'], optional: true },
  seasonEvaluation: {
    type: Schemas.seasonEvaluationSchema,
    optional: true
  },
});

Schemas.Game = new SimpleSchema({
  gameId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoValue() {
        if (this.isInsert)
        return Random.id();
    }
  },
  opponent: {
             type: String,
             label: "Opponent",
             max: 30
           },
  date:    {
            type: Date,
            label: "Date of Match",
            optional: true,
            autoform: {
              afFieldInput: {
                type: 'bootstrap-datetimepicker',
                timezoneId: "America/New_York"
              }
            }
            },
  location: {
             type: String,
             label: "Match Location",
             allowedValues: ['Home', 'Away', 'Neutral'],
                  autoform: {
                    type: 'select'
            }
          },
  result: {
            type: String,
            label: "Result",
            allowedValues: ['Win', 'Loss', 'Draw', 'Cancelled'],
            autoform: { type: 'select' },
            optional: true
          },
   teamscore: {
            type: Number,
            label: "Team Score",
            optional: true
              },
    opposcore: {
            type: Number,
            label: "Opponent Score",
            optional: true
          },
    coach: {
            type: String,
              autoValue: function() {
                return Meteor.userId();
                    },
              autoform: {
                type: "hidden"
              }
            },
    teamId: { type: String,
                autoform: {
                  value: function() {
                   return FlowRouter.getParam('teamId');
                        },
                    type: 'hidden',
                  },
denyUpdate: true,
                      },
  buildup: { type: Number,
              label: "Buildup Rating",
              min: 1,
              max: 5,
              optional: true,
  },
  drbuildup: { type: Number,
              label: "Disrupting the Buildup Rating",
              min: 1,
              max: 5,
              optional: true
  },
  atrans: { type: Number,
              label: "Attacking Transition Rating",
              min: 1,
              max: 5,
              optional: true
  },
  dtrans: { type: Number,
              label: "Defensive Transition Rating",
              min: 1,
              max: 5,
              optional: true
  },
  finscoreopps: { type: Number,
              label: "Finishing Scoring Opportunities Rating",
              min: 1,
              max: 5,
              optional: true
  },
  stopscoreopps: { type: Number,
              label: "Stopping Scoring Opportunities Rating",
              min: 1,
              max: 5,
              optional: true
  },
  gamenotes: {type: [String],
              label: "Game Notes",
              optional: true
  },
});
Teams.attachSchema(Schemas.Team);
Players.attachSchema(Schemas.Player);
Players.attachSchema(Schemas.seasonEvaluationSchema);
Games.attachSchema(Schemas.Game);
Sessions.attachSchema(Schemas.Session);
IndyGameEvals.attachSchema(Schemas.indyPlayerEvalForGameSchema);
