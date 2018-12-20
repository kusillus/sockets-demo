const socket =  io.connect('http://192.168.2.33:6677',{'forceNew': true })

socket.on('messages', (data) => {
    console.log(data)
    data.map(msg => {
        console.log(msg)
    })
})