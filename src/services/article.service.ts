import { Article } from "./../models/article";

export default class ArticleService{
    public constructor() {
    }
    public async postArticle(enquiryData: any = {}): Promise<any[]> {
        const response: any = { message : '' , data: [], success: '' };
        const enquiryResponse: any = await Article.create(enquiryData);
            if (enquiryResponse) {
                response.success = true
                response.message = 'Article Submitted Successfully.'
                response.data = enquiryResponse
            };
        return response;
    };

    public async getArticle(articleParam: any = {}): Promise<any[]> {
        const response: any = { message: '', data: [] };
        const enquiryResponse: any = await Article.findAndCountAll({
            offset: 0 + (parseInt(articleParam.pageNo, 10) - 1) * parseInt(articleParam.limit, 10),
            limit: parseInt(articleParam.limit, 10)
        });
        if (enquiryResponse) {
            response.message = 'Article List Fetched Successfully.'
            response.data = enquiryResponse
        };
        return response;
    };

    public async getArticleContent(articleId: any = {}): Promise<any[]> {
        const response: any = { message: '', data: [] };
        const enquiryResponse: any = await Article.findAll({
            where :{
                id : articleId
            },
            attributes:['content']
        });
        if (enquiryResponse) {
            response.message = 'Article Content Fetched Successfully.'
            response.data = enquiryResponse
        };
        return response;
    }
}
