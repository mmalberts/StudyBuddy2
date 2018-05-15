module.exports = (sequelize, DataTypes) => {
	var Unit = sequelize.define("Unit", {
		unitName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		subjectName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		bg: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.STRING
		}
	});

	Unit.associate = models => {
		Unit.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
		Unit.hasMany(models.Card, {
			onDelete: "cascade"
		});
	};

	return Unit;
};