let mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "DBUser",
  password: "AdminPassword",
  database: "m4pfdb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
});

con.query("select * from users", (err, results, fields) => {
  if (err) {
    console.error("Error with query: ", err);
    return;
  }
  console.log("Query Results: ", results);
});

con.end();
