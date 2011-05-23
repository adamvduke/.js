// delay execution until facebook finishes loading
setTimeout(function() 
{
	// remove this crap
	$("#pagelet_adbox").remove();
	$("#pagelet_ego_pane").remove();
	$("#pagelet_relationships").remove();
	$("#pagelet_footer").remove();
	$("#pagelet_friends_online").remove();
	$(".fbDockWrapper").remove();	
}, 400);
