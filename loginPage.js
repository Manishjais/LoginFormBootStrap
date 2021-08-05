let name1 = document.getElementById('username-input');
let email1 = document.getElementById('email-handler-input');
let server1 = document.getElementById('server-input');
let img1 = document.getElementById('image-input');
let list1 = document.getElementById('college-input');
let tnc1 = document.getElementById('conditions-input');
let prg1 = document.getElementById('progress-bar-new');

function live() {   
    let progress = 0; 
    let x = 0;

    if (name1.value){
        progress += 100/6;
        x++;
    }
    if (email1.value){
        progress += 100/6;
        x++;
    }
    if (server1.value){
        progress += 100/6;
        x++;
    }
    if (img1.value){
        progress += 100/6;
        x++;
    }
    if (list1.value){
        progress += 100/6;
        x++;
    }
    if (tnc1.checked){
        progress += 100/6;
        x++;
    }
    console.log(progress + "%");
    prg1.style.width = progress + "%";

    if(x == 6){
        document.getElementById('submit-button').disabled = false;
    }   
    else{
        document.getElementById('submit-button').disabled = true;
    } 
}