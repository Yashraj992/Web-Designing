function enter() {
    let a = parseInt(document.getElementById('one').value);
    let b = parseInt(document.getElementById('two').value);
    let c = parseInt(document.getElementById('three').value);
    let d = parseInt(document.getElementById('four').value);
    let e = parseInt(document.getElementById('five').value);
    let f = parseInt(document.getElementById('six').value);
    let g = parseInt(document.getElementById('seven').value);
    if (a <= 50 && a > 0 && b <= 50 && b > 0 && c <= 50 && c > 0 && d <= 50 && d > 0 && e <= 50 && e > 0 && f <= 50 && f > 0 && g <= 50 && g > 0) {
        let t = a + b + c + d + e + f;
        document.getElementById('marks').innerHTML = t;
        let i = t / 7;
        document.getElementById('percentage').innerHTML = i;
    }
    else {
        alert('enter marks only in digit and 0 to 50')
    }
}
