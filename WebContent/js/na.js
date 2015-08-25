var jsonData = $.getJSON("../../item_analysis.json", function(){
    console.log("success");
})
    .done(function(){
        console.log("second success");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });

jsonData.complete(function(){
    console.log("second complete");
});

var items = ["Amplifying Tome", "Archangels Staff", "Athenes Unholy Grail", "Blasting Wand",
"Liandrys Torment", "Ludens Echo", "Magus", "Morellonomicon", "Nashors Tooth", "Needlessly Large Rod", 
"Rabadons Deathcap", "Rod of Ages", "Runeglaive", "Rylai's Crystal Scepter", "Void Staff",
 "Will of the Ancients", "Zhonyas Hourglass"];

var rankedPick = {labels: ["Amplifying Tome", "Archangels Staff", "Athenes Unholy Grail", "Blasting Wand",
"Liandrys Torment", "Ludens Echo", "Magus", "Morellonomicon", "Nashors Tooth", "Needlessly Large Rod", 
"Rabadons Deathcap", "Rod of Ages", "Runeglaive", "Rylai's Crystal Scepter", "Void Staff",
 "Will of the Ancients", "Zhonyas Hourglass"],
    datasets: [
        {
            label: "5.11",
            fillColor: "rgba(45,180,174,0.5)",
            strokeColor: "rgba(45,180,174,0.8)",
            highlightFill: "rgba(45,180,174,0.75)",
            highlightStroke: "rgba(45,180,174,1)",
            data: [3.59, 0.23, 3.33, 5.69, 3.14, 10.08, 0.59, 6.59, 0.96, 4.94, 9.68, 6.23, 0, 2.41, 5.67, 1.58, 10.71]
        },
        {
            label: "5.14",
            fillColor: "rgba(1, 159, 196,0.5)",
            strokeColor: "rgba(1, 159, 196,0.8)",
            highlightFill: "rgba(1, 159, 196,0.75)",
            highlightStroke: "rgba(1, 159, 196,1)",
            data: [5.68, 0.23, 3.33, 5.69, 4.16, 8.09, 0, 5.95, 1.59, 7.19, 9.55, 5.35, 0.32, 4.47, 4.14, 1.21, 10.73]
        }
    ]
};

var rankedWin = {labels: ["Amplifying Tome", "Archangel's Staff", "Athene's Unholy Grail", "Blasting Wand",
"Liandry's Torment", "Luden's Echo", "Magus", "Morellonomicon", "Nashor's Tooth", "Needlessly Large Rod", 
"Rabadon's Deathcap", "Rod of Ages", "Runeglaive", "Rylai's Crystal Scepter", "Void Staff",
 "Will of the Ancients", "Zhonya's Hourglass"],
    datasets: [
        {
            label: "5.11",
            fillColor: "rgba(45,180,174,0.5)",
            strokeColor: "rgba(45,180,174,0.8)",
            highlightFill: "rgba(45,180,174,0.75)",
            highlightStroke: "rgba(45,180,174,1)",
            data: [48.28, 48.02, 49.67, 46.35, 57.43, 55.94, 51.37, 51.68, 54.23, 55.37, 59.08, 52.08, 0, 56.99, 57.43, 50.96, 56.04]
        },
        {
            label: "5.14",
            fillColor: "rgba(1, 159, 196,0.5)",
            strokeColor: "rgba(1, 159, 196,0.8)",
            highlightFill: "rgba(1, 159, 196,0.75)",
            highlightStroke: "rgba(1, 159, 196,1)",
            data: [45.54, 52.25, 49.67, 46.35, 58.78, 54.95, 0, 53.20, 54.24, 54.05, 58.8, 50.82, 52.24, 58.57, 57.41, 51.69, 54.3]
        }
    ]
};

