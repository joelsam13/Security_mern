// app.js

// Create the main wrapper div
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

// Create the form wrapper
const r_form_wrap = document.createElement('div');
r_form_wrap.className = 'r_form_wrap';

// Create the title section
const title = document.createElement('div');
title.className = 'title';
const titleText = document.createElement('p');
titleText.innerText = 'Registration Form';
title.appendChild(titleText);

// Create the form section
const r_form = document.createElement('div');
r_form.className = 'r_form';
const form = document.createElement('form');

// Function to create input fields
function createInput(labelText, inputType, inputId, iconName) {
    const input_wrap = document.createElement('div');
    input_wrap.className = 'input_wrap';

    const label = document.createElement('label');
    label.setAttribute('for', inputId);
    label.innerText = labelText;

    const input_item = document.createElement('div');
    input_item.className = 'input_item';

    // Only create an icon if an icon name is provided
    if (iconName) {
        const iconSpan = document.createElement('span');
        iconSpan.className = 'icon';
        const ionIcon = document.createElement('ion-icon');
        ionIcon.setAttribute('name', iconName);
        iconSpan.appendChild(ionIcon);
        input_item.appendChild(iconSpan);
    }

    const inputField = document.createElement('input');
    inputField.type = inputType;
    inputField.name = labelText.toLowerCase().replace(/\s+/g, '_'); // Replacing spaces with underscores
    inputField.className = 'input';
    inputField.id = inputId;

    input_item.appendChild(inputField);
    
    input_wrap.appendChild(label);
    input_wrap.appendChild(input_item);

    return input_wrap;
}

// Add inputs to the form
form.appendChild(createInput('Your Name', 'text', 'yourname', 'person-sharp'));
form.appendChild(createInput('Username', 'text', 'username', 'person-sharp')); // Username field
form.appendChild(createInput('Password', 'password', 'password', 'key-sharp'));
form.appendChild(createInput('Confirm Password', 'password', 'confirmpassword', 'key-sharp'));

// Gender selection
const genderWrap = document.createElement('div');
genderWrap.className = 'input_wrap';
const genderLabel = document.createElement('label');
genderLabel.innerText = 'Gender';
genderWrap.appendChild(genderLabel);

const genderDiv = document.createElement('div');
genderDiv.className = 'input_radio';

['male', 'female', 'others'].forEach(gender => {
    const radioItem = document.createElement('div');
    radioItem.className = 'input_radio_item';

    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.id = gender;
    radioInput.name = 'gender';
    radioInput.className = 'radio';
    radioInput.value = gender;

    const radioLabel = document.createElement('label');
    radioLabel.setAttribute('for', gender);
    radioLabel.className = 'radio_mark';

    const radioIcon = document.createElement('ion-icon');
    radioIcon.className = "i";
    
    if (gender === "male") {
        radioIcon.setAttribute("name", "male-sharp");
        radioLabel.innerText = "Male";
    } else if (gender === "female") {
        radioIcon.setAttribute("name", "female-sharp");
        radioLabel.innerText = "Female";
    } else {
        radioIcon.setAttribute("name", "male-female-sharp");
        radioLabel.innerText = "Others";
    }

    radioLabel.prepend(radioIcon);
    
    radioItem.appendChild(radioInput);
    radioItem.appendChild(radioLabel);
    
    genderDiv.appendChild(radioItem);
});

genderWrap.appendChild(genderDiv);
form.appendChild(genderWrap);

// Register button
const button = document.createElement('button');
button.type = 'button'; // Prevent default form submission
button.innerText = 'Register Now';
button.addEventListener('click', () => {
   // Display success message in an alert box
   alert("Successfully Registered");

   // Clear form fields
   form.reset();
});
form.appendChild(button);

// Append everything to the main wrapper
r_form.appendChild(form);
r_form_wrap.appendChild(title);
r_form_wrap.appendChild(r_form);
wrapper.appendChild(r_form_wrap);

// Append the wrapper to the body
document.body.appendChild(wrapper);

// Load Ionicons script dynamically
const scriptTag = document.createElement('script');
scriptTag.type = "module";
scriptTag.src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
document.body.appendChild(scriptTag);