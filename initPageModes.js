
addToLoadPath ("pageModes");

function command (command) {
    return function (I) {
        var sandbox = Components.utils.Sandbox (I.buffer.top_frame);
        sandbox.window = I.buffer.top_frame.wrappedJSObject;
        sandbox.document = I.buffer.document.wrappedJSObject;
        Components.utils.evalInSandbox (command, sandbox);
    };
}

require ("initVK");

provide ("initPageModes");
