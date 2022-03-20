import cityModel from '../model/city.js';

export const search = async (req, res) => {
    const { city } = req.body;

    const datas = cityModel.findOne({
        commune: { "$regex": city, "$options": "i" }
    });
    res.json(datas).send();
}
