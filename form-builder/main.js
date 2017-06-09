var pageBody = document.querySelector('body');
var pageHeader = document.createElement('header');
var pageFooter = document.createElement('footer');

var formContainer = document.createElement('div');
formContainer.className = 'formContainer';

var formHeader = document.createElement('div');
formHeader.className = 'formHeader';
var headerText = document.createElement('h1');
var formH1 = document.createTextNode('Sign Up For My Web App');
headerText.appendChild(formH1);
formHeader.appendChild(headerText);

var formContent = document.createElement('div');
formContent.className = 'formContent';

var formFooter = document.createElement('div');
formFooter.className = 'formFooter';
var formButton = document.createElement('button');
formFooter.appendChild(formButton);

pageBody.appendChild(pageHeader);
pageBody.appendChild(formContainer);
    formContainer.appendChild(formHeader);
    formContainer.appendChild(formContent);
    formContainer.appendChild(formFooter);
pageBody.appendChild(pageFooter);
    

for (var i = 0; i < formData.length; i++) {

    var control = formData[i];

    var options = control.options;

    var label = document.createElement('label');
    label.setAttribute('for', control.id);
    formContainer.appendChild(label);

    var input = document.createElement('input');
    input.setAttribute('type', control.type);
    input.setAttribute('label', control.label);
    input.setAttribute('placeholder', control.label);
    input.setAttribute('id', control.id);
    input.setAttribute('icon', control.icon);

    var select = document.createElement('select')
    select.setAttribute('type', control.type);
    select.setAttribute('label', control.label);
    select.setAttribute('id', control.id);

    var textArea = document.createElement('textarea');
    textArea.setAttribute('type', control.type);
    textArea.setAttribute('label', control.label);
    textArea.setAttribute('placeholder', control.label);
    textArea.setAttribute('id', control.id);
    textArea.setAttribute('icon', control.icon);

    if (control.type === 'textarea') {

        formContent.appendChild(textArea);

    } else if (control.type === 'select') {

        formContent.appendChild(select);

        for (x = 0; x < options.length; x++) {

            var selectOptions = document.createElement('option');
            selectOptions.setAttribute('label', options[x].label);
            selectOptions.setAttribute('value', options[x].value);
            select.appendChild(selectOptions);

        }

    } else {

        formContent.appendChild(input);

    }

}
