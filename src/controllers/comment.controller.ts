import { Request, Response } from "express";
import CommentService from './../services/comment.service';
import {CommentValidator} from './../validators/comment.validator'

export default class CommentController {
    private commentService : CommentService;
    private commentValidator : CommentValidator;
    public constructor() {
        this.commentService = new CommentService();
        this.commentValidator = new CommentValidator();
    }
    public postComment = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { errors, body , params }: any = this.commentValidator.postComment(req)
            if (errors.length > 0) {
                return res.status(400).json({ success: false, errors });
            }
            body.articleId = params.id
            const response: any = await this.commentService.postComment(body);
            return res.json({response});
        } catch (error) {
            console.log("ArticleController:createArticle:error: ", error);
            return res.status(500).json({success: false, error: 'Unable to process the request'});
        }
    };

    public getComments = async (req: Request, res: Response): Promise<Response> => {
        try {
            const {params, errors}: any = this.commentValidator.getComments(req)
            if (errors.length > 0) {
                return res.status(400).json({ success: false, errors });
            }
            const response: any = await this.commentService.getComments(params.id);
            if (response) {
                return res.json({ success: true, data: response });
            }
        } catch (error) {
            console.log("ArticleController:createArticle:error: ", error);
            return res.status(500).json({success: false, error: 'Unable to process the request'});
        }
    };

    public getComment = async (req: Request, res: Response): Promise<Response> => {
        try {
            const {params, errors}: any = this.commentValidator.getComments(req)
            if (errors.length > 0) {
                return res.status(400).json({ success: false, errors });
            }
            const response: any = await this.commentService.getComment(params.id);
            if (response) {
                return res.json({ success: true, data: response });
            }
        } catch (error) {
            console.log("ArticleController:createArticle:error: ", error);
            return res.status(500).json({success: false, error: 'Unable to process the request'});
        }
    };


    public commentOnComment = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { errors, body , params }: any = this.commentValidator.postComment(req)
            if (errors.length > 0) {
                return res.status(400).json({ success: false, errors });
            }
            body.parentId = params.id;
            const response: any = await this.commentService.commentOnComment(body);
            return res.json({response});
        } catch (error) {
            console.log("ArticleController:createArticle:error: ", error);
            return res.status(500).json({success: false, error: 'Unable to process the request'});
        }
    };

    public getCommentOnComment = async (req: Request, res: Response): Promise<Response> => {
        try {
            const {params, errors}: any = this.commentValidator.getComments(req)
            if (errors.length > 0) {
                return res.status(400).json({ success: false, errors });
            }
            const response: any = await this.commentService.getCommentOnComment(params.id);
            if (response) {
                return res.json({ success: true, data: response });
            }
        } catch (error) {
            console.log("ArticleController:createArticle:error: ", error);
            return res.status(500).json({success: false, error: 'Unable to process the request'});
        }
    };
}