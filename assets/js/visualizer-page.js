var visualizer;

$(function() {
	visualizer = new Visualizer('#visualizer', '', '', {'show_stdin_initially': true});
	visualizer.focusCodeEditor();


	$('#exampleLinks a').click(function(e) {
		visualizer.reset();
		visualizer.setStatus('Загрузка...');

		var loading_status = 0;

		function loaded() {
			loading_status += 1;
			if(loading_status == 2) {
				visualizer.setStatus('');
				visualizer.run();
			}
		}


		var code_file = $(e.target).data('code');
		var input_file = $(e.target).data('input');

		$.get('/static/example-code/' + code_file, function(code) {
			visualizer.code = code;
			loaded();
		});

		if(typeof(input_file) !== 'undefined') {
			$.get('/static/example-code/' + input_file, function(stdin) {
				visualizer.stdin = stdin;
				loaded();
			});
		} else {
			visualizer.stdin = '';
			loaded();
		}

		return false;
	});

	$('#exampleLinks .default').click();
});

