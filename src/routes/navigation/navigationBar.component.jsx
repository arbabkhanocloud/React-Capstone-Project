import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Fragment } from "react";
import "./navigation.styles.jsx";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectIsCartOpen } from "../../store/cart/cart.selectors";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdwon from "../../component/cart-dropdwon/cart-dropdwon.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles.jsx";

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="shop">SHOP NOW</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdwon />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default NavigationBar;
