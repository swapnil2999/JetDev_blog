import {Request} from 'express';
import Validator from './../helpers/validator';



export class CommentValidator {
    private dataValidator: Validator;
    public constructor() {
        this.dataValidator = new Validator();
    }

    public postComment = (req: Request) => {
        const errors: any  = [];
        const {body , params} : any  = req;
        if (!this.dataValidator.isNotUndefinedAndNull(body.nickName)) {
            errors.push('Please enter valid Nickname')
        }

        if (!this.dataValidator.isNotUndefinedAndNull(body.content)) {
            errors.push('Please post valid Content and Content Can\'t be Empty')
        }

        if (this.dataValidator.isNullOrUndefined(params.id)) {
            errors.push('Please enter valid param');
		}
        return { errors, body , params };
    }

    public getComments = (req: Request) => {
        const errors: any  = [];
        const {params} : any  = req;
        if (this.dataValidator.isNullOrUndefined(params.id)) {
            errors.push('Please enter valid PageNO');
		}
		return { errors, params};
    }

    public getArticleContent = (req: Request) => {
        const errors: any  = [];
        const {params} : any  = req;
        if (this.dataValidator.isNullOrUndefined(params.id)) {
            errors.push('Please enter valid PageNO');
		}
		return { errors, params};
    }
}