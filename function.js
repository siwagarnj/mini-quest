function secondMax(a) {
    if (a.length==0) return "Error!";
    if (a.length==1) return a[0];
    a.sort();
    if (a[a.length-2] == a[a.length-3]) return a[a.length-1];
    return a[a.length-2];
}

console.log(secondMax([]));

function fib(a) {
    if (a==1) return 1;
    if (a==2) return 1;
    let tmp = [1,1];
    for (let i = 2; i < a; i++) {
        tmp.push(tmp[i-2]+tmp[i-1]);
    } 
    return tmp[a-1];
}

function commonCharacterCount(s1,s2) {
    a1= s1.split("");
    a2= s2.split("");
    let c =0;
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j <s2.length; j++) {
            if (s1[i]==s2[j]) c++;
        }
    }
    return c;
}

function almostIncreasingSequence(a) {
    var removed = false;
    for(let i =1; i<a.length; i++) {
        if (a[i-1] >= a[i] ) {
            if (removed == true) {
                return false;
            } else {
                removed = true;
            }
        }
    }
    return true;
}
