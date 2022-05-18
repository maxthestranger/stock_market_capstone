class StockAPI {
  static BASEURL = 'https://financialmodelingprep.com/api/v3/';

  static getStock = async () => fetch(
    `${this.BASEURL}stock_market/actives?apikey=29b34fca855ec92501e1ba3f40b75ea7`,
  ).then(async (res) => {
    if (res.ok) {
      try {
        const data = await res.json();
        return data;
      } catch (e) {
        return [];
      }
    }

    return null;
  });

  static getInfo = async (symbol) => fetch(
    `${this.BASEURL}profile/${symbol}?apikey=29b34fca855ec92501e1ba3f40b75ea7`,
  ).then(async (res) => {
    if (res.ok) {
      try {
        const data = await res.json();
        return data;
      } catch (e) {
        return [];
      }
    }

    return null;
  });
}

export default StockAPI;
