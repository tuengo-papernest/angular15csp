const server = require('express')
const app = server()
const port = 8000

app.use('/',server.static('dist/angular15csp'))

app.listen(port, () => {
    console.log(`Server running at ${port}`)
})