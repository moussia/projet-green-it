import cityModel from '../model/city.js';

export const search = async (req, res) => {
    const { city } = req.query;

    const datas = await cityModel.find({
        commune: { $search: city, "$options": "i" }
    });
    res.json(datas).send();
}
