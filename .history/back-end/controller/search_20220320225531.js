import cityModel from '../model/city.js';

export const search = async (req, res) => {
    const { city } = req.query;

    const datas = await cityModel.find({
        commune: { $regex: city, $options: "i" }
    }).sort({ commune: 1 }).limit(100);
    res.json(datas).send();
}
