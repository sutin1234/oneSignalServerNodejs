var express = require('express')
var app = express()
request = require('request')
app.listen(9000)
console.log('Start server post 9000')

app.get('/', function(req, res, next) {
    var data = {
        app_id: "e103f2d1-4f75-4549-a15d-39a14bb3d3e8",
        included_segments: ['All'],
        contents: {
            'en': req.query.msg
        },
        headings: {
            'en': req.query.title
        }
    }
    request({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic MGYyN2I5ZDgtNGYwYy00MjVhLWI3YzctOTJhMTY3ZmY1OTM5'
        },
        url: 'https://onesignal.com/api/v1/notifications',
        method: 'post',
        body: data,
        json: true
    }, function(err, resp, body) {
        if (err) console.log('error')
        if (resp) console.log('success')
        if (body) console.log(body)
        res.send('ok')
    })
})