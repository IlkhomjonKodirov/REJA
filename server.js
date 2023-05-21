const http = require('http');
const mongodb = require('mongodb');

let db;
const connectionString = "mongodb+srv://Ilkhom:wNwaPSKQ3QxRRRA1@cluster0.t4c9kaq.mongodb.net/Reja";
// const connectionString = "mongodb+srv://Ilkhom:wNwaPSKQ3QxRRRA1@cluster0.t4c9kaq.mongodb.net/Reja?retryWrites=true&w=majority";

 
mongodb.connect(connectionString, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}, (err, client) => {
  if(err) console.log("ERROR on connection MongoDB");
  else {
      console.log("MongoDB connection succed");
      // console.log(client);
      module.exports = client; // server js faylidan ovolamiz. client ichida db() degan object bor.shuning uchun kerak bizga
      const app = require("./app");
      const server = http.createServer(app);
      let PORD = process.env.PORD || 3003;
      server.listen(PORD, function() {
        console.log(`The server is running succesfully on port: ${PORD}, http://localhost:${PORD}`);
    });
  };
});


