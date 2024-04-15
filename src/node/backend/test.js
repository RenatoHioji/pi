fetch('http://localhost:3000/api/alarme/661da1313c7f42f828fd9888')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
