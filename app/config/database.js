// const {createPool}=require("mysql2");

// const pool= createPool({

//     host:"localhost",
//     user:"rahulhel",
//     password:"rahul0911",
//     database:"classwork",
//     connectionLimit:10
// });


// pool.query(``,(err,result,field)=>{
//     if(err){
//         return console.log(err)
//     }
//     return console.log("mysql connected")
    
// });
// module.exports=createPool;


const mysql2=require("mysql2")


const connection=mysql2.createConnection({

host:process.env.HOST,
user:process.env.USER,
password:process.env.PASSWORD,
database:process.env.DATABASE,

});

connection.connect((err)=>{

    if(err){
        throw err;
    }else
    {
        console.log("mysql connected")
    }
});
module.exports=connection;