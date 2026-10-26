// The deck. One entry per word.
//   kana:   the word in hiragana — shown big
//   kanji:  how it's written with kanji, shown underneath (leave out if none)
//   en:     English meaning
//   note:   short usage note shown on the answer side (optional)
//   also:   other Japanese answers the mic should accept (optional)
//   src:    where it came from
window.WORDS = [
  // People
  { kana: "だれ", kanji: "誰", en: "who", src: ["Lessons"] },
  { kana: "わたし", kanji: "私", en: "I / me", also: ["わたくし"], src: ["Lessons"] },
  { kana: "ひと", kanji: "人", en: "person", also: ["ヒト"], src: ["Lessons"] },
  { kana: "あのひと", kanji: "あの人", en: "that person", note: "also used for he / she", src: ["Lessons"] },
  { kana: "おとこのひと", kanji: "男の人", en: "man", src: ["Lessons"] },
  { kana: "おんなのひと", kanji: "女の人", en: "woman", src: ["Lessons"] },
  { kana: "がくせい", kanji: "学生", en: "student", src: ["Lessons"] },
  { kana: "りゅうがくせい", kanji: "留学生", en: "international student", src: ["Lessons"] },
  { kana: "せんせい", kanji: "先生", en: "teacher", src: ["Lessons"] },
  { kana: "いしゃ", kanji: "医者", en: "doctor", src: ["Lessons"] },
  { kana: "べんごし", kanji: "弁護士", en: "lawyer", src: ["Lessons"] },
  { kana: "かいしゃいん", kanji: "会社員", en: "office worker", src: ["Lessons"] },

  // This / that
  { kana: "この", en: "this ___", note: "near you", src: ["Lessons"] },
  { kana: "その", en: "that ___", note: "near the person you're talking to", also: ["園"], src: ["Lessons"] },
  { kana: "あの", en: "that ___ over there", note: "far from both of you", src: ["Lessons"] },

  // Particles
  { kana: "も", en: "also / too", note: "わたしも = me too", also: ["藻"], src: ["Lessons"] },
  { kana: "の", en: "'s / of", note: "わたしのくるま = my car", also: ["野"], src: ["Lessons"] },

  // Is not
  { kana: "じゃない", en: "is not (casual)", note: "Most common in conversation — friends and family", src: ["Lessons"] },
  { kana: "じゃありません", en: "is not (polite)", note: "Everyday polite speech", src: ["Lessons"] },
  { kana: "ではありません", en: "is not (formal)", note: "Formal speech and writing", src: ["Lessons"] },
  { kana: "ではない", en: "is not (plain, written)", note: "Mostly written, rarely said aloud", src: ["Lessons"] },

  // Describing
  { kana: "さい", kanji: "歳", en: "years old", note: "goes after a number", also: ["才"], src: ["Lessons"] },
  { kana: "やさしい", kanji: "優しい", en: "kind / gentle", also: ["易しい"], src: ["Lessons"] },
  { kana: "かっこいい", en: "cool / good-looking", also: ["格好いい", "かっこ良い", "格好良い"], src: ["Lessons"] },

  // Food and drink
  { kana: "おちゃ", kanji: "お茶", en: "tea", src: ["Lessons"] },
  { kana: "りょくちゃ", kanji: "緑茶", en: "green tea", src: ["Lessons"] },
  { kana: "ごはん", kanji: "ご飯", en: "rice / meal", also: ["御飯"], src: ["Lessons"] },
  { kana: "みず", kanji: "水", en: "water", src: ["Lessons"] },
  { kana: "ください", en: "please (give me)", note: "おちゃをください = tea, please", also: ["下さい"], src: ["Lessons"] },

  // Greetings
  { kana: "こんにちは", en: "hello", also: ["こんにちわ"], src: ["Lessons"] },
  { kana: "こんばんは", en: "good evening", also: ["こんばんわ"], src: ["Lessons"] },
  { kana: "おはようございます", en: "good morning (polite)", src: ["Lessons"] },
  { kana: "またあした", kanji: "また明日", en: "see you tomorrow", src: ["Lessons"] },
  { kana: "また", en: "again", also: ["又"], src: ["Lessons"] },
  { kana: "あした", kanji: "明日", en: "tomorrow", src: ["Lessons"] },

  // Things
  { kana: "くるま", kanji: "車", en: "car", src: ["Lessons"] },

  // Countries and languages (country names are written in katakana)
  { kana: "にほん", kanji: "日本", en: "Japan", also: ["にっぽん"], src: ["Lessons"] },
  { kana: "にほんご", kanji: "日本語", en: "Japanese (language)", src: ["Lessons"] },
  { kana: "アメリカ", en: "America", src: ["Lessons"] },
  { kana: "アメリカじん", kanji: "アメリカ人", en: "American (person)", src: ["Lessons"] },
  { kana: "イギリス", en: "England / the UK", src: ["Lessons"] },
  { kana: "えいご", kanji: "英語", en: "English (language)", src: ["Lessons"] },
  { kana: "じん", kanji: "人", en: "person from ___", note: "goes after a country: アメリカじん = American", src: ["Lessons"] },
];

