import express from 'express';
import secure from './middleware/secure.js';

const app = express();
const port = 3001;
  
// apply middleware function "secure" globally
app.use(secure);

// home path
app.get('/', (req, res) => res.send('Hello World!'));

// start express server
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
