let bishString = "Bish";
let boshString = "Bosh";
let bishBoshString = "Bish-Bosh";

// On button click with id of "submit" || Call callBishBosh()
document.getElementById("submit").addEventListener("click", callBishBosh);

function callBishBosh(loopNumber, bishNumber, boshNumber) {
    loopNumber = document.getElementById("loop").value;
    bishNumber = document.getElementById("bish").value;
    boshNumber = document.getElementById("bosh").value;

    for (let i = 1; i <= loopNumber; i++) {
        let bish = i % bishNumber;
        let bosh = i % boshNumber;

        if (bish === 0 && bosh === 0) {
            document.write(bishBoshString);
            document.write("<br>");
        }
        else if (bish === 0) {
            document.write(bishString);
            document.write("<br>");
        }
        else if (bosh === 0) {
            document.write(boshString);
            document.write("<br>");
        }
        else {
            document.write(i);
            document.write("<br>");
        }
    }
}