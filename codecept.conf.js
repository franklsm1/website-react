exports.config = {
    "tests": "./acceptanceTests/*.js",
    "timeout": 10000,
    "output": "./acceptanceTests/screenShots",
    "helpers": {
        "WebDriverIO": {
            "url": "http://localhost:3000",
            "browser": "chrome",
            "windowSize": "1920x1080",
            "scriptTimeout": 10000,
            "restart": false,
            "desiredCapabilities": {
                "javascriptEnabled": true,
                "acceptInsecureCerts": true
            }
        }
    },
    "bootstrap": false,
    "mocha": {},
    "name": "react-redux-template"
};
