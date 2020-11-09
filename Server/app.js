const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/videos', (req, res) => {
    fs.readFile('Metadata/Videos.json', (err, data) => {
        if (err) throw err;
        let jsn = JSON.parse(data);
        res.json(jsn.videos);
    })
});

app.get('/search', (req, res) => {
    console.log(req.query.filter);
    
    const searchText = req.query.filter;
    
    fs.readFile('Metadata/Videos.json', (err, data) => {
        if (err) throw err;
        let jsn = JSON.parse(data);
        const result = jsn.videos.filter(video => video.id == searchText);     
        res.json(result);
    })
});

app.get('/video/:id', (req, res) => {
    const path = `Media/${req.params.id}.mp4`;
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize - 1;
        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(path, { start, end });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
    }
});

app.get('/thumbnail/:id', (req, res) => {
    const path = `Media/${req.params.id}.png`;
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const head = {
        'Content-Length': fileSize,
        'Content-Type': 'image/png',
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
});

app.listen(4000, () => {
    console.log('Listening on port 4000!')
});