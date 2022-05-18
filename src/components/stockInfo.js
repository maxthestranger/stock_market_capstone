import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StockInfo = ({
  image, companyName, price, symbol, changes,
}) => (
  <li className="stock_wrapper">
    <Link to={`/companyInfo/${symbol}`} className="stock">
      <img src={image} alt={companyName} width={100} height="auto" />
      <h2>{companyName}</h2>
      <p>
        $
        {price}
        {' '}
        <span className={changes > 0 ? 'text-green' : 'text-red'}>
          {changes.toFixed(2)}
        </span>
      </p>
    </Link>
  </li>
);

StockInfo.propTypes = {
  image: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  changes: PropTypes.number.isRequired,
};

export default StockInfo;
