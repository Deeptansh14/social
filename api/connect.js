import mysql from "mysql"

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Deep@mysql14",
    database:"social"
})

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL database");
});

export { db };