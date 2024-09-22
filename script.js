(function(){

    var doc = document.documentElement;
    var w = window;

    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;

    var header = document.getElementById('header');
    var toggled;
    var threshold = 200;

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if(curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        }
        else {
            //scrolled up
            curDirection = 1;
        }

        if(curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if(toggled) {
            prevDirection = curDirection;
        }
    };

    var toggleHeader = function() { 
        toggled = true;
        if(curDirection === 2 && curScroll > threshold) {
            header.classList.add('hide');
        }
        else if (curDirection === 1) {
            header.classList.remove('hide');
        }
        else {
            toggled = false;
        }
        return toggled;
    };

    window.addEventListener('scroll', checkScroll);

    
})();

function onsubmitfunc() {
    window.addEventListener('submit', function(event){
        
    confirm('Confirm inputting of data?');
    event.preventDefault(); /* Makes sure it doesnt do the default behavior  */
    
    console.log(document.getElementById("full-name").value)
    nameToDisplay = document.getElementById("full-name").value;
    window.location.href = "application-onsubmit.html";

    })
}


var tableDisplay = new Map([
    ['bsce', false],
    ['bsme', false],
    ['bsa', false],
    ['bsit', false],
    ['bsen', false],
    ['bssm', false],
    ['bafa', false],
    ['baed', false]
]);

function displayTableCE(idName) {
    if (tableDisplay.get(idName)) {
        document.getElementById(idName).style.display = 'none';
        document.getElementById(idName.concat('Arrow')).innerHTML = '&#62;';
        tableDisplay.set(idName, false);
    } else {
        document.getElementById(idName).style.display = 'flex';
        document.getElementById(idName.concat('Arrow')).innerHTML = 'v';
        tableDisplay.set(idName, true);
    }
}