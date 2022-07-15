import { users } from "../data/data.js";

export const getAll = (req, res) => {
	res.status(200).send({users:users});
};

export const getUser = (req, res) => {
	let user = users.find(user => user.id == req.params.id);
	if(user!==undefined){
		res.status(200).send({user: user});
	} else {
		res.status(400).send({message: 'User not found.'})
	}
};
 
export const deleteUser = (req, res) => {
	let userFind = users.find(user => user.id == JSON.parse(req.params.id));
	users.splice(users.indexOf(userFind), 1);
	res.status(200).send({users: users});
};

export const postUser = (req, res) => {
	req.body.id = users[users.length-1].id + 1;
	const {email, password} = req.body;
	if(email == undefined || password == undefined){
		res.status(400).send({message:'Invalid User Format'});
	};
	users.push(req.body); 
	res.status(201).send({users:users});
};

export const updateUser = (req, res) => {
	let userFind = users.find(user => user.id == JSON.parse(req.params.id));
	users[users.indexOf(userFind)] = req.body;
	res.status(200).send({users:users})
};


