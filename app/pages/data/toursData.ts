// app/data/toursData.ts

export interface Tour {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  fullContent: string; // HTML string
}

export const toursData: Tour[] = [
  {
    id: 1,
    slug: "cultural-bhutan-tour",
    title: "Cultural Bhutan Tour",
    shortDescription:
      "Discover Bhutan's Living Culture, Traditions & Heritage",
    image: "/Culture-Bhutan-Tour.jpg",
    fullContent: `
      <img src="/Culture-Bhutan-Tour.jpg" class="w-full h-[30vh] lg:h-[70vh] rounded-2xl"/>
      <p>Experience the heart of Bhutan through its ancient monasteries, magnificent dzongs, traditional villages, colorful festivals, and unique way of life. Our <strong>Cultural Bhutan Tour</strong> is designed for travelers who want to explore Bhutan beyond its landscapes and discover the traditions, spirituality, history, and warm hospitality that make the country truly unique.</p>
      <br/>
      <h3 class="font-bold">What Bhutan Happiness Tours and Treks Provides:</h3>
      <br/>

      <p>At <strong>Bhutan Happiness Tours and Treks</strong>, we provide a personalized and authentic cultural experience, including:</p>
      <ul class="list-disc pl-6 space-y-3 text-gray-700 mt-4">
        <li>Visits to historic <strong>dzongs, monasteries, temples, and heritage sites</strong></li>
        <li>Opportunities to experience Bhutanese <strong>Buddhist culture and spirituality</strong></li>
        <li>Cultural experiences featuring <strong>traditional dances, arts, crafts, and local customs</strong></li>
        <li>Visits to traditional villages and interactions with <strong>local communities</strong></li>
        <li>Authentic <strong>Bhutanese cuisine and traditional dining experiences</strong></li>
        <li>Opportunities to learn about <strong>traditional Bhutanese dress and lifestyle</strong></li>
        <li>Experiences of Bhutanese <strong>festivals and cultural celebrations</strong>, depending on the travel season</li>
        <li>Professional <strong>English-speaking local guides</strong> who explain Bhutan's history, culture, and traditions</li>
        <li>Comfortable transportation, carefully selected accommodations, and well-planned sightseeing</li>
        <li><strong>Customized itineraries</strong> based on your interests, travel dates, and preferred pace</li>
      </ul>
    `,
  },
  {
    id: 2,
    slug: "bhutan-trekking-tour",
    title: "Bhutan Trekking Tour",
    shortDescription:
      "Discover the untouched beauty of the Himalayas with a Bhutan Trekking Tour",
    image: "/Trekking-Tour.jpg",
    fullContent: `
      <img src="/Trekking-Tour.jpg" class="w-full h-[30vh] lg:h-[70vh] rounded-2xl"/>
      <p class="mt-3">Discover the untouched beauty of the Himalayas with a <strong>Bhutan Trekking Tour</strong> by <strong>Bhutan Happiness Tours and Treks</strong>. Trek through peaceful mountain trails, lush forests, remote villages, high-altitude valleys, and breathtaking Himalayan landscapes while experiencing Bhutan's unique culture and traditional way of life.</p>
      <br/>
      <p>At <strong>Bhutan Happiness Tours and Treks</strong>, we provide carefully designed trekking experiences for both adventure seekers and travelers looking for a peaceful escape into nature. Our trekking packages can include <strong>professional local guides, trekking permits, transportation, accommodation, meals, camping equipment, porter services, route planning, and cultural experiences</strong>, depending on the trekking package.</p>
      <br/>
      <h3 class="font-bold text-2xl mt-3 mb-3">Trekking Available in Bhutan</h3>
      <ul class="list-disc pl-6 space-y-3 text-gray-700 mt-4">
        <li><strong>Druk Path Trek</strong> – A popular short trek through forests, mountain passes, and beautiful Himalayan scenery between Paro and Thimphu.</li>
        <li><strong>Jomolhari Trek</strong> – An adventurous high-altitude trek offering spectacular views of Mount Jomolhari and surrounding peaks.</li>
        <li><strong>Jomolhari Loop Trek</strong> – A longer and more challenging route through remote valleys and high mountain passes.</li>
        <li><strong>Snowman Trek</strong> – One of Bhutan's most challenging and spectacular treks, crossing remote high-altitude terrain.</li>
        <li><strong>Dagala Thousand Lakes Trek</strong> – Famous for alpine lakes, mountain views, and peaceful highland landscapes.</li>
        <li><strong>Bumdra Trek</strong> – A scenic trek near Paro featuring beautiful forests, mountain views, and a memorable high-altitude camping experience.</li>
        <li><strong>Gangtey Nature Trek</strong> – A gentle trek through forests, traditional villages, and the beautiful Phobjikha Valley.</li>
        <li><strong>Merak–Sakteng Trek</strong> – An off-the-beaten-path adventure offering a unique opportunity to experience the culture and landscapes of eastern Bhutan.</li>
        <li><strong>Nabji Korphu Trek</strong> – A relatively easy cultural and nature trek through villages, forests, and traditional Bhutanese landscapes.</li>
      </ul>
      <br/>
      <h3 class="text-2xl font-bold">What We Provide</h3>
      <p><strong>Bhutan Happiness Tours and Treks</strong> can arrange:</p>
      <ul class="list-disc pl-6 space-y-3 text-gray-700 mt-4">
        <li>Experienced local trekking guides</li>
        <li>Trekking permits and necessary arrangements</li>
        <li>Comfortable accommodation and camping</li>
        <li>Meals and drinking-water arrangements</li>
        <li>Transportation to and from trekking points</li>
        <li>Porters and trekking support where required</li>
        <li>Camping equipment for selected treks</li>
        <li>Customized trekking itineraries</li>
        <li>Cultural and village experiences</li>
        <li>Safety support throughout the journey</li>
      </ul>
      <br/>
      <p>Whether you are looking for a <strong>short scenic trek or a challenging Himalayan adventure</strong>, we help you explore Bhutan safely, comfortably, and authentically.</p>
      <br/>
      <p class="text-center text-orange-400"><strong>Trek Bhutan. Discover the Himalayas. Experience Happiness.</strong></p>
    `,
  },
  {
    id: 3,
    slug: "bhutan-festival-tour",
    title: "Bhutan Festival Tour",
    shortDescription:
      "Experience the vibrant spirit of Bhutan through its traditional festivals",
    image: "/Festival-Tour.jpg",
    fullContent: `
      <img src="/Festival-Tour.jpg" class="w-full h-[30vh] lg:h-[70vh] rounded-2xl"/>
      <p class="mt-3">Experience the vibrant spirit of Bhutan through its traditional festivals, known as <strong>Tshechus</strong>. Bhutan Festival Tours offer travelers a unique opportunity to witness colorful mask dances, traditional music, sacred rituals, and centuries-old Bhutanese culture. Festivals are celebrated throughout the year in different regions, including <strong>Thimphu, Paro, Punakha, Wangdue, Gangtey, and Bumthang</strong>.</p>
       <br/>
      <p>A festival tour allows visitors to experience Bhutan beyond its landscapes and monasteries—bringing them closer to the country's living traditions, spirituality, local communities, and warm Bhutanese hospitality.</p>
      <br/>
      <h3 class="text-blue-500">What Bhutan Happiness Tours and Treks Provides</h3>
       <br/>
      <p><strong>Bhutan Happiness Tours and Treks</strong> can provide a complete and comfortable festival experience, including:</p>
      <ul class="list-disc pl-6 space-y-3 text-gray-700 mt-4">
        <li><strong>Customized Festival Itineraries</strong> – Tours designed around the dates and locations of major Tshechus.</li>
        <li><strong>Festival & Cultural Experiences</strong> – Opportunities to witness mask dances, folk performances, rituals, and local traditions.</li>
        <li><strong>Experienced Local Guides</strong> – Knowledgeable guides to explain the history, meaning, and cultural significance of the festivals.</li>
        <li><strong>Accommodation & Meals</strong> – Comfortable stays and authentic Bhutanese dining throughout the journey.</li>
        <li><strong>Transportation</strong> – Reliable private transportation throughout the tour.</li>
        <li><strong>Monastery & Heritage Visits</strong> – Visits to important dzongs, monasteries, temples, and cultural landmarks alongside the festival.</li>
        <li><strong>Trekking & Nature Experiences</strong> – Festival tours can be combined with short hikes, nature walks, or trekking experiences.</li>
        <li><strong>Local Community Experiences</strong> – Opportunities to interact with local people and experience Bhutanese customs and daily life.</li>
        <li><strong>Complete Travel Assistance</strong> – Assistance with trip planning, permits, accommodation, transportation, and other travel arrangements.</li>
      </ul>
      <br/>
      <h3 class="font-bold">Celebrate Bhutan, Experience Happiness</h3>
      <br/>
      <p>With <strong>Bhutan Happiness Tours and Treks</strong>, your festival journey is more than just watching a celebration—it is an opportunity to <strong>experience Bhutanese culture, spirituality, tradition, and happiness firsthand</strong>.</p>
    `,
  },
  {
    id: 4,
    slug: "adventure-tour-bhutan",
    title: "Adventure Tour in Bhutan",
    shortDescription: "Experience the Thrill of Bhutan",
    image: "/Culture-Bhutan-Tour.jpg", // replace with an adventure-specific image
    fullContent: `
      <img src="/Culture-Bhutan-Tour.jpg" class="w-full h-[30vh] lg:h-[70vh] rounded-2xl"/>
      <br/>
      <p>Bhutan is a perfect destination for adventure seekers, offering breathtaking mountains, pristine forests, challenging trails, rushing rivers, and unique cultural experiences. An <strong>Adventure Tour in Bhutan</strong> combines excitement, nature, exploration, and authentic Bhutanese experiences in one unforgettable journey.</p>
      <br/>
      <h3 class="font-bold">Adventure Experiences with Bhutan Happiness Tours and Treks</h3>
      <br/>
      <p><strong>Bhutan Happiness Tours and Treks</strong> can provide customized adventure experiences based on travelers' interests, fitness levels, and available time. Our services may include:</p>
      <br/>
      <ul class="list-disc pl-6 space-y-3 text-gray-700 mt-4">
        <li><strong>Trekking:</strong> Explore scenic Himalayan trails, including short hikes and challenging multi-day treks.</li>
        <li><strong>Hiking & Nature Walks:</strong> Discover beautiful forests, valleys, monasteries, and viewpoints.</li>
        <li><strong>Camping:</strong> Enjoy overnight camping surrounded by Bhutan's peaceful landscapes.</li>
        <li><strong>Mountain & Scenic Adventures:</strong> Experience spectacular Himalayan views and high-altitude landscapes.</li>
        <li><strong>Rafting:</strong> Enjoy thrilling river adventures on Bhutan's beautiful rivers, where conditions and locations permit.</li>
        <li><strong>Cycling:</strong> Explore Bhutan's valleys, villages, winding mountain roads, and scenic countryside by bicycle.</li>
        <li><strong>Rock Climbing & Outdoor Activities:</strong> Experience selected adventure activities with appropriate local arrangements and safety measures.</li>
        <li><strong>Cultural Exploration:</strong> Combine adventure with visits to dzongs, monasteries, traditional villages, festivals, and local communities.</li>
        <li><strong>Customized Adventure Packages:</strong> We can design flexible itineraries according to your preferred activities, duration, budget, and level of adventure.</li>
      </ul>
      <br/>
      <h3 class="font-bold">Your Adventure, Our Happiness</h3>
      <br/>
      <p>With <strong>Bhutan Happiness Tours and Treks</strong>, travelers can experience Bhutan beyond the usual sightseeing tours—combining <strong>adventure, nature, culture, and Bhutanese hospitality</strong> for a truly memorable journey.</p>
    `,
  },
];