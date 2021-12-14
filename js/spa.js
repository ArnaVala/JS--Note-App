// Single page spalication
const spa = {
    pages: [],
    // Custom "show" event
    showPage: new Event('showPage'),

    init: function() {
        spa.pages = document.querySelectorAll('.page'); // Get all pages
        spa.pages.forEach((page) => {
            page.addEventListener('showPage', spa.pageShown); // show Page eventListener for pages
        });
        // Get all navigation links
        document.querySelectorAll('.nav__link').forEach((link) => {
            link.addEventListener('click', spa.nav); // click eventListener on links
        });
        if (location.hash === "#home") {
            history.replaceState({}, '', '#home'); // if reloading page it stays on the same page
            document.querySelector('.nav__link.active').classList.remove('active'); // remove active class from link
            document.querySelector('.page.active').classList.remove('active'); // remove active class from page
            document.querySelector('.nav__link[data-target="home"]').classList.add('active'); // Add active class to data-target="home" link
            document.getElementById('home').classList.add('active'); // Add active class to page #home
        } else if (location.hash === "#notes") {
            history.replaceState({}, '', '#notes');
            document.querySelector('.nav__link.active').classList.remove('active'); // remove active class from link
            document.querySelector('.active').classList.remove('active'); // remove active class from page
            document.querySelector('.nav__link[data-target="notes"]').classList.add('active'); // Add active class to data-target='notes link
            document.getElementById('notes').classList.add('active'); // Add active class to page #notes
        } 
        window.addEventListener('popstate', spa.popIn);
    },

    nav: function(event) {
        event.preventDefault(); // Prevent default click function

        let thisPage = event.target.getAttribute('data-target'); // the shown page with same id == data-link
       
        document.querySelector('.page.active').classList.remove('active'); // Remove active class of nav__link
        document.getElementById(thisPage).classList.add('active'); // Add active class to targeted element
        document.querySelector('.nav__link.active').classList.remove('active'); // remove active class of nav element
        document.querySelector(`.nav__link[data-target="${thisPage}"]`).classList.add('active'); // add active class to the data-link

        history.pushState({}, thisPage, `#${thisPage}`); // 
        document.getElementById(thisPage).dispatchEvent(spa.showPage); // Get the targeted page
    },

    pageShown: function(event) { 
        console.log('This page is:', event.target.id); 
    },

    popIn: function() {
        let hash = location.hash.replace('#', ''); // variable hash is the location hash minus #
        document.querySelector('.active').classList.remove('active'); // remove active class of page
        document.getElementById(hash).classList.add('active'); // Finds the id of the page that corresponds to the location hash and adds the active class to the page
        document.getElementById(hash).dispatchEvent(spa.show); //  Finds the id of the page that corresponds to the location hash and shows the corresponding page
    }
}

document.addEventListener('DOMContentLoaded', spa.init);
