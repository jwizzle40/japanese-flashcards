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
  { kana: "あなた", en: "you", note: "used sparingly — people usually say the person's name instead", also: ["貴方"], src: ["Lessons"] },
  { kana: "あなたたち", kanji: "あなた達", en: "you (plural)", also: ["貴方たち", "貴方達"], src: ["Lessons"] },
  { kana: "かれ", kanji: "彼", en: "he / him", note: "also means boyfriend", src: ["Lessons"] },
  { kana: "かのじょ", kanji: "彼女", en: "she / her", note: "also means girlfriend", src: ["Lessons"] },
  { kana: "わたしたち", kanji: "私たち", en: "we / us", also: ["私達"], src: ["Lessons"] },
  { kana: "かれら", kanji: "彼ら", en: "they (men, or a mixed group)", src: ["Lessons"] },
  { kana: "かのじょたち", kanji: "彼女たち", en: "they (women) — たち", also: ["彼女達"], src: ["Lessons"] },
  { kana: "かのじょら", kanji: "彼女ら", en: "they (women) — ら", note: "same meaning as かのじょたち; ら is a bit more casual", src: ["Lessons"] },
  { kana: "みなさん", kanji: "皆さん", en: "everyone", note: "polite way to address a group — みなさん、こんにちは = hello, everyone", src: ["Lessons"] },
  { kana: "ひと", kanji: "人", en: "person", also: ["ヒト"], src: ["Lessons"] },
  { kana: "こども", kanji: "子供", en: "child", also: ["子ども"], src: ["Lessons"] },
  { kana: "おとな", kanji: "大人", en: "adult", src: ["Lessons"] },
  { kana: "おとこのこ", kanji: "男の子", en: "boy", note: "おとこ (male) + の + こ (child)", src: ["Lessons"] },
  { kana: "おんなのこ", kanji: "女の子", en: "girl", note: "おんな (female) + の + こ (child)", src: ["Lessons"] },
  { kana: "かぞく", kanji: "家族", en: "family", note: "your own family; someone else's = ごかぞく", src: ["Lessons"] },
  { kana: "いもうと", kanji: "妹", en: "younger sister", note: "your own; someone else's = いもうとさん", src: ["Lessons"] },
  { kana: "ともだち", kanji: "友達", en: "friend", also: ["友だち"], src: ["Lessons"] },
  { kana: "あのひと", kanji: "あの人", en: "that person", note: "also used for he / she", src: ["Lessons"] },
  { kana: "おとこのひと", kanji: "男の人", en: "man", note: "おとこ (male) + の + ひと (person) — the polite everyday way to say man", src: ["Lessons"] },
  { kana: "おんなのひと", kanji: "女の人", en: "woman", note: "おんな (female) + の + ひと (person) — the polite everyday way to say woman", src: ["Lessons"] },
  { kana: "おとこ", kanji: "男", en: "male / man (plain)", note: "plain word — can sound blunt for a person; おとこのひと is the polite way to say man", src: ["Lessons"] },
  { kana: "おんな", kanji: "女", en: "female / woman (plain)", note: "plain word — can sound blunt for a person; おんなのひと is the polite way to say woman", src: ["Lessons"] },
  { kana: "だんせい", kanji: "男性", en: "male (formal)", note: "polite / formal — on forms and signs; おとこ is the plain word", src: ["Lessons"] },
  { kana: "じょせい", kanji: "女性", en: "female (formal)", note: "polite / formal — on forms and signs; おんな is the plain word", src: ["Lessons"] },
  { kana: "がくせい", kanji: "学生", en: "enrolled student", src: ["Lessons"] },
  { kana: "がくしゅうしゃ", kanji: "学習者", en: "learner", note: "anyone studying something, not just a school student — にほんごがくしゅうしゃ = Japanese learner", src: ["Lessons"] },
  { kana: "りゅうがくせい", kanji: "留学生", en: "international student", src: ["Lessons"] },
  { kana: "だいがく", kanji: "大学", en: "university", src: ["Lessons"] },
  { kana: "だいがくせい", kanji: "大学生", en: "university student", src: ["Lessons"] },
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
  { kana: "と", en: "and / with", note: "joins nouns: さかなとやさい = fish and vegetables — not the door 戸", src: ["Lessons"] },
  { kana: "について", en: "about (a topic)", note: "goes after a noun: にほんごについて = about Japanese", src: ["Lessons"] },

  // Is not
  { kana: "じゃない", en: "is not (casual)", note: "Most common in conversation — friends and family", src: ["Lessons"] },
  { kana: "じゃありません", en: "is not (polite)", note: "Everyday polite speech", src: ["Lessons"] },
  { kana: "ではありません", en: "is not (formal)", note: "Formal speech and writing", src: ["Lessons"] },
  { kana: "ではない", en: "is not (plain, written)", note: "Mostly written, rarely said aloud", src: ["Lessons"] },

  // Describing
  { kana: "さい", kanji: "歳", en: "years old", note: "goes after a number", also: ["才"], src: ["Lessons"] },
  { kana: "やさしい", kanji: "優しい", en: "kind / gentle", also: ["易しい"], src: ["Lessons"] },
  { kana: "かっこいい", en: "cool / good-looking", also: ["格好いい", "かっこ良い", "格好良い"], src: ["Lessons"] },
  { kana: "すごい", kanji: "凄い", en: "amazing / great", note: "すごく = really / very — すごくおいしい = really delicious", also: ["スゴイ"], src: ["Lessons"] },
  { kana: "わかい", kanji: "若い", en: "young", src: ["Lessons"] },
  { kana: "げんき", kanji: "元気", en: "well / healthy / energetic", note: "げんきですか = how are you? / are you doing well?", src: ["Lessons"] },
  { kana: "おいしい", kanji: "美味しい", en: "delicious", note: "うまい is a casual way to say it", src: ["Lessons"] },
  { kana: "こわい", kanji: "怖い", en: "scary", note: "also means scared", src: ["Lessons"] },
  { kana: "ぜんぜん", kanji: "全然", en: "not at all", note: "goes with a negative: ぜんぜんこわくない = not scary at all", src: ["Lessons"] },

  // Food and drink
  { kana: "おちゃ", kanji: "お茶", en: "tea", src: ["Lessons"] },
  { kana: "りょくちゃ", kanji: "緑茶", en: "green tea", src: ["Lessons"] },
  { kana: "ごはん", kanji: "ご飯", en: "rice / meal", also: ["御飯"], src: ["Lessons"] },
  { kana: "みず", kanji: "水", en: "water", src: ["Lessons"] },
  { kana: "さかな", kanji: "魚", en: "fish", src: ["Lessons"] },
  { kana: "やさい", kanji: "野菜", en: "vegetables", src: ["Lessons"] },
  { kana: "おかし", kanji: "お菓子", en: "sweets / snacks", note: "candy, cookies, chips and the like", also: ["御菓子"], src: ["Lessons"] },
  { kana: "メニュー", en: "menu", src: ["Lessons"] },
  { kana: "ちゅうもん", kanji: "注文", en: "order (asking to buy something)", note: "food, shopping, online — ちゅうもんする = to order", also: ["ちゅうもんする", "注文する"], src: ["Lessons"] },
  { kana: "おかいけい", kanji: "お会計", en: "the bill / check", note: "おかいけい、おねがいします = check, please", also: ["御会計"], src: ["Lessons"] },
  { kana: "ください", en: "please (give me)", note: "おちゃをください = tea, please", also: ["下さい"], src: ["Lessons"] },

  // Greetings
  { kana: "こんにちは", en: "hello", also: ["こんにちわ"], src: ["Lessons"] },
  { kana: "こんばんは", en: "good evening", also: ["こんばんわ"], src: ["Lessons"] },
  { kana: "おはようございます", en: "good morning (polite)", src: ["Lessons"] },
  { kana: "おはよう", en: "good morning (casual)", note: "friends and family", src: ["Lessons"] },
  { kana: "おひさしぶりです", kanji: "お久しぶりです", en: "long time no see (polite)", also: ["お久し振りです"], src: ["Lessons"] },
  { kana: "ひさしぶり", kanji: "久しぶり", en: "long time no see (casual)", note: "friends and family", also: ["久し振り"], src: ["Lessons"] },
  { kana: "おやすみなさい", en: "good night", also: ["お休みなさい"], src: ["Lessons"] },
  { kana: "さようなら", en: "goodbye", also: ["さよなら"], src: ["Lessons"] },
  { kana: "じゃあ", en: "then / in that case / see you", note: "starts a sentence: じゃあ、おちゃ、おねがいします = then I'll have tea, please · also a casual goodbye: じゃあね, じゃあまた", also: ["じゃ", "じゃあね", "じゃね"], src: ["Lessons"] },
  { kana: "ありがとう", en: "thank you (casual)", note: "friends and family", also: ["有難う"], src: ["Lessons"] },
  { kana: "ありがとうございます", en: "thank you (polite)", also: ["有難うございます"], src: ["Lessons"] },
  { kana: "すみません", en: "sorry / excuse me", note: "also used to get someone's attention", src: ["Lessons"] },
  { kana: "はじめまして", kanji: "初めまして", en: "nice to meet you", note: "only the first time you meet someone", src: ["Lessons"] },
  { kana: "よろしくおねがいします", kanji: "よろしくお願いします", en: "I hope for a good relationship", note: "said after はじめまして and your name; どうぞよろしくおねがいします is more polite", also: ["宜しくお願いします", "どうぞよろしくおねがいします", "どうぞよろしくお願いします"], src: ["Lessons"] },
  { kana: "いただきます", en: "thank you (before a meal)", also: ["頂きます"], src: ["Lessons"] },
  { kana: "おかえりなさい", kanji: "お帰りなさい", en: "welcome home", note: "said to someone coming home; おかえり is casual", also: ["おかえり", "お帰り"], src: ["Lessons"] },
  { kana: "いってらっしゃい", kanji: "行ってらっしゃい", en: "please go and come back", note: "said to someone leaving the house", also: ["行ってらっしゃい"], src: ["Lessons"] },
  { kana: "またあした", kanji: "また明日", en: "see you tomorrow", src: ["Lessons"] },
  { kana: "また", en: "again", also: ["又"], src: ["Lessons"] },
  { kana: "あした", kanji: "明日", en: "tomorrow", src: ["Lessons"] },
  { kana: "きのう", kanji: "昨日", en: "yesterday", src: ["Lessons"] },
  { kana: "きょう", kanji: "今日", en: "today", note: "きょうはげんきですか = how are you today?", src: ["Lessons"] },

  // Replies
  { kana: "はい", en: "yes", src: ["Lessons"] },
  { kana: "いいえ", en: "no", note: "can sound blunt — people often soften it or just say ちがいます", src: ["Lessons"] },
  { kana: "そうです", en: "that's right", src: ["Lessons"] },
  { kana: "いえいえ", en: "no, no / not at all", note: "modest reply to thanks or a compliment", src: ["Lessons"] },
  { kana: "そうですか", en: "is that so? / I see", note: "rising tone = really?, falling tone = I see", src: ["Lessons"] },
  { kana: "そうですね", en: "that's true / let me see", note: "agreeing with someone, or pausing to think", src: ["Lessons"] },
  { kana: "えっと", en: "um / let me see", note: "a filler while you think", also: ["えーと", "ええと", "えーっと"], src: ["Lessons"] },
  { kana: "おねがいします", kanji: "お願いします", en: "please (asking for something)", note: "おちゃ、おねがいします = tea, please", also: ["御願いします"], src: ["Lessons"] },
  { kana: "どうぞ", en: "here you go / go ahead", note: "said when offering something or letting someone go first", src: ["Lessons"] },
  { kana: "どうも", en: "thanks", note: "quick, light thanks; どうもありがとう = thank you very much", src: ["Lessons"] },

  // Things
  { kana: "くるま", kanji: "車", en: "car", src: ["Lessons"] },
  { kana: "おかね", kanji: "お金", en: "money", src: ["Lessons"] },
  { kana: "おみやげ", kanji: "お土産", en: "souvenir / gift from a trip", note: "brought back for friends, family or coworkers", also: ["御土産", "おみあげ"], src: ["Lessons"] },
  { kana: "ほん", kanji: "本", en: "book", src: ["Lessons"] },
  { kana: "しんぶん", kanji: "新聞", en: "newspaper", src: ["Lessons"] },
  { kana: "ざっし", kanji: "雑誌", en: "magazine", src: ["Lessons"] },
  { kana: "いぬ", kanji: "犬", en: "dog", note: "read けん in breed names — かいけん 甲斐犬 = Kai Ken", src: ["Lessons"] },
  { kana: "ねこ", kanji: "猫", en: "cat", also: ["ネコ"], src: ["Lessons"] },
  { kana: "とり", kanji: "鳥", en: "bird", src: ["Lessons"] },
  { kana: "かばん", kanji: "鞄", en: "bag", note: "the everyday word — also バッグ", also: ["カバン"], src: ["Lessons"] },
  { kana: "バッグ", en: "bag / handbag (katakana)", note: "borrowed from English — often a handbag; also かばん", src: ["Lessons"] },
  { kana: "きょうかしょ", kanji: "教科書", en: "textbook", src: ["Lessons"] },
  { kana: "つくえ", kanji: "机", en: "desk", src: ["Lessons"] },
  { kana: "いす", kanji: "椅子", en: "chair", also: ["イス"], src: ["Lessons"] },

  // Weather
  { kana: "なつ", kanji: "夏", en: "summer", src: ["Lessons"] },
  { kana: "あつい", kanji: "暑い", en: "hot (weather)", note: "熱い (same sound) = hot to the touch, like tea", also: ["熱い"], src: ["Lessons"] },
  { kana: "むしあつい", kanji: "蒸し暑い", en: "humid / muggy", note: "むし = steamy, あつい = hot", src: ["Lessons"] },

  // Seasons
  { kana: "きせつ", kanji: "季節", en: "season", src: ["Lessons"] },
  { kana: "はる", kanji: "春", en: "spring", src: ["Lessons"] },
  { kana: "あき", kanji: "秋", en: "fall / autumn", src: ["Lessons"] },
  { kana: "ふゆ", kanji: "冬", en: "winter", src: ["Lessons"] },

  // Months (number + がつ)
  { kana: "いちがつ", kanji: "一月", en: "January", note: "usually written 1月", also: ["1月", "１月"], src: ["Lessons"] },
  { kana: "にがつ", kanji: "二月", en: "February", note: "usually written 2月", also: ["2月", "２月"], src: ["Lessons"] },
  { kana: "さんがつ", kanji: "三月", en: "March", note: "usually written 3月", also: ["3月", "３月"], src: ["Lessons"] },
  { kana: "しがつ", kanji: "四月", en: "April", note: "4 is し here, not よん · usually written 4月", also: ["4月", "４月"], src: ["Lessons"] },
  { kana: "ごがつ", kanji: "五月", en: "May", note: "usually written 5月", also: ["5月", "５月"], src: ["Lessons"] },
  { kana: "ろくがつ", kanji: "六月", en: "June", note: "usually written 6月", also: ["6月", "６月"], src: ["Lessons"] },
  { kana: "しちがつ", kanji: "七月", en: "July", note: "7 is しち here, not なな · usually written 7月", also: ["7月", "７月"], src: ["Lessons"] },
  { kana: "はちがつ", kanji: "八月", en: "August", note: "usually written 8月", also: ["8月", "８月"], src: ["Lessons"] },
  { kana: "くがつ", kanji: "九月", en: "September", note: "9 is く here, not きゅう · usually written 9月", also: ["9月", "９月"], src: ["Lessons"] },
  { kana: "じゅうがつ", kanji: "十月", en: "October", note: "usually written 10月", also: ["10月", "１０月"], src: ["Lessons"] },
  { kana: "じゅういちがつ", kanji: "十一月", en: "November", note: "usually written 11月", also: ["11月", "１１月"], src: ["Lessons"] },
  { kana: "じゅうにがつ", kanji: "十二月", en: "December", note: "usually written 12月", also: ["12月", "１２月"], src: ["Lessons"] },

  // Days of the week
  { kana: "げつようび", kanji: "月曜日", en: "Monday", note: "月 = moon + ようび (day of the week)", src: ["Lessons"] },
  { kana: "かようび", kanji: "火曜日", en: "Tuesday", note: "火 = fire + ようび (day of the week)", src: ["Lessons"] },
  { kana: "すいようび", kanji: "水曜日", en: "Wednesday", note: "水 = water + ようび (day of the week)", src: ["Lessons"] },
  { kana: "もくようび", kanji: "木曜日", en: "Thursday", note: "木 = tree / wood + ようび (day of the week)", src: ["Lessons"] },
  { kana: "きんようび", kanji: "金曜日", en: "Friday", note: "金 = gold / metal + ようび (day of the week)", src: ["Lessons"] },
  { kana: "どようび", kanji: "土曜日", en: "Saturday", note: "土 = earth / soil + ようび (day of the week)", src: ["Lessons"] },
  { kana: "にちようび", kanji: "日曜日", en: "Sunday", note: "日 = sun + ようび (day of the week)", src: ["Lessons"] },

  // Home
  { kana: "へや", kanji: "部屋", en: "room", src: ["Lessons"] },
  { kana: "だいどころ", kanji: "台所", en: "kitchen", note: "the traditional word — also キッチン", src: ["Lessons"] },
  { kana: "キッチン", en: "kitchen (katakana)", note: "borrowed from English — common for modern kitchens; also だいどころ", src: ["Lessons"] },
  { kana: "おふろ", kanji: "お風呂", en: "bath", also: ["ふろ", "風呂", "御風呂"], src: ["Lessons"] },
  { kana: "まど", kanji: "窓", en: "window", src: ["Lessons"] },
  { kana: "ドア", en: "door (katakana)", note: "borrowed from English — a regular hinged door; also と", src: ["Lessons"] },
  { kana: "と", kanji: "戸", en: "door (sliding)", note: "a traditional sliding door; also ドア — not the particle と (and / with)", src: ["Lessons"] },

  // Podcast intro
  { kana: "いつも", en: "always", note: "usually written in hiragana", also: ["何時も"], src: ["Lessons"] },
  { kana: "おうえんする", kanji: "応援する", en: "to support / cheer on", note: "にほんごがくしゅうしゃのみなさんをいつもおうえんするポッドキャスト = the podcast that's always cheering on all of you Japanese learners", also: ["おうえんします", "応援します"], src: ["Lessons"] },

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
  { en: "Hana is American too.", parts: ["はな", "さん", "も", "アメリカじん", "です"] },
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
  { en: "Tanaka is Japanese.", parts: ["たなか", "さん", "は", "にほん", "じん", "です"] },
  { en: "Hana is a kind person too.", parts: ["はな", "さん", "も", "やさしい", "ひと", "です"] },

  // With は and か
  { en: "I'm a student.", parts: ["わたし", "は", "がくせい", "です"] },
  { en: "I'm American.", parts: ["わたし", "は", "アメリカじん", "です"] },
  { en: "My teacher is kind.", parts: ["わたし", "の", "せんせい", "は", "やさしい", "です"] },
  { en: "Tanaka is a teacher.", parts: ["たなか", "さん", "は", "せんせい", "です"] },
  { en: "Hana is an international student.", parts: ["はな", "さん", "は", "りゅうがくせい", "です"] },
  { en: "Naomi is kind.", parts: ["なおみ", "さん", "は", "やさしい", "です"] },
  { en: "Tanaka isn't a lawyer. (polite)", parts: ["たなか", "さん", "は", "べんごし", "じゃありません"] },
  { en: "Who is that person?", parts: ["あのひと", "は", "だれ", "です", "か"] },
  { en: "Who is that man over there?", parts: ["あの", "おとこのひと", "は", "だれ", "です", "か"] },
  { en: "Whose car is that?", parts: ["その", "くるま", "は", "だれ", "の", "です", "か"] },
  { en: "Who is the English teacher?", parts: ["えいご", "の", "せんせい", "は", "だれ", "です", "か"] },
  { en: "Is Hana a doctor?", parts: ["はな", "さん", "は", "いしゃ", "です", "か"] },
  { en: "Is Naomi Japanese?", parts: ["なおみ", "さん", "は", "にほん", "じん", "です", "か"] },
  { en: "Is that person an office worker?", parts: ["あのひと", "は", "かいしゃいん", "です", "か"] },
  { en: "Is this tea green tea?", parts: ["この", "おちゃ", "は", "りょくちゃ", "です", "か"] },
  { en: "Are you British?", parts: ["イギリス", "じん", "です", "か"] },
  { en: "I'm a university student.", parts: ["わたし", "は", "だいがくせい", "です"] },
  { en: "Naomi is a university student too.", parts: ["なおみ", "さん", "も", "だいがくせい", "です"] },
  { en: "Is Tanaka a university student?", parts: ["たなか", "さん", "は", "だいがくせい", "です", "か"] },
  { en: "It's a Japanese university.", parts: ["にほん", "の", "だいがく", "です"] },
  { en: "Are you a university student too?", parts: ["あなた", "も", "だいがくせい", "です", "か"] },
  { en: "It's my money.", parts: ["わたし", "の", "おかね", "です"] },
  { en: "Whose money is it?", parts: ["だれ", "の", "おかね", "です", "か"] },

  // He / she / we / they, and people
  { en: "He's a university student.", parts: ["かれ", "は", "だいがくせい", "です"] },
  { en: "She's a doctor.", parts: ["かのじょ", "は", "いしゃ", "です"] },
  { en: "Is she Japanese?", parts: ["かのじょ", "は", "にほん", "じん", "です", "か"] },
  { en: "We're friends.", parts: ["わたしたち", "は", "ともだち", "です"] },
  { en: "Hana is my friend.", parts: ["はな", "さん", "は", "わたし", "の", "ともだち", "です"] },
  { en: "They're international students.", parts: ["かれら", "は", "りゅうがくせい", "です"] },
  { en: "They're American. (women, たち)", parts: ["かのじょたち", "は", "アメリカじん", "です"] },
  { en: "They're university students. (women, ら)", parts: ["かのじょら", "は", "だいがくせい", "です"] },
  { en: "Are you all students?", parts: ["あなたたち", "は", "がくせい", "です", "か"] },
  { en: "That boy is Tanaka's child.", parts: ["あの", "おとこのこ", "は", "たなか", "さん", "の", "こども", "です"] },
  { en: "That girl is his friend.", parts: ["その", "おんなのこ", "は", "かれ", "の", "ともだち", "です"] },
  { en: "Is that child Naomi's?", parts: ["あの", "こども", "は", "なおみ", "さん", "の", "です", "か"] },
  { en: "He's not an adult. (casual)", parts: ["かれ", "は", "おとな", "じゃない"] },

  // With と
  { en: "Hana and Naomi are friends.", parts: ["はな", "さん", "と", "なおみ", "さん", "は", "ともだち", "です"] },
  { en: "Tanaka and I are friends.", parts: ["わたし", "と", "たなか", "さん", "は", "ともだち", "です"] },
  { en: "My sister and I are American.", parts: ["いもうと", "と", "わたし", "は", "アメリカじん", "です"] },
  { en: "Fish and vegetables are delicious.", parts: ["さかな", "と", "やさい", "は", "おいしい", "です"] },
  { en: "(They're) a Japanese and English teacher.", parts: ["にほんご", "と", "えいご", "の", "せんせい", "です"] },
  { en: "My dogs are a Shiba Inu and a Kai Ken.", parts: ["わたし", "の", "いぬ", "は", "しばいぬ", "と", "かいけん", "です"] },

  // Dogs
  { en: "It's my dog.", parts: ["わたし", "の", "いぬ", "です"] },
  { en: "It's a cool dog.", parts: ["かっこいい", "いぬ", "です"] },
  { en: "Whose dog is that?", parts: ["その", "いぬ", "は", "だれ", "の", "です", "か"] },
  { en: "My dog is a Shiba Inu.", parts: ["わたし", "の", "いぬ", "は", "しばいぬ", "です"] },
  { en: "My dog is a Kai Ken.", parts: ["わたし", "の", "いぬ", "は", "かいけん", "です"] },
];

// Pieces sentences use that aren't flashcards: です, は, か, さん, names, and her dogs' breeds.
// The mic may write names in kanji or katakana, so those spellings are accepted too.
window.EXTRAS = [
  { kana: "です" },
  { kana: "は" },
  { kana: "か" },
  { kana: "さん" },
  { kana: "たなか", kanji: "田中" },
  { kana: "はな", also: ["花", "ハナ"] },
  { kana: "なおみ", also: ["ナオミ", "直美"] },
  { kana: "しばいぬ", kanji: "柴犬", also: ["しばけん"] },
  { kana: "かいけん", kanji: "甲斐犬" },
];
