# Laporan MS4 High Fidelity Prototype

## Identitas Dokumen

| Atribut | Keterangan |
|---|---|
| Nama aplikasi | Prodak |
| Mata kuliah | IF3151 Interaksi Manusia dan Komputer |
| Milestone | MS4 High Fidelity Prototype |
| Kelompok | TODO: isi nama kelompok |
| Repositori/prototype | React/Vite high-fidelity mobile app prototype |

### Pembagian Tanggung Jawab Layar

| NIM | Nama | Tanggung jawab layar |
|---|---|---|
| TODO: NIM | TODO: Nama anggota | Feed, Activity Detail, Activities, Comments |
| TODO: NIM | TODO: Nama anggota | Record, Save Activity, Edit Activity |
| TODO: NIM | TODO: Nama anggota | Groups, Club Detail, Browse Events, Event Detail |
| TODO: NIM | TODO: Nama anggota | Create Club, Search Friend, Search Club |
| TODO: NIM | TODO: Nama anggota | Login, Registration, Profile, Messages, Share flows |

## Rangkuman Topik Desain dan Tools

Prodak adalah prototype aplikasi mobile untuk mendukung produktivitas berbasis sesi kerja, bukti aktivitas, komunitas, event, dan perkembangan personal. Fokus utama aplikasi adalah membantu pengguna merekam aktivitas produktif, membagikan hasil kerja, mengikuti komunitas atau event, dan melihat progres produktivitas secara ringkas.

Target pengguna aplikasi adalah mahasiswa, pekerja pengetahuan, desainer, pengembang, dan pengguna yang ingin membangun kebiasaan kerja terstruktur melalui sesi fokus, komunitas, dan rekam jejak aktivitas.

Tools dan teknologi yang digunakan:

| Kategori | Implementasi |
|---|---|
| Framework | React 19 dan Vite 6 |
| Styling | Tailwind CSS 4, CSS variables di `src/index.css`, dan aturan styling bersama di `src/App.css` |
| Icon | `@hugeicons/react` dan `@hugeicons/core-free-icons` melalui komponen `Icon` |
| Komponen UI | Komponen reusable di `src/components`, seperti `Button`, `Pill`, `AppHeader`, `ScreenHeader`, `BottomNavigation`, `FeedPost`, `ShareBottomSheet`, dan form field |
| Asset | `map-pic.png`, `landscape-itb.png`, `avatar.png`, `indomie-logo.png`, logo Google/Apple/Facebook/Instagram/WhatsApp, serta video login |
| Data dummy | `src/constants/data.js` |
| Design token | `src/constants/theme.js` dan CSS variable root |
| Referensi low-fidelity | Gambar wireframe di `src/img-hires` dan `src/img`; gambar tersebut dipakai sebagai acuan struktur, bukan dirender langsung sebagai UI |

## Material Design dan Design System

High-fidelity prototype menggunakan pendekatan visual yang konsisten dengan prinsip Material Design: hierarki jelas, komponen dapat dikenali, affordance tombol terlihat, serta penggunaan elevation untuk memisahkan lapisan UI.

### Tipografi

Prototype menggunakan satu keluarga font utama, yaitu `Plus Jakarta Sans`. Font diimpor sebagai variable font dengan rentang weight 200 sampai 800 melalui `src/index.css`. Token `--ui` dan `--heading` sama-sama menempatkan `Plus Jakarta Sans` sebagai font utama, dengan fallback `Inter`, `system-ui`, dan `sans-serif`.

