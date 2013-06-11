
function defineSwitchBufferKey (key, bufferNumber) {
    define_key (default_global_keymap, key,
                function (I) {
                    switch_to_buffer (I.window, I.window.buffers.get_buffer (bufferNumber));
                });
}

for (let i = 0; i < 10; ++i) {
    defineSwitchBufferKey (String ((i + 1) % 10), i);
}



function switchToRecentBuffer (I) {
    switch_to_buffer (
        I.window,
        (yield I.minibuffer.read_buffer (
            $prompt = "Switch to buffer:",
            $buffers = I.window.buffers.buffer_history,
            $default = (I.window.buffers.count > 1 ?
                        I.window.buffers.buffer_history[1] :
                        I.buffer))));
}

interactive ("switch-to-recent-buffer",
             "Prompt for a buffer and switch to it, displaying the list in last-visited order.",
             switchToRecentBuffer);

define_key (default_global_keymap, "C-x b", "switch-to-recent-buffer");



var killBufferOriginal = killBufferOriginal || kill_buffer;

var killedBufferURLs = [];

kill_buffer = function (buffer, force) {
    if (buffer.display_uri_string) {
        killedBufferURLs.push (buffer.display_uri_string);
    }
    killBufferOriginal (buffer,force);
};

function restoreKilledBufferURL (I) {
    if (killedBufferURLs.length !== 0) {
        var url = yield I.minibuffer.read (
            $prompt = "Restore killed url:",
            $completer = all_word_completer ($completions = killedBufferURLs),
            $default_completion = killedBufferURLs [killedBufferURLs.length - 1],
            $auto_complete = "url",
            $auto_complete_initial = true,
            $auto_complete_delay = 0,
            $match_required);
        load_url_in_new_buffer (url);
    } else {
        I.window.minibuffer.message ("No killed buffer urls");
    }
}

interactive("restore-killed-buffer-url",
            "Loads url from a previously killed buffer",
            restoreKilledBufferURL);

define_key (default_global_keymap, "C-x C-b", "restore-killed-buffer-url");



provide ("initBuffers");
