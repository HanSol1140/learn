// subscribe Test
const fs = require('fs');
var express = require('express');
var mqtt = require('mqtt');
var app = express();
const Options = {
    clientId: `test${Math.random().toString(16).substr(2, 8)}`, // 랜덤 클라이언트 ID 생성
    username: 'nanonix', // 브로커 로그인 아이디
    password: '$@43nanonix', // 브로커 로그인 비밀번호
    reconnectPeriod: 1000, // 재연결 간격(ms)
    connectTimeout: 30 * 1000, // 연결 타임아웃(ms)
};
var client = mqtt.connect('mqtt://192.168.0.210:1883', Options);
// var client = mqtt.connect('mqtt://127.0.0.1:1883');

// 일반 메세지 전송
client.on('connect', function () {
    console.log('Connected to MQTT broker');
});
client.on('error', function (err) {
    console.log('MQTT Error: ', err);
});

client.on('offline', function () {
    console.log('MQTT client is offline');
});

client.on('reconnect', function () {
    console.log('MQTT client is trying to reconnect');
});


var message = {
    tableNumber: 1,
    cleaningRobotState: false
}

// client.publish('temperature', JSON.stringify(message));
client.publish('test', "asㅁㄴㄹㄴㅁㅇㄹㄴㅁㅇㄹdf");
client.publish('test', "asㅁㄴㄹㄴㅁㅇㄹㄴㅁㅇㄹdf");
client.publish('test', "asㅁㄴㄹㄴㅁㅇㄹㄴㅁㅇㄹdf");
client.publish('test', "asㅁㄴㄹㄴㅁㅇㄹㄴㅁㅇㄹdf");



var client2 = mqtt.connect('wss://nanonix.help:8083'); // 웹소켓 연결 사용
// var client2 = mqtt.connect('ws://192.168.0.210:8083', Options); // 웹소켓 연결 사용
client2.on('connect', function () {
    client2.publish('websocket_test', 'Hello from WebSocket!');
    client2.publish('websocket_test', 'Hello from WebSocket!');
    client2.publish('websocket_test', 'Hello from WebSocket!');
    client2.publish('websocket_test', 'Hello from WebSocket!');
});
client2.on('error', function (err) {
    console.log('MQTT Error: ', err);
});

client2.on('offline', function () {
    console.log('MQTT client2 is offline');
});

client2.on('reconnect', function () {
    console.log('MQTT client2 is trying to reconnect');
});


// app.listen(8081, function () {
//     console.log('Subscribe Server ON'); 
// });
// // 오디오 전송
//     var filePath = './Voice.wavFUckyo'; 

//     client.on('connect', function () {
//         console.log('Connected to MQTT broker');
//         const stream = fs.createReadStream(filePath, { highWacterMark: 1024 }); // 메시지 크기를 1KB로 설정
//         let partIndex = 0;

//         stream.on('data', function (chunk) {
//             // 파일의 각 부분(chunk)을 base64 인코딩하여 MQTT로 전송합니다.
//             client.publish('JR01_1', JSON.stringify({ index: partIndex, data: chunk.toString('base64') }));
//             partIndex++;
//         });

//         stream.on('end', function () {
//             // 파일의 마지막 부분을 보낸 후, 전송이 완료되었음을 알리는 메시지를 전송합니다.
//             client.publish('JR01_1', JSON.stringify({ index: partIndex, end: true }));
//         });
//     });