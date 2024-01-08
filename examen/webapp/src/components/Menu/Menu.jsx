import { Link } from "react-router-dom";

const Menu = () => {
  const padding = {
    paddingRight: 5,
  };

  return (
    <div>
      <Link style={padding} to="/jokes">
        jokes
      </Link>
      <Link style={padding} to="/about">
        about
      </Link>
    </div>
  );
};

export default Menu;
