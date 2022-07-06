const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// // csv file we want to load
// let filename = 'NetflixViewingHistory.csv';

// // all of your code should be inside this command
// d3.csv(filename).then(function(loadedData) {
  
//   // let's see if our data loaded correctly
//   // (and take a peek at how it's formatted)
//   console.log(loadedData);
  
//   // empty lists for our data and the labels
//   let data =   [];
//   let labels = [];
  
//   // use a for-loop to load the data from the
//   // file into our lists
//   for (let i=0; i<loadedData.length; i++) {
//     console.log(loadedData[i]);
    
//     // get the year and mean temp for each listing
//     // note: the 'keys' here correspond to the headers
//     // in our file and need to be typed exactly
//     let year =     loadedData[i].year;
//     let meanTemp = loadedData[i].rcp45_weighted_mean;
//     console.log(meanTemp);
    
//     // add the year to our labels
//     labels.push(year);
    
//     // and mean temp to the data
//     data.push(meanTemp);    
//   }
  
//   // basic line chart settings
//   let options = {
//     type: 'line',
//     data: {
//       labels: labels,  // the labels we loaded!
//       datasets: [{
//         data: data,    // the data we loaded!
//         fill: false,
//         pointRadius: 0,
//         pointHoverRadius: 0,
//         borderColor: 'rgb(100,100,100)'
//       }]
//     }
//   };
  
//   // with all that done, we can create our chart!
//   let chart = new Chart(document.getElementById('myChart'), options);
// });




// initialize()

// function initialize() {
//   var opts = {sendMethod: 'auto'};

//   // Replace the data source URL on next line with your data source URL.
//   var query = new google.visualization.Query('csv?url=http://pragmasol.com/leadsytd.csv', opts);

//   // Optional request to return only column C and the sum of column B, grouped by C members.
//   query.setQuery('select B, count(A) group by B');

//   // Send the query with a callback function.
//   query.send(handleQueryResponse);
// }

// function handleQueryResponse(response) {
//   if (response.isError()) {
//     alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
//     return;
//   }

//   var data = response.getDataTable();
//   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
//   chart.draw(data, {width: 400, height: 240, is3D: true});
// }




// google.charts.load('current', {packages: ['corechart', 'line']});
// google.charts.setOnLoadCallback(drawCurveTypes);

// function drawCurveTypes() {
//       var data = new google.visualization.DataTable();
//       data.addColumn('date', 'Dates');
//       data.addColumn('number', 'Netflix');
//       data.addColumn('number', 'Youtube');

//       data.addRows([
//         [new Date(2022,0,1), 0, 9], [new Date(2022,0,2), 3, 6], [new Date(2022,0,3), 6, 3], 
//         [new Date(2022,0,4), 9, 0], [new Date(2022,0,5), 6, 3], [new Date(2022,0,6), 3, 6]
//       ]);

//       var options = {
//         hAxis: {
//           title: 'Time'
//         },
//         vAxis: {
//           title: 'Videos'
//         },
//         series: {
//           1: {curveType: 'function'}
//         }
//       };

//       var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
//       chart.draw(data, options);
//     }





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