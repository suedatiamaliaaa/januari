const ids1 = ["himpA1", "himpB1", "himpA2", "himpB2", "himpA3", "himpB3", "himpA4", "himpB4", "himpA5", "himpB5"];


const jawaban = {
    satu: "amir",
    dua: "48",
    tiga: "anisa",
    empat: "45",
    lima: "budi",
    enam: "50",
    tujuh: "suci",
    delapan: "43",
    sembilan: "umi",
    sepuluh: "40",
    sebelas: "{(1,2),(1,3),(1,4),(2,3),(2,4),(3,4)}"
};


const jwb = [
    "amir,48", "anisa,45", "budi,50", "suci,43", "umi,40"
];


let jA1 = jawaban.satu;
let jB1 = jawaban.dua;
let jA2 = jawaban.tiga;
let jB2 = jawaban.empat;
let jA3 = jawaban.lima;
let jB3 = jawaban.enam;
let jA4 = jawaban.tujuh;
let jB4 = jawaban.delapan;
let jA5 = jawaban.sembilan;
let jB5 = jawaban.sepuluh;

let jawabanSiswa = jawaban.sebelas;

function removeSpaces(string) {
    return string.split(' ').join('');
}

function cekJawaban1() {

    var jawaban1 = document.getElementById("jaw1").value;
    if (jawaban1 == jawabanSiswa) {
        document.getElementById("keteranganPembahasanSoal2").innerHTML = `<b class="text-success">Ya, jawaban kamu benar.</b><br>
        Pembahasan soal: <br> 
        Perhatikan bahwa 1 dari himpunan A dipasangkan dengan 2, 3, 4 dari himpunan B, sehingga didapatkan pasangan berurutan (1, 2), (1, 3), (1, 4).<br>
        Lalu, 2 dari himpunan A dipasangkan dengan 3 dan 4 dari himpunan B.<br>
        Sehingga didapatkan pasangan berurutan (3, 4).<br>
        Maka, himpunan pasangan berurutan dari diagram panah di atas adalah ` + `<span class="fs-5"> = ` + jawabanSiswa + `</span>`;
        document.getElementById("jaw1").classList.add("jawaban-benar");
        document.getElementById("jaw1").readOnly = true;
        document.getElementById("cekJawaban1").style.display = "none";
        document.getElementById("hapusJawaban1").classList.add("sembunyikan");

    } else {
        document.getElementById("jaw1").classList.add("jawaban-salah");
        document.getElementById("hapusJawaban1").classList.remove("sembunyikan");
        document.getElementById("keteranganPembahasanSoal2").innerHTML = `<b class="text-danger">Jawaban kamu salah.</b><br> Klik tombol <b>Hapus</b> untuk mengulang jawaban `;
    }
}

function hapus1() {
    document.getElementById("jaw1").value = "";
    document.getElementById("jaw1").classList.remove("jawaban-salah");


}


function cekHimpunan() {
    const ambilID = document.querySelectorAll(ids1.map(id => `#${id}`).join(', '));
    let a1 = ambilID[0].value.toLowerCase();
    let b1 = ambilID[1].value.toLowerCase();
    let a2 = ambilID[2].value.toLowerCase();
    let b2 = ambilID[3].value.toLowerCase();
    let a3 = ambilID[4].value.toLowerCase();
    let b3 = ambilID[5].value.toLowerCase();
    let a4 = ambilID[6].value.toLowerCase();
    let b4 = ambilID[7].value.toLowerCase();
    let a5 = ambilID[8].value.toLowerCase();
    let b5 = ambilID[9].value.toLowerCase();

    var misal1 = ((a1 == jA1 && b1 == jB1) || (a1 == jA2 && b1 == jB2) || (a1 == jA3 && b1 == jB3) || (a1 == jA4 && b1 == jB4) || (a1 == jA5 && b1 == jB5));
    var misal2 = ((a2 == jA1 && b2 == jB1) || (a2 == jA2 && b2 == jB2) || (a2 == jA3 && b2 == jB3) || (a2 == jA4 && b2 == jB4) || (a2 == jA5 && b2 == jB5));
    var misal3 = ((a3 == jA1 && b3 == jB1) || (a3 == jA2 && b3 == jB2) || (a3 == jA3 && b3 == jB3) || (a3 == jA4 && b3 == jB4) || (a3 == jA5 && b3 == jB5));
    var misal4 = ((a4 == jA1 && b4 == jB1) || (a4 == jA2 && b4 == jB2) || (a4 == jA3 && b4 == jB3) || (a4 == jA4 && b4 == jB4) || (a4 == jA5 && b4 == jB5));
    var misal5 = ((a5 == jA1 && b5 == jB1) || (a5 == jA2 && b5 == jB2) || (a5 == jA3 && b5 == jB3) || (a5 == jA4 && b5 == jB4) || (a5 == jA5 && b5 == jB5));


    if (misal1 && misal2 && misal3 && misal4 && misal5) {
        for (let i = 0; i < ambilID.length; i++) {
            ambilID[i].classList.add("jawaban-benar");
            ambilID[i].readOnly = "true";
            document.getElementById("cekJawabanUser").style.display = "none";
            // document.getElementById("hapus").style.display = "none";

            document.getElementById("keterangan").innerHTML = `<span class="fs-5">Ya, jawaban kamu benar</span> <br> Himpunan pasangan berurutannya adalah = 
           <span class="capitalize">{(` + a1 + ', ' + b1 + '), (' + a2 + ', ' + b2 + '), (' + a3 + ', ' + b3 + '), (' + a4 + ', ' + b4 + '), (' + a5 + ', ' + b5 + ')}</span>';
        }

    } else {
        for (var i = 0; i < ambilID.length; i++) {
            ambilID[i].classList.add("jawaban-salah");
            ambilID[i].readOnly = true;
            ambilID[i].style.cursor = "not-allowed";
            document.getElementById("hapusJawaban").classList.remove("sembunyikan");
            document.getElementById("keterangan").innerHTML = ` <span style="color: #F05454 "> <b> Jawaban salah </b></span> , klik tombol hapus jawaban untuk mengulangi.
        `
        }
    }
}

