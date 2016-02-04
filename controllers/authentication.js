/**
 * Created by Vijay on 2/2/16.
 */

    var passport = require('passport');
    var Strategy = require('passport-facebook').Strategy;
    var facebookConfig = require("../model/config/facebookconfig.js");



    passport.use(new Strategy({
            clientID: facebookConfig.appID,
            clientSecret: facebookConfig.appSecret,
            callbackURL: 'http://localhost:3000/auth/facebook/return'
        },
        function(accessToken, refreshToken, profile, done) {
            // The user's Facebook profile is supplied as the use record.
            // In a production-quality application, the Facebook profile should
            // be associated with a user record in the application's database, which
            // allows for account linking and authentication with other identity
            // providers.
            console.log(accessToken);
            console.log(profile);

            done(null, profile);
        }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user.id);
    });

    module.exports =passport;
