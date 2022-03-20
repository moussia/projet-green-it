import User from '../model/User.js';
import bcrypt from 'bcrypt';

export const Search = async (req, res) => {
    const city = req.body;
    res.send(200);
}

