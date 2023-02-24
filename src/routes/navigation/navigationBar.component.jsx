import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Fragment, useContext } from "react";
import "./navigation.style.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../context/context.component";
import { CartContext } from "../../context/cart.context";

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdwon from "../../component/cart-dropdwon/cart-dropdwon.component";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdwon />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default NavigationBar;
