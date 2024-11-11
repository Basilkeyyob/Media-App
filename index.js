const jsonServer = require("json-server");

const mediaServer = jsonServer.create();

const middleware = jsonServer.defaults();

const router = jsonServer.router("db.json");

mediaServer.use(middleware);
mediaServer.use(router);

const PORT = 300


mediaServer.listen(PORT,()=>{
    console.log("media server started"+PORT);
    
})
