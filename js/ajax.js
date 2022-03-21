console.log("AJAX example");

let fetchbtn = document.getElementById("fetchbtn");

fetchbtn.addEventListener('click', buttonClicked);
function buttonClicked(){
    console.log("fetchbtn clicked");

    // create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    //open the request
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //POST Request
    xhr.open('POST', 'https://reqres.in/api/products/3', true);
    xhr.getResponseHeader('content-type','application/json');
 
    // set up a handler for the request
    //what to do onprogress
    xhr.onprogress = function(){
        console.log("onprogress");
    }

    xhr.onreadystatechange = () => console.log(xhr.readyState);

    //what to do onload, when the request is done, response is ready
    xhr.onload = function(){
        
            console.log(this.responseText);
    }

    data = `{
        "name": "umesh",
        "job": "developer"
    }`;
    xhr.send(data);


}


let popbtn = document.getElementById("popbtn")

popbtn.addEventListener('click', popHandler)

function popHandler(){
    const xhr1 = new XMLHttpRequest();

    xhr1.open('GET','https://reqres.in/api/users?page=2',true);

    xhr1.send();

    
    xhr1.onload = function(){


        let popdata = document.getElementById('popdata');
        let mydata = JSON.parse(this.responseText);
        str = '';
        // console.log(mydata.data);
        for (key in mydata.data){
            // console.log(mydata.data[key].first_name + ' ' + mydata.data[key].last_name);
            // console.log(mydata.data[key]);
            str += `<li>${mydata.data[key].first_name} ${mydata.data[key].last_name}</li>`
        }
        popdata.innerHTML = str;

    }
}