export const journalEntry = () => {
  return `
	<div class="sloth"><img src="./images/Sloths-in-the-Amazon-Rainforest-1120x732.jpg"></div>
	<div class="newPost">
	<div>
	<h2>Daily Journal</h2>
		<input value=""
			   name="postTitle"
			   class="newPost__input"
			   type="text"
			   placeholder="Title" />
	</div>
	<div><textarea name="postDescription"
		class="newPost__input newPost__description"
		placeholder="How you feel?"></textarea></div>

		<div class="journal__moods"></div>	
<div>
<button id="newPost__submit">Save</button>
<button id="newPost__cancel">Cancel</button>

`
}

