(function(){

    var doc = document.documentElement;
    var w = window;

    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;

    var header = document.getElementById('header');
    var toggled;
    var threshold = 1;

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

var clickedHamburger = false;

function displayHamburgerMenu() {
    if (!clickedHamburger) {
        document.getElementById('hamburger').style.filter = "hue-rotate(125deg) saturate(200%)";
    }
    document.getElementById('hamburger-menu').style.display = "flex";
};

function hideHamburgerMenu() {
    if (!clickedHamburger) {
        document.getElementById('hamburger-menu').style.display = "none";
        document.getElementById('hamburger').style.filter = "None";
    }
}

// let containingElement = document.querySelector('#container');

document.body.addEventListener('click', function( event ){

	if(event.target.id == "hamburger" || event.target.id == "hamburger-menu"){
        clickedHamburger = true;
        document.getElementById('hamburger').style.filter = "hue-rotate(125deg) saturate(400%)";
		displayHamburgerMenu();
	} else {
        clickedHamburger = false;
		hideHamburgerMenu();
	}
});

function onsubmitfunc() {
    window.addEventListener('submit', function(event){
        
    if (confirm('Confirm inputting of data?')) { /* Goes to submitted page if confirmed */
        event.preventDefault(); /* Makes sure it doesnt do the default behavior  */
    
        nameToDisplay = document.getElementById("full-name").value;

        localStorage.setItem('full-name', nameToDisplay);

        window.location.href = "application-onsubmit.html";
    } else {
        event.preventDefault(); /* Does nothing if cancelled */
    }

    })
}

function displaySubmittedValues() { /* Displays name on application submitted page */
    document.getElementById('applicantName').innerHTML = localStorage.getItem('full-name');
}
