const AUTH_USER = 'AUTH_USER';

const ROOT_URL = 'http://localhost:3090';

export const signupUser = ({email, password}) => {
  dispatch({ type: AUTH_USER });
}
