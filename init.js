
function addToLoadPath (path = "") {
    load_paths.unshift("file://" + get_home_directory().path + "/.conkeror.d/" + path);
}

addToLoadPath ();

require ("initMinibuffer");
require ("initHinting");
require ("initDownloads");
require ("initModeline");
require ("initURLHandlers");
require ("initProtocolHandlers");
require ("initEmacs");