| Weight Plus Jakarta Sans | Use case | Alasan penggunaan |
|---|---|---|
| 200 / Extra Light | Tidak digunakan sebagai gaya utama UI | Terlalu tipis untuk keterbacaan mobile; hanya tersedia bila dibutuhkan untuk dekorasi sangat ringan |
| 300 / Light | Tidak dominan digunakan | Dihindari untuk teks fungsional karena prototype membutuhkan kontras dan keterbacaan tinggi |
| 400 / Regular | Body text dan teks deskriptif ringan | Cocok untuk paragraf pendek atau konten yang tidak perlu menjadi fokus utama |
| 500 / Medium | Metadata, subtitle, timestamp, lokasi, dan placeholder | Memberi keterbacaan cukup tanpa mengalahkan judul atau aksi utama |
| 600 / SemiBold | Label, tab, pill, nama user, tombol sekunder, dan list item | Membantu elemen interaktif terlihat jelas tanpa terlalu berat |
| 700 / Bold | Judul card, judul section, metric, dan teks tombol penting | Membentuk hierarki visual yang mudah dipindai |
| 800 / ExtraBold | Heading utama, CTA utama, angka besar, dan elemen hero | Dipakai untuk titik fokus layar agar informasi utama langsung tertangkap |

Ukuran tipografi dibedakan untuk judul layar, section title, card title, body, metadata, dan metric. Judul memakai bobot tebal untuk membangun hierarki visual, sedangkan metadata memakai ukuran lebih kecil dan warna sekunder agar informasi tambahan tidak mengganggu fokus utama.

Skala tipografi yang digunakan pada implementasi adalah sebagai berikut.

| Scale category | Characteristics | Size | Weight |
|---|---|---:|---:|
| Display / Hero title | Teks paling dominan pada layar khusus, seperti hero onboarding, angka challenge, dan metric besar pada Record | `30px-34px` | `800` atau `font-black` |
| Page title / Screen title | Judul utama layar, header, dan title pada bottom sheet | `18px-24px` | `700-800` atau `font-black` |
| Section title | Judul bagian seperti `Share to`, `About`, `Recommended For You`, dan heading section list | `16px-22px` | `650-800` |
| Card title | Judul post, activity card, event card, club card, dan attachment preview | `15px-18px` | `650-800` |
| Body text | Deskripsi, caption, about text, isi pesan, dan paragraf pendek | `13px-16px` | `400-500` |
| Label / Control text | Label tombol, pill, tab, filter, form label, dan teks interaktif kecil | `12px-15px` | `600-700` |
| Metadata | Timestamp, lokasi, subtitle, helper text, detail tambahan, dan keterangan sekunder | `11px-13px` | `500` |
| Metric | Angka performa seperti durasi, skor, progress, dan statistik utama | `18px-28px` | `650-700` |
| Bottom navigation label | Label navigasi utama di bawah layar | `10px` | `700` |

Secara konkret, penerapan tipografi pada prototype dapat dijelaskan melalui beberapa kategori utama: judul utama menggunakan sekitar `20px/700`, judul section menggunakan sekitar `16px/650`, judul card menggunakan sekitar `15px/650`, body text menggunakan sekitar `13px/450`, metadata menggunakan sekitar `11px/500`, metric utama menggunakan sekitar `28px/700`, dan metric kecil menggunakan sekitar `18px/650`. Pada layar khusus seperti Challenge Detail, Event Detail, Share Sheet, dan Message Detail, ukuran serta weight dapat dinaikkan untuk memperkuat fokus visual pada konten utama.

Pemilihan ukuran dan weight tidak dibuat sepenuhnya kaku karena prototype ini dirancang untuk konteks mobile yang memiliki ruang layar terbatas dan jenis konten yang bervariasi. Pada beberapa layar, teks perlu lebih ringkas agar tidak menabrak elemen lain, sedangkan pada layar lain angka, judul, atau call-to-action perlu dibuat lebih kuat agar pengguna cepat memahami prioritas informasi. Dengan demikian, skala tipografi digunakan sebagai panduan utama, sementara penyesuaian kecil dilakukan sesuai kepadatan konten, fungsi layar, dan kebutuhan hierarki visual.

### Warna

Warna utama aplikasi adalah biru `#2563EB`. Warna ini digunakan secara konsisten untuk aksi utama, status aktif, ikon penting, navigasi aktif, tombol Join/Share, highlight metric, dan elemen pilihan yang sedang aktif. Warna netral putih, hitam, dan abu-abu digunakan untuk latar, teks, divider, dan surface. Warna kuning digunakan terbatas sebagai aksen achievement atau stopped state pada Record. Penggunaan warna dibatasi agar UI tetap bersih, konsisten, dan mudah dipindai.

