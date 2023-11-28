var addYear;
var sumAddon = 0;
const gobk2 = document.querySelector('#gobk2')
const add1 = document.getElementById('add1');
const add2 = document.getElementById('add2');
const add3 = document.getElementById('add3');
const addone = document.querySelector('.addone');
const addtwo = document.querySelector('.addtwo');
const addthree = document.querySelector('.addthree');
const con = document.querySelector('.container1');
const test5 = document.querySelector('.text5');
const id4 = document.getElementById('4');
const btn33 = document.getElementById('btn33');

const goBack2 = (e) => {
    test2.style.display = 'block';
    test3.style.display = 'none';
    id3.style.color = 'hsl(0, 0%, 100%)';
    id3.style.backgroundColor = 'transparent';
    id2.style.color = 'black';
    id2.style.backgroundColor = 'hsl(217, 100%, 97%)';
}

const addons1 = (e) => {
    let addMonth = 0;

    if (add1.checked && isChecked() === 'monthly') {
        addone.classList.add('clickedbox');
        addMonth = 1;
    } else if (add1.checked && isChecked() === 'yearly') {
        addone.classList.add('clickedbox');
        addMonth = 10;
    }else
    addone.classList.remove('clickedbox');

    return addMonth;
}

const addons2 = (e) => {
    let addMonth = 0;

    if (add2.checked && isChecked() === 'monthly') {
        addtwo.classList.add('clickedbox');
        addMonth = 2;
    } else if (add2.checked && isChecked() === 'yearly') {
        addtwo.classList.add('clickedbox');
        addMonth = 20;
    }else
    addtwo.classList.remove('clickedbox');

    return addMonth;
}

const addons3 = (e) => {
    let addMonth = 0;

    if (add3.checked && isChecked() === 'monthly') {
        addthree.classList.add('clickedbox');

        addMonth = 2;
    } else if (add3.checked && isChecked() === 'yearly') {
        addthree.classList.add('clickedbox');
        addMonth = 20;
    }else
    addthree.classList.remove('clickedbox');

    return addMonth;
}

con.addEventListener('click', (e) => {
    const result1 = addons1(e);
    const result2 = addons2(e);
    const result3 = addons3(e);
    console.log(result1 + result2 + result3);
});
id3.addEventListener('click', (e) => {
    const result = valInput(e);
    if (valName(e) && valEmail(e) && valNum(e)) {
        if (Arcadeid.checked === true || Advanceid.checked === true || proid.checked === true) {
            test3.style.display = 'block';
            test2.style.display = 'none';
            tests.style.display = 'none';
            test5.style.display = 'none';
            test6.style.display = 'none';
            id3.style.color = 'black';
            id3.style.backgroundColor = 'hsl(217, 100%, 97%)';
            id4.style.color = 'hsl(0, 0%, 100%)';
            id4.style.backgroundColor = 'transparent';
            id2.style.color = 'hsl(0, 0%, 100%)';
            id2.style.backgroundColor = 'transparent';
        } else {
            test3.style.display = 'none';
            test5.style.display = 'none';
            id3.style.color = 'hsl(0, 0%, 100%)';
            id3.style.backgroundColor = 'transparent';
        }
    }
});

const valAddOn = (e) => {
    test3.style.display = 'none';
    test5.style.display = 'block';
    id3.style.color = 'hsl(0, 0%, 100%)';
    id3.style.backgroundColor = 'transparent';
    id4.style.color = 'black';
    id4.style.backgroundColor = 'hsl(217, 100%, 97%)';
}
gobk2.addEventListener('click', goBack2);
add1.addEventListener('click', (e) => addons1(e));
add2.addEventListener('click', (e) => addons2(e));
add3.addEventListener('click', (e) => addons3(e));
btn33.addEventListener('click', valAddOn);

