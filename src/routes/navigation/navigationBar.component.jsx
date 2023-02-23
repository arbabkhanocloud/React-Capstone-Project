import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Fragment, useContext } from "react";
import "./navigation.style.scss";
import { UserContext } from "../../context/context.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";


const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP PAGE
          </Link>
          {
            currentUser ? ( <span className="nav-link" onClick={signOutUser}> SIGN OUT</span>)
            :(<Link className="nav-link" to="/auth">
            SIGN IN
          </Link>)
          }
          
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default NavigationBar;
