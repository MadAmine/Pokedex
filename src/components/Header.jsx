import { Link } from 'react-router-dom';
import logo from '../assets/3.svg';
import SearchBar from './SearchBar';

const Header = ({ title, subtitle, onSearch, onReset }) => {
  return (
    <header className="shadow-md bg-[#FFCB05] max-w-[1280px] "  > {/* Add !important */}
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" onClick={onReset}>
            <img src={logo} alt="logo" className="h-10 w-10 mr-4" />
          </Link>
          <div>
            <Link to="/" onClick={onReset}>
              <h1 className="text-2xl font-bold press-start-2p-regular text-[#003a70]">{title}</h1> {/* Add !important */}
            </Link>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;