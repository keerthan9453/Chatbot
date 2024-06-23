const userInput = document.getElementById('userInput');
const chatbox = document.getElementById('chatbox');

function sendQuery() {
    const query = userInput.value;

    // Make a request to the backend API endpoint
    fetch('/api/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: query })
    })
    .then(response => response.json())
    .then(data => {
        // Display the chatbot's response in the chatbox
        chatbox.innerHTML += `<p>${data.response}</p>`;
        userInput.value = '';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
