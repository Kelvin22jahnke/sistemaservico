import mongoose from "mongoose";

(async ()=>{
    if(process.env.DB_URL)
    {
        await mongoose
        .connect(process.env.DB_URL)
        .then(res=>{
            console.log("Mongo atlas conectado")
        })
        .catch ((err)=>{
            console.log("Erro in db collection: " + err);
        });
    }else
    {
        console.log("arquivo env não configurado");
    }
})();

const db = mongoose.connection;
export default db;