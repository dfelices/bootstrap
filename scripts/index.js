//picking up the elements from the document
const buttonCodeInputElem = document.querySelector('.bootstrap-buttons #buttonCode');
const buttonRunButton = document.querySelector('.bootstrap-buttons .run');
const buttonResetButton = document.querySelector('.bootstrap-buttons .reset');
const buttonCodeArea = document.querySelector('.bootstrap-buttons .output-window');

const darkModeCodeInputElem = document.querySelector('.bootstrap-darkMode #darkModeCode');
const darkModeRunButton = document.querySelector('.bootstrap-darkMode .run');
const darkModeResetButton = document.querySelector('.bootstrap-darkMode .reset');
const darkModeCodeArea = document.querySelector('.bootstrap-darkMode .output-window');

const listGroupInputElem = document.querySelector('.bootstrap-listGroup #listGroupCode');
const listGroupRunButton = document.querySelector('.bootstrap-listGroup .run');
const listGroupResetButton = document.querySelector('.bootstrap-listGroup .reset');
const listGroupCodeArea = document.querySelector('.bootstrap-listGroup .output-window');


/*code for the dark and lightmode*/
const modeButton = document.querySelector('.modeButton a');
const darkButton = document.querySelector('.dark');
const lightButton = document.querySelector('.light');
const body = document.body;

modeButton.addEventListener('click', () => {
  let newTheme = 'light';
  if(darkButton.classList.contains('d-none')){
    newTheme = 'light';
    darkButton.classList.remove('d-none');
    lightButton.classList.add('d-none');
  }
  else{
    newTheme = 'dark';
    darkButton.classList.add('d-none');
    lightButton.classList.remove('d-none');
  }
  body.setAttribute('data-bs-theme', newTheme);
});



function defaultCode(elem){
  if(elem == "button"){
    buttonCodeInputElem.value=`<div class="btn-group">
      <button type="button" class="btn btn-primary">Apple</button>
      <button type="button" class="btn btn-primary">Samsung</button>
      <button type="button" class="btn btn-primary">Sony</button>
    </div>`;
    buttonCodeArea.innerHTML = buttonCodeInputElem.value;
  }else if(elem == "darkMode"){
    darkModeCodeInputElem.value=`    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>John Doe</td>
          <td>25</td>
          <td>New York</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jane Smith</td>
          <td>30</td>
          <td>Los Angeles</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Sam Green</td>
          <td>22</td>
          <td>Chicago</td>
        </tr>
      </tbody>
    </table>`;
    darkModeCodeArea.innerHTML = darkModeCodeInputElem.value;

  }
  else{
    listGroupInputElem.value=`<ul class="list-group">
    <li class="list-group-item">First item</li>
    <li class="list-group-item">Second item</li>
    <li class="list-group-item">Third item</li>
  </ul>`;
  listGroupCodeArea.innerHTML = listGroupInputElem.value;

  }
}

defaultCode("button");
defaultCode("darkMode");
defaultCode("listGroup");

    
buttonRunButton.addEventListener('click', function() {
  let code = buttonCodeInputElem.value;
  buttonCodeArea.innerHTML = code;
});
buttonResetButton.addEventListener('click', function(){
  defaultCode("button");
});

darkModeRunButton.addEventListener('click', function() {
  let code = darkModeCodeInputElem.value;
  darkModeCodeArea.innerHTML = code;
});
darkModeResetButton.addEventListener('click', function(){
  defaultCode("darkMode");
});

listGroupRunButton.addEventListener('click', function() {
  let code = listGroupInputElem.value;
  listGroupCodeArea.innerHTML = code;
});
listGroupResetButton.addEventListener('click', function(){
  defaultCode("listGroup");
});

