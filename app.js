let app = require('express')();
let http = require('http').Server(app);
let bodyParser = require('body-parser');
let sendmail = require('sendmail')();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/sendemail', function(req, res) {
    let users = req.body.users;
    console.log('email server');
    console.log(req.body);
 
    sendmail({
        from: 'simon2@live.se',
        to: 'simon2@live.se',
        subject: 'test sendmail',
        html: 'Mail of test sendmail ',
      }, function(err, reply) {
        console.log(err && err.stack);
        // console.dir(reply);
    });
});

http.listen(3002, function() {
    console.log('Email server listening on *:3002');
});
