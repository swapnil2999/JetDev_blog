import { Comment } from "./../models/comment";



export default class CommentService{
    public constructor() {
    }
    public async postComment(enquiryData: any = {} , ): Promise<any[]> {
        const response: any = { message : '' , data: [], success: '' };
        const enquiryResponse: any = await Comment.create(enquiryData);
            if (enquiryResponse) {
                response.success = true
                response.message = 'comment post Successfully.'
                response.data = enquiryResponse
            };
        return response;
    };

    public async getComments(articleId: any = {} , ): Promise<any[]> {
        const response: any = { message : '' , data: [], success: '' };
        const enquiryResponse: any = await Comment.findAndCountAll({
            where : {
                articleId : articleId
            },
            attributes : ['nickName','content']
        });
        if (enquiryResponse) {
            response.success = true
            response.message = 'Article comments List Fetched Successfully.'
            response.data = enquiryResponse
        };
        return response;
    };

    public async getComment(commentId: any = {} , ): Promise<any[]> {
        const response: any = { message : '' , data: [], success: '' };
        const enquiryResponse: any = await Comment.findAndCountAll({
            where : {
                id : commentId
            },
            attributes : ['nickName','content']
        });
        if (enquiryResponse) {
            response.success = true
            response.message = 'Comment fetched successfully'
            response.data = enquiryResponse
        };
        return response;
    };

    public async getCommentOnComment(id: any = {} , ): Promise<any[]> {
        const response: any = { message : '' , data: [], success: '' };
        const enquiryResponse: any = await Comment.findAndCountAll({
            where : {
                parentId : id
            },
            attributes : ['nickName','content']
        });
        if (enquiryResponse) {
            response.success = true
            response.message = 'Comment fetched successfully'
            response.data = enquiryResponse
        };
        return response;
    };

    public async commentOnComment(commentData: any = {} , ): Promise<any[]> {
        const response: any = { message : '' , data: [], success: '' };
        const enquiryResponse: any = await Comment.findOne({
            where : {
                id: commentData.parentId
            }
        });
        console.log('commentData', enquiryResponse);
        if (enquiryResponse) {
            commentData.articleId = parseInt(enquiryResponse.dataValues.articleId);
            const responseComment : any = await Comment.create(commentData);
            if (response) {
                response.success = true
                response.message = 'comment post Successfully.'
                response.data = responseComment
            };
        };
        return response;
    };
}