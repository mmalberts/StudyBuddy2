module.exports = (sequelize, DataTypes) => {
	var Card = sequelize.define("Card", {
		problem: {
			type: DataTypes.STRING,
			allowNull: false
		},
		solution: {
			type: DataTypes.STRING,
			allowNull: false
		},
		incorrect1: {
			type: DataTypes.STRING,
			allowNull: false
		},
		incorrect2: {
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