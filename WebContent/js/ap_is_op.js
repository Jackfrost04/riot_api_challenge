var rankedPick = {labels: ["Amplifying Tome", "Archangel's Staff", "Athene's Unholy Grail", "Blasting Wand",
"Liandry's Torment", "Luden's Echo", "Magus", "Morellonomicon", "Nashor's Tooth", "Needlessly Large Rod", 
"Rabadon's Deathcap", "Rod of Ages", "Runeglaive", "Rylai's Crystal Scepter", "Void Staff",
 "Will of the Ancients", "Zhonya's Hourglass"],
    datasets: [
        {
            label: "5.11",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [3.59, 0.23, 3.33, 5.69, 3.14, 10.08, 0.59, 6.59, 0.96, 4.94, 9.68, 6.23, 0, 2.41, 5.67, 1.58, 10.71]
        },
        {
            label: "5.14",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
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
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "5.14",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [45.54, 52.25, 49.67, 46.35, 86, 27, 90]
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
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [3.59, 0.23, 3.33, 5.69, 3.14, 10.08, 0.59, 6.59, 0.96, 4.94, 9.68, 6.23, 0, 2.41, 5.67, 1.58, 10.71]
        },
        {
            label: "5.14",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
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
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "5.14",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

var jsonData = $.getJSON("../../../item_data/item_analysis.json", function(){
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


window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx).Bar(rankedPick, {responsive : true});
	var ctx2 = document.getElementById("canvas2").getContext("2d");
		window.myBar2 = new Chart(ctx2).Bar(rankedWin, {responsive : true});
    var ctx3 = document.getElementById("canvas3").getContext("2d");
        window.myBar3 = new Chart(ctx3).Bar(normalPick, {responsive: true});
	var ctx4 = document.getElementById("canvas4").getContext("2d");
		window.myBar4 = new Chart(ctx4).Bar(normalWin, {responsive : true});
}