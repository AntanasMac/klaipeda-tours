const EXPRESS = require('express');
const APP = EXPRESS();
const PORT = 3000;

APP.get('/', (req, res) => {
    res
    .status(200)
    .json({message: 'Hello from the server side', app: 'Klaipeda tours'});
});

APP.post('/', (req, res) => {
    res
    .send('you can post to this endpoint');
});

APP.listen(PORT, () => {
    console.log('app running on port ${PORT}');
});