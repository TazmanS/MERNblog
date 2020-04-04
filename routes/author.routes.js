const {Router} = require('express')
const Author = require('../models/Author')
const Article = require('../models/Article')

const router = Router()

router.post('/all', async(req, res) => {
    try{
        await Article.find({authorId: req.body.authorId}).then((one) => {
            return res.status(200).json(one)
        })
    } catch(e){
        console.log(e)
    }
})

module.exports = router