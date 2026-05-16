export const questionsData = {
  react: {
    name: "React.js",
    icon: "⚛️",
    color: "#61DAFB",
    questions: [
      {
        id: 1,
        question: "React hooklardan qaysi biri state boshqarish uchun ishlatiladi?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        answer: "useState",
        correct: 1,
        explanation: "useState hooki komponentda state yaratish va boshqarish uchun ishlatiladi."
      },
      {
        id: 2,
        question: "Reactda virtual DOM nima?",
        options: ["Haqiqiy DOMning nusxasi", "React komponentlari", "Brauzer DOMi", "JavaScript obyekti"],
        answer: "Haqiqiy DOMning nusxasi",
        correct: 0,
        explanation: "Virtual DOM - haqiqiy DOMning yengil nusxasi."
      },
      {
        id: 3,
        question: "Reactda props va state o'rtasidagi farq?",
        options: ["State o'zgaruvchan, props o'zgarmas", "Props o'zgaruvchan, state o'zgarmas", "Ikkalasi ham o'zgaruvchan", "Ikkalasi ham o'zgarmas"],
        answer: "State o'zgaruvchan, props o'zgarmas",
        correct: 0,
        explanation: "State komponent ichida o'zgaradi, props esa parentdan childga read-only ma'lumot uzatadi."
      },
      {
        id: 4,
        question: "useEffect hooki qanday vazifani bajaradi?",
        options: ["State yangilash", "Yon ta'sirlarni boshqarish", "Context yaratish", "Ref yaratish"],
        answer: "Yon ta'sirlarni boshqarish",
        correct: 1,
        explanation: "useEffect hooki API so'rovlar, event listenerlar kabi yon ta'sirlarni boshqarish uchun ishlatiladi."
      },
      {
        id: 5,
        question: "Reactda key atributi nima uchun kerak?",
        options: ["Stil berish uchun", "Elementlarni unikal identifikatsiya qilish uchun", "Event bog'lash uchun", "Class berish uchun"],
        answer: "Elementlarni unikal identifikatsiya qilish uchun",
        correct: 1,
        explanation: "Key atributi Reactga listdagi qaysi element o'zgarganini aniqlashga yordam beradi."
      },
      {
        id: 6,
        question: "Reactda JSX nima?",
        options: ["JavaScript funksiyasi", "HTML va JavaScript kombinatsiyasi", "CSS framework", "React hooki"],
        answer: "HTML va JavaScript kombinatsiyasi",
        correct: 1,
        explanation: "JSX - JavaScript sintaksis kengaytmasi bo'lib, HTML-ga o'xshash kod yozish imkonini beradi."
      },
      {
        id: 7,
        question: "Reactda 'lifting state up' nima?",
        options: ["State ni o'chirish", "State ni yuqori komponentga ko'tarish", "State ni localStoragega saqlash", "State ni reduxga o'tkazish"],
        answer: "State ni yuqori komponentga ko'tarish",
        correct: 1,
        explanation: "Bir necha komponent o'rtasida state bo'lishish uchun state ni umumiy parent komponentga ko'tarish."
      },
      {
        id: 8,
        question: "React.memo() nima uchun ishlatiladi?",
        options: ["Komponentni render qilishni optimallashtirish", "State saqlash", "API so'rov qilish", "Router yaratish"],
        answer: "Komponentni render qilishni optimallashtirish",
        correct: 0,
        explanation: "React.memo() komponentni props o'zgarmaganda qayta render qilmaslik uchun ishlatiladi."
      },
      {
        id: 9,
        question: "useRef hooki qanday maqsadda ishlatiladi?",
        options: ["State boshqarish", "DOM elementiga murojaat qilish", "API chaqirish", "Effect boshqarish"],
        answer: "DOM elementiga murojaat qilish",
        correct: 1,
        explanation: "useRef DOM elementlariga to'g'ridan-to'g'ri murojaat qilish uchun ishlatiladi."
      },
      {
        id: 10,
        question: "Reactda conditional rendering nima?",
        options: ["Shart asosida komponentlarni render qilish", "Barcha komponentlarni render qilish", "Komponentlarni o'chirish", "CSS o'zgartirish"],
        answer: "Shart asosida komponentlarni render qilish",
        correct: 0,
        explanation: "Conditional rendering - ma'lum shartlar asosida turli komponentlarni ko'rsatish."
      },
      {
        id: 11,
        question: "useCallback hooki qanday vazifani bajaradi?",
        options: ["State yaratish", "Funksiyani memoizatsiya qilish", "Effect ishga tushirish", "Context yaratish"],
        answer: "Funksiyani memoizatsiya qilish",
        correct: 1,
        explanation: "useCallback funksiyalarni memoizatsiya qiladi va keraksiz qayta yaratilishini oldini oladi."
      },
      {
        id: 12,
        question: "React Routerda Switch komponenti nima uchun kerak?",
        options: ["Router sozlamalari uchun", "Birinchi mos keluvchi routeni render qilish", "Linklar uchun", "Redirect qilish uchun"],
        answer: "Birinchi mos keluvchi routeni render qilish",
        correct: 1,
        explanation: "Switch komponenti birinchi mos keluvchi routeni render qiladi."
      },
      {
        id: 13,
        question: "Reduxda reducer nima?",
        options: ["State ni o'zgartiruvchi funksiya", "Action yaratuvchi", "Store konfiguratsiyasi", "Middleware"],
        answer: "State ni o'zgartiruvchi funksiya",
        correct: 0,
        explanation: "Reducer - joriy state va action qabul qilib, yangi state qaytaruvchi pure funksiya."
      },
      {
        id: 14,
        question: "Reactda 'controlled component' nima?",
        options: ["React tomonidan boshqariladigan input", "Class component", "Functional component", "Higher-order component"],
        answer: "React tomonidan boshqariladigan input",
        correct: 0,
        explanation: "Controlled component - input qiymati React state tomonidan boshqariladigan komponent."
      },
      {
        id: 15,
        question: "useMemo va useCallback farqi?",
        options: ["Farqi yo'q", "useMemo qiymat, useCallback funksiya memoizatsiya qiladi", "useCallback qiymat, useMemo funksiya memoizatsiya qiladi", "Ikkalasi ham funksiya memoizatsiya qiladi"],
        answer: "useMemo qiymat, useCallback funksiya memoizatsiya qiladi",
        correct: 1,
        explanation: "useMemo hisoblangan qiymatlarni, useCallback esa funksiyalarni memoizatsiya qiladi."
      },
      {
        id: 16,
        question: "React Fragment nima uchun ishlatiladi?",
        options: ["Stil berish uchun", "Qo'shimcha DOM nodesiz elementlarni guruhlash", "State boshqarish", "Event handler"],
        answer: "Qo'shimcha DOM nodesiz elementlarni guruhlash",
        correct: 1,
        explanation: "Fragment qo'shimcha div yaratmasdan bir necha elementlarni guruhlash imkonini beradi."
      },
      {
        id: 17,
        question: "Reactda 'props drilling' muammosi qanday hal qilinadi?",
        options: ["useState bilan", "Context API yoki Redux bilan", "useEffect bilan", "useRef bilan"],
        answer: "Context API yoki Redux bilan",
        correct: 1,
        explanation: "Context API yoki Redux props drilling muammosini hal qiladi."
      },
      {
        id: 18,
        question: "Reactda 'state' o'zgartirish uchun qanday funksiya ishlatiladi?",
        options: ["setState()", "updateState()", "changeState()", "modifyState()"],
        answer: "setState()",
        correct: 0,
        explanation: "useState hooki arrayning ikkinchi elementi (setter funksiya) state ni o'zgartirish uchun ishlatiladi."
      },
      {
        id: 19,
        question: "Reactda event handler yozishning to'g'ri usuli?",
        options: ["onClick={handleClick}", "onclick={handleClick}", "onClick='handleClick'", "onclick='handleClick'"],
        answer: "onClick={handleClick}",
        correct: 0,
        explanation: "Reactda eventlar camelCase da yoziladi: onClick, onChange va hokazo."
      },
      {
        id: 20,
        question: "React komponenti necha xil bo'ladi?",
        options: ["1 ta", "2 ta (Class va Function)", "3 ta", "4 ta"],
        answer: "2 ta (Class va Function)",
        correct: 1,
        explanation: "Reactda 2 xil komponent bor: Class component va Function component."
      }
    ]
  },
  javascript: {
    name: "JavaScript",
    icon: "🟨",
    color: "#F7DF1E",
    questions: [
      {
        id: 1,
        question: "JavaScriptda o'zgaruvchi e'lon qilish uchun qanday kalit so'zlar ishlatiladi?",
        options: ["var, let, const", "int, float, string", "variable, let", "val, var"],
        answer: "var, let, const",
        correct: 0,
        explanation: "JavaScriptda var, let va const kalit so'zlari o'zgaruvchi e'lon qilish uchun ishlatiladi."
      },
      {
        id: 2,
        question: "let va const o'rtasidagi asosiy farq nima?",
        options: ["const o'zgartirilmaydi", "let o'zgartirilmaydi", "farqi yo'q", "const faqat sonlar uchun"],
        answer: "const o'zgartirilmaydi",
        correct: 0,
        explanation: "const bilan e'lon qilingan o'zgaruvchi qayta o'zgartirilmaydi (read-only)."
      },
      {
        id: 3,
        question: "JavaScriptda array ga yangi element qo'shish uchun qanday metod ishlatiladi?",
        options: ["push()", "add()", "append()", "insert()"],
        answer: "push()",
        correct: 0,
        explanation: "push() metodi array oxiriga yangi element qo'shadi."
      },
      {
        id: 4,
        question: "JavaScriptda 'console.log()' nima qiladi?",
        options: ["Konsolga chiqaradi", "Ma'lumot saqlaydi", "Xatolik chiqaradi", "Fayl yozadi"],
        answer: "Konsolga chiqaradi",
        correct: 0,
        explanation: "console.log() - brauzer konsoliga ma'lumot chiqarish uchun ishlatiladi."
      },
      {
        id: 5,
        question: "JavaScriptda 'function' qanday yoziladi?",
        options: ["function myFunction() {}", "def myFunction() {}", "func myFunction() {}", "fn myFunction() {}"],
        answer: "function myFunction() {}",
        correct: 0,
        explanation: "Funksiya 'function' kalit so'zi bilan yoziladi."
      },
      {
        id: 6,
        question: "JavaScriptda 'if' sharti qanday yoziladi?",
        options: ["if (shart) {}", "if shart {}", "if {shart}", "when (shart) {}"],
        answer: "if (shart) {}",
        correct: 0,
        explanation: "If sharti qavs ichida yoziladi: if (shart) { kod }"
      },
      {
        id: 7,
        question: "JavaScriptda 'for' loop qanday yoziladi?",
        options: ["for (let i=0; i<10; i++) {}", "for i=0 to 10", "loop i=0 to 10", "foreach i=0 to 10"],
        answer: "for (let i=0; i<10; i++) {}",
        correct: 0,
        explanation: "For loop: for (boshlang'ich; shart; o'zgarish) { kod }"
      },
      {
        id: 8,
        question: "JavaScriptda stringlarni birlashtirish uchun nima ishlatiladi?",
        options: ["+ operatori", ". operatori", "& operatori", "concat() faqat"],
        answer: "+ operatori",
        correct: 0,
        explanation: "Stringlarni birlashtirish uchun + operatori ishlatiladi."
      },
      {
        id: 9,
        question: "JavaScriptda '===' va '==' farqi nima?",
        options: ["=== qiymat va turni tekshiradi", "== qiymat va turni tekshiradi", "farqi yo'q", "=== faqat turni tekshiradi"],
        answer: "=== qiymat va turni tekshiradi",
        correct: 0,
        explanation: "=== (strict equality) qiymat VA turni tekshiradi, == esa faqat qiymatni."
      },
      {
        id: 10,
        question: "JavaScriptda 'null' va 'undefined' farqi?",
        options: ["null - qiymat yo'q, undefined - e'lon qilinmagan", "farqi yo'q", "undefined - qiymat yo'q", "null - e'lon qilinmagan"],
        answer: "null - qiymat yo'q, undefined - e'lon qilinmagan",
        correct: 0,
        explanation: "null - qiymati yo'q deb belgilangan, undefined - e'lon qilinmagan yoki qiymat berilmagan."
      },
      {
        id: 11,
        question: "JavaScriptda array uzunligini qanday olish mumkin?",
        options: ["array.length", "array.size", "array.count", "len(array)"],
        answer: "array.length",
        correct: 0,
        explanation: "Array uzunligi length property orqali olinadi."
      },
      {
        id: 12,
        question: "JavaScriptda 'typeof' operatori nima qiladi?",
        options: ["Ma'lumot turini qaytaradi", "Qiymatni qaytaradi", "O'zgaruvchini o'chiradi", "Funksiyani chaqiradi"],
        answer: "Ma'lumot turini qaytaradi",
        correct: 0,
        explanation: "typeof - o'zgaruvchining ma'lumot turini (string, number, object va hk) qaytaradi."
      },
      {
        id: 13,
        question: "JavaScriptda 'alert()' nima qiladi?",
        options: ["Xabar oynasi chiqaradi", "Konsolga chiqaradi", "Ma'lumot saqlaydi", "Fayl ochadi"],
        answer: "Xabar oynasi chiqaradi",
        correct: 0,
        explanation: "alert() - brauzerda xabar oynasi chiqaradi."
      },
      {
        id: 14,
        question: "JavaScriptda 'prompt()' nima qiladi?",
        options: ["Foydalanuvchidan ma'lumot so'raydi", "Konsolga chiqaradi", "Xatolik chiqaradi", "Ma'lumot saqlaydi"],
        answer: "Foydalanuvchidan ma'lumot so'raydi",
        correct: 0,
        explanation: "prompt() - foydalanuvchidan ma'lumot kiritishni so'raydi."
      },
      {
        id: 15,
        question: "JavaScriptda 'return' kalit so'zi nima qiladi?",
        options: ["Funksiyadan qiymat qaytaradi", "Loopdan chiqadi", "O'zgaruvchi yaratadi", "Funksiyani to'xtatadi"],
        answer: "Funksiyadan qiymat qaytaradi",
        correct: 0,
        explanation: "return - funksiyadan qiymat qaytaradi va funksiyani to'xtatadi."
      },
      {
        id: 16,
        question: "JavaScriptda 'break' kalit so'zi nima qiladi?",
        options: ["Loopdan chiqadi", "Loopni davom ettiradi", "Funksiyani to'xtatadi", "Xatolik chiqaradi"],
        answer: "Loopdan chiqadi",
        correct: 0,
        explanation: "break - loop yoki switch dan chiqish uchun ishlatiladi."
      },
      {
        id: 17,
        question: "JavaScriptda 'continue' kalit so'zi nima qiladi?",
        options: ["Loopning keyingi iteratsiyasiga o'tadi", "Loopdan chiqadi", "Funksiyani to'xtatadi", "Xatolik chiqaradi"],
        answer: "Loopning keyingi iteratsiyasiga o'tadi",
        correct: 0,
        explanation: "continue - loopning joriy iteratsiyasini to'xtatib, keyingisiga o'tadi."
      },
      {
        id: 18,
        question: "JavaScriptda 'Math.random()' nima qiladi?",
        options: ["0-1 orasida random son", "1-10 orasida son", "100 gacha son", "Butun son qaytaradi"],
        answer: "0-1 orasida random son",
        correct: 0,
        explanation: "Math.random() - 0 va 1 oralig'ida random haqiqiy son qaytaradi."
      },
      {
        id: 19,
        question: "JavaScriptda 'parseInt()' nima qiladi?",
        options: ["Stringni butun songa aylantiradi", "Sonni stringga aylantiradi", "O'nlik songa aylantiradi", "Tekshiradi"],
        answer: "Stringni butun songa aylantiradi",
        correct: 0,
        explanation: "parseInt() - stringni butun songa aylantiradi."
      },
      {
        id: 20,
        question: "JavaScriptda 'toUpperCase()' nima qiladi?",
        options: ["Harfni katta harfga aylantiradi", "Kichik harfga aylantiradi", "Bosh harfga aylantiradi", "O'chirib yuboradi"],
        answer: "Harfni katta harfga aylantiradi",
        correct: 0,
        explanation: "toUpperCase() - stringdagi barcha harflarni katta harfga aylantiradi."
      }
    ]
  },
  python: {
    name: "Python",
    icon: "🐍",
    color: "#3776AB",
    questions: [
      {
        id: 1,
        question: "Pythonda konsolga chiqarish uchun qanday funksiya ishlatiladi?",
        options: ["print()", "console.log()", "echo()", "write()"],
        answer: "print()",
        correct: 0,
        explanation: "print() funksiyasi Pythonda konsolga ma'lumot chiqarish uchun ishlatiladi."
      },
      {
        id: 2,
        question: "Pythonda 'if' sharti qanday yoziladi?",
        options: ["if shart:", "if (shart)", "if {shart}", "if [shart]"],
        answer: "if shart:",
        correct: 0,
        explanation: "Pythonda if shart: keyin ikki nuqta va yangi qatorda indentatsiya bilan yoziladi."
      },
      {
        id: 3,
        question: "Pythonda 'for' loop qanday yoziladi?",
        options: ["for i in range(10):", "for (i=0; i<10; i++)", "loop i=0 to 10", "foreach i in 10"],
        answer: "for i in range(10):",
        correct: 0,
        explanation: "Pythonda for loop: for o'zgaruvchi in range(son): shaklida yoziladi."
      },
      {
        id: 4,
        question: "Pythonda 'list' ga element qo'shish uchun qanday metod ishlatiladi?",
        options: ["append()", "add()", "push()", "insert()"],
        answer: "append()",
        correct: 0,
        explanation: "append() metodi list oxiriga element qo'shadi."
      },
      {
        id: 5,
        question: "Pythonda 'def' kalit so'zi nima uchun?",
        options: ["Funksiya yaratish", "O'zgaruvchi yaratish", "Class yaratish", "Loop yaratish"],
        answer: "Funksiya yaratish",
        correct: 0,
        explanation: "def - funksiya (function) yaratish uchun ishlatiladi."
      },
      {
        id: 6,
        question: "Pythonda 'len()' funksiyasi nima qiladi?",
        options: ["Uzunlikni qaytaradi", "Ro'yxatni saralaydi", "Elementni o'chiradi", "Element qo'shadi"],
        answer: "Uzunlikni qaytaradi",
        correct: 0,
        explanation: "len() - string, list, tuple va hokazolarning uzunligini qaytaradi."
      },
      {
        id: 7,
        question: "Pythonda 'input()' funksiyasi nima qiladi?",
        options: ["Foydalanuvchidan ma'lumot oladi", "Konsolga chiqaradi", "Fayl o'qiydi", "Xatolik chiqaradi"],
        answer: "Foydalanuvchidan ma'lumot oladi",
        correct: 0,
        explanation: "input() - foydalanuvchidan ma'lumot kiritishni so'raydi."
      },
      {
        id: 8,
        question: "Pythonda 'int()' funksiyasi nima qiladi?",
        options: ["Butun songa aylantiradi", "Matnga aylantiradi", "O'nlik songa aylantiradi", "Ro'yxatga aylantiradi"],
        answer: "Butun songa aylantiradi",
        correct: 0,
        explanation: "int() - qiymatni butun son (integer) ga aylantiradi."
      },
      {
        id: 9,
        question: "Pythonda 'str()' funksiyasi nima qiladi?",
        options: ["Matnga aylantiradi", "Butun songa aylantiradi", "Ro'yxatga aylantiradi", "Haqiqiy songa aylantiradi"],
        answer: "Matnga aylantiradi",
        correct: 0,
        explanation: "str() - qiymatni string (matn) ga aylantiradi."
      },
      {
        id: 10,
        question: "Pythonda 'list' va 'tuple' farqi?",
        options: ["List o'zgaradi, tuple o'zgarmaydi", "Tuple o'zgaradi", "Farqi yo'q", "List tezroq"],
        answer: "List o'zgaradi, tuple o'zgarmaydi",
        correct: 0,
        explanation: "List mutable (o'zgartirish mumkin), tuple immutable (o'zgartirish mumkin emas)."
      },
      {
        id: 11,
        question: "Pythonda 'else' qachon ishlatiladi?",
        options: ["if sharti false bo'lganda", "if sharti true bo'lganda", "Loopda", "Funksiyada"],
        answer: "if sharti false bo'lganda",
        correct: 0,
        explanation: "else - if sharti bajarilmaganda (false) ishlaydigan kod bloki."
      },
      {
        id: 12,
        question: "Pythonda 'elif' nima?",
        options: ["else if", "else", "if else", "elif sharti"],
        answer: "else if",
        correct: 0,
        explanation: "elif - 'else if' ning qisqartmasi, bir nechta shartlarni tekshirish uchun."
      },
      {
        id: 13,
        question: "Pythonda 'while' loop qanday ishlaydi?",
        options: ["Shart true bo'lganda takrorlaydi", "Aniq marta takrorlaydi", "Hech qachon", "Faqat bir marta"],
        answer: "Shart true bo'lganda takrorlaydi",
        correct: 0,
        explanation: "while loop - berilgan shart true ekan, takrorlanadi."
      },
      {
        id: 14,
        question: "Pythonda 'break' nima qiladi?",
        options: ["Loopdan chiqadi", "Loopni davom ettiradi", "Funksiyani to'xtatadi", "Xatolik chiqaradi"],
        answer: "Loopdan chiqadi",
        correct: 0,
        explanation: "break - loopdan butunlay chiqish uchun ishlatiladi."
      },
      {
        id: 15,
        question: "Pythonda 'continue' nima qiladi?",
        options: ["Keyingi iteratsiyaga o'tadi", "Loopdan chiqadi", "Funksiyani to'xtatadi", "Xatolik chiqaradi"],
        answer: "Keyingi iteratsiyaga o'tadi",
        correct: 0,
        explanation: "continue - joriy iteratsiyani to'xtatib, keyingisiga o'tadi."
      },
      {
        id: 16,
        question: "Pythonda 'range()' funksiyasi nima qiladi?",
        options: ["Sonlar ketma-ketligi yaratadi", "Ro'yxat yaratadi", "Matn yaratadi", "Son yaratadi"],
        answer: "Sonlar ketma-ketligi yaratadi",
        correct: 0,
        explanation: "range() - berilgan oralikda sonlar ketma-ketligi yaratadi."
      },
      {
        id: 17,
        question: "Pythonda 'dictionary' (dict) nima?",
        options: ["Kalit-qiymat juftliklari", "Ro'yxat", "Matn", "Son"],
        answer: "Kalit-qiymat juftliklari",
        correct: 0,
        explanation: "Dictionary - kalit (key) va qiymat (value) juftliklaridan tashkil topgan ma'lumotlar turi."
      },
      {
        id: 18,
        question: "Pythonda 'True' va 'False' nima?",
        options: ["Boolean qiymatlar", "Sonlar", "Matnlar", "Ro'yxatlar"],
        answer: "Boolean qiymatlar",
        correct: 0,
        explanation: "True va False - mantiqiy (boolean) qiymatlar."
      },
      {
        id: 19,
        question: "Pythonda 'and', 'or', 'not' nima?",
        options: ["Mantiqiy operatorlar", "Matematik operatorlar", "Taqqoslash operatorlari", "Arifmetik operatorlar"],
        answer: "Mantiqiy operatorlar",
        correct: 0,
        explanation: "and, or, not - mantiqiy operatorlar (logical operators)."
      },
      {
        id: 20,
        question: "Pythonda o'zgaruvchi e'lon qilish uchun nima kerak?",
        options: ["Hech narsa", "var", "let", "const"],
        answer: "Hech narsa",
        correct: 0,
        explanation: "Python dinamik tipli til, o'zgaruvchi e'lon qilish uchun kalit so'z kerak emas."
      }
    ]
  },
  html: {
    name: "HTML/CSS",
    icon: "🌐",
    color: "#E34F26",
    questions: [
      {
        id: 1,
        question: "HTML nechi versiyasi bor?",
        options: ["HTML5 eng so'nggi", "HTML4", "HTML3", "HTML2"],
        answer: "HTML5 eng so'nggi",
        correct: 0,
        explanation: "HTML5 eng so'nggi va eng keng tarqalgan versiya."
      },
      {
        id: 2,
        question: "HTMLda 'div' nima?",
        options: ["Blok elementi", "Matn elementi", "Rasm elementi", "Havola elementi"],
        answer: "Blok elementi",
        correct: 0,
        explanation: "div - umumiy maqsadli blok elementi, boshqa elementlarni guruhlash uchun."
      },
      {
        id: 3,
        question: "HTMLda 'h1' nima uchun ishlatiladi?",
        options: ["Eng katta sarlavha", "Matn", "Rasm", "Havola"],
        answer: "Eng katta sarlavha",
        correct: 0,
        explanation: "h1 - eng muhim sarlavha (heading level 1)."
      },
      {
        id: 4,
        question: "HTMLda 'p' nima uchun ishlatiladi?",
        options: ["Paragraf", "Rasm", "Havola", "Ro'yxat"],
        answer: "Paragraf",
        correct: 0,
        explanation: "p (paragraph) - matn paragraflari uchun ishlatiladi."
      },
      {
        id: 5,
        question: "HTMLda 'a' nima?",
        options: ["Havola", "Rasm", "Matn", "Ro'yxat"],
        answer: "Havola",
        correct: 0,
        explanation: "a (anchor) - boshqa sahifalarga havola yaratish uchun ishlatiladi."
      },
      {
        id: 6,
        question: "HTMLda 'img' nima uchun ishlatiladi?",
        options: ["Rasm qo'shish", "Video qo'shish", "Matn qo'shish", "Ovoz qo'shish"],
        answer: "Rasm qo'shish",
        correct: 0,
        explanation: "img tegi sahifaga rasm qo'shish uchun ishlatiladi."
      },
      {
        id: 7,
        question: "HTMLda 'ul' va 'ol' farqi?",
        options: ["ul - nuqtali, ol - raqamli ro'yxat", "farqi yo'q", "ul - raqamli", "ol - nuqtali"],
        answer: "ul - nuqtali, ol - raqamli ro'yxat",
        correct: 0,
        explanation: "ul - unordered list (nuqtali), ol - ordered list (raqamli ro'yxat)."
      },
      {
        id: 8,
        question: "HTMLda 'li' nima?",
        options: ["Ro'yxat elementi", "Havola", "Rasm", "Matn"],
        answer: "Ro'yxat elementi",
        correct: 0,
        explanation: "li (list item) - ro'yxat elementlari uchun ishlatiladi."
      },
      {
        id: 9,
        question: "HTMLda 'table' nima uchun ishlatiladi?",
        options: ["Jadval yaratish", "Ro'yxat yaratish", "Matn yozish", "Rasm qo'shish"],
        answer: "Jadval yaratish",
        correct: 0,
        explanation: "table - ma'lumotlarni jadval ko'rinishida ko'rsatish uchun."
      },
      {
        id: 10,
        question: "HTMLda 'form' nima uchun ishlatiladi?",
        options: ["Ma'lumot yuborish formasi", "Matn", "Rasm", "Jadval"],
        answer: "Ma'lumot yuborish formasi",
        correct: 0,
        explanation: "form - foydalanuvchidan ma'lumot olish va serverga yuborish uchun."
      },
      {
        id: 11,
        question: "CSS nima?",
        options: ["Stil tili", "Dasturlash tili", "Markup tili", "Ma'lumotlar bazasi"],
        answer: "Stil tili",
        correct: 0,
        explanation: "CSS (Cascading Style Sheets) - veb-sahifalarning ko'rinishini belgilash tili."
      },
      {
        id: 12,
        question: "CSSda 'color' xususiyati nima qiladi?",
        options: ["Matn rangini o'zgartiradi", "Fon rangini o'zgartiradi", "Chegarani o'zgartiradi", "O'lchamni o'zgartiradi"],
        answer: "Matn rangini o'zgartiradi",
        correct: 0,
        explanation: "color - matn rangini belgilaydi."
      },
      {
        id: 13,
        question: "CSSda 'background-color' nima qiladi?",
        options: ["Fon rangini o'zgartiradi", "Matn rangini o'zgartiradi", "Chegarani o'zgartiradi", "Shriftni o'zgartiradi"],
        answer: "Fon rangini o'zgartiradi",
        correct: 0,
        explanation: "background-color - elementning fon rangini belgilaydi."
      },
      {
        id: 14,
        question: "CSSda 'font-size' nima qiladi?",
        options: ["Shrift o'lchamini o'zgartiradi", "Matn rangini o'zgartiradi", "Fon rangini o'zgartiradi", "Chegarani o'zgartiradi"],
        answer: "Shrift o'lchamini o'zgartiradi",
        correct: 0,
        explanation: "font-size - matn o'lchamini belgilaydi."
      },
      {
        id: 15,
        question: "CSSda 'margin' nima?",
        options: ["Tashqi bo'shliq", "Ichki bo'shliq", "Chegara", "Fon"],
        answer: "Tashqi bo'shliq",
        correct: 0,
        explanation: "margin - element atrofidagi tashqi bo'shliq."
      },
      {
        id: 16,
        question: "CSSda 'padding' nima?",
        options: ["Ichki bo'shliq", "Tashqi bo'shliq", "Chegara", "Fon"],
        answer: "Ichki bo'shliq",
        correct: 0,
        explanation: "padding - element ichidagi bo'shliq (content va border orasida)."
      },
      {
        id: 17,
        question: "CSSda 'border' nima?",
        options: ["Chegara", "Bo'shliq", "Fon", "Matn"],
        answer: "Chegara",
        correct: 0,
        explanation: "border - element atrofidagi chegara chizig'i."
      },
      {
        id: 18,
        question: "CSSda class selektor qanday yoziladi?",
        options: [".className", "#idName", "className", "class=name"],
        answer: ".className",
        correct: 0,
        explanation: "Class selektor nuqta (.) bilan boshlanadi: .className"
      },
      {
        id: 19,
        question: "CSSda id selektor qanday yoziladi?",
        options: ["#idName", ".idName", "idName", "id=name"],
        answer: "#idName",
        correct: 0,
        explanation: "ID selektor # (hash) bilan boshlanadi: #idName"
      },
      {
        id: 20,
        question: "Responsive web design nima?",
        options: ["Turli ekranlarga moslashish", "Tez yuklanish", "3D dizayn", "Animatsiya"],
        answer: "Turli ekranlarga moslashish",
        correct: 0,
        explanation: "Responsive dizayn - veb-sahifaning turli qurilmalarda yaxshi ko'rinishi."
      }
    ]
  },
  sql: {
    name: "SQL",
    icon: "🗄️",
    color: "#4479A1",
    questions: [
      {
        id: 1,
        question: "SQL nima?",
        options: ["Ma'lumotlar bazasi tili", "Dasturlash tili", "Markup tili", "Stil tili"],
        answer: "Ma'lumotlar bazasi tili",
        correct: 0,
        explanation: "SQL (Structured Query Language) - ma'lumotlar bazasini boshqarish tili."
      },
      {
        id: 2,
        question: "Ma'lumot olish uchun qanday buyruq ishlatiladi?",
        options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
        answer: "SELECT",
        correct: 0,
        explanation: "SELECT - ma'lumotlar bazasidan ma'lumot olish uchun ishlatiladi."
      },
      {
        id: 3,
        question: "Yangi ma'lumot qo'shish uchun qanday buyruq ishlatiladi?",
        options: ["INSERT INTO", "SELECT", "UPDATE", "DELETE"],
        answer: "INSERT INTO",
        correct: 0,
        explanation: "INSERT INTO - jadvalga yangi qator (ma'lumot) qo'shish uchun."
      },
      {
        id: 4,
        question: "Ma'lumot yangilash uchun qanday buyruq ishlatiladi?",
        options: ["UPDATE", "INSERT", "SELECT", "DELETE"],
        answer: "UPDATE",
        correct: 0,
        explanation: "UPDATE - mavjud ma'lumotlarni yangilash uchun ishlatiladi."
      },
      {
        id: 5,
        question: "Ma'lumot o'chirish uchun qanday buyruq ishlatiladi?",
        options: ["DELETE", "INSERT", "SELECT", "UPDATE"],
        answer: "DELETE",
        correct: 0,
        explanation: "DELETE - jadvaldan ma'lumotlarni o'chirish uchun ishlatiladi."
      },
      {
        id: 6,
        question: "SQLda 'WHERE' nima uchun ishlatiladi?",
        options: ["Ma'lumot filterlash", "Guruhlash", "Saralash", "Birlashtirish"],
        answer: "Ma'lumot filterlash",
        correct: 0,
        explanation: "WHERE - ma'lumotlarni shart asosida filterlash uchun."
      },
      {
        id: 7,
        question: "SQLda 'ORDER BY' nima uchun?",
        options: ["Saralash", "Filterlash", "Guruhlash", "Birlashtirish"],
        answer: "Saralash",
        correct: 0,
        explanation: "ORDER BY - natijalarni ma'lum tartibda saralash uchun."
      },
      {
        id: 8,
        question: "SQLda 'GROUP BY' nima uchun?",
        options: ["Guruhlash", "Saralash", "Filterlash", "Birlashtirish"],
        answer: "Guruhlash",
        correct: 0,
        explanation: "GROUP BY - ma'lumotlarni bir xil qiymatlar bo'yicha guruhlash."
      },
      {
        id: 9,
        question: "Primary Key nima?",
        options: ["Asosiy kalit", "Tashqi kalit", "Indeks", "Jadval"],
        answer: "Asosiy kalit",
        correct: 0,
        explanation: "Primary Key - har bir qatorni unikal identifikatsiya qiluvchi kalit."
      },
      {
        id: 10,
        question: "Foreign Key nima?",
        options: ["Boshqa jadvalga havola", "Asosiy kalit", "Indeks", "Maydon"],
        answer: "Boshqa jadvalga havola",
        correct: 0,
        explanation: "Foreign Key - boshqa jadvalning Primary Key'iga havola qiluvchi kalit."
      },
      {
        id: 11,
        question: "SQLda 'JOIN' nima uchun?",
        options: ["Jadvallarni birlashtirish", "Jadval o'chirish", "Jadval yaratish", "Ma'lumot filterlash"],
        answer: "Jadvallarni birlashtirish",
        correct: 0,
        explanation: "JOIN - ikki yoki undan ortiq jadvallarni birlashtirish uchun."
      },
      {
        id: 12,
        question: "INNER JOIN nima qiladi?",
        options: ["Faqat mos keluvchi qatorlarni oladi", "Hamma qatorlarni oladi", "Chap jadvalni oladi", "O'ng jadvalni oladi"],
        answer: "Faqat mos keluvchi qatorlarni oladi",
        correct: 0,
        explanation: "INNER JOIN - ikkala jadvalda ham mos keluvchi qatorlarni qaytaradi."
      },
      {
        id: 13,
        question: "SQLda 'COUNT()' nima qiladi?",
        options: ["Qatorlar sonini hisoblaydi", "Qiymatlarni qo'shadi", "O'rtachani hisoblaydi", "Eng kattasini oladi"],
        answer: "Qatorlar sonini hisoblaydi",
        correct: 0,
        explanation: "COUNT() - jadvaldagi qatorlar sonini hisoblaydi."
      },
      {
        id: 14,
        question: "SQLda 'SUM()' nima qiladi?",
        options: ["Qiymatlar yig'indisini hisoblaydi", "O'rtachani hisoblaydi", "Eng kattasini oladi", "Eng kichigini oladi"],
        answer: "Qiymatlar yig'indisini hisoblaydi",
        correct: 0,
        explanation: "SUM() - ustundagi barcha qiymatlarning yig'indisini hisoblaydi."
      },
      {
        id: 15,
        question: "SQLda 'AVG()' nima qiladi?",
        options: ["O'rtacha qiymatni hisoblaydi", "Yig'indini hisoblaydi", "Eng kattasini oladi", "Eng kichigini oladi"],
        answer: "O'rtacha qiymatni hisoblaydi",
        correct: 0,
        explanation: "AVG() - ustundagi qiymatlarning o'rtachasini hisoblaydi."
      },
      {
        id: 16,
        question: "SQLda 'MAX()' nima qiladi?",
        options: ["Eng katta qiymatni oladi", "Eng kichikni oladi", "Yig'indini hisoblaydi", "O'rtachani hisoblaydi"],
        answer: "Eng katta qiymatni oladi",
        correct: 0,
        explanation: "MAX() - ustundagi eng katta qiymatni qaytaradi."
      },
      {
        id: 17,
        question: "SQLda 'MIN()' nima qiladi?",
        options: ["Eng kichik qiymatni oladi", "Eng kattani oladi", "Yig'indini hisoblaydi", "O'rtachani hisoblaydi"],
        answer: "Eng kichik qiymatni oladi",
        correct: 0,
        explanation: "MIN() - ustundagi eng kichik qiymatni qaytaradi."
      },
      {
        id: 18,
        question: "SQLda 'LIKE' nima uchun?",
        options: ["Naqsh (pattern) bo'yicha qidirish", "Tenglik tekshirish", "Katta-kichik tekshirish", "Qiymat solishtirish"],
        answer: "Naqsh (pattern) bo'yicha qidirish",
        correct: 0,
        explanation: "LIKE - ma'lum naqsh (pattern) bo'yicha matn qidirish uchun."
      },
      {
        id: 19,
        question: "SQLda 'NULL' nima?",
        options: ["Qiymat yo'qligi", "0 qiymati", "Bo'sh string", "False"],
        answer: "Qiymat yo'qligi",
        correct: 0,
        explanation: "NULL - qiymatning mavjud emasligini ifodalaydi."
      },
      {
        id: 20,
        question: "SQLda 'DISTINCT' nima qiladi?",
        options: ["Takrorlanmaydigan qiymatlarni oladi", "Barcha qiymatlarni oladi", "NULLlarni oladi", "Saralaydi"],
        answer: "Takrorlanmaydigan qiymatlarni oladi",
        correct: 0,
        explanation: "DISTINCT - takrorlanmaydigan (unique) qiymatlarni qaytaradi."
      }
    ]
  }
};

export const availableLanguages = [
  { id: "react", name: "React.js", icon: "⚛️", color: "#61DAFB" },
  { id: "javascript", name: "JavaScript", icon: "🟨", color: "#F7DF1E" },
  { id: "python", name: "Python", icon: "🐍", color: "#3776AB" },
  { id: "html", name: "HTML/CSS", icon: "🌐", color: "#E34F26" },
  { id: "sql", name: "SQL", icon: "🗄️", color: "#4479A1" }
];