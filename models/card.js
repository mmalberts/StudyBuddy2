module.exports = (sequelize, DataTypes) => {
	var Card = sequelize.define("Card", {
		question: {
			type: DataTypes.STRING,
			allowNull: false
		},
		correctAnswer: {
			type: DataTypes.STRING,
			allowNull: false
		},
		answer1: {
			type: DataTypes.STRING,
			allowNull: false
		},
		answer2: {
			type: DataTypes.STRING,
			allowNull: false
		},
		answer3: {
		    type: DataTypes.STRING,
			allowNull: false
		},
		gotItRight: {
			type: DataTypes.BOOLEAN,
			default: false
		}
	});

	Card.associate = models => {
		Card.belongsTo(models.Unit, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Card;
};