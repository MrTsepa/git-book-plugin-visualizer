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