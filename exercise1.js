// exercise1.js
const accordion = document.querySelector('.accordion');
if (!accordion) {
    console.error('Required DOM elements not found'); 
} else {
    accordion.addEventListener('click', function(event) {
        // 1. Find the closest trigger from event.target
        const closestTrigger = event.target.closest('.accordion-trigger')
        // If null, the click was not on a trigger - return early.
        if (!closestTrigger) return;
        // 2. From the trigger, find the closest .accordion-item
        const closestItem = closestTrigger.closest('.accordion-item') 

        // 3. Close ALL accordion items (querySelectorAll + forEach + remove class)
        const accordionItems = document.querySelectorAll('.accordion-item')
        accordionItems.forEach(item => {
            item.classList.remove('open')
        });
        // 4. Toggle .open on the clicked item only
        closestItem.classList.toggle('open') 
    });
}