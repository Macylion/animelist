import { DataTypes, Model } from 'sequelize';
import db from './Database';

class MediaType extends Model {
	public id!: number;
	public name!: string;
	public subname!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

MediaType.init({
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	subname: {
		type: DataTypes.STRING,
		allowNull: false,
		field: "second_name"
	},
	createdAt: { 
		type: DataTypes.DATE,
		field: "created_at"
	},
	updatedAt: { 
		type: DataTypes.DATE,
		field: "updated_at"
	}
}, {
	sequelize: db,
	tableName: "media_types",
	timestamps: true,
})

export default MediaType;