import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token=this.getToken(); //needed to define token to access it
    if (token) {
    return jwtDecode<JwtPayload>(token); //sends back token as payload
    }
    return null; 
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    //only need to get token if user is logged in
    const token=this.getToken(); //check for token
    // return token;
    return !!token && !this.isTokenExpired(token) //ensure that user has token and token is not expired
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    if(!token) return true; 
    try {
      const decodedToken=jwtDecode<JwtPayload>(token);
      const currentTime=Date.now()/1000;
      // return decodedToken.exp < currentTime;
      return decodedToken.exp !==undefined && decodedToken.exp < currentTime

    } catch (error){
      console.error('Error decoding token:', error);
      return true;
    }
    
  }

  getToken(): string {
    // TODO: return the token
    const loggedUser=localStorage.getItem('id_token') || ' ';
    return loggedUser;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem('id_token', idToken);
    window.location.assign('/')
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
  }
}

export default new AuthService();
