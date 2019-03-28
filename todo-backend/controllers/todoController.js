const Model = require("../models/todoModel");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const db = process.env.MONGOLAB_URI
module.exports = {
    addTodo: (req, res) => {
        mongoose.connect(db, { useNewUrlParser : true }, (err) => {
          let result = {};
          let status = 201;
          const {name, password} = req.body;
          const user = new Model({name, password});
          const saltRounds = 10;
          bcrypt.genSalt(saltRounds, function(err, salt){
              bcrypt.hash(user.password, salt, function(err, hash) {
                  user.password = hash;
                  user.save((err) => {
                    if(!err) {
                        result.result = user;
                    } else {
                        status = 500;
                        console.log("someting went wrong")
                    }
                    res.send(result);
                    res.status(status)
                })
              })
          })

        })
    },
    login: (req, res) => {
        const {name, password} = req.body;
        mongoose.connect(db, { useNewUrlParser: true}, (err) => {
            let result = {};
            let status = 200;
            if(!err) {
                Model.findOne({name}, (err, user) => {
                    if(!err && user) {
                        bcrypt.compare(password, user.password).then(match => {
                            if(match) {
                                const token = jwt.sign({user: user.name}, process.env.JWT_SECRET, { expiresIn: '2d'});
                                result.token = token;
                                result.status = status;
                                result.result = user;
                            } else {
                                status = 401;
                                result.status = status;
                                result.error = 'Authentication error';
                            }
                            res.status(status).send(result);
                        }).catch(err => {
                            status = 500;
                            result.status = status;
                            result.error = err;
                            res.status(status).send(result);
                          });
                    } else {
                        status = 404;
                        result.status = status;
                        result.error = err;
                        res.status(status).send(result);
                    }  
                })
            } else {
                status = 500;
                result.status = status;
                result.error = err;
                res.status(status).send(result);
            }
        })
    }
}