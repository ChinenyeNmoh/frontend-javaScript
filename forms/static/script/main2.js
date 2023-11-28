var inputValue;
var monthYear;
let inputMoney; // Declare inputMoney outside the blocks

const gobk1 = document.querySelector('#gobk1');
const id3 = document.getElementById('3');
const Arcade = document.querySelector('.al');
const Arcadeid = document.querySelector('#Arcade')
const Advance = document.querySelector('.adl');
const Advanceid = document.querySelector('#Advanced');
const pro = document.querySelector('.pl');
const proid = document.querySelector('#pro');
const plan = document.querySelector('.plan');
const check = document.querySelector('#check');
const lc = document.querySelector('.lc');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const smallerr = document.querySelector('.smallerr');
const test3 = document.querySelector('.text3');
const test4 = document.querySelector('.text4');
const btn2 = document.querySelector('.btn2');
const m = document.querySelector('#m');
const m2 = document.querySelector('#m2');
const m3 = document.querySelector('#m3');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const addinfo = document.querySelector('.addinfo');
const addinfo2 = document.querySelector('.addinfo2');
const addinfo3 = document.querySelector('.addinfo3');
const ns = document.getElementById('ns');
const ns1 = document.querySelector('.ns1');
const yr1 = document.querySelector('.yr1')
const yr2 = document.querySelector('.yr2')
const yr3 = document.querySelector('.yr3')


const goBack = (e) => {
    tests.style.display = 'block';
    test2.style.display = 'none';
    id2.style.backgroundColor = 'transparent';
    id2.style.color = 'hsl(0, 0%, 100%)';
    id1.style.backgroundColor = 'hsl(217, 100%, 97%)';
    id1.style.color = 'black';
}

const valInput = (e) => {

    if (e.target === Arcadeid || e.target === Arcade) {
        Arcade.classList.add('clicked-label');
        Arcade.classList.add('bc');
        p1.classList.remove('clicked-label');
        m.classList.remove('clicked-label');
        if (e.target.checked === false) {
            Arcade.classList.remove('clicked-label');
            Arcade.classList.remove('bc');
        }
        inputValue = 'Arcade';
        if (isChecked() === 'monthly') {
            inputMoney = 9;
        } else if (isChecked() === 'yearly') {
            inputMoney = 90;
            console.log('inputMoney:', inputMoney);
        }
        Advanceid.checked = false;
        Advance.classList.remove('clicked-label');
        Advance.classList.remove('bc');
        proid.checked = false;
        pro.classList.remove('clicked-label');
        pro.classList.remove('bc');
    } else if (e.target === Advanceid || e.target === Advance) {
        Advance.classList.add('clicked-label');
        Advance.classList.add('bc');
        p2.classList.remove('clicked-label');
        m2.classList.remove('clicked-label');
        if (e.target.checked === false) {
            Advance.classList.remove('clicked-label');
            Advance.classList.remove('bc');
        }
        inputValue = 'Advanced';
        if (isChecked() === 'monthly') {
            inputMoney = 12; // No let here
        } else {
            inputMoney = 120; // No let here
        }
        Arcadeid.checked = false;
        Arcade.classList.remove('clicked-label');
        Arcade.classList.remove('bc');
        proid.checked = false;
        pro.classList.remove('clicked-label');
        pro.classList.remove('bc');
    } else if (e.target === proid || e.target === pro) {
        pro.classList.add('clicked-label');
        pro.classList.add('bc');
        p3.classList.remove('clicked-label');
        m3.classList.remove('clicked-label');
        if (e.target.checked === false) {
            e.target.classList.remove('clicked-label');
            pro.classList.remove('bc');
        }
        inputValue = 'Pro';
        if (isChecked() === 'monthly') {
            inputMoney = 15; // No let here
        } else {
            inputMoney = 150; // No let here
        }
        Arcadeid.checked = false;
        Arcade.classList.remove('clicked-label');
        Arcade.classList.remove('bc');
        Advanceid.checked = false;
        Advance.classList.remove('clicked-label');
        Advance.classList.remove('bc');
    }
    return { inputValue, inputMoney };
};


