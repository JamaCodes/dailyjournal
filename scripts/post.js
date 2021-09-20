export const Posts = (PostsObject) => {

    const dateObj = new Date(PostsObject.timestamp);
    const formattedDate = dateObj.toDateString();
    console.log(PostsObject.mood)

     return `
       <section class="post">
         <header>
             <h2 class="post__title">${PostsObject.title}</h2>
         </header>
         <div><p>${formattedDate}</p></div>
         <div><p>${PostsObject.description}<p>
         <h3 class="post__mood">${PostsObject.mood.mood}</p></div>
         <div><button id="edit__${PostsObject.id}">Edit</button></div>
       </section>
     `
   }