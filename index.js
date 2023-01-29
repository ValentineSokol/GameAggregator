const express = require('express');
const SteamAPI = require('./stores/steam/steam.js');
const GogAPI = require('./stores/gog/gog.js');
const EpicAPI = require('./stores/epic/epic.js');

const rankResults = require('./utils/rankResults.js');

const app = express();

const server = app.listen(process.env.PORT || 4000, 
    () => {
        console.log('Game store online.')
    });

app.get('/', (req, res) => res.end('hello'));

app.get('/steam/games/search/:term', async (req, res) => {
    const { term } = req.params;
    const storesAPIs = [SteamAPI, GogAPI, EpicAPI];
    const searchRequests = storesAPIs.map(API => API.searchGame(term));
    const responses = await Promise.all(searchRequests);
    const flat = responses.reduce((acc, cur) => [...acc, ...cur], []);
    res.json(rankResults(flat, term));
  //  res.json(flat);
});
