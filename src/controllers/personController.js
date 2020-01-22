let people = {
    1: {
        nome: 'aa',
        idade: 12
    },
    2: {
        nome: 'bb',
        idade: 13
    },
    3: {
        nome: 'cc',
        idade: 14
    }
};

let ind = 3;

const get = (req, res, next) => {
    res.status(200);
    res.render('newPerson');
};

const getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200)
    res.json(people[id]).send();
};

const post = (req, res, next) => {
	people[ind] = { name: req.body.nameField, idade: req.body.ageField };
	ind += 1;
    res.status(201);
    res.render('personCreated', {id: ind-1, name: req.body.nameField, age:req.body.ageField });
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
