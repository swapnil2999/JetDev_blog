import { Request, Response } from "express";
import ArticleService from './../services/article.service';
import {ArticleValidator} from './../validators/article.validator'

export default class ArticleController {
    private articleService: ArticleService;
    private articleValidator : ArticleValidator;
    public constructor() {
        this.articleService = new ArticleService();
        this.articleValidator = new ArticleValidator();
    }
    public postArticle = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { errors, body }: any = this.articleValidator.postArticle(req)
            if (errors.length > 0) {
                return res.status(400).json({ success: false, errors });
            }
            const response: object = await this.articleService.postArticle(body);
            return res.json({ response });
        } catch (error) {
            console.log("ArticleController:createArticle:error: ", error);
            return res.status(500).json({ success: false, error });
        }
    };

    public getArticle = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { errors, query }: any = this.articleValidator.getArticle(req)
            if (errors.length > 0) {
                return res.status(400).json({ success: false, errors });
            }
            const response: any = await this.articleService.getArticle(query);
            if (response && response.data.count >= 0) {
                return res.json({ success: true, data: response });
            }
        } catch (error) {
            console.log("ArticleController:createArticle:error:", error);
            return res.status(500).json({ success: false, error });
        }
    };

    public getArticleContent = async (req : Request , res : Response) : Promise<Response> => {
        try {
            const { errors, params }: any = this.articleValidator.getArticleContent(req)
            if (errors.length > 0) {
                return res.status(400).json({ success: false, errors });
            }
            const response: any = await this.articleService.getArticleContent(params.id);
            if (response) {
                return res.json({ success: true, data: response });
            }
        } catch (error) {
            console.log("ArticleController:createArticle:error: ", error);
            return res.status(500).json({ success: false, error });
        }
    }
}