
function loltest() {
    const foo = "https://exposed.junnn.xyz"
    fetch(foo, {mode: 'no-cors'}).then((resp) => resp.status).then((resp) => console.log(`lol response ${resp}`));
}

loltest();