// app/data/itinerariesData.ts

export interface DayPlan {
  day: string;
  title: string;
  description: string[];
}

// app/pages/data/itenraydata.ts
export interface Itinerary {
  id: string | number;
  title: string;
  slug: string;
  lars?: string; // Add lars here
  duration: string;
  overview: string;
  route?: string;
  days?: Array<{
    day: string;
    title: string;
    description: string[];
  }>;
}

export const itinerariesData: Itinerary[] = [
  {
    id: 1,
    slug: "5-nights-6-days-essential-bhutan",
    title: "Thimphu, Paro and Punakha",
    duration: "05 Nights / 06 Days",
    route: "Thimphu – Punakha – Paro",
    overview:
      "The tiny Buddhist Kingdom of Bhutan awaits, nestled high in the Himalayas its isolation from the world has cultivated a culture rich in traditions, religion and a benevolent monarchy. The dramatic landscapes, from snowcapped peaks and deeply forested slopes to raging, boulder strewn rivers, sit largely undisturbed as the endeared environmental initiatives and religious beliefs leave the Kingdom pristine and a jewel of nature.",
    days: [
      {
        day: "Day 1",
        title: "Arrive Paro, Transfer to Thimphu Valley (1 hr drive / 60 kms)",
        description: [
          "On a day with clear skies, the flight to Paro presents breathtaking views of prominent Himalayan peaks such as Everest and Kanchenjunga. The route takes passengers over the southern hills, referred to as 'dwars' or gateways to the Himalayas, as they ascend from the plains and meet the majestic snow-capped peaks. The descent into the Paro valley navigates through a narrow passage nestled between mountains, providing glimpses of nearby villages and houses. The valley then expands to reveal a wider expanse with rice fields, villages, and an airstrip adjacent to a river. Notably, Paro airport stands as the sole airport globally where the elevation surpasses the length of the airstrip. Despite potential apprehensions about the flight and landing at Paro, passengers can rest assured as pilots receive specialized training for these maneuvers. Many have described the flight to Paro as an awe-inspiring experience.",
          "Upon arrival, visitors are required to proceed to immigration, presenting their Visa Approval Letter and Passport for official stamping. Upon clearing immigration, they will proceed to the baggage delivery area and meet their assigned guide at the airport exit, who will accompany them throughout their stay in Bhutan.",
          "Following this, travelers will be transferred to Thimphu. Formerly a rustic village nestled in a broad, fertile river valley, Thimphu has evolved into the bustling capital of the nation. Serving as the nexus of government, religion, and commerce, Thimphu harmoniously blends tradition and modernity.",
          "Upon reaching Thimphu, visitors will proceed with the check-in process at the designated hotel.",
          "The afternoon may be left free for personal leisure, or if time allows, a visit to the remarkable Trashicho Dzong/fortress can be arranged. This site encompasses the throne room of the King and various government offices and serves as the summer residence for the Chief Abbot and central monk body. If the visit coincides with a working weekday, visitors may witness the elaborate hoisting of the National Flag and the March of the Guards. (Open: Mon-Fri [Mar-Oct after 5:30pm] [Nov-Feb after 4:30 pm] / Open on Sat, Sun, Govt. Holidays). (Overnight at Hotel in Thimphu).",
        ],
      },
      {
        day: "Day 2",
        title: "Transfer to Punakha (3 hrs drive / 78 kms)",
        description: [
          "After morning repast, traverse the Dochu-la mountain pass (3,088m/10,130ft), characterized by a grand Bhutanese stupa, 108 small stupas, and prayer flags adorning the hilltop. Weather permitting, the site offers a magnificent vista of the lofty peaks of the eastern Himalayas.",
          "Subsequently, descend to the village of Lobeysa/Mitsina. Upon arrival, proceed to Chhimi Lhakhang, a temple accessible via a 30-40 minute gentle walk through a village and paddy fields. Positioned beneath the village of Metshina, the temple venerates Lama Drukpa Kuenley (the Divine Madman) and is renowned among women contending with conception difficulties.",
          "Punakha, nestled in a sub-tropical valley, experiences warm summers and pleasant winters. Historically, Punakha functioned as the capital of Bhutan until 1955 when governmental operations relocated to Thimphu.",
          "Later in the day, explore Punakha Dzong, constructed in 1637 by Zhabdrung Ngawang Namgyal as the religious and administrative hub of the region. Despite enduring damage from four major fires and an earthquake over the centuries, the Dzong has undergone comprehensive restoration in recent years under the current monarch. (Open 11am-1pm & 3pm-5 pm). (Overnight at Hotel in Punakha).",
        ],
      },
      {
        day: "Day 3",
        title: "Explore Punakha Valley",
        description: [
          "Sangchen Dorji Lhendrup Nunnery is located on a ridge offering breathtaking views of the Punakha and Wangdue valleys. Within the temple, there is a 14-foot bronze statue of Avalokiteshvara, one of the largest in the country, crafted by local artisans. The temple also includes facilities for advanced studies and a meditation center for nuns. In addition to religious education, the nuns are trained in practical skills such as embroidery, tailoring, and statue making.",
          "You can also explore the charming villages of Talo or Nobgang, the ancestral homes of the Queen Mothers of Bhutan. These villages are situated along a ridge above the Punakha valley, approximately 2,800 meters above sea level, and are known for their tidy appearance. The local women are particularly renowned for their beauty.",
          "If weather permits, you can enjoy a packed picnic lunch amidst the pine trees.",
          "You may visit Nalanda Monastery to meet monks engaged in advanced Buddhist studies and learning English. You can engage in discussions with the monks and assist them in practicing their English language skills if you wish. (Overnight at Hotel in Punakha).",
        ],
      },
      {
        day: "Day 4",
        title: "Transfer to Paro Valley (4 hrs drive / 130 kms)",
        description: [
          "This morning, proceed to Paro after traversing Dochula pass once again. Upon arrival, proceed with the hotel check-in. Following lunch, proceed northward within the valley to visit the National Museum. The museum's collection encompasses ancient Bhutanese art and artifacts, weaponry, coins, stamps, and a modest natural history assortment. (The museum is closed on government holidays).",
          "Kyichu Lhakhang: Constructed in the 7th century, this sacred lhakhang is one of the two oldest shrines in Bhutan, with the other being Jambey Lhakhang in Bumthang. Consisting of twin temples, the first temple was established by the Tibetan king, Songtsen Gampo, in the 7th century. In 1968, a second temple constructed in the same style was added alongside the first one under the patronage of H.M. Ashi Kesang, the Queen Mother of Bhutan.",
          "The remainder of the day is available for leisure or to explore the charming town. (Overnight at Hotel in Paro).",
        ],
      },
      {
        day: "Day 5",
        title: "Taktsang Hike (Total Hike Time 4-5 hrs)",
        description: [
          "In the morning, you can visit Taktsang Monastery, also known as Tiger's Nest. According to legend, Guru Rinpoche, the founding father of Bhutanese Mahayana Buddhism, arrived at this monastery on the back of a tigress and meditated here. The main structure suffered extensive damage in a fire in 1998, but after years of careful restoration work, the complex has been fully restored to its original grandeur.",
          "Balance of the day at leisure. (Overnight at Hotel in Paro).",
        ],
      },
      {
        day: "Day 6",
        title: "Depart Paro",
        description: [
          "Early morning drive to the airport for flight to onward destination.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "6-nights-7-days-classic-wonders",
    title: "Thimphu, Punakha and Paro",
    duration: "06 Nights / 07 Days",
    route: "Thimphu – Punakha – Paro",
    overview:
      "The tiny Buddhist Kingdom of Bhutan awaits, nestled high in the Himalayas its isolation from the world has cultivated a culture rich in traditions, religion and a benevolent monarchy. The dramatic landscapes, from snowcapped peaks and deeply forested slopes to raging, boulder strewn rivers, sit largely undisturbed as the endeared environmental initiatives and religious beliefs leave the Kingdom pristine and a jewel of nature.",
    days: [
      {
        day: "Day 1",
        title: "Arrive Paro, Transfer to Thimphu Valley (1 hr drive / 60 kms)",
        description: [
          "On a clear day, the flight to Paro is breathtaking, with views of major Himalayan peaks such as Everest, Kanchenjunga. You will fly over the southern hills, known as ‘dwars’, or gateways into the Himalayas as they rise from the plains until they meet the great snow-capped peaks that rise up to the sky. The decent into Paro valley takes you through a narrow valley between the mountains and past villages and houses that appear to be a little too close and makes you wonder if this is normal. Then the valley suddenly opens up to reveal a wider valley with rice fields, villages and the airstrip located along a river. Paro airport is the only airport in the world where the altitude exceeds the length of the airstrip. Although the flight and landing at Paro may sound unnerving, you are in good hands as the pilots are specially trained to fly and land here. Many have described the flight to Paro as breath taking.",
          "On arrival, proceed to immigration where you will present your Visa Approval Letter and Passport for the official stamp. As you clear the Immigration check, please make your way to the baggage delivery area and at the exit door of the airport you will meet your Guide who will accompany you throughout your stay in Bhutan.",
          "Transfer to Thimphu. Once a rustic village sitting in a broad, fertile river valley, Thimphu is today the nation’s bustling capital. It is the center of government, religion and commerce with an interesting combination of tradition and modernity. On arrival, check-in at the hotel.",
          "Afternoon free or time permitting, visit the impressive Trashicho Dzong/fortress which houses the throne room of the King and various government offices. It is also the summer residence of the Chief Abbot and the central monk body. If your visit falls on a working weekday, arrive in time to watch the hoisting of the National Flag and the March of the Guards. (Overnight at Hotel in Thimphu).",
        ],
      },
      {
        day: "Day 2",
        title: "Thimphu Valley Exploration",
        description: [
          "Buddha Dordenma statue sitting on top of a hill overlooking Thimphu. The Statue of Sakyamuni Buddha is one of the tallest in Asia (51.5 m). The site of Buddha Dordenma offers unobstructed views over the capital town.",
          "Memorial Chorten, the building of this landmark was originally envisaged by Bhutan’s third king, His Majesty Jigme Dorji Wangchuck, who had wanted to erect a monument to world peace and prosperity. Completed in 1974 after his untimely death, it is both a memorial to the Late King (“the father of modern Bhutan”), and a monument dedicated to peace. During the mornings and evenings, it a bustling place where people of all ages circumambulate the chorten/stupa, pray and prostrate at the shrine, turn the big prayer wheels, offer butter lamps, bask in the sun as they socialize and mingle.",
          "Zorig Chosum, (also known as the painting school) offers a six year course in the 13 traditional arts and crafts of Bhutan. The students follow a comprehensive course that starts with drawing and progresses through painting, woodcarving, embroidery and statue-making. This is a great opportunity to interact and photograph the students while they practice their skills in the classroom.",
          "Post Office, located in the heart of the town, is worth a visit. The first postage stamps were issued in 1962, the same time the first motorable road was opened. Ever since then Bhutan has been known for the unusual designs and materials of its stamps. At the post office, you can see the different stamps available in Bhutan. You can also make personalized stamps with your picture (extra charges) and send a post card to your family and friends with your face on the stamp.",
          "In the evening, take a stroll along the town’s main street. (Overnight at Hotel in Thimphu).",
        ],
      },
      {
        day: "Day 3",
        title: "Transfer to Punakha (3 hrs / 78 kms)",
        description: [
          "After breakfast, drive across Dochu-la mountain pass (3,088m/10,130ft). The highest point on the road is marked by a large Bhutanese stupa, 108 small stupas and prayer flags fluttering on the hill. On a clear day, there is a breathtaking view over the high peaks of the eastern Himalayas from this spot.",
          "From here, we descend down till we reach the village of Lobeysa/Mitsina. On arrival, visit Chhimi Lhakhang (temple), a 30-40 minute gradual walk through a village and paddy fields. Situated on a hillock below the village of Metshina, the temple is dedicated to Lama Drukpa Kuenley (also known as the Divine Madman). The temple is popular among women who have difficulties conceiving children.",
          "Lighting Butter lamps: From a religious point of view, lighting a butter lamp represents the dispelling of darkness of ignorance accumulated by all sentient beings. It is also another means of accumulating merits for the sake of the sentient beings. Additionally, it helps to focus the mind and aid meditation.",
          "Punakha is located in a sub-tropical valley with warm summers and pleasant winters. Punakha served as the capital of Bhutan until 1955, when the seat of government moved to Thimphu.",
          "Later, visit Punakha Dzong, the Dzong built in 1637 by Shabdrung Ngawang Namgyal to serve as the religious and administrative center of the region. Damaged over the centuries by four catastrophic fires and an earthquake, the Dzong has been fully restored in recent years by the present monarch. (Overnight at Hotel in Punakha).",
        ],
      },
      {
        day: "Day 4",
        title: "Explore Punakha Valley",
        description: [
          "Sangchen Dorji Lhendrup Nunnery, perched on a ridge with spectacular views of the Punakha and Wangdue valleys. The temple houses a 14 foot bronze statue of Avalokiteshvara, one of the biggest in the country. The statue was handcrafted exclusively by local artisans. The temple houses a complex for higher studies and meditation center for nuns. Apart from religious trainings, the nuns are also provided skills such as embroidery, tailoring and statue making.",
          "Serving tea to nuns in a temple during evening prayers (USD 150): Nuns or anims are less numerous than monks in Bhutan. There are about 21 nunneries in the country where young nuns learn the rituals and Buddhist texts. They dedicate their lives to religion and provide social services to the local communities. The nuns live within the premises of the temple in a close community (50-100 nuns) and like a family each one of them are assigned daily chores and responsibilities. The local people offer tea to them. (Overnight at Hotel in Punakha).",
        ],
      },
      {
        day: "Day 5",
        title: "Transfer to Paro Valley (4 hrs drive / 130 kms)",
        description: [
          "This morning, set off for Paro after once again crossing Dochula pass. On arrival, check-in at the hotel. After Lunch drive towards the north end of the valley to visit the National Museum. The museum collection includes ancient Bhutanese art and artifacts, weapons, coins, stamps and a small natural history collection.",
          "Kyichu Lhakhang: This lhakhang, built in the 7th century, is one of the two oldest and most sacred shrines in Bhutan (the other being Jambey Lhakhang in Bumthang). Kyichu Lhakhang is composed of twin temples. The first temple was built by the Tibetan king, Songtsen Gampo in the 7th century. In 1968, H.M. Ashi Kesang, the Queen Mother of Bhutan, arranged for a second temple to be built alongside the first one, in same style.",
        ],
      },
      {
        day: "Day 6",
        title: "Taktsang Hike & Rustic Hot Stone Bath",
        description: [
          "In the morning, take an excursion to Taktsang Monastery also known as Tiger’s Nest. It is believed that Guru Rinpoche, the founding father of the Bhutanese form of Mahayana Buddhism, arrived here on the back of a tigress and meditated at this monastery. The main structure was severely damaged by fire in 1998, but after many years of painstaking restoration work, the complex has now been fully restored to its former glory.",
          "Enjoy a rustic traditional hot stone bath at a farmhouse (chargeable): Relax the muscles from a hard day’s hike to the famous Tiger’s Nest monastery. River rocks are heated and then immersed in a wooden tub to heat the water known for mineral contents. An aromatic native herb, with soothing and healing properties, are added to the water. The facilities at the farmhouse are very basic and rustic, but the experience provides an authentic insight into the traditional hotstone bath practiced by the locals. For a more luxurious experience, hot stone baths at luxury hotels are also available.",
          "Rest of the day at leisure or explore the quaint town. (Overnight at Hotel in Paro).",
        ],
      },
      {
        day: "Day 7",
        title: "Depart Paro",
        description: [
          "Early morning drive to the airport for flight to onward destination.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "7-nights-8-days-cultural-discovery",
    title: "Thimphu, Punakha and Paro",
    duration: "07 Nights / 08 Days",
    route: "Thimphu – Punakha – Paro",
    overview:
      "The tiny Buddhist Kingdom of Bhutan awaits, nestled high in the Himalayas its isolation from the world has cultivated some culture rich in traditions, religion, and a benevolent monarchy. The dramatic landscapes, from snowcapped peaks and deeply forested slopes to raging boulder-strewn rivers, sit largely undisturbed as the endeared environmental initiatives and religious beliefs leave the Kingdom pristine and a jewel of nature.",
    days: [
      {
        day: "Day 1",
        title: "Transfer to Thimphu Valley (1 hr drive / 60 kms)",
        description: [
          "On a clear day, the flight to Paro is breathtaking, with views of major Himalayan peaks such as Everest, and Kanchenjunga You will fly over the southern hills, known as ‘duars’, or gateways into the Himalayas as they rise from the plains until they meet the great snow-capped peaks that rise to the sky. The descent into Paro Valley takes you through a narrow valley between the mountains and past villages and houses that appear to be a little too close and makes you wonder if this is normal. Then the valley suddenly opens to reveal a wider valley with rice fields, villages, and an airstrip along a river. Paro Airport is the only airport in the world where the altitude exceeds the length of the airstrip. Although the flight and landing at Paro may sound unnerving, you are in good hands as the pilots are specially trained to fly and land here. Many have described the flight to Paro as breathtaking.",
          "On arrival, proceed to immigration where you will present your Visa Approval Letter and Passport for the official stamp. As you clear the Immigration check, please make your way to the baggage delivery area and at the airport exit door you will meet your Guide who will accompany you throughout your stay in Bhutan.",
          "Transfer to Thimphu. Once a rustic village sitting in a broad, fertile river valley, Thimphu is today the nation’s bustling capital. It is the center of government, religion, and commerce with an interesting combination of tradition and modernity.",
          "Afternoon free or time permitting, visit the impressive Trashicho Dzong/fortress which houses the throne room of the King and various government offices. It is also the summer residence of the Chief Abbot and the central monk body. If your visit falls on a working weekday, arrive in time to watch the hoisting of the National Flag and the March of the Guards. (Closes Daily Nov-Feb at 4 pm & Mar-Oct at 5 pm).",
          "Later visit the handicraft market which sells Bhutanese locally made products. (Overnight at Hotel in Thimphu).",
        ],
      },
      {
        day: "Day 2",
        title: "Explore Thimphu Valley",
        description: [
          "Buddha Dordenma statue sitting on top of a hill overlooking Thimphu. The Statue of Sakyamuni Buddha is one of the tallest in Asia (51.5 m). The site of Buddha Dordenma offers unobstructed views over the capital town.",
          "Memorial Chorten, the building of this landmark was originally envisaged by Bhutan’s third king, His Majesty Jigme Dorji Wangchuck, who had wanted to erect a monument to world peace and prosperity. Completed in 1974 after his untimely death, it is both a memorial to the Late King (“the father of modern Bhutan”) and a monument dedicated to peace. During the mornings and evenings, it is a bustling place where people of all ages circumambulate the chorten/stupa, pray and prostrate at the shrine, turn the big prayer wheels, offer butter lamps, bask in the sun as they socialize and mingle. (Closes Daily Nov-Feb at 4 pm & Mar-Oct at 5 pm).",
          "Royal Takin Reserve Centre: Thimphu is also home to the kingdom’s national animal. Just around a 15 to 20-minute drive from the main city, in an area called Motithang, the Takin sanctuary is designated in 8.4 acres of forested land. The Takin is kept in an enclosed fenced zoo which is filled with fresh pasture plus extra attention from the caretakers.",
          "The Takin was declared as the national animal on 25th November 2005 as historically ascribed that the animal was created in the 15th century by Lama Drukpa Kinley popularly known as the divine Madman who was a religious preacher and a proficient tantric. It is believed that when he was asked to perform a miracle, he requested cow and goat meat for lunch. After the food, he used the leftover bones and joined the head of the goat on the skeleton of the cow, then with a snap of the finger he commanded the new animal ‘Takin’ to rise and graze on the mountainside. To the surprise of the spectators, the creature rose and ran up to the meadows to forage. The Takin is also locally known as Dong Gyem Tsey.",
          "In the evening, take a stroll along the town’s main street. (Overnight at Hotel in Thimphu).",
        ],
      },
      {
        day: "Day 3",
        title: "Transfer to Punakha Valley (75km / 3hrs)",
        description: [
          "Punakha is the administrative center of Punakha dzongkhag, one of the 20 districts of Bhutan. Punakha was the capital of Bhutan and the seat of government until 1955 when the capital was moved to Thimphu. It is about 72 km away from Thimphu, and it takes about 3 hours by car from the capital. Unlike Thimphu, it is quite warm in winter and hot in summer. It is located at an elevation of 1,200 meters above sea level, and rice is grown as the main crop along the river valleys of two main rivers of Bhutan, the Pho Chu and Mo Chu. Dzongkha is widely spoken in this district.",
          "On arrival, visit Chhimi Lhakhang (temple), a 30-40-minute gradual walk through a village and paddy fields. Situated on a hillock below the village of Metshina, the temple is dedicated to Lama Drukpa Kuenley (also known as the Divine Madman). The temple is popular among women who have difficulties conceiving children.",
          "Later, visit Punakha Dzong, the Dzong built in 1637 by Zhabdrung Ngawang Namgyal to serve as the religious and administrative center of the region. Damaged over the centuries by four catastrophic fires and an earthquake, the Dzong has been fully restored in recent years by the present monarch. (Overnight at Hotel in Punakha).",
        ],
      },
      {
        day: "Day 4",
        title: "Explore Punakha Valley",
        description: [
          "Khamsum Yulley Namgyal is located in the Punakha District of Bhutan, about 17 miles northeast (as the crow flies) of Thimphu, the largest city and capital of Bhutan. From the town of Punakha, it’s about a 20-minute drive and about a 30-minute hike along a trail that crosses a suspension bridge and then goes up the hill to the chorten. Khamsum Yulley Namgyal was built with a very specific intention in mind. Rather than being a place of communal worship, a monastic retreat, or a place of education, it was built to provide spiritual protection, peace, and harmony.",
          "Zomlingthang temple, a newly constructed temple is built in front of the Nepali-style stupa. The temple showcases a blend of traditional Bhutanese and contemporary painting, unlike other temples in Bhutan.",
          "Sangchen Dorji Lhendrup Nunnery is perched on a ridge with spectacular views of the Punakha and Wangdue valleys. The temple houses a 14-ft bronze statue of Avalokiteshvara, one of the biggest in the country. The statue was handcrafted exclusively by local artisans. The temple houses a complex for higher studies and a meditation center for nuns. Apart from religious training, the nuns are also provided skills such as embroidery, tailoring, and statue making.",
          "Explore the picturesque villages of Talo or Nobgang, the ancestral home of the Queen Mothers of Bhutan. The villages are scattered along a ridge above the Punakha valley at an altitude of around 2,800m and are known amongst Punakha villages for their neat and clean appearance. The women here are particularly known for their beauty. (Overnight at Hotel in Punakha).",
        ],
      },
      {
        day: "Day 5",
        title: "Transfer to Paro Valley (4 hrs drive)",
        description: [
          "This morning, set off for Paro after once again crossing Dochula Pass. On arrival, check in at the hotel. After Lunch drive towards the north end of the valley to visit the National Museum. The museum collection includes ancient Bhutanese art and artifacts, weapons, coins, stamps, and a small natural history collection. National Museum- Perched above Paro Dzong is its ta dzong (watchtower), built in 1649 to protect the undefended dzong and renovated in 1968 to house the National Museum. The unusual round building is said to be in the shape of a conch shell, with 2.5m-thick walls. The Ta Dzong suffered damage in the 2011 earthquake but reopened in 2019 as the nation's premier museum. (Closed on Govt. Holidays & Sun).",
          "Kyichu Lhakhang: This Lhakhang, built in the 7th century, is one of the two oldest and most sacred shrines in Bhutan (the other being Jambey Lhakhang in Bumthang). Kyichu Lhakhang is composed of twin temples. The first temple was built by the Tibetan king, Songtsen Gampo in the 7th century. In 1968, H.M. Ashi Kesang, the Queen Mother of Bhutan, arranged for a second temple to be built alongside the first one, in the same style.",
        ],
      },
      {
        day: "Day 6",
        title: "Taktsang Hike (Total Hike Time 4-5 hrs)",
        description: [
          "After breakfast, your guide will meet you and take you to Ramthangkha, where you'll start your hike to Taktsang Monastery, also known as Tiger’s Nest. This monastery is located over 3,000 meters above sea level and is one of the most important Buddhist sites globally. According to legend, in the 8th century, Guru Rinpoche, the founder of Buddhism in Bhutan, flew from the east of the kingdom on the back of a tigress and meditated here for three years, three months, three weeks, and three days.",
          "Unfortunately, the only way to access Taktsang is on foot. You'll need to follow the steep trail through the pine forest and after about an hour, depending on your fitness levels, you’ll reach the halfway point, which is marked by a small café and offers clear views of Taktsang so far.",
          "After a break for tea and a snack, continue following the steep uphill trail. Upon reaching a ridge opposite the monastery (where a photo stop is obligatory), you will descend a steep flight of stone steps before climbing uphill again to the entrance of Taktsang. This section of the trek will take around 1.5 hours. Once inside the monastery complex, you can visit small temples, meditation caves, and ornate shrines. The air is filled with the smell of incense, and you're likely to hear monastic chanting.",
          "You would have purchased prayer flags at a local shop in Paro. Now, you have the option to hang these prayer flags. The process of hanging the prayer flags can also be considered a meditative act where one concentrates on the different senses - sight (seeing the prayer flags), sound (fluttering in the wind), thought (prayers), and touch (the act of hanging the prayer flags). It’s easy to spend an hour exploring, after which you can return to the halfway café to take photos of the Tiger’s Nest Monastery. Spend the rest of the day exploring the quaint Paro town. (Overnight at Hotel in Paro).",
        ],
      },
      {
        day: "Day 7 & 8",
        title: "Depart Paro",
        description: [
          "Drive to Paro airport to leave this beautiful Himalayan country and take a flight back to your homeland. We hope you have taken lots of everlasting photos and memories with new friends. We look forward to seeing you back in this enchanting Himalayan realm.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "10-nights-11-days-bhutan-intensive",
    title: "Bhutan Intensive (10 Nights)",
    duration: "10 Nights / 11 Days",
    route: "Thimphu – Gangtey – Bumthang – Punakha – Paro",
    overview:
      "Explore the picturesque and peaceful Phobjikha valley. Travel to Bumthang, one of the most spectacular valleys in Bhutan and the heartland of Buddhism. Explore the remote Tang Valley and try some local beer at the Red Panda Brewery in Bumthang. A traditional Bhutanese meal at a traditional Bhutanse farm house in Paro. Hike to the famous Tiger’s Nest Monastery located on a sheer cliff 900 m above the valley",
    days: [
      {
        day: "Day 1",
        title: "Arrive to Paro, Transfer to Thimphu & Explore (1hr / 54kms)",
        description: [
          "Your journey begins with the most spectacular of all mountain flights. You will fly over the southern hills, known as ‘dwars’, or gateways into the Himalayas as they rise from the plains until they meet the great snow-capped peaks of the inner Himalayas that rise up to the sky. On arrival at Paro airport and after completion of airport formalities, you will be met by your representative (Guide). Drive from Paro to Thimphu, the modern capital town of Bhutan.",
          "Rest of the day at leisure or take a stroll through this lively town that reveals an interesting combination of tradition and modernity. (Overnight at Hotel in Thimphu).",
        ],
      },
      {
        day: "Day 2",
        title: "Thimphu Valley Exploration",
        description: [
          "Thimphu, perhaps the most unusual capital city in the world, is the seat of government. This bustling town is home to Bhutan’s royal family, the civil service, and foreign missions with representation in Bhutan. It is also the headquarters for a number of internationally funded development projects.",
          "Buddha Dordenma statue sitting on top of a hill overlooking Thimphu. The Statue of Sakyamuni Buddha is one of the tallest in Asia (51.5 m). The site offers unobstructed views over the capital town and the Thimphu valley below. (Closes Daily Nov-Feb at 4pm & Mar-Oct at 5pm).",
          "National Memorial Chorten: the building of this landmark was originally envisaged by Bhutan’s third king, His Majesty Jigme Dorji Wangchuck, who had wanted to erect a monument to world peace and prosperity. Completed in 1974 after his untimely death, it is both a memorial to the Late King (“the father of modern Bhutan”), and a monument to peace. (Closes Daily Nov-Feb at 4pm & Mar-Oct at 5pm).",
          "Institute for Zorig Chusum: Commonly known as the Painting School, the Institute offers a six-year course on the 13 traditional arts and crafts of Bhutan. On a visit one can see students learning the various skills taught at the school. (Closed on Sat 1pm, Sun, Govt. Holidays, School Break Jul, Jan-Feb).",
          "National Library, which holds a vast collection of Buddhist texts and manuscripts, some dating back several hundred years, as well as modern academic books mainly on Himalayan culture and religion. (Closed on Sat / Sun / Govt. Holidays).",
          "Handicrafts Emporium: This government-run enterprise displays a wide range of beautifully hand-woven textiles and craft products. It also carries a small collection of books on Bhutan, Buddhism and Himalayan culture. (Closed on Sun / Govt. Holidays).",
          "Traditional Handmade Paper Factory: witness the process of paper making from start to finish. The paper is made from the bark of the black Daphne tree. The traditional use of the paper for scriptures is still practiced, and the paper is now also used for modern purposes from gift wrapping, to lamp shades, cards, and so on.",
          "In the evening, take a stroll along the town’s main street. (Overnight at Hotel in Thimphu).",
        ],
      },
      {
        day: "Day 3",
        title: "Transfer to Gangtey Valley (4hrs / 130kms)",
        description: [
          "After an early breakfast, set off for Phobjikha; driving up to Dochu-la pass (3,088m/10,130ft) stopping briefly here to take in the view and admire the chortens, Mani walls, and prayer flags which decorate the highest point on the road. If skies are clear, the high Himalayan peaks towards the northeast will be revealed in all their glory. If the day is very clear, the following peaks can be seen from this pass (left to right): Masagang (7,158m), Tsendegang (6,960m), Terigang (7,060m), Jejegangphugang (7,158m), Kangphugang (7,170m), Zongaphugang (7,060m) a table mountain that dominates the isolated region of Lunana, and finally, Gangkar Puensum, the highest peak in Bhutan at 7,497m.",
          "Then continue onwards, reaching Wangduephodrang town in time for lunch. From here, it is a long, winding descent into the Wangduephodrang valley, which is about 1,700m below the pass. Continuing on the highway, we follow the scenic Dang Chhu before climbing thru forests of bamboo and oak, and just before crossing the Pele La pass, enroute Radak Shang Temple and finally you will find the hidden Phobjikha Valley. There will be occasional breaks along the journey to stretch your legs and take pictures and toilet stops.",
          "Gangtey is considered one of the most beautiful glacial valleys in Bhutan (3000m/9800ft). The area is best known as the home of the rare Black-necked Cranes that migrate to Bhutan from Tibet in Nov and leave by March, and thus is a protected area for wildlife.",
          "On arrival visit to the Black Neck Crane Center and dependent on the season, time spent in the Center’s nearby hide is a must to view the breeding cranes. (Overnight at Hotel in Gangtey).",
        ],
      },
      {
        day: "Day 4",
        title: "Gangtey Valley",
        description: [
          "This morning, visit Gangtey Gompa (Monastery), the only Nyingmapa monastery in western Bhutan.",
          "Then we proceed on an easy hike on the Gangtey Natural Trail (1.5-2 hrs). This hike is considered as the most beautiful and shortest of the existing nature trails in Bhutan. The trail hike starts from the mani (like Chhorten) stone wall to the north of the Ganagtey Gonpa and ends in Khewa Lhakhang. The hike takes about 1hr 30minutes through the pine forest and small bamboo plants. You can see the Phobjkha valley so beautifully from this hike. It is one of the best hike places for the Nature lovers. During the winter months (Nov-Mar), this hike offers an up-close spot to see the endangered Black Neck Cranes.",
          "Various other walks or village visits can be arranged in this magnificent valley. (Overnight at Hotel in Gangtey).",
        ],
      },
      {
        day: "Day 5",
        title: "Transfer to Bumthang (5hrs / 155km)",
        description: [
          "The drive takes you across the Black Mountain Range that divides western and central Bhutan. You will drive up winding mountain roads through oak and rhododendron forest and across the Pele-la pass (3,300m), the traditional boundary between east and west. The pass is marked by a large white chorten and prayer flags. There is an abrupt change in vegetation at this point, with mountain forest replaced by high altitude dwarf bamboo.",
          "Stop en route at Chendebji Chorten, patterned on Kathmandu’s Swayambhunath Stupa, with eyes painted at the four cardinal points. It was built in the 18th century by Lama Shida from Tibet, to cover the remains of an evil spirit that was subdued at this spot.",
          "The impressive Trongsa dzong (fortress) stretched along a ridge above a ravine first comes into view about an hour before the winding road suddenly leads you into the town. From here it is about a 3 hour drive to Bumthang over the picturesque Yotong-la Pass (3,400m). The road winds steeply up to the pass, then runs down through coniferous forest into a wide, open, cultivated valley known as the Chumey valley and down into the Chhume Valley, home of Bhutan’s famous Yatra weaving. Here you will have a chance to browse the traditional textiles and perhaps see the weavers create their intricate handiwork. There will be occasional breaks along the journey to stretch your legs and take pictures. Rest of the day at leisure. (Overnight at Hotel in Bumthang).",
        ],
      },
      {
        day: "Day 6",
        title: "Bumthang",
        description: [
          "Bumthang is the general name given to a group of four valleys – Chumey, Choekhor, Tang and Ura, with altitudes varying from 2,600 to 4,000m (8,530-13,125ft). This area is home to many ancient Buddhist temples and monasteries.",
          "Today you will explore the stunningly beautiful Tang Valley. The initial drive along the national highway takes you past beautiful meadows and pastures where you can spot sheep grazing. We then leave the highway and continue on a farm road up towards Tang valley. Although the farm road can be rough at times but this seldom visited valley offers a treat in revealing some off the beaten track monasteries and quaint villages. A short hike takes you up to Ogyencholing Manor, an ancient noble family home that has now been turned into a museum. A visit to this museum gives you a glimpse of the bygone way of life of the aristocrats.",
          "On the way back, just below the main road junction visit Mebartsho (Burning lake), where the Terton Pema Lingpa, the reincarnation of Padmasambhava, is supposed to have discovered religious treasure in the 12th century. This lake is very sacred and is visited by many Bhutanese during auspicious days to offer butter lamps. The important of the site is indicated by the extensive array of prayer flags and is considered as one of the most holy places for Buddhist pilgrimage.",
          "End the day with a visit to the Red Panda Beer Brewery and the Cheese Factory. (Overnight at Hotel in Bumthang).",
        ],
      },
      {
        day: "Day 7",
        title: "Transfer to Punakha (5-6hrs / 215kms)",
        description: [
          "We will then drive on through the mountains and down to Punakha back tracking on the same highway travelled earlier. Enroute in Trongsa, visit Royal Heritage Museum on the hillside above the town, built as a watchtower to guard Trongsa. You will enjoy the trip as you work your way around this quaint watchtower and discover the history of the Monarchs through the numerous artifacts displayed here. (Closed Sat, Sun, Govt. Holidays).",
          "Continue to Punakha, a low-lying subtropical valley. Punakha served as the capital of Bhutan until 1955, and is still the winter residence of the Je Khenpo (Chief Abbot) and central monk body.",
          "There will be occasional breaks along the journey to stretch your legs and take pictures. On arrival, to stretch your legs from the long journey, we will take a walk to Chimi Lhakhang, a temple dedicated to the 'Divine Madman', an eccentric monk from the 16th century famous for many his many amusing, Rabelaisian folklore stories. Check-in at the hotel. (Overnight at Hotel in Punakha).",
        ],
      },
      {
        day: "Day 8",
        title: "Punakha",
        description: [
          "After breakfast, visit Punakha Dzong, built in 1637 by Shabdrung Ngawang Namgyal, has played prominent role in civil and religious life of the kingdom. Damaged by fire, flood and earthquake over the centuries, it has now been fully restored in its original splendor. (Open 11am-1pm & 3pm-5 pm).",
          "Explore the picturesque villages of Talo or Nobgang, the ancestral home of the Queen Mothers of Bhutan. The villages are scattered along a ridge above the Punakha valley at an altitude of around 2,800m and is known amongst Punakha villages for its neat and clean appearance. The women here are particularly known for their beauty.",
          "Nalanda Monastery to visit the monks who are pursuing higher Buddhist studies and learning English as well. You may interact with the monks and chat with them. They will be more than happy to practice their English language skills with you.",
          "Rest of the day at leisure. (Overnight at Hotel in Punakha).",
        ],
      },
      {
        day: "Day 9",
        title: "Transfer to Paro (4 hrs / 130kms)",
        description: [
          "After breakfast proceed to Paro once again crossing over Dochu la Pass.",
          "Continue to Paro. This beautiful valley encapsulates a rich culture, scenic beauty and hundreds of myths and legends. It is home to many of Bhutan’s oldest temples and monasteries and the country’s only airport. Mt. Jhomolhari (7,300m) reigns in white glory at the northern end of the valley, its glacial waters plunging through deep gorges to form the Pa Chu (Paro River). The Paro valley is one of the kingdom’s most fertile, producing the bulk of Bhutan’s famous red rice from its terraced fields.",
          "In Paro, visit Kichu Lhakhang one of the oldest temples in the country. The temple is one of the 108 temples built in the Himalayas by the Tibetan king, Songtsen Gampo to subdue a demoness in the 7th century. The building of this temple marks the introduction of Buddhism in Bhutan.",
          "Then proceed to visit the National Museum. The museum collection includes ancient Bhutanese art and artifacts, weapons, coins, stamps and a small natural history collection. (Closed on Govt. Holidays).",
          "End the day with a visit to a Farmhouse to share a cup of traditional butter tea with the family. (Overnight at Hotel in Paro).",
        ],
      },
      {
        day: "Day 10",
        title: "Taktsang Hike (Total Hike Time 4-5 hrs)",
        description: [
          "“Tiger’s Nest” monastery, most famous of Bhutan’s monasteries, is spectacularly located on the side of a cliff 900m above the valley floor. It is said that in the 8th century Guru Rinpoche flew on the back of a tigress from eastern Bhutan to this place and meditated in a cave here for 3 months, hence its name, “Tiger’s Nest”. The principal temple of the present monastic complex dates from 1692. The main structure was severely damaged by fire in 1998, but after many years of painstaking restoration work, the complex has now been fully restored to its former glory. A pilgrimage to Taktsang is the dream of a lifetime for the devout. (Overnight at Hotel in Paro).",
        ],
      },
      {
        day: "Day 11",
        title: "Departure Day",
        description: [
          "Early breakfast in the hotel, then drive to the airport for flight to onward destination.",
        ],
      },
    ],
  },
];