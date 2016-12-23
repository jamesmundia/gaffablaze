import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
 
export const Players = new Mongo.Collection('players');

const Schemas = {};

Schemas.Player = new SimpleSchema({
	name: {type: String, label: "Name", max: 20},
	position: {type: String, label: "Position", max: 3},
	copies: {type: SimpleSchema.Integer, label: "Number of Copies"}
});

Players.attachSchema(Schemas.Player);