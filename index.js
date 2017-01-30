module.exports = {
    website: {
        assets: "./assets",
        js : [
            "js/jquery-1.11.1.min.js",
            "js/jquery.jsPlumb-1.6.4-min.js",
            "bootstrap/js/bootstrap.min.js",
            "js/ace-editor/ace.js",
            "js/visualizer.js",
            "js/visualizer-page.js"
        ],
        css : [
            "bootstrap/css/bootstrap.min.css",
            "bootstrap/css/bootstrap.css",
            "font-awesome/css/font-awesome.min.css",
            "css/pythontutor.css",
            "css/visualizer.css"
        ]
    },

    // Map of hooks
    hooks: {},

    // Map of new blocks
    blocks: {
        visualizer: {
            process: function (block) {
                return "<div id='visualiser'></div>";
            }
        }
    },

    // Map of new filters
    filters: {}
};
