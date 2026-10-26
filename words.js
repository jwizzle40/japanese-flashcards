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
];
