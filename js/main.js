document.querySelector('body').addEventListener('click', clickHandler);

function clickHandler(event){
  if(!event.target.hasAttribute('editable')) return;

//убирается плейсхолдер, появляется инпут, в которм выделен плейсхолдер
  event.preventDefault();

  const { target: targetElement } = event

  const type = targetElement.getAttribute('editable');
  console.log('type', type);

  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', type);
  targetElement.parentNode.appendChild(inputElement);
  inputElement.value= targetElement.innerText;
  targetElement.parentNode.removeChild(targetElement);
  // targetElement.remove();
  // inputElement.focus();
  inputElement.select();


//обратная дорога, убираем инпут, если надо сохраняем
  inputElement.addEventListener('keyup', function(event){
    switch(event.which){
      case 13:
          inputElement.parentNode.appendChild(targetElement);
          // targetElement.innerText = inputElement.value;
          targetElement.innerText = this.value;
          inputElement.remove();
          break;
      case 27:
      inputElement.parentNode.appendChild(targetElement);
      inputElement.remove();
          break;

    }
  })
};
