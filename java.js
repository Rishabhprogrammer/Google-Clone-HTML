document.getElementById('frmsearch').onsubmit = function() {
    window.location = 'https://cse.google.com/cse?cx=9f8f72b276afcd2c9#gsc.tab=0&gsc.q='+  document.getElementById('textSearch').value;
    return false;		
}