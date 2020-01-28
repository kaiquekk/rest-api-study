let people = [
	{
		id: 1,
		name: 'Nome 1',
    age: 12
	},
	{
		id: 2,
		name: 'Nome 2',
		age: 44
	},
	{
		id: 3,
		name: 'Nome 3',
		age: 36
	},
	{
		id: 4,
		name: 'Nome ',
		age: 25
	}
];

const get = (req, res) => {
  res.status(200);
	res.render('listPeople', { data: people });
};

const getById = (req, res) => {
	let id = req.params.id;
	if(id <=0 || id > people.length || !id){
		res.status(404);
		res.send('Invalid id.');
	}
	else{
    res.status(200);
		res.render('listPeople', { data:people });
	}
};

const post = (req, res) => {
	if(!req.body.name || !req.body.age){
		res.status(400);
		res.send(`Fields can't be empty.`);
	}
	else{
		people.push({ id:people.length+1, name:req.body.name, age:req.body.age });
		res.status(201);
		res.render('listPeople', { data:people });
	}
};

const put = (req, res) => {
	let id = req.params.id;
	if(id <=0 || id > people.length){
		res.status(404);
		res.end('Invalid id.');
	}
	else{
		people[id-1] = { id:id, name:req.body.name, age:req.body.age };
    res.status(200);
    res.render('listPeople', { data: people });
	}
};

const del = (req, res) => {
	let id = req.params.id;
	if(id <=0 || id > people.length){
		res.status(404);
		res.end('Invalid id.');
	}
	else{
		people.splice(id-1, 1);
		res.status(200);
		res.render('listPeople', { data:people });
	}
};

module.exports = { put, post, get, del, getById };
