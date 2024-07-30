


document.getElementById('add-experience').addEventListener('click', function() {
    const template = document.getElementById('experience-form-template');
    const closeBtn = document.getElementById('close');
    closeBtn.classList.remove('hidden-button')
    template.classList.remove('hidden');
    template.classList.add('fade-in');
});

document.getElementById('close').addEventListener('click', function() {
    const template = document.getElementById('experience-form-template');
    const closeBtn = document.getElementById('close');
    closeBtn.classList.add('hidden-button')
    template.classList.add('hidden');
    template.classList.add('fade-in1');
});

document.getElementById('save-experience').addEventListener('click', function() {
    const template = document.getElementById('experience-form-template');
    const closeBtn = document.getElementById('close');
    
    
    const company = template.querySelector('input[name="company"]').value;
    const role = template.querySelector('input[name="role"]').value;
    const startDate = template.querySelector('input[name="start-date"]').value;
    const endDate = template.querySelector('input[name="end-date"]').value;

    const experienceSection = document.getElementById('experience-section');

    const experienceForm = document.createElement('div');
    experienceForm.classList.add('experience-form');

    experienceForm.innerHTML = `
        <div class="inputs">
        <div class="second-input">
            <label for="company">Company:</label>
            <input type="text" name="company" value="${company}" readonly>
        </div>
        <div class="second-input">
            <label for="role">Role:</label>
            <input type="text" name="role" value="${role}" readonly>
        </div>
        <div class="second-input">
            <label for="start-date">Start Date:</label>
            <input type="date" name="start-date" value="${startDate}" readonly>
        </div>
        <div class="second-input">
            <label for="end-date">End Date:</label>
            <input type="date" name="end-date" value="${endDate}" readonly>
        </div>
        </div>
        <div class="delete">
            <button type="button" class="delete-experience">Delete</button>
        </div>
    `;

    experienceForm.querySelector('.delete-experience').addEventListener('click', function() {
        experienceSection.removeChild(experienceForm);
    });

    experienceSection.appendChild(experienceForm);

    template.classList.add('hidden');
    template.classList.remove('fade-in');
    closeBtn.classList.add('hidden-button')

    template.querySelector('input[name="company"]').value = '';
    template.querySelector('input[name="role"]').value = '';
    template.querySelector('input[name="start-date"]').value = '';
    template.querySelector('input[name="end-date"]').value = '';
});

//EDUCATION 

document.getElementById('add-education').addEventListener('click', function() {
    const templateEdu = document.getElementById('education-form-template');
    const closeBtnEdu = document.getElementById('close-education');
    closeBtnEdu.classList.remove('hidden-buttonEdu')
    templateEdu.classList.remove('hiddenEdu');
    templateEdu.classList.add('fade-in');
});

document.getElementById('close-education').addEventListener('click', function() {
    const templateEdu = document.getElementById('education-form-template');
    const closeBtnEdu = document.getElementById('close-education');
    closeBtnEdu.classList.add('hidden-buttonEdu')
    templateEdu.classList.add('hiddenEdu');
    templateEdu.classList.add('fade-in1');
});

document.getElementById('save-education').addEventListener('click', function() {
    const templateEdu = document.getElementById('education-form-template');
    const closeBtnEdu = document.getElementById('close-education');
    
    
    const institution = templateEdu.querySelector('input[name="institution"]').value;
    const degree = templateEdu.querySelector('input[name="degree"]').value;
    const startDate = templateEdu.querySelector('input[name="start-date"]').value;
    const endDate = templateEdu.querySelector('input[name="end-date"]').value;

    const educationSection = document.getElementById('education-section');

    const educationForm = document.createElement('div');
    educationForm.classList.add('education-form');

    educationForm.innerHTML = `
        <div class="inputs">
        <div class="third-input">
            <label for="institution">Institution:</label>
            <input type="text" name="institution" value="${institution}" readonly>
        </div>
        <div class="third-input">
            <label for="degree">Degree:</label>
            <input type="text" name="degree" value="${degree}" readonly>
        </div>
        <div class="third-input">
            <label for="start-date">Start Date:</label>
            <input type="date" name="start-date" value="${startDate}" readonly>
        </div>
        <div class="third-input">
            <label for="end-date">End Date:</label>
            <input type="date" name="end-date" value="${endDate}" readonly>
        </div>
        </div>
        <div class="delete">
            <button type="button" class="delete-education">Delete</button>
        </div>

    `;

    educationForm.querySelector('.delete-education').addEventListener('click', function() {
        educationSection.removeChild(educationForm);
    });

    educationSection.appendChild(educationForm);

    templateEdu.classList.add('hiddenEdu');
    templateEdu.classList.remove('fade-in');
    closeBtnEdu.classList.add('hidden-buttonEdu')

    templateEdu.querySelector('input[name="institution"]').value = '';
    templateEdu.querySelector('input[name="degree"]').value = '';
    templateEdu.querySelector('input[name="start-date"]').value = '';
    templateEdu.querySelector('input[name="end-date"]').value = '';
});


document.getElementById('job-application-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    alert('The application has been sent');
});


const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('cv');
const deleteCvButton = document.getElementById('delete-cv');

dropZone.addEventListener('click', () => fileInput.click());

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));

dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropZone.classList.remove('dragover');

    if (event.dataTransfer.files.length) {
        fileInput.files = event.dataTransfer.files;
        const fileName = fileInput.files[0].name;
        dropZone.querySelector('p').textContent = `Selected file: ${fileName}`;
        deleteCvButton.classList.remove('hidden');
    }
});

fileInput.addEventListener('change', () => {
    if (fileInput.files.length) {
        const fileName = fileInput.files[0].name;
        dropZone.querySelector('p').textContent = `Selected file: ${fileName}`;
        deleteCvButton.classList.remove('hidden');
    }
});

deleteCvButton.addEventListener('click', () => {
    fileInput.value = '';
    dropZone.querySelector('p').textContent = 'Drag and drop your file here, or click to select a file';
    deleteCvButton.classList.add('hidden');
});