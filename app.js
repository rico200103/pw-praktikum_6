    const kategori_peminjaman = {
        "Sosial" : {
            abodemen : 10000,
            tarif : 300,
            pajak : 0
        },

        "Rumah" : {
            abodemen : 30000,
            tarif : 500,
            pajak : 0.1
        },

        "Apartemen" : {
            abodemen :50000,
            tarif : 750,
            pajak : 0.15
        },

        "Industri" : {
            abodemen : 75000,
            tarif : 1000,
            pajak : 0.2
        },

        "Villa" : {
            abodemen : 100000,
            tarif : 1250,
            pajak : 0.25
        }
    };

    function nama_check(input, message) {
        if (input.value == "") {
            alert(message);
            return false;
        }

        return true;
    }

    function hari_check(input, message1, message2) {
        if (input.value == "") {
            alert(message1);
            return false;
        }

        if (input.value < 0 || input.value > 30) {
            alert(message2);
            return false;
        }

        return true;
    }

    function createTable(category) {    
        var nama = document.getElementById("nama").value;
        var kategori = document.getElementById("kategori").value;
        var hari = document.getElementById("hari").value;

        
        var bold1 = document.createElement("H1");
        bold1.appendChild(document.createTextNode("TAGIHAN LISTRIK" ));
        document.getElementById("body").appendChild(bold1);

        var user1 = document.createElement("P");
        user1.appendChild(document.createTextNode("Nama Pelanggan: " + nama));
        document.getElementById("body").appendChild(user1);

        var user2 = document.createElement("P");
        user2.appendChild(document.createTextNode("Kategori: " + kategori));
        document.getElementById("body").appendChild(user2);

        var user3 = document.createElement("P");
        user3.appendChild(document.createTextNode("Jumlah Pemakaian: " + hari));
        document.getElementById("body").appendChild(user3);

        var bold2 = document.createElement("H1");
        bold2.appendChild(document.createTextNode("RINCIAN TAGIHAN"));
        document.getElementById("body").appendChild(bold2);

            // table
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        table.appendChild(thead);
        table.appendChild(tbody);
        document.getElementById('body').appendChild(table);

        let headingRow = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "Jumlah";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "Tarif per-KWH";
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "Abodemen";
        let heading_4 = document.createElement('th');
        heading_4.innerHTML = "Sub Total";

        headingRow.appendChild(heading_1);
        headingRow.appendChild(heading_2);
        headingRow.appendChild(heading_3);
        headingRow.appendChild(heading_4);
        thead.appendChild(headingRow);

        let tarif = 0;
        let abodemen = kategori_peminjaman[kategori].abodemen;
        for(let i = 0; i < hari; i++) {
            tarif+= kategori_peminjaman[kategori].tarif;

            let bodyRow = document.createElement('tr');
            let body_1 = document.createElement('td');
            body_1.innerHTML = i + 1;
            let body_2 = document.createElement('td');
            body_2.innerHTML = tarif;
            let body_3 = document.createElement('td');
            body_3.innerHTML = abodemen;
            let body_4 = document.createElement('td');
            body_4.innerHTML = tarif + abodemen;

            bodyRow.appendChild(body_1);
            bodyRow.appendChild(body_2);
            bodyRow.appendChild(body_3);
            bodyRow.appendChild(body_4);
            tbody.appendChild(bodyRow);

        }
        let pajak = (tarif + abodemen) * kategori_peminjaman[kategori].pajak; 

        let bodySubTotal = document.createElement('tr');
        let dummyBody1 = document.createElement('td');
        let dummyBody2 = document.createElement('td');
        let bodySubTotal_1 = document.createElement('td');
        bodySubTotal_1.innerHTML = "Sub Total";
        let bodySubTotal_2 = document.createElement('td');
        bodySubTotal_2.innerHTML = tarif + abodemen;

        bodySubTotal.appendChild(dummyBody1);
        bodySubTotal.appendChild(dummyBody2);
        bodySubTotal.appendChild(bodySubTotal_1);
        bodySubTotal.appendChild(bodySubTotal_2);
        tbody.appendChild(bodySubTotal);

        let bodyPajak = document.createElement('tr');
        let dummyBody3 = document.createElement('td');
        let dummyBody4 = document.createElement('td');
        let bodyPajak1 = document.createElement('td');
        bodyPajak1.innerHTML = "Pajak";
        let bodyPajak2 = document.createElement('td');
        bodyPajak2.innerHTML = pajak;

        bodyPajak.appendChild(dummyBody3);
        bodyPajak.appendChild(dummyBody4);
        bodyPajak.appendChild(bodyPajak1);
        bodyPajak.appendChild(bodyPajak2);
        tbody.appendChild(bodyPajak);

        let bodyBayar = document.createElement('tr');
        let dummyBody5 = document.createElement('td');
        let dummyBody6 = document.createElement('td');
        let bodyBayar1 = document.createElement('td');
        bodyBayar1.innerHTML = "Bayar";
        let bodyBayar2 = document.createElement('td');
        bodyBayar2.innerHTML = tarif + abodemen + pajak;

        bodyBayar.appendChild(dummyBody5);
        bodyBayar.appendChild(dummyBody6);
        bodyBayar.appendChild(bodyBayar1);
        bodyBayar.appendChild(bodyBayar2);
        tbody.appendChild(bodyBayar);

    }
    //mengecek input nama dan input hari
    function validate(){
        let nama_valid = nama_check(document.getElementById("nama"), input_nama);
        let hari_valid = hari_check(document.getElementById("hari"), input_hari, hari_salah);

        
        if (nama_valid && hari_valid) {
            createTable();
        }
    }
    const input_nama = "isikan nama";
    const input_hari = "isikan jumlah hari";
    const hari_salah = "jumlah hari tidak valid";

