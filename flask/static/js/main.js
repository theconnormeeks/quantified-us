fetch('/netflix')
    .then(response => response.json()) // But parse it as JSON this time
    .then(json => createGoogleChart(json, 'Netflix'))

fetch('/youtube')
    .then(response => response.json()) // But parse it as JSON this time
    .then(json => createGoogleChart(json, 'Youtube'))

// Render the chart
    function createGoogleChart(json, element) {
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
                title: element,
                legend: 'none',
                width: 1000,
                height: 500,
                hAxis: {
                    title: 'Date',
                    format: 'YYYY-MM'
                    },
                vAxis: {
                    title: 'Videos',
                    }
            };

            var linearChart = new google.visualization.LineChart(document.getElementById(element));
            linearChart.draw(data, linearOptions);
        }
}


        









