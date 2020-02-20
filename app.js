const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    console.log = (event);
    const { key, keyCode, code } = event;

    insert.innerHTML = `
        <div class="key">
            // ${event.key === ' ' ? 'Space' : key} /* if empty string is returned, return 'Space' instead (this is a fix for the spacebar not) */
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