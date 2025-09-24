const backgroundColorInput = document.getElementById('background-color');
const textColorInput = document.getElementById('text-color');
const previewArea = document.getElementById('preview-area');
const saveButton = document.getElementById('save-theme');

backgroundColorInput.addEventListener('input', updatePreview);
textColorInput.addEventListener('input', updatePreview);

let isThemeSaved = false;

function updatePreview() {
    const backgroundColor = backgroundColorInput.value;
    const textColor = textColorInput.value;
    previewArea.style.backgroundColor = backgroundColor;
    previewArea.style.color = textColor;
}

saveButton.addEventListener('click', () => {
    if (!isThemeSaved) {
        const theme = {
            backgroundColor: backgroundColorInput.value,
            textColor: textColorInput.value
        }; 
        console.log('Theme saved:', theme);
        alert('Theme has been saved!');
        isThemeSaved = true;
    } else {
        alert('Theme has already been saved!');
    }
});