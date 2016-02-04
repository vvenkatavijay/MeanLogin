module.exports = function(passport) {

    var express = require('express');
    var router = express.Router();

    /* GET home page. */
    router.get('/', function (req, res, next) {
        res.render('../client/index.html');
    });

    router.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));

    router.get("/login", function(req, res){
        res.send("You are logged in!");
    });

    router.get("/failure", function(req, res){
        res.send("You are not logged in!");
    });

    router.get("/auth/facebook/return", passport.authenticate('facebook', { successRedirect: '/login',
        failureRedirect: '/failure' }));

    return router;
}
