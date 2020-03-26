const {Router} = require('express')
const User = require('../models/User')

const router = Router()

router.post('/add', async (req, res) => {
    try{
        await User.findOne({login: req.body.login}).then((findEl) => {
            if(findEl){
                res.status(200).json("Login not free!!!")
                throw Error("Login not free!!!")
            }
        })

        const user = new User({
            login: req.body.login,
            password: req.body.password
        }) 

        await user.save().then(one => {
          res.status(200).json({
              data:"New User was created!!!", 
              login: one.login, 
              id: one._id
            })  
        })
        
    }catch (e){
        console.log(e)
    }
})

module.exports = router