
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
  SIGNED_OUT__OPENING: 'signed-out__opening',
};

export const SignedInRoutes = {
  SIGNED_IN__TEAMS: 'signed-in__teams',
  SINGED_IN__DRAWER: 'singed-in__drawer',
};

export const TeamsRoutes = {
  TEAMS__TEAMS_LIST: 'teams__teams_list',
  TEAMS__INVITATIONS: 'teams__invitations',
  TEAMS__CREATE_TEAM: 'teams__create_team',
};

export const MainDrawerRoutes = {
  MAIN_DRAWER__HOME: 'main_drawer__home',
  MAIN_DRAWER__NOTIFICATIONS: 'main_drawer__notifications',
  MAIN_DRAWER__ACCOUNT: 'main_drawer__account',
};

export const HomeRoutes = {
  HOME__TEAM: 'home__team',
  HOME__CHANNEL: 'home__channel',
  HOME__PROFILE: 'home__profile',
  HOME__UPLOAD_PHOTO: 'home__upload_photo',
};

export const ChannelRoutes = {
  CHANNEL__CHAT: 'channel__chat',
  CHANNEL__FILE_VIEWER: 'channel__file_viewer',
  CHANNEL__SETTINGS: 'channel__settings',
};

export const CreateTeamRoutes = {
  CREATE_TEAM_INVITE__HOME: 'create_team_invite__home',
};

export const ProfileRoutes = {
  PROFILE__HOME: 'profile__home',
  PROFILE__UPLOAD_PHOTO: 'profile__upload_photo',
};

export default {
  ...AppRoutes,
  ...SignedOutRoutes,
  ...SignedInRoutes,
  ...HomeRoutes,
};
