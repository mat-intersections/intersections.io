document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementsByTagName("header")[0];
    var main = document.getElementsByTagName("main")[0];

    // Updates the margin-top of main to match the current size of <header>
    // this isn't possible in pure CSS
    updateTopHeight = function() {
        var height = header.offsetHeight;
        main.style.marginTop = height + 'px';
    }
    window.onresize = updateTopHeight;
    updateTopHeight();
});
