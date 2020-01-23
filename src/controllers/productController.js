const get = (req, res, next) => {
    res.status(200).send('Get.');
};

const getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Get id:${id}`)
};

const post = (req, res, next) => {
    res.status(201).send('Post.');
};

const put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Put id:${id}`);
};

const del = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Delete id:${id}.`);
};
module.exports = { put, post, get, del, getById };
