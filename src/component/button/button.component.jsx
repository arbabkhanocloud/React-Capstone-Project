import {
  BaseButton,
  GoogleSignInButton,
  Invertedbutton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: Invertedbutton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustButton = getButton(buttonType);
  return <CustButton {...otherProps}>{children}</CustButton>;
};

export default Button;
