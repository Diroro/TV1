// There are other ways to change icon to button and vise versa, e.g. change innerHTML for wrapper. 
// I noted that if user moves the cursor too fast, the 'mouseout' event can not trigger and the 'follow'/'unfollow' buttom remained be presented. 
// I would research and choose more effective method if I had more time.

var table = document.getElementById('table');
table.addEventListener('mouseover', function (event) {
    var target = event.target.parentNode;
    switch (target.className) {
        case 'plus-wrapper':
            target.style.display = 'none';
            target.parentNode.parentNode.querySelector('.follow').style.display = 'inline-block';
            break;
        case 'v-wrapper': {
            target.style.display = 'none';
            target.parentNode.parentNode.querySelector('.unfollow').style.display = 'inline-block';


        }
    }
});

table.addEventListener('mouseout', function (event) {
    var target = event.target;
    switch (target.className) {
        case 'follow':
            if (target.style.display != 'none') {
                target.style.display = 'none';
                target.parentNode.querySelector('.plus-wrapper').style.display = 'inline';
            }
            break;
        case 'unfollow': {
            if (target.style.display != 'none') {
                target.style.display = 'none';
                target.parentNode.querySelector('.v-wrapper').style.display = 'inline';
            }
        }
    }
});

table.addEventListener('click', function (event) {
    var target = event.target;

    switch (target.className) {
        case 'follow':
            var info = target.parentNode.parentNode.parentNode;

            // next lines allowed us to increase the number of subscribes
            // in the whole project these numbers should reflect the values from the data-model, but here I chose to increase the values set by default in html

            var textValue = info.querySelector('.users-amount');
            var value = +textValue.innerText + 1;
            info.parentNode.parentNode.parentNode.querySelector('.followers').innerText = value; // A bit straight, but worked
            textValue.innerText = value;

            // hide the button 'follow' and show the button 'unfollow'
            
            target.style.display = 'none';
            target.parentNode.parentNode.querySelector('.unfollow').style.display = 'inline-block';

            break;
        case 'unfollow':
            var info = target.parentNode.parentNode.parentNode;
            var textValue = info.querySelector('.users-amount');
            var value = +textValue.innerText - 1;
            info.parentNode.parentNode.parentNode.querySelector('.followers').innerText = value;
            textValue.innerText = value;
            target.style.display = 'none';
            target.parentNode.parentNode.querySelector('.follow').style.display = 'inline-block';
            break;
        default:
            break;
    }

});
