const { When, Then } = require('cucumber');
const actions = require('../support/actions');

When(/^User visit homepage$/, actions.visitHomePage);

Then(/^Show dashboard$/, actions.showHomePage);