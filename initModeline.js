
add_hook("mode_line_hook", mode_line_adder(buffer_count_widget), true);
add_hook("mode_line_hook", mode_line_adder(loading_count_widget), true);
add_hook("mode_line_hook", mode_line_adder(downloads_status_widget));

provide ("initModeline");
