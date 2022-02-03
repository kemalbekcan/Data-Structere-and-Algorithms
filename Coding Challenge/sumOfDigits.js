function digital_root(n) {
    // ...
    console.log("n", n)
    n = n.toString()
    var total = 0
    for(var i = 0; i <= parseInt(n) && total < 10; i++){
        if(n[i] !== undefined){
            console.log("n", n[i])
            total += Number(n[i])
        }
    }
    console.log("total", total)
    return total > 10 ? digital_root(total) : total
}

digital_root(15)