| Token/warna | Kode warna | Use case pada prototype | Alasan desain |
|---|---:|---|---|
| Primary / Blue | `#2563EB` | Tombol aksi utama, status aktif bottom navigation, ikon aktif, pill/filter aktif, tombol Join dan Share, marker lokasi, metric highlight | Menjadi warna identitas interaktif utama. Biru memberi kesan produktif, dapat dipercaya, dan mudah dikenali sebagai aksi |
| Primary Dark | `#1D4ED8` | Variasi hover/penekanan visual pada aksi utama bila diperlukan | Menjaga kontras saat elemen biru perlu tampil lebih kuat |
| Primary Soft / Blue Soft | `#EFF6FF` | Background aksen lembut, chip aktif, area highlight ringan | Memberi penekanan tanpa membuat layar terlalu ramai |
| Black / Text Primary | `#0A0A0A` | Judul layar, judul card, teks utama, tombol teks penting, kartu share gelap | Memberi kontras tinggi dan hierarki kuat untuk informasi utama |
| White / Surface | `#FFFFFF` | Latar utama layar, card, header, bottom sheet, input | Menjaga tampilan bersih dan mendukung keterbacaan |
| Surface Muted | `#F5F5F5` | Placeholder media, search field, avatar placeholder, area muted | Membedakan area non-primer tanpa kontras berlebihan |
| Text Secondary | `#525252` | Metadata, timestamp, subtitle, deskripsi event, caption pendukung | Menurunkan prioritas informasi pendukung agar hierarki tetap jelas |
| Text Tertiary | `#8A8A8A` | Placeholder input, label pasif, teks nonaktif | Mengindikasikan informasi sekunder atau belum diisi |
| Border | `#E5E5E5` | Border input, card, footer, button outline | Memisahkan elemen secara halus tanpa shadow berlebih |
| Divider | `#EEEEEE` | Garis pemisah list, header, section | Membantu scanning antarbagian dengan noise visual rendah |
| Yellow / Achievement | `#FACC15` | Achievement, aksen progres, state stopped pada Record | Menandai perhatian khusus atau status berbeda dari aksi utama |
| Yellow Soft | `#FEF9C3` | Background aksen achievement ringan | Memberi aksen hangat tanpa mengganggu warna utama |
| Success | `#16A34A` | Status positif seperti proof/verified jika diperlukan | Memberi sinyal keberhasilan yang umum dipahami |
| Warning | `#F59E0B` | Peringatan ringan atau status perhatian | Memberi peringatan tanpa langsung bermakna error |
| Danger | `#DC2626` | Error, aksi destruktif, atau kondisi gagal jika muncul | Mengikuti konvensi warna bahaya pada UI |

Dalam implementasi, warna biru dipakai sebagai warna konsisten untuk navigasi dan aksi, sedangkan warna lain bersifat pendukung. Pendekatan ini menjaga consistency and standards karena pengguna dapat mengenali elemen yang dapat diklik atau status aktif hanya dari warna dan bentuknya.

### Spacing, Radius, dan Elevation

Spacing menggunakan pola berulang 4/8/12/16/24/32 px. Komponen seperti card, bottom sheet, dan input menggunakan border radius sedang hingga besar agar terasa mobile-friendly. Shadow lembut digunakan pada header, bottom navigation, card, floating action, dan bottom sheet. Token penting yang digunakan adalah:

| Elemen | Token/implementasi |
|---|---|
| Header shadow | `0 2px 10px rgba(15, 23, 42, 0.04)` |
| Navbar shadow | `0 -4px 18px rgba(15, 23, 42, 0.08)` |
| Card shadow | `0 6px 18px rgba(15, 23, 42, 0.05)` |
| Button radius | `999px` |
| Card radius | sekitar `12px-16px`, dengan beberapa preview visual lebih besar sesuai konteks |

### Icon, Layout, dan Komponen

Icon menggunakan Hugeicons agar gaya visual konsisten. Layout utama menggunakan daftar, grid, tab/pill, bottom navigation, sticky header, dan bottom sheet. Bottom navigation dibatasi pada empat menu utama: Home, Record, Groups, dan Progress. Detail screen dan record flow menjaga fokus dengan header dan aksi kontekstual.

