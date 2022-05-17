import Header from '../components/header';
import Footer from '../components/footer';
import StockInfo from '../components/stockInfo';

const Home = () => (
  <>
    <Header />
    <main className="main">
      <div className="container">
        <ul className="stock_wrapper_parent">
          <StockInfo
            image="https://financialmodelingprep.com/image-stock/AAPL.png"
            symbol="AAPL"
            price={145.54}
            changes={-1.57000073}
            companyName="Apple Inc"
          />
          <StockInfo
            image="https://financialmodelingprep.com/image-stock/MSFT.png"
            symbol="MSFT"
            price={261.5}
            changes={0.38000488}
            companyName="Microsoft Corporation"
          />
          <StockInfo
            image="https://financialmodelingprep.com/image-stock/F.png"
            symbol="F"
            price={13.05}
            changes={-0.4499998}
            companyName="Ford Motor Company"
          />
          <StockInfo
            image="https://financialmodelingprep.com/image-stock/AAPL.png"
            symbol="AAPL"
            price={145.54}
            changes={-1.57000073}
            companyName="Apple Inc"
          />
          <StockInfo
            image="https://financialmodelingprep.com/image-stock/MSFT.png"
            symbol="MSFT"
            price={261.5}
            changes={0.38000488}
            companyName="Microsoft Corporation"
          />
          <StockInfo
            image="https://financialmodelingprep.com/image-stock/F.png"
            symbol="F"
            price={13.05}
            changes={-0.4499998}
            companyName="Ford Motor Company"
          />
        </ul>
      </div>
    </main>
    <Footer />
  </>
);

export default Home;
