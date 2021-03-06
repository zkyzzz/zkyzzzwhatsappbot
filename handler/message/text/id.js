exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas sticker yang anda buat dari bot ini serta video, gambar maupun data lainnya yang anda dapatkan dari Source code / bot ini.
- Source code / bot tidak boleh digunakan untuk layanan yang bertujuan/berkontribusi dalam: 
    • seks / perdagangan manusia
    • perjudian
    • perilaku adiktif yang merugikan 
    • kejahatan
    • kekerasan (kecuali jika diperlukan untuk melindungi keselamatan publik)
    • pembakaran hutan / penggundulan hutan
    • ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, identitas gender, ras, seksualitas, agama, kebangsaan

Source Code BOT : https://github.com/Kry9toN/KryPtoN-WhatsApp-Bot
NodeJS WhatsApp library: https://github.com/open-wa/wa-automate-nodejs

Best Dhimas (KryPtoN).`
}

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

Edukasi:

1. *!translate* _<kode bahasa>_
Untuk mengartikan pesan menjadi bahasa yang ditentukan.
Penggunaan: Balas/quote/reply pesan yang ingin kamu translate dengan _*!translate id*_ <- id adalah kode bahasa. kode bahasa dapat dilihat di *https://bit.ly/33FVldE*

2. *!brainly* _<pertanyaan>_
Untuk mencari jawaban tugas sekolah.
Penggunaan: *Balas/quote/reply pesan/pertanyaan yang ingin kamu cari di brainly*

3. *!wiki* _<pertanyaan>_
Untuk mencari di wikipedia.
Penggunaan: *Balas/quote/reply pesan/pertanyaan yang ingin kamu cari di wiki*

Lain-lain:
1. *!resi* _<kurir>_ _<nomer resi>_
Untuk memeriksa status pengiriman barang, daftar kurir: jne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex.
Penggunaan: kirim pesan dengan format _*!resi jne 1238757632*_

2. *!meme* _<teks atas>_ | _<teks bawah>_
Untuk membuat meme dengan teks atas dan bawah
Penggunaan: kirim gambar dengan caption _*!meme aku atas | kamu bawah*_, atau juga bisa dengan membalas gambar yang sudah ada.

3. *!igstalk* _<username>_
Untuk menstalk mantan, username jangan pakai @
Penggunaan: *!igstalk dhimasbpy*

4. *!ceklokasi*
Cek lokasi penyebaran covid-19 di daerah sekitarmu (kelurahan).
Penggunaan: kirimkan lokasimu lalu balas/quote/reply lokasi yang kamu kirim dengan _*!ceklokasi*_

5. *!tnc*
Menampilkan Syarat dan Kondisi Bot.

6. *!donasi*
menampilkan informasi donasi.

7. *!update, !channel*
Cek update bot ini

Hope you have a great day!✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah beberapa fitur admin grup yang ada pada bot ini!

1. *!kick* @user
Untuk mengeluarkan member dari grup (bisa lebih dari 1).

2. *!promote* @user
Untuk mempromosikan member menjadi Admin grup.

3. *!demote* @user
Untuk demosikan Admin grup.

4. *!tagall*
Untuk mention semua member grup. (Premium Only)

5. *!del*
Untuk menghapus pesan bot (balas pesan bot dengan !del)`
}

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi melalui link berikut:
1. Saweria: https://saweria.co/donate/Kry9toN

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih.`
}

exports.textPremi = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Ini adalah fitur premium untuk kamu

1. *!tiktok* _<tiktok url>_
Untuk mengunduh video dari video tiktok.
Penggunaan: kirim pesan dengan format *!tiktok https://www.tiktok.com/@itsandani/video/6869248690381425922* 

2. *!fb* _<post/video url>_
Untuk mengunduh video dari Facebook.
Penggunaan: kirim pesan dengan format *!fb https://www.facebook.com/.....*

3. *!ig* _<instagram post url>_
Untuk mengunduh photo dan video dari instagram.
Penggunaan: kirim pesan dengan format *!ig https://www.instagram.com/p/BPOd1vhDMIp/*

4. *!twt* _<twitter post url>_
Untuk mengunduh photo dan video dari Twitter.
Penggunaan: kirim pesan dengan format *!twt https://twitter.com/ntsana_/status/1306108656887324672*

5. *!ytmp3* _<yt video url>_
Untuk mengunduh musik dari Youtube.
Penggunaan: kirim pesan dengan format *!ytmp3 https://youtu.be/cIYdfWFsMXw*

6. *!ytmp4* _<yt video url>_
Untuk mengunduh video dari Youtube.
Penggunaan: kirim pesan dengan format *!ytmp4 https://youtu.be/cIYdfWFsMXw*

7. *!sticker nobg*
Untuk merubah gambar menjadi sticker tanpa background. 
Penggunaan: kirim gambar dengan caption !sticker nobg atau balas gambar yang sudah dikirim dengan !sticker nobg

8. *!gifsticker* _<Giphy URL>_ / *!stickergif* _<Giphy URL>_
Untuk merubah gif menjadi sticker (Giphy Only)
Penggunaan: Kirim pesan dengan format *gifsticker https://media.giphy.com/media/JUvI2c1ddyzkwK4RlV/giphy.gif*

9. *!sticker*
Untuk merubah gambar menjadi sticker. 
Penggunaan: kirim gambar dengan caption !sticker atau balas gambar yang sudah dikirim dengan !sticker

10. *!sticker* _<Url Gambar>_
Untuk merubah gambar dari url menjadi sticker.
Penggunaan: kirim !sticker dengan url gambar`
}

exports.textLinkPremium = () => {
    return `
https://telegra.ph/Langganan-Krypton-Bot-10-21

Nomor wallet:
083108180955

Bank: BTPN
norek 90130016722
a/n OVIN

Wallet:
OvO-Gopay-Dana-LinkAja

Hubungi @6283108180955

NB: tidak menerima pulsa ya kak`
}