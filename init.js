
function addToLoadPath (path = "") {
    load_paths.unshift("file://" + get_home_directory().path + "/.conkeror.d/" + path);
}

addToLoadPath ();

require ("initMinibuffer");
require ("initEmacs");
