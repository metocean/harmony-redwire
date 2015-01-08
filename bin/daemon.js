// Generated by CoffeeScript 1.8.0
var Harmony, harmony;

Harmony = require('../src/harmony');

harmony = new Harmony();

process.on('SIGHUP', harmony.tick);

process.on('uncaughtException', function(err) {
  console.error(err);
  return process.exit(1);
});