const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const authname = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData,2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1522836924445-4478bdeb860c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxpZmVzdHlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />';
    title.innerHTML = ' Lorem ipsum dolor sius!';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipis sapiente i voluptatum veritatis molestiae quae? Fugit, sint!';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    authname.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 08,2020';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));

}