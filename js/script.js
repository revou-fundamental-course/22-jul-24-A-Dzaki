function formValidation(event) {
    const nama = document.getElementById('Nama').value;
    const email = document.getElementById('Email').value;
    const interest = document.getElementById('interest').value;

    if (nama == '' || email == '' || interest == '') {
        window.alert('Inputan tidak boleh kosong!');
        event.preventDefault();
    } else {
        window.alert('Terimakasih telah menginput');
    }
}
//Auto Slide
let indexslide = 1;
showslide(1);
function nextslide(n) {
    showslide((indexslide += n));
}
function showslide(n) {
    let listimage = document.getElementsByClassName('slide');
    console.log(listimage);
    if (n > listimage.length) indexslide = 1;
    let i = 0;
    while (i < listimage.length) {
        listimage[i].style.display = 'none';
        i++;
    }
    listimage[indexslide - 1].style.display = 'block';
}
setInterval(() => nextslide(1), 2000);
