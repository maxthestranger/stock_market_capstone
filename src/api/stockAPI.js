class StockAPI {
  static BASEURL = 'https://financialmodelingprep.com/api/v3/';

  static getStock = async () => fetch(
    `${this.BASEURL}stock_market/actives?apikey=${process.env.REACT_APP_API_KEY}`,
  ).then(async (res) => {
    if (res.ok) {
      const data = await res.json();
      return data;
    }

    return [];
  });

  static getInfo = async (symbol) => fetch(
    `${this.BASEURL}profile/${symbol}?apikey=${process.env.REACT_APP_API_KEY}`,
  ).then(async (res) => {
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return [];
  });
}

export default StockAPI;
