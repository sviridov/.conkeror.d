
addToLoadPath ("pageModes");

function callCommand (buffer, command) {
    var sandbox = Components.utils.Sandbox (buffer.top_frame);
    sandbox.window = buffer.top_frame.wrappedJSObject;
    sandbox.document = buffer.document.wrappedJSObject;
    Components.utils.evalInSandbox ("window." + command + "()", sandbox);
}

function command (command) {
    return function (I) {
        callCommand (I.buffer, command);
    };
}

require ("initVK");

provide ("initPageModes");
