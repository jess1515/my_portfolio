const greetingText = document.getElementById('greeting-text');
const originalText = greetingText.innerText;

greetingText.addEventListener('mouseover', () => {
    greetingText.innerText = 'I am Jessica';
});

greetingText.addEventListener('mouseout', () => {
    greetingText.innerText = originalText;
});
