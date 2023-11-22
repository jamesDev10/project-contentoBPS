const fetch = require('node-fetch');
const express = require('express');
const app = express();
const cors = require('cors');

const port = 6546
app.use(cors());
app.get('/publicaciones/:id', async(req,res)=>{
const postId=req.params.id
console.log('POSTID',postId);

try{
const  response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
const post= await response.json()
console.log('POOOOOST',post)
res.json(post)
}catch(e){
res.status(500).json({error:'internal error'})
}

})


app.listen(port, ()=> {
  console.log(`http://localhost:${port}`);
});
