var execution_host;

function init() {
    var visualizer;
    visualizer = new Visualizer('#visualizer', '', '', {executable: true});
    // visualizer.focusCodeEditor();
}


require(["gitbook"], function (gitbook) {
    gitbook.events.bind("start", function (e, config) {
        execution_host = config.visualizer.execution_host;
        init();
    });
    gitbook.events.bind("page.change", function() {
        init();
    });
});

function getExecutionResult(user_script, input_data, explain) {
    var host = execution_host;
    var url = host + '/execute';
    console.log(url);
    var res = $.get(url, {
        user_script: user_script,
        input_data : input_data,
        explain    : explain
    });
    console.log(res);
    return res;
}