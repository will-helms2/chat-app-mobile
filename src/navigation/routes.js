
/*
 * Navigation routes
 */

export const AppRoutes = {
  SIGNED_IN: 'signed-in',
  SIGNED_OUT: 'signed-out',
};

export const SignedOutRoutes = {
  SIGNED_OUT__SIGN_IN: 'signed-out__sign-in',
  SIGNED_OUT__SIGN_UP: 'signed-out__sign-up',
};

export const SignedInRoutes = {
  SIGNED_IN__HOME: 'signed-in__home',
};

export const HomeRoutes = {
  HOME: 'home',
};

export default {
  ...AppRoutes,
  ...SignedOutRoutes,
  ...SignedInRoutes,
  ...HomeRoutes,
};
