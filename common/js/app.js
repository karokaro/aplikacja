/**
* Template:  /js/app/app.js
* Name : "Aplikacja Generowania Testów"
* Version : "1.0"
* Author: "Karo D!"
*
* Built on top of the jQuery library
* http://jquery.com
*
*/
var words = [];
var draw_words = [];
var draw_words_number;
var words_numbers = [];
var words_length;
var index = 0;
var i=0;
var k=0;
var ile;
var base = "";
var wyraz;
var wyraz2;
var handler = "";
gen_test = {
	randOrd : function() {
		return(Math.round(Math.random())-0.5);
	},
	getTextValue: function(param_type,param,param_split) {
		var textSplit = [];
		var textSplitLength = 0;
		var textValue = '';
		var type = param_type;
		
		if (type=='val'){
			textValue = $(param).val();
		} else if (type=='text') {	
			textValue = $(param).text();
		}

		if (param_split != undefined) {
			textSplit = textValue.split(param_split);
			textSplitLength = textSplit.length;
			return {
				textSplit:textSplit,
				textSplitLength:textSplitLength
			}
			console.log(textSplit)
		} else {
			console.log(textValue)
		}
	},
	anyClick : function(element,param,param_split,param_alert) {
		$(element).click(function() {
			gen_test.getTextValue(param,param_split,param_alert);
		});
	},
	slide : function(el_clik, el_toggle) {
		$(el_clik).click(function(){
			$(el_toggle).slideToggle();
		});
	},
	testFillUp : function() {
		words = gen_test.getTextValue('val','#main2',' ').textSplit;
		words_numbers = gen_test.getTextValue('val','#nr',',').textSplit;
		words_length = words.length;
		for (i=0;i<words_length;i++) {
			handler = "";
		    if ( i == words_numbers[index] ) {
			ile = words[i].length;
			for (k=0;k<ile;k++) {
			handler += "_ ";
			}
			base += words[i].replace(words[i],'<span>'+handler+ '<b>['+ ile +']</b></span>') + " ";
			wyraz = words[i];
			wyraz2 = wyraz.replace('.','').toLowerCase()
			$("#lista").append('<p>'+wyraz2+' </p>');
			index++;
			}
		    else
			{
			    base += words[i].replace(words[i],'<span>'+words[i]+'</span>') + " ";
			}
		}
		draw_words = gen_test.getTextValue('text','#lista',' ').textSplit;
		draw_words_number = gen_test.getTextValue('text','#lista',' ').textSplitLength;
		draw_words.sort( gen_test.randOrd );
		$("#lista").html('');
		for (i=0;i<draw_words_number;i++) {
			$("#lista").append('<p>'+draw_words[i]+' </p>');
		}
		$("#test").html(base);
		$(".info").hide();
		$(".now1").show();
		
	},
	fireTestFillUp : function() {
		$("#clicker").click(function() {
			gen_test.testFillUp()
		})
	},
	takeWordsNumber : function() {
		words = gen_test.getTextValue('val', '#main2', ' ').textSplit;
		word_num = words.length;
	},
	whichWordHidden : function() {
		$("#clicker2").click(function() {
			//gen_test.
		})
	},
	showHowMany : function() {
		$("#poka_ile").click(function() {
			i = gen_test.getTextValue('val','#main2',' ').textSplit;
			k = gen_test.getTextValue('val','#main2',' ').textSplitLength;
			$(".all").html(k);
		});
	}

}

$(function(){
	gen_test.fireTestFillUp();
	gen_test.showHowMany();
})