define(['jquery'], function($) {
	return {
		Init: function() {
			
			$(document).ready(function() {
				
				$(".co_over").click(function(){
					$(".co_over").removeClass("btn-primary");
					$("#co_over_" + $(this).val()).addClass("btn-primary");
					thisval = $(this).val();
					console.log(thisval);
					$.ajax({
						url: 'http://localhost/lmis-moodle/blocks/course_overview/ajaxfile.php',
						type: 'post',
						data:{
							'key': $(this).val(),
							'page': 0,
							'perpage': 9 
						},
						success: function(response){
							$("#co_over_courses").html(response);
						},
						error:function(err){
							console.log(err);
						}
					});
				});
				
			});
		}       
	}
});
