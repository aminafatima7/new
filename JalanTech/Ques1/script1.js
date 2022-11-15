let x = [1,3,2,7,4,6];

let p = 2;
let d = 0;

let l = x.length;
if (d==0)
{
    let new_array = x.slice(0,p);
    let remaining_array = x.slice(p,l);
    let concat = remaining_array.concat(new_array);
    document.write(concat);
}
else if (d==1) {
     let new_array = x.slice(p,l);
     let remaining_array = x.slice(0,p);
     let concat = new_array.concat(remaining_array);
     document.write(concat);
}

