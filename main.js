const fetchWeather = async () => {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Dhaka';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd0c7888f59msh3dbf0f94457204ap1d36c5jsnc78d818f8bdd',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);

        // Ensure these variables refer to DOM elements
        const country = document.getElementById('country');
        const localtime = document.getElementById('localtime');
        const name = document.getElementById('name');
        const humidity = document.getElementById('humidity');
        const temp_c = document.getElementById('temp_c');
        const feelslike_c = document.getElementById('feelslike_c');
        const uv = document.getElementById('uv');
        const wind_kph = document.getElementById('wind_kph');
        const pressure_mb = document.getElementById('pressure_mb');

        
        // Access the data correctly from the result object
        country.innerHTML = result.location.country;
        localtime.innerHTML = result.location.localtime;
        name.innerHTML = result.location.name;
        humidity.innerHTML = result.current.humidity;
        temp_c.innerHTML = result.current.temp_c;
        feelslike_c.innerHTML = result.current.feelslike_c;
        uv.innerHTML = result.current.uv;
        wind_kph.innerHTML = result.current.wind_kph;
        pressure_mb.innerHTML = result.current.pressure_mb;

    } catch (error) {
        console.error('Error:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
    }
};

fetchWeather();
