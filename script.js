document.addEventListener('DOMContentLoaded', ()=> {
    const postList = document.getElementById('postList');
    const postDetail = document.getElementById('postDetails');

    const listPost=()=> {
        try {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then(posts=>{
                posts.forEach(post => {
                    const li = document.createElement('li');
                    li.innerHTML =  `<li class='listas'>${post.title}</li>`
                    li.addEventListener('click', () => postDetails(post.id));
                    postList.appendChild(li);
                });
            })
        } catch (error) {
            console.error('Error fetch ', error);
        }
    }

   const postDetails=async(postId)=> {
        try {
            const response = await fetch(`http://localhost:6546/publicaciones/${postId}`);
            const post = await response.json();
console.log(' post', post)
            postDetail.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        } catch (error) {
            console.error( error);
        }
    }

    listPost();
});
