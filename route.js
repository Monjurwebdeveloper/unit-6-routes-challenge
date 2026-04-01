const express = require('express');
const app = express();
const PORT = 3000;

// 1. Your Database (Internal Array)
let db = [
    {id: 1, item: "get milk", checked: false},
    {id: 2, item: "learn js", checked: false},
    {id: 3, item: "buy bread", checked: false},
    {id: 4, item: "get rich", checked: false}
];

// 2. The Challenge Route
app.get('/completed/:ischecked', (req, res) => {
    const { ischecked } = req.params;
    
    // Convert the URL string "true" into a real boolean true
    const isTrue = (ischecked === "true"); 

    // Filter the local 'db' array
    const filteredItems = db.filter(item => item.checked === isTrue);

    // Send response
    if (filteredItems.length > 0) {
        res.json(filteredItems);
    } else {
        res.send('no items found');
    }
});

// 3. Start the Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
