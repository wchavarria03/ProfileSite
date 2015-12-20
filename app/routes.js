/**
 * Created by Walter on 19/12/2015.
 */
var path = require('path');

module.exports = function(app){
    app.get('*', function (req, res) {
        res.sendFile('index.html',  { root: path.join(__dirname, '../public') });  //load our public/index.html file
    });
}
