const message = (bodyText, titleText) => {
  const display = document.querySelector('#message');
  const title = document.querySelector('#message h3.title');
  const body = document.querySelector('#message p.body');
  const closeButton = document.querySelector('#close');

  title.innerHTML = titleText;
  body.innerHTML = bodyText;
  display.setAttribute('class', 'show');

  closeButton.addEventListener('click', function close() {
    title.innerHTML = '';
    body.innerHTML = '';
    display.removeAttribute('class');
    closeButton.removeEventListener('click', close);
  });
};

module.exports = {
  message,
};
