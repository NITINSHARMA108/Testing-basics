function caesar(string,k){
    if(k<=0)
    {
        return string;
    }
    let str='abcdefghijklmnopqrstuvwxyz';
    let capital='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let object1={};
    let object2={};
    for(let i=0;i<=25;i++)
    {
        object1[str[i]]=i;
    }
    for(let i=0;i<=25;i++)
    {
        object2[capital[i]]=i;
    }
    let s='';
    for(let i=0;i<string.length;i++)
    {
        if(string[i] in object1)
        {
            s=s+str[((object1[string[i]]+k)%26)];
        }
        else if(string[i] in object2)
        {
            s=s+capital[((object2[string[i]]+k)%26)];
        }
        else{
            s=s+string[i];
        }
    }
    return s;
    
}

module.exports=caesar;