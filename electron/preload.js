const dependencies = ['chrome', 'electron', 'node'];

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (id, text) => {
        const element = document.getElementById(id);

        if(element) {
            element.innerText = text;
        }
    };

    dependencies.forEach(dependency => {
        replaceText(`${dependency}-version`, process.versions[dependency]);
    });
});