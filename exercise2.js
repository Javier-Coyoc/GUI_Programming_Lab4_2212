// exercise2.js
const tagInput = document.querySelector('#tag-input');
const tagContainer = document.querySelector('#tag-container');

if (!tagInput || !tagContainer) {
    console.error('Required DOM elements not found'); 
} else {
    // -- Add a tag when Enter is pressed --
    tagInput.addEventListener('keydown', function(event) {
        if (event.key !== 'Enter') return;
        const value = tagInput.value.trim();
        if (!value) return;
        // 1. Create a div with class "tag"
        const tag = document.createElement('div')
        tag.className = 'tag'


        // 2. Set its innerHTML to include the label text
        // and a <span class="tag-remove">&times;</span>
        tag.innerHTML = `${value} <span class="tag-remove">&times;</span>`;
        // 3. Append the tag to tagContainer
        tagContainer.append(tag) 
        // 4. Clear the input
        tagInput.value = '';
    });
    // -- Remove a tag via delegation --
    tagContainer.addEventListener('click', function(event) {
        // 1. Check event.target.matches('.tag-remove')
        //when an element inside of tagContainer has been clicked the specific element 
        //(event.target) is compared using matches if it has the css selector returns true
        const matchResult = event.target.matches('.tag-remove')
        // 2. If true, call closest('.tag').remove() on event.target
        if (matchResult) {
            event.target.closest('.tag').remove();
        } 
});
}
