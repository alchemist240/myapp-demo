document.getElementById('clickBtn').addEventListener('click', () => {
    const output = document.getElementById('output');
    const currentTime = new Date().toLocaleTimeString();
    output.textContent = `Button clicked at ${currentTime}`;
});

// Adding some dynamic styling
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33'];
let i = 0;
setInterval(() => {
    document.body.style.backgroundColor = colors[i % colors.length];
    i++;
}, 5000);

// Simple JS function
function greetUser(name) {
    return `Hello, ${name}! Welcome to MyApp Demo.`;
}

console.log(greetUser("Kshitij"));

// Demo array & loop
const items = ['DevOps', 'Docker', 'Kubernetes', 'Jenkins', 'Prometheus'];
items.forEach(item => console.log(`Learning: ${item}`));

// Basic form validation
const form = document.createElement('form');
form.innerHTML = `
<input type="text" id="username" placeholder="Enter your name" required>
<button type="submit">Submit</button>
<p id="formOutput"></p>
`;
document.body.appendChild(form);

form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('username').value;
    document.getElementById('formOutput').textContent = `Hello ${name}, form submitted successfully!`;
});
