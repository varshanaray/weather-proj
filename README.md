# Weather App
This is a web application that shows the upcoming weather for a specific location. The user can type in a city in the search bar and press
enter to see the upcoming weather for the city. If the user accepts to provide geolocation information and then refreshes the browser, clicking on the "Current Location" button under the search bar will show the upcoming weather for the device's current location. If the user
does not allow for access to the current location, clicking on the button will do nothing and only the search bar will be available.

Link to demo video: https://www.loom.com/share/da3a161c127d48b3a5862dad6c0a9091

## How to Run App
If Node.js and npm are not installed, to be able to run the app, they should be installed. To install npm, the command "npm install"
can be used in the terminal. Also, Axios needs to be installed if it is not already. To install, cd into the weather-app directory, and type "npm install axios" in the terminal. Finally, to open a browser to see the app, cd into the weather-app directory and type "npm start" in the terminal. A browser should open showing the app.

Helpful Sources:
* https://nodejs.org/en/download/
* https://docs.npmjs.com/cli/v6/commands

## Assumptions Made
The instructions did not say what timezone the times should be in, so I decided to display the times in Coordinated Universal Time (UTC). Also, the instructions did not specify that the high and low temperatures of each day should be shown, so I decided to show the temperature at the specified time of the day. The instructions states that the app should show the upcoming weather. The first forecast is the upcoming weather closest to the current time, and the second is the weather on the next day at the same time, and the third forecast is the
weather on the day after next at the same time. In addition, the instructions did not discuss the type of units for the weather forecast, so I 
decided to display the data in Imperial units.



