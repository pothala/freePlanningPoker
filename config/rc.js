var _ = require('lodash');
var pkg = require('../package');
var rc = require('rc');

_.assign(process.env, rc(pkg.name));
