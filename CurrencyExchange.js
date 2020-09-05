document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {

        // Send a GET request 
        fetch('https://api.exchangeratesapi.io/latest?base=INR')
        // Put response into json form

        .then(response => response.json())
        .then(data => {
            // Get currency from user input
            const currency = document.querySelector('#currency').value.toUpperCase();

            // Get rate from data
            const rate = data.rates[currency];

            const time = data.date;

            // Check if currency is valid:
            if (rate !== undefined) {
                
                document.querySelector('#result').innerHTML = `1 INR is equal to ${rate.toFixed(3)} ${currency}.`;
                document.querySelector('#time'). innerHTML = `>>Last updated on : ${time} <<`;
            }
            else {
                
                document.querySelector('#result').innerHTML = 'Invalid Currency.';
            }
        })
        // Catch any errors and log them to the console
        .catch(error => {
            console.log('Error:', error);
        });
        // Prevent default submission
        return false;
    }
});