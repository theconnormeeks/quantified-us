// Send the same request
fetch('/api')
    .then(response => response.json()) // But parse it as JSON this time
    .then(json => createGoogleChart(json))

// Render the chart
    function createGoogleChart(json) {
        google.charts.load('current', {'packages':['corechart', 'line']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = new google.visualization.DataTable();

            data.addColumn('date', 'Date');
            data.addColumn('number', 'Videos');

            for(var key in json) {
                data.addRows([new Array(new Date(key), parseInt(json[key]))]);
            }

            var linearOptions = {
                title: 'Netflix Videos Watched',
                legend: 'none',
                width: 1000,
                height: 500,
                hAxis: {
                    title: 'Date',
                    format: 'YYYY-MM'
                    },
                vAxis: {
                    title: 'Videos',
                    //   ticks: [0, 1000, 2000, 4000, 6000]
                    }
            };

            var linearChart = new google.visualization.LineChart(document.getElementById('linear_div'));
            linearChart.draw(data, linearOptions);
        }
}


        









