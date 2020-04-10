const {Router} = require('express')
const User = require('../models/User')
const Article = require('../models/Article')

const router = Router()

// api/user/

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
        await User.find({_id: req.body.userId}).then(one => {
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

router.post('/userdelete', async (req, res) => {
    try{

        let userData = {
            login: req.body.login,
            password: req.body.userPassword
        }

        await User.findOne(userData).then(data => {
            if(!data){
                return res.status(201).json("Не вверный пароль")
            } else{
                console.log("Пользователь найден")
            }
        })

        if(req.body.leaveArticles){
            await Article.find({authorId: req.body.userId}).then(data => {
                data.forEach(async one => {
                    let dataForUpdate = {
                        author: "Author delete",
                        authorId: null
                    }
                    await Article.findByIdAndUpdate(one._id, dataForUpdate)
                })
            })
        } else{
            await Article.find({authorId: req.body.userId}).then(data => {
                data.forEach(async one => {
                    await Article.findByIdAndDelete(one._id)
                })
            })
        }

        await User.findOneAndDelete({password: req.body.userPassword}).then(() =>{
            return res.status(200).json('Пользователь удален')
        })

    } catch(e){
        console.log(e)
    }
})

module.exports = router