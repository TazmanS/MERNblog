const {Router} = require('express')
const Article = require('../models/Article')

const router = Router()

// /api/author/

router.post('/all', async(req, res) => {
    try{
        await Article.find({authorId: req.body.authorId}).then( articles =>{
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

router.post('/changepageauthor', async (req, res) => {
    try{
        await Article.find({authorId: req.body.authorId}).then( articles => {
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

router.post('/deletecomment', async (req, res) => {
    try {
        await Article.findById(req.body.articleId).then(one => {
            const newComments = one.comments.concat()
            newComments.splice(req.body.commentIndex, 1)

            const article = {
                comments: [...newComments]
            }
            
            Article.findByIdAndUpdate(req.body.articleId, article).then(() => {
                return res.status(200).json(one) 
            })
        })
    } catch(e) {
        console.log(e)
    }
})

module.exports = router