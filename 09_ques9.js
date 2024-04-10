const arr = [1,2,999,56,"Mithun",1234,"PW"];
for(let i=0;i<7;i++)
{
    let a = typeof arr[i];
    if(a=="string")
    {
        console.log("Found the First String: "+arr[i]);
        break;
    }
}