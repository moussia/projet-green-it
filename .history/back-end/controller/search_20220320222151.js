import cityModel from '../model/city.js';

export const search = async (req, res) => {
    const { city } = req.query;

    const datas = cityModel.findOne({
        commune: { "$regex": city, "$options": "i" }
    });
    console.log()
    res.json(datas).send();
}
