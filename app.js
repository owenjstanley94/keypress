const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    console.log = (event);
    const { key, keyCode, code } = event;

    insert.innerHTML = `
        <div class="key">
            ${event.key === ' ' ? 'Space' : key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key">
            ${code}
            <small>event.code</small>
        </div>
    `;
});