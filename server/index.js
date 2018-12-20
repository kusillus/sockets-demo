const express = require('express')
const app =  express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const port = 6677

// middleware
app.use(express.static('client'))

// Rutas
app.get('/', (req, res) => {
    res.send('hola')
})

let messages = [
    {id: 1, text: 'Welcome to chat', nick: 'bot'},
    {id: 2, text: 'Hi', nick: 'bot 1'}
]

// coneccion al socket
io.on('connect',(socket)=>{
    console.log('socket: ' + socket.handshake.address)
    socket.emit('messages', messages)
})

// Server
server.listen(port, () => {
    console.log('Server listen on port:' + port)
})
 