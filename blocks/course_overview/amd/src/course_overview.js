function pagination(starting,pages,perpagecourse) {
	$(".pagination li").click(function() {
		var id = $(this).attr("id");
		thisval = $("#page_co_over").attr("value");
		if(id == "next_co_over") {
			if(starting < pages-1) {
				starting++;
				if(starting == 1) {
					$("#previous_co_over").removeClass("disabled");
				}
				else if(starting == pages-1) {
					$("#next_co_over").addClass("disabled");
				}
			}
		} else if(id == "previous_co_over") {
			if(starting > 0) {
				starting--;
				if(starting == pages-2) {
					$("#next_co_over").removeClass("disabled");
				} else if(starting == 0) {
					$("#previous_co_over").addClass("disabled");
				}
			}
		} else {
			starting  = (id.split('_')[0]) - 1;
			if(starting == 0) {
				$("#previous_co_over").addClass("disabled");
				$("#next_co_over").removeClass("disabled");
			} else if(starting > 0 && starting < pages-1) {
				$("#previous_co_over").removeClass("disabled");
				$("#next_co_over").removeClass("disabled");

			} else if(starting == pages-1) {
				$("#next_co_over").addClass("disabled");
				$("#previous_co_over").removeClass("disabled");
			}
		}
		$.ajax({
			url: 'http://localhost/lmis-moodle/blocks/course_overview/ajaxfile.php',
			type: 'post',
			data:{
				'numofcoursesshow': perpagecourse,
				'start': starting,
				'key': thisval,
			},
			success: function(response){
				$("#co_over_courses").html(response);
				pagination(starting,pages,perpagecourse)
			},
			error:function(err){
				console.log(err);
			}
		});
	})
}
define([jQuery], function() {
	return {
		Init: function(pages, perpagecourse) {
			var starting = 0;
			pagination(starting,pages,perpagecourse)
			$(".co_over").click(function(){
				thisval = $(this).val();
				$(".co_over").removeClass("btn-primary");
				$("#co_over_" + thisval).addClass("btn-primary");
				$.ajax({
					url: 'http://localhost/lmis-moodle/blocks/course_overview/ajaxfile.php',
					type: 'post',
					data:{
						'numofcoursesshow': perpagecourse,
						'start': 0,
						'key': thisval,
					},
					success: function(response){
						$("#co_over_courses").html(response);
						var starting = 0;
						pagination(starting,pages,perpagecourse)
					},
					error:function(err){
						console.log(err);
					}
				});
			});
		}       
	}
});