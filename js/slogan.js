const slogans = [
    'Makka Pakka Washes Faces',
    'The Tombliboos\'s Waving Game',
    'Everybody All Aboard the Ninky Nonk',
    'The Prettiest Flower',
    'Makka Pakka\'s Trumpet Makes a Funny Noise',
    'The Pontipines in Upsy Daisy\'s Bed',
    'Who\'s Next on the Pinky Ponk?',
    'Igglepiggle\'s Blanket in Makka Pakka\'s Ditch',
    'The Ninky Nonk Wants a Kiss',
    'Too Loud Tombliboos! Nice and Quiet!',
    'Makka Pakka Gets Lost',
    'Jumping for Everybody',
    'Hiding in Flowerpots',
    'Pinky Ponk Adventure',
    'Tombliboos\' Tower of Five',
    'Igglepiggle\'s Mucky Patch	 ',
    'Funny Noise Coming from the Pinky Ponk',
    'Quiet Please Tombliboos! Upsy Daisy Wants to Sing!',
    'Tombliboos Clean Their Teeth',
    'IgglePiggle\'s Blanket Walks About by Itself',
    'Pontipine Children in the Tombliboos Trousers',
    'Upsy Daisy\'s Big Loud Sing Song',
    'Playing Hiding with Makka Pakka',
    'The Ball',
    'Where is the Pinky Ponk Going?',
    'Igglepiggle Looks for Upsy Daisy and Follows Her Bed',
    'Wave to the Wottingers',
    'Runaway Og-Pog',
    'Upsy Daisy	 Igglepiggle	 the Bed & the Ball',
    'Tombliboo Ooo Drinks Everybody Else\'s Pinky Ponk Juice',
    'Looking for Each Other',
    'High and Low',
    'The Tombliboos\' Busy Day',
    'The Pontipines on the Ninky Nonk',
    'The Pontipines Find Igglepiggle\'s Blanket	Igglepiggle\'s Accident',
    'Upsy Daisy Kisses Everything',
    'Following',
    'Look What the Ball Did!',
    'The Tombliboos Build an Arch',
    'Makka Pakka\'s Stone Concert',
    'Hurry Up Tombliboos!',
    'Wake Up IgglePiggle!',
    'Washing the Haahoos',
    'Where\'s Upsy Daisy Gone?',
    'Over and Under',	'Upsy Daisy\'s Tiring Walk',
    'Makka Pakka\'s Present',
    'Igglepiggle Goes Visiting',
    'Tombliboo Trousers',
    'Where\'s Your Uff-Uff, Makka Pakka?	 ',
    'Dinner in the Ninky Nonk',
    'Igglepiggle\'s Tiddle',
    'Tombliboo Eee Gets Lost',
    'Shshsh! Upsy Daisy\'s Having a Rest!',
    'Slow Down Everybody',
    'Be Careful Tombliboos!',
    'Igglepiggle\'s Noisy Noises',
    'The Pontipine Children on the Roof',
    'Upsy Daisy Dances with the Pinky Ponk',
    'The Tombliboos Swap Trousers',
    'Kicking the Ball',
    'Where Are the Tombliboos\' Toothbrushes?',
    'The Pontipines\' Picnic',
    'Upsy Daisy\'s Funny Bed',
    'Upsy Daisy\'s Special Stone',
    'Makka Pakka\'s Piles of Three',
    'Running About',
    'Trousers on the Ninky Nonk',
    'Where Are the Wottingers?',
    'Windy Day in the Garden',
    'Tombliboo Ooo Brings the Ball Indoors',
    'What a Funny Ninky Nonk',
    'Mr Pontipine\'s Moustache Flies Away',
    'Make Up Your Mind Upsy Daisy',
    'Catch the Ninky Nonk',
    'Tombliboos\'	 Hide-and-Seek',
    'What Loud Music?',
    'Tombliboos!',
    'Where Can Igglepiggle Have a Rest?',
    'Waving from the Ninky Nonk',
    'Where Did Makka Pakka\'s Sponge Go?',
    'Ninky Nonk Dinner Swap',
    'Trubliphone Fun',
    'Makka Pakka\'s Circle of Friends',
  'Long and Ponky Ride on the Pinky Ponk',
    'Sad and Happy Tombliboos',
    'Upsy Daisy Dances with the Pontipines',
    'Mind the Haahoos',
    'Wake Up Ball',
    'Upsy Daisy Forgets Her Stone',
    'Long-Distance Ball Game',
    'The Wottingers\' Hiding Game',
    'Upsy Daisy Only Wants to Sing',
    'The Tombliboo\'s Busy Ninky Nonk Day',
    'Pinky Ponk and the Ball'	, 'Sneezing',
    'Ninky Nonk or Pinky Ponk',	'Oh Look! It\'s the Wottingers!',
    'Upsy Daisy Dances with the Haahoos',
    'Fall Down Ball'
];

function setSloganToQuoteOfTheDay() {
  $.get("https://api.ninkynonk.co.uk/quote", function (data) {
    let element = document.getElementById("slogan");
    element.innerText = data.toLowerCase();
  })
}

function setSlogan() {
  let a = slogans[Math.floor(Math.random() * slogans.length)].toLowerCase();
  let element = getElementByClass("slogan");
  element.innerText = a;
}
