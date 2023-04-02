const url = 'https://22a8-34-82-33-42.ngrok.io/ret/' + encodeURIComponent('Chicken Kadai');

const first_input = document.getElementById("first_input")

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Do something with the data here
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
