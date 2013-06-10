
function defineSwitchBufferKey (key, bufferNumber) {
    define_key (default_global_keymap, key,
                function (I) {
                    switch_to_buffer (I.window, I.window.buffers.get_buffer (bufferNumber));
                });
}

for (let i = 0; i < 10; ++i) {
    defineSwitchBufferKey (String ((i + 1) % 10), i);
}

provide ("initBuffers");
