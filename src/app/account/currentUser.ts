import { AuthService } from './../services/auth/auth.service';
import { User } from './user';

let user = JSON.parse(localStorage.getItem('currentUser'));
       
export const currentUser: User = user ? <User>{
    id: user.id,
    surname: user.surname,
    firstname: user.firstname,
    email: user.email,
    username: user.username
} : <User>{};
