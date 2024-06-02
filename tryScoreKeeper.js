const bt1=document.querySelector('#bt1');
const bt2=document.querySelector('#bt2');
const bt3=document.querySelector('#bt3');
//const h1=document.querySelector('h1');
const s1=document.querySelector('#s1');
const s2=document.querySelector('#s2');
const select=document.querySelector('select');
let maxScore=3;
function displayOff()
{
    bt1.setAttribute('disabled','disabled');
    bt2.setAttribute('disabled','disabled');
}
select.addEventListener('change',function(){
maxScore=parseInt(select.value);
})
let score1=0;
let score2=0;
bt1.addEventListener('click',function()
{
    score1++;
   // h1.innerText=`${score1} to ${score2}`;
   s1.innerText=`${score1}`
    if(score1===maxScore)
        {    s1.classList.add('green');
             s2.classList.add('red');
            displayOff();
        }
})
bt2.addEventListener('click',function()
{
    score2++;
   // h1.innerText=`${score1} to ${score2}`;
   s2.innerText =`${score2}`
    if(score2===maxScore)
        {   s2.classList.add('green');
            s1.classList.add('red');
            displayOff();
        }
})
bt3.addEventListener('click',function()
{
   // h1.innerText="0 to 0";
   s1.innerText = '0';
   s2.innerText ='0';
    bt1.removeAttribute('disabled');
    bt2.removeAttribute('disabled');
    s1.classList.remove('red','green');
    s2.classList.remove('red','green');
    score1=0;
    score2=0;
})