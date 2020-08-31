import 'isomorphic-fetch';
import fs from 'fs';
import Twit from 'twit';
import chalk from 'chalk';

import { key, secret } from './secret.json';

var T = new Twit({
  consumer_key: key,
  consumer_secret: secret,
  app_only_auth: true,
});

const users = ['r_ourson', 'jub0bs', 'TB_Choi12', 'reactjs', 'fipradio'];

const tweetsPs = users.map(user => {
  return T.get('statuses/user_timeline', {
    screen_name: user,
    count: 100,
    tweet_mode: 'extended',
  }).then(result => {
    console.log(`${user} ${result.data.length} ${chalk.green('\u2713')}`);
    return result;
  });
});

Promise.all(tweetsPs).then(([tweets, ...tweets2]) => {
  fs.writeFile('./data/tweets.json', JSON.stringify(tweets.data), err => {
    if (err) console.log(err);
  });
  const tweet2FlatList = tweets2.map(l => l.data).flat();
  fs.writeFile('./data/tweets2.json', JSON.stringify(tweet2FlatList), err => {
    if (err) console.log(err);
  });
});
