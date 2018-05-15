var db = require("../models");

module.exports = app => {

	// ---------------
	// GET REQUESTS
	// ---------------

	// retrieve units
	app.post("/api/units", (req, res) => {
		var query = {};
		query.UserId = req.body.user_id;
		db.Unit.findAll({
			where: query,
			include: [db.User]
		}).then(units => {
			res.json(units);
		});
	});

	// retrieve filtered flashcards
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

	// retrieve a single unit
	app.post("/api/units/unit", (req, res) => {
		var query = {};
		query.id = req.body.id;
		db.Unit.findAll({
			where:query,
			include: [db.User]
		}).then(units => {
			res.json(units);
		});
	});

	// retrieve flashcards based on unit id
	app.post("/api/cards/:unitId", (req, res) => {
		db.Card.findAll({
			where: {
				UnitId: req.params.unitId
			},
			include: [db.Unit]
		}).then(cards => {
			res.json(cards);
		});
	});

	// retrieve all cards from all units (for debugging)
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

	// delete all cards with given unit id
	app.delete("/api/cards/:unitId", (req, res) => {
		db.Card.destroy({
			where: {
				UnitId: req.params.unitId
			}
		}).then(result => {
			res.json(result);
		});
	});

	// deletes a card with given card id
	app.delete("/api/cards/delete/:id", (req, res) => {
		db.Card.destroy({
			where: {
				id: req.params.id
			}
		}).then(result => {
			res.json(result);
		});
	});
};