const bibleBooks = [

    /* ================= OLD TESTAMENT ================= */

    // LAW
    { name: "Genesis", testament: "Old Testament", category: "Law", chapters: 50, verses: 1533, writer: "Moses" },
    { name: "Exodus", testament: "Old Testament", category: "Law", chapters: 40, verses: 1213, writer: "Moses" },
    { name: "Leviticus", testament: "Old Testament", category: "Law", chapters: 27, verses: 859, writer: "Moses" },
    { name: "Numbers", testament: "Old Testament", category: "Law", chapters: 36, verses: 1288, writer: "Moses" },
    { name: "Deuteronomy", testament: "Old Testament", category: "Law", chapters: 34, verses: 959, writer: "Moses" },

    // HISTORY
    { name: "Joshua", testament: "Old Testament", category: "History", chapters: 24, verses: 658, writer: "Joshua" },
    { name: "Judges", testament: "Old Testament", category: "History", chapters: 21, verses: 618, writer: "Samuel" },
    { name: "Ruth", testament: "Old Testament", category: "History", chapters: 4, verses: 85, writer: "Samuel" },
    { name: "1 Samuel", testament: "Old Testament", category: "History", chapters: 31, verses: 810, writer: "Samuel" },
    { name: "2 Samuel", testament: "Old Testament", category: "History", chapters: 24, verses: 695, writer: "Samuel" },
    { name: "1 Kings", testament: "Old Testament", category: "History", chapters: 22, verses: 816, writer: "Jeremiah" },
    { name: "2 Kings", testament: "Old Testament", category: "History", chapters: 25, verses: 719, writer: "Jeremiah" },
    { name: "1 Chronicles", testament: "Old Testament", category: "History", chapters: 29, verses: 942, writer: "Ezra" },
    { name: "2 Chronicles", testament: "Old Testament", category: "History", chapters: 36, verses: 822, writer: "Ezra" },
    { name: "Ezra", testament: "Old Testament", category: "History", chapters: 10, verses: 280, writer: "Ezra" },
    { name: "Nehemiah", testament: "Old Testament", category: "History", chapters: 13, verses: 406, writer: "Nehemiah" },
    { name: "Esther", testament: "Old Testament", category: "History", chapters: 10, verses: 167, writer: "Mordecai" },

    // POETRY
    { name: "Job", testament: "Old Testament", category: "Poetry", chapters: 42, verses: 1070, writer: "Unknown" },
    { name: "Psalms", testament: "Old Testament", category: "Poetry", chapters: 150, verses: 2461, writer: "David" },
    { name: "Proverbs", testament: "Old Testament", category: "Poetry", chapters: 31, verses: 915, writer: "Solomon" },
    { name: "Ecclesiastes", testament: "Old Testament", category: "Poetry", chapters: 12, verses: 222, writer: "Solomon" },
    { name: "Song of Solomon", testament: "Old Testament", category: "Poetry", chapters: 8, verses: 117, writer: "Solomon" },

    // MAJOR PROPHETS
    { name: "Isaiah", testament: "Old Testament", category: "Major Prophets", chapters: 66, verses: 1292, writer: "Isaiah" },
    { name: "Jeremiah", testament: "Old Testament", category: "Major Prophets", chapters: 52, verses: 1364, writer: "Jeremiah" },
    { name: "Lamentations", testament: "Old Testament", category: "Major Prophets", chapters: 5, verses: 154, writer: "Jeremiah" },
    { name: "Ezekiel", testament: "Old Testament", category: "Major Prophets", chapters: 48, verses: 1273, writer: "Ezekiel" },
    { name: "Daniel", testament: "Old Testament", category: "Major Prophets", chapters: 12, verses: 357, writer: "Daniel" },

    // MINOR PROPHETS
    { name: "Hosea", testament: "Old Testament", category: "Minor Prophets", chapters: 14, verses: 197, writer: "Hosea" },
    { name: "Joel", testament: "Old Testament", category: "Minor Prophets", chapters: 3, verses: 73, writer: "Joel" },
    { name: "Amos", testament: "Old Testament", category: "Minor Prophets", chapters: 9, verses: 146, writer: "Amos" },
    { name: "Obadiah", testament: "Old Testament", category: "Minor Prophets", chapters: 1, verses: 21, writer: "Obadiah" },
    { name: "Jonah", testament: "Old Testament", category: "Minor Prophets", chapters: 4, verses: 48, writer: "Jonah" },
    { name: "Micah", testament: "Old Testament", category: "Minor Prophets", chapters: 7, verses: 105, writer: "Micah" },
    { name: "Nahum", testament: "Old Testament", category: "Minor Prophets", chapters: 3, verses: 47, writer: "Nahum" },
    { name: "Habakkuk", testament: "Old Testament", category: "Minor Prophets", chapters: 3, verses: 56, writer: "Habakkuk" },
    { name: "Zephaniah", testament: "Old Testament", category: "Minor Prophets", chapters: 3, verses: 53, writer: "Zephaniah" },
    { name: "Haggai", testament: "Old Testament", category: "Minor Prophets", chapters: 2, verses: 38, writer: "Haggai" },
    { name: "Zechariah", testament: "Old Testament", category: "Minor Prophets", chapters: 14, verses: 211, writer: "Zechariah" },
    { name: "Malachi", testament: "Old Testament", category: "Minor Prophets", chapters: 4, verses: 55, writer: "Malachi" },

    /* ================= NEW TESTAMENT ================= */

    // GOSPELS
    { name: "Matthew", testament: "New Testament", category: "Gospels", chapters: 28, verses: 1071, writer: "Matthew" },
    { name: "Mark", testament: "New Testament", category: "Gospels", chapters: 16, verses: 678, writer: "Mark" },
    { name: "Luke", testament: "New Testament", category: "Gospels", chapters: 24, verses: 1151, writer: "Luke" },
    { name: "John", testament: "New Testament", category: "Gospels", chapters: 21, verses: 879, writer: "John" },

    // HISTORY
    { name: "Acts", testament: "New Testament", category: "History", chapters: 28, verses: 1007, writer: "Luke" },

    // PAULINE
    { name: "Romans", testament: "New Testament", category: "Pauline Epistles", chapters: 16, verses: 433, writer: "Paul" },
    { name: "1 Corinthians", testament: "New Testament", category: "Pauline Epistles", chapters: 16, verses: 437, writer: "Paul" },
    { name: "2 Corinthians", testament: "New Testament", category: "Pauline Epistles", chapters: 13, verses: 257, writer: "Paul" },
    { name: "Galatians", testament: "New Testament", category: "Pauline Epistles", chapters: 6, verses: 149, writer: "Paul" },
    { name: "Ephesians", testament: "New Testament", category: "Pauline Epistles", chapters: 6, verses: 155, writer: "Paul" },
    { name: "Philippians", testament: "New Testament", category: "Pauline Epistles", chapters: 4, verses: 104, writer: "Paul" },
    { name: "Colossians", testament: "New Testament", category: "Pauline Epistles", chapters: 4, verses: 95, writer: "Paul" },
    { name: "1 Thessalonians", testament: "New Testament", category: "Pauline Epistles", chapters: 5, verses: 89, writer: "Paul" },
    { name: "2 Thessalonians", testament: "New Testament", category: "Pauline Epistles", chapters: 3, verses: 47, writer: "Paul" },
    { name: "1 Timothy", testament: "New Testament", category: "Pauline Epistles", chapters: 6, verses: 113, writer: "Paul" },
    { name: "2 Timothy", testament: "New Testament", category: "Pauline Epistles", chapters: 4, verses: 83, writer: "Paul" },
    { name: "Titus", testament: "New Testament", category: "Pauline Epistles", chapters: 3, verses: 46, writer: "Paul" },
    { name: "Philemon", testament: "New Testament", category: "Pauline Epistles", chapters: 1, verses: 25, writer: "Paul" },

    // GENERAL
    { name: "Hebrews", testament: "New Testament", category: "General Epistles", chapters: 13, verses: 303, writer: "Unknown" },
    { name: "James", testament: "New Testament", category: "General Epistles", chapters: 5, verses: 108, writer: "James" },
    { name: "1 Peter", testament: "New Testament", category: "General Epistles", chapters: 5, verses: 105, writer: "Peter" },
    { name: "2 Peter", testament: "New Testament", category: "General Epistles", chapters: 3, verses: 61, writer: "Peter" },
    { name: "1 John", testament: "New Testament", category: "General Epistles", chapters: 5, verses: 105, writer: "John" },
    { name: "2 John", testament: "New Testament", category: "General Epistles", chapters: 1, verses: 13, writer: "John" },
    { name: "3 John", testament: "New Testament", category: "General Epistles", chapters: 1, verses: 14, writer: "John" },
    { name: "Jude", testament: "New Testament", category: "General Epistles", chapters: 1, verses: 25, writer: "Jude" },

    // PROPHECY
    { name: "Revelation", testament: "New Testament", category: "Prophecy", chapters: 22, verses: 404, writer: "John" }

];

