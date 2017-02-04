import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Teams = new Mongo.Collection('teams');
export const Players = new Mongo.Collection('players');
export const Games = new Mongo.Collection('games');
export const Sessions = new Mongo.Collection('sessions');

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
    type: String,
    label: 'Warmup'
  },
  exercise1: {
    type: String,
    label: 'Exercise 1'
  },
  exercise2: {
    type: String,
    label: 'Exercise 2'
  },exercise3: {
    type: String,
    label: 'Exercise 3'
  },exercise4: {
    type: String,
    label: 'Exercise 4'
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

Schemas.Player = new SimpleSchema({
  playerId: { type: String,
    regEx: SimpleSchema.RegEx.Id,
      autoValue: function () {
        if (this.isInsert)
        return Random.id();
      },
    autoform: {
      type: 'hidden'
    },
    denyUpdate: true,
},
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
  }
});

Schemas.Game = new SimpleSchema({
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
Sessions.attachSchema(Schemas.Session)
