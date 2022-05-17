import Header from '../components/header';
import Footer from '../components/footer';

const About = () => (
  <>
    <Header />
    <main className="main">
      <div className="container">
        <div className="wrapper">
          <h1>About Stock Broker</h1>
          <p>
            Financial Modeling Prep is a new concept that informs you about
            stock markets information (news, currencies and stock prices). We
            always strive to give you the best and most updated information. We
            also gives you free financial modeling methodology through our
            academy. Most investment banking firms follow our guidelines to get
            discounted cash flow statement of companies to see if they are
            undervalued, overvalued or simply at par value. You can find all
            financial models and valuation techniques that is used in corporate
            finance to get companies intrinsic valuation. Most private equity
            firm use financial modeling for decision making when it comes to
            hold, buy or sell a particular stock.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default About;