const isChecked = () => {
    if (!check.checked) {
        monthYear = 'monthly';
        m.textContent = '$9/mo';
        m2.textContent = '$12/mo';
        m3.textContent = '$15/mo';
        addinfo.style.display = 'none';
        addinfo2.style.display = 'none';
        addinfo3.style.display = 'none';
        year.style.fontWeight = 'lighter';
        month.style.fontWeight = 'bold';
        return (monthYear);
    } else {
        monthYear = 'yearly';
        m.textContent = '$90/yr';
        m2.textContent = '$120/yr';
        m3.textContent = '$150/yr';
        addinfo.style.display = 'block';
        addinfo2.style.display = 'block';
        addinfo3.style.display = 'block';
        year.style.fontWeight = 'bold';
        month.style.fontWeight = 'lighter';
        return (monthYear);
    }
}

check.addEventListener('click', (e) => {
    const whatchecked = valInput(e);
    if(whatchecked['inputValue'] === 'Arcade'){
        Arcadeid.checked = false;
        Arcade.classList.remove('clicked-label');
        Arcade.classList.remove('bc');
    }else if(whatchecked['inputValue'] === 'Advanced'){
        Advanceid.checked = false;
        Advance.classList.remove('clicked-label');
        Advance.classList.remove('bc');
    }else if(whatchecked['inputValue'] === 'Pro'){
        proid.checked = false;
        pro.classList.remove('clicked-label');
        pro.classList.remove('bc');
    }
})


const validateCheck = (e) => {
    if (Arcadeid.checked === true || Advanceid.checked === true || proid.checked === true) {
        e.preventDefault();
        if (isChecked() === 'monthly') {
            test2.style.display = 'none';
            test3.style.display = 'block';
            yr1.textContent = '+$1/mo'
            yr2.textContent = '+$2/mo'
            yr3.textContent = '+$2/mo'
            id2.style.backgroundColor = 'transparent';
            id2.style.color = 'hsl(0, 0%, 100%)';
            id3.style.backgroundColor = 'hsl(217, 100%, 97%)';
            id3.style.color = 'black';
        } else {
            test2.style.display = 'none';
            test3.style.display = 'block';
            yr1.textContent = '+$10/yr'
            yr2.textContent = '+$20/yr'
            yr3.textContent = '+$20/yr'
            id2.style.backgroundColor = 'transparent';
            id2.style.color = 'hsl(0, 0%, 100%)';
            id3.style.backgroundColor = 'hsl(217, 100%, 97%)';
            id3.style.color = 'black';
        }
    } else {
        smallerr.style.display = 'block';
        console.log('none checked');
    }
}



const clearInputErr = (e) => {
    smallerr.style.display = 'none';
}


const navBack1 = () => {
    test2.style.display = 'none';
    tests.style.display = 'block';
    test3.style.display = 'none';
    test5.style.display = 'none';
    test6.style.display = 'none';
    id2.style.backgroundColor = 'transparent';
    id2.style.color = 'hsl(0, 0%, 100%)';
    id1.style.backgroundColor = 'hsl(217, 100%, 97%)';
    id1.style.color = 'black';
    id3.style.backgroundColor = 'transparent';
    id3.style.color = 'hsl(0, 0%, 100%)';
    id4.style.backgroundColor = 'transparent';
    id4.style.color = 'hsl(0, 0%, 100%)';
}



gobk1.addEventListener('click', goBack);
id1.addEventListener('click', navBack1);
Arcade.addEventListener('click', valInput);
Advance.addEventListener('click', valInput);
pro.addEventListener('click', valInput);
check.addEventListener('click', isChecked);
lc.addEventListener('mouseover', clearInputErr);
ns.addEventListener('click', validateCheck);
