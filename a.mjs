import http from 'http';
import * as fs from 'fs/promises';
import { readFile } from 'fs';

const page = await fs.readFile('./index.html').then(c => c.toString());

const listener = (req,res) => res.end(page);

http.createServer(listener).listen(3030);
