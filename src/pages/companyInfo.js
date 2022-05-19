import { Link, useParams } from 'react-router-dom';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { fetchInfo } from '../redux/company';

const CompanyInfo = () => {
  const info = useSelector((state) => state.company);
  const { companySymbol } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfo(companySymbol));
  }, []);
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
          <div className="info">
            <div className="info-header">
              <img
                src={info.image}
                alt={info.companyName}
                width={100}
                height={100}
              />
              <div>
                <h2>{info.companyName}</h2>
                <p>{info.description}</p>
              </div>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Listings</th>
                  <th>Values</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(info).map((k) => (
                  <tr key={k}>
                    <td>{k}</td>
                    <td>{info[k]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CompanyInfo;
