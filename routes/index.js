var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile('todos.txt', (err, data) => {
        console.log(data);
        var json = JSON.stringify(data);
        var todo = data.toString();
        res.render('index',
            {
                title: 'Express',
                todo: todo
            });
    });
});

router.post('/add', function(req, res, next) {
    if (req.body.todo) {
        fs.writeFile('todos.txt', req.body.todo, {
        }, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
            var mineData = {
                punkt1: req.body.todo
            }
            res.send(JSON.stringify(mineData));
        });
    }
});

module.exports = router;
