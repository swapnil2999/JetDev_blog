import {Request} from 'express';
import Validator from './../helpers/validator';


export class ArticleValidator {
    private dataValidator: Validator;
    public constructor() {
        this.dataValidator = new Validator();
    }

    public postArticle = (req: Request) => {
        const errors: any  = [];
        const {body} : any  = req;

        if (!this.dataValidator.isNotUndefinedAndNull(body.title)) {
            errors.push('Please enter Title')
        }

        if (!this.dataValidator.isNotUndefinedAndNull(body.nickName)) {
            errors.push('Please enter valid Nickname')
        }

        if (!this.dataValidator.isNotUndefinedAndNull(body.content)) {
            errors.push('Please post valid Content and Content Can\'t be Empty')
        }
        return { errors, body };
    }

    public getArticle = (req: Request) => {
        const errors: any  = [];
        const {query} : any  = req;

        if (this.dataValidator.isNullOrUndefined(query.pageNo)) {
            errors.push('Please enter valid PageNO');
		}
		if (this.dataValidator.isNullOrUndefined(query.limit)) {
            errors.push('Please enter valid limit');
		}
		return { errors, query };
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