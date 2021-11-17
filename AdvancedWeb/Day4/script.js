function sFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

var input=document.querySelector('.input');
var items=Array.from(document.querySelectorAll('.item'));

items.forEach(function(btn) {
    btn.addEventListener('click', function() {
        if(input.innerHTML == '0') // 0123->123
        input.innerHTML='';
        if(btn.innerHTML=='AC')
        input.innerHTML='0';
        else if(btn.innerHTML == 'DEL'){
            var arrtext=Array.from(input.innerHTML) // string to array
            arrtext.splice(arrtext.length-1, 1);
            if(arrtext.length!=0)
            input.innerHTML=arrtext.join('');
            else input.innerHTML='0';
        }
        else if(btn.innerHTML == '='){
            input.innerHTML=eval(input.innerHTML);
        }
        else if(btn.innerHTML == '√'){
            input.innerHTML = eval(Math.sqrt(input.innerHTML));
        }
        else if(btn.innerHTML == '²'){
            input.innerHTML = eval(Math.pow(input.innerHTML, 2));
        }
        else if(btn.innerHTML == '!'){
            input.innerHTML = eval(sFact(input.innerHTML));
        }
        else input.innerHTML += btn.innerHTML;
    })
})

