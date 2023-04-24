// document.getElementById("counterr").innerText = 4
let a = 0
let current_sav = ""
let saved = ""
let priv_sav = ""
console.log(count)

function clicker() {
    a = a + 1
    console.log(a)
    document.getElementById("counterr").innerText=a

    if ( a == 2 ) {
        document.getElementById("save_button").removeAttribute("hidden");
    }
    if ( a == 5 )
    {
        giff()
    }
}

function saver() {
    current_sav = document.getElementById("counterr").innerText
    saved = "SAVED COUNTERS ARE : " + priv_sav + current_sav + ","
    document.getElementById("extra").innerText= saved
    priv_sav = priv_sav + current_sav + ","
}
