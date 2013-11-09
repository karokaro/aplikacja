jQuery.extend({
	random: function(X) {
	    return Math.floor(X * (Math.random() % 1));
	},
	randomBetween: function(MinV, MaxV) {
	  return MinV + jQuery.random(MaxV - MinV + 1);
	}
});

$(document).ready(function() {


    //function randOrd() { return(Math.round(Math.random())-0.5); }
	
    //$("#clicker").click(function() {
	//	$("#lista").html(''); //ustawia zawartośc html znacznika lista na pustą
	//	var str = $("#main2").val();  // pobiera wartość znacznika #main2 - i przypisnuje do zmiennej str
	//	var words = str.split(' '); //dzieli zawartość zmiennej str po spacji
	//	var words_num = words.length;  // przypisujemy do zmiennej ilość elementów talibcy - u nas ilośc słów
	//	
	//var base = ""; //zmienna
	//var base2 = ""; //zmienna
	//
	//var numbers = $("#nr").val();
	//var c = numbers.split(',');
	//
	//var index = 0;
	//
	//for (var i=0;i<words_num;i++) {
	//    
	//    if ( i == c[index] ) {
	//	var ile = words[i].length;
	//	var handler = "";
	//	    for (var k=0;k<ile;k++) {
	//		handler += "_ ";
	//	    }
	//	base += words[i].replace(words[i],'<span>'+handler+ '<b>['+ ile +']</b></span>') + " ";
	//	var wyraz = words[i];
	//	var wyraz2 = wyraz.replace('.','').toLowerCase()
	//	$("#lista").append('<p>'+wyraz2+' </p>');
	//	index++;
	//	}
	//    else
	//	{
	//	    base += words[i].replace(words[i],'<span>'+words[i]+'</span>') + " ";
	//	}
	//}
	//
	//
	//
	//    
	//
	//
	//var wyrazy = $("#lista").text();
	//var tab_wyrazy = wyrazy.split(' ');
	//var tab_ile = tab_wyrazy.length;
	//
	//
	//function randOrd() { return(Math.round(Math.random())-0.5); }
	//tab_wyrazy.sort( randOrd );
	//$("#lista").html('');
	//    
	//for (var m=0;m<tab_ile;m++) {
	//    $("#lista").append('<p>'+tab_wyrazy[m]+' </p>');
	//}
	//$("#test").html(base);
	//$(".info").hide();
	//$(".now1").show();
	
	
   // });
    
    
    
 // KAROLINA - takeWordsNumber line 101  
  /*   $("#clicker2").click(function() {
	$("#lista").html('');
	var str = $("#main2").val();
	var words = str.split(' ');
	var words_num = words.length;
	var base = "";
	var base2 = "";
	var numbers  = 0;
	var numbers = $("#nr").val();
	var c = numbers.split(',');
	var index = 0;
	
	for (var i=0;i<words_num;i++) {
	    
	    if ( i == c[index] ) {
		var ile2 = words[i];
		var ile = words[i].length;
		var ilesplit = ile2.split('');
		var ile3 = ilesplit.length;
		var choice = $("#nr_choice").val();
		
		if (ile3 > choice) {
		    
		
		ilesplit.sort( randOrd );
		var handler = "";
		    for (var k=0;k<ile;k++) {
			handler += ilesplit[k];
		    }
		base += words[i].replace(words[i],'<span class="act">__'+handler+'__</span>') + " ";
		
		
		var wyraz = words[i];
		var wyraz2 = wyraz.replace('.','').toLowerCase()
		$("#lista").append('<p>'+wyraz2+' </p>');
		
		}
		
		index++;
		}
	    else
		{
		    base += words[i].replace(words[i],'<span>'+words[i]+'</span>') + " ";
		}
	}
	*/
	function randOrd() { return(Math.round(Math.random())-0.5); }  
	var base = "";
	var wyrazy = $("#lista").text();
	var tab_wyrazy = wyrazy.split(' ');
	var tab_ile = tab_wyrazy.length;
	
	tab_wyrazy.sort( randOrd );
	$("#lista").html('');
	    
	for (var m=0;m<tab_ile;m++) {
	    $("#lista").append('<p>'+tab_wyrazy[m]+' </p>');
	}
	$("#test").html(base);
	var iletu = $("#lista").text();
	var iletu2  = iletu.split(' ');
	var liczmnie2 = iletu2.length;
	var liczmnie3 = liczmnie2 - 2;
	$('.iletera2').html(' (pozostało wyrazów ' +liczmnie3+ ') ');
	
	$(".info").hide();
	$(".now2").show();
	
	
	
    });
      
      
      
    $("#clicker3").click(function() {
	$("#lista").html('');
	var str = $("#main2").val();
	var words = str.split(' ');
	var words_num = words.length;
	var base = "";
	var base2 = "";
	var numbers  = 0;
	var numbers = $("#nr").val();
	var c = numbers.split(',');
	var index = 0;
	
	for (var i=0;i<words_num;i++) {
	    
	    if ( i == c[index] ) {
		
		var diff = str.split(' ');
		base += words[i].replace(words[i],'<span class="act act'+[i]+'">[_'+words[i]+'_] </span>') + " ";
		diff.sort( randOrd );
		
		for (var z=0;z<3;z++)
		{
		base += diff[z].replace(diff[z],'<span class="act act'+[i]+'">[_'+diff[z]+'_] </span>') + " ";
		}
		
		index++;
		
		
		var wyraz = words[i];
		var wyraz2 = wyraz.replace('.','').toLowerCase()
		$("#lista").append('<p>'+wyraz2+' </p>');
		
		}
	    else
		{
		    base += words[i].replace(words[i],'<span>'+words[i]+'</span>') + " ";
		}
	}
	 
	 
	
	
	
	var base12 = "";
	var wyrazy = $("#lista").text();
	var tab_wyrazy = wyrazy.split(' ');
	var tab_ile = tab_wyrazy.length;
	
	tab_wyrazy.sort( randOrd );
	$("#lista").html('');
	    
	for (var m=0;m<tab_ile;m++) {
	    $("#lista").append('<p>'+tab_wyrazy[m]+' </p>');
	}
	$("#test").html(base);
	for (var b=0;b<words_num;b++) {
	  $('.act'+ b).first().before('<span class="one'+ b +'">');
	  $('.act'+ b).appendTo('.one'+ b);
	  var wait = "";
	  var table1 = $('.one'+ b).text();
	  var table1a = table1.split(' ');
	  var table1b = table1a.length;
	  table1a.sort( randOrd );
	    for (var c=0;c<table1b;c++) {
		wait += table1a[c].replace(table1a[c],'<span class="act">'+table1a[c]+'</span>') + " ";
	    }
	  $('.one'+ b).html(wait);
	}
	
	$(".info").hide();
	$(".now3").show();
	
	
	
    });  
      