function hapus() {
    const ambilID = document.querySelectorAll(ids1.map(id => `#${id}`).join(', '));
    ambilID[0].value = "";
    ambilID[1].value = "";
    ambilID[2].value = "";
    ambilID[3].value = "";
    ambilID[4].value = "";
    ambilID[5].value = "";
    ambilID[6].value = "";
    ambilID[7].value = "";
    ambilID[8].value = "";
    ambilID[9].value = "";
    // ambilID[10].value = "";

    for (let i = 0; i < ambilID.length; i++) {
        ambilID[i].classList.remove("jawaban-kosong");
        ambilID[i].classList.remove("jawaban-salah");
        ambilID[i].style.cursor = "auto";
        ambilID[i].readOnly = false;

    }
    document.getElementById("hapusJawaban").classList.add("sembunyikan");

    // document.getElementById("cekJawabanUser").style.display = "inline";
    document.getElementById("keterangan").innerHTML = "";

}


// function hpCek1() {
//     var a = document.getElementById("hp1").value,
//         e = document.getElementById("hp1");
//     "Amir" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
// }

// function hpCek2() {
//     var a = document.getElementById("hp2").value,
//         e = document.getElementById("hp2");
//     "48" == a ? e.classList.add("jawaban-benar") : e.classList.add("jawaban-salah")
// }

// function hpCek3() {
//     var a = document.getElementById("hp3").value;
//     document.getElementById("hp3").style = "Anisa" == a ? "border-bottom:2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom:2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
// }

// function hpCek4() {
//     var a = document.getElementById("hp4").value;
//     document.getElementById("hp4").style = "45" == a ? "border-bottom:2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom:2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
// }

// function hpCek5() {
//     var a = document.getElementById("hp5").value;
//     document.getElementById("hp5").style = "Budi" == a ? "border-bottom:2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
// }

// function hpCek6() {
//     var a = document.getElementById("hp6").value;
//     document.getElementById("hp6").style = "50" == a ? "border-bottom:2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom:2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
// }

// function hpCek7() {
//     var a = document.getElementById("hp7").value;
//     document.getElementById("hp7").style = "Suci" == a ? "border-bottom:2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom:2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
// }

// function hpCek8() {
//     var a = document.getElementById("hp8").value;
//     document.getElementById("hp8").style = "43" == a ? "border-bottom:2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom:2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
// }

function hpCek9() {
    var a = document.getElementById("hp9").value;
    document.getElementById("hp9").style = "1" == a ? "border-bottom:2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom:2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function hpCek10() {
    var a = document.getElementById("hp10").value;
    document.getElementById("hp10").style = "2" == a ? "border-bottom:2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom:2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function hpCek11() {
    var a = document.getElementById("hp11").value;
    document.getElementById("hp11").style = "1" == a ? "border-bottom:2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom:2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function hpCek12() {
    var a = document.getElementById("hp12").value;
    document.getElementById("hp12").style = "3" == a ? "border-bottom:2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom:2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function hpCek13() {
    var a = document.getElementById("hp13").value;
    document.getElementById("hp13").style = "1" == a ? "border-bottom:2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom:2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function hpCek14() {
    var a = document.getElementById("hp14").value;
    document.getElementById("hp14").style = "4" == a ? "border-bottom:2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom:2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function hpCek15() {
    var a = document.getElementById("hp15").value;
    document.getElementById("hp15").style = "2" == a ? "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom:2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function hpCek16() {
    var a = document.getElementById("hp16").value;
    document.getElementById("hp16").style = "3" == a ? "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom:2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function hpCek17() {
    var a = document.getElementById("hp17").value;
    document.getElementById("hp17").style = "2" == a ? "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function hpCek18() {
    var a = document.getElementById("hp18").value;
    document.getElementById("hp18").style = "4" == a ? "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function cekHp1() {
    var a = document.getElementById("hp_1").value;
    document.getElementById("hp_1").style = "Bagus" == a ? "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function cekHp2() {
    var a = document.getElementById("hp_2").value;
    document.getElementById("hp_2").style = "Dina" == a ? "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function hpCek21() {
    var a = document.getElementById("hp21").value;
    document.getElementById("jawabHp2").value = a, "150" == a ? (document.getElementById("hp21").style = "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)", document.getElementById("jawabHp2").style = "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)") : (document.getElementById("hp21").style = "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)", document.getElementById("jawabHp2").style = "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)")
}

