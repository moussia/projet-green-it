import User from '../model/User.js';
import bcrypt from 'bcrypt';

export const Search = async (req, res) => {

    res.send(200);
}

export const Logout = async (req, res) => {
    if (req.user) {
        req.logOut();
    }
    console.log('✅ Deconnexion');
    res.send(200);
}


