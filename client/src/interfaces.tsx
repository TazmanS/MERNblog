export interface ContentFormInterface {
    titleChange: string,
    textChange: string,
    hashTagChange: string,
    hashTagBody: any,
    vertyInfo: boolean
    titleChangeFunction(event) :void,
    textChangeFunction(event): void,
    hashTagFunction(event): void,
    hashTagArrayFunction(event): void,
    addNewArticleFunction(): void,
    addOUA: any
}

export interface NewArticle {
    title: String,
    text: String,
    hashTag: Array<any>
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
    changePage(indexPage, userId) :void
}

export interface RedactorArticleInterface {
    getAllAuthorArticles(userId) :void,
    user: any,
    authorArticles: any,
    history: any,
    deleteArticle(articleId, userId) :void,
    changePageAuthor(indexPage, userId): void,
    page: Number,
    activePage: Number,
    getOneArticle(article): void,
    setUpdateArticle(article): void
}
