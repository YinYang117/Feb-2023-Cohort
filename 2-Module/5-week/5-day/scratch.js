const bools = [false, true];
for (const a of bools){
    for (const b of bools){
        console.log(Boolean(!(a && !b)))
    }
}