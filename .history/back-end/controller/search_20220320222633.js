import cityModel from '../model/city.js';

export const search = async (req, res) => {
    const { city } = req.query;

    const datas = await cityModel.findOne({
        commune: { "$regex": city, "$options": "i" }
    });
    console.log('datas', datas);
    res.json(datas).send();
}
