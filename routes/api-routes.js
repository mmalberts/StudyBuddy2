var db = require("../models");

module.exports = function(app) {

	// ---------------
	// GET REQUESTS
	// ---------------

	// get units
	app.post("/api/units", function(req, res) {
		var query = {};
		query.UserId = req.body.user_id
		db.Unit.findAll({
			where: query,
			include: [db.User]
		}).then(function(units) {
			res.json(units);
		});
	});

	// get cards based on unit id number
	app.get("/api/cards/:unitId", function(req, res) {
		db.Card.findAll({
			where: {
				UnitId: req.params.unitId
			},
			include: [db.Unit]
		}).then(function(cards) {
			res.json(cards);
		});
	});

	// get all cards from all units (for debugging)
	app.get("/api/cards", function(req, res) {
		db.Card.findAll({}).then(function(cards) {
			res.json(cards);
		});
	});

	// ---------------
	// POST REQUESTS
	// ---------------

	// post units
	// KEEP IN MIND - req.body needs to be an object, so be sure to pass an object from the frontend
	app.post("/api/units/create", function(req, res) {
		db.Unit.create(req.body).then(function(result) {
			res.json(result);
		});
	});

	// post cards
	// KEEP IN MIND - req.body needs to be an object, so be sure to pass an object from the frontend
	app.post("/api/cards", function(req, res) {
		db.Card.create(req.body).then(function(result) {
			res.json(result);
		});
	});
	
	// ---------------
	// DELETE REQUESTS
	// ---------------

	// delete units
	app.delete("/api/units/:unitId", function(req, res) {
		db.Unit.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(result) {
			res.json(result);
		});
	});

}