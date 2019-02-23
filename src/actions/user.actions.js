import { userConstants } from '../constants';

export const login = () => ({
  type: userConstants.LOGIN
});

export const logout = () => ({
  type: userConstants.LOGOUT
});