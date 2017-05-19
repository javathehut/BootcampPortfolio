const https = require('https');

https.get("https://api.darksky.net/forecast/0b064253fcb4cc94dc9ff79d38f5439e/43.700,-79.5667?exclude=[minutely,hourly,daily,alerts,flags]&units=ca", (res) => {
    // console.log('statusCode:', res.statusCode);

    res.on('data', (d) => {
        // process.stdout.write(d);
        let info = JSON.parse(d);

        console.log("Current Weather in " + info.timezone);

        console.log("- Temperature: " + info.currently.temperature + " degrees Celcius");

        console.log("- Summary: " + info.currently.summary);
    });

}).on('error', (e) => {
    console.error(e);
});