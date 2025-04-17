const AuthService = {
  getAccessToken: () => {
    return localStorage.getItem('accessToken');
  },
  putAccessToken: (accessToken) => {
    return localStorage.setItem('accessToken', accessToken);
  },
};

export default AuthService;
