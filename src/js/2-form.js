const form = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};
checkLocalStorage();

function checkLocalStorage() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  for (const key in savedData) {
    const dataValue = savedData[key];
    if (dataValue !== '') {
      // console.log(form.elements[key].value);
      form.elements[key].value = dataValue;
      formData[key] = dataValue;
    }
  }
}

form.addEventListener('input', ev => {
  formData[ev.target.name] = ev.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', ev => {
  ev.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  }
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
