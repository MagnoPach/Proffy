// Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')


// Configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


// Inicio e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/sucess", (req, res) => {
    
    return res.sendFile(__dirname + "/views/sucess.html")
})

.post("/save-classes", saveClasses)

// start do servidor 
.listen(5500)
