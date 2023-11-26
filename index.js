import app from "./src/app.js"
import mongoose from "mongoose"

const main = () => {

    app.listen(app.get("port"))
    console.log(`server on port ${app.get("port")}`)
    mongoose.connect('mongodb+srv://orellanaj2321:palodecoco2321@api.mlsey5j.mongodb.net/?retryWrites=true');
    const db =  mongoose.connection;
    db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
    db.once('open', () => {
        console.log('Conectado a MongoDB');
    });

}

main();