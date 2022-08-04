import { Model, DataTypes } from "sequelize";
import { database } from "../database/sequelize";


export class Comment extends Model {
    public id: number;
    public Nickname: string;
    public Content: string
}

Comment.init({
    id: {
        type: new DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nickName :{
        type : new DataTypes.STRING(255),
        field :"nickName",
        allowNull : false
    },
    content: {
        type : new DataTypes.STRING(255),
        field : "content",
        allowNull : false
    },
    articleId:{
        type: new DataTypes.BIGINT,
        allowNull : false
    },
    parentId : {
        type: new DataTypes.BIGINT,
        defaultValue : 0
    }
},{
    timestamps: true,
    sequelize: database,
    tableName: "comments"
});

Comment.hasMany(Comment, { as: 'comments', foreignKey: 'parentId' });
Comment.belongsTo(Comment, { as:'comment', foreignKey: 'parentId' });
//Comment.sync({force : true});