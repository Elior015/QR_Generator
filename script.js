//Colors 

// Get the main color picker and the color value 
const mainColorPicker = document.querySelector('#color')
const mainColorValue = document.querySelector('#color-value')

// Get the background color picker and the background color value
const backgroundColorPicker = document.querySelector('#bg-color')
const backgroundColorValue = document.querySelector('#bg-color-value')

// Update the main color value when the color picker changes
const updateColor = e => {
    const value = e.target.value;
    mainColorValue.innerText = value;
};

// Update the background color value when the color picker changes
const updateBackgroundColor = e => {
    const value = e.target.value;
    backgroundColorValue.innerText = value;
};

// Add event listeners to the color pickers
const addColorPickerListeners = () => {
    mainColorPicker.addEventListener('change', updateColor);
    backgroundColorPicker.addEventListener('change', updateBackgroundColor);
};

addColorPickerListeners();

// Sliders

// Get the size value
const sizeSlider = document.querySelector('#size');
const sizeValue = document.querySelector('#size-value');

// Get the margin value
const marginSlider = document.querySelector('#margin');
const marginValue = document.querySelector('#margin-value');

// Update the size value when the size slider changes
const updateSize = e => {
    const value = e.target.value;
    sizeValue = value;
};

// Update the margin value when the margin slider changes
const updateMargin = e => {
    const value = e.target.value;
    marginValue = value;
};

// Add event listeners to the sliders
const addSliderListeners = () => {
    sizeSlider.addEventListener('change', updateSize);
    marginSlider.addEventListener('change', updateMargin);
};

addSliderListeners();

// User Preferences 

// URL / Text
const dataInput = document.querySelector('#data');
// Format
const imagForamt = document.querySelector('input[name="format"]:checked');
// Button
const submitButton = document.querySelector('#cta');













