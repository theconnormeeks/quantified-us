// Loading Netflix Data
// const file = "data/netflix/NetflixViewingHistory.csv" // need to pass file from python to js...

// d3.csv(file, function(data){
//     console.log(data);
// });

// Render the chart
google.charts.load('current', {'packages':['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Videos');

  data.addRows([
    [new Date(1400, 1, 1),  374],
    [new Date(1500, 1, 1),  460],
    [new Date(1600, 1, 1),  579],
    [new Date(1700, 1, 1),  679],
    [new Date(1750, 1, 1),  770],
    [new Date(1800, 1, 1),  954],
    [new Date(1850, 1, 1),  1241],
    [new Date(1900, 1, 1),  1633],
    [new Date(1910, 1, 1),  1750],
    [new Date(1920, 1, 1),  1860],
    [new Date(1930, 1, 1),  2070],
    [new Date(1940, 1, 1),  2300],
    [new Date(1950, 1, 1),  2558],
    [new Date(1951, 1, 1),  2595],
    [new Date(1952, 1, 1),  2637],
    [new Date(1953, 1, 1),  2682],
    [new Date(1954, 1, 1),  2730],
    [new Date(1955, 1, 1),  2782],
    [new Date(1956, 1, 1),  2835],
    [new Date(1957, 1, 1),  2891],
    [new Date(1958, 1, 1),  2948],
    [new Date(1959, 1, 1),  3001],
    [new Date(1960, 1, 1),  3043],
    [new Date(1961, 1, 1),  3084],
    [new Date(1962, 1, 1),  3140],
    [new Date(1963, 1, 1),  3210],
    [new Date(1964, 1, 1),  3281],
    [new Date(1965, 1, 1),  3350],
    [new Date(1966, 1, 1),  3421],
    [new Date(1967, 1, 1),  3490],
    [new Date(1968, 1, 1),  3562],
    [new Date(1969, 1, 1),  3637],
    [new Date(1970, 1, 1),  3713],
    [new Date(1971, 1, 1),  3790],
    [new Date(1972, 1, 1),  3867],
    [new Date(1973, 1, 1),  3942],
    [new Date(1974, 1, 1),  4017],
    [new Date(1975, 1, 1),  4089],
    [new Date(1976, 1, 1),  4160],
    [new Date(1977, 1, 1),  4232],
    [new Date(1978, 1, 1),  4304],
    [new Date(1979, 1, 1),  4379],
    [new Date(1980, 1, 1),  4451],
    [new Date(1981, 1, 1),  4534],
    [new Date(1982, 1, 1),  4615],
    [new Date(1983, 1, 1),  4696],
    [new Date(1984, 1, 1),  4775],
    [new Date(1985, 1, 1),  4856],
    [new Date(1986, 1, 1),  4941],
    [new Date(1987, 1, 1),  5027],
    [new Date(1988, 1, 1),  5115],
    [new Date(1989, 1, 1),  5201],
    [new Date(1990, 1, 1),  5289],
    [new Date(1991, 1, 1),  5372],
    [new Date(1992, 1, 1),  5456],
    [new Date(1993, 1, 1),  5538],
    [new Date(1994, 1, 1),  5619],
    [new Date(1995, 1, 1),  5699],
    [new Date(1996, 1, 1),  5779],
    [new Date(1997, 1, 1),  5858],
    [new Date(1998, 1, 1),  5935],
    [new Date(1999, 1, 1),  6012],
    [new Date(2000, 1, 1),  6089],
    [new Date(2001, 1, 1),  6165],
    [new Date(2002, 1, 1),  6242],
    [new Date(2003, 1, 1),  6319],
    [new Date(2004, 1, 1),  6396],
    [new Date(2005, 1, 1),  6473],
    [new Date(2006, 1, 1),  6551],
    [new Date(2007, 1, 1),  6630],
    [new Date(2008, 1, 1),  6709],
    [new Date(2009, 1, 1),  6788]
  ]);

  var linearOptions = {
    title: 'Netflix Videos Watched',
    legend: 'none',
    width: 1000,
    height: 500,
    hAxis: {
      title: 'Date'
    },
    vAxis: {
      title: 'Videos',
    //   ticks: [0, 1000, 2000, 4000, 6000]
    }
  };


  var linearChart = new google.visualization.LineChart(document.getElementById('linear_div'));
   linearChart.draw(data, linearOptions);

}