## Laporan High-Fidelity Prototype per Layar

> Catatan: placeholder screenshot disiapkan untuk laporan akhir. Screenshot dapat diambil dari artboard yang dirender oleh `App.jsx`.

### Login Intro

![Login Intro](../assets/docs/login-intro.png)

Tujuan layar ini adalah memperkenalkan aplikasi sebelum pengguna masuk. Fitur utama berupa visual onboarding menggunakan asset `login-intro.png`/video login dan call-to-action menuju autentikasi. Desain memanfaatkan media besar agar aplikasi terasa lebih nyata dibanding wireframe.

Heuristik terkait: aesthetic and minimalist design melalui fokus pada satu aksi utama, match between system and real world melalui tampilan intro aplikasi mobile.

### Login

![Login](../assets/docs/login.png)

Layar Login menyediakan autentikasi melalui email dan social login Google, Apple, serta Facebook. Komponen utama yang digunakan adalah `AuthSocialButton`, logo provider, dan form autentikasi. Social login mendukung recognition rather than recall karena pengguna mengenali logo penyedia layanan.

Heuristik terkait: consistency and standards melalui pola login umum, error prevention melalui struktur input yang jelas.

### Registration dan Forgot Password

![Registration](../assets/docs/registration.png)
![Forgot Password](../assets/docs/forgot-password.png)

Registration dan Forgot Password melengkapi alur autentikasi. Keduanya mempertahankan gaya input, tombol, dan header yang konsisten dengan Login. Tujuannya adalah memberi kontrol kepada pengguna untuk membuat akun atau memulihkan akses.

Heuristik terkait: user control and freedom karena pengguna dapat berpindah alur, consistency and standards melalui form yang seragam.

### Feed

![Feed](../assets/docs/feed.png)

Feed menampilkan campuran post individu dan post club. Implementasi menggunakan `AppHeader`, `FeedPost`, `BottomNavigation`, media map/foto, serta `ShareSheet`. Setiap post menyertakan metadata tanggal/waktu, user, caption, dan action seperti kudos, komentar, dan share.

Alur interaksi: pengguna melihat post, membuka detail aktivitas, membuka komentar, atau membuka share sheet. Desain feed memakai card/list agar informasi dapat dipindai cepat.

Heuristik terkait: visibility of system status melalui metadata waktu dan jumlah interaksi; consistency and standards melalui pola feed sosial; aesthetic and minimalist design dengan pembatasan label yang tidak perlu.

### Messages dan Message Detail

![Messages](../assets/docs/messages.png)
![Message Detail](../assets/docs/message-detail.png)

Messages menampilkan daftar percakapan menggunakan `avatar.png` dan data `messageThreads`. Message Detail menampilkan chat berisi activity card yang dapat dikirim ulang melalui composer attachment. Tombol back menggunakan `HugeiconsIcon` dengan `ArrowLeft01Icon`.

Alur interaksi: pengguna membuka daftar pesan, memilih profil, masuk ke isi chat, melihat activity preview, dan menggunakan input “Send a message”. Desain menggunakan pola aplikasi pesan yang familiar.

Heuristik terkait: match between system and real world karena layout menyerupai chat mobile; recognition rather than recall melalui avatar dan preview pesan; user control and freedom melalui tombol back.

### Activities

![Activities](../assets/docs/activities.png)

Activities menampilkan daftar aktivitas milik pengguna. Kartu aktivitas menggunakan `FeedPost` agar konsisten dengan Feed. Tab kecil seperti All, Deep Work, Study, Club, dan Proof membantu filter konseptual.

Heuristik terkait: consistency and standards karena activity card sama dengan feed; recognition rather than recall melalui chip filter.

### Activity Detail

![Activity Detail](../assets/docs/activity-detail.png)

Activity Detail menampilkan ringkasan aktivitas, bukti map, metric grid, proof signals, komentar, dan tombol Edit/Share. Komponen utama meliputi `ActivityHeader`, `ActivityMap`, `MetricGrid`, `SectionHeader`, dan `Button`.

