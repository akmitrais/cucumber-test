// Dependencies
const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const puppeteer = require('puppeteer');
const scope = require('./support/scope');

setDefaultTimeout(60 * 1000);

const World = function() {
  scope.host = "http://localhost:3300";
  scope.driver = puppeteer;
  scope.context = {};
};

setWorldConstructor(World);