// Sentence practice — built only from the words above, plus です, さん and names.
// No を yet (not covered in her lessons).
// parts: each piece is a word's kana from the list (or です). Kanji and the
// mic's accepted spellings come from the word list automatically.
window.SENTENCES = [
  { en: "I'm a student too.", parts: ["わたし", "も", "がくせい", "です"] },
  { en: "That person is a doctor too.", parts: ["あのひと", "も", "いしゃ", "です"] },
  { en: "It's my car.", parts: ["わたし", "の", "くるま", "です"] },
  { en: "It's the teacher's car.", parts: ["せんせい", "の", "くるま", "です"] },
  { en: "It's an international student's car.", parts: ["りゅうがくせい", "の", "くるま", "です"] },
  { en: "It's a cool car.", parts: ["かっこいい", "くるま", "です"] },
  { en: "That car is cool too.", parts: ["その", "くるま", "も", "かっこいい", "です"] },
  { en: "(They're) a kind teacher.", parts: ["やさしい", "せんせい", "です"] },
  { en: "(They're) a kind person.", parts: ["やさしい", "ひと", "です"] },
  { en: "This person is a teacher too.", parts: ["この", "ひと", "も", "せんせい", "です"] },
  { en: "That man over there is a lawyer too.", parts: ["あの", "おとこのひと", "も", "べんごし", "です"] },
  { en: "That woman is an office worker too.", parts: ["その", "おんなのひと", "も", "かいしゃいん", "です"] },
  { en: "(I'm) not a doctor. (polite)", parts: ["いしゃ", "じゃありません"] },
  { en: "(I'm) not an office worker. (casual)", parts: ["かいしゃいん", "じゃない"] },
  { en: "(I'm) not a lawyer. (formal)", parts: ["べんごし", "ではありません"] },
  { en: "(I'm) not an international student. (polite)", parts: ["りゅうがくせい", "じゃありません"] },
  { en: "I'm American too.", parts: ["わたし", "も", "アメリカじん", "です"] },
  { en: "(I'm) not American. (polite)", parts: ["アメリカじん", "じゃありません"] },
  { en: "That person is Japanese too.", parts: ["あのひと", "も", "にほん", "じん", "です"] },
  { en: "That woman is British too.", parts: ["その", "おんなのひと", "も", "イギリス", "じん", "です"] },
  { en: "(They're) a Japanese teacher.", parts: ["にほんご", "の", "せんせい", "です"] },
  { en: "(They're) an English teacher.", parts: ["えいご", "の", "せんせい", "です"] },
  { en: "It's a Japanese car.", parts: ["にほん", "の", "くるま", "です"] },
  { en: "It's an American car.", parts: ["アメリカ", "の", "くるま", "です"] },
  { en: "Tanaka is a teacher too.", parts: ["たなか", "さん", "も", "せんせい", "です"] },
  { en: "It's Hana's car.", parts: ["はな", "さん", "の", "くるま", "です"] },
  { en: "Naomi is an international student too.", parts: ["なおみ", "さん", "も", "りゅうがくせい", "です"] },
  { en: "Naomi is Japanese too.", parts: ["なおみ", "さん", "も", "にほん", "じん", "です"] },
  { en: "It's Tanaka's green tea.", parts: ["たなか", "さん", "の", "りょくちゃ", "です"] },
  { en: "Hana is a kind person too.", parts: ["はな", "さん", "も", "やさしい", "ひと", "です"] },

  // With は and か
  { en: "I'm a student.", parts: ["わたし", "は", "がくせい", "です"] },
  { en: "I'm American.", parts: ["わたし", "は", "アメリカじん", "です"] },
  { en: "I'm a Japanese-language student.", parts: ["わたし", "は", "にほんご", "の", "がくせい", "です"] },
  { en: "Tanaka is a teacher.", parts: ["たなか", "さん", "は", "せんせい", "です"] },
  { en: "Hana is an international student.", parts: ["はな", "さん", "は", "りゅうがくせい", "です"] },
  { en: "Naomi is kind.", parts: ["なおみ", "さん", "は", "やさしい", "です"] },
  { en: "Tanaka isn't a lawyer. (polite)", parts: ["たなか", "さん", "は", "べんごし", "じゃありません"] },
  { en: "Who is that person?", parts: ["あのひと", "は", "だれ", "です", "か"] },
  { en: "Who is that man over there?", parts: ["あの", "おとこのひと", "は", "だれ", "です", "か"] },
  { en: "Whose car is that?", parts: ["その", "くるま", "は", "だれ", "の", "くるま", "です", "か"] },
  { en: "Who is the English teacher?", parts: ["えいご", "の", "せんせい", "は", "だれ", "です", "か"] },
  { en: "Is Hana a doctor?", parts: ["はな", "さん", "は", "いしゃ", "です", "か"] },
  { en: "Is Naomi Japanese?", parts: ["なおみ", "さん", "は", "にほん", "じん", "です", "か"] },
  { en: "Is that person an office worker?", parts: ["あのひと", "は", "かいしゃいん", "です", "か"] },
  { en: "Is this tea green tea?", parts: ["この", "おちゃ", "は", "りょくちゃ", "です", "か"] },
  { en: "Are you British?", parts: ["イギリス", "じん", "です", "か"] },
];

// Pieces sentences use that aren't flashcards: です, は, か, さん, and names.
// The mic may write names in kanji or katakana, so those spellings are accepted too.
window.EXTRAS = [
  { kana: "です" },
  { kana: "は" },
  { kana: "か" },
  { kana: "さん" },
  { kana: "たなか", kanji: "田中" },
  { kana: "はな", also: ["花", "ハナ"] },
  { kana: "なおみ", also: ["ナオミ", "直美"] },
];
