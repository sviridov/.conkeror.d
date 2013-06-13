
require ("content-buffer.js");

define_keymap ("vk_keymap");

interactive ("vk-next-track", "Calls VK command", command ("window.audioPlayer.nextTrack ()"));
interactive ("vk-previous-track", "Calls VK command", command ("window.audioPlayer.prevTrack ()"));
interactive ("vk-play/pause-track", "Calls VK command", command ("window.document.getElementById ('ac_play').click ()"));

define_key (vk_keymap, "C-c n", "vk-next-track");
define_key (vk_keymap, "C-c p", "vk-previous-track");
define_key (vk_keymap, "C-c space", "vk-play/pause-track");

define_keymaps_page_mode ("vk-mode",
                          build_url_regexp ($domain = "vk", $allow_www = true),
                          { normal: vk_keymap },
                          $display_name = "vk");

page_mode_activate (vk_mode);

provide ("initVK");
