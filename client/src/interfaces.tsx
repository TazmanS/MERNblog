export interface ContentFormInterface {
    titleChange: string,
    textChange: string,
    hashTagChange: string,
    hashTagBody: any,
    history: any,
    vertyInfo: boolean
    titleChangeFunction(event) :void,
    textChangeFunction(event): void,
    hashTagFunction(event): void,
    hashTagArrayFunction(event): void,
    addNewArticleFunction(): void,
}

export interface NewArticle {
    title: String,
    text: String,
    hashTag: Array<any>
}

export interface AddArticle {
    addNewArticle(newArticleData: NewArticle) : any,
    history: any,
    user: any,
    getAllArticles(): void,
    updateArticle(newArticleData: NewArticle, articleId: String) : any
}

export interface CommentsInterface {
    article: any,
    login: String,
    activePage: Number,
    authorFlag: Boolean,
    changePage(activePage) :void,
    changePageAuthor(activePage) :void,
    addNewComment(article, login, comment) :void
    deleteComment(commentIndex, articleId) :void,
    getAllAuthorArticles(userId) :void
}

export interface ArticleInterface {
    articles: [{
        title: String,
        text: String,
        hashTag: String,
        date: String,
        _id: String,
        author: String,
        comments: [any]
    }],
    page: Number,
    activePage: Number,
    changePage(indexPage) :void
}

export interface RedactorArticleInterface {
    getAllAuthorArticles(userId) :void,
    user: any,
    authorArticles: any,
    history: any,
    deleteArticle(articleId) :void,
    getAllArticles() :void,
    changePageAuthor(indexPage): void,
    page: Number,
    activePage: Number
}
