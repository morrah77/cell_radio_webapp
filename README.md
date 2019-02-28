#Cell Radio Web Application

##Prerequisites

For development requires at least node 10.0.0, npm 6.8.0, angular-cli 7.3.3

##Prepare
Fulfill environment/environment.prod.ts with correct Google Maps API key (optional) and server URL to connect websocket

##Build

ng build --prod

TODO fix Dockerfile

##Run

###Manually

 - Run backend (see see [https://github.com/morrah77/cell_radio_backend](https://github.com/morrah77/cell_radio_backend))
 
Then:
 
 - `docker run --rm -d -p 4201:80 --name cell_radio_webapp -v `pwd`/dist/webapp:/usr/share/nginx/html:ro nginx` (assumes backend listen websockets at `localhost:9091/ws/lastpoints`)
 
 - open [http://localhost:4201](http://localhost:4201) in your browser
 
or

 - `ng serve` (development mode, see Prerequisites section; no need to build; assumes backend listen websockets at `localhost:8081/ws/lastpoints`)
 
 - open [http://localhost:4200](http://localhost:4200) in your browser
 
or

 - setup your local nginx to serve `./dist` directory
 
 - open appropriate URL in your browser


###Automatically

TODO: fix [https://github.com/morrah77/cell_radio_deploy](https://github.com/morrah77/cell_radio_deploy)


##Test

###Automatically

`ng test`

TODO: write some real tests

###Manually

Send appropriate HTTP requests to backend, see changes in map marker position and SNR/RSSI values 

Example:

```
curl -iv http://localhost:8080/ht/addmany -X POST -d '{"DftrxId":"dftrx0", "Config":{"RxGain":19, "Network":0, "2g_params":{"Arfcn":540, "Ulsc":65, "Dlsc":2}, "3g_params":{"Arfcn":10788, "Ulsc":8758542, "Dlsc":369}, "4g_params":{"Arfcn":1400, "Ulsc":5, "Dlsc":0}, "Alpha":0.017, "Slot":"0", "Celltrack":0, "Watcher":0, "Antenna":0, "GpsSrc":1, "Version":2, "App":1, "GsmMode":1, "Url":"http://localhost:8081/addmany", "Sound":1.000}, "State":{"DlMode":0, "Tune":"ul", "SignalFound":0, "Hsdpa":0, "Standard":"DCS", "Usrp":1, "Capabilities":16678719, "Expiration":1607713200000, "Compression":1, "Error":0, "Remote":0}, "GpsExt":{"Status":0, "Lat":32.0967, "Lon":34.8463, "Alt":52.6, "TS":138}, "Compass":{"Hdg":0.0, "FitErr":""}, "Timestamp":0, "Points":[{"Id":552,"SettingsVersion":0,"Channel":65,"SNR":36.2,"Angles":[{"TSi":139, "TSf":0.259143384615, "RSSI_m":-28.3, "RSSI_s":0.0, "SNR_m":35.9, "SNR_s":0.0, "Master":1, "An":0.00, "Phase":0.00, "Visible":1, "Int_m":-3.54462, "Int_s":0.00000, "Int":-3.54462, "Ant":0, "RxGain":19, "V":1},{"TSi":139, "TSf":0.263758769231, "RSSI_m":-28.3, "RSSI_s":0.0, "SNR_m":37.4, "SNR_s":0.0, "Master":1, "An":0.00, "Phase":0.00, "Visible":1, "Int_m":-3.61846, "Int_s":0.00000, "Int":-3.61846, "Ant":0, "RxGain":19, "V":1},{"TSi":139, "TSf":0.268374153846, "RSSI_m":-28.4, "RSSI_s":0.0, "SNR_m":35.9, "SNR_s":0.0, "Master":1, "An":0.00, "Phase":0.00, "Visible":1, "Int_m":-3.54462, "Int_s":0.00000, "Int":-3.54462, "Ant":0, "RxGain":19, "V":1},{"TSi":139, "TSf":0.342220307692, "RSSI_m":-28.3, "RSSI_s":0.0, "SNR_m":37.4, "SNR_s":0.0, "Master":1, "An":0.00, "Phase":0.00, "Visible":1, "Int_m":-3.61846, "Int_s":0.00000, "Int":-3.61846, "Ant":0, "RxGain":19, "V":1},{"TSi":139, "TSf":0.346835692308, "RSSI_m":-28.3, "RSSI_s":0.0, "SNR_m":40.5, "SNR_s":0.0, "Master":1, "An":0.00, "Phase":0.00, "Visible":1, "Int_m":-3.61846, "Int_s":0.00000, "Int":-3.61846, "Ant":0, "RxGain":19, "V":1},{"TSi":139, "TSf":0.351451076923, "RSSI_m":-28.3, "RSSI_s":0.0, "SNR_m":33.2, "SNR_s":0.0, "Master":1, "An":0.00, "Phase":0.00, "Visible":1, "Int_m":-3.61846, "Int_s":0.00000, "Int":-3.61846, "Ant":0, "RxGain":19, "V":1}],"RSSI":-24.3,"Angle2a":0.0,"Antenna2a":22652576,"Compression":1,"Antenna":22652576,"TSi":139,"TSf":0.351451076923,"Clocks":[0, 0, 1536665497356427, 1536665497398082]},{"Id":553,"SettingsVersion":0,"Channel":65,"SNR":30.2,"Angles":[{"TSi":139, "TSf":0.259143384615, "RSSI_m":-28.3, "RSSI_s":0.0, "SNR_m":35.9, "SNR_s":0.0, "Master":1, "An":0.00, "Phase":0.00, "Visible":1, "Int_m":-3.54462, "Int_s":0.00000, "Int":-3.54462, "Ant":0, "RxGain":19, "V":1},{"TSi":139, "TSf":0.263758769231, "RSSI_m":-28.3, "RSSI_s":0.0, "SNR_m":37.4, "SNR_s":0.0, "Master":1, "An":0.00, "Phase":0.00, "Visible":1, "Int_m":-3.61846, "Int_s":0.00000, "Int":-3.61846, "Ant":0, "RxGain":19, "V":1},{"TSi":139, "TSf":0.268374153846, "RSSI_m":-28.4, "RSSI_s":0.0, "SNR_m":35.9, "SNR_s":0.0, "Master":1, "An":0.00, "Phase":0.00, "Visible":1, "Int_m":-3.54462, "Int_s":0.00000, "Int":-3.54462, "Ant":0, "RxGain":19, "V":1},{"TSi":139, "TSf":0.342220307692, "RSSI_m":-28.3, "RSSI_s":0.0, "SNR_m":37.4, "SNR_s":0.0, "Master":1, "An":0.00, "Phase":0.00, "Visible":1, "Int_m":-3.61846, "Int_s":0.00000, "Int":-3.61846, "Ant":0, "RxGain":19, "V":1},{"TSi":139, "TSf":0.346835692308, "RSSI_m":-28.3, "RSSI_s":0.0, "SNR_m":40.5, "SNR_s":0.0, "Master":1, "An":0.00, "Phase":0.00, "Visible":1, "Int_m":-3.61846, "Int_s":0.00000, "Int":-3.61846, "Ant":0, "RxGain":19, "V":1},{"TSi":139, "TSf":0.351451076923, "RSSI_m":-28.3, "RSSI_s":0.0, "SNR_m":33.2, "SNR_s":0.0, "Master":1, "An":0.00, "Phase":0.00, "Visible":1, "Int_m":-3.61846, "Int_s":0.00000, "Int":-3.61846, "Ant":0, "RxGain":19, "V":1}],"RSSI":-21.3,"Angle2a":0.0,"Antenna2a":22652576,"Compression":1,"Antenna":22652576,"TSi":139,"TSf":0.351451076923,"Clocks":[0, 0, 1536665497356427, 1536665497398082]}]}'
```

#Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



