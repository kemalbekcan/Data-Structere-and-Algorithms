function digital_root(n) {
    n = n.toString()
    var total = 0
    for(var i = 0; i < n.length; i++){
        if(n[i] !== undefined){
            total += Number(n[i])
        }
    }
    return total >= 10 ? digital_root(total) :  console.log(total)
}

digital_root(15)