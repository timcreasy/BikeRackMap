# BikeRackMap

### Showing all bike racks in the greater Nashville area

Utilizing [Nashville's Open Data](https://data.nashville.gov/) and [Google Maps API](https://developers.google.com/maps/documentation/javascript/), this tool plots out each bike rack location in the greater Nashville area.

### To Run:

1. Follow the instructions in Google Maps API Documentation to [register for a key](https://developers.google.com/maps/documentation/javascript/get-api-key).

    ##### In index.html , add your Google Maps API key to line 12:
    ```
    <script src="https://maps.googleapis.com/maps/api/js?key=[YOUR_API_KEY]"></script>
    ```

1. Follow the instructions [here](https://dev.socrata.com/register) to register for an application token to use the SODA API.
    ##### In js/bikePaths.js, add your application token to line 61:
    ```
    xmlhttp.open('GET', "https://data.nashville.gov/resource/yjju-hypq.json?$$app_token=[YOUR_APP_TOKEN]");
    ```
1. Run! Using the server of your choice! [http-server](https://www.npmjs.com/package/http-server) is an easy, lightweight option, which can be installed in seconds.
