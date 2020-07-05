const { ShardingManager } = require('discord.js');
const Discord = require('discord.js');
const chalk = require('chalk');
const client = new Discord.Client();

const manager = new ShardingManager('./index.js', {
    totalShards: 5,
    token: 'NzI3Njg4MjUzNDMxNDgwMzkx.XvyerQ.E_B-yKbGiPp3fLfcEKZ-Ji2OHMk'
});
manager.spawn();

manager.on('shardCreate', (shard) => console.log(chalk.magenta(`Shard ${shard.id} created`)))

var http = require('http');
 
// The following 4 are the actual values that pertain to your account and this specific metric.
var apiKey = 'a91dc8ac-0268-4eeb-acf8-6f1cbe8d8a24';
var pageId = 'x2hh1hs8fzhv';
var metricId = '2c364ns3sm5t';
var apiBase = 'http://api.statuspage.io/v1';
 
var url = apiBase + '/pages/' + pageId + '/metrics/' + metricId + '/data.json';
var authHeader = { 'Authorization': 'OAuth ' + apiKey };
var options = { method: 'POST', headers: authHeader };
 
// Need at least 1 data point for every 5 minutes.
// Submit random data for the whole day.
var totalPoints = 60 / 5 * 24;
var epochInSeconds = Math.floor(new Date() / 1000);
 
// This function gets called every second.
function submit(count) {
  count = count + 1;
 
  if(count > totalPoints) return;
 
  var currentTimestamp = epochInSeconds - (count - 1) * 5 * 60;
  var randomValue = Math.floor(Math.random() * 1000);
 
  var data = {
    timestamp: currentTimestamp,
    value: randomValue,
  };
 
  var request = http.request(url, options, function (res) {
    res.on('data', function () {
      console.log('Submitted point ' + count + ' of ' + totalPoints);
    });
    res.on('end', function() {
      setTimeout(function() { submit(count); }, 1000);
    });
  });
 
  request.end(JSON.stringify({ data: data }));
}
 
// Initial call to start submitting data.
submit(0);
  

