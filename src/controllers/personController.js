let people = [
	{
		id: 1,
		name: 'Teste 1',
        age: 12
	},
	{
		id: 2,
		name: 'Teste 2',
		age: 44
	},
	{
		id: 3,
		name: 'Teste 3',
		age: 36
	}
];

const get = (req, res, next) => {
    res.status(200);
    res.render('newPerson');
};

const getById = (req, res, next) => {
	let id = req.params.id;
	if(id <=0 || id > people.length){
		res.status(404);
		res.end();
	}
	else{
		res.status(200);
		res.render('getPerson', { id:id, name:people[id-1].name, age:people[id-1].age });
	}
};

const getAll = (req, res, next) => {
	res.status(200);
	res.render('allPeople', { names: people });
};

const post = (req, res, next) => {
	people.push({ id:people.length+1, name:req.body.nameField, age:req.body.ageField });
    res.status(201);
	res.render('personCreated', people[people.length-1]);
};

const put = (req, res, next) => {
	let id = req.params.id;
	people[id-1] = { id:id, name:req.body.nameField, age:req.body.ageField };
	res.status(200);
	res.render('updatedPerson', { id:id, name:req.body.nameField, age:req.body.ageField });
};

const del = (req, res, next) => {
	let id = req.params.id;
	people.splice(id-1, 1);
	res.status(200);
	res.render('personDeleted', { id:id });
};
module.exports = { put, post, get, del, getById, getAll };
