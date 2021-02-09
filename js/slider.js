let slides = document.querySelectorAll('.comments_list_item');
let slider = [];
let next = document.querySelector('#comments_next');
let prev = document.querySelector('#comments_prev');

for(let i = 0; i < slides.length; i++) {
    slider[i] = slides[i];
    slider[i].id = 'comment_'+i;
    slides[i].remove();
    let li = document.createElement('li');
    li.classList.add('comments_dot');
    li.id = 'comment_'+i;
    document.querySelector('.comments_dots_list').appendChild(li);
}

next.addEventListener('click', async() => {
    let new_slider = [];
    let li = document.querySelectorAll('.comments_list_item');
    for(let j = 0; j<li.length;j++) {
        li[j].classList.add('comments_list_item_anim_left');
    }
    for(let i = 0; i < slider.length; i++) {
        new_slider[i] = slider[i+1];
    }
    new_slider[slider.length-1] = slider[0];
    slider = new_slider;
    draw();
});

prev.addEventListener('click', async() => {
    let new_slider = [];
    let li = document.querySelectorAll('.comments_list_item');
    for(let i = 1; i < slider.length; i++) {
        new_slider[i] = slider[i-1];
    }
    for(let j = 0; j<li.length;j++) {
        li[j].classList.add('comments_list_item_anim_right');
    }
    new_slider[0] = slider[slider.length-1];
    slider = new_slider;
    draw();
});

function draw() {
    let dots = document.querySelectorAll('.comments_dot');
    for(let i = 0; i < slider.length; i++) {
        setTimeout(() => {
            let li = document.querySelectorAll('.comments_list_item');
            for(let j = 0; j<li.length;j++) {
                li[j].classList.remove('comments_list_item_anim_left');
                li[j].classList.remove('comments_list_item_anim_right');
            }
            slider[i].style.left = 420*i+'px';
            document.querySelector('.comments_list').appendChild(slider[i]);
        },500)
        if(dots[i].id == slider[0].id) {
            dots[i].classList.add('actived');
        } else {
            dots[i].classList.remove('actived');
        }
    }
}

draw();