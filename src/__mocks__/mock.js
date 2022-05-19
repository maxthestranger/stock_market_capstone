const fs = require('fs');

export const getStock = () => new Promise((resolve, reject) => {
  fs.readFile('src/__mocks__/stocksData.json', 'utf8', (err, data) => {
    if (err) reject(err);
    resolve({ stocks: JSON.parse(data) });
  });
});

export const getInfo = () => new Promise((resolve, reject) => {
  fs.readFile('src/__mocks__/companyData.json', 'utf8', (err, data) => {
    if (err) reject(err);
    resolve({ company: JSON.parse(data) });
  });
});
