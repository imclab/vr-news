function place() {
		
	$("#place").show();

	$("#place .dot").velocity({
		opacity: [1,0],
	},{
		duration: 500,
		complete: function() {

			$("#place h1")
			.velocity({
				opacity: [0,0],
				left: ["2.4em", "0em"],
				bottom: ["2.4em", "0em"]
			},{
				duration: 500
			});

			$("#place .line").velocity({
				opacity: [1,0],
				height: ["2.5em", "0em"]
			},{
				duration: 500,
				complete: function() {

					$("#place h1")
					.velocity({
						opacity: [1,0],
						scaleX: [1, 0]
					},{
						duration: 500
					});			
				}
			});
		}
	});
}


function onkey(event) {
	
	//console.log("onkey", event.charCode);
	if (event.charCode == 'p'.charCodeAt(0)) {
		place();
	} else if (event.charCode == 'o'.charCodeAt(0)) {
		
	} else {
		return;
	}

	event.preventDefault();
	event.stopPropagation();
}


function start() {
	
	//console.log($("start"));
	window.addEventListener("keypress", onkey, true);
	$("#place").hide();

}


window.addEventListener("load", start, false);