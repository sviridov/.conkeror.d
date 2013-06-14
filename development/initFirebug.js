
function firebug (I) {
    var script = I.buffer.document.createElement ("script");
    script.setAttribute ("type", "text/javascript");
    script.setAttribute ("src", "file://" + get_home_directory () + "./.conkeror.d/development/firebug-lite.js");
    script.setAttribute ("onload", "firebug.init();");
    I.buffer.document.body.appendChild (script);
}

interactive("firebug", "Open Firebug-Lite", firebug);

provide ("initFirebug");
