function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

let base_value_fontSize = 30;
let active_value
let active_string = '0'
function calculation(el){
    if (active_string==Infinity){
        active_string = '0'
    }
    active_value = el.value;
    if (active_value=='='){
        console.log(eval(active_string));
        active_string = eval(active_string)
    }
    else if (active_value == '@'){
        console.log(active_string)
        if (active_string!='0'){
            active_string = active_string.slice(0,-1)
        }
        if (active_string.length==0){
            active_string='0'
        }
    }
    else if (active_value == 'C'){
        active_string = '0'
    }
    else{
        active_string += active_value;
        active_string = active_string.replace(/\D\D/,active_value)
        if (/\D0\d/.test(active_string)){
            active_string = active_string.slice(0,-2) + active_value
        }
        if (active_string.indexOf('0') == 0){
            active_string = active_value
        }
    }
    document.getElementById('demo').innerHTML = active_string
    if (isOverflown(document.getElementById('demo') )){
        base_value_fontSize*=0.95;
        document.getElementById('demo').style.fontSize = base_value_fontSize + "px";
    }
}


function main_func(el){
    try{
        document.getElementById('errors').innerHTML = ''
        calculation(el)
    }
    catch(e){
        document.getElementById('errors').innerHTML = 'Проверьте целостность выражения'
        console.error(e,e.stack)
    }
}


let scale_size = 1;
function scaleChange(el){
    switch (el.value){
        case('up'):scale_size+=0.25;break;
        case('down'):scale_size-=0.25;break;
    }
    console.log(scale_size)
    document.getElementById('main_calc').style.transform = "scale(" + scale_size + ')';

}