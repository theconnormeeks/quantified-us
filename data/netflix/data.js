



google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Dates');
      data.addColumn('number', 'Netflix');
      data.addColumn('number', 'Youtube');

      data.addRows([
        [new Date(2022,0,1), 0, 9], [new Date(2022,0,2), 3, 6], [new Date(2022,0,3), 6, 3], 
        [new Date(2022,0,4), 9, 0], [new Date(2022,0,5), 6, 3], [new Date(2022,0,6), 3, 6]
        // [6, 11, 3],   [7, 27, 19],  [8, 33,25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
        // [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
        // [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
        // [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
        // [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
        // [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
        // [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
        // [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
        // [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
        // [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
        // [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
      ]);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Videos'
        },
        series: {
          1: {curveType: 'function'}
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }





// getData()

// async function getData() {
//     const response = await fetch('NetflixViewingHistory.csv');
//     const data = await response.text();
//     console.log(data)
// }




// google.charts.load('current', {
//     callback: function () {
//       $.get("NetflixViewingHistory.csv", function(csvString) {
//         var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
  
//         // 
//         console.log(arrayData)
//         // 

//         var data = new google.visualization.arrayToDataTable(arrayData);
  
//         var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
//         chart.draw(data);
//       });
//     },
//     packages: ['corechart']
//   });



// // load the visualization library from Google and set a listener
// google.load("visualization", "1", {packages:["corechart"]});
// google.setOnLoadCallback(drawChart);

// // this has to be a global function
// function drawChart() {
//    // grab the CSV
//    $.get("NetflixViewingHistory.csv", function(csvString) {
//       // transform the CSV string into a 2-dimensional array
//       var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});



//       // converting raw array to count of items by date
//       console.log(arrayData)
//       //




//       // this new DataTable object holds all the data
//       var data = new google.visualization.arrayToDataTable(arrayData);


//       // this view can select a subset of the data at a time
//       var view = new google.visualization.DataView(data);
//       view.setColumns([0,1]);

//      // set chart options
//      var options = {
//         title: "A Chart from a CSV!",
//         hAxis: {title: data.getColumnLabel(0), minValue: data.getColumnRange(0).min, maxValue: data.getColumnRange(0).max},
//         vAxis: {title: data.getColumnLabel(1), minValue: data.getColumnRange(1).min, maxValue: data.getColumnRange(1).max},
//         legend: 'none'
//      };

//      // create the chart object and draw it
//      var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
//      chart.draw(view, options);
//   });
// }