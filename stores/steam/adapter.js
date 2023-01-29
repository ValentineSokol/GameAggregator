const parser = require('node-html-parser');

const STORES = require('../STORES.js');

const adapter = (steamResponse) => {
    const targetClasses = ['match_name', 'match_price'];
    const root = parser.parse(steamResponse);

    const matches = root.querySelectorAll('a');

    return matches.map(match => 
        targetClasses.reduce((acc, cur) => {
            acc.url = match.attributes.href;
            const key = cur.split('_')[1];
            acc[key] = match.querySelector(`.${cur}`)?.innerText;
            return acc;
        }, { store: STORES.STEAM })
    );
    
};

module.exports = adapter;