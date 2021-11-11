// function to capitalize the given string
function capitalize(string){
    try{
    let letter=string[0].toUpperCase();
    return letter+string.slice(1,string.length);
    }
    catch(err)
    {
        return undefined;
    }
}

// basic calculator function
function calculator(a,b,operator){
    switch(operator){
        case '+':return Number((a+b));
        case '-':return Number((a-b));
        case '*':return Number(a*b);
        case '/':if(b==0){
                return 'infinity';
                }
                else{
                    return Number((a/b));
                }
    }
}

//module to reverse a string
function reverseString(string){
    let s='';
    for(let i=string.length-1;i>=0;i--)
    {
        s=s+string[i];
    }
    return s;
}

// array analysis function
function arrayAnalysis(array){
    if(array[0]===undefined)
    {
        return undefined;
    }
    let maximum=array[0];
    let minimum=array[0];
    let count=0;
    let total=0;
    array.forEach(element => {
        total=total+element;
        count+=1;
        if(maximum<element){
            maximum=element;
        }
        if(minimum>element)
        {
            minimum=element;
        }

    });
    return {maximum,minimum,length:count,average:total/count};
}

module.exports={capitalize,calculator,reverseString,arrayAnalysis};