import { useSelector } from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
import StockInfo from '../components/stockInfo';

const Home = () => {
  const stocks = useSelector((state) => state.stocks);
  return (
    (
      <>
        <Header />
        <main className="main">
          <div className="container">
            <ul className="stock_wrapper_parent">
              {
                stocks.map(({
                  symbol, changesPercentage, price, name,
                }) => (
                  <StockInfo
                    key={symbol}
                    symbol={symbol}
                    price={price}
                    changes={changesPercentage}
                    companyName={name}
                  />
                ))
              }
            </ul>
          </div>
        </main>
        <Footer />
      </>
    )
  );
};

export default Home;
