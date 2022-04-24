const mysql = require('mysql2/promise');

const createConnection = async () => {
    return await mysql.createConnection({
        host: '151.106.118.71',
        user: 'u1272577_cvmilenial',
        password: 'J454CVM!L3N!4L1056294738',
        database: 'u1272577_cvmilenial',
    })
}
const getReply = async (keyword) => {
    const connection = await createConnection();

    // await connection.execute("INSERT INTO wa_received VALUES (NULL,'"+keyword+"')");
    // if(keyword.substr(0,7)=="insert:") {
    //     var pecahkeyword1 = keyword.split("insert:");
    //     var pecahkeyword2 = pecahkeyword1[1].split(",");
    //     var keywordnew = pecahkeyword2[0];
    //     var messagenew = pecahkeyword2[1];
    //     await connection.execute("INSERT INTO wa_reply VALUES (NULL,'"+keywordnew+"','"+messagenew+"')");
    //     connection.close();
    // }
    // if(keyword.substr(0,7)=="b0tkp1/") {
    //     var pecahkeyword1 = keyword.split("b0tkp1/");
    //     var pecahkeyword2 = pecahkeyword1[1].split(":");

    //     if(pecahkeyword2[0]=="search") {
    //         if(pecahkeyword2[1]=="assetlike") {
    //             var key = pecahkeyword2[2];
    //             const [cekdataasset] = await connection.execute("SELECT * FROM GSITASSETSTRX INNER JOIN GSITASSETS ON GSITASSETSTRX.id_asset = GSITASSETS.id WHERE (hostname LIKE '%"+key+"%' OR persnm LIKE '%"+key+"%') AND status >='1'");
    //             // var message = "*Detail Asset :* \n\n";
    //             // message += ""+
    //             //     "Hostname : "+cekdataasset[0].hostname+"\n"+
    //             //     "Nama : "+cekdataasset[0].persnm;
    //             var message1 = "*List Asset :* \n\n";
    //             for (let i = 0; i < cekdataasset.length; i++) { 
    //               message1 += ""+
    //                 "Hostname : "+cekdataasset[i].hostname+"\n"+
    //                 "Nama : "+cekdataasset[i].persnm+'\n\n';
    //             }
    //             message1 += "";
    //             message = message1.substr(0,message1.length-2);
    //         }
    //         if(pecahkeyword2[1]=="assetdetail") {
    //             var key = pecahkeyword2[2];
    //             const [cekdataasset] = await connection.execute("SELECT * FROM GSITASSETSTRX INNER JOIN GSITASSETS ON GSITASSETSTRX.id_asset = GSITASSETS.id WHERE (hostname LIKE '%"+key+"%' OR persnm LIKE '%"+key+"%') AND status >='1' LIMIT 1");
    //             var message = "*Detail Asset "+key+" :* \n";
    //             message += ""+
    //                 "Hostname : "+cekdataasset[0].hostname+"\n"+
    //                 "MAC Address : "+cekdataasset[0].mac_address+"\n"+
    //                 "Asset Tag : "+cekdataasset[0].asset_tag+"\n"+
    //                 "Model ID : "+cekdataasset[0].model_id+"\n"+
    //                 "Model Name : "+cekdataasset[0].model_name+"\n"+
    //                 "Category Name : "+cekdataasset[0].category_name+"\n"+
    //                 "Supplier Name : "+cekdataasset[0].supplier_name+"\n"+
    //                 "NIK : "+cekdataasset[0].persno+"\n"+
    //                 "Nama Karyawan : "+cekdataasset[0].persnm+"\n"+
    //                 "Notes : "+cekdataasset[0].notes+"\n"+
    //                 "Cost Centre Name : "+cekdataasset[0].costctrnm+"\n"+
    //                 "Jumlah Unit : "+cekdataasset[0].jumlah;
    //         }
    //     }
    //     else if(pecahkeyword2[0]=="count") {
    //         if(pecahkeyword2[1]=="outboxwa") {
    //             const [hitcountoutboxwa] = await connection.execute("SELECT COUNT(ID) AS TOTAL FROM `outbox` WHERE `StatusCode` = '-1'");
    //             var message = "*Jumlah Outbox WhatsApp outstanding ada "+hitcountoutboxwa[0].TOTAL+" pesan.*";
    //         }
    //         else if(pecahkeyword2[1]=="outboxmail") {
    //             const [hitcountoutboxmail] = await connection.execute("SELECT COUNT(MailID) AS TOTAL FROM `MailSend` WHERE `STATUS` = '0'");
    //             var message = "*Jumlah Outbox Email outstanding ada "+hitcountoutboxmail[0].TOTAL+" Email.*";
    //         }
    //     }
    //     else if(pecahkeyword2[0]=="command") {
    //         if(pecahkeyword2[1]=="restartwapending") {
    //             const [hitcountsendwa2] = await connection.execute("SELECT COUNT(ID) AS TOTAL FROM `outbox` WHERE `StatusCode` = '0'");
    //             await connection.execute("UPDATE `outbox` SET `StatusCode` = '-1' WHERE `StatusCode` = '0'");
    //             var message = "Pesan WhatsApp yang pending sudah dipulihkan, jumlah pesan WhatsApp pending ada "+hitcountsendwa2[0].TOTAL+" pesan.";
    //         }
    //     }
    //     else if(pecahkeyword2[0]=="menu") {
    //         // var message = "*Detail Asset :* \n\n";
    //         // message += ""+
    //         //     "Hostname : "+cekdataasset[0].hostname+"\n"+
    //         //     "Nama : "+cekdataasset[0].persnm;
    //     }

    //     connection.close();
    //     return message;
    //     return false;
    // }

    // if(keyword.substr(0,14)=="cari karyawan ") {
    //     var key = keyword.substr(9,9999999);
    //     const [cekdata] = await connection.execute("SELECT * FROM PERSONALMASTER WHERE PERSNM LIKE '%"+key+"%'");
    //     var message1 = "*Daftar Karyawan yang tersedia :* \n\n";
    //     for (let i = 0; i < cekdata.length; i++) { 
    //         if(cekdata[i].NOTELP.substr(0,2)=='08') {
    //             var nowhatsapp = "62"+cekdata[i].NOTELP.substr(1,9999999999);
    //         }
    //         else if(cekdata[i].NOTELP.substr(0,3)=='628') {
    //             var nowhatsapp = cekdata[i].NOTELP;
    //         }
    //         else {var nowhatsapp = '';}
    //       message1 += ""+
    //         "Nama : "+cekdata[i].PERSNM+"\n"+
    //         "No. WA : wa.me/"+nowhatsapp+"\n\n";
    //     }
    //     message1 += "";
    //     message = message1.substr(0,message1.length-2);
    //     connection.close();
    //     return message;
    //     return false;
    // }

    // if(keyword.substr(0,9)=="cari atk ") {
    //     var key = keyword.substr(9,9999999);
    //     const [cekdataatk] = await connection.execute("SELECT * FROM GSGAATKMASTER WHERE nama LIKE '%"+key+"%' AND status = '1'");
    //     var message1 = "*Daftar Barang ATK yang tersedia :* \n\n";
    //     for (let i = 0; i < cekdataatk.length; i++) { 
    //         if(cekdataatk[i].STOK<1) {var stok = 'Kosong';}
    //         else {var stok = cekdataatk[i].STOK+' '+cekdataatk[i].SATUAN;}
    //       message1 += ""+
    //         "Nama : "+cekdataatk[i].NAMA+"\n"+
    //         "Stok : "+stok+'\n\n';
    //     }
    //     message1 += "";
    //     message = message1.substr(0,message1.length-2);
    //     connection.close();
    //     return message;
    //     return false;
    // }
    // if(keyword=="lihat daftar atk") {
    //     var key = keyword.substr(9,9999999);
    //     const [cekdataatk] = await connection.execute("SELECT * FROM GSGAATKMASTER WHERE status = '1'");
    //     var message1 = "*Daftar Semua Barang ATK yang tersedia :* \n\n";
    //     for (let i = 0; i < cekdataatk.length; i++) { 
    //       message1 += ""+
    //         "Nama : "+cekdataatk[i].NAMA+"\n"+
    //         "Stok : "+cekdataatk[i].STOK+' '+cekdataatk[i].SATUAN+'\n\n';
    //     }
    //     message1 += "";
    //     message = message1.substr(0,message1.length-2);
    //     connection.close();
    //     return message;
    //     return false;
    // }

    // if(keyword=='info') {
    //     const [hitStockPcsHRC] = await connection.execute("SELECT COUNT(*) AS TOTAL FROM STOCKHRC WHERE MATERIAL != 'C-HRC' AND QTY != '0'");
    //     var JumlahPcsHRC = new Intl.NumberFormat('de-DE').format(hitStockPcsHRC[0].TOTAL);
    //     var message = "*~ Info Dashboard KHIPipe Terbaru ~*";
    //     message += ""+
    //                 "Jumlah Pcs"+hitStockPcsHRC[0].TOTAL+
    //                 "Jumlah Pcs"+hitStockPcsHRC[0].TOTAL;
    //     connection.close();
    //     return message2;
    //     return false;
    // }
    // else {
    //     const [rows] = await connection.execute('SELECT message FROM wa_reply WHERE keyword = ?', [keyword]);
    //     if(rows.length > 0) return rows[0].message;
    //     connection.close();
    //     return false;
    // }


    connection.close();
    return message;
    return false;

}
module.exports = {
    createConnection,
    getReply
} 