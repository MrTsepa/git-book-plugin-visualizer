var visualizers = [];
var visualizerConfig;

function getNumberOfVisualizers() {
    var i = 0;
    while(true) {
        i++;
        var visualizerId = "#visualizer"+i;
        if ($(visualizerId).length == 0) {
            i--;
            break;
        }
    }
    return i;
}

function initVisualizer(i, initCode) {
    var visualizerId = 'visualizer'+i;
    return new Visualizer('#'+visualizerId, initCode, '', {executable: true});
}

// fetch trace of execution from remote server
function getExecutionResult(user_script, input_data, explain) {
    //host = visualizerConfig.execution_host;
    host = "https://ec2.eyfojurep.tk/visualizer";
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


require(["gitbook"], function (gitbook) {

    // Bind page events to js functions
    gitbook.events.bind("start", function (e, config) {
        visualizerConfig = config.visualizer;

        if (visualizers === undefined)
            visualizers = [];
        numberOfVisualizers = getNumberOfVisualizers();
        while (visualizers.length < numberOfVisualizers) {
            visualizers.push(undefined);
        }

        for (var i = 1; i <= numberOfVisualizers; i++) {
            var visualizerId = 'visualizer'+i;
            var initCode = $('#'+visualizerId+'-init-code').html();
            visualizers[i-1] = initVisualizer(i, initCode);
        }
    });
    gitbook.events.bind("page.change", function() {
        if (visualizers === undefined)
            visualizers = [];
        numberOfVisualizers = getNumberOfVisualizers();
        while (visualizers.length < numberOfVisualizers) {
            visualizers.push(undefined);
        }
        for (var i = 1; i <= numberOfVisualizers; i++) {
            if (visualizers[i-1] === undefined) {
                var visualizerId = 'visualizer'+i;
                var initCode = $('#'+visualizerId+'-init-code').html();
                if (!(initCode === undefined))
                    initCode = initCode.trim();
                visualizers[i-1] = initVisualizer(i, initCode);
            } else {
                visualizers[i-1] = initVisualizer(i, visualizers[i-1].code);
            }
        }
    });
});
