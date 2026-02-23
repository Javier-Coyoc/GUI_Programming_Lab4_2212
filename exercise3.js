// exercise3.js
const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');

if (!filterBar || cards.length === 0 || filterBtns.length === 0) {
    console.error('Required DOM elements not found'); 
} else {
    filterBar.addEventListener('click', function(event) {
        // 1. Guard: if event.target does not match '.filter-btn', return
        const selectedFilter = event.target.matches('.filter-btn')
        if (!selectedFilter) {
            return;
        } else {
        // 2. Update active class on all buttons
        filterBtns.forEach(btn => {
            btn.classList.remove('active')
        });
        event.target.classList.add('active')
        // 3. Read the filter value from event.target.dataset.filter
        const filterValue = event.target.dataset.filter

        // 4. Loop through cards
        // - If filter === 'all': remove .hidden from every card
        // - Otherwise: compare card.dataset.category to filter
        // add .hidden if no match, remove .hidden if match
        cards.forEach(card => {
            if (card.filterValue === 'all') {
                card.classList.remove('hidden')
            } else if (card.dataset.category === filterValue) {
                card.classList.remove('hidden')
            } else {
                card.classList.add('hidden')
            }
        })
      
 

        }

    });
}
