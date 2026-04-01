const express = require('express'); // 1. Import the Express library
const app = express();              // 2. Create the "app" instance
const db = require('./mockData');   // (Your existing import)

const PORT = 3000;                  // 3. Pick a port number




// This is the starting point for your challenge
app.get('/completed/:ischecked', (req, res) => {
    // 1. Capture the parameter (req.params.ischecked)
    // 2. Filter your 'db' based on that value
    // 3. Send the items OR the 'no items found' message
    const { ischecked } = req.params;
    const isTrue = (ischecked === "true"); // This turns the string "true" into the boolean true

    const filteredItems = db.filter(item => item.checked === isTrue);

        if (filteredItems.length > 0) {
        res.send(filteredItems);
    } else {
        res.send('no items found');
    }


});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