Alur interaksi: pengguna melihat detail, meninjau bukti, membaca komentar, mengedit aktivitas, atau membuka Share Activity sebagai bottom sheet di atas konteks detail.

Heuristik terkait: visibility of system status melalui metric dan proof signals; match between system and real world melalui peta dan bukti aktivitas; user control melalui aksi Edit dan Share.

### Record, Record Playing, dan Record Stopped

![Record](../assets/docs/record.png)
![Record Playing](../assets/docs/record-playing.png)
![Record Stopped](../assets/docs/record-stopped.png)

Record menggunakan `map-pic.png` sebagai latar map full-screen. Terdapat state idle, working, dan stopped. Tombol Start/Resume/Finish memakai Hugeicons dan diletakkan dalam bottom sheet. Record screen sengaja tidak memiliki bottom navigation agar fokus pada sesi yang sedang berlangsung.

Heuristik terkait: visibility of system status melalui timer dan status Work/Working/Stopped; error prevention melalui pemisahan tombol Resume dan Finish; aesthetic and minimalist design melalui kontrol terbatas.

### Save Activity dan Edit Activity

![Save Activity](../assets/docs/save-activity.png)
![Edit Activity](../assets/docs/edit-activity.png)

Save Activity dan Edit Activity menggunakan komponen form reusable: `FormField`, `SelectField`, `FeelingField`, `VisibilityField`, `OptionBottomSheet`, dan `FeelingBottomSheet`. Keduanya memuat konsep kategori aktivitas, perasaan, visibility, dan detail aktivitas.

Heuristik terkait: consistency and standards melalui field reusable; recognition rather than recall melalui pilihan bottom sheet; error prevention melalui option picker.

### Progress

![Progress](../assets/docs/progress.png)

Progress menampilkan grafik produktivitas, metric, leaderboard, dan tombol share. Komponen yang digunakan meliputi `ProgressChart`, `MetricCard`, dan data mingguan/bulanan dari `constants/data.js`.

Heuristik terkait: visibility of system status karena progres ditampilkan dalam angka dan grafik; flexibility and efficiency karena ringkasan dapat dipindai cepat.

### Groups dan GroupClub

![Groups](../assets/docs/groups.png)
![Groups Challenges](../assets/docs/groups-challenges.png)

Groups memiliki dua fokus utama: Challenges dan Clubs. State fokus menggunakan underline/pill yang jelas. Pengguna dapat masuk ke Browse Events, Club Detail, atau search.

Heuristik terkait: consistency and standards melalui tab navigation; recognition rather than recall melalui label Challenges/Clubs.

### Browse Events, Event Filter, Event Detail, dan Share Event

![Browse Events](../assets/docs/browse-events.png)
![Work Type Bottom Sheet](../assets/docs/browse-events-work-type.png)
![Event Detail](../assets/docs/event-detail.png)
![Event Joined](../assets/docs/event-joined.png)
![Share Event](../assets/docs/share-event.png)

Browse Events menampilkan daftar event, filter, dan pill Work. Saat pill Work diklik, muncul bottom sheet pemilihan tipe fokus. Event card dapat dibuka menjadi Event Detail dengan map, tanggal, type, format, about, tombol Join, dan Share. Setelah Join, UI berubah menjadi state “You're Going” dan tombol Share utama. Share Event menggunakan `ShareBottomSheet` dan `ShareTargets`.

Heuristik terkait: visibility of system status melalui state joined; user control melalui back, filter, dan close sheet; match between system and real world melalui map dan tanggal event; consistency melalui penggunaan bottom sheet yang sama dengan share lain.

### Club Detail dan Share Club

![Club Detail](../assets/docs/club-detail.png)
![Share Club](../assets/docs/share-club.png)

Club Detail menampilkan hero image, logo club, jumlah member, status public, tombol Join, tombol Share, composer post, dan recent posts. Share Club kini dibuka sebagai bottom sheet di atas Club Detail sehingga konteks tetap terlihat.

