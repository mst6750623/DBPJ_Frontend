/**
 * Theme: Ninja Admin Template
 * Author: NinjaTeam
 * Module/App: X-Editable
 */

(function($) {
	"use strict";

	$(document).ready(function(){
		$('#inline-username').editable({
			type: 'text',
			pk: 1,
			name: 'username',
			title: 'Enter username',
			mode: 'inline'
		});

		$('#inline-status').editable({
			prepend: "unlimited",
			mode: 'inline',
			source: [
				{value: 1, text: 'unlimited'},
				{value: 2, text: 'limited'}
			],
			display: function(value, sourceData) {
				var colors = {"": "#98a6ad", 1: "#5fbeaa", 2: "#5d9cec"},
					elem = $.grep(sourceData, function(o){return o.value === value;});

				if(elem.length) {
					$(this).text(elem[0].text).css("color", colors[value]);
				} else {
					$(this).empty();
				}
			}
		});

		$('#inline-status').editable({mode: 'inline'});

		$('#inline-group').editable({
			showbuttons: false,
			mode: 'inline'
		});

		$('#inline-dob').editable({mode: 'inline'});
		$('#inline-event').editable({mode: 'inline'});

		$('#inline-comments').editable({
			showbuttons: 'bottom',
			mode: 'inline'
		});

		return false
	});



	function destroy_all(){
		$('#inline-username').editable('destroy');
		$('#inline-firstname').editable('destroy');
		$('#inline-sex').editable('destroy');
		$('#inline-status').editable('destroy');
		$('#inline-group').editable('destroy');
		$('#inline-dob').editable('destroy');
		$('#inline-event').editable('destroy');
		$('#inline-comments').editable('destroy');
		$('#inline-fruits').editable('destroy'); 
		return false
	}	

})(jQuery);