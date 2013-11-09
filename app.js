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
	slide : function(el_clik, el_toggle) {
		$(el_clik).click(function(){
			$(el_toggle).slideToggle();
		});
	},
	testFillUp : function() {
		var base = "";
		// pobieramy wartość val z id #main2 i rozdzielamy po spacji - retutn array
		words = gen_test.getTextValue('val','#main2',' ').textSplit; 
		// pobieramy wartość val z id #nr i rozdzielamy po przecinku - retutn array
		words_numbers = gen_test.getTextValue('val','#nr',',').textSplit;
		// pobieramy wartość val z id #main2 i rozdzielamy po spacji - retutn number
		// - how many elements in array/after split
		words_length = gen_test.getTextValue('val','#main2',' ').textSplitLength;
		// wykonywanie pętli - zaczyna się od 0, po każdym wywołaniu wzrost o jeden
		//do momentu, aż i będzie mniejsze niż ilość elementów tablicy
		
		for (i=0;i<words_length;i++) {
			// Przy każdym elemencie dodajemy spacje
			handler = "";
			// Sprawdzamy czy zmienna i jest równa rozdzielonym elemontom z tablicy 
			//- 1 el - index0, 2gi el - index1 itd.
		    if ( i == words_numbers[index] ) {
		    // sprawdzamy jaka jest długość danego wyrazu wg indeksu- 
			ile = words[i].length;
			// pętla, w której daną literę w wyrazie zastępujemy "_ "
			for (k=0;k<ile;k++) {
			handler += "_ ";
			}
			base += words[i].replace(words[i],'<span>'+handler+ '<b>['+ ile +']</b></span>') + " ";
			wyraz = words[i];
			// kropki przy wyrazach zastępujemy spacją, aby nie było wiadomo który wyraz kończył zdanie
			// duze litery w wyrazie zamieniamy na małe
			wyraz2 = wyraz.replace('.','').toLowerCase()
			// wyrazy "ukryte" dodajemy do rodzica "#lista" w znacznikach <p>
			$("#lista").append('<p>'+wyraz2+' </p>');
			// podnosimy index o 1 
			index++;
			
			}
		    else
		    	// a tuuuuu? gdy warunek nie jest spełniony doklejamy ????????????????
			{
			    base += words[i].replace(words[i],'<span>'+words[i]+'</span>') + " ";
			}
			console.log(i,words_numbers[index])
		}
		// pobieramy wartość text z id #lista i rozdzielamy po spacji - retutn array
		draw_words = gen_test.getTextValue('text','#lista',' ').textSplit;
		// sprawdzamy ilość elementów w tablicy - return number
		draw_words_number = gen_test.getTextValue('text','#lista',' ').textSplitLength;
		// sortowanie słów w randomowej kolejności
		draw_words.sort( gen_test.randOrd );
		// czyścimy html id #lista
		$("#lista").html('');
		// i początkowo jest równe zero, zwiększa swoją wartość o 1, do momentu gdy 
		//i będzie mniejsz od draw_words_number
		for (i=0;i<draw_words_number;i++) {
			$("#lista").append('<p>'+draw_words[i]+' </p>');
		}
		$("#test").html(base); // do #test dodanie zawartości zmiennej base
		$(".info").hide(); // ukrywanie klasy .info
		$(".now1").show(); // pokazanie klasy ".now1"
		
	},
	fireTestFillUp : function() {
		$("#clicker").click(function() {
			gen_test.testFillUp()
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