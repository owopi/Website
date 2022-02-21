var express = require("express");
var app = express();
app.listen(8080, () => {
    console.log("Server running on port 8080!");
   });

const distros = [
    {
        "id": "1",
        "name": "Ubuntu",
    },
    {
        "id": "2",
        "name": "Arch",
    },
    {
        "id": "3",
        "name": "Mx linux",
    },
    {
        "id": "4",
        "name": "Fedora",
    },
    {
        "id": "5",
        "name": "Oracle Linux",
    }
]
/* anything? */

app.get("/distros", (req, res) => {
    res.status(200).json(distros);
})