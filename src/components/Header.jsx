import logo from '../assets/3.svg'

const Header = ({ title, subtitle }) => {

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-10 mr-4" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;