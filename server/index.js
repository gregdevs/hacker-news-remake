const express = require('express');
const cors = require('cors');
const axios = require('axios');
const CommentTree = require('./CommentTree.js');
const app = express();
const port = 3001;

app.use(cors());

/**
 *  TBH, I probably could have made a client-side request and handle the transformation client side,
 * my thinking was, it was cheap to spin up a server and realistically you'd probably want to
 * handle that on the backend anyway and serve up the cleanest version of data so the front end can have minimal work
 */
app.get('/yahoo', async (req, res) => {
  const commentData = await axios({
    method: 'get',
    url: 'https://gist.githubusercontent.com/jaredpetker/3541eb360a9836ad09eb94cffd946645/raw/05772483c421c4feba669425c9557a2c0a0f0416/comments.json',
  });
  const { comments } = commentData.data;

  const groupedData = new CommentTree(comments).buildCommentTree();

  res.json(groupedData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
