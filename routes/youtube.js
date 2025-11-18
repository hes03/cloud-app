const express = require('express')
const router = express.Router() //함수의 괄호가 아니라 객체괄호-생성자함수

// Get users listen
// get메서드는 파라미터가 두개이다.
// 첫번째 파라미터 자리에는 endpoint가 온다.
// 두번재 파라미터 자리에는 콜백함수가 온다.(req:요청, res:응답, next:미들웨어 호출함수)
//-> http://localhost:3000/calendar -> app.js
router.get("/", function(req, res, next){
  res.send('유튜브 페이지') //-> text/plain
  // next()
})
// 가장 인기있는 동영상
router.get("/youtube1", function(req, res, next){
  res.render('index', { title: '인기동영상', pageName: 'pages/youtube/youtube1.ejs'}) 
})
// 동영상검색
router.get("/youtube2", function(req, res, next){
  res.render('index', { title: '동영상검색', pageName: 'pages/youtube/youtube2.ejs'}) 
})
// 쇼츠검색
router.get("/youtube3", function(req, res, next){
  res.render('index', { title: '쇼츠검색', pageName: 'pages/youtube/youtube3.ejs'}) 
})

module.exports = router;