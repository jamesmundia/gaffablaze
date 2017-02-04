import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Teams } from '../../imports/api/data.js';
import { Sessions } from '../../imports/api/data.js';

import '../teams/teampage.js';
import '../../lib/routing'

Template.addSession.helpers({
  addSessionToSession () {
    return Sessions;
  }
})
