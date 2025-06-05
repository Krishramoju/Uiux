document.getElementById('userInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const input = this.value.trim();
    if (input) {
      const chatbox = document.getElementById('chatbox');
      chatbox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
      chatbox.innerHTML += `<p><strong>Cortex:</strong> I’ve added "${input}" to your timeline.</p>`;
      
      const timeline = document.getElementById('timeline-list');
      const li = document.createElement('li');
      li.textContent = input;
      timeline.appendChild(li);

      this.value = '';
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  }
});

function toggleTheme() {
  const root = document.documentElement;
  if (root.style.getPropertyValue('--bg-color') === '#ffffff') {
    root.style.setProperty('--bg-color', '#0f0f1f');
    root.style.setProperty('--text-color', '#ffffff');
  } else {
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
  }
}
