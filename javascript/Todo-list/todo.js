const input = document.querySelector('input');
const btn = document.querySelector(".addtask > button");

btn.addEventListener('click', addlist);
input.addEventListener('keyup', (e) => {
    (e.keycode === 13 ? addlist(e):null)
})

function addlist(e) {
    const notcompleted = document.querySelector('.notcompleted');

    const completed = document.querySelector('.completed')
    
    const newli = document.createElement('li')
    const checkbtn = document.createElement("button");
    const deletebtn = document.createElement("button");

    checkbtn.innerHTML = '<i class="fa fa-check"></i>';

    deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
    
    if (input.value !== '') {
        newli.textContent = input.value;
        input.value = '';
        notcompleted.appendChild(newli)
        newli.appendChild(checkbtn);
        newli.appendChild(deletebtn)

    }
    
    checkbtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkbtn.style.display = "none";
        
    });

    deletebtn.addEventListener("click", function () {
      const parent = this.parentNode;
      parent.remove();
    
    });



}