const inputEle = document.querySelector("input");
const buttonEle = document.querySelector("button");
const listEle = document.querySelector("#list");

buttonEle.addEventListener('click', () => { 
    if (inputEle.value == "") {
        inputEle.focus();

    }
    else {
        const liEle = document.createElement('li');
        const deBtn = document.createElement('button');
        liEle.textContent = inputEle.value;
        deBtn.textContent = "❌";
        liEle.append(deBtn);
        listEle.append(liEle);
        deBtn.addEventListener('click', () => {
            liEle.remove();
            inputEle.focus();
        })
        
        inputEle.value = ""
    }
  });

