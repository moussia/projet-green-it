import cityModel from '../model/city.js';

export const search = async (req, res) => {
    const { city } = req.query;

    const datas = await cityModel.findOne({
        commune: { $regex: '^' + city, $options: "mi" }
    });
    res.json(datas).send();
}
