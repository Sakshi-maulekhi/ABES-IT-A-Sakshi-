const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8000;

// ensure upload directory exists
const uploadDir = path.join(__dirname, 'public', 'uploads');
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

app.get('/', (req, res) => {
    const files = fs.readdirSync(uploadDir).filter(f => !f.startsWith('.'));
    const latest = files.length ? files[files.length - 1] : null;
    res.send(`
        <html>
            <head><meta charset="utf-8"><title>Upload Logo</title></head>
            <body>
                <h1>Upload Logo (multer demo)</h1>
                <form method="POST" action="/upload" enctype="multipart/form-data">
                    <input type="file" name="logo" accept="image/*" required />
                    <button type="submit">Upload</button>
                </form>
                <hr />
                ${latest ? `<h2>Current Logo</h2><img src="/uploads/${encodeURIComponent(latest)}" style="max-width:300px; height:auto; border:1px solid #ccc;" />` : '<p>No logo uploaded yet.</p>'}
            </body>
        </html>
    `);
});

app.post('/upload', upload.single('logo'), (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded');
    res.redirect('/');
});

app.get('/about', (req, res) => res.send('<h1>ABES Enginnering College</h1>'));
app.get('/contact', (req, res) => res.send('<h1>Ghaziabad</h1>'));
app.get('/class', (req, res) => res.send('<h1>IT section-A</h1>'));

app.use((req, res) => res.status(404).send('<h1>404 not found</h1>'));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));