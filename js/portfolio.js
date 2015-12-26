/*Dependency : Font awesome*/
function  Porfolio(obj,data){
	var element = "<div class='portfolio'>";
	var pagesNo = data.length; 
	for(var i=0;i<data.length;i++){
		var id = Math.floor((Math.random() * 100000) + 1);
		data[i].id = id;
		data[i].page = i+1;
		var imagesrc = '"'+data[i].image+'"';
		element += "<div class='portfolio-single' onmouseover='"+obj+".addEffect("+id+")' onmouseout='"+obj+".removeEffect("+id+")' onclick='"+obj+".openModal("+id+")' id='portfolio_"+id+"'>";
		element += "<div class='portfolio-hover'><span class='fa fa-eye'></span></div>";
		element += "<img src="+imagesrc+" class='portfolio_item'/>";
		element += "</div>";
	}
	element +="</div>";
	//document.getElementById('portfolio').innerHTML += element;
	$("#portfolio").append(element);
	
	var modalbg = document.createElement("div");
	modalbg.className = "modal-background";
	$("body").append(modalbg);
	$(".modal-background").hide();
	var nav = "<div class='slides-nav'></div>";
	var links = "<ul>";
	$.each(data,function(index,value){
		links += "<li class='nav_links' id='link_"+value.id+"' onclick='"+obj+".openModal("+value.id+")'><a>"+(index+1)+"</a></li>";
	});
	links += "</ul>";
	var modal = "<div class='modal-box'>";
		modal+="<div class='close-icon' onclick='closeModal()'><span>x</span></div>";
		modal+="<div class='modal-box-heading'></div>";
		modal+="<div class='modal-box-content'><div class='left-part'></div><div class='right-part'></div></div>";
		modal += "</div>";
	$("body").append(modal);
	$(".modal-box").append(nav);
	$(".slides-nav").append(links);
	$(".modal-box").hide();
	$(".slides-nav").slideUp();
	this.openModal = function(id){
		var id_number = id,
		    found_collection = {};
		for(var i=0;i<data.length;i++){
			if(id_number == data[i].id){
				found_collection = data[i];
			}
		}
		var title = "<p>"+found_collection.title+"</p>",
			image = "<img src='"+found_collection.image+"' />",
			description = "<p>"+found_collection.description+"</p>";

		$(".modal-box-heading").html(title);
		$(".left-part").html(image);
		$(".right-part").html(description);
		$(".modal-box").fadeIn(100);
		$(".modal-background").fadeIn('slow');
		$(".left-part").removeClass("slide-out").addClass('slide-in');
		$(".right-part").removeClass("zoom-out").addClass('zoom-in');
		$(".nav_links").removeClass("slides-nav-active");
		$("#link_"+id_number).addClass("slides-nav-active");
		$(".slides-nav").delay(2000).slideDown(300);
	}
	
	this.addEffect = function(id){
		$("#portfolio_"+id+" .portfolio-hover").css("display","block");
		$("#portfolio_"+id+" .portfolio_item").addClass("portfolio-item-hover");
	}
	this.removeEffect = function(id){
		$(".portfolio-hover").css("display","none");
		$(".portfolio_item").removeClass("portfolio-item-hover");
	}


}
function closeModal(){
	$(".right-part").removeClass("zoom-in").addClass("zoom-out");
	$(".left-part").removeClass("slide-in").addClass("slide-out");
	$(".slides-nav").delay(800).slideUp(300);
	$(".modal-box,.modal-background").delay(1200).fadeOut( 200 );
}


