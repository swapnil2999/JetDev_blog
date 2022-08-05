import { Model, DataTypes } from "sequelize";
import { database } from "../database/sequelize";
import { Comment } from "./../models/comment";


export class Article extends Model {
    public id: number;
    public Nickname: string;
    public Title : string;
    public Content: string;
}

Article.init({
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
    title : {
        type : new DataTypes.STRING(255),
        field : 'title',
        allowNull : false
    },
    content: {
        type : new DataTypes.STRING(500),
        field : "content",
        allowNull : true
    }
},{
    timestamps: true,
    sequelize: database,
    tableName: 'articles'
});
Article.hasMany(Comment, { as: 'comments', foreignKey: 'articleId' });
Comment.belongsTo(Article, { as:'articles', foreignKey: 'articleId' });
// This creates the table if it doesn't exist (and does nothing if it already exists)
Article.sync({force : true});