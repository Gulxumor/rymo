//  TODO  Language changing

//  0. Select yaratiladi, va optionlari yoziladi.
//  1. npm i i18next react-i18next
//  2. root ga otiladi
//  3. returndan tepada i18next ni ozi chaqiriladi
//  4. nuqta qoyib use deyiladi va qavs ichiga reactda ishlatyatganimizi bildirish uchun initReactI18next deb yoziladi
//  5. nuqta qo'yib init() deyiladi va uni ichida ozini objecti boladi
//  6. resources: {} deb yoziladi. Qanaqa til bolsa nomi yoziladi, song :{translation: "key qilingan til nomi yoziladi" }, barchasini shu holatda yozamiz.
//  7. misol uchun en: { } scope ichida ozini translationi boladi
//  8. resources dan song language deb yoziladi, unga default language yoziladi. M. lng:"en"
//  9. song fallback deyiladi va tanlanmagan til bolsa avtomatik chiqaradigan til yozib qoyiladi string ichida, biror hato bolib tanlangan til ishlamay qolsa ham shu yerga yozilgan tilda ishlaydi. M. fallback:"en"
//  10. malumotlarni olib kelish uchun locale degan folder ochiladi
//  11. locale folderi ichida mavjud bolgan tillar miqdoricha folder ochiladi
//  12. song har 1 til uchun js fayli ochiladi (translation.js)
//  13. js fayl ichiga otib obj tipidagi ozgaruvchi ochiladi
//  14. song ozgartirmoqchi bolgan section nomi yozilib obj scope ochiladi va ichiga translationlar yozib chiqiladi. M. nav_links: {nav_links_home: "Uy", nav_links_shop:"Bozor"},
//  15. translatsiyalar yozib bolingandan song locale folderi ichidagi folderni, rootdagi resources objecti ichidagi translation ga value qilib import qilinadi
//  16. ishlatish uchun const {t} = usetranslation() deb yoziladi yani ozgaruvchiga tenglanadi va i18next dan import qilinadi
//  17. song ishlatilatiladigan joyga huddi js kod yozganimizdek scope ochiladi va t() deb yoziladi. qavs ichiga esa tarjima qilinadiga sozni obkelamiz like {t("nav_links.nav_links_home")}. song qaysi tilda bolsa shu qismga biriktirilgan sozni osha tilda chiqarib beradi
//  18. selectda tanlangan til tasir qilishi uchun  selectga quyidagilar yoziladi. Ya'ni change bolgandagi holati localstorage ga locale nomi bilan saqlab qoyiladi
//  ?   <select onChange={(e) => localStorage.setItem("locale", e.target.value)}> options  </select>
//  19. Browserga otib select qilib korganda localstorage ga key:locale, value: tanlagan optionimiz bolishi kerak
//  20. Selectda tanlaganimizda til avtomatik ozgarishi uchun lng va fallback ga
//  ?  localStorage.getItem("locale") || "en"
//  ..  deb yozamiz. || belgilanganiga sabab shuki tanlagan tilimiz malum sabablarga kora ishlamay qolishi mumkin. Shu xolatlarda avtomatik ingliz tilini olib ketadi.
//  21. Browserga 1-marta kirgandagi default qiymatni kiritish uchun quyidagi amallar bajariladi.
//  ?   useEffect(()=>{if (!localStorage.getItem("locale")) {localStorage.setItem("locale", "uz")}},[])