//      
//    $("#poka_ile").click(function() {
//		var str = $("#main2").val();
//		var words = str.split(' ');
//		var words_num = words.length;
//		$(".all").html(words_num);
//    });
    
    $(".ukryj").click(function() {
	 
	 $(".ukryjme").slideToggle();
    });
    
    function sortit(a,b){
    return(a-b)
    }
    
     $("#losuj").click(function() {
	var str = $("#main2").val();
	var words = str.split(' ');
	var words_num = words.length;
	$('#nr').val('');
	var howm = $("#ile").val();
	for (i = 1; i < howm; i++) {
	   
		$('#nr').val($('#nr').val()  + ($.randomBetween(1, words_num)) + "," );
	   
	}
	var nr_str = $("#nr").val();
	var nr_str2 = nr_str.split(',');
	var nr_str3 = nr_str2.length;
	nr_str2.sort(sortit);
	var newme = "";
	for (var f=0;f<nr_str3;f++) {
		
		if (nr_str2[f] == nr_str2[f+1]) {
		    newme += nr_str2[f+1].replace(nr_str2[f+1],'');
		}
		else {
		    newme += nr_str2[f] + ",";
		}
		
		
	}
	$('#nr').val(newme)
	var text1 = $("#nr").val();
	$("#nr").val(text1.substring(1));
	var summ = $("#nr").val();
	var summ2 = summ.split(',');
	var summ3 = summ2.length;
	var summ4 = summ3-1;
	$('.iletera').html(' (wylosowano unikalnych ' +summ4+ ') ');

	
    });
     
     
     $(".hide_all").click(function() {
	 
	 $("#mainme").slideToggle();
    });
   
   
   
   
   $("#set").click(function() {
	var textonly1 = $("#target").remove('table');
	var textonly = textonly1.text();
	$("#target").html('');
	$("#main2").val(textonly);
	
	
	
	
    });
   
   
   $(".newnew").click(function() {
	 
	
	  
	$("#main2").load("http://drazewskidesign.pl/karo/ang/proxy.php", function(){
  // Some callback functions
});
	  
	  
    });
      
//});

