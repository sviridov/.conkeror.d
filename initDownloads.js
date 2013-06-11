
download_buffer_automatic_open_target = OPEN_NEW_BUFFER;

var savePath = get_home_directory ().path  + "/Загрузки";

function updateSavePath (info) {
    savePath = info.target_file.parent.path;
}

add_hook ("download_added_hook", updateSavePath);

suggest_save_path_from_file_name = function (filename, buffer) {
    return savePath + "/" + filename;
};

provide ("initDownloads");
