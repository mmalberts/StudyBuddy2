var db = require("../models");

module.exports = app => {

	// ---------------
	// GET REQUESTS
	// ---------------

	// get units
	app.post("/api/units", (req, res) => {
		var query = {};
		query.UserId = req.body.user_id
		db.Unit.findAll({
			where: query,
			include: [db.User]
		}).then(units => {
			res.json(units);
		});
	});

	app.post("/api/units/filter", (req, res) => {
		var query = {};
		query.UserId = req.body.user_id;
		query.subjectName = req.body.subjectName;
		db.Unit.findAll({
			where: query,
			include: [db.User]
		}).then(units => {
			res.json(units);
		});
	});

	// get cards based on unit id number
	app.get("/api/cards/:unitId", (req, res) => {
		db.Card.findAll({
			where: {
				UnitId: req.params.unitId
			},
			include: [db.Unit]
		}).then(cards => {
			res.json(cards);
		});
	});

	// get all cards from all units (for debugging)
	app.get("/api/cards", (req, res) => {
		db.Card.findAll({}).then(cards => {
			res.json(cards);
		});
	});

	// ---------------
	// POST REQUESTS
	// ---------------

	// post units
	// KEEP IN MIND - req.body needs to be an object, so be sure to pass an object from the frontend
	app.post("/api/units/create", (req, res) => {
		db.Unit.create(req.body).then(result => {
			res.json(result);
		});
	});

	// post cards
	// KEEP IN MIND - req.body needs to be an object, so be sure to pass an object from the frontend
	app.post("/api/cards", (req, res) => {
		db.Card.create(req.body).then(result => {
			res.json(result);
		});
	});
	
	// ---------------
	// DELETE REQUESTS
	// ---------------

	// delete units
	app.delete("/api/units/:unitId", (req, res) => {
		db.Unit.destroy({
			where: {
				id: req.params.unitId
			}
		}).then(result => {
			res.json(result);
		});
	});
};