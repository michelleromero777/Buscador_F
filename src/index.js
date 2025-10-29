import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { highlightAndCount, replaceAll } from './buscar.js';
//import '../public/css/buscar.css'; 

const searchInput = document.getElementById('searchInput');
const replaceInput = document.getElementById('replaceInput');
const searchBtn = document.getElementById('searchBtn');
const replaceBtn = document.getElementById('replaceBtn');
const textArea = document.getElementById('textArea');
const countSpan = document.getElementById('count');
const highlightedText = document.getElementById('highlightedText');
const successMessage = document.getElementById('successMessage');

let currentCount = 0;

function showSuccessMessage(count) {
    successMessage.innerHTML = `<strong>✓ Éxito:</strong> Se reemplazaron ${count} ocurrencia${count !== 1 ? 's' : ''}.`;
    successMessage.className = 'success-message';
    
    setTimeout(() => {
        successMessage.innerHTML = '';
        successMessage.className = '';
    }, 3000);
}

function performSearch() {
    const searchTerm = searchInput.value;
    const text = textArea.value;

    if (!text.trim()) {
        highlightedText.innerHTML = '<p style="color: #999;">Ingresa un texto para buscar</p>';
        countSpan.textContent = '0';
        replaceBtn.disabled = true;
        currentCount = 0;
        return;
    }

    const { highlighted, count } = highlightAndCount(text, searchTerm);
    
    currentCount = count;
    countSpan.textContent = count;
    highlightedText.innerHTML = highlighted || '<p style="color: #999;">No hay texto que mostrar</p>';
    
    replaceBtn.disabled = count === 0 || !searchInput.value.trim();
}

function performReplace() {
    const searchTerm = searchInput.value;
    const replaceTerm = replaceInput.value;
    const text = textArea.value;

    if (!searchTerm.trim() || !text.trim()) {
        return;
    }

    const newText = replaceAll(text, searchTerm, replaceTerm);
    const replacedCount = currentCount;
    
    textArea.value = newText;
    
    showSuccessMessage(replacedCount);
    
    searchInput.value = '';
    replaceInput.value = '';
    countSpan.textContent = '0';
    highlightedText.innerHTML = newText || '<p style="color: #999;">No hay texto que mostrar</p>';
    replaceBtn.disabled = true;
    currentCount = 0;
}

searchBtn.addEventListener('click', performSearch);
replaceBtn.addEventListener('click', performReplace);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

replaceInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !replaceBtn.disabled) {
        performReplace();
    }
});

textArea.addEventListener('input', () => {
    if (searchInput.value.trim()) {
        performSearch();
    }
});

searchInput.addEventListener('input', () => {
    if (textArea.value.trim()) {
        performSearch();
    }
});