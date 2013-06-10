
function readURLGoogleTranslateHandler (input) {
    let (args = /^(\S+\|\S+)\s+(.*)/.exec(input)) {
        return (args) ? "http://translate.google.com/#" + args[1] + "|" + args[2] : null;
    };
}

read_url_handler_list = [readURLGoogleTranslateHandler];

provide ("initURLHandlers");
