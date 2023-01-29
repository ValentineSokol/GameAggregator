const parser = require('node-html-parser');

const memoise = async (fn, ttl) => {
    let res;
    let lastFetched;

    return function()  {
        if (res && lastFetched + ttl < Date.now()) return Promise.resolve(res);
        lastFetched = Date.now();
        return fn();
    }
};
const getExhangeRate = async (currencyFrom = 'usd') => {
    const res = await fetch(`https://www.forbes.com/advisor/money-transfer/currency-converter/usd-uah`);
    const page = await  res.text();
    const root = parser.parse(page);
    return root.querySelector('.amount')?.innerText;
};

const convert = async (amount) => {
const getRate = memoise(getExhangeRate, 10000);
const rate = await getExhangeRate();
console.log({ rate, amount})
return amount * rate;
}

module.exports = convert;