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
