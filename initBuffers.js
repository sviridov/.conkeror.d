
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



provide ("initBuffers");
