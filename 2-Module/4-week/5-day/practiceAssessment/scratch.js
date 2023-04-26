function truthTabler(){
    const bools = [0, 1]
    const res = {}
    for (let a of bools){
        for (let b of bools){
            res[`${a} ${b}`] = Number(!b && (a || b))
        }
    }
    console.table(res)
}

truthTabler()