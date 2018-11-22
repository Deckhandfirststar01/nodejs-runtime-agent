const test = require('tap').test;
const sleep = require('sleep-promise');

const transmitter = require('../lib/transmitter');

test('demo-OOM app something-whatever', async (t) => {
  const demoAppOOM = require('../demo-oom');
  const BEACON_INTERVAL_MS = 1000;
  await sleep(BEACON_INTERVAL_MS * 1);

  //demoApp
});
