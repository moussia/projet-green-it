import User from '../model/User.js';
import bcrypt from 'bcrypt';
import cityModel from './model/city.js';


export const Search = async (req, res) => {
    const { city } = req.body;

    const datas = cityModel.findOne({ 
        commune: { "$regex": city, "$options": "i" } });
    res.json(datas).send();
}

// parsing tolowercase