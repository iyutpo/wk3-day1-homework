function show(shown, which) {
    var infobox;
    if (which === 'wintery road') {
        infobox = document.getElementById('infobox_wintery');
    } else {
        infobox = document.getElementById('infobox_snow');
    }
    if (shown == false) {
        infobox.style.visibility = 'hidden';
    } else {
        infobox.style.visibility = 'visible';
    }
}