const bibleLanguages = {
    telugu: {
        "Genesis": "ఆదికాండము", "Exodus": "నిర్గమకాండము", "Leviticus": "లేవీయకాండము", "Numbers": "సంఖ్యాకాండము", 
        "Deuteronomy": "ద్వితీయోపదేశకాండము",
        "Joshua": "యెహోషువ", "Judges": "న్యాయాధిపతులు", "Ruth": "రూతు", "1 Samuel": "1 సమూయేలు", "2 Samuel": "2 సమూయేలు",
        "1 Kings": "1 రాజులు", "2 Kings": "2 రాజులు", "1 Chronicles": "1 దినవృత్తాంతములు", "2 Chronicles": "2 దినవృత్తాంతములు",
        "Ezra": "ఎజ్రా", "Nehemiah": "నెహెమ్యా", "Esther": "ఎస్తేరు",
        "Job": "యోబు", "Psalms": "కీర్తనల గ్రంథము", "Proverbs": "సామెతలు", "Ecclesiastes": "ప్రసంగి", "Song of Solomon": "పరమగీతము",
        "Isaiah": "యెషయా", "Jeremiah": "యిర్మియా", "Lamentations": "విలాపవాక్యములు", "Ezekiel": "యెహెజ్కేలు", "Daniel": "దానియేలు",
        "Hosea": "హోషేయా", "Joel": "యోవేలు", "Amos": "ఆమోసు", "Obadiah": "ఓబద్యా", "Jonah": "యోనా", "Micah": "మీకా",
        "Nahum": "నహూము", "Habakkuk": "హబక్కూకు", "Zephaniah": "జెఫన్యా", "Haggai": "హగ్గయి", "Zechariah": "జెకర్యా", "Malachi": "మలాకీ",
        "Matthew": "మత్తయి", "Mark": "మార్కు", "Luke": "లూకా", "John": "యోహాను", "Acts": "అపొస్తలుల కార్యములు",
        "Romans": "రోమీయులకు", "1 Corinthians": "1 కొరింథీయులకు", "2 Corinthians": "2 కొరింథీయులకు", "Galatians": "గలతీయులకు",
        "Ephesians": "ఎఫెసీయులకు", "Philippians": "ఫిలిప్పీయులకు", "Colossians": "కొలొస్సయులకు",
        "1 Thessalonians": "1 థెస్సలొనీకయులకు", "2 Thessalonians": "2 థెస్సలొనీకయులకు",
        "1 Timothy": "1 తిమోతికి", "2 Timothy": "2 తిమోతికి", "Titus": "తీతుకు", "Philemon": "ఫిలేమోనుకు",
        "Hebrews": "హెబ్రీయులకు", "James": "యాకోబు", "1 Peter": "1 పేతురు", "2 Peter": "2 పేతురు",
        "1 John": "1 యోహాను", "2 John": "2 యోహాను", "3 John": "3 యోహాను", "Jude": "యూదా", "Revelation": "ప్రకటన గ్రంథము"
    },

    hindi: {
        "Genesis": "उत्पत्ति", "Exodus": "निर्गमन", "Leviticus": "लैव्यव्यवस्था", "Numbers": "गिनती", "Deuteronomy": "व्यवस्थाविवरण",
        "Joshua": "यहोशू", "Judges": "न्यायियों", "Ruth": "रूत", "1 Samuel": "1 शमूएल", "2 Samuel": "2 शमूएल",
        "1 Kings": "1 राजा", "2 Kings": "2 राजा", "1 Chronicles": "1 इतिहास", "2 Chronicles": "2 इतिहास",
        "Ezra": "एज्रा", "Nehemiah": "नहेम्याह", "Esther": "एस्तेर",
        "Job": "अय्यूब", "Psalms": "भजन संहिता", "Proverbs": "नीतिवचन", "Ecclesiastes": "सभोपदेशक", "Song of Solomon": "श्रेष्ठगीत",
        "Isaiah": "यशायाह", "Jeremiah": "यिर्मयाह", "Lamentations": "विलापगीत", "Ezekiel": "यहेजकेल", "Daniel": "दानिय्येल",
        "Hosea": "होशे", "Joel": "योएल", "Amos": "आमोस", "Obadiah": "ओबद्याह", "Jonah": "योना", "Micah": "मीका",
        "Nahum": "नहूम", "Habakkuk": "हबक्कूक", "Zephaniah": "सपन्याह", "Haggai": "हाग्गै", "Zechariah": "जकर्याह", "Malachi": "मलाकी",
        "Matthew": "मत्ती", "Mark": "मरकुस", "Luke": "लूका", "John": "यूहन्ना", "Acts": "प्रेरितों के काम",
        "Romans": "रोमियों", "1 Corinthians": "1 कुरिन्थियों", "2 Corinthians": "2 कुरिन्थियों", "Galatians": "गलातियों",
        "Ephesians": "इफिसियों", "Philippians": "फिलिप्पियों", "Colossians": "कुलुस्सियों",
        "1 Thessalonians": "1 थिस्सलुनीकियों", "2 Thessalonians": "2 थिस्सलुनीकियों",
        "1 Timothy": "1 तीमुथियुस", "2 Timothy": "2 तीमुथियुस", "Titus": "तीतुस", "Philemon": "फिलेमोन",
        "Hebrews": "इब्रानियों", "James": "याकूब", "1 Peter": "1 पतरस", "2 Peter": "2 पतरस",
        "1 John": "1 यूहन्ना", "2 John": "2 यूहन्ना", "3 John": "3 यूहन्ना", "Jude": "यहूदा", "Revelation": "प्रकाशितवाक्य"
    },

    tamil: {
        "Genesis": "ஆதியாகமம்", "Exodus": "யாத்திராகமம்", "Leviticus": "லேவியராகமம்", "Numbers": "எண்ணாகமம்", 
        "Deuteronomy": "உபாகமம்",
        "Joshua": "யோசுவா", "Judges": "நியாயாதிபதிகள்", "Ruth": "ரூத்", "1 Samuel": "1 சாமுவேல்", "2 Samuel": "2 சாமுவேல்",
        "1 Kings": "1 இராஜாக்கள்", "2 Kings": "2 இராஜாக்கள்", "1 Chronicles": "1 நாளாகமம்", "2 Chronicles": "2 நாளாகமம்",
        "Ezra": "எஸ்றா", "Nehemiah": "நெகேமியா", "Esther": "எஸ்தர்",
        "Job": "யோபு", "Psalms": "சங்கீதம்", "Proverbs": "நீதிமொழிகள்", "Ecclesiastes": "பிரசங்கி", "Song of Solomon": "உன்னதப்பாட்டு",
        "Isaiah": "ஏசாயா", "Jeremiah": "எரேமியா", "Lamentations": "புலம்பல்", "Ezekiel": "எசேக்கியேல்", "Daniel": "தானியேல்",
        "Hosea": "ஓசியா", "Joel": "யோவேல்", "Amos": "ஆமோஸ்", "Obadiah": "ஒபதியா", "Jonah": "யோனா", "Micah": "மீகா",
        "Nahum": "நாகூம்", "Habakkuk": "ஆபகூக்", "Zephaniah": "செப்பனியா", "Haggai": "ஆகாய்", "Zechariah": "சகரியா", 
        "Malachi": "மல்கியா",
        "Matthew": "மத்தேயு", "Mark": "மாற்கு", "Luke": "லூக்கா", "John": "யோவான்", "Acts": "அப்போஸ்தலர் பணிகள்",
        "Romans": "ரோமர்", "1 Corinthians": "1 கொரிந்தியர்", "2 Corinthians": "2 கொரிந்தியர்", "Galatians": "கலாத்தியர்",
        "Ephesians": "எபேசியர்", "Philippians": "பிலிப்பியர்", "Colossians": "கொலோசெயர்",
        "1 Thessalonians": "1 தெசலோனிக்கேயர்", "2 Thessalonians": "2 தெசலோனிக்கேயர்",
        "1 Timothy": "1 தீமோத்தேயு", "2 Timothy": "2 தீமோத்தேயு", "Titus": "தீத்து", "Philemon": "பிலேமோன்",
        "Hebrews": "எபிரெயர்", "James": "யாக்கோபு", "1 Peter": "1 பேதுரு", "2 Peter": "2 பேதுரு",
        "1 John": "1 யோவான்", "2 John": "2 யோவான்", "3 John": "3 யோவான்", "Jude": "யூதா", "Revelation": "வெளிப்படுத்தின விசேஷம்"
    },

    malayalam: {
        "Genesis": "ഉല്പത്തി", "Exodus": "പുറപ്പാട്", "Leviticus": "ലേവ്യപുസ്തകം", "Numbers": "സംഖ്യാപുസ്തകം", 
        "Deuteronomy": "ആവർത്തനം",
        "Joshua": "യോശുവ", "Judges": "ന്യായാധിപന്മാർ", "Ruth": "രൂത്ത്", "1 Samuel": "1 ശമൂവേൽ", "2 Samuel": "2 ശമൂവേൽ",
        "1 Kings": "1 രാജാക്കന്മാർ", "2 Kings": "2 രാജാക്കന്മാർ", "1 Chronicles": "1 ദിനവൃത്താന്തം", "2 Chronicles": "2 ദിനവൃത്താന്തം",
        "Ezra": "എസ്രാ", "Nehemiah": "നെഹെമ്യാവ്", "Esther": "എസ്ഥേർ",
        "Job": "ഇയ്യോബ്", "Psalms": "സങ്കീർത്തനങ്ങൾ", "Proverbs": "സദൃശവാക്യങ്ങൾ", "Ecclesiastes": "സഭാപ്രസംഗി", 
        "Song of Solomon": "ഉത്തമഗീതം",
        "Isaiah": "യെശയ്യാവ്", "Jeremiah": "യിരെമ്യാവ്", "Lamentations": "വിലാപങ്ങൾ", "Ezekiel": "യെഹെസ്കേൽ", "Daniel": "ദാനിയേൽ",
        "Hosea": "ഹോശേയ", "Joel": "യോവേൽ", "Amos": "ആമോസ്", "Obadiah": "ഓബദ്യാവ്", "Jonah": "യോനാ", "Micah": "മീഖാ",
        "Nahum": "നഹൂം", "Habakkuk": "ഹബക്കൂക്", "Zephaniah": "സെഫന്യാവ്", "Haggai": "ഹഗ്ഗായി", "Zechariah": "സെഖര്യാവ്", 
        "Malachi": "മലാഖി",
        "Matthew": "മത്തായി", "Mark": "മർക്കോസ്", "Luke": "ലൂക്കോസ്", "John": "യോഹന്നാൻ", 
        "Acts": "അപ്പൊസ്തലന്മാരുടെ പ്രവൃത്തികൾ",
        "Romans": "റോമർ", "1 Corinthians": "1 കൊരിന്ത്യർ", "2 Corinthians": "2 കൊരിന്ത്യർ", "Galatians": "ഗലാത്യർ",
        "Ephesians": "എഫെസ്യർ", "Philippians": "ഫിലിപ്പിയർ", "Colossians": "കൊലോസ്യർ",
        "1 Thessalonians": "1 തെസ്സലോനീക്യർ", "2 Thessalonians": "2 തെസ്സലോനീക്യർ",
        "1 Timothy": "1 തിമൊഥെയൊസ്", "2 Timothy": "2 തിമൊഥെയൊസ്", "Titus": "തീത്തോസ്", "Philemon": "ഫിലേമോൻ",
        "Hebrews": "എബ്രായർ", "James": "യാക്കോബ്", "1 Peter": "1 പത്രോസ്", "2 Peter": "2 പത്രೋസ്",
        "1 John": "1 യോഹന്നാൻ", "2 John": "2 യോഹന്നാൻ", "3 John": "3 യോഹന്നാൻ", "Jude": "യൂദാ", "Revelation": "വെളിപാട്"
    },

    kannada: {
        "Genesis": "ಆದಿಕಾಂಡ", "Exodus": "ವಿಮೋಚನಕಾಂಡ", "Leviticus": "ಯಾಜಕಕಾಂಡ", "Numbers": "ಅರಣ್ಯಕಾಂಡ", 
        "Deuteronomy": "ಧರ್ಮೋಪದೇಶಕಾಂಡ",
        "Joshua": "ಯೆಹೋಶುವ", "Judges": "ನ್ಯಾಯಾಧಿಪತಿಗಳು", "Ruth": "ರೂತಳು", "1 Samuel": "1 ಸಮುವೇಲನು", "2 Samuel": "2 ಸಮುವೇಲನು",
        "1 Kings": "1 ಅರಸುಗಳು", "2 Kings": "2 ಅರಸುಗಳು", "1 Chronicles": "1 ಪೂರ್ವಕಾಲದ ವೃತ್ತಾಂತ", "2 Chronicles": "2 ಪೂರ್ವಕಾಲದ ವೃತ್ತಾಂತ",
        "Ezra": "ಎಜ್ರನು", "Nehemiah": "ನೆಹೆಮಿಯನು", "Esther": "ಎಸ್ತೇರಳು",
        "Job": "ಯೋಬನು", "Psalms": "ಕೀರ್ತನೆಗಳು", "Proverbs": "ಜ್ಞಾನೋಕ್ತಿಗಳು", "Ecclesiastes": "ಪ್ರಸಂಗಿ", "Song of Solomon": "ಪರಮ ಗೀತೆ",
        "Isaiah": "ಯೆಶಾಯನು", "Jeremiah": "ಯೆರೆಮಿಯನು", "Lamentations": "ಪ್ರಲಾಪಗಳು", "Ezekiel": "ಎಹೆಜ್ಕೇಲನು", "Daniel": "ದಾನಿಯೇಲನು",
        "Hosea": "ಹೋಶೇಯನು", "Joel": "ಯೋವೇಲನು", "Amos": "ಆಮೋಸನು", "Obadiah": "ಓಬದ್ಯನು", "Jonah": "ಯೋನನು", "Micah": "ಮೀಕಾಯನು",
        "Nahum": "ನಹೂಮನು", "Habakkuk": "ಹಬಕ್ಕೂಕನು", "Zephaniah": "ಚೆಫನ್ಯನು", "Haggai": "ಹಗ್ಗಾಯನು", "Zechariah": "ಜೆಕರ್ಯನು", 
        "Malachi": "ಮಲಾಕಿಯನು",
        "Matthew": "ಮತ್ತಾಯನು", "Mark": "ಮಾರ್ಕನು", "Luke": "ಲೂಕನು", "John": "ಯೋಹಾನನು", "Acts": "ಅಪೊಸ್ತಲರ ಕೃತ್ಯಗಳು",
        "Romans": "ರೋಮಾಪುರದವರಿಗೆ", "1 Corinthians": "1 ಕೊರಿಂಥದವರಿಗೆ", "2 Corinthians": "2 ಕೊರಿಂಥದವರಿಗೆ", "Galatians": "ಗಲಾತ್ಯದವರಿಗೆ",
        "Ephesians": "ಎಫೆಸದವರಿಗೆ", "Philippians": "ಫಿಲಿಪ್ಪಿಯವರಿಗೆ", "Colossians": "ಕೊಲೊಸ್ಸದವರಿಗೆ",
        "1 Thessalonians": "1 ಥೆಸಲೊನೀಕದವರಿಗೆ", "2 Thessalonians": "2 ಥೆಸಲೊನೀಕದವರಿಗೆ",
        "1 Timothy": "1 ತಿಮೊಥೆಯನಿಗೆ", "2 Timothy": "2 ತಿಮೊಥೆಯನಿಗೆ", "Titus": "ತೀತನಿಗೆ", "Philemon": "ಫಿಲೆಮೋನನಿಗೆ",
        "Hebrews": "ಇಬ್ರಿಯರಿಗೆ", "James": "ಯಾಕೋಬನು", "1 Peter": "1 ಪೇತ್ರನು", "2 Peter": "2 ಪೇತ್ರನು",
        "1 John": "1 ಯೋಹಾನನು", "2 John": "2 ಯೋಹಾನನು", "3 John": "3 ಯೋಹಾನನು", "Jude": "ಯೂದನು", "Revelation": "ಪ್ರಕಟನೆ"
    }
};