let commentField = document.querySelector('.comment-field');
let submitButton = document.querySelector('.submit-button');

commentField.oninput = function () {
    if (commentField.value.length > 142) {
        commentField.classList.add('warning');  
        submitButton.disabled = true;
      } else {
        commentField.classList.remove('warning');
        submitButton.disabled = false;
      }

};
