import stockReducer, { fetchStock } from '../redux/stock';
import companyReducer, { fetchInfo } from '../redux/company';
import { getStock, getInfo } from '../__mocks__/mock';

const stockData = [
  {
    symbol: 'AAPL',
    price: 145.7,
    changesPercentage: 1.3,
    name: 'Apple Inc',
  },
];

describe('redux test', () => {
  test('fetchStock should return a promise', () => {
    expect(fetchStock()).toEqual(expect.any(Function));
  });

  test('fetchCompany should return a promise', () => {
    expect(fetchInfo()).toEqual(expect.any(Function));
  });

  test('stock reducer to return array of objects with length > 0', () => {
    expect(
      stockReducer([], { type: 'FETCH_STOCK', stocks: stockData }),
    ).toEqual(stockData);
  });

  test('company reducer to return an object', () => {
    expect(
      companyReducer([], { type: 'FETCH_COMPANY', company: stockData }),
    ).toEqual(stockData[0]);
  });

  test('should load stock data', async () => {
    const data = await getStock();
    expect(data).toBeDefined();

    expect(data.stocks.length).toBe(30);
  });

  test('should load company data', async () => {
    const data = await getInfo();
    expect(data).toBeDefined();

    expect(data.company.companyName).toBe('Apple Inc.');
  });
});
