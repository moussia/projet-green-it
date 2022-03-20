import cityModel from '../model/city.js';

export const search = async (req, res) => {
    const { city } = req.query;

    const datas = await cityModel.find({
        commune: { $regex: city, $options: "i" }
    }.limit());
    res.json(datas).send();
}