Heuristik terkait: visibility of system status melalui Joined/Join; consistency melalui `FeedPost` untuk post club; user control melalui share sheet yang dapat ditutup.

### Create Club

![Create Club](../assets/docs/create-club.png)

Create Club terdiri dari lima langkah artboard. Alur ini mengatur produktivitas club, nama, lokasi, pengaturan, dan preview. Desain multi-step mengurangi beban kognitif dengan memecah form panjang.

Heuristik terkait: error prevention melalui langkah bertahap; recognition rather than recall melalui pilihan kategori; user control melalui navigasi antar langkah.

### Create Post

![Create Post](../assets/docs/create-post.png)

Create Post menggunakan `PostComposer`. Komponen yang sama digunakan juga saat pengguna membagikan aktivitas ke club. Composer memiliki mode input utama, detail title/body, allow comments, dan action media.

Heuristik terkait: consistency and standards karena composer dipakai ulang; flexibility and efficiency karena alur post biasa dan share-to-club memakai pola sama.

### Comments

![Comments](../assets/docs/comments.png)

Comments menampilkan diskusi dari activity/post dengan item komentar. Komponen `CommentItem` menjaga konsistensi avatar, teks, waktu, dan likes.

Heuristik terkait: visibility of system status melalui waktu komentar dan jumlah likes; match between system and real world melalui pola komentar sosial.

### Search Friend dan Search Club

![Search Friend](../assets/docs/search-friend.png)
![Search Club](../assets/docs/search-club.png)

Search screen dipakai untuk mencari teman atau club. Heading dibuat sederhana sebagai “Search”, dengan tab Friends/Clubs di atas input. `SearchBar`, `UserRow`, dan empty state membantu navigasi.

Heuristik terkait: recognition rather than recall melalui search input dan daftar hasil; consistency melalui struktur Search Friend/Search Club yang mirip.

### Notifications

![Notifications](../assets/docs/notifications.png)

Notifications menampilkan update kudos, komentar, club, dan achievement. Data berasal dari `notifications` di `constants/data.js`. List notification memakai ikon dan metadata waktu.

Heuristik terkait: visibility of system status karena pengguna mengetahui aktivitas terbaru; aesthetic and minimalist design melalui list ringkas.

### Profile, Edit Profile, dan QR Code

![Profile](../assets/docs/profile.png)
![Edit Profile](../assets/docs/edit-profile.png)
![QR Code](../assets/docs/qr-code.png)

Profile menampilkan identitas, statistik, aktivitas, QR code, dan edit profile. QR Code menggunakan sheet khusus `QRCodeSheet`. Edit Profile menyediakan field profil dan informasi worker.

Heuristik terkait: user control and freedom melalui edit/share QR; recognition rather than recall melalui avatar, stats, dan action yang eksplisit.

### Share Activity, Prodak Message, Share Club, dan Share Event

![Share Activity](../assets/docs/share-activity.png)
![Prodak Message](../assets/docs/prodak-message.png)
![Share Club](../assets/docs/share-club-sheet.png)
![Share Event](../assets/docs/share-event-sheet.png)

Share flows memakai bottom sheet agar konteks layar asal tetap terlihat. Share Activity mendukung Prodak Post, Prodak Message, Instagram Story, WhatsApp, Copy Link, dan Save. Prodak Message membuka `Send to` sheet, kemudian chat detail dengan attachment. Share Club dan Share Event memakai pola target share yang sama. Tombol “More” dihapus agar pilihan tetap ringkas.

Heuristik terkait: recognition rather than recall melalui icon/logo kanal share; user control melalui Close/cancel; consistency melalui `ShareBottomSheet` dan `ShareTargets`.

## Pemetaan Low-Fidelity ke High-Fidelity

