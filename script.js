//Colors 

// Get the main color picker and the color value 
const mainColorPicker = document.querySelector('#color');
const mainColorValue = document.querySelector('#color-value');

// Get the background color picker and the background color value
const backgroundColorPicker = document.querySelector('#bg-color');
const backgroundColorValue = document.querySelector('#bg-color-value');

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

// Call the function
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
    sizeValue.innerText = `${value} x ${value}`;
};

// Update the margin value when the margin slider changes
const updateMargin = e => {
    const value = e.target.value;
    marginValue.innerText = `${value} px`;
};

// Add event listeners to the sliders
const addSliderListeners = () => {
    sizeSlider.addEventListener('change', updateSize);
    marginSlider.addEventListener('change', updateMargin);
};

// Call the function
addSliderListeners();

// User Preferences 

// URL / Text
const dataInput = document.querySelector('#data');
// Format
const imageForamt = document.querySelector('input[name="format"]:checked');
// Button
const submitButton = document.querySelector('#cta');

// Return the user preferences for the QR code as the API expects them
const prepareParameters = params => {
    const prepared = {
        data: params.data,
        size: `${params.size}x${params.size}`,
        color: params.color.replace('#', ''),
        bgColor: params.bgColor.replace('#', ''),
        qzone: params.qZone,
        format: params.format,
    };

    return prepared;
};

// Setting Container
const settingsContainer = document.querySelector('#qr-code-settings');
// QR Code Container
const resultsContainer = document.querySelector('#qr-code-result');
// QR Code Image
const qrCodeImage = document.querySelector('#qr-code-image');

// Show the QR code
const displayQrCode = imgUrl => {
    settingsContainer.classList.add('flipped'); // Hide the settings
    resultsContainer.classList.add('flipped'); // Show the QR code

    qrCodeImage.setAttribute('src', imgUrl); // Set the image source
};

// API Call

const getQrCode = parameters => {
    const baseUrl = 'https://api.qrserver.com/v1/create-qr-code/'; // API URL
    const urlParams = new URLSearchParams(parameters).toString(); // Convert the parameters to a string that can be used in the URL API

    const fullUrl = `${baseUrl}?${urlParams}`; // Combine the API URL and the parameters for the API call

    fetch(fullUrl).then(response => { // Fetch the API with the full URL
        if (response.status === 200) { // If the response is OK
            displayQrCode(fullUrl); // Call the display QR code function
        }
    });
};

// Input error
const inputError = () => {
    dataInput.classList.add('error'); // Add the error class to the input
};

const dataInputListener = () => {
    dataInput.addEventListener('change', e => {
        if (e.target.value !== '') { // If the input is not equal to 0
            dataInput.classList.remove('error'); // Remove the error class from the input
            submitButton.removeAttribute('disabled'); // Enable the submit button
        } else {
            dataInput.classList.add('error'); // Add the error class to the input
            submitButton.setAttribute('disabled', true); // Disable the submit button
        }
    });
};

// Call the function
dataInputListener();

// Submit the form
const onSubmit = () => {
    const data = dataInput.value; 
    if (!data.length){ // If the input is equal to 0
        return inputError(); // call the input error function
    }

    // Put the user preferences in variables that going to be used in the API call
    const color = mainColorPicker.value;
    const bgColor = backgroundColorPicker.value;
    const size = sizeSlider.value;
    const qZone = marginSlider.value;
    const format = document.querySelector('input[name="format"]:checked').value;

    const parameters = prepareParameters({ data, color, bgColor, size, qZone, format }); // Prepare the parameters for the API call

    getQrCode(parameters); // Call the API
};

// Add event listener to the submit button
const addSubmitListener = () => {
    submitButton.addEventListener('click', onSubmit);
};

// Call the function
addSubmitListener();

const editButton = document.querySelector('#edit');

// Edit again the QR code
const onEdit = () => {
    settingsContainer.classList.remove('flipped'); // Show the settings
    resultsContainer.classList.remove('flipped'); // Hide the QR code
};

// Add event listener to the edit button
function addEditEventListener() {
    editButton.addEventListener('click', onEdit);
}

// Call the function
addEditEventListener();











