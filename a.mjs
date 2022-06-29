import http from 'http';
import * as fs from 'fs/promises';
import { readFile } from 'fs';

const page =(path)=>fs.readFile(`.${path}`).then(c => c.toString());

const listener = async(req,res) => res.end(await page(req.url==="/draw.html"?"/draw.html":"/index.html"));

http.createServer(listener).listen(3030);
