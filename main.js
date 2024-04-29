function loadFooter() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './footer.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('footer').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
function loadJs() {
    loadNavbar();
    loadFooter();
    loadJsonData();

}
function loadNavbar() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './navbar.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('navbar').innerHTML = xhr.responseText;
            var currentPath = window.location.pathname;
            var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link')
            navbarLinks.forEach(function (link) {
                var linkPath = link.getAttribute('href');
                if (currentPath === linkPath) {
                    link.classList.add('gradient-text', 'active');
                }
            });
        }
    };
    xhr.send();
}


var jsonData = null;
function loadJsonData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './site-data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            jsonData = JSON.parse(xhr.responseText);
            replaceInnerHTMLWithJSONValues();
        }
    };
    xhr.send();

}
// loadJsonData();

function getValue(query) {
    const keys = query.split('.');
    let index = null;
    if (!isNaN(keys[keys.length - 1])) {
        index = parseInt(keys.pop());
    }
    let value = jsonData;
    for (const key of keys) {
        if (value.hasOwnProperty(key)) {
            value = value[key];
        } else {
            return null;
        }
    }
    if (index !== null && Array.isArray(value)) {
        if (index >= 0 && index < value.length) {
            return value[index];
        } else {
            return null;
        }
    } else {
        return value;
    }
}

function replaceInnerHTMLWithJSONValues() {

    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        const query = element.getAttribute('data-query');
        if (query) {
            const value = getValue(query);
            if (value !== null && value !== undefined) {
                element.innerHTML = value;
            }
        }
    });
}



function setHrefAttributesFromJSON() {
    const anchorElements = document.querySelectorAll('a');
    anchorElements.forEach(anchor => {
        const query = anchor.getAttribute('data-query').split('.').pop().concat('.url');
        if (query && anchor.getAttribute('data-attribute') === 'href') {
            const href = getLinkValue(query);
            if (href !== null && href !== undefined) {
                anchor.setAttribute('href', href);
            }
        }
    });
}
