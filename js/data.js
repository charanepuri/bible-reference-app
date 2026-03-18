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