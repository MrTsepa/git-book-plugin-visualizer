function init() {
    var visualizer;
    visualizer = new Visualizer('#visualizer', '', '', {'show_stdin_initially': true});
    // visualizer.focusCodeEditor();
}

document.addEventListener("DOMContentLoaded", init);

require(["gitbook"], function (gitbook) {
    gitbook.events.bind("page.change", function() {
        init();
    });
});

function getExecutionResult(user_script, input_data, explain) {
    var host = book.config.get('execution_host', '');
    var url = host + '/execute';
    console.log(url);
    var res = $.get(url, {
        user_script: user_script,
        input_data : input_data,
        explain    : explain
    });
    console.log(res);
}