function hpCek28() {
    var a = document.getElementById("hp28").value;
    document.getElementById("jawabHp5").value = a, "154" == a ? (document.getElementById("hp28").style = "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)", document.getElementById("jawabHp5").style = "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)") : (document.getElementById("hp28").style = "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)", document.getElementById("jawabHp5").style = "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)")
}

function hpCek27() {
    var a = document.getElementById("hp27").value;
    document.getElementById("jawabHp4").value = a, "157" == a ? (document.getElementById("hp27").style = "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)", document.getElementById("jawabHp4").style = "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)") : (document.getElementById("hp27").style = "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)", document.getElementById("jawabHp4").style = "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)")
}

function hpCek24() {
    var a = document.getElementById("hp24").value;
    document.getElementById("jawabHp3").value = a;
    "155" == a ? (document.getElementById("hp24").style = "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)", document.getElementById("jawabHp3").style = "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)") : (document.getElementById("hp24").style = "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)", document.getElementById("jawabHp3").style = "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)")
}

function cekHp3() {
    var a = document.getElementById("hp_3").value;
    document.getElementById("hp_3").style = "Irwan" == a ? "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function cekHp4() {
    var a = document.getElementById("hp_4").value;
    document.getElementById("hp_4").style = "Fahmi" == a ? "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function cekHp5() {
    var a = document.getElementById("hp_5").value;
    document.getElementById("hp_5").style = "Novi" == a ? "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function cekHpangka() {
    var a = document.getElementById("hp_angka").value;
    document.getElementById("hp_angka").style = "2" == a ? "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function cekHpangka1() {
    var a = document.getElementById("hp_angka1").value;
    document.getElementById("hp_angka1").style = "1" == a ? "border-bottom: 2px solid #00b300; border-radius: 5px; background-color: rgb(102, 255, 102, 0.2)" : "border-bottom: 2px solid #ff3333; border-radius: 5px; background-color: rgb(255, 0, 0, 0.2)"
}

function cekHpangka2() {
    document.getElementById("hp_angka2").value;
    var a = document.getElementById("hp_angka2");
    a.classList.add("jawaban-benar"), a.classList.remove("jawaban-salah")
}

function cekHpangka3() {
    var a = document.getElementById("hp_angka3").value,
        e = document.getElementById("hp_angka3");
    "1" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka4() {
    var a = document.getElementById("hp_angka4").value,
        e = document.getElementById("hp_angka4");
    "5" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka5() {
    var a = document.getElementById("hp_angka5").value,
        e = document.getElementById("hp_angka5");
    "5" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka6() {
    var a = document.getElementById("hp_angka6").value,
        e = document.getElementById("hp_angka6");
    "8" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka7() {
    var a = document.getElementById("hp_angka7").value,
        e = document.getElementById("hp_angka7");
    "1" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka8() {
    var a = document.getElementById("hp_angka8").value,
        e = document.getElementById("hp_angka8");
    "8" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka9() {
    var a = document.getElementById("hp_angka9").value,
        e = document.getElementById("hp_angka9");
    "3" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka10() {
    var a = document.getElementById("hp_angka10").value,
        e = document.getElementById("hp_angka10");
    "8" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka11() {
    var a = document.getElementById("hp_angka11").value,
        e = document.getElementById("hp_angka11");
    "7" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka12() {
    var a = document.getElementById("hp_angka12").value,
        e = document.getElementById("hp_angka12");
    "2" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka13() {
    var a = document.getElementById("hp_angka13").value,
        e = document.getElementById("hp_angka13");
    "1" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka14() {
    var a = document.getElementById("hp_angka14").value,
        e = document.getElementById("hp_angka14");
    "4" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka15() {
    var a = document.getElementById("hp_angka15").value,
        e = document.getElementById("hp_angka15");
    "2" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka16() {
    var a = document.getElementById("hp_angka16").value,
        e = document.getElementById("hp_angka16");
    "6" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka17() {
    var a = document.getElementById("hp_angka17").value,
        e = document.getElementById("hp_angka17");
    "3" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka18() {
    var a = document.getElementById("hp_angka18").value,
        e = document.getElementById("hp_angka18");
    "8" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}

function cekHpangka19() {
    var a = document.getElementById("hp_angka19").value,
        e = document.getElementById("hp_angka19");
    "4" == a ? (e.classList.add("jawaban-benar"), e.classList.remove("jawaban-salah")) : (e.classList.add("jawaban-salah"), e.classList.remove("jawaban-benar"))
}