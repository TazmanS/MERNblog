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

module.exports = router