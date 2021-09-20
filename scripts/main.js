import { journalEntry } from "../journal.js";
import { getPosts, createPost, getMoods, usePostCollection, getSinglePost,  } from "./datamanager.js";
import { PostList, MoodList } from "./PostList.js";
import { PostEdit } from "./postEdit.js";
const showPostList = () => {
    //Get a reference to the location on the DOM where the list will display
    const postElement = document.querySelector(".postList");
    getPosts().then((allPosts) => {
      postElement.innerHTML = PostList(allPosts.reverse());
    });
  };
  const showMoodList = () => {
    getMoods().then((allMoods) => MoodList(allMoods))
  };




  const showpostEntry = () => {
    //Get a reference to the location on the DOM where the nav will display
    const bodyElement = document.querySelector(".form_container");
    bodyElement.innerHTML = journalEntry();
  };


  const startJournal = () => {
    showPostList();
    showMoodList();
    showpostEntry();
  };
  
  startJournal();



 






  const applicationElement = document.querySelector(".journalPage");

  applicationElement.addEventListener("click", event => {
    if (event.target.id === "newPost__cancel") {
        //clear the input fields
    }
  }); 

  applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
    //collect the input values into an object to post to the DB
      const title = document.querySelector("input[name='postTitle']").value
      const description = document.querySelector("textarea[name='postDescription']").value
      const journal_mood = document.querySelector("select[name='journal_mood']").value
      //we have not created a user yet - for now, we will hard code `1`.
      //we can add the current time as well
      const postObject = {
          title: title,
          description: description,
          userId: 1,
          moodId: parseInt(journal_mood),
          timestamp: Date.now()
      }
  
    // be sure to import from the DataManager
        createPost(postObject)
        .then(dbResponse => {
          showPostList()
        });      
      }
    
  });

/////edit
applicationElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id.startsWith("edit")) {
    const postId = event.target.id.split("__")[1];
    getSinglePost(postId)
      .then(response => {
        showEdit(response);
      })
  }
})
const showEdit = (postObj) => {
  const entryElement = document.querySelector(".entryForm");
  entryElement.innerHTML = PostEdit(postObj);
}
