const express = require('express');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 5000;
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/upload', upload.single('file'), (req, res) => {
    res.send({ size: req.file.size });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});