/*Initializing graph arrays*/
var rankedPickData511 = [];
var rankedPickData514 = [];
var rankedWinData511 = [];
var rankedWinData514 = [];
var normalPickData511 = [];
var normalPickData514 = [];
var normalWinData511 = [];
var normalWinData514 = [];
var items = ["Needlessly Large Rod", "Athene's Unholy Grail", "Blasting Wand", "Runeglaive",
"Magus", "Rabadon's Deathcap", "Luden's Echo", "Liandry's Torment", "Will of the Ancients", "Seraph's Embrace", 
"Morellonomicon", "Void Staff", "Nashor's Tooth", "Rylai's Crystal Scepter", "Amplifying Tome",
 "Rod of Ages", "Archangel's Staff", "Zhonyas Hourglass"];

/*Load JSON file and fill arrays with data*/
request = new XMLHttpRequest();
request.open('GET', '../item_analysis.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400){
    // Success!
    data = JSON.parse(request.responseText);
    for(i = 0; i < items.length; i++) {
        rankedPickData511[i] = ((data.patches[1].queues[0].regions[1].items[i].stats[4].pick_rate)*100).toFixed(2);
        rankedPickData514[i] = ((data.patches[0].queues[0].regions[1].items[i].stats[4].pick_rate)*100).toFixed(2);
        rankedWinData511[i] = ((data.patches[1].queues[0].regions[1].items[i].stats[4].win_rate)*100).toFixed(2);
        rankedWinData514[i] = ((data.patches[0].queues[0].regions[1].items[i].stats[4].win_rate)*100).toFixed(2);
        normalPickData511[i] = ((data.patches[1].queues[1].regions[1].items[i].stats[4].pick_rate)*100).toFixed(2);
        normalPickData514[i] = ((data.patches[0].queues[1].regions[1].items[i].stats[4].pick_rate)*100).toFixed(2);
        normalWinData511[i] = ((data.patches[1].queues[1].regions[1].items[i].stats[4].win_rate)*100).toFixed(2);
        normalWinData514[i] = ((data.patches[0].queues[1].regions[1].items[i].stats[4].win_rate)*100).toFixed(2);
    }
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();


alert(rankedPickData511);



/* Setup Tables */
var rankedPick = {labels: items,
    datasets: [
        {
            label: "5.11",
            fillColor: "rgba(45,180,174,0.5)",
            strokeColor: "rgba(45,180,174,0.8)",
            highlightFill: "rgba(45,180,174,0.75)",
            highlightStroke: "rgba(45,180,174,1)",
            data: rankedPickData511
        },
        {
            label: "5.14",
            fillColor: "rgba(241,215,120,0.5)",
            strokeColor: "rgba(241,215,120,1)",
            highlightFill: "rgba(241,215,120,0.75)",
            highlightStroke: "rgba(241,215,120,1)",
            data: rankedPickData514
        }
    ]
};

var rankedWin = {labels: items,
    datasets: [
        {
            label: "5.11",
            fillColor: "rgba(45,180,174,0.5)",
            strokeColor: "rgba(45,180,174,0.8)",
            highlightFill: "rgba(45,180,174,0.75)",
            highlightStroke: "rgba(45,180,174,1)",
            data: rankedWinData511
        },
        {
            label: "5.14",
            fillColor: "rgba(241,215,120,0.5)",
            strokeColor: "rgba(241,215,120,1)",
            highlightFill: "rgba(241,215,120,0.75)",
            highlightStroke: "rgba(241,215,120,1)",
            data: rankedWinData514
        }
    ]
};

var normalPick = {labels: items,
    datasets: [
        {
            label: "5.11",
            fillColor: "rgba(45,180,174,0.5)",
            strokeColor: "rgba(45,180,174,0.8)",
            highlightFill: "rgba(45,180,174,0.75)",
            highlightStroke: "rgba(45,180,174,1)",
            data: normalPickData511
        },
        {
            label: "5.14",
            fillColor: "rgba(241,215,120,0.5)",
            strokeColor: "rgba(241,215,120,1)",
            highlightFill: "rgba(241,215,120,0.75)",
            highlightStroke: "rgba(241,215,120,1)",
            data: normalPickData514
        }
    ]
};

var normalWin = {labels: items,
    datasets: [
        {
            label: "5.11",
            fillColor: "rgba(45,180,174,0.5)",
            strokeColor: "rgba(45,180,174,0.8)",
            highlightFill: "rgba(45,180,174,0.75)",
            highlightStroke: "rgba(45,180,174,1)",
            data: normalWinData511
        },
        {
            label: "5.14",
            fillColor: "rgba(241,215,120,0.5)",
            strokeColor: "rgba(241,215,120,1)",
            highlightFill: "rgba(241,215,120,0.75)",
            highlightStroke: "rgba(241,215,120,1)",
            data: normalWinData514
        }
    ]
};

/* Create Tables and insert them into html */
var options = {scaleFontColor: "#fff",scaleLineColor : "#fff",scaleShowHorizontalLines: false, scaleShowVerticalLines: false, responsive: true};
window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx).Bar(rankedPick, options);
	var ctx2 = document.getElementById("canvas2").getContext("2d");
        window.myBar2 = new Chart(ctx2).Bar(rankedWin, options);
    var ctx3 = document.getElementById("canvas3").getContext("2d");
        window.myBar3 = new Chart(ctx3).Bar(normalPick, options);
	var ctx4 = document.getElementById("canvas4").getContext("2d");
		window.myBar4 = new Chart(ctx4).Bar(normalWin, options);
    
    document.getElementById('js-legend').innerHTML = myBar.generateLegend();
    document.getElementById('js-legend2').innerHTML = myBar.generateLegend();   
}