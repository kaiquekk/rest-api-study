const app = require('../src/app');
const port = process.env.PORT || 4545;

/* eslint-disable no-console */
app.listen(4545, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
