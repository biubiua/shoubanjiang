var express = require('express');
var router = express.Router();
var spider = require('../api/spider');
var url = require('url');
var querystring = require('querystring');
//home的数据

router.get('/home', function(req,res,next){
		spider("/shouban/mixture", function(data){
			// console.log(data);
			res.send(data);
		})
	})
//home详情
router.get('/homedetail', function(req,res,next){

		spider("/shouban/article/"+req.query.gid, function(data){
			// console.log(data);
			res.send(data);
		})
	})


//home加载
router.get('/homemore', function(req,res,next){
		var str = url.parse(req.url)
		var query = querystring.parse(str.query);
		// console.log(query.page);
		var page = query.page;
		spider("/shouban/mixture?page="+page, function(data){
			// console.log(data);
			
			res.send(data);
		})
	})

router.get('/store', function(req,res,next){
		spider("/shouban/store", function(data){
			// console.log(data);
			res.send(data);
		})
	})
//最新的数据
router.get('/newlist', function(req,res,next){
		console.log("ccc");
		spider("/shouban/tweet?&sort=latest", function(data){
			// console.log(data);
			res.send(data);
		})
	})

router.get('/tweet', function(req,res,next){
		var str = url.parse(req.url)
		var query = querystring.parse(str.query);
		console.log(query.page);
		var page = query.page;
		spider("/shouban/tweet?sort=latest&page="+page, function(data){
			// console.log(data);
			
			res.send(data);
		})
	})

//最热的数据
router.get('/hotlist', function(req,res,next){
		console.log("ccc");

		spider("/shouban/tweet?&sort=hottest", function(data){
			// console.log(data);
			res.send(data);
		})
	})

router.get('/tweet', function(req,res,next){
		var str = url.parse(req.url)
		var query = querystring.parse(str.query);
		// console.log(query.page);
		var page = query.page;
		spider("/shouban/tweet?sort=hottest&page="+page, function(data){
			// console.log(data);
			
			res.send(data);
		})
	})

//购物的数据
router.get('/shop', function(req,res,next){

		spider("/shouban/shop/good", function(data){
			// console.log(data);
			res.send(data);
		})
	})

//购物加载数据
router.get('/good', function(req,res,next){
		var str = url.parse(req.url)
		var query = querystring.parse(str.query);
		// console.log(query.page);
		var page = query.page;

		spider("/shouban/shop/good?page="+page, function(data){
			// console.log(data);
			res.send(data);
		})
	})
//https://api.shoubanjiang.com
router.get('/gooddetail', function(req,res,next){

		spider("/shouban/shop/good/"+req.query.gid, function(data){
			// console.log(data);
			res.send(data);
		})
	})
//注册
router.post('/register',function(req,res,next){
	
    dbhandler.user.findOne({
        phone:req.body.phone,
        password:req.body.password
    },function(error,data){
        if(data){
            res.send(false);
        }else{
            dbhandler.user.create({
                phone:req.body.phone,
                password:req.body.password
            },function(error,data){
                if(!error){
                    res.send(true);
                }else{
                    res.send(false);
                }
            })
        }
    })
})

//登录
router.post('/login',function(req,res){

    dbhandler.user.findOne({
        phone:req.body.phone,
        password:req.body.password
    },function(error,data){
        if(data){
            res.send(true);
        }else{
            res.send(false);
        }
    })
})

module.exports = router;
