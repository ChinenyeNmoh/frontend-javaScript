const id1 = document.getElementById('1');
const id2 = document.getElementById('2');
const form1 = document.getElementById('myform');
const tests = document.querySelector('.text');
const test2 = document.querySelector('.text2');
const nameinput = document.querySelector('.nameinput');
const emailinput = document.querySelector('.emailinput');
const numinput = document.querySelector('.numinput');
const errmsg1 = document.querySelector('.errmsg1');
const errmsg2 = document.querySelector('.errmsg2');
const errmsg3 = document.querySelector('.errmsg3');
const btn1 = document.querySelector('.btn1');
const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const numPattern = /\d{11}/;


const test_change = (e) => {
    id1.style.backgroundColor = 'hsl(217, 100%, 97%)';
    id1.style.color = 'black';
}

const valName = (e) => {
    const errs = ['Name field cannot be empty', 'Name cannot be less than 3 characters', 'Name cannot be more than 50 characters'];
    if (nameinput.value.trim() === '') {
        errmsg1.style.display = 'block';
        errmsg1.textContent = errs[0];
        e.preventDefault();
        return false;
    } else if (nameinput.value.length < 3) {
        errmsg1.style.display = 'block';
        errmsg1.textContent = errs[1];
        e.preventDefault();
        return false;
    } else if (nameinput.value.length > 50) {
        errmsg1.style.display = 'block';
        errmsg1.textContent = errs[2];
        e.preventDefault();
        return false;
    } else {
        e.preventDefault();
        return true;
    }
}

const clearNameerr = (e) => {
    errmsg1.style.display = 'none';
}

const clearEmailerr = (e) => {
    errmsg2.style.display = 'none';
}

const clearNumerr = (e) => {
    errmsg3.style.display = 'none';
}

const valEmail = (e) => {
    if (emailinput.value.trim() === '') {
        errmsg2.style.display = 'block';
        errmsg2.textContent = 'email field cannot be empty';
        e.preventDefault();
        return false;
    } else if (!numPattern.test(numinput.value)) {
        errmsg3.style.display = 'block';
        errmsg3.textContent = 'enter a valid 11 digit phone number';
        e.preventDefault();
        return false;
    } else {
        e.preventDefault();
        return true;
    }
}

const valNum = (e) => {
    if (numinput.value.trim() === '') {
        errmsg3.style.display = 'block';
        errmsg3.textContent = 'Number field cannot be empty';
        e.preventDefault();
        return false;
    } else if (!emailPattern.test(emailinput.value)) {
        errmsg2.style.display = 'block';
        errmsg2.textContent = 'enter a valid email address';
        e.preventDefault();
        return false;
    } else {
        return true;
    }
}

const confirmSubmit = (e) => {
    if (valName(e) && valEmail(e) && valNum(e)) {
        e.preventDefault();
        id1.style.backgroundColor = 'transparent';
        id1.style.color = 'hsl(0, 0%, 100%)';
        tests.style.display = 'none';
        test2.style.display ='block';
        id2.style.backgroundColor = 'hsl(217, 100%, 97%)';
        id2.style.color = 'black';
    }
}
const navFront1 = (e) => {
    if (valName(e) && valEmail(e) && valNum(e)) {
        tests.style.display = 'none';
        test2.style.display ='block';
        test3.style.display = 'none';
        test6.style.display = 'none';
        test5.style.display = 'none';
        id1.style.backgroundColor = 'transparent';
        id1.style.color = 'hsl(0, 0%, 100%)';
        id3.style.backgroundColor = 'transparent';
        id3.style.color = 'hsl(0, 0%, 100%)';
        id4.style.backgroundColor = 'transparent';
        id4.style.color = 'hsl(0, 0%, 100%)';   
        id2.style.backgroundColor = 'hsl(217, 100%, 97%)';
        id2.style.color = 'black';
        console.log('worked');
    }
    else{
        tests.style.display = 'block';
        test2.style.display = 'none';
        test3.style.display = 'none';
        console.log('Validation2 failed. Please check your inputs.');
        id1.style.backgroundColor = 'hsl(217, 100%, 97%)';
        id1.style.color = 'black';
        id2.style.backgroundColor = 'transparent';
        id2.style.color = 'hsl(0, 0%, 100%)';
        id3.style.backgroundColor = 'transparent';
        id3.style.color = 'hsl(0, 0%, 100%)';
    }
}

window.addEventListener('load', test_change);
btn1.addEventListener('click', valName);
btn1.addEventListener('click', valEmail);
btn1.addEventListener('click', valNum);
btn1.addEventListener('click', confirmSubmit);
nameinput.addEventListener('input', clearNameerr);
emailinput.addEventListener('input', clearEmailerr);
numinput.addEventListener('input', clearNumerr);
id2.addEventListener('click', navFront1);

