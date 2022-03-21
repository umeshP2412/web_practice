console.log('Hello World');
showNotes()
let addBtn = document.querySelector('#addBtn');
let dltBtn = document.querySelector('.dltbtn');

addBtn.addEventListener("click", function (e) {

    let addText = document.querySelector('#addTxt');
    if (addText.value == '') {
        alert('Please enter text');
        return;
    }
    let notes = localStorage.getItem('notes');

    if (notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addText.value);

    localStorage.setItem('notes',JSON.stringify(notesObj));

    addText.value = "";
    console.log(notesObj);
    showNotes();
})


//Function to show elements from local storage
function showNotes(){

    let notes = localStorage.getItem('notes');
    
    let htmlcrd = "";
    if (notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.forEach(function(element, index) {
        htmlcrd += `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Note-${index+1}</h5>
        <p class="card-text">${element}</p>
        <a id="${index}" onclick="deleteNotes(this.id)" class="btn dltbtn btn-primary">Delete Note</a>
        </div>
        </div>`;
    });
    let noteElm= document.getElementById('notes');
    if (notesObj.length != 0){
        noteElm.innerHTML = htmlcrd;
    }

};


//Function to delete elements from local storage
function deleteNotes(index){

    let notes = localStorage.getItem('notes');
    if (notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    
    // console.log("Deleting - ",notesObj[index]);
    notesObj.splice(index,1);

    // console.log(notesObj);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
};

let search = document.getElementById('searchTxt');

search.addEventListener('input', function(){


    let inputVal = search.value.toLowerCase();
    let noteCard = document.querySelectorAll('.noteCard');

    Array.from(noteCard).forEach(function(element){
        let cardTxtUC = element.getElementsByTagName('p')[0].innerHTML
        let cardTxtLC = cardTxtUC.toLowerCase();
        if(cardTxtLC.includes(inputVal)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    });

    console.log(inputVal);
    // console.log(noteCard);
});