| Layar | Tujuan layar | Elemen low-fidelity | Perubahan high-fidelity | Alasan perubahan | Dampak usability |
|---|---|---|---|---|---|
| Feed | Menampilkan aktivitas dan post | List post sederhana | Card feed dengan avatar, waktu, media map/foto, action share | Menambah konteks sosial dan visual proof | Informasi lebih mudah dipindai dan dipercaya |
| Activity Detail | Meninjau aktivitas | Detail teks dan bukti sederhana | Header, hero info, map proof, metric grid, proof signals, comments | Memperjelas bukti dan hasil aktivitas | Visibility of system status meningkat |
| Record | Merekam aktivitas | Kontrol dasar start/stop | Map full-screen, floating work card, bottom sheet controls | Mengikuti pola aplikasi tracking mobile | Status sesi lebih jelas dan fokus |
| Save/Edit Activity | Mengisi detail aktivitas | Form input linear | Field reusable, option bottom sheet, visibility selector | Mengurangi input manual dan duplikasi UI | Error prevention dan consistency meningkat |
| Progress | Melihat perkembangan | Chart/stat ringkas | Chart, metric cards, leaderboard | Memberi ringkasan performa yang lebih kuat | Pengguna cepat memahami progres |
| Groups | Menemukan komunitas | Tab/daftar dasar | Challenges/Clubs dengan underline state dan browse events | Memisahkan dua konteks utama | Navigasi lebih jelas |
| Browse Events | Mencari event | List event | Event cards, filter, Work Type bottom sheet | Mengganti dropdown statis menjadi bottom sheet mobile | Recognition dan user control meningkat |
| Event Detail | Memahami event | Detail event sederhana | Map, date card, type/format, Join state, Share | Menambah konteks lokasi dan status keikutsertaan | Visibility of system status meningkat |
| Club Detail | Melihat club | Header club dan daftar post | Hero image, logo, member pill, join/share, composer, posts | Meningkatkan identitas club dan affordance aksi | Pengguna lebih mudah memahami club |
| Create Club | Membuat club | Form panjang | Multi-step form | Mengurangi beban kognitif | Error prevention meningkat |
| Create Post | Membuat post | Text area sederhana | Reusable `PostComposer`, allow comments, media/action icon | Menyamakan alur post biasa dan share-to-club | Konsistensi alur meningkat |
| Search | Mencari teman/club | Input dan list | Heading “Search”, tabs Friends/Clubs, search bar | Menyesuaikan konteks Groups | Recognition meningkat |
| Notifications | Melihat update | List notifikasi | Ikon, title/body, timestamp | Memperjelas tipe notifikasi | Status aktivitas terbaru lebih terlihat |
| Profile | Identitas pengguna | Profil dasar | Stats, aktivitas, QR, edit profile | Menambah fungsi personal identity | User control meningkat |
| Messages | Mengirim aktivitas | Tidak dominan pada low-fi awal | Message list, detail chat, attachment composer | Mendukung share melalui Prodak Message | Alur share menjadi lebih lengkap |
| Share flows | Membagikan konten | Halaman share terpisah | Bottom sheet di atas konteks asal | Berdasarkan evaluasi desain agar konteks tidak hilang | User control dan match context meningkat |

Perubahan yang eksplisit berdasarkan evaluasi iteratif MS3/MS4 antara lain: penggunaan `FeedPost` untuk konsistensi activity card, penghapusan label yang tidak perlu pada feed/share, pembatasan bottom navigation menjadi empat item utama, pengubahan share menjadi bottom sheet, penambahan Prodak Message, serta penyesuaian event share agar tetap memakai konteks layar event.

## Hasil Implementasi

