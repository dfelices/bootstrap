const buttonCodeInputElem = document.querySelector('.button-section #code');
const buttonRunButton = document.querySelector('.button-section .run');
const buttonResetButton = document.querySelector('.button-section .reset');
const buttonCodeArea = document.querySelector('.button-section .output-window');
console.log(buttonCodeArea);

buttonCodeInputElem.value=`<div class="btn-group">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <button type="button" class="btn btn-primary">Sony</button>
</div>`;
buttonCodeArea.innerHTML = buttonCodeInputElem.value;
    
buttonRunButton.addEventListener('click', function() {
    console.log('button running');
    let code = buttonCodeInputElem.value;
    buttonCodeArea.innerHTML = code;
});

buttonResetButton.addEventListener('click', function(){
    console.log('button resetting');
    buttonCodeInputElem.value=`<div class="btn-group">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <button type="button" class="btn btn-primary">Sony</button>
  </div>`;
  buttonCodeArea.innerHTML = buttonCodeInputElem.value;
})
