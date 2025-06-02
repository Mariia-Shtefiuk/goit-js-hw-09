const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const storageKey = 'feedback-form-state';

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
});

const savedData = localStorage.getItem(storageKey);
if (savedData) {
  formData = JSON.parse(savedData);
  form.email.value = formData.email || '';
  form.message.value = formData.message || '';
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  form.reset();
  formData = { email: '', message: '' };
  localStorage.removeItem(storageKey);
});
