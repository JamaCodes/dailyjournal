import { Posts } from "./post.js";

export const PostList = (allPosts) => {
	let postHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const postObject of allPosts) {
			//what is a postObject?
			postHTML += Posts(postObject)
		}
		return postHTML;
	
}

export const MoodList = (allMoods) => {
    const moodFinder = document.querySelector(".journal__moods")
    let postHTML = `<select name="journal_mood" class="newPost__input"><option value="0">Choose Your Mood</option>`;
    //Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
    for (const moodObject of allMoods) {
        //what is a postObject?
        postHTML += `<option value="${moodObject.id}">${moodObject.mood}</option>`
    }
    postHTML += `</select>`
    moodFinder.innerHTML = postHTML;

}