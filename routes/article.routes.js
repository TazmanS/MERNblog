const {Router} = require("express")
const Article = require('../models/Article')

const router = Router()

//api/article

router.post('/add', async (req, res) => {
    try{

        const article = new Article({
            title: req.body.title,
            text: req.body.text,
            hashTag: req.body.hashTag,
            date: req.body.date,
            author: req.body.author,
            authorId: req.body.authorId
        })

        await article.save()

        console.log("Article add")
        
        res.status(200).json("Article add")
    } catch(e){
        console.log(e)
    }
})

router.get('/all', async (req,res) => {

    try{
        await Article.find({} ).then( articles =>{
            const data = {
                articlesNumber: articles.length,
                tenArticles: articles.reverse().slice(0,10)
            }
            return res.status(200).json(data)
        })
    } catch(e){
        console.log(e)
    }

})

router.post('/delete', async (req, res) => {
    try{
        await Article.findOneAndDelete({ _id: req.body.articleId }).then(data => {
            return res.status(200).json(data)
        })
    } catch(e){
        console.log(e)
    }
})

router.post('/updatearticle', async (req, res) => {
    try{
        const article = {
            title: req.body.newArticleData.title,
            text: req.body.newArticleData.text,
            hashTag: req.body.newArticleData.hashTag
        }

        await Article.findByIdAndUpdate(req.body.articleId, article).then(one => {
            return res.status(200).json(one)
        })

    } catch(e){
        console.log(e)
    }
})

router.post('/changepage', async (req, res) => {
    try{
        await Article.find({}).then( articles => {
            let indexPage = req.body.indexPage * 10
            const data = {
                articlesNumber: articles.length,
                tenArticles: articles.reverse().splice(indexPage, indexPage+10)
            }
            return res.status(200).json(data)
        })
    } catch(e){
        console.log(e)
    }
})

router.post('/addnewcomment', async (req, res) => { 
    try{

        await Article.findById(req.body.id).then( one => {
            let newArr = one.comments.concat()
            let newComment = {
                login : req.body.login,
                comment: req.body.comment
            }
            newArr.push(newComment)
            let data = {comments: newArr}

            Article.findByIdAndUpdate(req.body.id, data).then((one) => {
                return res.status(200).json(one)
            })
        })


    } catch(e){
        console.log(e)
    }
})


module.exports = router