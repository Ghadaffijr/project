<script>
  // Function to send a message
  function sendMessage() {
    const chatContainer = document.getElementById('chatContainer');
    const chatInput = document.getElementById('chatInput');
    const messageText = chatInput.value.trim();

    if (messageText !== '') {
      // Create a new message element
      const message = document.createElement('div');
      message.classList.add('message', 'sender');
      message.textContent = messageText;

      // Append the message to the chat container
      chatContainer.appendChild(message);

      // Scroll to the bottom
      chatContainer.scrollTop = chatContainer.scrollHeight;

      // Clear the input field
      chatInput.value = '';

      // Simulate a response
      setTimeout(() => generateResponse(messageText), 1000);
    }
  }

  // Function to simulate a response
  function generateResponse(userMessage) {
    const chatContainer = document.getElementById('chatContainer');
    const responses = [
      'Interesting!',
      'Can you tell me more?',
      'I agree with that.',
      'That sounds amazing!',
      'I didn’t know that, thanks for sharing!'
    ];

    // Create a new response message
    const response = document.createElement('div');
    response.classList.add('message', 'receiver');
    response.textContent = responses[Math.floor(Math.random() * responses.length)];

    // Append the response to the chat container
    chatContainer.appendChild(response);

    // Scroll to the bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }