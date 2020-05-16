window.addEventListener('DOMContentLoaded', () => {
    const child = document.createElement('div');
    child.textContent = 'This is the preload!';
    document.body.appendChild(child);

    const replaceText = function (selector: string, text: string) {
        const element = document.getElementById(selector);
        if (element) {
            element.innerText = text;
        }
    };

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(type + '-version', (process.versions as any)[type]);
    }
});
