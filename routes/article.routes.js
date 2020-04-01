const {Router} = require("express")
const Article = require('../models/Article')

const router = Router()

router.post('/add', async (req, res) => {
    try{

        const article = new Article({
            title: req.body.title,
            text: req.body.text,
            hashTag: req.body.hashTag,
            date: req.body.date,
            author: req.body.author
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
        await Article.find({} , (err, articles) =>{
            return res.status(200).json(articles)
        })
    } catch(e){
        console.log(e)
    }

})


module.exports = router