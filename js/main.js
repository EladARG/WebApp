
//function to dynamically load script
function doLoad(urlAndName){
    var hd, scr;
    hd = document.getElementsByTagName('head');
    hd = hd[0];
    scr = document.createElement('script');
    scr.src = urlAndName;
    hd.appendChild(scr);
}

(function(){
    var first, div, content;
    first = document.body.firstChild;
    content = '<script>js/"helper.js"</script>';
    div = document.createElement('div');
    document.body.insertBefore(div, first);
    div.innerHTML = content;
})();

doLoad('main.js');

