document.getElementById('undercover').addEventListener('click', function() {
    var undercover = document.getElementById('undercover');
    var myheart = document.querySelector('.myheart');
    undercover.style.display = 'none';
    myheart.style.display = 'block';
});

document.getElementById('her').addEventListener('click', function() {
    var undercover = document.getElementById('undercover');
    var myheart = document.querySelector('.myheart');
    undercover.style.display = 'block';
    myheart.style.display = 'none';
});