| Layar/Page | Fitur terkait | Status | Lokasi file/component | Penjelasan singkat |
|---|---|---|---|---|
| Login Intro | Onboarding awal | Selesai | `src/screens/LoginIntro.jsx`, `VideoHero` | Intro visual sebelum login |
| Login | Autentikasi | Selesai | `src/screens/Login.jsx`, `AuthSocialButton` | Login email dan social login |
| Registration | Pendaftaran | Selesai | `src/screens/Registration.jsx` | Form registrasi |
| Forgot Password | Pemulihan akun | Selesai | `src/screens/ForgotPassword.jsx` | Alur reset password |
| Feed | Home feed | Selesai | `src/screens/Feed.jsx`, `FeedPost`, `ShareSheet` | Post individual dan club, media map/foto |
| Messages | Daftar pesan | Selesai | `src/screens/Messages.jsx` | List chat dan navigasi ke detail |
| Message Detail | Isi chat | Selesai | `src/screens/MessageDetail.jsx` | Chat detail dengan attachment activity |
| Activities | Aktivitas pengguna | Selesai | `src/screens/Activities.jsx` | Daftar aktivitas Jane |
| Activity Detail | Detail aktivitas | Selesai | `src/screens/ActivityDetail.jsx` | Map proof, metric, comments, share overlay |
| Record | Rekam aktivitas | Selesai | `src/screens/Record.jsx` | State idle, working, stopped |
| Save Activity | Simpan aktivitas | Selesai | `src/screens/SaveActivity.jsx`, form components | Form activity setelah record |
| Edit Activity | Edit aktivitas | Selesai | `src/screens/EditActivity.jsx`, form components | Edit detail dan visibility |
| Edit Profile | Edit profil | Selesai | `src/screens/EditProfile.jsx` | Field profil dan worker info |
| Progress | Progres produktivitas | Selesai | `src/screens/Progress.jsx`, `ProgressChart` | Grafik dan metric |
| Groups | Club/challenge hub | Selesai | `src/screens/Groups.jsx` | Browse events dan tab work/research |
| Browse Events | List event | Selesai | `src/screens/BrowseEvents.jsx` | Event list, filter, work type sheet |
| Event Detail | Detail event | Selesai | `src/screens/BrowseEvents.jsx` | Map, Join state, Share Event overlay |
| Event Filter | Filter event | Selesai | `src/screens/EventFilter.jsx` | Filter date/location/format |
| GroupClub | Challenges | Selesai | `src/screens/GroupClub.jsx` | View challenges dalam Groups |
| Club Detail | Detail club | Selesai | `src/screens/Club.jsx` | Hero, join/share, composer, recent posts |
| Create Club | Buat club | Selesai | `src/screens/CreateClub.jsx` | Multi-step club creation |
| Create Post | Buat post | Selesai | `src/screens/CreatePost.jsx`, `PostComposer` | Composer reusable |
| Comments | Komentar | Selesai | `src/screens/Comments.jsx`, `CommentItem` | Diskusi post/activity |
| Search Clubs | Cari club | Selesai | `src/screens/SearchClub.jsx` | Search untuk join club |
| Search Friends | Cari teman | Selesai | `src/screens/SearchFriend.jsx` | Search untuk tambah teman |
| Notifications | Notifikasi | Selesai | `src/screens/Notifications.jsx` | List update aktivitas |
| Profile | Profil pengguna | Selesai | `src/screens/Profile.jsx` | Identitas, aktivitas, QR |
| QR Code | QR profile | Selesai | `src/screens/QRCode.jsx`, `QRCodeSheet` | QR code dan share profile |
| Share Activity | Share aktivitas | Selesai | `src/screens/Share.jsx`, `ShareBottomSheet`, `ShareTargets` | Bottom sheet share dan Prodak Message |
| Share Club | Share club | Selesai | `src/screens/ShareClub.jsx`, `src/screens/Club.jsx` | Share sheet di atas konteks club |
| Share Event | Share event | Selesai | `src/screens/BrowseEvents.jsx` | Share sheet di atas detail event |

## Kesimpulan

High-fidelity prototype Prodak telah dikembangkan dari acuan low-fidelity di `src/img-hires` dan `src/img` dengan mempertahankan struktur informasi utama, tetapi memperkaya visual, interaksi, dan konsistensi komponen. Implementasi saat ini sudah mencakup alur autentikasi, feed, activity tracking, activity detail, komunitas, event, pesan, profile, serta berbagai share flow.

Desain high-fidelity memperhatikan konsistensi warna, tipografi, spacing, icon, layout mobile, bottom navigation, dan bottom sheet. Secara usability, prototype telah menerapkan prinsip visibility of system status, consistency and standards, user control and freedom, recognition rather than recall, serta aesthetic and minimalist design. Data identitas kelompok dan screenshot final masih perlu dilengkapi pada bagian `TODO:` sebelum laporan dipindahkan ke dokumen akhir.