var normalPick = {labels: ["Amplifying Tome", "Archangel's Staff", "Athene's Unholy Grail", "Blasting Wand",
"Liandry's Torment", "Luden's Echo", "Magus", "Morellonomicon", "Nashor's Tooth", "Needlessly Large Rod", 
"Rabadon's Deathcap", "Rod of Ages", "Runeglaive", "Rylai's Crystal Scepter", "Void Staff",
 "Will of the Ancients", "Zhonya's Hourglass"],
    datasets: [
        {
            label: "5.11",
            fillColor: "rgba(45,180,174,0.5)",
            strokeColor: "rgba(45,180,174,0.8)",
            highlightFill: "rgba(45,180,174,0.75)",
            highlightStroke: "rgba(45,180,174,1)",
            data: [3.59, 0.23, 3.33, 5.69, 3.14, 10.08, 0.59, 6.59, 0.96, 4.94, 9.68, 6.23, 0, 2.41, 5.67, 1.58, 10.71]
        },
        {
            label: "5.14",
            fillColor: "rgba(1, 159, 196,0.5)",
            strokeColor: "rgba(1, 159, 196,0.8)",
            highlightFill: "rgba(1, 159, 196,0.75)",
            highlightStroke: "rgba(1, 159, 196,1)",
            data: [5.68, 0.23, 3.33, 5.69, 4.16, 8.09, 0, 5.95, 1.59, 7.19, 9.55, 5.35, 0.32, 4.47, 4.14, 1.21, 10.73]
        }
    ]
};

var normalWin = {labels: ["Amplifying Tome", "Archangel's Staff", "Athene's Unholy Grail", "Blasting Wand",
"Liandry's Torment", "Luden's Echo", "Magus", "Morellonomicon", "Nashor's Tooth", "Needlessly Large Rod", 
"Rabadon's Deathcap", "Rod of Ages", "Runeglaive", "Rylai's Crystal Scepter", "Void Staff",
 "Will of the Ancients", "Zhonya's Hourglass"],
    datasets: [
        {
            label: "5.11",
            fillColor: "rgba(45,180,174,0.5)",
            strokeColor: "rgba(45,180,174,0.8)",
            highlightFill: "rgba(45,180,174,0.75)",
            highlightStroke: "rgba(45,180,174,1)",
            data: [48.28, 48.02, 49.67, 46.35, 57.43, 55.94, 51.37, 51.68, 54.23, 55.37, 59.08, 52.08, 0, 56.99, 57.43, 50.96, 56.04]
        },
        {
            label: "5.14",
            fillColor: "rgba(1, 159, 196,0.5)",
            strokeColor: "rgba(1, 159, 196,0.8)",
            highlightFill: "rgba(1, 159, 196,0.75)",
            highlightStroke: "rgba(1, 159, 196,1)",
            data: [45.54, 52.25, 49.67, 46.35, 58.78, 54.95, 0, 53.20, 54.24, 54.05, 58.8, 50.82, 52.24, 58.57, 57.41, 51.69, 54.3]
        }
    ]
};

window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx).Bar(rankedPick, {scaleShowHorizontalLines: false, scaleShowVerticalLines: false, responsive: true});
	var ctx2 = document.getElementById("canvas2").getContext("2d");
        window.myBar2 = new Chart(ctx2).Bar(rankedWin, {scaleShowHorizontalLines: false, scaleShowVerticalLines: false, responsive: true});
    var ctx3 = document.getElementById("canvas3").getContext("2d");
        window.myBar3 = new Chart(ctx3).Bar(normalPick, {scaleShowHorizontalLines: false, scaleShowVerticalLines: false, responsive: true});
	var ctx4 = document.getElementById("canvas4").getContext("2d");
		window.myBar4 = new Chart(ctx4).Bar(normalWin, {scaleShowHorizontalLines: false, scaleShowVerticalLines: false, responsive: true});
    
    document.getElementById('js-legend').innerHTML = myBar.generateLegend();
    
    for (i = 0; i < items.length; i++){
        var queues = items[0]["queues"];
        var regions = queues[0]["regions"];
        var NA = regions[1];
        console.log(NA["stats"])
    }
}