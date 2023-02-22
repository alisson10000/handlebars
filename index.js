const express = require('express')
const app = express()
const handlebars =  require('express-handlebars')
const Sequelize = require('sequelize')

//Configurar o handlebars
// Template engine
app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
app.set('view engine','handlebars')




//Conexão com o banco de dados mariadb

const sequelize = new Sequelize('test','root','',{
    host:"localhost",
    dialect:'mariadb'
})
sequelize.authenticate(function(){
    console.log("Conexao ok")
}).catch(function(erro){
    console.log("Falha ao conectar" + erro)
})

//=========================================================

app.get("/cad",function(req, res){
    res.render('layouts/formulario')
    
    })
    

    app.post("/salvar",function(req, res){
        res.send('salvar dados aqui')
        
        })



app.listen(8081, function () {
    console.log("servidor rodando")
})

