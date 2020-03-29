const {Router} = require('express')
const User = require('../models/User')

const router = Router()

router.post('/add', async (req, res) => {
    try{
        await User.findOne({login: req.body.login}).then((findEl) => {
            if(findEl){
                res.status(200).json({
                    data: "Login not free!!!"
                })
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

router.post('/entrancelocalstorage', async (req, res) => {
    try{
        await User.find({id: req.body.userId}).then(one => {
            res.status(200).json(one)
        })
    } catch(e){
        console.log(e)
    }
})

router.post('/entrance', async (req, res) => {
    try{
        await User.find({
            login: req.body.login, 
            password: req.body.password
        }).then(one => {
            if(one[0]){
                res.status(200).json(one)
            } else{
                res.status(201).json("User not found")
                console.log("User not found")
            }
        }) 


    } catch(e){
        console.log(e)
    }
})

module.exports = router