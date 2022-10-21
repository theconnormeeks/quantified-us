// GET is the default method, so we don't need to set it
fetch('/api')
    .then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log('GET response text:');
        console.log(text); // Print the greeting as text
    });

// Send the same request
fetch('/api')
    .then(function (response) {
        return response.json(); // But parse it as JSON this time
    })
    .then(function (json) {
        console.log('GET response as JSON:');
        console.log(json); // Here’s our JSON object
        document.getElementById('myData').innerHTML = json.greeting; // pass data to HTML DOM
    })
    
