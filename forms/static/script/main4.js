const finish = document.querySelector('.finish');
const f1 = document.querySelector('.f1');
const f2 = document.querySelector('.f2');
const f3 = document.querySelector('.f3');
const f4 = document.querySelector('.f4');
const f42 = document.querySelector('.f42');
const f5 = document.querySelector('.f5');
const online = document.querySelector('.online');
const larger = document.querySelector('.larger');
const customize = document.querySelector('.customize');
const change = document.querySelector('.change');
const go = document.getElementById('go');
const btn4 = document.querySelector('#btn4');
const GTotal = document.querySelector('.total');
const test6 = document.querySelector(".text6")

const pick1 = () => {
    if (add1.checked && isChecked() === 'monthly'){
        online.style.display = 'block';
        f3.style.display = 'block';
        f3.textContent = '+$1/mo';
    }else if (add1.checked && isChecked() === 'yearly'){
        online.style.display = 'block';
        f3.style.display = 'block';
        f3.textContent = '+$10/yr';
    }else{
        online.style.display = 'none';
        f3.style.display = 'none';
    }
}
const pick2 = () => {
    if (add2.checked && isChecked() === 'monthly'){
        larger.style.display = 'block';
        f4.style.display = 'block';
        f4.textContent = '+$2/mo';
    }else if (add2.checked && isChecked() === 'yearly'){
        larger.style.display = 'block';
        f4.style.display = 'block';
        f4.textContent = '+$20/yr';
    }else{
        larger.style.display = 'none';
        f4.style.display = 'none';
    }
}
const pick3 = () => {
    if (add3.checked && isChecked() === 'monthly'){
        customize.style.display = 'block';
        f42.style.display = 'block';
        f42.textContent = '+$2/mo';
    }else if (add3.checked && isChecked() === 'yearly'){
        customize.style.display = 'block';
        f42.style.display = 'block';
        f42.textContent = '+$20/yr';
    }else{
        customize.style.display = 'none';
        f42.style.display = 'none';
    }
}

btn33.addEventListener('click', (e) => {
    const result = valInput(e);
    const res2 = isChecked();
    f1.textContent = `${result['inputValue']}(${res2})`;
    if (isChecked() === 'monthly'){
        f2.textContent = `$${result['inputMoney']}/mo`;
    }else
        f2.textContent = `$${result['inputMoney']}/yr`;
    pick1();
    pick2();
    pick3();
});

const goback3 = (e) => {
    test3.style.display = 'block';
    test5.style.display = 'none';
    id4.style.color = 'hsl(0, 0%, 100%)';
    id4.style.backgroundColor = 'transparent';
    id3.style.color = 'black';
    id3.style.backgroundColor = 'hsl(217, 100%, 97%)';
}


btn33.addEventListener('click', (e) => {
    const Tm = valInput(e);
    const To = Tm['inputMoney'];
    const result1 = addons1(e);
    const result2 = addons2(e);
    const result3 = addons3(e);
    const total = result1 + result2 + result3 + To;
    if (isChecked() === 'monthly'){
        GTotal.textContent = 'Total(per month)';
        f5.textContent = `$${total}/mo`;
    }else
    {
        GTotal.textContent = 'Total(per year)';
        f5.textContent = `$${total}/yr`;
    }
});


id4.addEventListener('click', (e) => {
    const result = valInput(e);
    if (valName(e) && valEmail(e) && valNum(e) ) {
        if (Arcadeid.checked === true || Advanceid.checked === true || proid.checked === true) {
            test3.style.display = 'none';
            test2.style.display = 'none';
            tests.style.display = 'none';
            test5.style.display = 'block';
            test6.style.display = 'none';
            id4.style.color = 'black';
            id4.style.backgroundColor = 'hsl(217, 100%, 97%)';
            id3.style.color = 'hsl(0, 0%, 100%)';
            id3.style.backgroundColor = 'transparent';
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

btn4.addEventListener('click', () => {
    test5.style.display = 'none';
    test6.style.display = 'block';
})



change.addEventListener("click", goback3);
go.addEventListener("click", goback3); 