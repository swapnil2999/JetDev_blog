import { Request, Response, Application } from "express";
import ArticleController from './../controllers/article.controller';
import CommentController from './../controllers/comment.controller';


export class Routes {
    private articleCtrl: ArticleController;
    private commentCtrl: CommentController;
    public constructor() {
        this.articleCtrl = new ArticleController();
        this.commentCtrl = new CommentController();
    }
    public routes(app: Application): void {
        app.route('/').get(this.invalidRoute);
        app.route('/api/health').get(this.healthRoute);
        app.route('/api/articles').post(this.articleCtrl.postArticle);
        app.route('/api/articles').get(this.articleCtrl.getArticle);
        app.route('/api/articles/:id/content').get(this.articleCtrl.getArticleContent);
        app.route('/api/articles/:id/comments').post(this.commentCtrl.postComment);
        app.route('/api/articles/:id/comments').get(this.commentCtrl.getComments);
        app.route('/api/articles/:id/comment').get(this.commentCtrl.getComment);
        app.route('/api/articles/:id/conc').post(this.commentCtrl.commentOnComment);
        app.route('/api/articles/:id/conc').get(this.commentCtrl.getCommentOnComment);
    }
    private invalidRoute(req: Request, res: Response): Response {
        return res.status(404).send('Route Not Found');
    }
    private healthRoute(req: Request, res: Response): Response {
        return res.status(200).send('App running successfully');
    }
}
