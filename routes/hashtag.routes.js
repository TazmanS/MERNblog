const {Router} = require('express')
const Article = require('../models/Article')

const router = Router()

// api/hashtag/

router.get('/all', async (req, res) => {
    try{
        await Article.find({}).then(articles => {
            let set = new Set() 
            articles.map(one => {
                one.hashTag.forEach(oneEl => set.add(oneEl))
            })
            return res.status(200).json([...set])
        })
        
    } catch(e){
        console.log(e)
    }
})

router.post('/articlebytag', async(req, res) => {
    try{
        const {hashTag} = req.body
        
        await Article.find({hashTag: hashTag}).then(els => {
            return res.status(200).json(els)
        })

    } catch(e){
        console.log(e)
    }
})



module.exports = router