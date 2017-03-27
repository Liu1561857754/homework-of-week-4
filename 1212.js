var fs = require('fs');
var http = require('http');
var data = 'this is homework';
fs.writeFile('homework.txt',data,function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('success.')
    }
})
 var rs = fs.createReadStream('homework.txt', 'utf-8');

rs.on('data', function (chunk) {
    console.log('1');
    console.log(chunk);
});

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    fs.readFile('homework.txt', function(err, file){
    	response.write(file);
        response.end();
    });
    }).listen("8888");

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');