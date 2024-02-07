function toggleSubMenu() {
    var subMenu = document.querySelector('.sub');
    var listItem = document.querySelector('.menu-left li');

    if (subMenu.style.display === 'flex') {
        subMenu.style.display = 'none';
        listItem.classList.remove('sub');
    } else {
        subMenu.style.display = 'flex';
        subMenu.style.flexDirection = 'row';
        subMenu.classList.add('active');
    }
}

function handlesubmit() {
    var subMenu = document.querySelector('.app');
    var listItem = document.querySelector('.menu-left li');

    if (subMenu.style.display === 'flex') {
        subMenu.style.display = 'none';
        subMenu.classList.remove('active');
    } else {
        subMenu.style.display = 'flex';
        subMenu.style.flexDirection = 'row';
        subMenu.classList.add('active');
    }
}

function yes() {
    var subMenu = document.querySelector('.app1');
    var listItem = document.querySelector('.menu-left li');

    if (subMenu.style.display === 'flex') {
        subMenu.style.display = 'none';
        subMenu.classList.remove('active');
    } else {
        subMenu.style.display = 'flex';
        subMenu.style.flexDirection = 'row';
        subMenu.classList.add('active');
    }
}

function no() {
    var subMenu = document.querySelector('.app2');
    var listItem = document.querySelector('.menu-left li');

    if (subMenu.style.display === 'flex') {
        subMenu.style.display = 'none';
        subMenu.classList.remove('active');
    } else {
        subMenu.style.display = 'flex';
        subMenu.style.flexDirection = 'row';
        subMenu.classList.add('active');
    }
}


const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const mobileNav = document.querySelector('.mobileNav');

hamburger.addEventListener('click' , ()=>{
    bar1.classList.toggle("animateBar1");
    bar2.classList.toggle("animateBar2");
    bar3.classList.toggle("animateBar3");
    mobileNav.classList.toggle("openDrawer");
});