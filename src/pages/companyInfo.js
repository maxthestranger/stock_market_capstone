import { Link, useParams } from 'react-router-dom';
import { BsArrowReturnLeft } from 'react-icons/bs';
import Header from '../components/header';
import Footer from '../components/footer';

const CompanyInfo = () => {
  const { companySymbol } = useParams();
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Link to="/" className="btn">
            <BsArrowReturnLeft />
            {' '}
            <span style={{ marginLeft: 10 }}>Back to Listing</span>
          </Link>
          <div>{companySymbol}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CompanyInfo;
