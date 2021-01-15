const { User } = require("../models");
const bcrypt = require("bcrypt");

module.exports.create = async ( req, res ) => {
	try {
		
		const {
			name,
			username,
			email,
			password
		} = req.body;

		const user = await User.create({
			name,
			username,
			email,
			password: bcrypt.hashSync( password, 9 )
		});

		return res.status(201).json({
			message: "created",
			user
		});

	} catch ( e ) {

		console.log(e);

		return res.status(500).json({
			message: "error"
		});

	}
}

module.exports.findAll = async (req, res) => {
	try {

		const users = await User.findAll();

		return res.json({
			users
		});
		
	} catch (e) {
		console.log(e);

		return res.status(500).json({
			message: "error"
		});
	}
}

module.exports.findOne = async (req, res) => {
	try {

		const { id } = req.params;
		
		const user = await User.findOne({ where: { id } });

		return res.json({
			user
		});
		
	} catch (e) {
		console.log(e);

		return res.status(500).json({
			message: "error"
		});
	}
}

module.exports.update = async (req, res) => {
	try {

		const { id } = req.params;
		
		const {
			name,
			username,
			email,
			password
		} = req.body;

		const user = await User.findOne({ where: { id } });

		if ( !user ) return res.status(404).json({
			message: "user_not_found"
		});

		await User.update({
			name,
			username,
			email,
			password: bcrypt.hashSync( password, 9 )
		}, { where: { id } });

		return res.json({
			message: "updated"
		});

	} catch (e) {
		console.log(e);

		return res.status(500).json({
			message: "error"
		});
	}
}

module.exports.deleteOne = async (req, res) => {
	try {

		const { id } = req.params;
	
		const user = await User.findOne({ where: { id } });

		if ( !user ) return res.status(404).json({
			message: "user_not_found"
		});

		await User.destroy({ where: { id } });

		return res.json({
			message: "deleted"
		});
		
	} catch (e) {
		console.log(e);

		return res.status(500).json({
			message: "error"
		});
	}
}

