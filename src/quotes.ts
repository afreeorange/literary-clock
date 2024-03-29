export type Quote = {
  timeFragment: string;
  quote: string;
  book: string;
  author: string;
};

const quotes: Record<string, Quote[]> = {
  "00:00": [
    {
      timeFragment: "midnight",
      quote:
        "As midnight was striking bronze blows upon the dusky air, Dorian Gray, dressed commonly, and with a muffler wrapped round his throat, crept quietly out of his house.",
      book: "The Picture of Dorian Gray ",
      author: "Oscar Wilde",
    },
    {
      timeFragment: "midnight",
      quote:
        '"But wait till I tell you," he said. :We had a midnight lunch too after all the jollification and when we sallied forth it was blue o\'clock the morning after the night before"',
      book: "Ulysses ",
      author: "James Joyce",
    },
    {
      timeFragment: "midnight",
      quote:
        '"Midnight," you said. What is midnight to the young? And suddenly a festive blaze was flung Across five cedar trunks, snow patches showed, And a patrol car on our bumpy road Came to a crunching stop. Retake, retake!"',
      book: "Pale Fire ",
      author: "Vladimir Nabokov",
    },
    {
      timeFragment: "12.00 pm",
      quote:
        "That a man who could hardly see anything more than two feet away from him could be employed as a security guard suggested to me that our job was not to secure anything but to report for work every night, fill the bulky ledger with cryptic remarks like 'Patrolled perimeter 12.00 pm, No Incident' and go to the office every fortnight for our wages and listen to the talkative Ms Elgassier.",
      book: "A Squatter's Tale ",
      author: "Ike Oguine",
    },
    {
      timeFragment: "midnight",
      quote:
        "'Tis the year's midnight, and it is the day's, Lucy's, who scarce seven hours herself unmasks; The sun is spent, and now his flasks Send forth light squibs, no constant rays;",
      book: "A Nocturnal upon St Lucy's Day ",
      author: "John Donne",
    },
    {
      timeFragment: "midnight",
      quote:
        "At midnight his wife and daughter might still be bustling about, preparing holiday delicacies in the kitchen, straightening up the house, or perhaps getting their kimonos ready or arranging flowers. Oki would sit in the living room and listen to the radio. As the bells rang he would look back at the departing year. He always found it a moving experience.",
      book: "Beauty and Sadness ",
      author: "Yasunari Kawabata",
    },
    {
      timeFragment: "twelve",
      quote: "Bernardo: 'Tis now struck twelve; get thee to bed, Francisco.",
      book: "Hamlet ",
      author: "Shakespeare",
    },
    {
      timeFragment: "midnight",
      quote:
        "Big Ben concluded the run-up, struck and went on striking. (...) But, odder still - Big Ben had once again struck midnight. The time outside still corresponded to that registered by the stopped gilt clock, inside. Inside and outside matched exactly, but both were badly wrong. H'm.",
      book: "Nights At The Circus ",
      author: "Angela Carter",
    },
    {
      timeFragment: "midnight",
      quote:
        "But in the end I understood this language. I understood it, I understood it, all wrong perhaps. That is not what matters. It told me to write the report. Does this mean I am freer now than I was? I do not know. I shall learn. Then I went back into the house and wrote, It is midnight. The rain is beating on the windows. It was not midnight. It was not raining.",
      book: "Molloy ",
      author: "Samuel Beckett",
    },
    {
      timeFragment: "0000h.",
      quote: "Cartridges not allowed after 0000h., to encourage sleep.",
      book: "Infinite Jest ",
      author: "David Foster Wallace",
    },
    {
      timeFragment: "twelve",
      quote:
        "Francisco. You come most carefully upon your hour. Bernardo. 'Tis now struck twelve. Get thee to bed, Francisco.",
      book: "Hamlet ",
      author: "William Shakespeare",
    },
    {
      timeFragment: "0000h",
      quote:
        "Gately can hear the horns and raised voices and u-turn squeals way down below on Wash. That indicate it's around 0000h., the switching hour.",
      book: "Infinite Jest",
      author: "David Foster Wallace",
    },
    {
      timeFragment: "twelve",
      quote:
        "Hamlet: What hour now? Horatio: I think it lacks of twelve. Marcellus: No, it is struck.",
      book: "Hamlet ",
      author: "William Shakespeare",
    },
    {
      timeFragment: "midnight",
      quote:
        "He is certain he heard footsteps: they come nearer, and then die away. The ray of light beneath his door is extinguished. It is midnight; some one has turned out the gas; the last servant has gone to bed, and he must lie all night in agony with no one to bring him any help.",
      book: "Swann's Way ",
      author: "Marcel Proust",
    },
    {
      timeFragment: "midnight",
      quote:
        "I am conceived to the chimes of midnight on the clock on the mantelpiece in the room across the hall. The clock once belonged to my great-grandmother (a woman called Alice) and its tired chime counts me into the world.",
      book: "Behind the Scenes at the Museum ",
      author: "Kate Atkinson",
    },
    {
      timeFragment: "twelve",
      quote:
        "I took her hand in mine, and bid her be composed; for a succession of shudders convulsed her frame, and she would keep straining her gaze towards the glass. 'There's nobody here!' I insisted. 'It was YOURSELF, Mrs. Linton: you knew it a while since.' 'Myself!' she gasped, 'and the clock is striking twelve! It's true, then! that's dreadful!'",
      book: "Wuthering Heights ",
      author: "Emily Bront\u00eb",
    },
    {
      timeFragment: "midnight",
      quote:
        "I was born in the city of Bombay ... On the stroke of midnight, as a matter of fact. Clock-hands joined palms in respectful greeting as I came. Oh, spell it out, spell it out: at the precise instant of India's arrival at independence, I tumbled forth into the world.",
      book: "Midnight's Children ",
      author: "Salman Rushdie",
    },
    {
      timeFragment: "midnight",
      quote:
        "It is midnight. The rain is beating on the windows. I am calm. All is sleeping. Nevertheless I get up and go to my desk. I can't sleep. ...",
      book: "Molloy ",
      author: "Samuel Beckett",
    },
    {
      timeFragment: "midnight",
      quote:
        "It was nearing midnight and the Prime Minister was sitting alone in his office, reading a long memo that was slipping through his brain without leaving the slightest trace of meaning behind.",
      book: "Harry Potter and the Half-Blood Prince ",
      author: "JK Rowling",
    },
    {
      timeFragment: "midnight",
      quote:
        "Midnight had come upon the crowded city. The palace, the night-cellar, the jail, the madhouse; the chambers of birth and death, of health and sickness; the rigid face of the corpse and the calm sleep of the child - midnight was upon them all.",
      book: "Oliver Twist ",
      author: "Charles Dickens",
    },
    {
      timeFragment: "Midnight",
      quote:
        "Midnight is approaching, and while the peak of activity has passed, the basal metabolism that maintains life continues undiminished, producing the basso continuo of the city's moan, a monotonous sound that neither rises or falls but is pregnant with foreboding.",
      book: "After Dark ",
      author: "Murakami",
    },
    {
      timeFragment: "midnight",
      quote:
        "Once upon a midnight dreary, while I pondered weak and weary, Over many a quaint and curious volume of forgotten lore, While I nodded, nearly napping, suddenly there came a tapping, As of some one gently rapping, rapping at my chamber door. `'Tis some visitor,' I muttered, `tapping at my chamber door - Only this, and nothing more.'",
      book: "The Raven ",
      author: "Edgar Allan Poe",
    },
    {
      timeFragment: "twelve",
      quote:
        "The clock striketh twelve O it strikes, it strikes! Now body, turn to air, Or Lucifer will bear thee quick to hell. O soul, be changed into little water drops, And fall into the ocean, ne'er to be found. My God, my God, look not so fierce on me!",
      book: "Dr Faustus ",
      author: "Christopher Marlowe",
    },
    {
      timeFragment: "midnight",
      quote:
        "The first night, as soon as the corporal had conducted my uncle Toby up stairs, which was about 10 - Mrs. Wadman threw herself into her arm chair, and crossing her left knee with her right, which formed a resting-place for her elbow, she reclin'd her cheek upon the palm of her hand, and leaning forwards, ruminated until midnight upon both sides of the question.'",
      book: "The Life and Opinions of Tristram Shandy, Gentleman ",
      author: "Laurence Sterne",
    },
    {
      timeFragment: "twelve o'clock",
      quote:
        "To begin my life with the beginning of my life, I record that I was born (as I have been informed an believe) on a Friday, at twelve o'clock at night. It was remarked that the clock began to strike, and I began to cry, simultaneously.",
      book: "David Copperfield ",
      author: "Charles Dickens",
    },
    {
      timeFragment: "midnight",
      quote: "We have heard the chimes at midnight.",
      book: "Henry IV",
      author: "William Shakespeare",
    },
  ],
  "00:01": [
    {
      timeFragment: "one minute past midnight",
      quote:
        "With the appointed execution time of one minute past midnight just seconds away, I knocked on the metal door twice. The lock turned and the door swiftly swung open.",
      book: "Death at Midnight",
      author: "Donald A. Cabana",
    },
  ],
  "00:02": [
    {
      timeFragment: "Two minutes past midnight",
      quote:
        "Two minutes past midnight. With me in the lead the fourteen other men of Teams Yellow, White and Red moved out of the clearing and separated for points along the wall where they would cross over into the grounds.",
      book: "Night of the Krait",
      author: "Shashi Warrier",
    },
  ],
  "00:03": [
    {
      timeFragment: "after twelve o'clock",
      quote:
        "It was after twelve o'clock when Easton came home. Ruth recognised his footsteps before he reached the house, and her heart seemed to stop beating when she heard the clang of the gate, as it closed after he had passed through.",
      book: "The Ragged Trousered Philanthropists",
      author: "Robert Tressell",
    },
    {
      timeFragment: "three minutes past midnight",
      quote:
        "It was just three minutes past midnight when I last saw Archer Harrison alive. I remember, because I said it was two minutes past and he looked at his watch and said it was three minutes past.",
      book: "Since Ibsen",
      author: "George Jean Nathan",
    },
    {
      timeFragment: "Three minutes after midnight.",
      quote:
        "Suddenly I felt a great stillness in the air, then a snapping of tension. I glanced at my watch. Three minutes after midnight. I was breathing normally and my pen moved freely across the page. Whatever stalked me wasn't quite as clever as I'd feared, I thought, careful not to pause in my work.",
      book: "The Historian ",
      author: "Elizabeth Kostova",
    },
  ],
  "00:04": [
    {
      timeFragment: "four minutes past midnight",
      quote:
        "At four minutes past midnight, January 22, Admiral Lowry's armada of more than 250 ships reached the transport area off Anzio. The sea was calm, the night was black.",
      book: "Anzio: Epic of Bravery",
      author: "Fred Sheehan",
    },
  ],
  "00:05": [
    {
      timeFragment: "0005h",
      quote:
        "E.M. Security, normally so scrupulous with their fucking trucks at 0005h., is nowhere around, lending weight to yet another clich\u00e9. If you asked Gately what he was feeling right this second he'd have no idea.",
      book: "Infinite Jest ",
      author: "David Foster Wallace",
    },
  ],
  "00:06": [
    {
      timeFragment: "six minutes past midnight",
      quote: "At six minutes past midnight, death relieved the sufferer.",
      book: "West of Hell's Fringe",
      author: "Glenn Shirley",
    },
  ],
  "00:07": [
    {
      timeFragment: "seven minutes after midnight",
      quote:
        "It was seven minutes after midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs Shears' house. Its eyes were closed. It looked as if it was running on its side, the way dogs run when they think they are chasing a cat in a dream.",
      book: "The Curious Incident of the Dog in the Night-Time ",
      author: "Mark Haddon",
    },
  ],
  "00:08": [
    {
      timeFragment: "eight past midnight",
      quote:
        '"Hour of the night!" exclaimed the priest; "it is day, not night, and the hour is eight past midnight!"',
      book: "The Brigantine",
      author: "James Pascoe",
    },
  ],
  "00:09": [
    {
      timeFragment: "12.09am",
      quote:
        "At 12.09am on 18 October, the cavalcade had reached the Karsaz Bridge, still ten kilometres from her destination.",
      book: "The Bhutto Murder Trail: From Waziristan to GHQ",
      author: "Amir Mir",
    },
  ],
  "00:10": [
    {
      timeFragment: "ten minutes past midnight",
      quote:
        "It was at ten minutes past midnight. Three police cars, Alsations and a black maria arrive at the farmhouse. The farmer clad only in a jock-strap, refused them entry.",
      book: "The Queue",
      author: "Jonathan Barrow",
    },
  ],
  "00:11": [
    {
      timeFragment: "eleven minutes past midnight",
      quote:
        "The first incendiaries to hit St Thomas's Hospital had splattered Riddell House at eleven minutes past midnight, from where a few hours earlier the Archbishop of Canterbury had given 'an inspiring address'.",
      book: "The Longest Night",
      author: "Gavin Mortimer",
    },
  ],
  "00:12": [
    {
      timeFragment: "0 Hours, 12 Minutes",
      quote:
        "Clock time is 0 Hours, 12 Minutes, 0 Seconds. Twenty three minutes later, they have their first sight of Venus. Each lies with his Eye clapp'd to the Snout of an identical two and a half foot Gregorian reflector made by Mr Short, with Darkening-Nozzles by Mr Bird.",
      book: "Mason & Dixon",
      author: "Thomas Pynchon",
    },
    {
      timeFragment: "twelve minutes past midnight",
      quote:
        "It was twelve minutes past midnight when mother and daughter saw the first lightning strike. It hit the main barn with such force the ground trembled under their feet.",
      book: "Kentucky heat",
      author: "Fern Michaels",
    },
  ],
  "00:14": [
    {
      timeFragment: "fourteen minutes past midnight",
      quote:
        "It was exactly fourteen minutes past midnight when he completed the final call. Among the men he had reched were honourable men. Their voices would be heard by the President.",
      book: "The Matarese Circle",
      author: "Robert Ludlum",
    },
  ],
  "00:15": [
    {
      timeFragment: "twelve-fifteen",
      quote:
        "At twelve-fifteen he got out of the van. He tucked the pistol under the waistband of his trousers and crossed the silent, deserted street to the Hudston house.",
      book: "Watchers",
      author: "Dean Koontz",
    },
    {
      timeFragment: "twelve-fifteen",
      quote:
        "At twelve-fifteen he got out of the van. He tucked the pistol under the waistband of his trousers and crossed the silent, deserted street to the Hudston house. He let himself through an unlocked wooden gate onto a side patio brightened only by moonlight filtered through the leafy branches of an enormous sheltering coral tree. He paused to pull on a pair of supple leather gloves.",
      book: "Watchers ",
      author: "Dean Koontz",
    },
  ],
  "00:16": [
    {
      timeFragment: "sixteen minutes past midnight",
      quote:
        "At sixteen minutes past midnight, Block 4 was hit and the roof set alight.",
      book: "The Longest Night",
      author: "Gavin Mortimer",
    },
  ],
  "00:17": [
    {
      timeFragment: "seventeen minutes after twelve",
      quote:
        "Kava ordered two glasses of coffee for himself and his beloved and some cake. When the pair left, exactly seventeen minutes after twelve, the club began to buzz with excitement.",
      book: "Vanvild Kava",
      author: "Isaac Bashevis Singer",
    },
  ],
  "00:18": [
    {
      timeFragment: "12.18am",
      quote:
        "21st December 1985, 12.18am [In bed] Michael doesn't believe in Heaven or Hell. He's got closer to death than most living people and he tells me there was no tunnel of light or dancing angels. I'm a bit disappointed, to be honest.",
      book: "The Book of Lies",
      author: "Mary Horlock",
    },
  ],
  "00:20": [
    {
      timeFragment: "twelve-twenty",
      quote:
        "Now she was kneading the little ball of hot paste on the convex margin of the bowl and I could smell the opium. There is no smell like it. Beside the bed the alarm-clock showed twelve-twenty, but already my tension was over. Pyle had diminished.",
      book: "The Quiet American",
      author: "Graham Greene",
    },
  ],
  "00:21": [
    {
      timeFragment: "12.21am",
      quote:
        "Nobody had been one of Mycroft Ward's most important operatives and for sixty seconds every day, between 12.21am and 12.22am., his laptop was permitted to connect directly with the gigantic online database of self that was Mycroft Ward's mind.",
      book: "The Raw Shark Texts",
      author: "Steven Hall",
    },
  ],
  "00:22": [
    {
      timeFragment: "12.22am.",
      quote:
        "Nobody had been one of Mycroft Ward's most important operatives and for sixty seconds every day, between 12.21am and 12.22am., his laptop was permitted to connect directly with the gigantic online database of self that was Mycroft Ward's mind.",
      book: "The Raw Shark Texts",
      author: "Steven Hall",
    },
  ],
  "00:23": [
    {
      timeFragment: "twenty-three minutes past midnight",
      quote:
        "Oskar weighed the wristwatch in his hand, then gave the rather fine piece with its luminous dial showing twenty-three minutes past midnight to little Pinchcoal. He looked up inquiringly at his chief. St\u00f6rtebeker nodded his assent. And Oskar said, as he adjusted his drum snugly for the trip home: 'Jesus will lead the way. Follow thou me!'",
      book: "The Tin Drum",
      author: "G\u00fcnter Grass",
    },
  ],
  "00:24": [
    {
      timeFragment: "12.24am",
      quote:
        "Sanders with Sutton as his gunner began their patrol at 12.24am, turning south towards Beachy Head at 10,000 ft.",
      book: "The Longest Night",
      author: "Gavin Mortimer",
    },
  ],
  "00:25": [
    {
      timeFragment: "five-and-twenty minutes past midnight",
      quote:
        "Charlotte remembered that she had heard Gregoire go downstairs again, almost immediately after entering his bedroom, and before the servants had even bolted the house-doors for the night. He had certainly rushed off to join Therese in some coppice, whence they must have hurried away to Vieux-Bourg station which the last train to Paris quitted at five-and-twenty minutes past midnight. And it was indeed this which had taken place.",
      book: "Fruitfulness ",
      author: "Emile Zola",
    },
    {
      timeFragment: "Twenty-five past midnight",
      quote:
        "I mean, look at the time! Twenty-five past midnight! It was a triumph, it really was!",
      book: "The Soldier's Wife",
      author: "Joanna Trollope",
    },
  ],
  "00:26": [
    {
      timeFragment: "12.26am.",
      quote:
        "\"A Mr Dutta from King's Cross called and told me you were on your way. He said you wanted to see the arrival of yesterday's 12.26am. It'll take me a few minutes to cue up the footage. Our regular security bloke isn't here today; he's up before Haringey Magistrates' Court for gross indecency outside the headquarters of the Dagenham Girl Pipers.\"",
      book: "Bryant & May Off the Rails",
      author: "Christopher Fowler",
    },
  ],
  "00:28": [
    {
      timeFragment: "12.28",
      quote: "The DRINK CHEER-UP COFFEE wall clock read 12.28.",
      book: "11/22/63",
      author: "Stephen King",
    },
  ],
  "00:29": [
    {
      timeFragment: "Twenty-nine minutes past twelve",
      quote:
        '"What time is it?" asked Teeny-bits. The station agent hauled out his big silver watch, looked at it critically and announced: "Twenty-nine minutes past twelve." "Past twelve!" repeated Teeny-bits. "It can\'t be."',
      book: "The Mark of the Knife",
      author: "Clayton H Ernst",
    },
  ],
  "00:30": [
    {
      timeFragment: "half-past twelve",
      quote:
        "It was half-past twelve when I returned to the Albany as a last desperate resort. The scene of my disaster was much as I had left it. The baccarat-counters still strewed the table, with the empty glasses and the loaded ash-trays. A window had been opened to let the smoke out, and was letting in the fog instead.",
      book: "The Amateur Cracksman ",
      author: "E.W. Hornung",
    },
  ],
  "00:31": [
    {
      timeFragment: "00:31",
      quote:
        "Third individual approaches unnoticed and without caution. Once within reach, individual reaches out toward subjects. Recording terminates: timecode: 00:31:02.",
      book: "Zombie Apocalypse! Fightback",
      author: "Stephen Jones",
    },
  ],
  "00:32": [
    {
      timeFragment: "Thirty-two minutes past midnight",
      quote:
        "Thirty-two minutes past midnight; the way things were going I could be at it all night. Before beginning a completely new search of the dial I had a thought: maybe this safe didn't open on zero as older models did, but on a factory-set number.",
      book: "Ixtapa ",
      author: "Everette Howard Hunt",
    },
  ],
  "00:33": [
    {
      timeFragment: "thirty-three minutes past midnight",
      quote:
        '"So that at twelve-thirty-three you bolted the south door?" "Yes," replied Stephen Maxie easily. "At thirty-three minutes past midnight."',
      book: "Cover her Face",
      author: "P.D. James",
    },
  ],
  "00:34": [
    {
      timeFragment: "Thirty-four minutes past midnight",
      quote:
        "Thirty-four minutes past midnight. 'We got ten minutes to be back here.' LT didn't argue. Schoolboy knew his former trade. LT's eyes fretted over the museum. 'Not still worrying about the security, are you, because there ain't none.'",
      book: "Killer Tune",
      author: "Dreda Say Mitchell",
    },
  ],
  "00:40": [
    {
      timeFragment: "twenty to one",
      quote:
        "We sat in the car park till twenty to one/ And now I'm engaged to Miss Joan Hunter Dunn.",
      book: "A Subaltern's Love Song ",
      author: "John Betjeman",
    },
  ],
  "00:42": [
    {
      timeFragment: "eighteen minutes to one",
      quote:
        "The butt had been growing warm in her fingers; now the glowing end stung her skin. She crushed the cigarette out and stood, brushing ash from her black skirt. It was eighteen minutes to one. She went to the house phone and called his room. The telephone rang and rang, but there was no answer.",
      book: "Marjorie Morningstar",
      author: "Herman Wouk",
    },
  ],
  "00:43": [
    {
      timeFragment: "Twelve-forty-three",
      quote:
        "Died five minutes ago, you say? he asked. His eye went to the watch on his wrist. Twelve-forty-three, he wrote on the blotter.",
      book: "A Pocket Full of Rye",
      author: "Agatha Christie",
    },
  ],
  "00:45": [
    {
      timeFragment: "12.45",
      quote:
        "At 12.45, during a lull, Mr Yoshogi told me that owing to the war there were now many more women in England than men.",
      book: "Pig and Pepper: A Comedy of Youth",
      author: "David Footman",
    },
    {
      timeFragment: "third quarter after midnight",
      quote:
        "At the thought he jumped to his feet and took down from its hook the coat in which he had left Miss Viner's letter. The clock marked the third quarter after midnight, and he knew it would make no difference if he went down to the post-box now or early the next morning; but he wanted to clear his conscience, and having found the letter he went to the door.",
      book: "The Reef ",
      author: "Edith Wharton",
    },
  ],
  "00:47": [
    {
      timeFragment: "12:47a.m",
      quote: "At 12:47a.m, Uncle Ho left us forever.",
      book: "Last Night I Dreamed Of Peace",
      author: "Andrew X. Pham",
    },
  ],
  "00:50": [
    {
      timeFragment: "12.50",
      quote:
        "The packing was done at 12.50; and Harris sat on the big hamper, and said he hoped nothing would be found broken. George said that if anything was broken it was broken, which reflection seemed to comfort him. He also said he was ready for bed.",
      book: "Three Men in a Boat ",
      author: "Jerome K Jerome",
    },
  ],
  "00:54": [
    {
      timeFragment: "six minutes to one",
      quote:
        "Everybody was happy; everybody was complimentary; the ice was soon broken; songs, anecdotes, and more drinks followed, and the pregnant minutes flew. At six minutes to one, when the jollity was at its highest\u2014 BOOM! There was silence instantly.",
      book: "A Double Barrelled Detective Story",
      author: "Mark Twain",
    },
  ],
  "00:55": [
    {
      timeFragment: "Five to one",
      quote:
        "He rolled one way, rolled the other, listened to the loud tick of the clock, and was asleep a minute later. Five to one in the morning. Fifty-one hours to go.",
      book: "61 Hours",
      author: "Lee Child",
    },
  ],
  "00:56": [
    {
      timeFragment: "12:56 A.M.",
      quote:
        "It was 12:56 A.M. when Gerald drove up onto the grass and pulled the limousine right next to the cemetery.",
      book: "Extremely Loud and Incredibly Close ",
      author: "Jonathan Safran Foer",
    },
    {
      timeFragment: "12:56",
      quote:
        "Teacher used to lie awake at night facing that clock, batting his eyelashes against his pillowcase to mimic the sound of the rolling drop action. One night, and this first night is lost in the countless later nights of compounding wonder, he discovered a game. Say the time was 12:56.",
      book: "Lessons in Essence",
      author: "Dana Standridge",
    },
  ],
  "00:57": [
    {
      timeFragment: "12:57",
      quote:
        "A minute had passed, and the roller dropped a new leaf. 12:57. 12 + 57 = 69; 6 + 9 = 15; 1 + 5 = 6. 712 + 5 = 717; 71 + 7 = 78; 7 + 8 = 15; 1 + 5 = 6 again.",
      book: "Lessons in Essence",
      author: "Dana Standridge",
    },
  ],
  "00:58": [
    {
      timeFragment: "almost at one in the morning",
      quote:
        "It was downright shameless on his part to come visiting them, especially at night, almost at one in the morning, after all that had happened.",
      book: "The Idiot",
      author: "Fyodor Dostoyevsky",
    },
  ],
  "00:59": [
    {
      timeFragment: "About one o'clock",
      quote:
        "'What time is it now?' she said. 'About one o'clock'. 'In the morning?' Herera's friend leered at her. 'No, there's a total eclipse of the sun'.",
      book: "Freedom",
      author: "Jonathan Frantzen",
    },
  ],
  "01:00": [
    {
      timeFragment: "1.00 am.",
      quote: "1.00 am. I felt the surrounding quietness suffocating me.",
      book: "Sister ",
      author: "Rosamund Lupton",
    },
    {
      timeFragment: "one o'clock",
      quote:
        "He didn't know what was at the end of the chute. The opening was narrow (though large enough to take the canary). He dreamed that the chute opened onto vast garbage bins filled with old coffee filters, ravioli in tomato sauce and mangled genitalia. Huge worms, as big as the canary, armed with terrible beaks, would attack the body. Tear off the feet, rip out its intestines, burst the eyeballs. He woke up, trembling; it was only one o'clock. He swallowed three Xanax. So ended his first night of freedom.",
      book: "Atomised ",
      author: "Michel Houellebecq",
    },
    {
      timeFragment: "nearly one o'clock",
      quote:
        "I looked attentively at her, as she put that singular question to me. It was then nearly one o'clock. All I could discern distinctly by the moonlight was a colourless, youthful face, meagre and sharp to look at about the cheeks and chin; large, grave, wistfully attentive eyes; nervous, uncertain lips; and light hair of a pale, brownish-yellow hue.",
      book: "The Woman in White ",
      author: "Wilkie Collins",
    },
    {
      timeFragment: "one in the morning",
      quote:
        "I'm the only one awake in this house on this night before the day that will change all our lives. Though it's already that day: the little luminous hands on my alarm clock (which I haven't set) show just gone one in the morning.",
      book: "Tomorrow ",
      author: "Graham Swift",
    },
    {
      timeFragment: "One am",
      quote:
        "It was the thirtieth of May by now. One am on the thirtieth of May 1940. Quite a famous date on which to be lying awake and staring at the ceiling. Already in the creeks and tidal estuaries of England the pleasure-boats and paddle-steamers were casting their moorings for the day trip to Dunkirk. And, over on the other side, Ted stood as a good a chance as anyone else.",
      book: "London Belongs to Me ",
      author: "Norman Collins",
    },
    {
      timeFragment: "one ",
      quote:
        "Last night of all, When yon same star that's westward from the pole Had made his course t'illume that part of heaven Where now it burns, Marcellus and myself, The bell then beating one -",
      book: "Hamlet ",
      author: "William Shakespeare",
    },
    {
      timeFragment: "one o'clock in the morning",
      quote:
        "The station was more crowded than he had expected to find it at - what was it? he looked up at the clock - one o'clock in the morning. What in the name of God was he doing on King's Cross station at one o'clock in the morning, with no cigarette and no home that he could reasonably expect to get into without being hacked to death by a homicidal bird?",
      book: "The Long Dark Tea-time of the Soul ",
      author: "Douglas Adams",
    },
  ],
  "01:01": [
    {
      timeFragment: "About one o'clock",
      quote:
        "'What time is it now?' she said. 'About one o'clock'. 'In the morning?' Herera's friend leered at her. 'No, there's a total eclipse of the sun'.",
      book: "Freedom",
      author: "Jonathan Frantzen",
    },
  ],
  "01:06": [
    {
      timeFragment: "1:06",
      quote:
        "When he woke it was 1:06 by the digital clock on the bedside table. He lay there looking at the ceiling, the raw glare of the vaporlamp outside bathing the bedroom in a cold and bluish light. Like a winter moon.",
      book: "No Country for Old Men",
      author: "Cormac McCarthy",
    },
  ],
  "01:08": [
    {
      timeFragment: "1.08a.m.",
      quote:
        "It was 1.08a.m. but he had left the ball at the same time as I did, and had further to travel.",
      book: "The Rosie Project",
      author: "Graeme Simsion",
    },
  ],
  "01:09": [
    {
      timeFragment: "nine minutes past one",
      quote:
        "They made an unostentatious exit from their coach, finding themselves, when the express had rolled on into the west, upon a station platform in a foreign city at nine minutes past one o'clock in the morning - but at length without their shadow.",
      book: "The Black Bag",
      author: "Louis Joseph Vance",
    },
  ],
  "01:10": [
    {
      timeFragment: "1.10am",
      quote:
        "February 26, Saturday - Richards went out 1.10am and found it clearing a bit, so we got under way as soon as possible, which was 2:10a.m.",
      book: "South: The Endurance Expedition",
      author: "Ernest Shackleton",
    },
  ],
  "01:11": [
    {
      timeFragment: "nearer to one than half past",
      quote:
        "Declares one of the waiters was the worse for liquor, and that he was giving him a dressing down. Also that it was nearer to one than half past.",
      book: "The Affair at the Victory Ball",
      author: "Agatha Christie",
    },
  ],
  "01:12": [
    {
      timeFragment: "1:12am",
      quote:
        "It was 1:12am when Father arrived at the police station. I did not see him until 1:28am but I knew he was there because I could hear him. He was shouting, 'I want to see my son,' and 'Why the hell is he locked up?' and, 'Of course I'm bloody angry.'",
      book: "The Curious Incident of the Dog in the Night-Time",
      author: "Mark Haddon",
    },
  ],
  "01:15": [
    {
      timeFragment: "quarter past one",
      quote:
        "I am sorry, therefore, as I have said, that I ever paid any attention to the footsteps. They began about a quarter past one o'clock in the morning, a rhythmic, quick-cadenced walking around the dining-room table.",
      book: '"My Life and Hard Times: "The Night the Ghost Got In"',
      author: "James Thurber",
    },
    {
      timeFragment: "1.15am.",
      quote:
        "Lily Chen always prepared an 'evening' snack for her husband to consume on his return at 1.15am.",
      book: "Sour Sweet ",
      author: "Timothy Mo",
    },
    {
      timeFragment: "quarter past one",
      quote:
        "The ghost that got into our house on the night of November 17, 1915, raised such a hullabaloo of misunderstandings that I am sorry I didn't just let it keep on walking, and go to bed. Its advent caused my mother to throw a shoe through a window of the house next door and ended up with my grandfather shooting a patrolman. I am sorry, therefore, as I have said, that I ever paid any attention to the footsteps. They began about a quarter past one o'clock in the morning, a rhythmic, quick-cadenced walking around the dining-room table.",
      book: '"My Life and Hard Times: "The Night the Ghost Got In" "',
      author: "James Thurber",
    },
  ],
  "01:16": [
    {
      timeFragment: "sixteen past one",
      quote: "At sixteen past one, they walked into the interview room.",
      book: "Nothing Gold Can Stay ",
      author: "Dana Stabenow",
    },
    {
      timeFragment: "1.16am",
      quote: "From 1am to 1.16am vouched for by other two conductors.",
      book: "Murder on the Orient Express",
      author: "Agatha Christie",
    },
  ],
  "01:17": [
    {
      timeFragment: "seventeen minutes past one",
      quote:
        "At that moment (it was seventeen minutes past one in the morning) Lieutenant Bronsfield was preparing to leave the watch and return to his cabin, when his attention was attracted by a distant hissing noise.",
      book: "A voyage round the moon ",
      author: "Jules Verne",
    },
    {
      timeFragment: "1:17",
      quote:
        "The clocks stopped at 1:17. A long shear of light and then a series of low concussions. He got up and went to the window. What is it? she said. He didnt answer. He went into the bathroom and threw the lightswitch but the power was already gone. A dull rose glow in the windowglass. He dropped to one knee and raised the lever to stop the tub and then turned on both taps as far as they would go. She was standing in the doorway in her nightwear, clutching the jamb, cradling her belly in one hand. What is it? she said. What is happening?",
      book: "The Road ",
      author: "Cormac McCarthy",
    },
  ],
  "01:20": [
    {
      timeFragment: "twenty minutes past one",
      quote:
        '"Well!" she said, looking like a minor female prophet about to curse the sins of the people. "May I trespass on your valuable time long enough to ask what in the name of everything bloodsome you think you\'re playing at, young piefaced Bertie? It is now some twenty minutes past one o\'clock in the morning, and not a spot of action on your part."',
      book: "Jeeves and the Feudal Spirit ",
      author: "P.G. Wodehouse",
    },
    {
      timeFragment: "1.20am",
      quote:
        "Then it was 1.20am, but I hadn't heard Father come upstairs to bed. I wondered if he was asleep downstairs or whether he was waiting to come in and kill me. So I got out my Swiss Army Knife and opened the saw blade so that I could defend myself.",
      book: "The Curious Incident Of The Dog In The Night-Time",
      author: "Mark Haddon",
    },
  ],
  "01:22": [
    {
      timeFragment: "1:22",
      quote: "It was 1:22 when we found Dad's grave.",
      book: "Extremely Loud and Incredibly Close",
      author: "Jonathan Safran Foer",
    },
  ],
  "01:23": [
    {
      timeFragment: "twenty-three minutes past one",
      quote:
        "The clock marked twenty-three minutes past one. He was suddenly full of agitation, yet hopeful. She had come! Who could tell what she would say? She might offer the most natural explanation of her late arrival.",
      book: "A Mummer's Tale",
      author: "Anatole France",
    },
  ],
  "01:24": [
    {
      timeFragment: "1.24am",
      quote:
        "Larkin had died at 1.24am, turning to the nurse who was with him, squeezing her hand, and saying faintly, 'I am going to the inevitable.'",
      book: "Body Parts: Essays on Life-Writing",
      author: "Hermione Lee",
    },
  ],
  "01:25": [
    {
      timeFragment: "twenty-five minutes past one",
      quote:
        "He made a last effort; he tried to rise, and sank back. His head fell on the sofa cushions. It was then twenty-five minutes past one o'clock.",
      book: "The Moonstone",
      author: "Wilkie Collins",
    },
  ],
  "01:26": [
    {
      timeFragment: "one twenty-six A.M.",
      quote:
        "When I reached the stop and got off, it was already one twenty-six A.M. by the bus's own clock. I had been gone over ten hours.",
      book: "The Silver Metal Lover",
      author: "Tanith Lee",
    },
  ],
  "01:27": [
    {
      timeFragment: "twenty-seven minutes past one",
      quote:
        "At twenty-seven minutes past one she felt as if she was levitating out of her body.",
      book: "Trackers",
      author: "Deon Meyer",
    },
  ],
  "01:28": [
    {
      timeFragment: "1:28 am",
      quote:
        "It was 1:12 am when Father arrived at the police station. I did not see him until 1:28 am but I knew he was there because I could hear him. He was shouting, 'I want to see my son,' and 'Why the hell is he locked up?' and, 'Of course I'm bloody angry.'",
      book: "The Curious Incident Of The Dog In The Night-Time",
      author: "Mark Haddon",
    },
  ],
  "01:29": [
    {
      timeFragment: "one-twenty-nine A.M.",
      quote: "He exited the men's room at one-twenty-nine A.M.",
      book: "The Narc",
      author: "William Edmund Butterworth",
    },
  ],
  "01:30": [
    {
      timeFragment: "Half-past one",
      quote:
        '"Half-past one", The street lamp sputtered, The street lamp muttered, The street lamp said, "Regard that woman ..."',
      book: "Rhapsody on a Windy Night ",
      author: "TS Eliot",
    },
    {
      timeFragment: "1:30 A.M.",
      quote:
        "Around 1:30 A.M. the door opened and I thought it was Karla, but it was Bug, saying Karla and Laura had gone out for a stag night after they ran out of paint.",
      book: "Microserfs ",
      author: "Douglas Coupland",
    },
    {
      timeFragment: "one thirty",
      quote:
        "The late hour helped. It simplified things. It categorized the population. Innocent bystanders were mostly home in bed. I walked for half an hour, but nothing happened. Until one thirty in the morning. Until I looped around to 22nd and Broadway.",
      book: "Gone Tomorrow ",
      author: "Lee Child",
    },
    {
      timeFragment: "1:30 a.m.",
      quote:
        "The radio alarm clock glowed 1:30 a.m. Bad karaoke throbbed through walls. I was wide awake, straightjacketed by my sweaty sheets. A headache dug its thumbs into my temples. My gut pulsed with gamma interference: I lurched to the toilet.",
      book: "Ghostwritten ",
      author: "David Mitchell",
    },
  ],
  "01:32": [
    {
      timeFragment: "One-thirty-two",
      quote:
        "She grinned at him with malicious playfulness, showing great square teeth, and then ran for the stairs. One-thirty-two. She thought that she heard a whistle blown and took the last three steps in one stride.",
      book: "Stamboul Train",
      author: "Graham Greene",
    },
  ],
  "01:33": [
    {
      timeFragment: "One-thirty-three a.m.",
      quote:
        "He looked at his watch. One-thirty-three a.m. He had been asleep on this bench for over an hour and a half.",
      book: "Skeletons",
      author: "Kat Fox",
    },
  ],
  "01:38": [
    {
      timeFragment: "one-thirty-eight",
      quote:
        "At one-thirty-eight am suspect left the Drive-In and drove to seven hundred and twenty three North Walnut, to the rear of the residence, and parked the car.",
      book: "The Narc",
      author: "William Edmund Butterworth",
    },
  ],
  "01:40": [
    {
      timeFragment: "one-forty am",
      quote:
        "March twelfth, one-forty am, she leaves a group of drinking buddies to catch a bus home. She never makes it.",
      book: "Bones to Ashes",
      author: "Kathy Reichs",
    },
  ],
  "01:44": [
    {
      timeFragment: "sixteen minutes to two",
      quote:
        "She knew it was the stress, two long days of stress, and she looked at her watch, sixteen minutes to two, and she almost leaped with fright, a shock wave rippling through her body, where had the time gone?",
      book: "Trackers",
      author: "Deon Meyer",
    },
  ],
  "01:46": [
    {
      timeFragment: "one forty-six a.m.",
      quote:
        "That particular phenomenom got Presto up at one forty-six a.m.; silently, he painted his face and naked body with camouflage paint. He opened the door to his room and stepped out into the common lobby.",
      book: "Fardnock's Revenge",
      author: "J.W. Stockton",
    },
  ],
  "01:50": [
    {
      timeFragment: "ten minutes before two AM",
      quote:
        "No, she thought: every spinster legal secretary, bartender, and orthodontist had a cat or two\u2014and she could not tolerate (not even as a lark, not even for a moment at ten minutes before two AM), embodying clich\u00e9.",
      book: "Dog",
      author: "Michelle Herman",
    },
  ],
  "01:51": [
    {
      timeFragment: "nine minutes to two",
      quote:
        "At nine minutes to two the other vehicle arrived. At first Milla didn't believe her eyes: that shape, those markings.",
      book: "Trackers",
      author: "Deon Meyer",
    },
  ],
  "01:54": [
    {
      timeFragment: "Six minutes to two",
      quote:
        "Six minutes to two. Janina Mentz watched the screen, where the small program window flickered with files scrolling too fast to read, searching for the keyword.",
      book: "Trackers",
      author: "Dean Koontz",
    },
  ],
  "02:00": [
    {
      timeFragment: "About two",
      quote:
        '"The middle of the night?" Alec asked sharply."Can you be more definite?" "About two. Just past." Daisy noted that he expressed no concern for her safety."',
      book: "Dead in the water ",
      author: "Carola Dunn",
    },
    {
      timeFragment: "two o'clock",
      quote:
        "As two o'clock pealed from the cathedral bell, Jean Valjean awoke.",
      book: "Les Miserables ",
      author: "Victor Hugo",
    },
    {
      timeFragment: "2 A.M.",
      quote:
        "Get on plane at 2 A.M., amid bundles, chickens, gypsies, sit opposite pair of plump fortune tellers who groan and (very discreetly) throw up all the way to Tbilisi.",
      book: "Bech: A Book",
      author: "J. Updike",
    },
    {
      timeFragment: "two",
      quote:
        "Lady Macbeth: Out, damned spot! out, I say!\u2014One: two: why, then, 'tis time to do't.\u2014Hell is murky!\u2014Fie, my lord, fie! a soldier, and afeard? What need we fear who knows it, when none can call our power to account?\u2014Yet who would have thought the old man to have had so much blood in him.",
      book: "Macbeth",
      author: "Shakespeare",
    },
    {
      timeFragment: "It struck two.",
      quote:
        "Somewhere behind a screen a clock began wheezing, as though oppressed by something, as though someone were strangling it. After an unnaturally prolonged wheezing there followed a shrill, nasty, and as it were unexpectedly rapid, chime - as though someone were suddenly jumping forward. It struck two. I woke up, though I had indeed not been asleep but lying half-conscious.",
      book: "Notes from the underground ",
      author: "Fyodor Dostoyevsky",
    },
    {
      timeFragment: "two o'clock",
      quote:
        "When all had grown quiet and Fyodor Pavlovich went to bed at around two o'clock, Ivan Fyodorovich also went to bed with the firm resolve of falling quickly asleep, as he felt horribly exhausted.'",
      book: "The Brothers Karamazov ",
      author: "Fyodor Dostoyevsky",
    },
  ],
  "02:01": [
    {
      timeFragment: "2.01am.",
      quote:
        "I checked my watch. 2.01am. The cheeseburger Happy Meal was now only a distant memory. I cursed myself for not also ordering a breakfast sandwich for the morning.",
      book: "The Selected Works of T.S. Spivet",
      author: "Reif Larsen",
    },
  ],
  "02:02": [
    {
      timeFragment: "almost 2:04",
      quote:
        '"Wake up." "Having the worst dream." "I should certainly say you were." "It was awful. It just went on and on." "I shook you and shook you and." "Time is it." "It\'s nearly - almost 2:04."',
      book: "Oblivion",
      author: "David Foster Wallace",
    },
  ],
  "02:04": [
    {
      timeFragment: "2:04",
      quote:
        '"Wake up." "Having the worst dream." "I should certainly say you were." "It was awful. It just went on and on." "I shook you and shook you and." "Time is it." "It\'s nearly - almost 2:04."',
      book: "Oblivion",
      author: "David Foster Wallace",
    },
  ],
  "02:05": [
    {
      timeFragment: "2.05",
      quote: "At 2.05 the fizzy tights came crackling off.",
      book: "London Fields",
      author: "Martin Amis",
    },
    {
      timeFragment: "Five minutes past two",
      quote:
        "Then he began ringing the bell. In about ten minutes his valet appeared, half dressed, and looking very drowsy. 'I am sorry to have had to wake you up, Francis,' he said, stepping in; 'but I had forgotten my latch-key. What time is it?' 'Five minutes past two, sir,' answered the man, looking at the clock and yawning. 'Five minutes past two? How horribly late! You must wake me at nine to-morrow. I have some work to do.'",
      book: "The Picture of Dorian Gray ",
      author: "Oscar Wilde",
    },
  ],
  "02:07": [
    {
      timeFragment: "2:07 a.m.",
      quote:
        "At 2:07 a.m. I decided that I wanted a drink of orange squash before I brushed my teeth and got into bed, so I went downstairs to the kitchen. Father was sitting on the sofa watching snooker on the television and drinking whisky. There were tears coming out of his eyes.",
      book: "The Curious Incident of the Dog in the Night-Time",
      author: "Mark Haddon",
    },
    {
      timeFragment: "2.07 am",
      quote:
        "But I couldn't sleep. And I got out of bed at 2.07 am and I felt scared of Mr. Shears so I went downstairs and out of the front door into Chapter Road.",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "2.07 a.m.",
      quote:
        "Saturday, 17 November \u2014 2.07 a.m. I cannot sleep. Ben is upstairs, back in bed, and I am writing this in the kitchen. He thinks I am drinking a cup of cocoa that he has just made for me. He thinks I will come back to bed soon. I will, but first I must write again.",
      book: "Before I Go to Sleep ",
      author: "S. J. Watson",
    },
  ],
  "02:10": [
    {
      timeFragment: "Ten minutes past two",
      quote:
        '"Ten minutes past two, sir," answered the man, looking at the clock and blinking. "Ten minutes past two? How horribly late! .."',
      book: "The Picture of Dorian Gray ",
      author: "Oscar Wilde",
    },
    {
      timeFragment: "2:10am",
      quote:
        "Decided to get under way again as soon as there is any clearance. Snowing and blowing, force about fifty or sixty miles an hour. February 26, Saturday - Richards went out 1:10am and found it clearing a bit, so we got under way as soon as possible, which was 2:10am",
      book: "South: The Endurance Expedition",
      author: "Ernest Shackleton",
    },
  ],
  "02:12": [
    {
      timeFragment: "2.12am",
      quote:
        "Then the lights went out all over the city. It happened at 2.12am according to power-house records, but Blake's diary gives no indication of the time. The entry is merely, 'Lights out - God help me.'",
      book: "The Haunter of the Dark",
      author: "HP Lovecraft",
    },
  ],
  "02:13": [
    {
      timeFragment: "02.13",
      quote:
        "Now, listen: your destination is Friday, 4 August 1944, and the window will punch through at 22.30 hours. You're going to a dimension that diverged from our own at 02.13 on the morning of Wednesday 20 February 1918, over twenty-six years earlier. You don't know what it's going to be like...",
      book: "The Second Internet Cafe, Part 1: The Dimension Researcher",
      author: "Chris James",
    },
  ],
  "02:15": [
    {
      timeFragment: "2.15am",
      quote:
        "At 2.15am a policeman observed the place in darkness, but with the stranger's motor still at the curb.",
      book: "The Shadow Out of Time",
      author: "H.P. Lovecraft",
    },
    {
      timeFragment: "two fifteen",
      quote:
        "It did. When the alarm rang at two fifteen, Lew shut it off, snapped on the little bedside lamp, then swung his feet to the floor to sit on the edge of the bed, holding his eyes open.",
      book: "The Night People ",
      author: "Jack Finney",
    },
  ],
  "02:17": [
    {
      timeFragment: "Two-seventeen",
      quote:
        '"What time is it now?" He turned her very dusty alarm clock to check. "Two-seventeen," he marveled. It was the strangest time he\'d seen in his entire life. "I apologize that the room is so messy," Lalitha said. "I like it. I love how you are. Are you hungry? I\'m a little hungry." "No, Walter." She smiled. "I\'m not hungry. But I can get you something." "I was thinking, like, a glass of soy milk. Soy beverage."',
      book: "Freedom ",
      author: "Jonathan Franzen",
    },
    {
      timeFragment: "2.17",
      quote:
        '"One of the "choppers" stopped, did an about-turn and came back to me. The flare spluttered and faded, and now the glare of the spotlight blinded me. I sat very still. It was 2.17. Against the noise of the blades a deeper resonant sound bit into the chill black air."',
      book: "The Ipcress File",
      author: "Len Deighton",
    },
  ],
  "02:18": [
    {
      timeFragment: "2:18 in the morning",
      quote:
        "It was 2:18 in the morning, and Donna could see no one else in any other office working so late.",
      book: "Moo",
      author: "Jane Smiley",
    },
  ],
  "02:20": [
    {
      timeFragment: "Two-twenty",
      quote:
        "She turned abruptly to the nurse and asked the time. 'Two-twenty' 'Ah...Two-twenty!' Genevieve repeated, as though there was something urgent to be done.",
      book: "Southern Mail",
      author: "Antoine de Saint Exupery",
    },
    {
      timeFragment: "two twenty",
      quote:
        "The night of his third walk Lew slept in his own apartment. When his eyes opened at two twenty, by the green hands of his alarm, he knew that this time he'd actually been waiting for it in his sleep.",
      book: "The Night People ",
      author: "Jack Finney",
    },
  ],
  "02:21": [
    {
      timeFragment: "2:21 a.m.",
      quote:
        "2:21 a.m. Lance-Corporal Hartmann emerged from the house in the Rue de Londres.",
      book: "The Night of the Generals",
      author: "Hans Hellmut Kirst",
    },
    {
      timeFragment: "Two-twenty-one",
      quote:
        "It was the urge to look up at the sky. But of course there was no sun nor moon nor stars overhead. Darkness hung heavy over me. Each breath I took, each wet footstep, everything wanted to slide like mud to the ground. I lifted my left hand and pressed on the light of my digital wristwatch. Two-twenty-one. It was midnight when we headed underground, so only a little over two hours had passed. We continued walking down, down the narrow trench, mouths clamped tight.",
      book: "Hard Boiled Wonderland and the End of the World ",
      author: "Haruki Murakami",
    },
  ],
  "02:24": [
    {
      timeFragment: "2.24am.",
      quote:
        "It was 2.24am. She stumbled out of bed, tripping on her shoes that she'd kicked off earlier and pulled on a jumper.",
      book: "After You'd Gone",
      author: "Maggie O'Farrell",
    },
  ],
  "02:25": [
    {
      timeFragment: "2.25am.",
      quote: "You see it is time: 2.25am. You get out of bed.",
      book: "Nineteen Eighty-Three: The Red Riding Quartet, Book Four",
      author: "David Peace",
    },
  ],
  "02:26": [
    {
      timeFragment: "2.26am",
      quote: "Listened to a voicemail message left at 2.26am by Claude.",
      book: "The Lighted Rooms",
      author: "Richard Mason",
    },
  ],
  "02:27": [
    {
      timeFragment: "2.27am.",
      quote:
        "The moon didn't shine again until 2.27am. It was enough to show Wallander that he was positioned some distance below the tree.",
      book: "One Step Behind",
      author: "Henning Mankell",
    },
  ],
  "02:28": [
    {
      timeFragment: "2.28am",
      quote:
        "2.28am: Ran out of sheep and began counting other farmyard animals.",
      book: "Mr Commitment",
      author: "Mike Gayle",
    },
  ],
  "02:30": [
    {
      timeFragment: "2:30 a.m.",
      quote:
        '"Get into the mood, Shirl!" Lew said. "The party\'s already started! Yippee! You dressed for a party, Harry?" "Yep. Something told me to put on dinner clothes when I went to bed tonight." "I\'m in mufti myself: white gloves and matching tennis shoes. But I\'m sorry to report that Jo is still in her Dr. Dentons. What\'re you wearing, Shirl?" "My old drum majorette\'s outfit. The one I wore to the State Finals. Listen, we can\'t tie up the phones like this." "Why not?" said Harry. "Who\'s going to call at 2:30 a.m. with a better idea? Yippee, to quote Lew, we\'re having a party! What\'re we serving, Lew?" "Beer, I guess. Haven\'t got any wine, have we, Jo?" "Just for cooking."',
      book: "The Night People ",
      author: "Jack Finney",
    },
    {
      timeFragment: "half past two",
      quote:
        "At about half past two she had been woken by the creak of footsteps out on the stairs. At first she had been frightened.",
      book: "The Little Stranger",
      author: "Sarah Waters",
    },
    {
      timeFragment: "230",
      quote:
        "Inc, I tried to pull her off about 0230, and there was this fucking\u2026 sound.",
      book: "Infinite Jest ",
      author: "David Foster Wallace",
    },
    {
      timeFragment: "2.30am",
      quote:
        "It is 2.30am and I am tight. As a tick, as a lord, as a newt. Must write this down before the sublime memories fade and blur.",
      book: "Any Human Heart ",
      author: "William Boyd",
    },
  ],
  "02:31": [
    {
      timeFragment: "2.31am.",
      quote:
        "And then I woke up because there were people shouting in the flat and it was 2.31am. And one of the people was Father and I was frightened.",
      book: "The Curious Incident Of The Dog In The Night-Time",
      author: "Mark Haddon",
    },
  ],
  "02:32": [
    {
      timeFragment: "2.32 a.m.",
      quote:
        "The last guests departed at 2.32 a.m., two hours and two minutes after the scheduled completion time.",
      book: "The Rosie Project",
      author: "Graeme Simsion",
    },
  ],
  "02:33": [
    {
      timeFragment: "Two-thirty-three",
      quote:
        "But it wasn't going on! It was two-thirty-four, well. Two-thirty-three and nothing had happened. Suppose he got a room call, or the elevator night-bell rang, now.",
      book: "A Swell-looking Babe",
      author: "Jim Thompson",
    },
  ],
  "02:34": [
    {
      timeFragment: "two-thirty-four",
      quote:
        "But it wasn't going on! It was two-thirty-four, well. Two-thirty-three and nothing had happened. Suppose he got a room call, or the elevator night-bell rang, now.",
      book: "A Swell-looking Babe",
      author: "Jim Thompson",
    },
  ],
  "02:35": [
    {
      timeFragment: "2.35",
      quote:
        "For what happened at 2.35 we have the testimony of the priest, a young, intelligent, and well-educated person; of Patrolman William J. Monohan of the Central Station, an officer of the highest reliability who had paused at that part of his beat to inspect the crowd.",
      book: "The Haunter of the Dark",
      author: "HP Lovecraft",
    },
  ],
  "02:36": [
    {
      timeFragment: "2.36am",
      quote:
        "It was about 2.36am when a provost colonel arrived to arrest me. At 2.36 1/2 I remembered the big insulating gauntlets. But even had I remembered before, what could I have done?",
      book: "The Ipcress File",
      author: "Len Deighton",
    },
  ],
  "02:37": [
    {
      timeFragment: "Thirty-seven minutes past two",
      quote:
        "June 13, 1990. Thirty-seven minutes past two in the morning. And sixteen seconds.",
      book: "The Stand",
      author: "Stephen King",
    },
  ],
  "02:43": [
    {
      timeFragment: "2:43",
      quote:
        "She settled back beside him. 'It's 2:43:12am, Case. Got a readout chipped into my optic nerve.'",
      book: "Neuromancer",
      author: "William Gibson",
    },
  ],
  "02:45": [
    {
      timeFragment: "0245h",
      quote: "0245h., Ennet House, the hours that are truly wee.",
      book: "Infinite Jest ",
      author: "David Foster Wallace",
    },
  ],
  "02:46": [
    {
      timeFragment: "2.46am.",
      quote:
        "2.46am. The chain drive whirred and the paper target slid down the darkened range, ducking in and out of shafts of yellow incandescent light. At the firing station, a figure waited in the shadows. As the target passed the twenty-five-foot mark, the man opened fire: eight shots-rapid, unhesitating.",
      book: "Patriots",
      author: "Steve Sohmer",
    },
    {
      timeFragment: "Two forty-six",
      quote:
        "Vicki shoved her glasses at her face and peered at the clock. Two forty-six. 'I don't have time for this' she muttered, sttling back against the pillows, heart still slamming against her ribs.",
      book: "Blood Lines ",
      author: "Tanya Huff",
    },
  ],
  "02:47": [
    {
      timeFragment: "2.47am.",
      quote:
        "The glowing numbers read 2.47am. Mois\u00e9s sighs and turns back to the bathroom door. Finally, the doorknob turns and Conchita comes back to bed. She resumes her place next to Mois\u00e9s. Relieved, he pulls her close.",
      book: "The Book of Want",
      author: "Daniel A. Olivas",
    },
  ],
  "02:55": [
    {
      timeFragment: "2:55 a.m.",
      quote:
        "\"It's the way the world will end, Harry. Recorded cocktail music nuclear-powered to play on for centuries after all life has been destroyed. Selections from 'No, No, Nanette,' throughout eternity. That do you for 2:55 a.m.?\"",
      book: "The Night People ",
      author: "Jack Finney",
    },
    {
      timeFragment: "2.55am.",
      quote:
        "Time to go: 2.55am. Two-handed, Cec lifted his peak cap from the chair.",
      book: "Downriver",
      author: "Iain Sinclair",
    },
  ],
  "02:56": [
    {
      timeFragment: "2:56",
      quote:
        "It was 2:56 when the shovel touched the coffin. We all heard the sound and looked at each other.",
      book: "Extremely Loud and Incredibly Close ",
      author: "Jonathan Safran Foer",
    },
  ],
  "02:59": [
    {
      timeFragment: "2.59",
      quote:
        '"I remembered arriving in this room at 2.59 one night. I remembered the sergeant who called me names: mostly Anglo-Saxon monosyllabic four-letter ones with an odd "Commie" thrown in for syntax."',
      book: "The Ipcress File",
      author: "Len Deighton",
    },
  ],
  "03:00": [
    {
      timeFragment: "three o'clock",
      quote: '"She died this morning, very early, about three o\'clock."',
      book: "The Voyage Out ",
      author: "Virginia Woolf",
    },
    {
      timeFragment: "Three in the morn.",
      quote:
        "Three a.m. That's our reward. Three in the morn. The soul's midnight. The tide goes out, the soul ebbs. And a train arrives at an hour of despair. Why?",
      book: "Something Wicked This Way Comes ",
      author: "Ray Bradbury",
    },
    {
      timeFragment: "three o'clock",
      quote:
        "According to her watch it was shortly after three o'clock, and according to everything else it was night-time.",
      book: "The Long Dark Tea-time of the Soul ",
      author: "Douglas Adams",
    },
    {
      timeFragment: "At three am",
      quote:
        "At three am I was walking the floor and listening to Katchaturian working in a tractor factory. He called it a violin concerto. I called it a loose fan belt and the hell with it.",
      book: "The Long Goodbye ",
      author: "Raymond Chandler",
    },
    {
      timeFragment: "three o' clock in the morning",
      quote:
        "At three o' clock in the morning Eurydice is bound to come into it. After all, why did I sit here like a telegrapher at a lost outpost if not to receive messages from everywhere about the lost Eurydice who was never mine to begin with but whom I lamented and sought continually both professionally and amateurishly. This is not a digression. Where I am at three o' clock in the morning - and by now every hour is three o' clock in the morning - there are no digressions, it's all one thing.",
      book: "The Medusa Frequency ",
      author: "Russell Hoban",
    },
    {
      timeFragment: "at three o'clock in the morning",
      quote:
        "But at three o'clock in the morning, a forgotten package has the same tragic importance as a death sentence, and the cure doesn't work -- and in a real dark night of the soul it is always three o'clock in the morning, day after day.",
      book: "The Crack-Up ",
      author: "F. Scott Fitzgerald",
    },
    {
      timeFragment: "three o'clock",
      quote:
        "Early mornings, my mother is about, drifting in her pale nightie, making herself a cup of tea in the kitchen. Water begins to boil in the kettle; it starts as a private, secluded sound, pure as rain, and grows to a steady, solipsistic bubbling. Not till she has had one cup of tea, so weak that it has a colour accidentally golden, can she begin her day. She is an insomniac. Her nights are wide-eyed and excited with worry. Even at three o'clock in the morning one might hear her eating a Bain Marie biscuit in the kitchen.",
      book: "Afternoon Raag ",
      author: "Amit Chaudhuri",
    },
    {
      timeFragment: "3 a.m.",
      quote:
        "I slam the phone down but it misses the base. I hit the clock instead, which flashes 3 a.m.",
      book: "Songs from the Other Side of the Wall ",
      author: "Dan Holloway",
    },
    {
      timeFragment: "3 o'clock",
      quote:
        "In a real dark night of the soul it is always 3 o'clock in the morning.",
      book: "The Crack-Up ",
      author: "F. Scott Fitzgerald",
    },
    {
      timeFragment: "at three A.M.",
      quote:
        "It was six untroubled days later \u2013 the best days at the camp so far, lavish July light thickly spread everywhere, six masterpiece mountain midsummer days, one replicating the other \u2013 that someone stumbled jerkily, as if his ankles were in chains, to the Comanche cabin's bathroom at three A.M.",
      book: "Nemesis",
      author: "Philip Roth",
    },
    {
      timeFragment: "three in the morning",
      quote:
        "It was three in the morning when his taxi stopped by giant mounds of snow outside his hotel. He had not eaten in hours.",
      book: "Solar ",
      author: "Ian McEwan",
    },
    {
      timeFragment: "three o'clock at night",
      quote:
        "Once I saw a figure I shall never forget. It was three o'clock at night, as I was going home from Blacky as usual; it was a short-cut for me, and there would be nobody in the street at this time of night, I thought, especially not in this frightful cold.",
      book: "I'm Not Stiller",
      author: "Max Frisch",
    },
    {
      timeFragment: "Three AM.",
      quote:
        "Roused from her sleep, Freya Gaines groped for the switch of the vidphone; groggily she found it and snapped it on. 'Lo,' she mumbled, wondering what time it was. She made out the luminous dial of the clock beside the bed. Three AM. Good grief.",
      book: "The Game Players of Titan ",
      author: "Philip K Dick",
    },
    {
      timeFragment: "300",
      quote:
        "Schact clears his mouth and swallows mightily. 'Tavis can't even regrout tile in the locker room without calling a Community meeting or appointing a committee. The Regrouting Committee's been dragging along since may. Suddenly they're pulling secret 0300 milk-switches? It doesn't ring true, Jim.",
      book: "Infinite Jest ",
      author: "David Foster Wallace",
    },
    {
      timeFragment: "Three in the morning",
      quote:
        "Three in the morning, thought Charles Halloway, seated on the edge of his bed. Why did the train come at that hour? For, he thought, it's a special hour. Women never wake then, do they? They sleep the sleep of babes and children. But men in middle age? They know that hour well.",
      book: "Something Wicked This Way Comes ",
      author: "Ray Bradbury",
    },
    {
      timeFragment: "three",
      quote:
        '"What\'s the time?" said the man, eyeing George up and down with evident suspicion; "why, if you listen you will hear it strike." George listened, and a neighbouring clock immediately obliged. "But it\'s only gone three!" said George in an injured tone, when it had finished."',
      book: "Three Men in a Boat ",
      author: "Jerome K Jerome",
    },
    {
      timeFragment: "3:00 a.m.",
      quote: "When Sophie awoke, it was 3:00 a.m.",
      book: "Desperate Characters ",
      author: "Paula Fox",
    },
    {
      timeFragment: "three o'clock",
      quote:
        "You hearken, Missy. It's three o'clock in the morning and I've got all my faculties as well as ever I had in my life. I know all my property and where the money's put out. And I've made everything ready to change my mind, and do as I like at the last. Do you hear, Missy? I've got my faculties.\"",
      book: "Middlemarch ",
      author: "George Eliot",
    },
  ],
  "03:01": [
    {
      timeFragment: "about three o'clock",
      quote:
        "It was now about three o'clock in the morning and Francis Macomber, who had been asleep a little while after he had stopped thinking about the lion, wakened and then slept again.",
      book: "The Short Happy Life of Francis Macomber ",
      author: "Ernest Hemingway",
    },
  ],
  "03:04": [
    {
      timeFragment: "3.04",
      quote:
        "\u2026his back-up alarm clock rang. He looked at his front-line clock on the bedside table and noted that it had stopped at 3.04. So, you couldn't even rely on alarm clocks.",
      book: "The Return of the Dancing Master",
      author: "Henning Mankell",
    },
  ],
  "03:05": [
    {
      timeFragment: "3:05 a.m.",
      quote:
        "On the Sunday before Christmas she awoke at 3:05 a.m. and though: Thirty-six hours. Four hours later she got up thinking: Thirty-two hours. Late in the day she took Alfred to the street-association Christmas party at Dale and Honey Driblett's, sat him down safely with Kirby Root, and proceeded to remind all her neighbors that her favorite grandson, who'd been looking forward all year to a Christmas in St. Jude, was arriving tomorrow afternoon.",
      book: "The Corrections ",
      author: "Jonathan Franzen",
    },
  ],
  "03:07": [
    {
      timeFragment: "3.07am",
      quote:
        "Wayne late-logged in: 3.07am -the late-late show. He parked. He dumped his milk can. He yawned, he stretched. He scratched.",
      book: "The Cold Six Thousand",
      author: "James Ellroy",
    },
  ],
  "03:10": [
    {
      timeFragment: "ten-past three",
      quote:
        "I think my credit card was in there too. I wrote down the words credit card and said that if they wouldn't let me cancel them I'd demand that they registered the loss so you couldn't be charge for anything beyond the time of my calling them up. I looked at the clock. It was ten-past three.",
      book: "The Whole Story and Other Stories ",
      author: "Ali Smith",
    },
    {
      timeFragment: "ten past three",
      quote: "Love again; wanking at ten past three",
      book: "Love Again",
      author: "Philip Larkin",
    },
  ],
  "03:14": [
    {
      timeFragment: "3.14",
      quote:
        "Since he had told the girl that it had to end, he'd been waking up every morning at 3.14, without fail. Every morning his eyes would flick open, alert, and the red numerals on his electric alarm clock would read 3.14.",
      book: "The Slap",
      author: "Christos Tsiolkas",
    },
  ],
  "03:15": [
    {
      timeFragment: "3:15",
      quote:
        "Above the door of Room 69 the clock ticked on at 3:15. The motion was accelerating. What had once been the gymnasium was now a small room, seven feet wide, a tight, almost perfect cube.",
      book: "Manhole 69",
      author: "JG Ballard",
    },
  ],
  "03:17": [
    {
      timeFragment: "3:17",
      quote:
        'The two of us sat there, listening\u2014Boris more intently than me. "Who\'s that with him then?" I said. "Some whore." He listened for a moment, brow furrowed, his profile sharp in the moonlight, and then lay back down. "Two of them." I rolled over, and checked my iPod. It was 3:17 in the morning.',
      book: "The Goldfinch",
      author: "Donna Tartt",
    },
    {
      timeFragment: "3.17 a.m.",
      quote:
        "He turned to the monitors again and flicked through the screens, each one able to display eight different camera mountings, giving Kurt 192 different still lives of Green Oaks at 3.17 a.m. this March night.",
      book: "What Was Lost ",
      author: "Catherine O'Flynn",
    },
  ],
  "03:19": [
    {
      timeFragment: "3.19 A.M.",
      quote:
        "The time stamp on Navidson's camcorder indicates that it is exactly 3.19 A.M.",
      book: "House of Leaves",
      author: "Mark Z Danielewski",
    },
  ],
  "03:20": [
    {
      timeFragment: "3.20am",
      quote:
        "Prabath Kumara, 16. 17th November 1989. At 3.20am from the home of a friend.",
      book: "Anil's Ghost",
      author: "Michael Ondaatje",
    },
  ],
  "03:21": [
    {
      timeFragment: "twenty-one minutes past three",
      quote:
        "Next, he remembered that the morrow of Christmas would be the twenty-seventh day of the moon, and that consequently high water would be at twenty-one minutes past three, the half-ebb at a quarter past seven, low water at thirty-three minutes past nine, and half flood at thirty-nine minutes past twelve.",
      book: "The Toilers of the Sea",
      author: "Victor Hugo",
    },
  ],
  "03:25": [
    {
      timeFragment: "3:25 a.m.",
      quote:
        "It was 3:25 a.m. A strange thrill, to think I was the only Mulvaney awake in the house.",
      book: "We Were the Mulvaneys ",
      author: "Joyce Carol Oates",
    },
  ],
  "03:28": [
    {
      timeFragment: "3.28",
      quote:
        "Now somebody was running past his room. A door slammed. That foreign language again. What the devil was going on? he switched on his light and peered at his watch. 3.28. He got out of bed.",
      book: "Dreams of Leaving",
      author: "Rupert Thomson",
    },
  ],
  "03:30": [
    {
      timeFragment: "Half past Three",
      quote:
        "At Half past Three, a single Bird Unto a silent Sky Propounded but a single term Of cautious melody.",
      book: "At Half past Three, a single Bird",
      author: "Emily Dickinson",
    },
    {
      timeFragment: "half-past three A.M.",
      quote:
        "At half-past three A.M. he lost one illusion: officers sent to reconnoitre informed him that the enemy was making no movement.",
      book: "Les Miserables ",
      author: "Victor Hugo",
    },
    {
      timeFragment: "3:30 A.M.",
      quote:
        "It's 3:30 A.M. in Mrs. Ralph's finally quiet house when Garp decides to clean the kitchen, to kill the time until dawn. Familiar with a housewife's tasks, Garp fills the sink and starts to wash the dishes.",
      book: "The World According to Garp ",
      author: "John Irving",
    },
    {
      timeFragment: "three-thirty",
      quote:
        '"Let\'s go to sleep, I say. "Look at what time it is." The clock radio is right there beside the bed. Anyone can see it says three-thirty."',
      book: "Whoever Was Using This Bed",
      author: "Raymond Carver",
    },
    {
      timeFragment: "three thirty",
      quote:
        "Now, look. I am not going to call Dr. McGrath at three thirty in the morning to ask if it's all right for my son to eat worms. That's flat.",
      book: "How to Eat Fried Worms ",
      author: "Thomas Rockwell",
    },
  ],
  "03:33": [
    {
      timeFragment: "3:33",
      quote:
        "A draft whistled in around the kitchen window frame and I shivered. The digital clock on Perkus's stove read 3:33.",
      book: "Chronic City",
      author: "Jonathan Lethem",
    },
  ],
  "03:34": [
    {
      timeFragment: "3:34 am.",
      quote:
        "It was 3:34 am. and he was wide-awake. He'd heard the phone ring and the sound of his uncle's voice.",
      book: "Always Florence",
      author: "Muriel Jensen",
    },
  ],
  "03:35": [
    {
      timeFragment: "3.35 a.m.",
      quote:
        "He could just see the hands of the alarm clock in the darkness: 3.35 a.m. He adjusted his pillow and shut his eyes.",
      book: "The Dogs of Riga",
      author: "Henning Mankell",
    },
  ],
  "03:36": [
    {
      timeFragment: "3:36 a.m.",
      quote:
        "As I near Deadhorse, it's 3:36 a.m. and seventeen below. Tall, sodium vapor lights spill on the road and there are no trees, only machines, mechanical shadows. There isn't even a church. It tells you everything.",
      book: "Zoopraxis",
      author: "Richard C Matheson",
    },
  ],
  "03:37": [
    {
      timeFragment: "thirty-seven A.M.",
      quote:
        "It was three thirty-seven A.M., and for once Maggie was asleep. She had got to be a pretty good sleeper in the last few months. Clyde was prouder of this fact than anything.",
      book: "The Cobweb",
      author: "Stephen Bury",
    },
  ],
  "03:38": [
    {
      timeFragment: "3.38am",
      quote:
        "At 3.38am, it began to snow in Bowling Green, Kentucky. The geese circling the city flew back to the park, landed, and hunkered down to sit it out on their island in the lake.",
      book: "Just Like the Ones we Used to Know",
      author: "Connie Willis",
    },
  ],
  "03:39": [
    {
      timeFragment: "3.39am.",
      quote:
        "23 October 1893 3.39am. Upon further thought, I feel it necessary to explain that exile into the Master's workshop is not an unpleasant fate. It is not simply some bare-walled cellar devoid of stimulation - quite the opposite.",
      book: "The Clockwork man",
      author: "William Jablonsky",
    },
  ],
  "03:40": [
    {
      timeFragment: "three forty",
      quote:
        "His bedside clock shows three forty. He has no idea what he's doing out of bed: he has no need to relieve himself, nor is he disturbed by a dream or some element of the day before, or even by the state of the world.",
      book: "Saturday",
      author: "Ian McEwan",
    },
  ],
  "03:41": [
    {
      timeFragment: "3.41am.",
      quote:
        "The alarm clock said 3.41am. He sat up. Why was the alarm clock slow? He picked up the alarm clock and adjusted the hands to show the same time as his wristwatch: 3.44am",
      book: "The Dogs of Riga",
      author: "Henning Mankell",
    },
  ],
  "03:42": [
    {
      timeFragment: "3:42",
      quote:
        '"We are due in Yellow Sky at 3:42," he said, looking tenderly into her eyes. "Oh, are we?" she said, as if she had not been aware of it. To evince surprise at her husband\'s statement was part of her wifely amiability."',
      book: "Bride Comes to Yellow Sky",
      author: "Stephen Crane",
    },
  ],
  "03:43": [
    {
      timeFragment: "3.43am.",
      quote:
        "The clock says 3.43am. The thermometer says it's a chilly fourteen degrees Fahrenheit. The weatherman says the cold spell will last until Thursday, so bundle up and bundle up some more. There are icicles barring the window of the bat cave.",
      book: "Ghostwritten",
      author: "David Mitchell",
    },
  ],
  "03:44": [
    {
      timeFragment: "3.44 a.m.",
      quote:
        "It was dark. After she had switched the light on and been to the toilet, she checked her watch: 3.44 a.m. She undressed, put the cat out the door and returned to the twin bed.",
      book: "Liver: Leberkn\u00f6del",
      author: "Will Self",
    },
  ],
  "03:45": [
    {
      timeFragment: "quarter to four",
      quote:
        "LORD CAVERSHAM: Well, sir! what are you doing here? Wasting your life as usual! You should be in bed, sir. You keep too late hours! I heard of you the other night at Lady Rufford's dancing till four o' clock in the morning! LORD GORING: Only a quarter to four, father.",
      book: "An Ideal Husband",
      author: "Oscar Wilde",
    },
  ],
  "03:47": [
    {
      timeFragment: "3:47",
      quote:
        "I stayed awake until 3:47. That was the last time I looked at my watch before I fell asleep. It has a luminous face and lights up if you press a button so I could read it in the dark. I was cold and I was frightened Father might come out and find me. But I felt safer in the garden because I was hidden.",
      book: "The Curious Incident Of The Dog In The Night-Time",
      author: "Mark Haddon",
    },
  ],
  "03:49": [
    {
      timeFragment: "3.49",
      quote:
        '"It was 3.49 when he hit me because of the two hundred times I had said, "I don\'t know." He hit me a lot after that."',
      book: "The Ipcress File",
      author: "Len Deighton",
    },
  ],
  "03:50": [
    {
      timeFragment: "ten or five to four",
      quote:
        "She had used her cell phone to leave several messages on the answering machine in Sao Paulo of the young dentist of the previous evening, whose name was Fernando. The first was recorded at ten or five to four in the morning. I'm never going to forget you ... I'm sure we'll meet again somewhere.",
      book: "A Death in Brazil: A Book of Omissions",
      author: "Peter Robb",
    },
  ],
  "03:51": [
    {
      timeFragment: "3:51",
      quote:
        "I lacked the will and physical strength to get out of bed and move through the dark house, clutching walls and stair rails. To feel my way, reinhabit my body, re-enter the world. Sweat trickled down my ribs. The digital reading on the clock-radio was 3:51. Always odd numbered at times like this. What does it mean? Is death odd-numbered?",
      book: "White Noise ",
      author: "Don DeLillo",
    },
    {
      timeFragment: "3:51",
      quote:
        "The digital reading on the clock-radio was 3:51. Always odd numbers at times like this. What does it mean? Is death odd-numbered?",
      book: "White Noise",
      author: "Don DeLillo",
    },
  ],
  "03:54": [
    {
      timeFragment: "3.54 a.m.",
      quote:
        "The charter flight from Florida touched down at Aldergrove minutes earlier, at 3.54 a.m.",
      book: "The More a Man Has, the More a Man Wants",
      author: "Paul Muldoon",
    },
  ],
  "03:55": [
    {
      timeFragment: "3.55 a.m.",
      quote:
        "Here in the cavernous basement at 3.55 a.m., in a single pool of light, is Theo Perowne.",
      book: "Saturday",
      author: "Ian McEwan",
    },
  ],
  "03:57": [
    {
      timeFragment: "Nearly four",
      quote:
        '"Certain facts were apparent: dark; cold; thundering boots; quilts; pillow; light under the door \u2013 the materials of reality - but I could not pin these materials down in time. And the raw materials of reality without that glue of time are materials adrift and reality is as meaningless as the balsa parts of a model airplane scattered to the wind...I am in my old room, yes, in the dark, certainly, and it is cold, obviously, but what time is it? "Nearly four, son." But I mean what time?"',
      book: "Sometimes a Great Notion ",
      author: "Ken Kesey",
    },
  ],
  "03:58": [
    {
      timeFragment: "two minutes to four",
      quote:
        "The ancient house was deserted, the crumbling garage padlocked, and one was just able to discern - by peering through a crack in the bubbling sun on the window - the face of a clock on the opposite wall. The clock had stopped at two minutes to four early in the morning, or who could tell, it may have been earlier still, yesterday in the afternoon, a couple of hours after Kaiser had left Kamaria for Bartica.",
      book: "Heartland",
      author: "Wilson Harris",
    },
    {
      timeFragment: "3:58",
      quote: "The clock atop the clubhouse reads 3:58.",
      book: "Underworld ",
      author: "Don Delillo",
    },
  ],
  "03:59": [
    {
      timeFragment: "Nearly four",
      quote:
        '"And the raw materials of reality without that glue of time are materials adrift and reality is as meaningless as the balsa parts of a model airplane scattered to the wind...I am in my old room, yes, in the dark, certainly, and it is cold, obviously, but what time is it? "Nearly four, son."',
      book: "Sometimes a Great Notion",
      author: "Ken Kesey",
    },
  ],
  "04:00": [
    {
      timeFragment: "four o'clock",
      quote:
        '"Nothing happened," he said wanly. "I waited, and about four o\'clock she came to the window and stood there for a minute and then turned out the light."',
      book: "The Great Gatsby ",
      author: "F. Scott Fitzgerald",
    },
    {
      timeFragment: "four am.",
      quote:
        '"I looked at the clock and it was (yes, you guessed it) four am. I should have taken comfort from the fact that approximately quarter of the Greenwich Mean Time world had just jolted awake also and were lying, staring miserably into the darkness, worrying ..."',
      book: "Watermelon ",
      author: "Marian Keyes",
    },
    {
      timeFragment: "4am",
      quote:
        "Suddenly, he started to cry. Curled up on the sofa he sobbed loudly. Michel looked at his watch; it was just after 4am. On the screen a wild cat had a rabbit in its mouth.",
      book: "Atomised ",
      author: "Michel Houellebecq",
    },
    {
      timeFragment: "Four o'clock",
      quote:
        "The Birds begun at Four o'clock\u2014 Their period for Dawn\u2014",
      book: "The Birds begun at Four o'clock ",
      author: "Emily Dickinson",
    },
    {
      timeFragment: "at four",
      quote:
        "The night before Albert Kessler arrived in Santa Teresa, at four in the morning, Sergio Gonzalez Rodriguez got a call from Azucena Esquivel Plata, reporter and PRI congresswoman.",
      book: "2666",
      author: "Roberto Bolano",
    },
    {
      timeFragment: "at four",
      quote:
        "Waking at four to soundless dark, I stare. In time the curtain-edges will grow light. Till then I see what's really always there: Unresting death, a whole day nearer now, Making all thought impossible but how And where and when I shall myself die.",
      book: "Aubade ",
      author: "Philip Larkin",
    },
    {
      timeFragment: "at four",
      quote:
        "When he noticed that the chefs from the grand hotels and restaurants - a picky, impatient bunch - tended to move around from seller to seller, buying apples here and broccoli there, he asked if he could have tea available for them. Tommy agreed, and the chefs, grateful for a hot drink at four in the morning, lingered and bought.",
      book: "The Tea Rose ",
      author: "Jennifer Donnelly",
    },
  ],
  "04:01": [
    {
      timeFragment: "just after 4am",
      quote:
        "Suddenly, he started to cry. Curled up on the sofa he sobbed loudly. Michel looked at his watch; it was just after 4am. On the screen a wild cat had a rabbit in its mouth.",
      book: "Atomised",
      author: "Michel Houellebecq",
    },
  ],
  "04:02": [
    {
      timeFragment: "4:02",
      quote:
        "I walked up and down the row. No one gave me a second look. Finally I sat down next to a man. He paid no attention. My watch said 4:02. Maybe he was late.",
      book: "The History of Love",
      author: "Nicole Krauss",
    },
  ],
  "04:03": [
    {
      timeFragment: "4:03 a.m.",
      quote:
        "It's 4:03 a.m. on a supremely cold January morning and I'm just getting home. I've been out dancing and I'm only half drunk but utterly exhausted.",
      book: "The Time Traveler's Wife",
      author: "Audrey Niffenegger",
    },
  ],
  "04:04": [
    {
      timeFragment: "Four minutes after four!",
      quote:
        "Four minutes after four! It's still very early and to get from here to there won't take me more than 15 minutes, even walking slowly. She told me around five o'clock. Wouldn't it be better to wait on the corner?",
      book: "Angel Hill",
      author: "Cirilo Villaverde",
    },
  ],
  "04:05": [
    {
      timeFragment: "4.05am.",
      quote:
        "Leaves were being blown against my window. It was 4.05am. The moon had shifted in the sky, glaring through a clotted mass of clouds like a candled egg.",
      book: "We Were the Mulvaneys",
      author: "Joyce Carol Oates",
    },
  ],
  "04:06": [
    {
      timeFragment: "4.06am",
      quote:
        "Dexter looked at Kate's note, then her face, then the clock. It was 4.06am, the night before they would go to the restaurant.",
      book: "The Expats",
      author: "Chris Pavone",
    },
  ],
  "04:07": [
    {
      timeFragment: "4.07am.",
      quote:
        "4.07am. Why am I standing? My shoulders feel cold and I'm shivering. I become aware that I'm standing in the middle of the room. I immediately look at the bedroom door. Closed, with no signs of a break-in. Why did I get up?",
      book: "Guarding Hanna: A Novel",
      author: "Miha Mazzini",
    },
  ],
  "04:08": [
    {
      timeFragment: "4:08 a.m.",
      quote:
        "It was at 4:08 a.m. beneath the cool metal of a jungle gym that all Andrew's dreams came true. He kissed his one true love and swore up and down that it would last forever to this exhausted companion throughout their long trek home.",
      book: "Dying in the Twilight of Summer",
      author: "Seth O'Connell",
    },
  ],
  "04:11": [
    {
      timeFragment: "eleven minutes after four",
      quote:
        "The next morning I awaken at exactly eleven minutes after four, having slept straight through my normal middle-of-the-night insomniac waking at three.",
      book: "The Stuff of Life",
      author: "Karen Karbo",
    },
  ],
  "04:12": [
    {
      timeFragment: "four-twelve",
      quote:
        "Finally, she signalled with her light that she'd made it to the top. I signalled back, then shined the light downward to see how far the water had risen. I couldn't make out a thing. My watch read four-twelve in the morning. Not yet dawn. The morning papers still not delivered, trains not yet running, citizens of the surface world fast asleep, oblivious to all this. I pulled the rope taut with both hands, took a deep breath, then slowly began my climb.",
      book: "Hard Boiled Wonderland and the End of the World ",
      author: "Haruki Murakami",
    },
    {
      timeFragment: "4:12",
      quote:
        "Karen felt the bed move beneath Harry's weight. Lying on her side she opened her eyes to see digital numbers in the dark, 4:12 in pale green. Behind her Harry continued to move, settling in. She watched the numbers change to 4:13.",
      book: "Get Shorty",
      author: "Elmore Leonard",
    },
  ],
  "04:13": [
    {
      timeFragment: "4:13",
      quote:
        "Karen felt the bed move beneath Harry's weight. Lying on her side she opened her eyes to see digital numbers in the dark, 4:12 in pale green. Behind her Harry continued to move, settling in. She watched the numbers change to 4:13.",
      book: "Get Shorty",
      author: "Elmore Leonard",
    },
  ],
  "04:14": [
    {
      timeFragment: "4:14 a.m.",
      quote:
        "At 4:14 a.m., the two men returned to the Jeep. After the passenger replaced the cans in the back of the Jeep, the driver backed out of the driveway and headed east. The last images found on the film appeared to be flames or smoke.",
      book: "A Real Nightmare",
      author: "David H Swendsen",
    },
  ],
  "04:15": [
    {
      timeFragment: "four-fifteen",
      quote:
        "Alice wants to warn her that a defect runs in the family, like flat feet or diabetes: they're all in danger of ending up alone by their own stubborn choice. The ugly kitchen clock says four-fifteen.",
      book: "Pigs in Heaven",
      author: "Barbara Kingsolver",
    },
  ],
  "04:16": [
    {
      timeFragment: "Four-sixteen",
      quote:
        "I stooped to pick up my watch from the floor. Four-sixteen. Another hour until dawn. I went to the telephone and dialled my own number. It'd been a long time since I'd called home, so I had to struggle to remember the number. I let it ring fifteen times; no answer. I hung up, dialled again, and let it ring another fifteen times. Nobody.",
      book: "Hard Boiled Wonderland and the End of the World ",
      author: "Haruki Murakami",
    },
    {
      timeFragment: "four sixteen",
      quote:
        "They pulled into the visitor's carpark at four sixteen am. He knew it was four sixteen because the entrance to the maternity unit sported a digital clock beneath the signage.",
      book: "Freaks in the City: Book Two of the Freaks Series",
      author: "Maree Anderson",
    },
  ],
  "04:17": [
    {
      timeFragment: "4.17am",
      quote:
        "He awoke at 4.17am in a sweat. He had been dreaming of Africa again, and then the dream had continued in the U.S. when he was a young man. But Inbata had been there, watching him.",
      book: "The Vile",
      author: "Douglas Phinney",
    },
  ],
  "04:18": [
    {
      timeFragment: "four-eighteen",
      quote:
        '"I grabbed the alarm clock, threw it on my lap, and slapped the red and black buttons with both hands. The ringing didn\'t stop. The telephone! The clock read four-eighteen. It was dark outside. Four-eighteen a.m. I got out of bed and picked up the receiver. "Hello?"',
      book: "Hard Boiled Wonderland and the End of the World ",
      author: "Haruki Murakami",
    },
  ],
  "04:22": [
    {
      timeFragment: "4.22",
      quote:
        "He hurt me to the point where I wanted to tell him something. My watch said 4.22 now. It had stopped. It was smashed.",
      book: "The Ipcress File",
      author: "Len Deighton",
    },
  ],
  "04:23": [
    {
      timeFragment: "4:23",
      quote:
        "4:23, Monday morning, Iceland Square. A number of people in the vicinity of Bjornsongatan are awakened by loud screams.",
      book: "Let The Right One In",
      author: "John Ajvide Lindqvist",
    },
    {
      timeFragment: "04:23",
      quote: "Her chip pulsed the time. 04:23:04. It had been a long day.",
      book: "Neuromancer ",
      author: "William Gibson",
    },
  ],
  "04:25": [
    {
      timeFragment: "twenty-five minutes past four",
      quote:
        "As I dressed I glanced at my watch. It was no wonder that no one was stirring. It was twenty-five minutes past four.",
      book: "The Adventures of Sherlock Holmes",
      author: "Sir Arthur Conan Doyle",
    },
  ],
  "04:30": [
    {
      timeFragment: "four thirty",
      quote:
        "At the end of a relationship, it is the one who is not in love who makes the tender speeches. I was overwhelmed by a sense of betrayal, betrayal because a union in which I had invested so much had been declared bankrupt without my feeling it to be so. Chloe had not given it a chance, I argued with myself, knowing the hopelessness of these inner courts announcing hollow verdicts at four thirty in the morning.",
      book: "Essays on Love ",
      author: "Alain de Botton",
    },
    {
      timeFragment: "430",
      quote:
        "Hester Thrale undulates in in a false fox jacket at 2330 as usual even though she has to be up at like 0430 for the breakfast shift at the Provident Nursing Home and sometimes eats breakfast with Gately, both their faces nodding perilously close to their Frosted Flakes.",
      book: "Infinite Jest",
      author: "David Foster Wallace",
    },
    {
      timeFragment: "430",
      quote:
        "Tonight Clenette H. and the deeply whacked out Yolanda W. come back in from Footprints around 2315 in purple skirts and purple lipstick and ironed hair, tottering on heels and telling each other what a wicked time they just had. Hester Thrale undulates in in a false fox jacket at 2330 as usual even though she has to be up at like 0430 for the breakfast shift at the Provident Nursing Home and sometimes eats breakfast with Gately, both their faces nodding perilously close to their Frosted Flakes.",
      book: "Infinite Jest ",
      author: "David Foster Wallace",
    },
  ],
  "04:31": [
    {
      timeFragment: "4:31",
      quote:
        "An earthquake hit Los Angeles at 4:31 this morning and the images began arriving via CNN right away.",
      book: "Microserfs",
      author: "Douglas Coupland",
    },
  ],
  "04:32": [
    {
      timeFragment: "4:32 a.m.",
      quote:
        "On his first day of kindergarten, Peter Houghton woke up at 4:32 a.m. He padded into his parents' room and asked if it was time yet to take the school bus.",
      book: "Nineteen Minutes",
      author: "Jodi Picoult",
    },
  ],
  "04:35": [
    {
      timeFragment: "4:35",
      quote:
        "No manner of exhaustion can keep a child asleep much later than six a.m. on Christmas Day. Colby awoke at 4:35.",
      book: "Dreams and Shadows",
      author: "C Robert Cargill",
    },
  ],
  "04:36": [
    {
      timeFragment: "4:36",
      quote:
        "At 4:36 that morning, alone in my hotel room, it had been a much better scene. Spencer had blanched, confounded by the inescapable logic of my accusation. A few drops of perspiration had formed on his upper lip. A tiny vein had started to throb in his temple.",
      book: "The Brass Go-Between",
      author: "Ross Thomas",
    },
  ],
  "04:38": [
    {
      timeFragment: "4.38 a.m.",
      quote:
        "At 4.38 a.m. as the sun is coming up over Gorley Woods, I hear a strange rustling in the grass beside me. I peer closely but can see nothing.",
      book: "The Queue",
      author: "Jonathan Barrow",
    },
  ],
  "04:40": [
    {
      timeFragment: "4.40am",
      quote:
        "I settled into a daily routine. Wake up at 4.40am, shower, get on the train north by ten after five.",
      book: "Bossypants",
      author: "Tina Fey",
    },
  ],
  "04:41": [
    {
      timeFragment: "4:41",
      quote:
        "At 4:41 Crane's voice crackled through the walkie-talkie as if he'd read their thoughts of mutiny. \"Everyone into the elevator. Now!\" Only moments before the call he and C.J. had finished what they hoped would be a successful diversion.",
      book: "Damaged Goods: A Novel",
      author: "Roland S. Jefferson",
    },
  ],
  "04:43": [
    {
      timeFragment: "four forty-three",
      quote:
        "The time is four forty-three in the mornin an it's almost light oot there.",
      book: "Pyschoraag",
      author: "Suhayl Saadi",
    },
  ],
  "04:45": [
    {
      timeFragment: "4:45 a.m.",
      quote:
        "He lies still in the darkness and listens. His wife's breathing at his side is so faint that he can scarcely hear it. One of these mornings she'll be lying dead beside me and I won't even notice, he thinks. Or maybe it'll be me. Daybreak will reveal that one of us has been left alone. He checks the clock on the table next to the bed. The hands glow and register 4:45 a.m.",
      book: "Faceless Killers ",
      author: "Henning Mankell",
    },
    {
      timeFragment: "4:45 a.m.",
      quote:
        "His wife's breathing at his side is so faint that he can scarcely hear it. One of these mornings she'll be lying dead beside me and I won't even notice, he thinks. Or maybe it'll be me. Daybreak will reveal that one of us has been left alone. He checks the clock on the table next to the bed. The hands glow and register 4:45 a.m.",
      book: "Faceless Killers",
      author: "Henning Mankell",
    },
  ],
  "04:46": [
    {
      timeFragment: "four-forty-six",
      quote:
        '"The phone rang again at four-forty-six."Hello," I said. "Hello," came a woman\'s voice. "Sorry about the time before. There\'s a disturbance in the sound field. Sometimes the sound goes away." "The sound goes away?" "Yes," she said. "The sound field\'s slipping. Can you hear me?" "Loud and clear," I said. It was the granddaughter of that kooky old scientist who\'d given me the unicorn skull. The girl in the pink suit."',
      book: "Hard Boiled Wonderland and the End of the World ",
      author: "Haruki Murakami",
    },
  ],
  "04:48": [
    {
      timeFragment: "4:48",
      quote:
        "At 4:48 the happy hour when clarity visits warm darkness which soaks my eyes I know no sin",
      book: "4:48 Psychosis",
      author: "Sarah Kane",
    },
  ],
  "04:50": [
    {
      timeFragment: "ten minutes to five",
      quote:
        "Even the hands of his watch and the hands of all the thirteen clocks were frozen. They had all frozen at the same time, on a snowy night, seven years before, and after that it was always ten minutes to five in the castle.",
      book: "The 13 Clocks",
      author: "James Thurber",
    },
  ],
  "04:54": [
    {
      timeFragment: "Six minutes to five",
      quote:
        "Six minutes to five. Six minutes to go. Suddenly I felt quite clearheaded. There was an unexpected light in the cell; the boundaries were drawn, the roles well defined. The time of doubt and questioning and uncertainty was over.",
      book: "Dawn: A Novel",
      author: "Elie Wiesel",
    },
  ],
  "04:55": [
    {
      timeFragment: "4:55",
      quote:
        "4:55 - Mank holding phone. Turns to Caddell - 'Who is this?' Caddell: 'Jim.' (shrugs) 'I think he's our man in Cincinnati.'",
      book: "Fear and Loathing: On the Campaign Trail '72",
      author: "Hunter S. Thompson",
    },
  ],
  "04:57": [
    {
      timeFragment: "few minutes before five",
      quote:
        "The second said the same thing a few minutes before five, and mentioned eternity... I'm sure I'll meet you in the other world. Four minutes later she left a last, fleeting message: My love. Fernando. It's Suzana. Then, it seemed, she had shot herself.",
      book: "A Death in Brazil: A Book of Omissions",
      author: "Peter Robb",
    },
  ],
  "04:58": [
    {
      timeFragment: "Two minutes to five",
      quote:
        "He wants to look death in the face. Two minutes to five. I took a handkerchief out of my pocket, but John Dawson ordered me to put it back. An Englishman dies with his eyes open. He wants to look death in the face.",
      book: "Dawn: A Novel",
      author: "Elie Wiesel",
    },
  ],
  "04:59": [
    {
      timeFragment: "459",
      quote:
        "The whole place smells like death no matter what the fuck you do. Gately gets to the shelter at 0459.9h and just shuts his head off as if his head had a control switch.",
      book: "Infinite Jest ",
      author: "David Foster Wallace",
    },
  ],
  "05:00": [
    {
      timeFragment: "Five o'clock",
      quote:
        "Five o'clock had hardly struck on the morning of the 19th of January, when Bessie brought a candle into my closet and found me already up and nearly dressed.",
      book: "Jane Eyre ",
      author: "Charlotte Bront\u00eb",
    },
    {
      timeFragment: "Five o'clock",
      quote:
        "Five o'clock had hardly struck on the morning of the 19th of January, when Bessie brought a candle into my closet and found me already up and nearly dressed. I had risen half-an-hour before her entrance, and had washed my face, and put on my clothes by the light of a half-moon just setting, whose rays streamed through the narrow window near my crib.",
      book: "Jane Eyre ",
      author: "Charlotte Bront\u00eb",
    },
    {
      timeFragment: "5 a.m.",
      quote:
        "It was in the township of Dunwich, in a large and hardly inhabited farmhouse set against a hillside 4 miles from the village and a mile and a half from any other dwelling, that Wilbur Whately was born at 5 a.m. on Sunday, 2 February, 1913. The date was recalled because it was Candlemas, which people in Dunwich curiously observe under another name...",
      book: "The Dunwich Horror ",
      author: "H.P. Lovecraft",
    },
    {
      timeFragment: "five o'clock",
      quote:
        "Just after five o'clock on this chill September morning, the fishmonger's cart, containing Kirsten and Emilia and such possessions as they have been able to assemble in the time allowed to them, is driven out of the gates of Rosenborg?",
      book: "Music and Silence ",
      author: "Rose Tremain",
    },
    {
      timeFragment: "Five!",
      quote:
        '"The cold eye of the Duke was dazzled by the gleaming of a thousand jewels that sparkled on the table. His ears were filled with chiming as the clocks began to strike. "One!" said Hark. "Two!" cried Zorn of Zorna. "Three!" the Duke\'s voice almost whispered. \'Four!" sighed Saralinda. "Five!" the Golux crowed, and pointed at the table. "The task is done, the terms are met," he said."',
      book: "The 13 Clocks ",
      author: "James Thurber",
    },
    {
      timeFragment: "five o'clock",
      quote:
        "The day came slow, till five o'clock. Then sprang before the hills. Like hindered rubies, or the light. A sudden musket spills",
      book: "The Day Came Slow, Till Five O' Clock",
      author: "Emily Dickinson",
    },
    {
      timeFragment: "5 a.m.",
      quote:
        "There are worse things than having behaved foolishly in public. There are worse things than these miniature betrayals, committed or endured or suspected; there are worse things than not being able to sleep for thinking about them. It is 5 a.m. All the worse things come stalking in and stand icily about the bed looking worse and worse and worse.",
      book: "Things ",
      author: "Fleur Adcock",
    },
    {
      timeFragment: "five o'clock",
      quote:
        '"What causes young people to "come out," but the noble ambition of matrimony? What sends them trooping to watering-places? What keeps them dancing till five o\'clock in the morning through a whole mortal season?"',
      book: "Vanity Fair ",
      author: "William Makepeace Thackeray",
    },
  ],
  "05:01": [
    {
      timeFragment: "one minute past five",
      quote:
        '"Oh yes. His clocks were set at one minute past five, four minutes past five and seven minutes past five. That was the combination number of a safe, 515457. The safe was concealed behind a reproduction of the Mona Lisa. Inside the safe," continued Poirot, with distaste, "were the Crown Jewels of the Russian Royal Family."',
      book: "The clocks ",
      author: "Agatha Christie",
    },
    {
      timeFragment: "after five o'clock",
      quote:
        "Just after five o'clock on this chill September morning, the fishmonger's cart, containing Kirsten and Emilia and such possessions as they have been able to assemble in the time allowed to them, is driven out of the gates of Rosenborg?",
      book: "Music and Silence",
      author: "Rose Tremain",
    },
  ],
  "05:02": [
    {
      timeFragment: "5:02 a.m.",
      quote:
        "It was 5:02 a.m., December 14. In another fifty-eight minutes he would set sail for America. He did not want to leave his bride; he did not want to go.",
      book: "The Prize",
      author: "Brenda Joyce",
    },
  ],
  "05:03": [
    {
      timeFragment: "5:03 a.m.",
      quote:
        "It was 5:03 a.m. It didn't matter. She wasn't going to get back to sleep. She threw off her covers and, swearing at herself, Caleb and Mr. Griffin, she headed into the shower.",
      book: "Unhallowed ground",
      author: "Heather Graham",
    },
  ],
  "05:04": [
    {
      timeFragment: "four minutes past five",
      quote:
        '"Oh yes. His clocks were set at one minute past five, four minutes past five and seven minutes past five. That was the combination number of a safe, 515457. The safe was concealed behind a reproduction of the Mona Lisa. Inside the safe," continued Poirot, with distaste, "were the Crown Jewels of the Russian Royal Family."',
      book: "The clocks ",
      author: "Agatha Christie",
    },
    {
      timeFragment: "5.04 a.m.",
      quote:
        "5.04 a.m. on the substandard clock radio. Because why do people always say the day starts now? Really it starts in the middle of the night at a fraction of a second past midnight.",
      book: "The Accidental ",
      author: "Ali Smith",
    },
    {
      timeFragment: "four minutes past five",
      quote:
        '"Oh yes. His clocks were set at one minute past five, four minutes past five and seven minutes past five. That was the combination number of a safe, 515457. The safe was concealed behind a reproduction of the Mona Lisa. Inside the safe, continued Poirot, with distaste, "were the Crown Jewels of the Russian Royal Family."',
      book: "The Clocks",
      author: "Agatha Christie",
    },
  ],
  "05:05": [
    {
      timeFragment: "five past five",
      quote: "The baby, a boy, is born at five past five in the morning.",
      book: "The Namesake",
      author: "Jhumpa Lahiri",
    },
  ],
  "05:06": [
    {
      timeFragment: "5:06 a.m.",
      quote:
        "5:06 a.m. I wake up strangely energized, my stomach growling. Upstairs, the overstocked fridge offers me its bounty of sympathy food.",
      book: "This is Where I Leave you",
      author: "Jonathon Tropper",
    },
  ],
  "05:07": [
    {
      timeFragment: "seven minutes past five",
      quote:
        '"Oh yes. His clocks were set at one minute past five, four minutes past five and seven minutes past five. That was the combination number of a safe, 515457. The safe was concealed behind a reproduction of the Mona Lisa. Inside the safe," continued Poirot, with distaste, "were the Crown Jewels of the Russian Royal Family."',
      book: "The clocks ",
      author: "Agatha Christie",
    },
  ],
  "05:08": [
    {
      timeFragment: "5:08",
      quote:
        "Ambrose and I will marry at Fort McHenry at 5:08 EDST this coming Saturday, Rosh Hashanah!",
      book: "Letters",
      author: "John Barth",
    },
  ],
  "05:09": [
    {
      timeFragment: "5:09",
      quote:
        "The primal flush of triumph which had saturated the American's humor on this signal success, proved but fictive and transitory when inquiry of the station attendants educed the information that the two earliest trains to be obtained were the 5:09 to Dunkerque and the 5:37 for Ostend.",
      book: "The Black Bag",
      author: "Louis Joseph Vance",
    },
  ],
  "05:10": [
    {
      timeFragment: "Ten minutes past five",
      quote:
        '"Oh, my husband, I have done the deed which will relieve you of the wife whom you hate! I have taken the poison--all of it that was left in the paper packet, which was the first that I found. If this is not enough to kill me, I have more left in the bottle. Ten minutes past five. "You have just gone, after giving me my composing draught. My courage failed me at the sight of you. I thought to myself, \'If he look at me kindly, I will confess what I have done, and let him save my life.\' You never looked at me at all. You only looked at the medicine. I let you go without saying a word."',
      book: "The Law and the Lady ",
      author: "Wilkie Collins",
    },
    {
      timeFragment: "ten after five",
      quote:
        "I settled into a daily routine. Wake up at 4:40am, shower, get on the train north by ten after five.",
      book: "Bossypants",
      author: "Tina Fey",
    },
  ],
  "05:11": [
    {
      timeFragment: "eleven minutes past five",
      quote:
        "Today was Tuesday, the fifteenth of August; the sun had risen at eleven minutes past five this morning and would set at two minutes before seven this evening.",
      book: "The Hot Rock",
      author: "Donald E Westlake",
    },
  ],
  "05:12": [
    {
      timeFragment: "twelve minutes and six seconds past five o'clock",
      quote:
        "At twelve minutes and six seconds past five o'clock on the morning of April 18th, 1906, the San francisco peninsula began to shiver in the grip of an earthquake which, when its ultimate consequences are considered, was the most disastrous in the recorded history of the North American continent.",
      book: "Slummer's Paradise",
      author: "Herbert Asbury",
    },
  ],
  "05:13": [
    {
      timeFragment: "5:13 am.",
      quote:
        "Lying on my side in bed, I stared at my alarm clock until it became a blemish, its red hue glowing like a welcome sign beckoning me into the depths of hell's crimson-colored cavities. 5:13 am. To describe this Monday as a blue Monday was an understatement.",
      book: "Uptempo",
      author: "Nakia D Johnson",
    },
  ],
  "05:14": [
    {
      timeFragment: "5.14am",
      quote:
        "The time was 5.14am, a very strange time indeed for the sheriff to have seen what he claimed he saw as he made his early-morning rounds, first patrolling back and forth along the deserted, snowbound streets of Kingdom City before extending his vigilance northward, along County Road.",
      book: "Into the Web",
      author: "Thomas H Cook",
    },
  ],
  "05:15": [
    {
      timeFragment: "5:15 a.m.",
      quote:
        "By the first week of May, Ralph was waking up to birdsong at 5:15 a.m. He tried earplugs for a few nights, although he doubted from the outset that they would work. It wasn't the newly returned birds that were waking him up, nor the occasional delivery-truck backfire out on Harris Avenue. He had always been the sort of guy who could sleep in the middle of a brass marching bad, and he didn't think that had changed. What had changed was inside his head.",
      book: "Insomnia ",
      author: "Stephen King",
    },
    {
      timeFragment: "5:15",
      quote:
        "Weird conversation with Brown, a tired & confused old man who's been jerked out of bed at 5:15.",
      book: "Fear and Loathing: On the Campaign Trail '72",
      author: "Hunter S Thompson",
    },
  ],
  "05:16": [
    {
      timeFragment: "5:16",
      quote:
        "5:16 - Mank on phone to Secretary of State Brown: 'Mr Brown, we're profoundly disturbed about this situation in the 21st. We can't get a single result out of there.",
      book: "Fear and Loathing: On the Campaign Trail '72",
      author: "Hunter S Thompson",
    },
    {
      timeFragment: "5:16 a.m",
      quote:
        "She could go back to sleep. But typical and ironic, she is completely awake. It is completely light outside now; you can see for miles. Except there is nothing to see here; trees and fields and that kind of thing. 5:16 a.m on the substandard clock radio. She is really awake.",
      book: "The Accidental ",
      author: "Ali Smith",
    },
  ],
  "05:20": [
    {
      timeFragment: "five twenty",
      quote:
        "He saw on the floor his cigarette reduced to a long thin cylinder of ash: it had smoked itself. It was five twenty, dawn was breaking behind the shed of empty barrels, the thermometer pointed to 210 degrees.",
      book: "The Periodic Table",
      author: "Primo Levi",
    },
  ],
  "05:23": [
    {
      timeFragment: "5.23am",
      quote:
        "If I could count precisely to sixty between two passing orange minutes on her digital clock, starting at 5.23am and ending exactly as it melted into 5:24, then when she woke she would love me and not say this had been a terrible mistake.",
      book: "The Tragedy of Arthur",
      author: "Arthur Phillips",
    },
  ],
  "05:24": [
    {
      timeFragment: "5:24",
      quote:
        "If I could count precisely to sixty between two passing orange minutes on her digital clock, starting at 523am. and ending exactly as it melted into 5:24, then when she woke she would love me and not say this had been a terrible mistake.",
      book: "The Tragedy of Arthur",
      author: "Arthur Phillips",
    },
  ],
  "05:25": [
    {
      timeFragment: "5.25",
      quote:
        "George's train home from New Street leaves at 5.25. On the return journey, there are rarely schoolboys.",
      book: "Arthur and George",
      author: "Julian Barnes",
    },
  ],
  "05:26": [
    {
      timeFragment: "05:26",
      quote:
        "I think this is actually bump number 1,970. And the boy keeps plugging away at the same speed. There isn't a sound from them. Not a moan. Poor them. Poor me. I look at the clock. 05:26.",
      book: "101 Reykjavik",
      author: "Hallgr\u00edmur Helgason",
    },
  ],
  "05:28": [
    {
      timeFragment: "five-twenty-eight",
      quote:
        "I pulled into the Aoyama supermarket parking garage at five-twenty-eight. The sky to the east was getting light. I entered the store carrying my bag. Almost no one was in the place. A young clerk in a striped uniform sat reading a magazine; a woman of indeterminate age was buying a cartload of cans and instant food. I turned past the liquor display and went straight to the snack bar.",
      book: "Hard Boiled Wonderland and the End of the World ",
      author: "Haruki Murakami",
    },
  ],
  "05:30": [
    {
      timeFragment: "half-past five",
      quote:
        "Gideon has been most unlike Gideon. As Walter Eastman is preoccupied himself, he has not had time, or more to the point, inclination, to notice aberrant behaviour. For instance, it is half-past five in the summer morning. Young Chase's narrow bachelor bed has evidently been slept in, for it is rumpled in that barely disturbed way which can never be counterfeited. His jug's empty and there's grey water in the basin, cleanly boy. The window is open, admitting the salubrious sea-breeze. He doesn't smoke anyway. What an innocent room it is.",
      book: "An Insular Possession ",
      author: "Timothy Mo",
    },
    {
      timeFragment: "half-past five",
      quote:
        "It was by this time half-past five, and the sun was on the point of rising; but I found the kitchen still dark and silent. \u2026 The stillness of early morning slumbered everywhere .. the carriage horses stamped from time to time in their closed stables: all else was still.",
      book: "Jane Eyre ",
      author: "Charlotte Bront\u00eb",
    },
    {
      timeFragment: "five-thirty",
      quote:
        "On the day they were going to kill him, Santiago Nasar got up at five-thirty in the morning to wait for the boat the bishop was coming on.",
      book: "Chronicle of a Death Foretold ",
      author: "Gabriel Garc\u00eda M\u00e1rquez",
    },
  ],
  "05:31": [
    {
      timeFragment: "5:31",
      quote:
        "5:31 - Mank on phone to lawyer: 'Jesus, I think we gotta go in there and get those ballots! Impound 'em! Every damn one!'",
      book: "Fear and Loathing: On the Campaign Trail '72",
      author: "Hunter S Thompson",
    },
  ],
  "05:34": [
    {
      timeFragment: "Five-thirty-four",
      quote:
        "\"I asked \"What time is sunrise?\"' A second's silence while the crestfallen Bush absorbed his rebuke, and then another voice answered: 'Five-thirty-four, sir.'\"",
      book: "The Commodore",
      author: "C.S. Forester",
    },
  ],
  "05:35": [
    {
      timeFragment: "5:35",
      quote:
        "5:35 - All phones ringing now, the swing shift has shot the gap - now the others are waking up.",
      book: "Fear and Loathing: On the Campaign Trail '72",
      author: "Hunter S Thompson",
    },
    {
      timeFragment: "twenty-five before six",
      quote:
        "I squinted at the clock. 'It says twenty-five before six,' I said and rolled away from him.",
      book: "the dice man ",
      author: "Luke Rhinehart",
    },
  ],
  "05:37": [
    {
      timeFragment: "5:37",
      quote:
        "Richard glanced at the clock on the microwave - 5:37 - almost twelve hours, almost one half-day since he'd dialed 911.",
      book: "This Book Will Save Your Life",
      author: "AM Homes",
    },
  ],
  "05:38": [
    {
      timeFragment: "5.38 a.m.",
      quote:
        "Kovac,' said Johnny sleepily. It was very rare for the quantum computer and not Sol to wake him up. 'What's going on? What time is it?' 'Good morning, Johnny,' said the ship. 'It is 5.38 a.m.' 'What?' said Johnny. 'It's Saturday.' 'I told you he wouldn't like it,' said Sol, presumably to Kovac. 'It's hardly a matter of likes or dislikes,' said the computer. 'I have information I deem important enough to pass on at the earliest opportunity \u2013 whatever time it is.'",
      book: "Johnny Mackintosh: Battle for Earth ",
      author: "Keith Mansfield",
    },
  ],
  "05:40": [
    {
      timeFragment: "Twenty minutes to six",
      quote:
        "Twenty minutes to six. 'Rob's boys were already on the platform, barrows ready. The only thing that ever dared to be late around here was the train. Rob's boys were in fact Bill Bing, thirty, sucking a Woodbine, and Arthur, sixty, half dead.",
      book: "The Peculiar Memories of Thomas Penman",
      author: "Bruce Robinson",
    },
  ],
  "05:43": [
    {
      timeFragment: "5.43",
      quote:
        "5.43 - Mank on phone to 'Mary' in Washington; 'It now appears quite clear that we'll lead the state - without the 21st.'",
      book: "Fear and Loathing: On the Campaign Trail '72",
      author: "Hunter S. Thompson",
    },
  ],
  "05:45": [
    {
      timeFragment: "5:45",
      quote:
        "At 5:45 a power-transformer on a pole beside the abandoned Tracker Brothers' Truck Depot exploded in a flash of purple light, spraying twisted chunks of metal onto the shingled roof.",
      book: "IT",
      author: "Stephen King",
    },
  ],
  "05:46": [
    {
      timeFragment: "5.46am",
      quote:
        "Herbert could feel nothing. He wrote a legal-sounding phrase to the effect that the sentence had been carried out at 5.46am, adding, 'without a snag'. The burial party had cursed him quietly as they'd hacked at the thick roots and tight soil.",
      book: "A Whispered Name",
      author: "William Brodrick",
    },
  ],
  "05:52": [
    {
      timeFragment: "5.52am",
      quote:
        "At 5.52am paramedics from the St. Petersburg Fire Department and SunStar Medic One ambulance service responded to a medical emergency call at 12201 Ninth Street North, St. Petersburg, apartment 2210.",
      book: "Silent Witness",
      author: "Mark Fuhrman",
    },
  ],
  "05:55": [
    {
      timeFragment: "5.55am",
      quote:
        "It was 5.55am and raining hard when I pedalled up to the bike stand just outside the forecourt of the station and dashed inside. I raced past the bookstall, where all the placards of the Yorkshire Post (a morning paper) read 'York Horror', but also 'Terrific February Gales at Coast'.",
      book: "The Lost Luggage Porter",
      author: "Andrew Martin",
    },
  ],
  "05:58": [
    {
      timeFragment: "5.58 a.m.",
      quote: "Annika Giannini woke with a start. She saw that it was 5.58 a.m.",
      book: "The Girl who Kicked the Hornet's Nest",
      author: "Stieg Larsson",
    },
  ],
  "06:00": [
    {
      timeFragment: "six o'clock",
      quote:
        "What's the time?' I ask, and telling him so that he knows, 'My mother likes \"peace and quiet\" to sleep late on Saturday mornings.' 'She does, does she? It's six o'clock. I couldn't sleep,' he says wearily, like an afterthought, as if it's what he expects. 'Why are you up so early?' 'I woke up and needed my panda. I can't find him.' 'Where do you think he can be?' His face changes and he smiles again, bending down to look under the table and behind the curtain. But he isn't clowning or teasing. He's in earnest.",
      book: "The Saints ",
      author: "Patsy Hickman",
    },
    {
      timeFragment: "at six",
      quote:
        "But every morning, even if there's been a nighttime session and he has only slept two hours, he gets up at six and reads his paper while he drinks a strong cup of coffee. In this way Papa constructs himself every day.",
      book: "The Elegance of the Hedgehog ",
      author: "Muriel Barbery",
    },
    {
      timeFragment: "at six a.m.",
      quote:
        "I had risen half-an-hour before her entrance, and had washed my face, and put on my clothes by the light of a half-moon just setting, whose rays streamed through the narrow window near my crib. I was to leave Gateshead that day by a coach which passed the lodge gates at six a.m.",
      book: "Jane Eyre",
      author: "Charlotte Bront\u00eb",
    },
    {
      timeFragment: "six ",
      quote:
        "Lying awake in my attic room, i hear a clock strike six downstairs. It was fairly light and people were beginning to walk up and down the stairs...- i heard the clock strike eight downstairs before i rose and got dressed... I looked up - the clock tower of our saviour's showed ten.",
      book: "Hunger ",
      author: "Knut Hamsun",
    },
    {
      timeFragment: "six o'clock",
      quote:
        "On the 15th of September 1840, about six o'clock in the morning, the Ville-de-Montereau, ready to depart, pouring out great whirls of smoke by the quai Saint-Bernard.",
      book: "L'Education sentimentale ",
      author: "Gustave Flaubert",
    },
    {
      timeFragment: "6.00 A.M.",
      quote: "Rise from bed ............... . 6.00 A.M.",
      book: "The Great Gatsby ",
      author: "F. Scott Fitzgerald",
    },
    {
      timeFragment: "six ",
      quote:
        "The ball went on for a long time, until six in the morning; all were exhausted and wishing they had been in bed for at least three hours; but to leave early was like proclaiming the party a failure and offending the host and hostess who had taken such a lot of trouble, poor dears.",
      book: "The Leopard ",
      author: "Giuseppe Tomasi di Lampedusa",
    },
  ],
  "06:02": [
    {
      timeFragment: "6.02",
      quote:
        "Bimingham New Street 5.25. Walsall 5.55. This train does not stop at Birchills, for reasons George has never been able to ascertain. Then it is Bloxwich 6.02, Wyrley & Churchbridge 6.09. At 6.10 he nods to Mr Merriman the stationmaster.",
      book: "Arthur and George",
      author: "Julian Barnes",
    },
  ],
  "06:05": [
    {
      timeFragment: "five minutes past six",
      quote:
        "A second man went in and found the shop empty, as he thought, at five minutes past six. That puts the time at between 5:30 and 6:05.",
      book: "The ABC Murders",
      author: "Agatha Christie",
    },
  ],
  "06:06": [
    {
      timeFragment: "6:06",
      quote:
        "At 6:06, every toilet on Merit Street suddenly exploded in a geyser of shit and raw sewage as some unimaginable reversal took place in the pipes which fed the holding tanks of the new waste-treatment plant in the Barrens.",
      book: "IT",
      author: "Stephen King",
    },
  ],
  "06:08": [
    {
      timeFragment: "six oh-eight a.m.",
      quote:
        "At six oh-eight a.m. two men wearing ragged trench coats approached the Casino. The shorter of the men burst into flames.",
      book: "Magic Bleeds",
      author: "Ilona Andrews",
    },
  ],
  "06:10": [
    {
      timeFragment: "ten past six",
      quote:
        "The bus left the station at ten past six - and she sat proud, like an accustomed traveller, apart from her father, John Henry, and Berenice. But after a while a serious doubt came in her, which even the answers of the bus-driver could not quite satisfy.",
      book: "The Member of the Wedding",
      author: "Carson McCullers",
    },
  ],
  "06:13": [
    {
      timeFragment: "06:13",
      quote:
        "It's 06:13 .........Ma says I ought to be wrapped up in Rug already, Old Nick might possibly come.",
      book: "Room ",
      author: "Emma Donoghue",
    },
  ],
  "06:15": [
    {
      timeFragment: "6.15",
      quote: "Dumbbell exercise and wall-scaling ..... . 6.15-6.30",
      book: "The Great Gatsby ",
      author: "F. Scott Fitzgerald",
    },
    {
      timeFragment: "quarter past six",
      quote:
        "Father expected his shaving-water to be ready at a quarter past six. Just seven minutes late, Dorothy took the can upstairs and knocked at her father's door.",
      book: "A Clergyman's Daughter",
      author: "George Orwell",
    },
    {
      timeFragment: "6.15 am.",
      quote:
        "It was 6.15 am. Just starting to get light. A small knot of older teenagers were leaning against a nearby wall. They looked as though they had been out all night.Two of the guys stared at us. Their eyes hard and threatening.",
      book: "Girl Missing",
      author: "Sophie McKenzie",
    },
    {
      timeFragment: "6.15 am.",
      quote:
        "It was 6.15 am. Just starting to get light. A small knot of older teenagers were leaning against a nearby wall. They looked as though they had been out all night.Two of the guys stared at us. Their eyes hard and threatening.",
      book: "Girl Missing ",
      author: "Sophie McKenzie",
    },
  ],
  "06:17": [
    {
      timeFragment: "six-seventeen",
      quote:
        "Dizzy, come on.' He turned slowly, coaxing the animal down on to the pillow. The clock read six-seventeen. A second cat, Miles, purred on contentedly from the patch in the covers where Resnick's legs had made a deep V.",
      book: "Lonely Hearts",
      author: "John Harvey",
    },
  ],
  "06:19": [
    {
      timeFragment: "6.19 am",
      quote:
        "6.19 am, 8th June 2004, the jet of your pupil set in the gold of your eye.",
      book: "Venus",
      author: "Carol Ann Duffy",
    },
  ],
  "06:20": [
    {
      timeFragment: "6:20 a.m.",
      quote:
        "It was 6:20 a.m., and my parents and I were standing, stunned and haf-awake, in the parking lot of a Howard Johnson's in Iowa.",
      book: "Soon I Will Be Invincible",
      author: "Austin Grossman",
    },
  ],
  "06:25": [
    {
      timeFragment: "6.25",
      quote:
        "Simon is happy to travel scum class when he's on his own and even sometimes deliberately aims for the 6.25. But today the .25 is delayed to 6.44.",
      book: "The Deaths",
      author: "Mark Lawson",
    },
    {
      timeFragment: "Six-twenty-five",
      quote:
        "\"Still, it's your consciousness that's created it. Not somethin' just anyone could do. Others could be wanderin' around forever in who-knows-what contradictory chaos of a world. You're different. You seem t'be the immortal type.\" \"When's the turnover into that world going to take place?\" asked the chubby girl. The Professor looked at his watch. I looked at my watch. Six-twenty-five. Well past daybreak. Morning papers delivered. \"According t'my estimates, in another twenty-nine hours and thirty-five minutes,\" said the Professor. \"Plus or minus forty-five minutes. I set it at twelve noon for easy reference. Noon tomorrow.\"",
      book: "Hard Boiled Wonderland and the End of the World ",
      author: "Haruki Murakami",
    },
  ],
  "06:27": [
    {
      timeFragment: "06:27",
      quote:
        "06:27:52 by the chip in her optic nerve; Case had been following her progress through Villa Straylight for over an hour, letting the endorphin analogue she'd taken blot out his hangover.",
      book: "Neuromancer ",
      author: "William Gibson",
    },
    {
      timeFragment: "0627 hours",
      quote:
        "Early in the morning, late in the century, Cricklewood Broadway. At 0627 hours on January 1, 1975, Alfred Archibald Jones was dressed in corduroy and sat in a fume-filled Cavalier Musketeer Estate, facedown on the steering wheel, hoping the judgment would not be too heavy upon him.",
      book: "White Teeth ",
      author: "Zadie Smith",
    },
  ],
  "06:29": [
    {
      timeFragment: "a minute short of six-thirty",
      quote:
        "I sat up. There was a rug over me. I threw that off and got my feet on the floor. I scowled at a clock. The clock said a minute short of six-thirty.",
      book: "The Big Sleep",
      author: "Raymond Chandler",
    },
  ],
  "06:30": [
    {
      timeFragment: "6.30 am.",
      quote:
        "Inside now MJ ordered. She pushed the three of us into the hotel room, thern shut the soor. I glanced at the clock by the bed. 6.30 am. Why were they waking Mum and Dad up this early?",
      book: "Girl Missing ",
      author: "Sophie McKenzie",
    },
    {
      timeFragment: "six-thirty",
      quote:
        '"Daniel and the FBI men listened to the sounds of his mother waking up his father. Daniel still held the door-knob. He was ready to close the door the second he was told to."What time is it?" said his father in a drugged voice. "Oh my God, it\'s six-thirty," his mother said."',
      book: "The Book of Daniel",
      author: "E.L. Doctorow",
    },
    {
      timeFragment: "six-thirty",
      quote:
        '"It was six-thirty. When the baby\'s cry came, they could not pick it out, and Sam, eagerly thrusting his face amongst their ears, said, "Listen, there, there, that\'s the new baby." He was red with delight and success."',
      book: "The Man Who Loved Children ",
      author: "Christina Stead",
    },
    {
      timeFragment: "six-thirty",
      quote:
        "It was very cold sitting in the truck and after a while he got out and walked around and flailed at himself with his arms and stamped his boots. Then he got back in the truck. The bar clock said six-thirty...By eight-thirty he'd decided that it that was it would take to make the cab arrive then that's what he would do and he started the engine.",
      book: "Cities of the Plain",
      author: "Cormac McCarthy",
    },
    {
      timeFragment: "half-past six",
      quote:
        "Nervously she jumped up and listened; the house itself was as still as ever; the footsteps had retreated. Through her wide-open window the brilliant rays of the morning sun were flooding her room with light. She looked up at the clock; it was half-past six\u2014too early for any of the household to be already astir.",
      book: "The Scarlet Pimpernel ",
      author: "Baroness Orczy",
    },
    {
      timeFragment: "six-thirty",
      quote:
        "Six-thirty was clearly a preposterous time and he, the client, obviously hadn't meant it seriously. A civilised six-thirty for twelve noon was almost certainly what he had in mind, and if he wanted to cut up rough about it, Dirk would have no option but to start handing out some serious statistics. Nobody got murdered before lunch. But nobody. People weren't up to it. You needed a good lunch to get both the blood-sugar and blood-lust levels up. Dirk had the figures to prove it.",
      book: "The Long Dark Tea-time of the Soul ",
      author: "Douglas Adams",
    },
    {
      timeFragment: "6.30",
      quote:
        "Sometimes they were hooded carts, sometimes they were just open carts, with planks for seats, on which sat twelve cloaked and bonneted women, six a side, squeezed together, for the interminable journey. As late as 1914 I knew the carrier of Croydon-cum-Clopton, twelve miles from Cambridge; his cart started at 6.30 in the morning and got back at about ten at night. Though he was not old, he could neither read nor write; but he took commissions all along the road - a packet of needles for Mrs. This, and a new teapot for Mrs. That - and delivered them all correctly on the way back.",
      book: "Period Piece ",
      author: "Gwen Raverat",
    },
  ],
  "06:32": [
    {
      timeFragment: "twenty-eight minutes to seven",
      quote:
        "The familiar radium numerals on my left wrist confirmed the clock tower. It was twenty-eight minutes to seven. I seemed to be filling a set of loud maroon pajamas which were certainly not mine. My vis-a-vis was wearing a little number in yellow.",
      book: "Too Like the Lightning",
      author: "Dana Chambers",
    },
  ],
  "06:33": [
    {
      timeFragment: "6.33 a.m.",
      quote:
        "Woke 6.33 a.m. Last session with Anderson. He made it plain he's seen enough of me, and from now on I'm better alone. To sleep 8:00? (These count-downs terrify me.) He paused, then added: Goodbye, Eniwetok.",
      book: "The Voices of Time ",
      author: "JG Ballard",
    },
  ],
  "06:35": [
    {
      timeFragment: "twenty-five minutes to seven",
      quote:
        "My watch lay on the dressing-table close by; glancing at it, I saw that the time was twenty-five minutes to seven. I had been told that the family breakfasted at nine, so I had nearly two-and-a-half hours of leisure. Of course, I would go out, and enjoy the freshness of the morning.",
      book: "Ravensdene Court",
      author: "J.S. Fletcher",
    },
  ],
  "06:36": [
    {
      timeFragment: "6:36",
      quote:
        "Kaldren pursues me like luminescent shadow. He has chalked up on the gateway '96,688,365,498,702'. Should confuse the mail man. Woke 9:05. To sleep 6:36.",
      book: "The Voices of Time ",
      author: "JG Ballard",
    },
  ],
  "06:37": [
    {
      timeFragment: "6.37am",
      quote:
        "The dashboard clock said 6.37am Town frowned, and checked his wristwatch, which blinked that it was 1.58pm. Great, he thought. I was either up on that tree for eight hours, or for minus a minute.",
      book: "American Gods",
      author: "Neil Gaiman",
    },
  ],
  "06:38": [
    {
      timeFragment: "6.38am.",
      quote:
        "The clock on the dashboard said it was 6.38am. He left the keys in the car, and walked toward the tree.",
      book: "American Gods",
      author: "Neil Gaiman",
    },
  ],
  "06:40": [
    {
      timeFragment: "twenty to seven",
      quote:
        "At eleven o'clock the phone rang, and still the figure did not respond, any more than it has responded when the phone had rung at twenty-five to seven in the morning, and again at twenty to seven",
      book: "The Long Dark Tea-Time of the Soul",
      author: "Douglas Adams",
    },
  ],
  "06:43": [
    {
      timeFragment: "6.43am.",
      quote:
        "To London on the 6.43am. Jessica is back from her holiday. Things are looking up, she called me Chris, instead of Minister, when we talked on the phone this afternoon.",
      book: "A View From the Foothills",
      author: "Chris Mullin",
    },
  ],
  "06:44": [
    {
      timeFragment: "6.44",
      quote:
        "Simon is happy to travel scum class when he's on his own and even sometimes deliberately aims for the 6.25. But today the .25 is delayed to 6.44.",
      book: "The Deaths",
      author: "Mark Lawson",
    },
  ],
  "06:45": [
    {
      timeFragment: "quarter to seven",
      quote:
        "As the clock pointed to a quarter to seven, the dog woke and shook himself. After waiting in vain for the footman, who was accustomed to let him out, the animal wandered restlessly from one closed door to another on the ground floor; and, returning to his mat in great perplexity, appealed to the sleeping family, with a long and melancholy howl.'",
      book: "No Name ",
      author: "Wilkie Collins",
    },
    {
      timeFragment: "quarter to seven",
      quote:
        '"He was still hurriedly thinking all this through, unable to decide to get out of the bed, when the clock struck quarter to seven. There was a cautious knock at the door near his head. "Gregor", somebody called - it was his mother - "it\'s quarter to seven. Didn\'t you want to go somewhere?"',
      book: "Metamorphosis",
      author: "Franz Kafka",
    },
  ],
  "06:46": [
    {
      timeFragment: "one minute after the quarter to seven",
      quote:
        "At one minute after the quarter to seven I heard the rattle of the cans outside. I opened the front door, and there was my man, singling out my cans from a bunch he carried and whistling through his teeth.",
      book: "The Thirty-Nine Steps",
      author: "John Buchan",
    },
    {
      timeFragment: "one minute after the quarter to seven",
      quote:
        "Then I hung about in the hall waiting for the milkman. That was the worst part of the business, for I was fairly choking to get out of doors. Six-thirty passed, then six-forty, but still he did not come. The fool had chosen this day of all days to be late. At one minute after the quarter to seven I heard the rattle of the cans outside. I opened the front door, and there was my man, singling out my cans from a bunch he carried and whistling through his teeth. He jumped a bit at the sight of me.",
      book: "The Thirty-Nine Steps ",
      author: "John Buchan",
    },
  ],
  "06:49": [
    {
      timeFragment: "6:49",
      quote:
        "Night ends, 6:49. Meet in the coffee shop at 7:30; press conference at 10:00.",
      book: "Fear and Loathing: On the Campaign Trail '72",
      author: "Hunter S. Thompson",
    },
  ],
  "06:50": [
    {
      timeFragment: "six-fifty",
      quote:
        "Will, my fianc\u00e9, was coming from Boston on the six-fifty train - the dawn train, the only train that still stopped in the small Ohio city where I lived.",
      book: "Pretty Ice",
      author: "Mary Robison",
    },
  ],
  "06:55": [
    {
      timeFragment: "6:55 am",
      quote:
        "At 6:55 am Lisa parked and took the lift from the frozen underground car park up to level 1 of Green Oaks Shopping Centre.",
      book: "What was Lost",
      author: "Catherine O'Flynn",
    },
  ],
  "06:59": [
    {
      timeFragment: "6.59 a.m.",
      quote:
        '"It was 6.59 a.m. on Maundy Thursday as Blomkvist and Berger let themselves into the "Millennium" offices."',
      book: "The Girl who Played with Fire",
      author: "Stieg Larsson",
    },
  ],
  "07:00": [
    {
      timeFragment: "seven o'clock",
      quote:
        '"Seven o\'clock, already", he said to himself when the clock struck again, "seven o\'clock, and there\'s still a fog like this."',
      book: "Metamorphosis ",
      author: "Franz Kafka",
    },
    {
      timeFragment: "seven o'clock",
      quote:
        "At seven o'clock in the morning, Rubashov was awakened by a bugle, but he did not get up. Soon he heard sounds in the corridor. He imagined that someone was to be tortured, and he dreaded hearing the first screams of pain. When the footsteps reached his own section, he saw through the eye hole that guards were serving breakfast. Rubashov did not receive any breakfast because he had reported himself ill. He began to pace up and down the cell, six and a half steps to the window, six and a half steps back.",
      book: "Darkness at Noon ",
      author: "Arthur Koestler",
    },
    {
      timeFragment: "at seven",
      quote:
        "I had left directions that I was to be called at seven; for it was plain that I must see Wemmick before seeing any one else, and equally plain that this was a case in which his Walworth sentiments, only, could be taken. It was a relief to get out of the room where the night had been so miserable, and I needed no second knocking at the door to startle me from my uneasy bed.",
      book: "Great Expectations",
      author: "Charles Dickens",
    },
    {
      timeFragment: "seven o'clock",
      quote:
        "She locked herself in, made no reply to my bonjour through the door; she was up at seven o'clock, the samovar was taken in to her from the kitchen.",
      book: "Crime and Punishment ",
      author: "Fyodor Dostoyevsky",
    },
  ],
  "07:02": [
    {
      timeFragment: "07:02",
      quote:
        "07:02:18 One and a half hours. 'Case,' she said, 'I wanna favour.'",
      book: "Neuromancer",
      author: "William Gibson",
    },
  ],
  "07:03": [
    {
      timeFragment: "7:03am",
      quote:
        "7:03am General Tanz woke up as though aroused by a mental alarm-clock.",
      book: "The Night of the Generals",
      author: "Hans Hellmut Kirst",
    },
  ],
  "07:04": [
    {
      timeFragment: "7:04 p.m.",
      quote:
        "Sunday evening at almost the same hour (to be precise, at about 7:04 p.m.) she rings the front door bell at the home of Walter Moeding, Crime Commissioner, who is at that moment engaged, for professional rather than private reasons, in disguising himself as a sheikh.",
      book: "The Lost Honour of Katharina Blum",
      author: "Heinrich B\u00f6ll",
    },
  ],
  "07:05": [
    {
      timeFragment: "five minutes after seven o'clock",
      quote:
        "He really couldn't believe that the old woman who'd phoned him last night would show up this morning, as she'd said she would. He decided he'd wait until five minutes after seven o'clock, and then he'd call in, take the day off, and make every effort in the book to locate someone reliable.",
      book: "Where I'm Calling From ",
      author: "Raymond Carver",
    },
    {
      timeFragment: "five after seven",
      quote:
        "Outside my window the sky hung low and gray. It looked like snow, which added to my malaise. The clock read five after seven. I punched the remote control and watched the morning news as I lay in bed.",
      book: "Dance Dance Dance",
      author: "Haruki Murakami",
    },
    {
      timeFragment: "7:05 A.M.",
      quote:
        "Ryan missed the dawn. He boarded a TWA 747 that left Dulles on time, at 7:05 A.M. The sky was overcast, and when the aircraft burst through the cloud layer into sunlight, Ryan did something he had never done before. For the first time in his life, Jack Ryan fell asleep on an airplane.",
      book: "The Hunt for Red October ",
      author: "Tom Clancy",
    },
  ],
  "07:06": [
    {
      timeFragment: "six minutes past seven",
      quote:
        "So far so good. There followed a little passage of time when we stood by the duty desk, drinking coffee and studiously not mentioning what we were all thinking and hoping: that Percy was late, that maybe Percy wasn't going to show up at all. Considering the hostile reviews he'd gotten on the way he'd handled the electrocution, that seemed at least possible. But Percy subscribed to that old axiom about how you should get right back on the horse that had thrown you, because here he came through the door at six minutes past seven, resplendent in his blue uniform with his sidearm on one hip and his hickory stick in its ridiculous custom-made holster on the other.",
      book: "The Green Mile ",
      author: "Stephen King",
    },
    {
      timeFragment: "six minutes past seven",
      quote:
        "Percy subscribed to that old axiom about how you should get right back on the horse that had thrown you, because here he came through the door at six minutes past seven, resplendent in his blue uniform with his sidearm on one hip and his hickory stick in its ridiculous custom-made holster on the other.",
      book: "The Green Mile",
      author: "Stephen King",
    },
  ],
  "07:08": [
    {
      timeFragment: "between eight and nine minutes after seven o'clock",
      quote:
        "Reacher had no watch but he figured when he saw Gregory it must have been between eight and nine minutes after seven o'clock.",
      book: "The Hard Way",
      author: "Lee Child",
    },
  ],
  "07:09": [
    {
      timeFragment: "seven-nine",
      quote:
        "In the living room the voice-clock sang, Tick-tock, seven o'clock, time to get up, time to get up, seven o 'clock! as if it were afraid that nobody would. The morning house lay empty. The clock ticked on, repeating and repeating its sounds into the emptiness. Seven-nine, breakfast time, seven-nine!",
      book: "There Will Come Soft Rains ",
      author: "Ray Bradbury",
    },
    {
      timeFragment: "seven-nine",
      quote: "Seven-nine, breakfast time, seven-nine!",
      book: "There Will Come Soft Rains",
      author: "Ray Bradbury",
    },
  ],
  "07:10": [
    {
      timeFragment: "7.10",
      quote:
        "A search in Bradshaw informed me that a train left St Pancras at 7.10, which would land me at any Galloway station in the late afternoon.",
      book: "The Thirty-Nine Steps",
      author: "John Buchan",
    },
    {
      timeFragment: "7:10",
      quote:
        "There were many others waiting to execute the same operation, so she would have to move fast, elbow her way to the front so that she emerged first. The time was 7:10 in the morning. The manoeuvre would start at 7:12. She looked apprehensively at the giant clock at the railway station.",
      book: "The Fourth Passenger ",
      author: "Mini Nair",
    },
  ],
  "07:12": [
    {
      timeFragment: "7:12",
      quote:
        "He taught me that if I had to meet someone for an appointment, I must refuse to follow the 'stupid human habit' of arbitrarily choosing a time based on fifteen-minute intervals. 'Never meet people at 7:45 or 6:30, Jasper, but pick times like 7:12 and 8:03!'",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "07:13": [
    {
      timeFragment: "seven-thirteen",
      quote:
        "It was all the more surprising and indeed alarming a little later, said Austerlitz, when I looked out of the corridor window of my carriage just before the train left at seven-thirteen, to find it dawning upon me with perfect certainty that I had seen the pattern of glass and steel roof above the platforms before.",
      book: "Austerlitz",
      author: "WG Sebald",
    },
  ],
  "07:14": [
    {
      timeFragment: "7.14",
      quote:
        "At 7.14 Harry knew he was alive. He knew that because the pain could be felt in every nerve fibre.",
      book: "The Redeemer",
      author: "Jo Nesbo",
    },
  ],
  "07:15": [
    {
      timeFragment: "7:15 A.M.",
      quote:
        "At 7:15 A.M., January 25th, we started flying northwestward under McTighe's pilotage with ten men, seven dogs, a sledge, a fuel and food supply, and other items including the plane's wireless outfit.",
      book: "At the Mountains of Madness ",
      author: "H.P. Lovecraft",
    },
    {
      timeFragment: "7.15",
      quote:
        "Gough again knocked on Mr and Mrs Kent's bedroom door. This time it was opened - Mary Kent had got out of bed and put on her dressing gown, having just checked her husband's watch: it was 7.15. A confused conversation ensued, in which each woman seemed to assume Saville was with the other.",
      book: "The Suspicions of Mr Whicher",
      author: "Kate Summerscale",
    },
    {
      timeFragment: "7.15",
      quote:
        "Gough again knocked on Mr and Mrs Kent's bedroom door. This time it was opened - Mary Kent had got out of bed and put on her dressing gown, having just checked her husband's watch: it was 7.15. A confused conversation ensued, in which each woman seemed to assume Saville was with the other.",
      book: "The Suspicions of Mr Whicher ",
      author: "Kate Summerscale",
    },
    {
      timeFragment: "quarter-past seven",
      quote:
        "It was early in April in the year '83 that I woke one morning to find Sherlock Holmes standing, fully dressed, by the side of my bed. He was a late riser, as a rule, and as the clock on the mantelpiece showed me that it was only a quarter-past seven, I blinked up at him in some surprise, and perhaps just a little resentment, for I was myself regular in my habits.",
      book: "The Adventure of the Speckled Band ",
      author: "Arthur Conan Doyle",
    },
  ],
  "07:17": [
    {
      timeFragment: "7.17am",
      quote:
        "As of 7.17am local time on 30 June 1908, Padzhitnoff had been working for nearly a year as a contract employee of the Okhrana, receiving five hundred rubles a month, a sum which hovered at the exorbitant end of spy-budget outlays for those years.",
      book: "Against the Day",
      author: "Thomas Pynchon",
    },
  ],
  "07:19": [
    {
      timeFragment: "7.19am",
      quote:
        "I opened the sunroof and turned up the CD player volume to combat fatigue, and at 7.19am on Saturday, with the caffeine still running all around my brain, Jackson Browne and I pulled into Moree.",
      book: "The Rosie Project",
      author: "Graeme Simsion",
    },
  ],
  "07:20": [
    {
      timeFragment: "7.20 a.m.",
      quote:
        "And this was my timetable when I lived at home with Father and I thought that Mother was dead from a heart attack (this was the timetable for a Monday and also it is an approximation). 7.20 a.m. Wake up",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "seven-twenty",
      quote:
        "He who had been a boy very credulous of life was no longer greatly interested in the possible and improbable adventures of each new day. He escaped from reality till the alarm-clock rang, at seven-twenty.",
      book: "Babbitt",
      author: "Sinclair Lewis",
    },
  ],
  "07:25": [
    {
      timeFragment: "7.25 a.m.",
      quote: "7.25 a.m. clean teeth and wash face",
      book: "The Curious Incident Of The Dog In The Night-Time",
      author: "Mark Haddon",
    },
  ],
  "07:27": [
    {
      timeFragment: "7.27",
      quote: "His appointment with the doctor was for 8.45. It was 7.27.",
      book: "The Return of the Dancing Master",
      author: "Henning Mankell",
    },
  ],
  "07:29": [
    {
      timeFragment: "7.29",
      quote:
        "At 7.29 in the morning of 1 July, the cinematographer finds himself filming silence itself.",
      book: "At Break of Day",
      author: "Elizabeth Speller",
    },
  ],
  "07:30": [
    {
      timeFragment: "half-past seven",
      quote:
        "At half-past seven the next morning he rang the bell of 21 Blenheim Avenue.",
      book: "After Rain",
      author: "William Trevor",
    },
    {
      timeFragment: "half past seven",
      quote:
        "Precisely at half past seven the station-master came into the traffic office. He weighed almost sixteen stone, but women always said that he was incredibly light on his feet when he danced.",
      book: "Closely Observed Trains ",
      author: "Bohumil Hrabal",
    },
  ],
  "07:32": [
    {
      timeFragment: "7:32",
      quote: "At 7:32, he suffered a fatal stroke.",
      book: "IT",
      author: "Stephen King",
    },
  ],
  "07:34": [
    {
      timeFragment: "7:34.",
      quote:
        "7:34. Monday morning, Blackeberg. The burglar alarm at the ICA grocery store on Arvid Morne's way is set off.",
      book: "Let The Right One In",
      author: "John Ajvide Lindqvist",
    },
  ],
  "07:35": [
    {
      timeFragment: "7:35am",
      quote:
        "At 7:35am Ishigami left his apartment as he did every weekday morning.",
      book: "The Devotion of Duspect X",
      author: "Higashino, Keigo",
    },
    {
      timeFragment: "Seven thirty-five",
      quote: "I looked at my watch. Seven thirty-five.",
      book: "Bare Bones ",
      author: "Kathy Reichs",
    },
  ],
  "07:36": [
    {
      timeFragment: "7:36",
      quote:
        "7:36, sunrise. The hospital blinds were much better, darker than her own.",
      book: "Let The Right One In",
      author: "John Ajvide Lindqvist",
    },
  ],
  "07:39": [
    {
      timeFragment: "7.39",
      quote:
        "Now, at the station, do you recall speaking to Mr Joseph Markew?' 'Yes, indeed. I was standing on the platform waiting for my usual train - the 7.39 - when he accosted me.'",
      book: "Arthur & George",
      author: "Julian Barnes",
    },
  ],
  "07:40": [
    {
      timeFragment: "7.40 a.m.",
      quote: "7.40 a.m. Have breakfast.",
      book: "The Curious Incident Of The Dog In The Night-Time",
      author: "Mark Haddon",
    },
  ],
  "07:42": [
    {
      timeFragment: "Seven forty-two",
      quote:
        "Seven forty-two am., Mr Gasparian: I curse you. I curse your arms so they will wither and die and fall off your body...",
      book: "Magic Bleeds",
      author: "Ilona Andrews",
    },
  ],
  "07:44": [
    {
      timeFragment: "seven forty-four",
      quote:
        "\"And there I was, complaining that all this was just inconvenient, Anna castigates herself. The Goth was obviously right. What does it matter, really, if I'm a bit late for work? She voices her thoughts: \"It's not exactly how you'd choose to go, is it? You'd rather die flying a kite with your grandchildren, or at a great party or something. Not on the seven forty-four.\"",
      book: "One moment, one morning ",
      author: "Sarah Rayner",
    },
    {
      timeFragment: "seven forty-four",
      quote:
        "\"The Goth was obviously right. What does it matter, really, if I'm a bit late for work? She voices her thoughts: \"It's not exactly how you'd choose to go, is it? You'd rather die flying a kite with your grandchildren, or at a great party or something. Not on the seven forty-four.\"",
      book: "One Moment, One Morning",
      author: "Sarah Rayner",
    },
  ],
  "07:45": [
    {
      timeFragment: "quarter to eight",
      quote:
        "Mr Green left for work at a quarter to eight, as he did every morning. He walked down his front steps carrying his empty-looking leatherette briefcase with the noisy silver clasps, opened his car door, and ducked his head to climb into the driver's seat.",
      book: "A Crime in The Neighborhood",
      author: "Suzanne Berne",
    },
    {
      timeFragment: "quarter to eight",
      quote:
        "Mr Green left for work at a quarter to eight, as he did every morning. He walked down his front steps carrying his empty-looking leatherette briefcase with the noisy silver clasps, opened his car door, and ducked his head to climb into the driver's seat.",
      book: "A crime in the neighborhood ",
      author: "Suzanne Berne",
    },
  ],
  "07:46": [
    {
      timeFragment: "7.46 a.m.",
      quote:
        "He awoke with a start. The clock on his bedside table said 7.46 a.m. He cursed, jumped out of bed and dressed. He stuffed his toothbrush and toothpaste in his jacket pocket, and parked outside the station just before 8 a.m. In reception, Ebba beckoned to him.",
      book: "The Dogs of Riga",
      author: "Henning Mankell",
    },
  ],
  "07:50": [
    {
      timeFragment: "ten minutes to eight",
      quote:
        "At about ten minutes to eight, Jim had squared the part of the work he had been doing - the window - so he decided not to start on the door or the skirting until after breakfast.",
      book: "The Ragged Trousered Philanthropists",
      author: "Robert Tressell",
    },
  ],
  "07:51": [
    {
      timeFragment: "nine minutes to eight",
      quote:
        '"Vimes fished out the Gooseberry as a red-hot cabbage smacked into the road behind him. "Good morning!" he said brightly to the surprised imp. "What is the time, please?" "Er...nine minutes to eight, Insert Name Here," said the imp."',
      book: "Thud! ",
      author: "Terry Pratchett",
    },
  ],
  "07:53": [
    {
      timeFragment: "Seven to eight",
      quote: '"What time is it?" "Seven to eight. Won\'t be long now ..."',
      book: "Never go back",
      author: "Robert Goddard",
    },
  ],
  "07:55": [
    {
      timeFragment: "7.55",
      quote: "at 7.55 this morning the circus ran away to join me.",
      book: "Tightrope, from Selected Poems 1967-1987",
      author: "Roger McGough",
    },
  ],
  "07:56": [
    {
      timeFragment: "seven fifty-six",
      quote:
        "I sit by the window, crunching toast, sipping coffee, and leafing through the paper in a leisurely way. At last, after devouring three slices, two cups of coffee, and all the Saturday sections, I stretch my arms in a big yawn and glance at the clock. I don't believe it. It's only seven fifty-six.",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
    {
      timeFragment: "four minutes to eight",
      quote:
        "The Castle Gate - only the Castle Gate - and it was four minutes to eight.",
      book: "Buddenbrooks",
      author: "Thomas Mann",
    },
  ],
  "07:59": [
    {
      timeFragment: "7.59",
      quote:
        "I'd spent fifty two days in 1958, but here it was 7.59 in the morning.",
      book: "11/22/63",
      author: "Stephen King",
    },
  ],
  "08:00": [
    {
      timeFragment: "8 a.m.",
      quote:
        '"I\'m not crying," Maria said when Carter called from the desert at 8 a.m. "I\'m perfectly alright". "You don\'t sound perfectly alright"',
      book: "Play it as is Lays ",
      author: "Joan Didion",
    },
    {
      timeFragment: "8.00 a.m.",
      quote: "8.00 a.m. Put school clothes on",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "8 o'clock",
      quote: "At 8 o'clock on Thursday morning Arthur didn't feel very good.",
      book: "Hitch-Hikers Guide to the Galaxy ",
      author: "Douglas Adams",
    },
    {
      timeFragment: "eight o'clock",
      quote:
        "At eight o'clock on Thursday morning Arthur didn't feel very good. He woke up blearily, got up, wandered blearily round his room, opened a window, saw a bulldozer, found his slippers and stomped off to the bathroom to wash.",
      book: "Hitch-hikers guide to the galaxy ",
      author: "Douglas Adams",
    },
    {
      timeFragment: "At eight o'clock",
      quote:
        "At eight o'clock, a shaft of daylight came to wake us. The thousand facets of the lava on the rock face picked it up as it passed, scattering like a shower of sparks.",
      book: "Journey to the Centre of the Earth ",
      author: "Jules Verne",
    },
    {
      timeFragment: "eight o'clock",
      quote:
        "But for now it was still eight o'clock, and as I walked along the avenue under that brilliant blue sky, I was happy, my friends, as happy as any man who had ever lived.",
      book: "Brooklyn Follies",
      author: "Paul Auster",
    },
    {
      timeFragment: "eight o'clock",
      quote:
        "By eight o'clock Stillman would come out, always in his long brown overcoat, carrying a large, old-fashioned carpet bag. For two weeks this routine did not vary. The old man would wander through the streets of the neighbourhood, advancing slowly, sometimes by the merest of increments, pausing, moving on again, pausing once more, as though each step had to be weighed and measured before it could take its place among the sum total of steps.",
      book: "City of Glass ",
      author: "Paul Auster",
    },
    {
      timeFragment: "at eight",
      quote:
        "Dressed in sweater, anorak and long johns, he lay in bed, hemmed in on three sides by chunky wooden beams, and ate all the salted snacks in the minibar, and then all the sugary snacks, and when he was woken by reception at eight the following morning to be told that everyone was waiting for him downstairs, the wrapper of a Mars bar was still folded in his fist.",
      book: "Solar ",
      author: "Ian McEwan",
    },
    {
      timeFragment: "at eight",
      quote:
        "I hear noise at the ward door, off up the hall out of my sight. That ward door starts opening at eight and opens and closes a thousand times a day, kashash, click.",
      book: "One Flew Over the Cuckoo's Nest ",
      author: "Ken Kesey",
    },
    {
      timeFragment: "eight o'clock",
      quote:
        '"It was dated from Rosings, at eight o\'clock in the morning, and was as follows: - "Be not alarmed, madam, on receiving this letter, by the apprehension of its containing any repetition of those sentiments or renewal of those offerings which were last night so disgusting to you."',
      book: "Pride and Prejudice ",
      author: "Jane Austen",
    },
    {
      timeFragment: "eight o'clock",
      quote:
        "Mr. Pumblechook and I breakfasted at eight o'clock in the parlour behind the shop, while the shopman took his mug of tea and hunch of bread-and-butter on a sack of peas in the front premises.",
      book: "Great Expectations ",
      author: "Charles Dickens",
    },
    {
      timeFragment: "eight o'clock a.m.",
      quote:
        "Mrs. Rochester! She did not exist: she would not be born till to-morrow, some time after eight o'clock a.m.; and I would wait to be assured she had come into the world alive, before I assigned to her all that property.",
      book: "Jane Eyre ",
      author: "Charlotte Bront\u00eb",
    },
    {
      timeFragment: "eight ",
      quote:
        "So here I'll watch the night and wait To see the morning shine, When he will hear the stroke of eight And not the stroke of nine;",
      book: "A shropshire Lad ",
      author: "A E Housman",
    },
    {
      timeFragment: "eight o'clock",
      quote:
        "Someone must have been telling lies about Joseph K. for without having done anything wrong he was arrested one fine morning. His landlady's cook, who always brought him breakfast at eight o'clock, failed to appear on this occasion.",
      book: "The Trial ",
      author: "Franz Kafka",
    },
    {
      timeFragment: "oh eight oh oh hours",
      quote:
        "The next morning I woke up at oh eight oh oh hours, my brothers, and as I still felt shagged and fagged and fashed and bashed and as my glazzies were stuck together real horrorshow with sleepglue, I thought I would not go to school .",
      book: "A Clockwork Orange ",
      author: "Anthony Burgess",
    },
    {
      timeFragment: "eight o'clock",
      quote:
        "Three days after the quarrel, Prince Stepan Arkadyevitch Oblonsky--Stiva, as he was called in the fashionable world-- woke up at his usual hour, that is, at eight o'clock in the morning, not in his wife's bedroom, but on the leather-covered sofa in his study.",
      book: "Anna Karenina ",
      author: "Leo Tolstoy",
    },
    {
      timeFragment: "exactly eight",
      quote:
        "Through the curtained windows of the furnished apartment which Mrs. Horace Hignett had rented for her stay in New York rays of golden sunlight peeped in like the foremost spies of some advancing army. It was a fine summer morning. The hands of the Dutch clock in the hall pointed to thirteen minutes past nine; those of the ormolu clock in the sitting-room to eleven minutes past ten; those of the carriage clock on the bookshelf to fourteen minutes to six. In other words, it was exactly eight; and Mrs. Hignett acknowledged the fact by moving her head on the pillow, opening her eyes, and sitting up in bed. She always woke at eight precisely.",
      book: "Three Men and a Maid ",
      author: "P.G. Wodehouse",
    },
    {
      timeFragment: "at eight",
      quote:
        "When he opened the windows in the morning, the sky was as overcast as it had been, but the air seemed fresher, and regret set in. Had giving notice not been impetuous and wrongheaded, the result of an inconsequential indisposition? If he had held off a bit, if he had not been so quick to lose heart, if he had instead tried to adjust to the air or wait for the weather to improve, he would now have been free of stress and strain and looking forward to a morning on the beach like the one the day before. Too late. He must go on wanting what he had wanted yesterday. He dressed and rode down to the ground floor at eight for breakfast.",
      book: "Death in Venice ",
      author: "Thomas Mann",
    },
  ],
  "08:01": [
    {
      timeFragment: "eight-one",
      quote:
        "Eight-one, tick-tock, eight-one o'clock, off to school, off to work, run, run, eight-one!",
      book: "There Will Come Soft Rains",
      author: "Ray Bradbury",
    },
  ],
  "08:02": [
    {
      timeFragment: "Eight oh two",
      quote:
        "... bingeley ... Eight oh two eh em, Death of Corporal Littlebottombottom ... Eight oh three eh em ... Death of Sergeant Detritus ... Eight oh threethreethree eh em and seven seconds seconds ... Death of Constable Visit ... Eight oh three eh em and nineninenine seconds ... Death of death of death of ...",
      book: "Jingo",
      author: "Terry Pratchett",
    },
  ],
  "08:03": [
    {
      timeFragment: "Eight oh three",
      quote:
        "... bingeley ... Eight oh two eh em, Death of Corporal Littlebottombottom ... Eight oh three eh em ... Death of Sergeant Detritus ... Eight oh threethreethree eh em and seven seconds seconds ... Death of Constable Visit ... Eight oh three eh em and nineninenine seconds ... Death of death of death of ...",
      book: "Jingo",
      author: "Terry Pratchett",
    },
    {
      timeFragment: "8:03",
      quote:
        "He taught me that if I had to meet someone for an appointment, I must refuse to follow the 'stupid human habit' of arbitrarily choosing a time based on fifteen-minute intervals. 'Never meet people at 7:45 or 6:30, Jasper, but pick times like 7:12 and 8:03!'",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "08:04": [
    {
      timeFragment: "8:04",
      quote:
        "... every clerk had his particular schedule of hours, which coincided with a single pair of tram runs coming from the city: A had to come in at 8, B at 8:04, C at 8:08 and so on, and the same for quitting times, in such a manner that never would two colleagues have the opportunity to travel in the same tramcar.",
      book: "The Periodic Table",
      author: "Primo Levi",
    },
  ],
  "08:05": [
    {
      timeFragment: "8.05 a.m.",
      quote: "8.05 a.m. Pack school bag",
      book: "The Curious Incident Of The Dog In The Night-Time",
      author: "Mark Haddon",
    },
  ],
  "08:08": [
    {
      timeFragment: "8:08",
      quote:
        "... every clerk had his particular schedule of hours, which coincided with a single pair of tram runs coming from the city: A had to come in at 8, B at 8:04, C at 8:08 and so on, and the same for quitting times, in such a manner that never would two colleagues have the opportunity to travel in the same tramcar.",
      book: "The Periodic Table",
      author: "Primo Levi",
    },
  ],
  "08:09": [
    {
      timeFragment: "8:09",
      quote:
        "He followed the squeals down a hallway. A wall clock read 8:09 - 10:09 Dallas time.",
      book: "American Tabloid",
      author: "James Ellroy",
    },
  ],
  "08:10": [
    {
      timeFragment: "8.10 a.m.",
      quote: "8.10 a.m. Read book or watch video",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "8:10",
      quote:
        "Amory rushed into the house and the rest followed with a limp mass that they laid on the sofa in the shoddy little front parlor. Sloane, with his shoulder punctured, was on another lounge. He was half delirious, and kept calling something about a chemistry lecture at 8:10.",
      book: "This Side of Paradise",
      author: "F. Scott Fitzgerald",
    },
    {
      timeFragment: "8:10",
      quote:
        "Cell count down to 400,000. Woke 8:10. To sleep 7:15. (Appear to have lost my watch without realising it, had to drive into town to buy another.)",
      book: "The Voices of Time ",
      author: "JG Ballard",
    },
  ],
  "08:11": [
    {
      timeFragment: "eight-eleven",
      quote:
        "'Care for a turn on the engine?' he called to the doxies, and pointed up at the footplate. They laughed but voted not to, climbing up with their bathtub into one of the rattlers instead. They both had very fetching hats, with one flower apiece, but the prettiness of their faces made you think it was more. For some reason they both wore white rosettes pinned to their dresses. I looked again at the clock: eight-eleven.",
      book: "The Blackpool Highflyer ",
      author: "Andrew Martin",
    },
  ],
  "08:12": [
    {
      timeFragment: "8:12 a.m.",
      quote:
        "At 8:12 a.m., just before the moment of pff, all the business of the cellars was being transacted - garbage transferred from small cans into large ones; early wide-awake grandmas, rocky with insomnia, dumped wash into the big tubs; boys in swimming trunks rolled baby carriages out into the cool morning.",
      book: "In Time Which Made A Monkey Of Us All",
      author: "Grace Paley",
    },
  ],
  "08:13": [
    {
      timeFragment: "8:13 a.m.",
      quote:
        "At 8:13 a.m. the alarm clock in the laboratory gave the ringing word. Eddie touched a button in the substructure of an ordinary glass coffeepot, from whose spout two tubes proceeded into the wall.",
      book: "In Time Which Made A Monkey Of Us All",
      author: "Grace Paley",
    },
  ],
  "08:15": [
    {
      timeFragment: "quarter-past eight",
      quote:
        "It was in the winter when this happened, very near the shortest day, and a week of fog into the bargain, so the fact that it was still very dark when George woke in the morning was no guide to him as to the time. He reached up, and hauled down his watch. It was a quarter-past eight.",
      book: "Three Men in a Boat ",
      author: "Jerome K Jerome",
    },
    {
      timeFragment: "eight fifteen",
      quote:
        '"You scrutinized your wrist: "It\'s eight fifteen. (And here time forked.) I\'ll turn it on." The screen In its blank broth evolved a lifelike blur, And music welled."',
      book: "Pale Fire ",
      author: "Vladimir Nabokov",
    },
  ],
  "08:16": [
    {
      timeFragment: "eight sixteen",
      quote:
        "I walk through the fruit trees toward a huge, square, brown patch of earth with vegetation growing in serried rows. These must be the vegetables. I prod one of them cautiously with my foot. It could be a cabbage or a lettuce. Or the leaves of something growing underground, maybe. To be honest, it could be an alien. I have no idea. I sit down on a mossy wooden bench and look at a nearby bush covered in white flowers. Mm. Pretty. Now what? What do people do in their gardens? I feel I should have something to read. Or someone to call. My fingers are itching to move. I look at my watch. Still only eight sixteen. Oh God.",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
  ],
  "08:17": [
    {
      timeFragment: "8.17 a.m.",
      quote:
        "Breakfast over, my uncle drew from his pocket a small notebook, intended for scientific observations. He consulted his instruments, and recorded: Monday, July 1. Chronometer, 8.17 a.m.; barometer, 297 in.; thermometer, 6\u00b0 (43\u00b0 F.). Direction, E.S.E.This last observation applied to the dark gallery, and was indicated by the compass.",
      book: "A Journey to the Centre of the Earth",
      author: "Jules Verne",
    },
    {
      timeFragment: "eight seventeen",
      quote:
        "Come on, I can't give up yet. I'll just sit here for a bit and enjoy the peace. I lean back and watch a little speckled bird pecking the ground nearby for a while. Then I look at my watch again: eight seventeen. I can't do this.",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
  ],
  "08:19": [
    {
      timeFragment: "8.19",
      quote:
        "I had arranged to meet the Occupational Health Officer at 10:30. I took the train from Watford Junction at 8.19 and arrived at London Euston seven minutes late, at 8.49.",
      book: "The Terrible Privacy of Maxwell Sim",
      author: "Jonathan Coe",
    },
  ],
  "08:20": [
    {
      timeFragment: "8:20",
      quote:
        "When the typewriters happen to pause (8:20 and other mythical hours), and there are no flights of American bombers in the sky, and the motor traffic's not too heavy in Oxford Street, you can hear winter birds cheeping outside, busy at the feeders the girls have put up.",
      book: "Gravity's Rainbow",
      author: "Thomas Pynchon",
    },
  ],
  "08:23": [
    {
      timeFragment: "Twenty-three minutes past eight",
      quote:
        '"And then Wedderburn looked at his watch. "Twenty-three minutes past eight. I am going up by the quarter to twelve train, so that there is plenty of time. I think I shall wear my alpaca jacket - it is quite warm enough - and my grey felt hat and brown shoes. I suppose"',
      book: "The Flowering of The Strange Orchid",
      author: "HG Wells",
    },
    {
      timeFragment: "8:23",
      quote:
        "At 8:23 there seemed every chance of a lasting alliance starting between Florin and Guilder. At 8:24 the two nations were very close to war.",
      book: "The Princess Bride",
      author: "William Goldman",
    },
  ],
  "08:24": [
    {
      timeFragment: "8:24",
      quote:
        "At 8:23 there seemed every chance of a lasting alliance starting between Florin and Guilder. At 8:24 the two nations were very close to war.",
      book: "The Princess Bride",
      author: "William Goldman",
    },
  ],
  "08:26": [
    {
      timeFragment: "twenty-six minutes past eight",
      quote:
        "It exploded much later than intended, probably a good twelve hours later, at twenty-six minutes past eight on Monday morning. Several defunct wristwatches, the property of victims, confirmed the time. As with its predecessors over the last few months, there had been no warning.",
      book: "The Little Drummer Girl",
      author: "John Le Carre",
    },
  ],
  "08:27": [
    {
      timeFragment: "almost eight-thirty",
      quote:
        "The lecture was to be given tomorrow, and it was now almost eight-thirty.",
      book: "A Confederacy of Dunces",
      author: "John Kennedy Toole",
    },
  ],
  "08:28": [
    {
      timeFragment: "8.28",
      quote:
        "And at 8.28 on the following morning, with a novel chilliness about the upper lip, and a vast excess of strength and spirits, I was sitting in a third-class carriage, bound for Germany, and dressed as a young sea-man, in a pea-jacket, peaked cap, and comforter.",
      book: "The Riddle of the Sands",
      author: "Erskine Childers",
    },
  ],
  "08:29": [
    {
      timeFragment: "8.29",
      quote:
        "At 8.29 I punched the front doorbell in Elgin Crescent. It was opened by a small oriental woman in a white apron. She showed me into a large, empty sitting room with an open fire and a couple of huge oil paintings.",
      book: "Engleby",
      author: "Sebastian Faulks",
    },
  ],
  "08:30": [
    {
      timeFragment: "half past eight",
      quote:
        "At half past eight, Mr. Dursley picked up his briefcase, pecked Mrs. Dursley on the cheek, and tried to kiss Dudley good-bye but missed, because Dudley was now having a tantrum and throwing his cereal at the walls.",
      book: "Harry Potter and the Philosopher's Stone ",
      author: "JK Rowling",
    },
    {
      timeFragment: "8:30",
      quote:
        "It is around 8:30. Sunshine comes through the windows at right. As the curtain rises, the family has just finished breakfast.",
      book: "Long Day's Journey Into Night ",
      author: "Eugene O'Neill",
    },
    {
      timeFragment: "8:30 a.m.",
      quote:
        "On July 25th, 8:30 a.m. the bitch Novaya dies whelping. At 10 o'clock she is lowered into her cool grave, at 7:30 that same evening we see our first floes and greet them wishing they were the last.",
      book: "The Terrors of Ice and Darkness ",
      author: "Christoph Ransmayr",
    },
    {
      timeFragment: "eight-thirty",
      quote:
        "The lecture was to be given tomorrow, and it was now almost eight-thirty.",
      book: "A Confederacy of Dunces",
      author: "John Kennedy Toole",
    },
    {
      timeFragment: "eight-thirty",
      quote:
        "When he woke, at eight-thirty, he was alone in the bedroom. He put on his dressing gown and put in his hearing aid and went into the living room.",
      book: "Deaf Sentence ",
      author: "David Lodge",
    },
  ],
  "08:32": [
    {
      timeFragment: "832",
      quote:
        "'Does anybody know the time a little more exactly is what I'm wondering, Don, since Day doesn't.' Gately checks his cheap digital, head still hung over the sofa's arm. 'I got 0832:14, 15, 16, Randy.' ''ks a lot, D.G. man.'",
      book: "Infinite Jest ",
      author: "David Foster Wallace",
    },
    {
      timeFragment: "8.32 a.m.",
      quote: "8.32 a.m. Catch bus to school",
      book: "The Curious Incident Of The Dog In The Night-Time",
      author: "Mark Haddon",
    },
  ],
  "08:35": [
    {
      timeFragment: "thirty-five minutes past eight",
      quote:
        "It was thirty-five minutes past eight by the big clock of the central building when Mathieu crossed the yard towards the office which he occupied as chief designer. For eight years he had been employed at the works where, after a brilliant and special course of study, he had made his beginning as assistant draughtsman when but nineteen years old, receiving at that time a salary of one hundred francs a month.",
      book: "Fruitfulness ",
      author: "Emile Zola",
    },
    {
      timeFragment: "8.35 a.m.",
      quote:
        "Old gummy granny (thrusts a dagger towards Stephen's hand) Remove him, acushla. At 8.35 a.m. you will be in heaven and Ireland will be free (she prays) O good God take him!",
      book: "Ulysses",
      author: "James Joyce",
    },
  ],
  "08:37": [
    {
      timeFragment: "Eight thirty-seven",
      quote:
        "Eight thirty-seven am., Patrice Lane, Biohazard: The dog's clean. The Good Samaritan was a woman with an accent of some sort. Why haven't you called me?",
      book: "Magic Bleeds",
      author: "Ilona Andrews",
    },
  ],
  "08:39": [
    {
      timeFragment: "8:39 A.M.",
      quote:
        "Doug McGuire noticed the early hour, 8:39 A.M. on the one wall clock that gave Daylight Savings Time for the East Coast.",
      book: "Terminal Compromise",
      author: "Winn Schwartau",
    },
  ],
  "08:40": [
    {
      timeFragment: "8.40",
      quote:
        "At this moment the clock indicated 8.40. 'Five minutes more,' said Andrew Stuart. The five friends looked at each other. One may surmise that their heart-beats were slightly accelereted, for, even for bold gamblers, the stake was a large one.'",
      book: "Around the world in eighty days ",
      author: "Jules Verne",
    },
    {
      timeFragment: "twenty minutes to nine",
      quote:
        "It was when I stood before her, avoiding her eyes, that I took note of the surrounding objects in detail, and saw that her watch had stopped at twenty minutes to nine, and that a clock in the room had stopped at twenty minutes to nine.",
      book: "Great Expectations",
      author: "Charles Dickens",
    },
  ],
  "08:41": [
    {
      timeFragment: "forty-one minutes past eight",
      quote:
        "By forty-one minutes past eight we are five hundred yards from the water's edge, and between our road and the foot of the mountain we descry the piled-up remains of a ruined tower.",
      book: "Narrative of a Journey round the Dead Sea and in the Bible lands in 1850 and 1851",
      author: "F\u00e9licien de Saulcy",
    },
  ],
  "08:43": [
    {
      timeFragment: "eight forty-three",
      quote:
        '"You understand this tape recorder is on?" "Uh huh" "And it\'s Wednesday, May 15, at eight forty-three in the mornin\'." "If you say so"',
      book: "A Time to Kill ",
      author: "John Grisham",
    },
    {
      timeFragment: "8.43 a.m.",
      quote: "8.43 a.m. Go past tropical fish shop",
      book: "The Curious Incident Of The Dog In The Night-Time",
      author: "Mark Haddon",
    },
  ],
  "08:44": [
    {
      timeFragment: "eight forty-four",
      quote:
        "Several soldiers - some with their uniforms unbuttoned - were looking over a motorcycle, arguing about it. The sergeant looked at his watch; it was eight forty-four. They had to wait until nine. Hladik, feeling more insignificant than ill-fortuned, sat down on a pile of firewood.",
      book: "The Secret Miracle",
      author: "Jorge Luis Borges",
    },
  ],
  "08:45": [
    {
      timeFragment: "8:45",
      quote:
        "He paid the waitress and left the caf\u00e9. It was 8:45. The sun pressed against the inside of a thin layer of cloud. He unbuttoned his jacket as he hurried down Queensway. His mind, unleashed, sprang forwards.",
      book: "Dreams of leaving",
      author: "Rupert Thomson",
    },
  ],
  "08:47": [
    {
      timeFragment: "8.47",
      quote:
        '"Just on my way to the cottage. It\'s, er, ..8.47. Bit misty on the roads....."',
      book: "Dirk Gently's Holistic Detective Agency ",
      author: "Douglas Adams",
    },
    {
      timeFragment: "8.47",
      quote: "8.47. Bit misty on the roads",
      book: "Dirk Gently's Holistic Detective Agency",
      author: "Douglas Adams",
    },
  ],
  "08:49": [
    {
      timeFragment: "8.49",
      quote:
        "I had arranged to meet the Occupational Health Officer at 10:30. I took the train from Watford Junction at 8.19 and arrived at London Euston seven minutes late, at 8.49.",
      book: "The Terrible Privacy of Maxwell Sim",
      author: "Jonathan Coe",
    },
  ],
  "08:50": [
    {
      timeFragment: "ten to nine",
      quote:
        "At ten to nine the clerks began to arrive.When they had hung up their coats and hates they came to the fireplace and stood warming themselves. If there was no fire, they stood there all the same",
      book: "The Chestnut Tree",
      author: "V.S. Pritchett",
    },
    {
      timeFragment: "8:50",
      quote:
        '"It was 8:50 in the morning and Bernie and I were alone on an Astoria side street, not far from a sandwich shop that sold a sopressatta sub called "The Bypass". I used to eat that sandwich weekly, wash it down with espresso soda, smoke a cigarette, go for a jog. Now I was too near the joke to order the sandwich, and my son\'s preschool in the throes of doctrinal schism."',
      book: "The Ask ",
      author: "Sam Lipsyte",
    },
    {
      timeFragment: "ten minutes to nine",
      quote:
        "Punctually at ten minutes to nine, a quarter hour after early mass, the boy stood in his Sunday uniform outside his father's door.",
      book: "The Radetzky March",
      author: "Joseph Roth",
    },
  ],
  "08:51": [
    {
      timeFragment: "8.51 a.m.",
      quote: "8.51 a.m. Arrive at school",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
  ],
  "08:52": [
    {
      timeFragment: "8.52am.",
      quote: "Message one. Tuesday, 8.52am. Is anybody there? Hello?",
      book: "Extremely Loud and Incredibly Close",
      author: "Jonathan Safran Foer",
    },
  ],
  "08:54": [
    {
      timeFragment: "nearly nine o'clock",
      quote:
        'It was Mrs. Poppets that woke me up next morning. She said: "Do you know that it\'s nearly nine o\'clock, sir?" "Nine o\' what?" I cried, starting up. "Nine o\'clock," she replied, through the keyhole. "I thought you was a- oversleeping yourselves."',
      book: "Three Men in a Boat ",
      author: "Jerome K Jerome",
    },
  ],
  "08:55": [
    {
      timeFragment: "five minutes to nine",
      quote:
        '"At five minutes to nine, Jacques, in his gray butler\'s livery, came down the stairs and said, "Young master, your Herr Pap\u00e1 is coming."',
      book: "The Radetzky March",
      author: "Joseph Roth",
    },
    {
      timeFragment: "five minutes to nine",
      quote:
        "George pulled out his watch and looked at it: it was five minutes to nine!",
      book: "Three Men in a Boat ",
      author: "Jerome K Jerome",
    },
  ],
  "08:56": [
    {
      timeFragment: "nearly nine o'clock",
      quote:
        "It was nearly nine o'clock and the sun was fiercer every minute.'",
      book: "Burmese Days",
      author: "George Orwell",
    },
  ],
  "08:57": [
    {
      timeFragment: "three minutes before nine",
      quote:
        "You'll have to hurry. Many a long year before that, in one of the bygone centuries, a worthy citizen of Wrychester, Martin by name, had left a sum of money to the Dean and Chapter of the Cathedral on condition that as long as ever the Cathedral stood, they should cause to be rung a bell from its smaller bell-tower for three minutes before nine o'clock every morning, all the year round.",
      book: "The Paradise Mystery",
      author: "JS Fletcher",
    },
  ],
  "08:58": [
    {
      timeFragment: "two minutes of nine",
      quote:
        "It was two minutes of nine now - two minutes before the bombs were set to explode - and three or four people were gathered in front of the bank waiting for it to open.",
      book: "The Getaway",
      author: "Jim Thompson",
    },
  ],
  "08:59": [
    {
      timeFragment: "8:59",
      quote:
        "She had been lying in bed reading about Sophie and Alberto's conversation on Marx and had fallen asleep. The reading lamp by the bed had been on all night. The green glowing digits on her desk alarm clock showed 8:59.",
      book: "Sophie's World",
      author: "Jostein Gaarder",
    },
  ],
  "09:00": [
    {
      timeFragment: "nine o'clock",
      quote: "'I could never get all the way down there before nine o'clock.'",
      book: "A Confederacy of Dunces ",
      author: "John Kennedy Toole",
    },
    {
      timeFragment: "nine o'clock",
      quote:
        "'Look. Ignatius. I'm beat. I've been on the road since nine o'clock yesterday morning.'",
      book: "A Confederacy of Dunces ",
      author: "John Kennedy Toole",
    },
    {
      timeFragment: "nine ",
      quote:
        "On the third morning after their arrival, just as all the clocks in the city were striking nine individually, and somewhere about nine hundred and ninety-nine collectively, Sam was taking the air in George Yard, when a queer sort of fresh painted vehicle drove up, out of which there jumped with great agility, throwing the reins to a stout man who sat beside him, a queer sort of gentleman, who seemed made for the vehicle, and the vehicle for him.",
      book: "The Pickwick Papers ",
      author: "Charles Dickens",
    },
    {
      timeFragment: "9:00 am",
      quote: "14 June 9:00 am woke up",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
    {
      timeFragment: "9.00 a.m.",
      quote: "9.00 a.m. School assembly",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "nine ",
      quote:
        '"A fly buzzed, the wall clock began to strike. After the nine golden strokes faded, the district captain began. "How is Herr Colonel Marek?" "Thank you, Pap\u00e1, he\'s fine." "Still weak in geometry?" "Thank you, Pap\u00e1, a little better." "Read any books?" "Yessir, Pap\u00e1."',
      book: "The Radetzky March ",
      author: "Joseph Roth",
    },
    {
      timeFragment: "nine o' clock",
      quote:
        "As nine o' clock was left behind, the preposterousness of the delay overwhelmed me, and I went in a kind of temper to the owner and said that I thought he should sign on another cook and weigh spars and be off.",
      book: "A Single Pebble ",
      author: "John Hershey",
    },
    {
      timeFragment: "nine o'clock",
      quote:
        "At nine o'clock, one morning late in July, Gatsby's gorgeous car lurched up the rocky drive to my door and gave out a burst of melody from its three-noted horn",
      book: "The Great Gatsby ",
      author: "F. Scott Fitzgerald",
    },
    {
      timeFragment: "at nine",
      quote:
        '"He was at breakfast at nine, and for the twentieth time consulted his "Bradshaw," to see at what earliest hour Dr. Grantly could arrive from Barchester."',
      book: "The Warden ",
      author: "Anthony Trollope",
    },
    {
      timeFragment: "nine o'clock",
      quote:
        "He won't stand beating. Now, if you only kept on good terms with him, he'd do almost anything you liked with the clock. For instance, suppose it were nine o'clock in the morning, just time to begin lessons: you'd only have to whisper a hint to Time, and round goes the clock in a twinkling! Half-past one, time for dinner!",
      book: "Alice's Adventures in Wonderland ",
      author: "Lewis Carroll",
    },
    {
      timeFragment: "nine o'clock",
      quote:
        "It was around nine o'clock that I crossed the border into Cornwall. This was at least three hours before the rain began and the clouds were still all of a brilliant white. In fact, many of the sights that greeted me this morning were among the most charming I have so far encountered. It was unfortunate, then, that I could not for much of the time give to them the attention they warranted; for one may as well declare it, one was in a condition of some preoccupation with the thought that - barring some unseen complication - one would be meeting Miss Kenton again before the day's end.",
      book: "The Remains of the Day ",
      author: "Kazuo Ishiguro",
    },
    {
      timeFragment: "At nine",
      quote:
        "Opening his window, Aschenbach thought he could smell the foul stench of the lagoon. A sudden despondency came over him. He considered leaving then and there. Once, years before, after weeks of a beautiful spring, he had been visited by this sort of weather and it so affected his health he had been obliged to flee. Was not the same listless fever setting in? The pressure in the temples, the heavy eyelids? Changing hotels again would be a nuisance, but if the wind failed to shift he could not possibly remain here. To be on the safe side, he did not unpack everything. At nine he went to breakfast in the specially designated buffet between the lobby and the dining room.",
      book: "Death in Venice ",
      author: "Thomas Mann",
    },
    {
      timeFragment: "9.00am",
      quote:
        "Sometimes what I wouldn't give to have us sitting in a bar again at 9.00am telling lies to one another, far from God.",
      book: "Jesus' Son ",
      author: "Denis Johnson",
    },
    {
      timeFragment: "nine ",
      quote:
        "The clock struck nine when I did send the nurse; In half an hour she promised to return. Perchance she cannot meet him: that's not so.",
      book: "Romeo and Juliet ",
      author: "Shakespeare",
    },
    {
      timeFragment: "nine",
      quote:
        "To where Saint Mary Woolnoth kept the hours With a dead sound on the final stroke of nine.",
      book: "The Waste Land ",
      author: "T S Eliot",
    },
    {
      timeFragment: "nine",
      quote:
        "Unreal City, Under the brown fog of a winter dawn, A crowd flowed over London Bridge, so many, I had not thought death had undone so many. Sighs, short and infrequent, were exhaled, And each man fixed his eyes before his feet. Flowed up the hill and down King William Street, To where Saint Mary Woolnoth kept the hours With a dead sound on the final stroke of nine.",
      book: "The Waste Land ",
      author: "T S Eliot",
    },
  ],
  "09:01": [
    {
      timeFragment: "9:01am",
      quote: "9:01am lay in bed, staring at ceiling.",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "09:02": [
    {
      timeFragment: "9:02am",
      quote: "9:02am lay in bed, staring at ceiling.",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "09:03": [
    {
      timeFragment: "9:03am",
      quote: "9:03am lay in bed, staring at ceiling.",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
    {
      timeFragment: "three minutes past nine",
      quote:
        '"This isn\'t a very good start to the new school year." I stared at her. What was she talking about? Why was she looking at her watch? I wasn\'t late. Okay, the school bell had rung as I was crossing the playground, but you always get five minutes to get to your classroom. "It\'s three minutes past nine," Miss Beckworth announced. "You\'re late."',
      book: "The Lottie Project ",
      author: "Jacqueline Wilson",
    },
  ],
  "09:04": [
    {
      timeFragment: "9:04am",
      quote: "9:04am lay in bed, staring at ceiling",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
    {
      timeFragment: "9.04",
      quote:
        "In the light of a narrow-beam lantern, Pierce checked his watch. It was 9.04.",
      book: "The Great Train Robbery",
      author: "Michael Crichton",
    },
  ],
  "09:05": [
    {
      timeFragment: "9:05am",
      quote: "9:05am lay in bed, staring at ceiling",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
    {
      timeFragment: "9:05",
      quote:
        "Kaldren pursues me like luminescent shadow. He has chalked up on the gateway '96,688,365,498,702'. Should confuse the mail man. Woke 9:05. To sleep 6:36.",
      book: "The Voices of Time ",
      author: "JG Ballard",
    },
    {
      timeFragment: "9:05 a.m.",
      quote:
        "The tour of the office doesn't take that long. In fact, we're pretty much done by 9:05 a.m. \u2026 and even though it's just a room with a window and a pin board and two doors and two desks... I can't help feeling a buzz as I lead them around. It's mine. My space. My company.",
      book: "Twenties Girl ",
      author: "Sophie Kinsella",
    },
    {
      timeFragment: "9:05 a.m.",
      quote:
        "The tour of the office doesn't take that long. In fact, we're pretty much done by 9:05 a.m. Ed looks at everything twice and says it's all great, and gives me a list of contacts who might be helpful, then has to leave for his own office.",
      book: "Twenties Girl",
      author: "Sophie Kinsella",
    },
  ],
  "09:06": [
    {
      timeFragment: "9:06am",
      quote: "9:06am lay in bed, staring at ceiling",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "09:07": [
    {
      timeFragment: "9:07am",
      quote: "9:07am lay in bed, staring at ceiling",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
    {
      timeFragment: "9:07",
      quote:
        "It was a sparkling morning, 9:07 by the clock when Mrs. Flett stepped aboard the Imperial Limited at the Tyndall station, certain that her life was ruined, but managing, through an effort of will, to hold herself erect and to affect an air of preoccupation and liveliness.",
      book: "The Stone Diaries",
      author: "Carol Shields",
    },
  ],
  "09:08": [
    {
      timeFragment: "9.08am",
      quote: "9.08am rolled over onto left side.",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "09:09": [
    {
      timeFragment: "9.09am",
      quote: "9.09am lay in bed, staring at wall.",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "09:10": [
    {
      timeFragment: "9.10am",
      quote: "9.10am lay in bed, staring at wall.",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "09:11": [
    {
      timeFragment: "9:11am",
      quote: "9:11am lay in bed, staring at wall",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "09:12": [
    {
      timeFragment: "9.12am",
      quote: "9.12am lay in bed, staring at wall.",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "09:13": [
    {
      timeFragment: "9:13am",
      quote: "9:13am lay in bed, staring at wall",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
    {
      timeFragment: "9:13 A.M.",
      quote:
        "She tucked the phone in the crook of her neck and thumbed hurriedly through her pink messages. Dr. Provetto, at 9:13 A.M.",
      book: "Mistaken Identity",
      author: "Lisas Scottoline",
    },
  ],
  "09:14": [
    {
      timeFragment: "9.14am",
      quote: "9.14am lay in bed, staring at wall.",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "09:15": [
    {
      timeFragment: "915",
      quote:
        '"Great!" Jones commented. "I\'ve never seen it do that before. That\'s all right. Okay." Jones pulled a handful of pencils from his back pocket. "Now, I got the contact first at 0915 or so, and the bearing was about two-six-nine."',
      book: "The Hunt for Red October ",
      author: "Tom Clancy",
    },
    {
      timeFragment: "9:15am",
      quote: "9:15am doubled over pillow, sat up to see out window",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
    {
      timeFragment: "9.15 a.m.",
      quote: "9.15 a.m. First morning class",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "quarter past nine",
      quote:
        "Miss Pettigrew pushed open the door of the employment agency and went in as the clock struck a quarter past nine.",
      book: "Miss Pettigrew Lives For a Day",
      author: "Winifred Watson",
    },
  ],
  "09:16": [
    {
      timeFragment: "9.16am",
      quote: "9.16am sat in bed, staring out window.",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "09:17": [
    {
      timeFragment: "9.17am",
      quote: "9.17am sat in bed, staring out window.",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "09:18": [
    {
      timeFragment: "9.18am",
      quote: "9.18am sat in bed, staring out window.",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "09:19": [
    {
      timeFragment: "9.19am",
      quote: "9.19am sat in bed, staring out window.",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "09:20": [
    {
      timeFragment: "nine-twenty",
      quote:
        "I'll compromise by saying that I left home at eight and spent an hour travelling to a nine o'clock appointment. Twenty minutes later is nine-twenty.",
      book: "Girl, Interrupted ",
      author: "Susanna Kaysen",
    },
    {
      timeFragment: "twenty minutes past nine",
      quote:
        "At twenty minutes past nine, the Duke of Dunstable, who had dined off a tray in his room, was still there, waiting for his coffee and liqueur.",
      book: "Uncle Fred in the Springtime ",
      author: "P.G. Wodehouse",
    },
    {
      timeFragment: "9.20",
      quote:
        "The following morning at 9.20 Mr Cribbage straightened his greasy old tie, combed his Hitler moustache and arranged the few strands of his hair across his bald patch.",
      book: "Red Dog ",
      author: "Louis de Bernieres",
    },
  ],
  "09:21": [
    {
      timeFragment: "nine twenty-one",
      quote:
        "It was nine twenty-one. With one minute to go, there was no sign of Herbert's mother.",
      book: "This is Life",
      author: "Dan Rhodes",
    },
  ],
  "09:22": [
    {
      timeFragment: "nine twenty-two",
      quote:
        "No more throwing stones at him, and I'll see you back here exactly one week from now. She looked at her watch. 'At nine twenty-two next Wednesday.'",
      book: "This is Life",
      author: "Dan Rhodes",
    },
  ],
  "09:23": [
    {
      timeFragment: "9.23",
      quote: "9.23. What possessed me to buy this comb?",
      book: "Ulysses",
      author: "James Joyce",
    },
  ],
  "09:24": [
    {
      timeFragment: "9.24",
      quote:
        "9.24 I'm swelled after that cabbage. A speck of dust on the patent leather of her boot.",
      book: "Ulysses",
      author: "James Joyce",
    },
  ],
  "09:25": [
    {
      timeFragment: "nine twenty-five",
      quote:
        "A man I would cross the street to avoid at nine o'clock - by nine twenty-five I wanted to fuck him until he wept. My legs trembled with it. My voice floated out of my mouth when I opened it to speak. The glass wall of the meeting room was huge and suddenly too transparent.",
      book: "The Forgotten Waltz ",
      author: "Anne Enright",
    },
  ],
  "09:27": [
    {
      timeFragment: "twenty-seven minutes past nine",
      quote:
        "From twenty minutes past nine until twenty-seven minutes past nine, from twenty-five minutes past eleven until twenty-eight minutes past eleven, from ten minutes to three until two minutes to three the heroes of the school met in a large familiarity whose Olympian laughter awed the fearful small boy that flitted uneasily past and chilled the slouching senior that rashly paused to examine the notices in assertion of an unearned right.",
      book: "Sinister Street",
      author: "Compton Mackenzie",
    },
  ],
  "09:28": [
    {
      timeFragment: "twenty-eight minutes past nine",
      quote:
        '"This clock right?" he asked the butler in the hall. "Yes, sir." The clock showed twenty-eight minutes past nine. "The clocks here have to be right, sir," the butler added with pride and a respectful humour, on the stairs."',
      book: "Lord Raingo",
      author: "Arnold Bennett",
    },
    {
      timeFragment: "twenty-eight minutes past nine",
      quote:
        '"He entered No. 10 for the first time, he who had sat on the Government benches for eight years and who had known the Prime Minister from youth up. "This clock right?" he asked the butler in the hall. "Yes, sir." The clock showed twenty-eight minutes past nine. "The clocks here have to be right, sir," the butler added with pride and a respectful humour, on the stairs."',
      book: "Lord Raingo ",
      author: "Arnold Bennett",
    },
  ],
  "09:30": [
    {
      timeFragment: "half-past nine",
      quote: "he looked at his watch; it was half-past nine",
      book: "A watcher by the dead ",
      author: "Ambrose Bierce",
    },
    {
      timeFragment: "nine-thirty",
      quote:
        'It was nine-thirty. In another ten minutes she would turn off the heat; then it would take a while for the water to cool. In the meantime there was nothing to do but wait. "Have you thought it through April?" Never undertake to do a thing until you\'ve \u2013" But she needed no more advice and no more instruction. She was calm and quiet now with knowing what she had always known, what neither her parents not Aunt Claire not Frank nor anyone else had ever had to teach her: that if you wanted to do something absolutely honest, something true, it always turned out to be a thing that had to be done alone.',
      book: "Revolutionary Road ",
      author: "Richard Yates",
    },
    {
      timeFragment: "nine-thirty",
      quote:
        "The body came in at nine-thirty this morning. One of Holding's men went to the house and collected it. There was nothing particularly unusual about the death. The man had had a fear of hospitals and had died at home, being cared for more than adequately by his devoted wife.",
      book: "Trumpet",
      author: "Jackie Kay",
    },
    {
      timeFragment: "9.30",
      quote:
        "Up the welcomingly warm morning hill we trudge, side by each, bound finally for the Hall of Fame. It's 9.30, and time is in fact a-wastin'.",
      book: "Independence Day ",
      author: "Richard Ford",
    },
  ],
  "09:32": [
    {
      timeFragment: "9.32",
      quote:
        "He said he couldn't say for certain of course, but that he rather thought he was. Anyhow, if he wasn't the 11.5 for Kingston, he said he was pretty confident he was the 9.32 for Virginia Water, or the 10 a.m. express for the Isle of Wight, or somewhere in that direction, and we should all know when we got there.",
      book: "Three Men in a Boat",
      author: "Jerome K Jerome",
    },
    {
      timeFragment: "nine-thirty-two",
      quote:
        "Sandy barely made the nine-thirty-two and found a seat in no-smoking. She'd been looking forward to this visit with Lisbeth. They hadn't seen each other in months, not since January, when Sandy had returned from Jamaica. And on that day Sandy was sporting a full-blown herpes virus on her lower lip.",
      book: "Wifey ",
      author: "Judy Blume",
    },
  ],
  "09:33": [
    {
      timeFragment: "thirty-three minutes past nine",
      quote:
        "Next, he remembered that the morrow of Christmas would be the twenty-seventh day of the moon, and that consequently high water would be at twenty-one minutes past three, the half-ebb at a quarter past seven, low water at thirty-three minutes past nine, and half flood at thirty-nine minutes past twelve.",
      book: "The Toilers of the Sea",
      author: "Victor Hugo",
    },
  ],
  "09:35": [
    {
      timeFragment: "Nine-thirty-five",
      quote:
        "Nine-thirty-five. He really must be gone. The bird is no longer feeding but sitting at the apex of a curl of razor wire.",
      book: "The Memory of Love",
      author: "Aminatta Forna",
    },
    {
      timeFragment: "Nine-thirty-five",
      quote:
        "Nine-thirty-five. He really must be gone. The bird is no longer feeding but sitting at the apex of a curl of razor wire.",
      book: "The Memory of Love ",
      author: "Aminatta Forna",
    },
  ],
  "09:36": [
    {
      timeFragment: "9:36",
      quote:
        "I grab a pen and the pad of paper by the phone and start scribbling a list for the day. I have an image of myself moving smoothly from task to task, brush in one hand, duster in the other, bringing order to everything. Like Mary Poppins. 9:30-9:36 Make Geigers' bed 9:36-9:42 Take laundry out of machine and put in dryer 9:42-10:00 Clean bathrooms I get to the end and read it over with a fresh surge of optimism. At this rate I should be done easily by lunchtime. 9:36 Fuck. I cannot make this bed. Why won't this sheet lie flat? 9:42 And why do they make mattresses so heavy?",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
    {
      timeFragment: "9.36am.",
      quote:
        "Monday February 6th. '9.36am. Oh god, Oh god. Maybe he's fallen in love in New York and stayed there'.",
      book: "Bridget Jones Diary",
      author: "Helen Fielding",
    },
  ],
  "09:37": [
    {
      timeFragment: "thirty-seven minutes past nine",
      quote:
        "It comprised all that was required of the servant, from eight in the morning, exactly at which hour Phileas Fogg rose, till half-past eleven, when he left the house for the Reform Club - all the details of service, the tea and toast at twenty-three minutes past eight, the shaving-water at thirty-seven minutes past nine, and the toilet at twenty minutes before ten.",
      book: "Around the World in 80 days",
      author: "Jules Verne",
    },
  ],
  "09:40": [
    {
      timeFragment: "twenty minutes before ten",
      quote:
        "It comprised all that was required of the servant, from eight in the morning, exactly at which hour Phileas Fogg rose, till half-past eleven, when he left the house for the Reform Club\u2014all the details of service, the tea and toast at twenty-three minutes past eight, the shaving-water at thirty-seven minutes past nine, and the toilet at twenty minutes before ten.",
      book: "Around the World in 80 days",
      author: "Jules Verne",
    },
    {
      timeFragment: "9:40",
      quote:
        "Must have the phone disconnected. Some contractor keeps calling me up about payment for 50 bags of cement he claims I collected ten days ago. Says he helped me load them onto a truck himself. I did drive Whitby's pick-up into town but only to get some lead screening. What does he think I'd do with all that cement? Just the sort of irritating thing you don't expect to hang over your final exit. (Moral: don't try too hard to forget Eniwetok.) Woke 9:40. To sleep 4:15.",
      book: "The Voices of Time ",
      author: "JG Ballard",
    },
  ],
  "09:42": [
    {
      timeFragment: "9:42",
      quote:
        "I grab a pen and the pad of paper by the phone and start scribbling a list for the day. I have an image of myself moving smoothly from task to task, brush in one hand, duster in the other, bringing order to everything. Like Mary Poppins. 9:30-9:36 Make Geigers' bed 9:36-9:42 Take laundry out of machine and put in dryer 9:42-10:00 Clean bathrooms I get to the end and read it over with a fresh surge of optimism. At this rate I should be done easily by lunchtime. 9:36 Fuck. I cannot make this bed. Why won't this sheet lie flat? 9:42 And why do they make mattresses so heavy?",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
  ],
  "09:45": [
    {
      timeFragment: "9.45",
      quote:
        "9.15, 9.30, 9.45, 10! Bond felt the excitement ball up inside him like cat's fur.",
      book: "On Her Majesty's Secret Service ",
      author: "Ian Fleming",
    },
  ],
  "09:47": [
    {
      timeFragment: "9.47am.",
      quote:
        "Monday February 6th. '9.47am. Or gone to Las Vegas and got married'.",
      book: "Bridget Jones Diary",
      author: "Helen Fielding",
    },
  ],
  "09:50": [
    {
      timeFragment: "9.50am.",
      quote:
        "9.50am. Hmmm. Think will go inspect make-up in case he does come in",
      book: "Bridget Jones Diary",
      author: "Helen Fielding",
    },
    {
      timeFragment: "Ten minutes to ten.",
      quote:
        '"Ten minutes to ten. "I had just time to hide the bottle (after the nurse had left me) when you came into my room."',
      book: "The Law and the Lady ",
      author: "Wilkie Collins",
    },
  ],
  "09:52": [
    {
      timeFragment: "9:52",
      quote:
        '"She caught the 9:52 to Victoria. I kept well clear of her on the train and picked her up as she went through the barrier. Then she took a taxi to Hammersmith." "A taxi?" Smiley interjected. "She must be out of her mind."',
      book: "Call for the Dead",
      author: "John le Carre",
    },
  ],
  "09:53": [
    {
      timeFragment: "seven minutes to ten",
      quote:
        "Miss Pettigrew went to the bus-stop to await a bus. She could not afford the fare, but she could still less afford to lose a possible situation by being late. The bus deposited her about five minutes' walk from Onslow Mansions, an at seven minutes to ten precisely she was outside her destination.",
      book: "Miss Pettigrew Lives for a Day ",
      author: "Winifred Watson",
    },
  ],
  "09:54": [
    {
      timeFragment: "9:54",
      quote:
        "9:54 This is sheer torture. My arms have never ached so much in my entire life. The blankets weigh a ton, and the sheets won't go straight and I have no idea how to do the wretched corners. How do chambermaids do it?",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
  ],
  "09:55": [
    {
      timeFragment: "five to ten",
      quote:
        "At five to ten I'm ready in the hall. Nathaniel's mother's house is nearby but apparently tricky to find, so the plan is to meet here and he'll walk me over. I check my reflection in the hall mirror and wince. The streak of bleach in my hair is as obvious as ever. Am I really going out in public like this?",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
    {
      timeFragment: "five minutes to ten",
      quote:
        '"Good-morning, Lucien, good-morning, said Albert; "your punctuality really alarms me. What do I say? punctuality! You, whom I expected last, you arrive at five minutes to ten, when the time fixed was half-past! Has the ministry resigned?"',
      book: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
    },
  ],
  "09:58": [
    {
      timeFragment: "around ten o'clock",
      quote:
        "I didn't sleep too long, because I think it was only around ten o'clock when I woke up. I felt pretty hungry as soon as I had a cigarette. The last time I'd eaten was those two hamburgers I had with Brossard and Ackley when we went in to Agerstown to the movies. That was a long time ago. It seemed like fifty years ago.",
      book: "Catcher in the Rye ",
      author: "J.D. Salinger",
    },
  ],
  "09:59": [
    {
      timeFragment: "One minute to ten.",
      quote:
        "One minute to ten. With a heavy heart Bert watched the clock. His legs were still aching very badly. He could not see the hands of the clock moving, but they were creeping on all the same.",
      book: "The Ragged Trouserred Philanthropists",
      author: "Robert Tressell",
    },
  ],
  "10:00": [
    {
      timeFragment: "ten o'clock",
      quote:
        "\u2013\u2013In assaying to put on his regimental coat and waistcoat, my uncle Toby found the same objection in his wig, \u2013\u2013so that went off too: \u2013\u2013So that with one thing and what with another, as always falls out when a man is in the most haste, \u2013\u2013'twas ten o'clock, which was half an hour later than his usual time before my uncle Toby sallied out.",
      book: "Tristram Shandy ",
      author: "Laurence Sterne",
    },
    {
      timeFragment: "an hour ago since it was nine",
      quote:
        "'Tis but an hour ago since it was nine, And after one hour more 'twill be eleven.",
      book: "As You Like It",
      author: "William Shakespeare",
    },
    {
      timeFragment: "ten ",
      quote:
        "For some seconds the light went on becoming brighter and brighter, and she saw everything more and more clearly and the clock ticked louder and louder until there was a terrific explosion right in her ear. Orlando leapt as if she had been violently struck on the head. Ten times she was struck. In fact it was ten o'clock in the morning. It was the eleventh of October. It was 1928. It was the present moment.",
      book: "Orlando ",
      author: "Virginia Woolf",
    },
    {
      timeFragment: "10:00",
      quote:
        "The trial was irretrievably over; everything that could be said had been said, but he had never doubted that he would lose. The written verdict was handed down at 10:00 on Friday morning, and all that remained was a summing up from the reporters waiting in the corridor outside the district court.",
      book: "The Girl with the Dragon Tattoo ",
      author: "Stieg Larsson",
    },
    {
      timeFragment: "10 am",
      quote:
        "According to military records no US bombers or any other kind of aircraft were flying over that region at the time, that is around 10 am on November 7,1944.",
      book: "Kafka on the shore ",
      author: "Haruki Murakami",
    },
    {
      timeFragment: "ten o'clock",
      quote:
        "At about ten o'clock in the morning the sun threw a bright dust-laden bar through one of the side windows, and in and out of the beam flies shot like rushing stars.",
      book: "Of Mice And Men ",
      author: "John Steinbeck",
    },
    {
      timeFragment: "ten o' clock",
      quote:
        "I went to bed and the next thing I knew I was awake again and it was getting on for ten o' clock in the morning. Ring, ring, said the telephone, ring, ring.",
      book: "The Medusa Frequency ",
      author: "Russell Hoban",
    },
    {
      timeFragment: "ten o'clock",
      quote:
        "If Wednesday should ever come! It did come, and exactly when it might be reasonably looked for. It came - it was fine - and Catherine trod on air. By ten o'clock, the chaise and four conveyed the two from the abbey; and, after an agreeable drive of almost twenty miles, they entered Woodston, a large and populous village, in a situation not unpleasant.",
      book: "Northanger Abbey ",
      author: "Jane Austen",
    },
    {
      timeFragment: "ten",
      quote:
        "King Richard: Well, but what's o'clock? Buckingham: Upon the stroke of ten.",
      book: "Richard III ",
      author: "William Shakespeare",
    },
    {
      timeFragment: "10 o'clock",
      quote:
        "Monday 30 March 1668 Up betimes, and so to the office, there to do business till about 10 o'clock",
      book: "The Diary of Samuel Pepys ",
      author: "Samuel Pepys",
    },
    {
      timeFragment: "10 o'clock",
      quote:
        "On July 25th, 8:30 a.m. the bitch Novaya dies whelping. At 10 o'clock she is lowered into her cool grave, at 7:30 that same evening we see our first floes and greet them wishing they were the last.",
      book: "The Terrors of Ice and Darkness ",
      author: "Christoph Ransmayr",
    },
    {
      timeFragment: "Ten-thirty",
      quote:
        "The pundit sighed. 'Only a fool like me would leave his door open when a riot can occur at any moment, and only a fool like me would say yes to you,' he said. 'What time?' Just his head was sticking out of the partially opened door. The money from blessing the ice-cream factory must have dulled his desire for work, I thought. 'Ten.' 'Ten-thirty.' Without another word, he closed the door.",
      book: "An Obedient Father ",
      author: "Akhil Sharma",
    },
    {
      timeFragment: "ten o' clock",
      quote:
        "The Saturday immediately preceding the examinations was a very busy day for Kennedy. At ten o' clock he was entering Willey's room; the latter had given him a key and left the room vacant by previous arrangement - in fact he had taken Olivia on another house hunting trip.",
      book: "The Greeks have a word for it ",
      author: "Barry Unsworth",
    },
    {
      timeFragment: "at ten",
      quote:
        "The summer holidays were near at hand when I made up my mind to break out of the weariness of school-life for one day at least. With Leo Dillon and a boy named Mahoney I planned a day's mitching. Each of us saved up sixpence. We were to meet at ten in the morning on the Canal Bridge.",
      book: "Dubliners ",
      author: "James Joyce",
    },
    {
      timeFragment: "10:00",
      quote:
        "The written verdict was handed down at 10:00 on Friday morning, and allthat remained was a summing up from the reporters waiting in the corridor outside the district court.",
      book: "The girl with the dragon tattoo ",
      author: "Stieg Larsson",
    },
  ],
  "10:01": [
    {
      timeFragment: "about ten o'clock",
      quote:
        "At about ten o'clock in the morning the sun threw a bright dust-laden bar through one of the side windows, and in and out of the beam flies shot like rushing stars.'",
      book: "Of Mice And Men",
      author: "John Steinbeck",
    },
  ],
  "10:02": [
    {
      timeFragment: "two minutes after ten",
      quote:
        "It was two minutes after ten; she was not satisfied with her clothes, her face, her apartment. She heated the coffee again and sat down in the chair by the window. Can't do anything more now, she thought, no sense trying to improve anything the last minute.",
      book: "The Daemon Lover",
      author: "Shirley Jackson",
    },
  ],
  "10:03": [
    {
      timeFragment: "10.03",
      quote:
        "It's 10.03 according to his watch, and he is travelling down through the Scottish highlands to Inverness, tired and ever-so-slightly anxious in case he falls asleep between now and when the train reaches the station, and misses his cue to say to Alice, Drew and Aleesha: 'OK, this is Inverness, let's move it.'",
      book: '"Vanilla-Bright like Eminem" from The Farenheit Twins ',
      author: "Michel Faber",
    },
    {
      timeFragment: "10.03",
      quote:
        "The date was the 14th of May and the clock on his desk said the time was twenty three minutes past ten, so he tapped in the numbers 10.23. At least, that's what he meant to do. In fact he typed in the numbers 10.03.",
      book: "Ctrl-Z",
      author: "Andrew Norriss",
    },
  ],
  "10:05": [
    {
      timeFragment: "five past ten",
      quote:
        'We both watch as a pair of swans sail regally under the little bridge. Then I glance at my watch. It\'s already five past ten. "We should get going," I say with a little start. Your mother will be waiting." "There\'s no rush," Nathaniel calls as I hasten down the other side of the bridge. "We\'ve got all day." He lopes down the bridge. "It\'s OK. You can slow down." I try to match his relaxed pace. But I\'m not used to this easy rhythm. I\'m used to striding along crowded pavements, fighting my way, pushing and elbowing.',
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
  ],
  "10:07": [
    {
      timeFragment: "10.07 am",
      quote:
        "10.07 am: In a meeting with Rod, Momo and Guy. We are rehearsing the final for the third time, with Rod and Guy taking the parts of the clients, when Rod's secretary, Lorraine, bursts in.",
      book: "I Don't Know How She Does It",
      author: "Allison Pearson",
    },
  ],
  "10:09": [
    {
      timeFragment: "10:09",
      quote:
        "He followed the squeals down a hallway. A wall clock read 8:09-10:09 Dallas time.",
      book: "American Tabloid",
      author: "James Ellroy",
    },
  ],
  "10:10": [
    {
      timeFragment: "10:10",
      quote: "10:10 Shot is fired.",
      book: "The Hollow Man ",
      author: "John Dickson Carr",
    },
    {
      timeFragment: "ten minutes past 10",
      quote:
        "Saturday morning was bright and sunny, and at ten minutes past 10 Donald arrived at the Embankment entrance of Charing Cross Underground Station, carrying a small suitcase full of clothes suitable for outdoor sports and pastimes.",
      book: "England, Their England",
      author: "AG Macdonell",
    },
  ],
  "10:11": [
    {
      timeFragment: "eleven minutes past ten",
      quote:
        "Through the curtained windows of the furnished apartment which Mrs. Horace Hignett had rented for her stay in New York rays of golden sunlight peeped in like the foremost spies of some advancing army. It was a fine summer morning. The hands of the Dutch clock in the hall pointed to thirteen minutes past nine; those of the ormolu clock in the sitting-room to eleven minutes past ten; those of the carriage clock on the bookshelf to fourteen minutes to six. In other words, it was exactly eight; and Mrs. Hignett acknowledged the fact by moving her head on the pillow, opening her eyes, and sitting up in bed. She always woke at eight precisely.",
      book: "Three Men and a Maid ",
      author: "P.G. Wodehouse",
    },
  ],
  "10:12": [
    {
      timeFragment: "Ten twelve",
      quote:
        "\"I'll take the coffee tray out,\" I suggest humbly. As I pick it up I glance again at my watch. Ten twelve. I wonder if they've started the meeting.",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
    {
      timeFragment: "10:12 a.m.",
      quote:
        "He stood up once, early on, to lock his office door, and then he was reading the last page, and it was exactly 10:12 a.m., and the sun beating on his office windows was a different sun from the one he'd always known.",
      book: "Freedom",
      author: "Jonathan Franzen",
    },
  ],
  "10:13": [
    {
      timeFragment: "thirteen minutes past ten",
      quote:
        '"By the bye," said the first, "I was able this morning to telegraph the very words of the order to my cousin at seventeen minutes past ten." "And I sent it to the Daily Telegraph at thirteen minutes past ten." "Bravo, Mr. Blount!" "Very good, M. Jolivet."',
      book: "Michel Strogoff",
      author: "Jules Verne",
    },
  ],
  "10:14": [
    {
      timeFragment: "Ten fourteen",
      quote:
        '"Okay. Ten fourteen: Mrs. Narada reports that her cat has been attacked by a large dog. Now I send all the boys out looking, but they don\'t find anything until eleven. Then one of them calls in that a big dog has just bitten holes in the tires on his golf cart and run off. Eleven thirty: Dr. Epstein makes his first lost-nap call: dog howling. Eleven thirty-five: Mrs. Norcross is putting the kids out on the deck for some burgers when a big dog jumps over the rail, eats the burgers, growls at the kids, runs off. First mention of lawsuit."',
      book: "Coyote Blue ",
      author: "Christopher Moore",
    },
  ],
  "10:15": [
    {
      timeFragment: "10.15",
      quote:
        "At 10.15 Arlena departed from her rondezvous, a minute or two later Patrick Redfern came down and registered surprise, annoyance, etc. Christine's task was easy enough. Keeping her own watch concealed she asked she asked Linda at twenty-five past eleven what time it was. Linda looked at her watch and replied that it was a quarter to twelve.",
      book: "Evil under the sun ",
      author: "Agatha Christie",
    },
  ],
  "10:16": [
    {
      timeFragment: "10:16",
      quote:
        "10:16 At last. Forty minutes of hard work and I have made precisely one bed. I'm way behind. But never mind. Just keep moving. Laundry next.",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
  ],
  "10:17": [
    {
      timeFragment: "seventeen minutes past ten",
      quote:
        '"By the bye," said the first, "I was able this morning to telegraph the very words of the order to my cousin at seventeen minutes past ten." "And I sent it to the Daily Telegraph at thirteen minutes past ten."n "Bravo, Mr. Blount!" "Very good, M. Jolivet." "I will try and match that!"',
      book: "Michel Strogoff",
      author: "Jules Verne",
    },
  ],
  "10:18": [
    {
      timeFragment: "10:18",
      quote:
        "I know that it was 10:18 when I got home because I look at my watch a lot.",
      book: "Extremely Loud and Incredibly Close",
      author: "Jonathan Safran Foer",
    },
  ],
  "10:20": [
    {
      timeFragment: "twenty past ten",
      quote:
        "How much is the clock fast now? His mother straightened the battered alarm clock that was lying on its side in the middle of the mantelpiece until its dial showed a quarter to twelve and then laid it once more on its side. An hour and twenty-five minutes, she said. The right time now is twenty past ten.",
      book: "A Portrait of the Artist as a Young Man",
      author: "James Joyce",
    },
  ],
  "10:21": [
    {
      timeFragment: "10.21",
      quote:
        "Liz Headleand stares into the mirror, as though entranced. She does not see herself or the objects on her dressing-table. The clock abruptly jerks to 10.21.",
      book: "The Radiant Way",
      author: "Margaret Drabble",
    },
  ],
  "10:22": [
    {
      timeFragment: "10:22",
      quote:
        "I listened to them, and listened to them again, and then before I had time to figure out what to do, or even what to think or feel, the phone started ringing. It was 10:22:27. I looked at the caller ID and saw that it was him.",
      book: "Extremely Loud and Incredibly Close",
      author: "Jonathan Safran Foer",
    },
  ],
  "10:23": [
    {
      timeFragment: "twenty three minutes past ten",
      quote:
        "The date was the 14th of May and the clock on his desk said the time was twenty three minutes past ten, so he tapped in the numbers 10.23. At least, that's what he meant to do. In fact he typed in the numbers 10.03",
      book: "Ctrl-Z",
      author: "Andrew Norriss",
    },
  ],
  "10:25": [
    {
      timeFragment: "10:25",
      quote:
        "10:25: Phone call from L\u00fcding, very worked up, urging me to return at once and get in touch with Alois, who was equally worked up.",
      book: "The Lost Honour of Katharina Blum",
      author: "Heinrich B\u00f6ll",
    },
    {
      timeFragment: "10:25",
      quote:
        "One meal is enough now, topped up with a glucose shot. Sleep is still 'black', completely unrefreshing. Last night I took a 16 mm. film of the first three hours, screened it this morning at the lab. The first true-horror movie. I looked like a half-animated corpse. Woke 10:25. To sleep 3:45.",
      book: "The Voices of Time ",
      author: "JG Ballard",
    },
  ],
  "10:26": [
    {
      timeFragment: "10:26",
      quote:
        "10:26 No. Please, no. I can hardly bear to look. It's a total disaster. Everything in the washing machine has gone pink. Every single thing. What happened? With trembling fingers I pick out a damp cashmere cardigan. It was a cream when I put it in. It's now a sickly shade of candy floss. I knew K3 was bad news. I knew it -",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
    {
      timeFragment: "ten-twenty-six",
      quote:
        "In the exact centre of my visual field was the alarm clock, hands pointing to ten-twenty-six. An alarm clock I received as a memento of somebody's wedding.",
      book: "Hard-boiled Wonderland and The End of the World",
      author: "Haruki Murakami",
    },
  ],
  "10:27": [
    {
      timeFragment: "twenty-seven minutes past 10",
      quote:
        "Mr. Harcourt woke up with mysterious suddenness at twenty-seven minutes past 10, and, by a curious coincidence, it was at that very instant that the butler came in with two footmen laden with trays of whisky, brandy, syphons, glasses, and biscuits.",
      book: "England, Their England",
      author: "AG Macdonell",
    },
    {
      timeFragment: "10:27 a.m.",
      quote:
        "She is on holiday in Norfolk. The substandard clock radio says 10:27 a.m. The noise is Katrina the Cleaner thumping the hoover against the skirting boards and the bedroom doors. Her hand is asleep. It is still hooked through the handstrap of the camera. She unhooks it and shakes it to get the blood back into it. She puts her feet on top of her trainers and slides them across the substandard carpet. It has the bare naked feet of who knows how many hundreds of dead or old people on it.",
      book: "The Accidental ",
      author: "Ali Smith",
    },
  ],
  "10:30": [
    {
      timeFragment: "10.30 a.m.",
      quote: "10.30 a.m. Break",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "ten thirty",
      quote: "according to the clock on the wall, it is barely ten thirty.",
      book: "The Hours ",
      author: "Michael Cunningham",
    },
    {
      timeFragment: "ten-thirty",
      quote:
        "At ten-thirty I'm cleaned up, shaved and dressed in my Easter best - a two-piece seersucker Palm Beach I've had since college.",
      book: "The Sportswriter",
      author: "Richard Ford",
    },
  ],
  "10:31": [
    {
      timeFragment: "Just after half past ten.",
      quote:
        '"If you please. You went to bed at what time, Madame?" "Just after half past ten."',
      book: "Death on the Nile",
      author: "Agatha Christie",
    },
  ],
  "10:32": [
    {
      timeFragment: "Just after half past ten.",
      quote:
        '"If you please. You went to bed at what time, Madame?" "Just after half past ten."',
      book: "Death on the Nile",
      author: "Agatha Christie",
    },
  ],
  "10:35": [
    {
      timeFragment: "Five-and-twenty to eleven",
      quote:
        "Five-and-twenty to eleven. A horrible hour - a macabre hour, for it is not only the hour of pleasure ended, it is the hour when pleasure itself has been found wanting.",
      book: "Rope",
      author: "Patrick Hamilton",
    },
  ],
  "10:36": [
    {
      timeFragment: "ten thirty-six",
      quote:
        '"Strand post mark and dispatched ten thirty-six" said Holmes reading it over and over. "Mr Overton was evidently considerably excited when he sent it over and somewhat incoherent in consequence."',
      book: "The Adventure of the Missing Three-Quarter",
      author: "Arthur Conan Doyle",
    },
  ],
  "10:37": [
    {
      timeFragment: "10.37 a.m.",
      quote:
        "I quite agree with you,' said Mr Murbles. 'It is a most awkward situation. Lady Dormer died at precisely 10.37 a.m. on November 11th.'",
      book: "The Unpleasantness at the Bellona Club",
      author: "Dorothy L. Sayers",
    },
  ],
  "10:38": [
    {
      timeFragment: "10:38",
      quote:
        "There must be a solution, there must be. Frantically I scan the cans of products stacked on the shelves. Stain Away. Vanish. There has to be a remedy. ... I just need to think. ... 10:38 OK, I have the answer. It may not totally work\u2014but it's my best shot.",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
  ],
  "10:40": [
    {
      timeFragment: "10:40",
      quote:
        "10:40: Call from Katharina asking me whether I had really said what was in the News.",
      book: "The Lost Honour of Katharina Blum",
      author: "Heinrich B\u00f6ll",
    },
  ],
  "10:43": [
    {
      timeFragment: "10.43 a.m",
      quote:
        "24 January, 10.43 a.m: one month and two days later I wonder if I should worry about the fact that my darling boyfriend bought me a birthday present that has the potential to cause instant death...",
      book: "The Wish List",
      author: "Jane Costello",
    },
  ],
  "10:45": [
    {
      timeFragment: "quarter to eleven",
      quote:
        "If this is so, we have now to determine what Barker and Mrs. Douglas, presuming they are not the actual murderers, would have been doing from quarter to eleven, when the sound of the shot brought them down, until quarter past eleven, when they rang for the bell and summoned the servants'.",
      book: "The Valley of Fear",
      author: "Arthur Conan Doyle",
    },
    {
      timeFragment: "quarter to eleven",
      quote:
        "They reached King's Cross at a quarter to eleven. Mr Weasley dashed across the road to get trolleys for their trunks and they all hurried into the station.",
      book: "Harry Potter and the Chamber of Secrets ",
      author: "J.K.Rowling",
    },
  ],
  "10:47": [
    {
      timeFragment: "10.47",
      quote:
        "He whistles in the shower. It is 10.47 and he is ready for the off.",
      book: "Trumpet",
      author: "Jackie Kay",
    },
  ],
  "10:48": [
    {
      timeFragment: "10.48am",
      quote:
        "At 10.48am, I closed my folder but didn't bother putting it back in my bag, so you knew I was on my way to a committee or meeting room nearby. Before I stood up, I folded my paper napkin and put it and the spoon into my coffee cup, a neat sort of person, you thought.",
      book: "Apple Tree Yard",
      author: "Louise Doughty",
    },
  ],
  "10:49": [
    {
      timeFragment: "forty-nine minutes past ten",
      quote:
        "By forty-nine minutes past ten, we fall in again with a fine portion of the ancient road, which the modern track constantly follows, and descend by some steep windings, hewn in the side of a precipitous cliff, to the place where the Ouad-el-Haoud commences.",
      book: "Narrative of a Journey round the Dead Sea and in the Bible lands in 1850 and 1851",
      author: "F\u00e9licien de Saulcy",
    },
  ],
  "10:50": [
    {
      timeFragment: "10.50 a.m.",
      quote: "10.50 a.m. Art class with Mrs Peters",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "ten to eleven",
      quote:
        "As he walked back to the flight office, airmen were forming a line to await the arrival of the NAAFI van with morning tea and cakes. Lambert looked at his watch; it was ten to eleven.",
      book: "Bomber",
      author: "Len Deighton",
    },
  ],
  "10:53": [
    {
      timeFragment: "10.53 hrs",
      quote:
        "He begins to make a record of our observations.'10.53 hrs,' he writes, as we crouch at the top of the stairs, listening to his mother in the hall below.",
      book: "Spies",
      author: "Michael Frayn",
    },
    {
      timeFragment: "10:53",
      quote:
        "I gaze and gaze again at that face, which seems to me both strange and familiar, said Austerlitz, I run the tape back repeatedly, looking at the time indicator in the top left-hand corner of the screen, where the figures covering part of her forehead show the minutes and seconds, from 10:53 to 10:57, while the hundredths of a second flash by so fast that you cannot read and capture them.",
      book: "Austerlitz ",
      author: "W.G. Sebald",
    },
  ],
  "10:55": [
    {
      timeFragment: "five minutes to eleven",
      quote:
        "The clock was still saying five minutes to eleven when Pooh and Piglet set out on their way half an hour later.",
      book: "The House at Pooh Corner",
      author: "AA Milne",
    },
  ],
  "10:57": [
    {
      timeFragment: "10.57",
      quote:
        "I run the tape back repeatedly, looking at the time indicator in the top left-hand corner of the screen, where the figures covering part of her forehead show the minutes and seconds, from 10.53 to 10.57.",
      book: "Austerlitz",
      author: "W. G. Sebald",
    },
  ],
  "10:58": [
    {
      timeFragment: "10:58",
      quote:
        "One day Joe was sitting in the office waiting for his 11 o'clock appointment, and at 10:58 this black gal came in.",
      book: "Lightning Rods",
      author: "Helen DeWitt",
    },
  ],
  "10:59": [
    {
      timeFragment: "one minute to eleven",
      quote:
        "Harry grunted in his sleep and his face slid down the window an inch or so, making his glasses still more lopsided, but he did not wake up. An alarm clock, repaired by Harry several years ago, ticked loudly on the sill, showing one minute to eleven.",
      book: "Harry Potter and the Half-Blood Prince",
      author: "J. K. Rowling",
    },
  ],
  "11:00": [
    {
      timeFragment: "eleven o'clock",
      quote:
        "'Who can - what can -\" asked Mrs Dalloway (thinking it was outrageous to be interrupted at eleven o'clock on the morning of the day she was giving a party), hearing a step on the stairs.",
      book: "Mrs Dalloway ",
      author: "Virginia Woolf",
    },
    {
      timeFragment: "11 o'clock",
      quote:
        '"By 11 o\'clock I have finished the first chapter of Mr Y. The winter sun is peeping meekly through the thin curtains and I decide to get up"',
      book: "The End of Mr Y ",
      author: "Scarlett Thomas",
    },
    {
      timeFragment: "at eleven",
      quote:
        "He was rather a long time, and I began to feel muffled, weighed down by thick stuffs and silence. I thought: He'll never come back; and when he did his figure seemed to come at me from very far away, dream-like and dwindled, making his way back along a tunnel...I dare say it was champagne at eleven in the morning.",
      book: "The Weather in the Streets ",
      author: "Rosamond Lehmann",
    },
    {
      timeFragment: "11 o'clock",
      quote:
        "As her husband had told him, she was still in bed although it was past 11 o'clock. Her normally mobile face was encased in clay, rigid and menacing as an Aztec mask.",
      book: "Scoop ",
      author: "Evelyn Waugh",
    },
    {
      timeFragment: "eleven ",
      quote:
        "As they looked the whole world became perfectly silent, and a flight of gulls crossed the sky, first one gull leading, then another, and in this extraordinary silence and peace, in this pallor, in this purity, bells struck eleven times the sound fading up there among the gulls.",
      book: "Mrs. Dalloway ",
      author: "Virginia Woolf",
    },
    {
      timeFragment: "eleven o'clock",
      quote:
        "At eleven o'clock in the morning, large flakes had appeared from a colourless sky and invaded the fields, gardens and lawns of Romerike like an armada from outer space.",
      book: "The Snowman ",
      author: "Jo Nesbo",
    },
    {
      timeFragment: "eleven o'clock",
      quote:
        "At eleven o'clock the phone rang, and still the figure did not respond, any more than it had responded when the phone had rung at twenty-five to seven, and again for ten minutes continuously starting at five to seven...",
      book: "The Long Dark Tea-Time of the Soul",
      author: "Douglas Adams",
    },
    {
      timeFragment: "eleven o'clock",
      quote:
        "Big Ben was striking as she stepped out into the street. It was eleven o'clock and the unused hour was fresh as if issued to children on a beach.",
      book: "Mrs Dalloway ",
      author: "Virginia Woolf",
    },
    {
      timeFragment: "eleven o'clock",
      quote:
        "It was about eleven o'clock in the morning, mid October, with the sun not shining and a look of hard wet rain in the clearness of the foothills. I was wearing my powder-blue suit, with dark blue shirt, tie and display handkerchief, black brogues, black wool socks with dark blue clocks on them. I was neat, clean, shaved and sober, and I didn't care who knew it. I was everything the well-dressed private detective ought to be. I was calling on four millon dollars.",
      book: "The big sleep ",
      author: "Raymond Chandler",
    },
    {
      timeFragment: "eleven ",
      quote:
        "My sister is terrified that I might write and tell all the family secrets. Why do I feel like a rebel, like an iconoclast? I am only trying to do a writing class, what is wrong with that? I keep telling myself that once in the car I will be fine, I can listen to Radio Four Woman's Hour and that will take me till eleven o'clock when the class starts.",
      book: "The Saints ",
      author: "Patsy Hickman",
    },
    {
      timeFragment: "eleven o'clock",
      quote:
        "ON the morning following the events just narrated, Mrs. Arlington was seated at breakfast in a sweet little parlour of the splendid mansion which the Earl of Warrington had taken and fitted up for her in Dover Street, Piccadilly. It was about eleven o'clock; and the Enchantress was attired in a delicious deshabill\u00e9. With her little feet upon an ottoman near the fender, and her fine form reclining in a luxurious large arm-chair, she divided her attention between her chocolate and the columns of the Morning Herald. She invariably prolonged the morning's repast as much as possible, limply because it served to wile away the time until the hour for dressing arrived.",
      book: "The Mysteries of London ",
      author: "G.W.M. Reynolds",
    },
    {
      timeFragment: "Eleven o'Clock",
      quote:
        "Quiet as I am, I become at Eleven o'Clock in the Morning on every day of the week save Sunday a raving, ranting maniac -- a dangerous lunatic, panting with insane desires to do, not only myself but other people, a mischief, and possessed less by hallucination than by rabies.",
      book: "Twice Around the Clock ",
      author: "George Augustus Sala",
    },
    {
      timeFragment: "eleven",
      quote:
        "Though perhaps' \u2013 but here the bracket clock whirred and then hectically struck eleven, its weights spooling downwards at the sudden expense of energy. She had to sit for a moment, when the echo had vanished, to repossess her thoughts.",
      book: "The Stranger's Child ",
      author: "Alan Hollinghurst",
    },
    {
      timeFragment: "at eleven",
      quote:
        "We got to Waterloo at eleven, and asked where the eleven-five started from. Of course nobody knew; nobody at Waterloo ever does know where a train is going to start from, or where a train when it does start is going to, or anything about it.",
      book: "Three Men in a Boat ",
      author: "Jerome K Jerome",
    },
    {
      timeFragment: "eleven o'clock",
      quote:
        "We passed a few sad hours until eleven o'clock, when the trial was to commence. My father and the rest of the family being obliged to attend as witnesses, I accompanied them to the court. During the whole of this wretched mockery of justice I suffered living torture.",
      book: "Frankenstein ",
      author: "Mary Shelley",
    },
  ],
  "11:01": [
    {
      timeFragment: "just past eleven",
      quote:
        "O'Neil rises and takes the tray. He has finished the tea, but the muffins are still here in a wicker basket covered with a blue napkin. The clock above the stove says that it is just past eleven, and guests will be arriving at the house now.",
      book: "Mary and O'Neil",
      author: "Justin Cronin",
    },
  ],
  "11:02": [
    {
      timeFragment: "11.02am",
      quote:
        "On August 9th, three days later, at 11.02am, another B\u221229 dropped the second bomb on the industrial section of the city of Nagasaki, totally destroying 1 1/2 square miles of the city, killing 39,000 persons and injuring 25,000 more.",
      book: "The Atomic Bombings of Hiroshima and Nagasaki",
      author: "The Manhattan Engineer District",
    },
  ],
  "11:03": [
    {
      timeFragment: "Eleven oh-three",
      quote:
        '"What makes you think it\'s for real?" "Just a hunch, really. He sounded for real. Sometimes you can just tell about people"-he smiled-"even if you\'re a dull old WASP." "I think it\'s a setup." "Why?" "I just do. Why would someone from the government want to help you?" "Good question. Guess I\'ll find out." She went back into the kitchen."What time are you meeting him?" she called out. "Eleven oh-three," he said. "That made me think he\'s for real. Military and intelligence types set precise appointment times to eliminate confusion and ambiguity. Nothing ambiguous about eleven oh-three."',
      book: "Little Green Men ",
      author: "Christopher Buckley",
    },
    {
      timeFragment: "11.03am",
      quote:
        "On the fourth, at 11.03am, the editor of the Yidische Zaitung put in a call to him; Doctor Yarmolinsky did not answer. He was found in his room, his face already a little dark, nearly nude beneath a large, anachronistic cape.",
      book: "Death and the Compass",
      author: "Jorge Luis Borges",
    },
  ],
  "11:04": [
    {
      timeFragment: "past 11 o'clock",
      quote:
        "As her husband had told him, she was still in bed although it was past 11 o'clock. Her normally mobile face was encased in clay, rigid and menacing as an Aztec mask.",
      book: "Scoop ",
      author: "Evelyn Waugh",
    },
  ],
  "11:05": [
    {
      timeFragment: "11:05",
      quote:
        "July 3: 5 3/4 hours. Little done today. Deepening lethargy, dragged myself over to the lab, nearly left the road twice. Concentrated enough to feed the zoo and get the log up to date. Read through the operating manuals Whitby left for the last time, decided on a delivery rate of 40 rontgens/min., target distance of 530 cm. Everything is ready now. Woke 11:05. To sleep 3:15.",
      book: "The Voices of Time ",
      author: "JG Ballard",
    },
    {
      timeFragment: "five past eleven",
      quote:
        "Sansom arrived in a Town Car at five past eleven. Local plates, which meant he had ridden up most of the way on the train. Less convenient for him, but a smaller carbon footprint than driving all the way, or flying. Every detail mattered, in a campaign.",
      book: "Gone Tomorrow",
      author: "Lee Child",
    },
  ],
  "11:06": [
    {
      timeFragment: "11:06",
      quote: "11:06 And ... oh. The ironing. What am I going to do about that?",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
    {
      timeFragment: "11.06am",
      quote:
        "Despite the remaking of the BookWorld, some books remained tantalisingly out of reach [...] It was entirely possible that they didn't know there was a BookWorld, and still they thought they were real. A fantastic notion, until you consider that up until 11.06am on 12 April 1948, everyone else had thought the same.",
      book: "One of Our Thursdays is Missing",
      author: "Jasper Fforde",
    },
  ],
  "11:07": [
    {
      timeFragment: "seven minutes past eleven",
      quote:
        "At exactly seven minutes past eleven by the ship's clock the Adventurer gave a prolonged screech and, moorings cast off, edged her way out of the basin and dipped her nose in the laughing waters of the bay, embarked at last on a voyage that was destined to fully vindicate her new name.",
      book: "The Adventure Club Afloat ",
      author: "Ralph Henry Barbour",
    },
  ],
  "11:08": [
    {
      timeFragment: "eight minutes past eleven",
      quote:
        "The bursar was standing in the hall with his arms folded across his chest and when he caught sight of the fat young man he looked significantly at the clock. It was eight minutes past eleven.",
      book: "Stephen Hero",
      author: "James Joyce",
    },
  ],
  "11:09": [
    {
      timeFragment: "around eleven",
      quote:
        "The first time I saw them it was around eleven, eleven-fifteen, a Saturday morning, I was about two thirds through my route when I turned onto their block and noticed a '56 Ford sedan pulled up in the yard with a big open U-Haul behind.",
      book: "Where I'm Calling From ",
      author: "Raymond Carver",
    },
  ],
  "11:10": [
    {
      timeFragment: "Ten minutes after eleven",
      quote:
        "Ten minutes after eleven in Archie McCue's room on the third floor of the extension to the Robert Matthews' soaring sixties' tower - The Queen's Tower, although no queen was ever likely to live in it.",
      book: "Emotionally Weird",
      author: "Kate Atkinson",
    },
  ],
  "11:12": [
    {
      timeFragment: "11:12",
      quote:
        "11:12 I have a solution, via the local paper. A girl from the village will collect it, iron it all overnight at \u00a33 a shirt, and sew on Eddie's button.",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
    {
      timeFragment: "11:12",
      quote:
        '"I squinted down the street at the bank clock: 11:12, 87 degrees. "It\'s only a block and a half and it\'s not that hot, Daddy. The walk will do you good." This conversation made me breathless, as if I were wearing a girdle with tight stays."',
      book: "A Thousand Acres",
      author: "Jane Smiley",
    },
  ],
  "11:14": [
    {
      timeFragment: "11.14am.",
      quote:
        "The report was dated Sunday, 25 September, 1966, at 11.14am. The text was laconic. Call from Hrk Vanger; stating that his brother's daughter (?) Harriett Ulrika Vanger, born 15 June 1960 (age 1960) has been missing from her home on Hedley Island since Saturday afternoon.",
      book: "The Girl With The Dragon Tattoo",
      author: "Stieg Larsson",
    },
  ],
  "11:15": [
    {
      timeFragment: "11:15",
      quote:
        '"Have you a couple of days to spare? Have just been wired for from the west of England in connection with Boscombe Valley tragedy. Shall be glad if you will come with me. Air and scenery perfect. Leave Paddington by the 11:15."',
      book: "The Adventures of Sherlock Holmes",
      author: "Sir Arthur Conan Doyle",
    },
    {
      timeFragment: "eleven-fifteen",
      quote:
        "The first time I saw them it was around eleven, eleven-fifteen, a Saturday morning, I was about two thirds through my route when I turned onto their block and noticed a '56 Ford sedan pulled up in the yard with a big open U-Haul behind. There are only three houses on Pine, and theirs was the last house,the others being the Murchisons, who'd been in Arcata a little less than a year, and the Grants, who'd been here about two years. Murchison worked at Simpson Redwood, and Gene Grant was a cook on the morning shift at Denny's. Those two, then a vacant lot, then the house on the end that used to belong to the Coles.",
      book: "Where I'm Calling From ",
      author: "Raymond Carver",
    },
  ],
  "11:17": [
    {
      timeFragment: "seventeen minutes past eleven",
      quote:
        "Mrs. Mooney glanced instinctively at the little gilt clock on the mantelpiece as soon as she had become aware through her revery that the bells of George's Church had stopped ringing. It was seventeen minutes past eleven: she would have lots of time to have the matter out with Mr. Doran and then catch short twelve at Marlborough Street. She was sure she would win.",
      book: "Dubliners ",
      author: "James Joyce",
    },
  ],
  "11:18": [
    {
      timeFragment: "11.18",
      quote:
        "It is 11.18. A row of bungalows in a round with a clump of larch tree in the middle.",
      book: "Trumpet",
      author: "Jackie Kay",
    },
  ],
  "11:19": [
    {
      timeFragment: "11:19",
      quote:
        "A whistle cut sharply across his words. Peter got onto his knees to look out the window, and Miss Fuller glared at him. Polly looked down at her watch: 11:19. The train. But the stationmaster had said it was always late.",
      book: "Blackout",
      author: "Connie Willis",
    },
  ],
  "11:20": [
    {
      timeFragment: "11h20",
      quote:
        "OFFICER'S NOTES Disruption alert logged 11h20 from Stones' Pool Hall (Premises ID 33CBD-Long181). Officer and Aito /379 responded. On arrival found subject shouting threats and acting in aggressive manner. A scan of the subject's SIM ID register revealed that the subject has recent priors including previous public disruptions and a juvenile record.",
      book: "Moxyland ",
      author: "Lauren Beukes",
    },
    {
      timeFragment: "11.20",
      quote:
        "Sweeney pointed to the clock above the bar, held in the massive and indifferent jaws of a stuffed alligator head. The time was 11.20.",
      book: "American Gods",
      author: "Neil Gaiman",
    },
  ],
  "11:25": [
    {
      timeFragment: "twenty-five past eleven",
      quote:
        "At 10.15 Arlena departed from her rondezvous, a minute or two later Patrick Redfern came down and registered surprise, annoyance, etc. Christine's task was easy enough. Keeping her own watch concealed she asked Linda at twenty-five past eleven what time it was. Linda looked at her watch and replied that it was a quarter to twelve.",
      book: "Evil under the Sun ",
      author: "Agatha Christie",
    },
    {
      timeFragment: "11.25am",
      quote:
        "When, at about 11.25am, Katharina Blum was finally taken from her apartment for questioning, it was decided not to handcuff her at all.",
      book: "The Lost Honour of Katharina Blum",
      author: "Heinrich B\u00f6ll",
    },
  ],
  "11:27": [
    {
      timeFragment: "11.27",
      quote:
        "It's from one of the more recent plates the tree has scanned: 11.27 in the morning of 4 April 1175",
      book: "The Second Internet Cafe, Part 2: The Cascade Annihilator",
      author: "Chris James",
    },
  ],
  "11:28": [
    {
      timeFragment: "twenty-eight minutes past eleven",
      quote:
        "From twenty minutes past nine until twenty-seven minutes past nine, from twenty-five minutes past eleven until twenty-eight minutes past eleven, from ten minutes to three until two minutes to three the heroes of the school met in a large familiarity whose Olympian laughter awed the fearful small boy that flitted uneasily past and chilled the slouching senior that rashly paused to examine the notices in assertion of an unearned right.",
      book: "Sinister Street",
      author: "Compton Mackenzie",
    },
  ],
  "11:29": [
    {
      timeFragment: "twenty-nine minutes after eleven, a.m.",
      quote:
        "You are four minutes too slow. No matter; it's enough to mention the error. Now from this moment, twenty-nine minutes after eleven, a.m., this Wednesday, 2nd October, you are in my service.",
      book: "Around the World in Eighty Days",
      author: "Jules Verne",
    },
  ],
  "11:30": [
    {
      timeFragment: "11.30",
      quote:
        "'It is now 11.30. The door to this room is shut, and will remain shut, barring emergencies, until 12.00. I am authorised to inform you that we are now under battle orders.",
      book: "Singularity Sky ",
      author: "Charles Stross",
    },
    {
      timeFragment: "half-past eleven",
      quote:
        '"O, Frank - I made a mistake! - I thought that church with the spire was All Saints\', and I was at the door at half-past eleven to a minute as you said..."',
      book: "Far from the madding crowd ",
      author: "Thomas Hardy",
    },
    {
      timeFragment: "half-past eleven",
      quote:
        '"Thank-you," said C.B. quietly; but as he hung up his face was grim. In a few minutes he would have to break it to John that, although they had braved such dredful perils dring the earlier part of the night they had, after all, failed to save Christina. Beddows had abjured Satan at a little after half-past eleven. By about eighteen minutes the Canon had beaten them to it again."',
      book: "To the Devil a Daughter ",
      author: "Dennis Wheatley",
    },
    {
      timeFragment: "11.30",
      quote: "This time it was Kumiko. The wall clock said 11.30.",
      book: "The Wind-up Bird Chronicle ",
      author: "Haruki Murakami",
    },
  ],
  "11:31": [
    {
      timeFragment: "1131",
      quote:
        "Albatross 8 passed over Pamlico Sound at 1131 local time. Its on-board programming was designed to trace thermal receptors over the entire visible horizon, interrogating everything in sight and locking on any signature that fit its acquisition parameters.",
      book: "The Hunt for Red October ",
      author: "Tom Clancy",
    },
  ],
  "11:32": [
    {
      timeFragment: "eleven thirty two",
      quote:
        "And after that, not forgetting, there was the Flemish armada, all scattered, and all officially drowned, there and then, on a lovely morning, after the universal flood, at about eleven thirty two was it? Off the coast of Cominghome...",
      book: "Finnegans Wake",
      author: "James Joyce",
    },
  ],
  "11:34": [
    {
      timeFragment: "11.34am",
      quote:
        '"Christmas Eve 1995. 11.34am. The first time, Almasa says it slowly and softly, as if she is really looking for an answer, "Are you talking to me?" She peers into the small, grimy mirror in a train toilet."',
      book: "How to Fare Well and Stay Fair",
      author: "Adnan Mahmutovic",
    },
  ],
  "11:35": [
    {
      timeFragment: "11.35",
      quote:
        "At 11.35 the Colonel came out; he looked hot and angry as he strode towards the lift. There goes a hanging judge, thought Wormold.",
      book: "Our Man in Havana",
      author: "Graham Greene",
    },
  ],
  "11:36": [
    {
      timeFragment: "Eleven thirty-six",
      quote:
        "I ran up the stairs, away from the heat and the noise, the mess and the confusion. I saw the clock radio by my bed. Eleven thirty-six.",
      book: "Losing You",
      author: "Nicci French",
    },
  ],
  "11:38": [
    {
      timeFragment: "11:38",
      quote:
        "At 11:38, she left her desk and walked to the side door of the auditorium, arriving ten minutes before noon.",
      book: "The Circle",
      author: "Dave Eggers",
    },
  ],
  "11:40": [
    {
      timeFragment: "11.40am",
      quote:
        '"Did escape occur to him? \u2026 But the door was locked, and the window heavily barred with iron rods. He sat down again, and drew his journal from his pocket. On the line where these words were written, "21st December, Saturday, Liverpool," he added, "80th day, 11.40am," and waited."',
      book: "Around the World in Eighty Days",
      author: "Jules Verne",
    },
    {
      timeFragment: "twenty minutes before noon",
      quote:
        "During the sessions at Ito he read the Lotus Sutra on mornings of play, and he now seemed to be bringing himself to order through silent meditation. Then, quickly, there came a rap of stone on board. It was twenty minutes before noon.",
      book: "The Master of Go ",
      author: "Yusunari Kawabata",
    },
  ],
  "11:41": [
    {
      timeFragment: "Eleven forty-one",
      quote:
        "\"Spagnola took a deep breath and started into the log again. \"Eleven forty-one: large dog craps in Dr. Yamata's Aston Martin. Twelve oh-three: dog eats two, count 'em, two of Mrs. Wittingham's Siamese cats. She just lost her husband last week; this sort of put her over the edge. We had to call Dr. Yamata in off the putting green to give her a sedative. The personal-injury lawyer in the unit next to hers was home for lunch and he came over to help. He was talking class action then, and we didn't even know who owned the dog yet.\"",
      book: "Coyote Blue ",
      author: "Christopher Moore",
    },
  ],
  "11:42": [
    {
      timeFragment: "11:42",
      quote:
        "11:42 I'm doing fine. I'm doing well. I've got the Hoover on, I'm cruising along nicely- What was that? What just went up the Hoover? Why is it making that grinding noise? Have I broken it?",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
  ],
  "11:44": [
    {
      timeFragment: "quarter to twelve",
      quote:
        "At 10.15 Arlena departed from her rondezvous, a minute or two later Patrick Redfern came down and registered surprise, annoyance, etc. Christine's task was easy enough. Keeping her own watch concealed she asked Linda at twenty-five past eleven what time it was. Linda looked at her watch and replied that it was a quarter to twelve.",
      book: "Evil under the Sun ",
      author: "Agatha Christie",
    },
  ],
  "11:45": [
    {
      timeFragment: "quarter to twelve",
      quote:
        "\"...I waited till a quarter to twelve, and found then that I was in All Souls'. But I wasn't much frightened, for I thought it could be tomorrow as well.\"",
      book: "Far from the madding crowd ",
      author: "Thomas Hardy",
    },
    {
      timeFragment: "quarter to twelve",
      quote:
        '"I will tell you the time," said Septimus, very slowly, very drowsily, smiling mysteriously. As he sat smiling at the dead man in the grey suit the quarter struck, the quarter to twelve."',
      book: "Mrs. Dalloway ",
      author: "Virginia Woolf",
    },
    {
      timeFragment: "quarter to twelve",
      quote: "As he sat smiling, the quarter struck - the quarter to twelve.",
      book: "Mrs Dalloway ",
      author: "Virginia Woolf",
    },
    {
      timeFragment: "11.45am",
      quote:
        "I arrived at St. Gatien from Nice on Tuesday, the 14th of August. I was arrested at 11.45am on Thursday, the 16th by an agent de police and an inspector in plain clothes and taken to the Commissariat.",
      book: "Epitaph for a Spy",
      author: "Eric Ambler",
    },
    {
      timeFragment: "11:45 A.M.",
      quote:
        "She tucked the phone in the crook of her neck and thumbed hurriedly through her pink messages. .... Dr. Provetto, at 11:45 A.M.",
      book: "Mistaken Identity ",
      author: "Lisa Scottoline",
    },
  ],
  "11:46": [
    {
      timeFragment: "quarter to twelve",
      quote:
        "At 10.15 Arlena departed from her rondezvous, a minute or two later Patrick Redfern came down and registered surprise, annoyance, etc. Christine's task was easy enough. Keeping her own watch concealed she asked Linda at twenty-five past eleven what time it was. Linda looked at her watch and replied that it was a quarter to twelve.",
      book: "Evil under the Sun ",
      author: "Agatha Christie",
    },
  ],
  "11:47": [
    {
      timeFragment: "thirteen minutes to noon",
      quote:
        "It was a vast plain with no one on it, neither living on the earth nor dead beneath it; and I walked a long time beneath a colourless sky, which didn't let me judge the time (my watch, set like all military watches to Berlin time, hadn't stood up to the swim and showed an eternal thirteen minutes to noon).",
      book: "The Kindly Ones",
      author: "Jonathan Littell",
    },
  ],
  "11:48": [
    {
      timeFragment: "ten minutes before noon",
      quote:
        "At 11:38, she left her desk and walked to the side door of the auditorium, arriving ten minutes before noon.",
      book: "The Circle",
      author: "Dave Eggers",
    },
  ],
  "11:50": [
    {
      timeFragment: "ten minutes to twelve",
      quote:
        "The man who gave them to him handed him a ten-shilling note and promised him another if it were delivered at exactly ten minutes to twelve.",
      book: "The Adventure of Johnnie Waverley: A Hercule Poirot Story",
      author: "Agatha Christie",
    },
  ],
  "11:51": [
    {
      timeFragment: "nine minutes to twelve",
      quote:
        "The next day, at nine minutes to twelve o'clock noon, the last clock ran down and stopped. It was then placed in the town museum, as a collector's item, or museum piece, with proper ceremonies, addresses, and the like.",
      book: "Lanterns & Lances",
      author: "James Thurber",
    },
  ],
  "11:52": [
    {
      timeFragment: "eight minutes to twelve",
      quote:
        '"At any rate, we whirled into the station with many more, just as the great clock pointed to eight minutes to twelve o\'clock. "Thank God! We are in time," said the young man, "and thank you, too, my friend, and your good horse..."',
      book: "Black Beauty",
      author: "Anna Sewell",
    },
  ],
  "11:54": [
    {
      timeFragment: "six minutes to twelve",
      quote:
        "He swilled off the remains of [his beer] and looked at the clock. It was six minutes to twelve.",
      book: "Hangover Square",
      author: "Patrick Hamilton",
    },
  ],
  "11:55": [
    {
      timeFragment: "five minutes to twelve",
      quote:
        "He was tearing off on his bicycle to one of the jobs about five minutes to twelve to see if he could catch anyone leaving off for dinner before the proper time.",
      book: "The Ragged Trousered Philanthropists",
      author: "Robert Tressell",
    },
    {
      timeFragment: "11:55 a.m.",
      quote: "It was 11:55 a.m. on April 30.",
      book: "All the President's Men ",
      author: "Bernstein & Woodward",
    },
    {
      timeFragment: "11:55",
      quote:
        "What time did you arrive at the site? It was 11:55. I remember since I happened to glance at my watch when we got there. We rode our bicycles to the bottom of the hill, as far as we could go, then climbed the rest of the way on foot.",
      book: "Kafka on the Shore",
      author: "Haruki Murakami",
    },
  ],
  "11:56": [
    {
      timeFragment: "around noon",
      quote:
        "A few minutes' light around noon is all that you need to discover the error, and re-set the clock \u2013 provide that you bother to go up and make the observation.",
      book: "Odalisque: The Baroque Cycle #3 ",
      author: "Neal Stephenson",
    },
    {
      timeFragment: "can't be far-off twelve",
      quote:
        "I wondered what the time is?' said the latter after a pause'. 'I don't know exactly', replied Easton, 'but it can't be far-off twelve.'",
      book: "The Ragged Trousered Philanthropists",
      author: "Robert Tressell",
    },
  ],
  "11:57": [
    {
      timeFragment: "can't be far-off twelve",
      quote:
        "I wondered what the time is?' said the latter after a pause'. 'I don't know exactly', replied Easton, 'but it can't be far-off twelve.'",
      book: "The Ragged Trousered Philanthropists",
      author: "Robert Tressell",
    },
  ],
  "11:58": [
    {
      timeFragment: "11.58",
      quote:
        "And when you go down the steps, it's always 11.58 on the morning of September ninth, 1958.",
      book: "11/22/63",
      author: "Stephen King",
    },
    {
      timeFragment: "Two minutes before the clock struck noon",
      quote:
        "Two minutes before the clock struck noon, the savage baron was on the platform to inspect the preparation for the frightful ceremony of mid-day. The block was laid forth-the hideous minister of vengeance, masked and in black, with the flaming glaive in his hand, was ready. The baron tried the edge of the blade with his finger, and asked the dreadful swordsman if his hand was sure? A nod was the reply of the man of blood. The weeping garrison and domestics shuddered and shrank from him. There was not one there but loved and pitied the gentle lady.",
      book: "Burlesques ",
      author: "William Makepeace Thackeray",
    },
  ],
  "11:59": [
    {
      timeFragment: "near to twelve",
      quote:
        "There is a big grandfather clock there, and as the hands drew near to twelve I don't mind confessing I was as nervous as a cat.",
      book: "The Adventure of Johnnie Waverley: A Hercule Poirot Story",
      author: "Agatha Christie",
    },
  ],
  "12:00": [
    {
      timeFragment: "noon",
      quote:
        "'It will soon be an hour and a half,' said the girl who kept the records. The noonday siren blew. 'Exactly a minute,' she said, looking at the stopwatch of which she was so proud.",
      book: "The Master of Go ",
      author: "Yasunari Kawabata",
    },
    {
      timeFragment: "twelve",
      quote:
        "'There's nobody here!' I insisted. 'It was yourself, Mrs. Linton: you knew it a while since.' 'Myself!' she gasped, 'and the clock is striking twelve!",
      book: "Wuthering Heights ",
      author: "Emily Bront\u00eb",
    },
    {
      timeFragment: "twelve",
      quote:
        "A cheap little clock on the wall struck twelve hurriedly, and served to begin the conversation.",
      book: "The Brothers Karamazov ",
      author: "Fyodor Dostoyevsky",
    },
    {
      timeFragment: "noon",
      quote:
        "He had saved [the republic] and it was now in the present, alive now and everywhere in the present, and the hovering faces brightened and blurred about him, became the sound of a canal in the morning, the look of some roofs in the noon sun, and the fragrance of a certain evening flower. Here he was, home at last. Behind him were the mountains and the Sleeping Woman in the sky, and before him, like smoky flames in the sunset, the whole beautiful beloved city.",
      book: "The Woman Who Had Two Navels ",
      author: "Nick Joaquin",
    },
    {
      timeFragment: "twelve o'clock",
      quote:
        "It was precisely twelve o'clock; twelve by Big Ben; whose stroke was wafted over the northern part of London; blent with that of other clocks, mixed in a thin ethereal way with the clouds and wisps of smoke and died up there among the seagulls, twelve o'clock struck as Clarissa Dalloway laid her green dress on her bed and the Warren Smiths walked down Harley Street. Twelve was the hour of their appointment.",
      book: "Mrs Dalloway ",
      author: "Virginia Woolf",
    },
    {
      timeFragment: "twelve o'clock",
      quote:
        "It was precisely twelve o'clock; twelve by Big Ben; whose stroke was wafted over the northern part of London; blent with that of other clocks, mixed in a thin ethereal way wth the clouds and wisps of smoke and died up there among the seagulls - twelve o'clock struck as Clarissa Dalloway laid her green dress on the bed, and the Warren Smiths walked down Harley Street.",
      book: "Mrs Dalloway ",
      author: "Virginia Woolf",
    },
    {
      timeFragment: "twelve o'clock",
      quote:
        "It was precisely twelve o'clock; twelve by Big Ben; whose stroke was wafted over the northern part of London; blent with that of other clocks, mixed in a thin ethereal way with the clouds and wisps of smoke and died up there among the seagulls\u2014twelve o'clock struck as Clarissa Dalloway laid her green dress on her bed, and the Warren Smiths walked down Harley Street",
      book: "Mrs Dalloway ",
      author: "Virginia Woolf",
    },
    {
      timeFragment: "twelve o'clock",
      quote:
        "It was precisely twelve o'clock; twelve by Big Ben; whose stroke was wafted over the northern part of London; blent with that of other clocks, mixed in a thin ethereal way with the clouds and wisps of smoke, and died up there among the seagulls.",
      book: "Mrs Dalloway",
      author: "Virginia Woolf",
    },
    {
      timeFragment: "Noon",
      quote:
        "Noon found him momentarily alone, while the family prepared lunch in the kitchen. The cracks in the ceiling widened into gaps. The locked wheels of his bed sank into new fault lines opening in the oak floor beneath the rug. At any moment the floor was going to give.",
      book: "tinkers ",
      author: "Paul Harding",
    },
    {
      timeFragment: "noon",
      quote:
        "On Friday noon, July the twentieth, 1714, the finest bridge in all Peru broke and precipitated five travellers into the gulf below.",
      book: "The Bridge of San Luis Rey ",
      author: "Thornton Wilder",
    },
    {
      timeFragment: "noon",
      quote:
        "Roaring noon. In a well-fanned Forty-second Street cellar I met Gatsby for lunch.",
      book: "The Great Gatsby ",
      author: "F. Scott Fitzgerald",
    },
    {
      timeFragment: "Noon",
      quote:
        "The Birds begun at Four o'clock \u2014 Their period for Dawn \u2014 A Music numerous as space \u2014 But neighboring as Noon \u2014",
      book: "The Birds begun at Four o'clock",
      author: "Emily Dickinson",
    },
    {
      timeFragment: "twelve ",
      quote:
        '"The Oxen Christmas Eve, and twelve of the clock. "Now they are all on their knees," An elder said as we sat in a flock By the embers in hearthside ease. We pictured the meek mild creatures where They dwelt in their strawy pen, Nor did it occur to one of us there To doubt they were kneeling then. So fair a fancy few would weave In these years! Yet, I feel, If someone said on Christmas Eve, "Come; see the oxen kneel "In the lonely barton by yonder coomb Our childhood used to know," I should go with him in the gloom, Hoping it might be so."',
      book: "The Oxen ",
      author: "Thomas Hardy",
    },
    {
      timeFragment: "noon",
      quote:
        "Then came the stroke of noon, and all these working and professional people dispersed like a trampled anthill into all the streets and directions. The white bridge was swarming with nimble dots. And when you considered that each dot had a mouth with which it was now planning to eat lunch, you couldn't help bursting into laughter.",
      book: "The Tanners ",
      author: "Robert Walser",
    },
  ],
  "12:01": [
    {
      timeFragment: "12:01",
      quote:
        "And on all sides there were the clocks. Conrad noticed them immediately, at every street corner, over every archway, three quarters of the way up the sides of buildings, covering every conceivable angle of approach. Most of them were too high off the ground to be reached by anything less than a fireman's ladder and still retained their hands. All registered the same time: 12:01. Conrad looked at his wristwatch, noted that it was just 2:45. ''They were driven by a master dock'' Stacey told him. ''When that stopped, they all ceased at the same moment. One minute after midnight, thirty-seven years ago.''",
      book: "Chronopolis ",
      author: "J.G. Ballard",
    },
    {
      timeFragment: "12:01",
      quote:
        "It was the twelfth of December, the twelfth month. A was twelve. The electric clock/radio by his bedside table said 12:01.",
      book: "Boy A",
      author: "Jonathan Trigell",
    },
    {
      timeFragment: "12:01",
      quote:
        "It was the twelfth of December, the twelfth month. A was twelve. The electric clock/radio by his bedside table said 12:01. A was waiting for it to read 12:12, he hoped there would be some sense of cosmic rightness when it did.",
      book: "Boy A ",
      author: "Jonathan Trigell",
    },
  ],
  "12:02": [
    {
      timeFragment: "twelve o'clock two minutes and a quarter",
      quote:
        '"It had struck twelve o\'clock two minutes and a quarter. The Baron\'s footman hastily seized a large goblet, and gasped with terror as he filled it with hot, spiced wine. "Tis past the hour, \'tis past," he groaned in anguish, "and surely I shall now get the red hot poker the Baron hath so often promised me, oh! Woe is me! Would that I had prepared the Baron\'s lunch before!"',
      book: "Crundle Castle",
      author: "Lewis Carroll",
    },
  ],
  "12:03": [
    {
      timeFragment: "12.03",
      quote:
        "At 12.03 the sun has already punched its ticket. Sinking, it stains the cobbles and stucco of the platz in a violin-coloured throb of light that you would have to be a stone not to find poignant.",
      book: "The Yiddish Policemen's Union",
      author: "Michael Chabon",
    },
  ],
  "12:04": [
    {
      timeFragment: "12.04pm",
      quote:
        '"Though by then it was by Tina\'s own desk clock 12.04pm I was always touched when, out of a morning\'s worth of repetition, secretaries continued to answer with good mornings for an hour or so into the afternoon, just as people often date things with the previous year well into February; sometimes they caught their mistake and went into a "This is not my day" or "Where is my head?" escape routine; but in a way they were right, since the true tone of afternoons does not take over in offices until nearly two."',
      book: "The Mezzanine",
      author: "Nicholson Baker",
    },
  ],
  "12:05": [
    {
      timeFragment: "around noon",
      quote:
        "A few minutes' light around noon is all that you need to discover the error, and re-set the clock \u2013 provide that you bother to go up and make the observation.",
      book: "Odalisque: The Baroque Cycle #3 ",
      author: "Neal Stephenson",
    },
  ],
  "12:06": [
    {
      timeFragment: "around noon",
      quote:
        "A few minutes' light around noon is all that you need to discover the error, and re-set the clock \u2013 provide that you bother to go up and make the observation.",
      book: "Odalisque: The Baroque Cycle #3 ",
      author: "Neal Stephenson",
    },
  ],
  "12:07": [
    {
      timeFragment: "seven minutes after 12",
      quote:
        "On a Monday Simon Hirsch was going to break his leg at seven minutes after 12, noon, and as soon as Satan told us the day before, Seppi went to betting with me that it would not happen, and soon they got excited and went to betting with me themselves.",
      book: "The Chronicle of Young Satan",
      author: "Mark Twain",
    },
  ],
  "12:08": [
    {
      timeFragment: "12:08",
      quote:
        "When a clock struck noon in Washington, D.C., the time was 12:08 in Philadephia, 12:12 in new York, and 12:24 in Boston.",
      book: "Eighty Days",
      author: "Matthew Goodman",
    },
  ],
  "12:10": [
    {
      timeFragment: "noon, and ten minutes later",
      quote:
        "Madame Dumas arrived at noon, and ten minutes later Trause handed her his ATM card and instructed her to go to the neighborhood Citibank near Sheridan Square and transfer forty thousand dollars from his savings account to his checking account.",
      book: "Oracle Night",
      author: "Paul Auster",
    },
    {
      timeFragment: "twelve-ten",
      quote:
        "They paid for only one room and kept Einstein with them because they were not going to need privacy for lovemaking. Exhausted, Travis barely managed to kiss Nora before falling into a deep sleep. He dreamed of things with yellow eyes, misshapen heads, and crocodile mouths full of sharks' teeth. He woke five hours later, at twelve-ten Thursday afternoon.",
      book: "Watchers ",
      author: "Dean Koontz",
    },
  ],
  "12:11": [
    {
      timeFragment: "12:11",
      quote:
        '"At 12:11 there was a knock on the door. It was Terry, A could tell. He hadn\'t known Terry long, but there was something calmer, more patient, that separated Terry\'s knocks from the rest of the staff. He knocked from genuine politeness, not formality. "Come in," A said, although the lock was on the other side. Terry did. "It\'s your mother," he said. "There\'s no easy way to say this." Though he had just used the easiest, because A now knew the rest. A\'s face froze, as it tried to catch up, as it tried to register the news. Then it crumpled, and while he considered this fresh blow, the tears came."',
      book: "Boy A ",
      author: "Jonathan Trigell",
    },
  ],
  "12:12": [
    {
      timeFragment: "12:12",
      quote:
        "It was the twelfth of December, the twelfth month. A was twelve. The electric clock/radio by his bedside table said 12:01. A was waiting for it to read 12:12, he hoped there would be some sense of cosmic rightness when it did.",
      book: "Boy A",
      author: "Jonathan Trigell",
    },
  ],
  "12:14": [
    {
      timeFragment: "twelve-fourteen",
      quote:
        "She left London on the twelve-fourteen from Paddington, arriving at Bristol (where she had to change) at two-fifty.",
      book: "The Plymouth Express",
      author: "Agatha Christie",
    },
  ],
  "12:15": [
    {
      timeFragment: "quarter past twelve",
      quote:
        "Very well, dear,' she said. 'I caught the 10.20 to Eastnor, which isn't a bad train, if you ever want to go down there. I arrived at a quarter past twelve, and went straight up to the house--you've never seen the house, of course? It's quite charming--and told the butler that I wanted to see Mr Ford on business. I had taken the precaution to find out that he was not there. He is at Droitwich.'",
      book: "The Little Nugget ",
      author: "P.G. Wodehouse",
    },
    {
      timeFragment: "12.15",
      quote:
        "What shall I think of that's liberating and refreshing? I'm in the mood when I open my window at night and look at the stars. Unfortunately it's 12.15 on a grey dull day, the aeroplanes are active",
      book: "A Writer's Diary: Being Extracts from the Diary of Virgina Woolf",
      author: "Virginia Woolf",
    },
  ],
  "12:17": [
    {
      timeFragment: "seventeen minutes after twelve",
      quote:
        "Kava ordered two glasses of coffee for himself and his beloved and some cake. When the pair left, exactly seventeen minutes after twelve, the club began to buzz with excitement.",
      book: "Vanvild Kava",
      author: "Isaac Bashevis Singer",
    },
  ],
  "12:20": [
    {
      timeFragment: "twelve-twenty",
      quote:
        "By twelve-twenty in the afternoon, Vince was seated in a rattan chair with comfortable yellow and green cushions at a table by the windows in that same restaurant. He'd spotted Haines on entering. The doctor was at another window table, three away from Vince, half-screened by a potted palm. Haines was eating shrimp and drinking margaritas with a stunning blonde. She was wearing white slacks and a gaily striped tube-top, and half the men in the place were staring at her.",
      book: "Watchers ",
      author: "Dean Koontz",
    },
    {
      timeFragment: "12:20",
      quote:
        "It is 12:20 in New York a Friday three days after Bastille day, yes it is 1959 and I go get a shoeshine because I will get off the 4:19 in Easthampton at 7:15 and then go straight to dinner and I don't know the people who will feed me",
      book: "The Day Lady Died",
      author: "Frank O'Hara",
    },
  ],
  "12:21": [
    {
      timeFragment: "Twelve twenty-one",
      quote: "Jake think of something. PLEASE! Twelve twenty-one.",
      book: "11/22/63",
      author: "Stephen King",
    },
  ],
  "12:22": [
    {
      timeFragment: "twenty-two minutes past twelve",
      quote:
        "By twenty-two minutes past twelve we leave, much too soon for our desires, this delightful spot, where the pilgrims are in the habit of bathing who come to visit the Jordan.",
      book: "Narrative of a Journey round the Dead Sea and in the Bible lands in 1850 and 1851",
      author: "F\u00e9licien de Saulcy",
    },
  ],
  "12:24": [
    {
      timeFragment: "12:24",
      quote:
        "12:24 My legs are in total agony. I've been kneeling on hard tiles, cleaning the bath, for what seems like hours. There are little ridges where the tiles have dug into my knees, and I'm boiling hot and the cleaning chemicals are making me cough. All I want is a rest. But I can't stop for a moment. I am so behind ...",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
  ],
  "12:25": [
    {
      timeFragment: "12.25",
      quote: "Boys, do it now. God's time is 12.25.",
      book: "Ulysses",
      author: "James Joyce",
    },
  ],
  "12:26": [
    {
      timeFragment: "26.",
      quote:
        "12.25pm. 26. 27. Every time Billy saved a shot he looked heartbroken",
      book: "A Kestrel For a Knave",
      author: "Barry Hines",
    },
  ],
  "12:27": [
    {
      timeFragment: "27.",
      quote:
        "12.25pm. 26. 27. Every time Billy saved a shot he looked heartbroken",
      book: "A Kestrel For a Knave",
      author: "Barry Hines",
    },
  ],
  "12:28": [
    {
      timeFragment: "12.28",
      quote: "The DRINK CHEER-UP COFFEE wall clock read 12.28.",
      book: "11/22/63",
      author: "Stephen King",
    },
  ],
  "12:30": [
    {
      timeFragment: "half-past twelve",
      quote:
        '"You\'ll never believe this but (in Spain) they are two hours late for ever meal - two hours Fanny - (can we lunch at half-past twelve today?)"',
      book: "Love in a Cold Climate ",
      author: "Nancy Mitford",
    },
    {
      timeFragment: "12.30 p.m.",
      quote: "12.30 p.m. Lunch",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "half past twelve",
      quote:
        'At half past twelve, when Catherine\'s anxious attention to the weather was over and she could no longer claim any merit from its amendment, the sky began voluntarily to clear. A gleam of sunshine took her quite by surprise; she looked round; the clouds were parting, and she instantly returned to the window to watch over and encourage the happy appearance. Ten minutes more made it certain that a bright afternoon would succeed, and justified the opinion of Mrs. Allen, who had "always thought it would clear up."',
      book: "Northanger Abbey ",
      author: "Jane Austen",
    },
    {
      timeFragment: "12.30pm",
      quote:
        "Tuesday, 12.30pm\u2026 Baker, California\u2026 Into the Ballantine Ale now, zombie drunk and nervous. I recognize this feeling: three or four days of booze, drugs, sun, no sleep and burned out adrenalin reserves \u2013 a giddy, quavering sort of high that means the crash is coming. But when? How much longer?",
      book: "Fear and Loathing in Las Vegas",
      author: "Hunter S. Thompson",
    },
  ],
  "12:32": [
    {
      timeFragment: "12:32",
      quote:
        "12:30 What is wrong with this bleach bottle? Which way is the nozzle pointing, anyway? I'm turning it round in confusion, peering at the arrows on the plastic ... Why won't anything come out? OK, I'm going to squeeze it really, really hard- That nearly got my eye. 12:32 FUCK. What has it done to my HAIR?",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
    {
      timeFragment: "twelve thirty-two",
      quote:
        "A chutney-biting brigadier named Boyd-Boyd fixed an appointment on the 'phone with Oxted, at Hornborough Station, for the twelve thirty-two. He was to deliver the goods.",
      book: "Extremely Entertaining Short Stories",
      author: "Stacy Aumonier",
    },
  ],
  "12:33": [
    {
      timeFragment: "12.33",
      quote:
        "It's 12.33 now and I could do it, the station is just down that side road there.",
      book: "Five Red Herrings",
      author: "Dorothy L. Sayers",
    },
  ],
  "12:35": [
    {
      timeFragment: "twelve-thirty-five",
      quote:
        "As surely as Apthorpe was marked for early promotion, Trimmer was marked for ignominy. That morning he had appeared at the precise time stated in orders. Everyone else had been waiting five minutes and Colour Sergeant Cork called out the marker just as Trimmer appeared. So it was twelve-thirty-five when they were dismissed.",
      book: "Men At Arms",
      author: "Evelyn Waugh",
    },
  ],
  "12:39": [
    {
      timeFragment: "thirty-nine minutes past twelve",
      quote:
        "Next, he remembered that the morrow of Christmas would be the twenty-seventh day of the moon, and that consequently high water would be at twenty-one minutes past three, the half-ebb at a quarter past seven, low water at thirty-three minutes past nine, and half flood at thirty-nine minutes past twelve.",
      book: "The Toilers of the Sea",
      author: "Victor Hugo",
    },
  ],
  "12:40": [
    {
      timeFragment: "twenty minutes to one",
      quote:
        "A little ormolu clock in the outer corridor indicated twenty minutes to one. The car was due at one-fifteen. Thirty-five minutes: oh, to escape for only that brief period!",
      book: "Extremely Entertaining Short Stories (The Octave of Jealousy)",
      author: "Stacy Aumonier",
    },
  ],
  "12:42": [
    {
      timeFragment: "eighteen minutes to one",
      quote:
        "The butt had been growing warm in her fingers; now the glowing end stung her skin. She crushed the cigarette out and stood, brushing ash from her black skirt. It was eighteen minutes to one. She went to the house phone and called his room. The telephone rang and rang, but there was no answer.",
      book: "Marjorie Morningstar",
      author: "Herman Wouk",
    },
  ],
  "12:43": [
    {
      timeFragment: "Twelve-forty-three",
      quote:
        "Died five minutes ago, you say? he asked. His eye went to the watch on his wrist. Twelve-forty-three, he wrote on the blotter.",
      book: "A Pocket Full of Rye",
      author: "Agatha Christie",
    },
  ],
  "12:44": [
    {
      timeFragment: "around quarter to one",
      quote:
        "It is around quarter to one. No sunlight comes into the room now through the windows at right. Outside the day is fine but increasingly sultry, with a faint haziness in the air which softens the glare of the sun.",
      book: "Long Day's Journey Into Night ",
      author: "Eugene O'Neil",
    },
  ],
  "12:45": [
    {
      timeFragment: "12:45",
      quote:
        '"The boy handed in a dispatch. The Professor closed the door again, and after looking at the direction, opened it and read aloud. "Look out for D. He has just now, 12:45, come from Carfax hurriedly and hastened towards the South. He seems to be going the round and may want to see you: Mina"',
      book: "Dracula ",
      author: "Bram Stoker",
    },
  ],
  "12:46": [
    {
      timeFragment: "around quarter to one",
      quote:
        "It is around quarter to one. No sunlight comes into the room now through the windows at right. Outside the day is fine but increasingly sultry, with a faint haziness in the air which softens the glare of the sun.",
      book: "Long Day's Journey Into Night ",
      author: "Eugene O'Neil",
    },
  ],
  "12:49": [
    {
      timeFragment: "12:49 hours",
      quote:
        "The first victim of the Krefeld raid died at 12:49 hours Double British Summer Time at B Flight, but it wasn't due to carelessness.",
      book: "Bomber",
      author: "Len Deighton",
    },
  ],
  "12:50": [
    {
      timeFragment: "ten minutes to one",
      quote:
        "So presently Bert was sent up to the top of the house to look at a church clock which was visible therefrom, and when he came down he reported that it was ten minutes to one.",
      book: "The Ragged Trousered Philanthropists",
      author: "Robert Tressell",
    },
  ],
  "12:52": [
    {
      timeFragment: "12.52",
      quote:
        "The nightclub stood on the junction, flamboyant, still. It was 12.52.",
      book: "Dreams of Leaving",
      author: "Rupert Thomson",
    },
  ],
  "12:53": [
    {
      timeFragment: "12:53",
      quote:
        "Aboot twelve miles. We ought tae pass her at Pinmore. She's due there at 12:53.",
      book: "Five Red Herrings",
      author: "Dorothy L. Sayers",
    },
  ],
  "12:54": [
    {
      timeFragment: "12:54 pm.",
      quote:
        "I listen to the different boats' horns, hoping to learn what kind of boat I'm hearing and what the signal means: is the boat leaving or entering the harbor; is it the ferry, or a whale-watching boat, or a fishing boat? At 5:33 pm there is a blast of two deep, resonant notes a major third apart. On another day there is the same blast at 12:54 pm. On another, exactly 8:00 am.",
      book: "Varieties of Disturbance",
      author: "Lydia Davis",
    },
  ],
  "12:55": [
    {
      timeFragment: "Five to one",
      quote: "The inspector glanced at the clock. Five to one. A busy morning.",
      book: "A Man Lay Dead",
      author: "Ngaio Marsh",
    },
  ],
  "12:58": [
    {
      timeFragment: "12.58pm",
      quote:
        "The watch on my wrist showed 12.58pm I'd have time to hit the morgue.",
      book: "Magic Bites",
      author: "Ilona Andrews",
    },
  ],
  "12:59": [
    {
      timeFragment: "12.59pm",
      quote:
        "And I had been looking at my watch since the train had started at 12.59pm",
      book: "The Curious Incident of the Dog in the Night-Time",
      author: "Mark Haddon",
    },
  ],
  "13:00": [
    {
      timeFragment: "clock strikes one",
      quote:
        '"I think," he said, with a triumphant smile, "that I may safely expect to find the person I seek in the dining-room, fair lady." "There may be more than one." "Whoever is there, as the clock strikes one, will be shadowed by one of my men; of these, one, or perhaps two, or even three, will leave for France to-morrow. One of these will be the `Scarlet Pimpernel.\'"',
      book: "The Scarlet Pimpernel ",
      author: "Baroness Orczy",
    },
    {
      timeFragment: "One o'clock",
      quote:
        '"One o\'clock pee em! Hello, Insert Name Here!" Said by the Disorganizer"',
      book: "Jingo ",
      author: "Terry Pratchett",
    },
    {
      timeFragment: "one o'clock",
      quote:
        '"Czarina Catherine reported entering Galatz at one o\'clock today."',
      book: "Dracula ",
      author: "Bram Stoker",
    },
    {
      timeFragment: "1.00 p.m.",
      quote: "1.00 p.m. First afternoon class",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "1 o'clock",
      quote: "After 1 o'clock checks, Gretta always goes out for a smoke.",
      book: "Girl, Interrupted ",
      author: "Susanna Kaysen",
    },
    {
      timeFragment: "1pm",
      quote:
        "Gottfried Rembke arrived at 1pm precisely. The moment he walked into the restaurant, handed his coat to the waiter, they knew it was him. The solid, stocky body, the gleaming pate, the open expression, the vigorous handshake: everything about him radiated ease and enthusiasm",
      book: "Platform ",
      author: "Michel Houellebecq",
    },
    {
      timeFragment: "one o'clock",
      quote:
        "I got to Schmidt's early, feeling horribly nervous. At one o'clock sharp: Toni. She was looking at the menu she knew well - Schmorbraten? Schnitzel? - when he loomed over her. I had seen him come in. She looked up, through him, at me. 'Traitor.' Jamie, hovering, looking very big, said her pet name, a German diminutive chosen by her. Toni addressed the air. 'If he does not leave at once I shall tell the waiter that I am not sharing my table with this gentleman.' Jamie heard, said her name again, turned to go, I rose to go with him. Toni - with that concentration of will - said, 'YOU are lunching with me.'",
      book: "Jigsaw ",
      author: "Sybille Bedford",
    },
    {
      timeFragment: "thirteen",
      quote:
        "It was a bright cold day in April, and the clocks were striking thirteen.",
      book: "Nineteen Eighty-Four ",
      author: "George Orwell",
    },
    {
      timeFragment: "one o'clock",
      quote:
        "It was one o'clock. I bought some apples and a small pork pie and drove across the bridge to the other side of the riverbank in the direction of Orford Ness.",
      book: "The Swimmer ",
      author: "Roma Tearne",
    },
    {
      timeFragment: "at one",
      quote:
        "Many moons passed by. Did Baboon ever fly? Did he ever get to the sun? I've just heard today That he's well on his way! He'll be passing through Acton at one.",
      book: "Silly Old Baboon ",
      author: "Spike Milligan",
    },
    {
      timeFragment: "one o'clock",
      quote:
        "That day it was one o'clock before John and Roger rowed across and went up to Dixon's farm for the milk and a new supply of eggs and butter.",
      book: "Swallows and Amazons ",
      author: "Arthur Ransome",
    },
    {
      timeFragment: "one o'clock",
      quote:
        "The day-room floor gets cleared of tables and at one o'clock the doctor comes out of his office down the hall, nods once at the nurse as he goes past where he's watching out of her window, sits in his chair just to the left of the door.",
      book: "One Flew Over the Cuckoo's Nest ",
      author: "Ken Kesey",
    },
  ],
  "13:01": [
    {
      timeFragment: "about one",
      quote:
        "There's five fathoms out there, he said. It'll be swept up that way when the tide comes in about one. It's nine days today.",
      book: "Ulysses",
      author: "James Joyce",
    },
  ],
  "13:02": [
    {
      timeFragment: "about one o'clock",
      quote:
        "At about one o'clock the overseer arrived and told them he had no jobs for them",
      book: "A Clergyman's Daughter",
      author: "George Orwell",
    },
  ],
  "13:03": [
    {
      timeFragment: "a little after one o'clock",
      quote:
        "It was a little after one o'clock when I got there, time for lunch, so I had it. The food was awful. But it would go on the expense account, and after I'd eaten I got out my notebook and put it down. Lunch $1.50. Taxi $1.00.",
      book: "The Big Clock ",
      author: "Kenneth Fearing",
    },
  ],
  "13:04": [
    {
      timeFragment: "four minutes past one",
      quote:
        '"Jesus Christ!" he gasped. "It\'s four minutes past one!" Linden frantically seized hold of a pair of steps and began wandering about the room with them."',
      book: "The Ragged Trousered Philanthropists",
      author: "Robert Tressell",
    },
  ],
  "13:05": [
    {
      timeFragment: "five past one",
      quote:
        '"Samantha?" I can hear Trish approaching. "Um ... hold on!" I hurry to the door, trying to block her view. "It\'s already five past one," I can hear her saying a little sharply. "And I did ask, most clearly for ..." Her voice trails off into silence as she reaches the kitchen door, and her whole face sags in astonishment. I turn and follow her gaze as she surveys the endless plates of sandwiches. "My goodness!" At last Trish finds her voice. "This is ... this is very impressive!"',
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
    {
      timeFragment: "five past one",
      quote:
        "At five past one Alleyn opened the outer door, knocked his pipe out on the edge of the stone step,and remained staring out on to the drive.",
      book: "A Man Lay Dead",
      author: "Ngaio Marsh",
    },
  ],
  "13:06": [
    {
      timeFragment: "13 hours and 6 minutes",
      quote:
        "And then at precisely 13 hours and 6 minutes - confusion broke out in the rectangle.",
      book: "We",
      author: "Yevgeny Zamyatin",
    },
  ],
  "13:09": [
    {
      timeFragment: "nine minutes past one",
      quote:
        "At nine minutes past one, a pair of horses approached (not from the city, from which direction Krieger had expected her to come, but from the Desert, which lay, vast and largely uncharted, out to the West and South-West of the city.)",
      book: "Tortured Souls: The Legend of Primordium",
      author: "Clive Barker",
    },
  ],
  "13:10": [
    {
      timeFragment: "ten minutes past one",
      quote: '"It was ten minutes past one." "You are sure of that?"',
      book: "Death on the Nile",
      author: "Agatha Christie",
    },
  ],
  "13:11": [
    {
      timeFragment: "1.11",
      quote:
        "I pursued my inquiries at the other stations along the line an' I found there was a gentleman wi' a bicycle tuk the 1.11 train at Girvan.",
      book: "Five Red Herrings",
      author: "Dorothy L. Sayers",
    },
  ],
  "13:13": [
    {
      timeFragment: "thirteen minutes past one",
      quote:
        '"There it is! There it is!" shouted the Professor. "Now for the centre of the globe!" he added in Danish. I looked at Hans. "For\u00fct!" was his tranquil answer. "Forward!" replied my uncle. It was thirteen minutes past one."',
      book: "Journey to the Centre of the Earth",
      author: "Jules Verne",
    },
  ],
  "13:15": [
    {
      timeFragment: "One hour and a quarter",
      quote:
        "'Monsieur has well slept this morning,' he said, smiling. 'What o'clock is it, Victor?' asked Dorian Gray, sleepily. 'One hour and a quarter, monsieur.'",
      book: "The Picture of Dorian Gray ",
      author: "Oscar Wilde",
    },
    {
      timeFragment: "One-fifteen",
      quote:
        '"Where are the ladies and Gentlemen?" asked Aleyn. "Sir, in the garding", said Bunce. "What time\'s lunch?" "One-fifteen"."',
      book: "A Man Lay Dead",
      author: "Ngaio Marsh",
    },
    {
      timeFragment: "Quarter-past one",
      quote:
        "The clock caught Miss LaFosse\u00b4s eye. \u00b4Good heavens!\u00b4 she gasped. \u00b4Look at the time. Quarter-past one. You must be starved.' She turned impetuously to Miss Pettigrew.",
      book: "Miss Pettigrew lives for a Day ",
      author: "Winifred Watson",
    },
  ],
  "13:16": [
    {
      timeFragment: "1.16pm",
      quote:
        "And the first stop had been at 1.16pm which was 17 minutes later.",
      book: "The Curious Incident of the Dog in the Night-Time",
      author: "Mark Haddon",
    },
  ],
  "13:17": [
    {
      timeFragment: "One seventeen",
      quote:
        "One seventeen and four seconds. That shorter guy's really got it made, and gets on a scooter, and that taller one, he goes in. One seventeen and forty seconds. That girl there, she's got a green ribbon in her hair. Too bad that bus just cut her from view.",
      book: "The Terrorist, He Watches",
      author: "Wislawa Szymborska",
    },
  ],
  "13:18": [
    {
      timeFragment: "One eighteen",
      quote:
        "One eighteen exactly. Was she stupid enough to head inside? Or wasn't she? We'll know before long, When the dead are carried out.",
      book: "The Terrorist, He Watches",
      author: "Wislawa Szymborska",
    },
  ],
  "13:20": [
    {
      timeFragment: "1320 hours",
      quote:
        '"Kamarov, signal to Purga: \'Diving at\u2014,\'" he checked his watch, "\'\u20141320 hours. Exercise OCTOBER FROST begins as scheduled. You are released to other assigned duties. We will return as scheduled." Kamarov worked the trigger on the blinker light to transmit the message. The Purga responded at once, and Ramius read the flashing signal unaided: "IF THE WHALES DON\'T EAT YOU. GOOD LUCK TO RED OCTOBER!"',
      book: "The Hunt for Red October ",
      author: "Tom Clancy",
    },
    {
      timeFragment: "twenty minutes past one",
      quote:
        "The time is coming for action. Today this Vampire is limit to the powers of man, and till sunset he may not change. It will take him time to arrive here, see it is twenty minutes past one, and there are yet some times before he can hither come, be he never so quick.",
      book: "Dracula ",
      author: "Bram Stoker",
    },
    {
      timeFragment: "twenty minutes past one",
      quote:
        "Today this Vampire is limit to the powers of man, and till sunset he may not change. It will take him time to arrive here, see it is twenty minutes past one, and there are yet some times before he can hither come, be he never so quick.",
      book: "Dracula",
      author: "Bram Stoker",
    },
  ],
  "13:23": [
    {
      timeFragment: "1.23pm",
      quote:
        '"And when we got to Swindon Mother had keys to the house and we went in and she said, "Hello?" but there was no one there because it was 1.23pm."',
      book: "The Curious Incident Of The Dog In The Night-Time",
      author: "Mark Haddon",
    },
    {
      timeFragment: "twenty-three minutes past one",
      quote:
        "The clock marked twenty-three minutes past one. He was suddenly full of agitation, yet hopeful. She had come! Who could tell what she would say? She might offer the most natural explanation of her late arrival. F\u00e9licie entered the room, her hair in disorder, her eyes shining, her cheeks white, her bruised lips a vivid red; she was tired, indifferent, mute, happy and lovely, seeming to guard beneath her cloak, which she held wrapped about her with both hands, some remnant of warmth and voluptuous pleasure.",
      book: "A Mummer's Tale ",
      author: "Anatole France",
    },
  ],
  "13:24": [
    {
      timeFragment: "1:24 p.m",
      quote:
        "Littell checked his watch - 1:24 p.m - Littell grabbed the phone by the bed.",
      book: "The Cold Six Thousand",
      author: "James Ellroy",
    },
  ],
  "13:25": [
    {
      timeFragment: "One-twenty-five",
      quote:
        "I'd really have liked to, I told her, if it weren't for the things I had in the drier. I cast an eye at my watch. One-twenty-five. The drier had already stopped.",
      book: "Hard Boiled Wonderland and the End of the World ",
      author: "Haruki Murakami",
    },
  ],
  "13:26": [
    {
      timeFragment: "around one-thirty",
      quote:
        "Raymond came back with Masson around one-thirty. His arm was bandaged up and he had an adhesive plaster on the corner of his mouth. The doctor had told him it was nothing, but Raymond looked pretty grim. Masson tried to make him laugh. But he still wouldn't say anything.",
      book: "The Stranger",
      author: "Albert Camus",
    },
  ],
  "13:30": [
    {
      timeFragment: "half-past one",
      quote:
        '"Lupin not having come down, I went up again at half-past one, and said we dined at two; he said he "would be there."',
      book: "The Diary of a Nobody ",
      author: "George and Weedon Grossmith",
    },
    {
      timeFragment: "half past one",
      quote:
        "She was a sticker. A clock away in the town struck half past one.",
      book: "Brighton Rock",
      author: "Graham Greene",
    },
    {
      timeFragment: "half-past one",
      quote:
        "Shredding and slicing, dividing and subdividing, the clocks of Harley Street nibbled at the June day, counselled submission, upheld authority, and pointed out in chorus the supreme advantages of a sense of proportion, until the mound of time was so far diminished that a commercial clock, suspended above a shop in Oxford Street, announced, genially and fraternally, as if it were a pleasure to Messrs Rigby and Lowndes to give the information gratis, that it was half-past one.",
      book: "Mrs dalloway ",
      author: "Virginia Woolf",
    },
  ],
  "13:32": [
    {
      timeFragment: "one ... thirty-two",
      quote:
        "At the third stroke it will be one ... thirty-two ... and twenty seconds. 'Beep ... beep ... beep.' Ford Prefect suppressed a little giggle of evil satisfaction, realized that he had no reason to suppress it, and laughed out loud, a wicked laugh.",
      book: "So Long, and Thanks for All the Fish",
      author: "Douglas Adams",
    },
  ],
  "13:33": [
    {
      timeFragment: "one ... thirty-three",
      quote:
        "He waited for the green light to show and then opened the door again on to the now empty cargo hold.'... one ... thirty-three ... and fifty seconds.' Very nice.",
      book: "So Long, and Thanks for All the Fish",
      author: "Douglas Adams",
    },
  ],
  "13:34": [
    {
      timeFragment: "one ... thirty-four",
      quote:
        "'At the third stroke it will be ...' He tiptoed out and returned to the control cabin. '... one ... thirty-four and twenty seconds.' The voice sounded as clear as if he was hearing it over a phone in London, which he wasn't, not by a long way.",
      book: "So Long, and Thanks for All the Fish",
      author: "Douglas Adams",
    },
    {
      timeFragment: "one ... thirty ... four",
      quote:
        "He then went and had a last thorough examination of the emergency suspended animation chamber, which was where he particularly wanted it to be heard. 'At the third stroke it will be one ... thirty ... four ... precisely.'",
      book: "So Long, and Thanks for All the Fish",
      author: "Douglas Adams",
    },
  ],
  "13:37": [
    {
      timeFragment: "1.37pm",
      quote:
        '"He had not dared to sleep in his rented car\u2014you didn\'t sleep in your car when you worked for Jesus Castro\u2014and he was beginning to hallucinate. Still, he was on the job, and he scribbled in his notebook:" 1.37pm Subject appears to be getting laid."',
      book: "Light House",
      author: "William Monahan",
    },
  ],
  "13:39": [
    {
      timeFragment: "1.39pm",
      quote:
        "And it was now 1.39pm which was 23 minutes after the stop, which mean that we would be at the sea if the train didn't go in a big curve. But I didn't know if it went in a big curve.",
      book: "The Curious Incident of the Dog in the Night-Time",
      author: "Mark Haddon",
    },
  ],
  "13:42": [
    {
      timeFragment: "1.42pm",
      quote:
        "The last note was recorded at 1.42pm: G.M. on site at H-by; will take over the matter.",
      book: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
    },
  ],
  "13:44": [
    {
      timeFragment: "forty-four minutes past one",
      quote:
        "By good luck, the next train was due at forty-four minutes past one, and arrived at Yateland (the next station) ten minutes afterward.",
      book: "Mr. Policeman and the Cook",
      author: "Wilkie Collins",
    },
  ],
  "13:45": [
    {
      timeFragment: "quarter to two",
      quote:
        "That period which is always so dangerous, when the wicket is bad, the ten minutes before lunch, proved fatal to two more of the enemy. The last man had just gone to the wickets, with the score at a hundred and thirty-one, when a quarter to two arrived, and with it the luncheon interval.",
      book: "Mike",
      author: "PG Wodehouse",
    },
    {
      timeFragment: "one forty-five",
      quote:
        "The blow fell at precisely one forty-five (summer-time). Benson, my Aunt Agatha's butler, was offering me the fried potatoes at the moment, and such was my emotion that I lofted six of them on the sideboard with the spoon.",
      book: "Sir Roderick Comes to Lunch",
      author: "P.G. Wodehouse",
    },
  ],
  "13:47": [
    {
      timeFragment: "1.47pm.",
      quote:
        "Poppy was sprawled on Brianne's bed, applying black mascara to her stubby lashes. Brianne was sitting at her desk, trying to complete an essay before the 2pm deadline. It was 1.47pm.",
      book: "The Woman Who Went To Bed For A Year",
      author: "Sue Townsend",
    },
  ],
  "13:48": [
    {
      timeFragment: "twelve minutes to two",
      quote:
        "It was twelve minutes to two in the afternoon when Claude Moreau and his most-trusted field officer, Jacques Bergeron, arrived at the Georges Cinq station of the Paris Metro. They walked, separately, to the rear of the platform, each carrying a handheld radio, the frequencies calibrated to each other.",
      book: "The Apocalypse Watch",
      author: "Robert Ludlum",
    },
  ],
  "13:49": [
    {
      timeFragment: "1.49",
      quote:
        "The bookstall clerk had seen the passenger in grey pass the bookstall at 1.49, in the direction of the exit.",
      book: "Five Red Herrings",
      author: "Dorothy L. Sayers",
    },
  ],
  "13:50": [
    {
      timeFragment: "Ten to two",
      quote:
        "Rahel's toy wristwatch had the time painted on it. Ten to two. One of her ambitions was to own a watch on which she could change the time whenever she wanted to (which according to her was what Time was meant for in the first place).",
      book: "The God of Small Things ",
      author: "Arundhati Roy",
    },
    {
      timeFragment: "one-fifty",
      quote:
        "The best train of the day was the one-fifty from Paddington which reached Polgarwith just after seven o'clock.",
      book: "The Cornish Mystery",
      author: "Agatha Christie",
    },
  ],
  "13:55": [
    {
      timeFragment: "five minutes before two",
      quote:
        '"If I was punctual in quitting Mlle. Reuter\'s domicile, I was at least equally punctual in arriving there; I came the next day at five minutes before two, and on reaching the schoolroom door, before I opened it, I heard a rapid, gabbling sound, which warned me that the "priere du midi" was not yet concluded."',
      book: "The Professor",
      author: "Charlotte Bront\u00eb",
    },
  ],
  "13:57": [
    {
      timeFragment: "three minutes to two",
      quote:
        '"I looked for a clock. It was three minutes to two. "I hope you can catch him, then. Thank you. I really appreciate it."',
      book: "Urban Shaman",
      author: "C.E. Murphy",
    },
  ],
  "13:58": [
    {
      timeFragment: "almost two o'clock",
      quote:
        "It was almost two o'clock, but nothing moved, Stari Teo\u010dak was silent and so empty it seemed abandoned, and yet Tijmen constantly felt he was being observed by invisible eyes.",
      book: "King of Tuzla ",
      author: "Arnold Jansen op de Haar",
    },
  ],
  "13:59": [
    {
      timeFragment: "One ... fifty-nine \u2026",
      quote:
        "\"For twenty minutes he sat and watched as the gap between the ship and Epun closed, as the ship's computer teased and kneaded the numbers that would bring it into a loop around the little moon, and close the loop and keep it there, orbiting in perpetual obscurity. 'One ... fifty-nine \u2026'\"",
      book: "So Long, and Thanks for All the Fish",
      author: "Douglas Adams",
    },
  ],
  "14:00": [
    {
      timeFragment: "two o'clock",
      quote:
        "'She could have fired the jig, and he could have kept on picking up his packages at the old time, two o'clock. As it was, he had almost been arrested.'",
      book: "A Confederacy of Dunces ",
      author: "John Kennedy Toole",
    },
    {
      timeFragment: "two o'clock",
      quote:
        "\"The old people's home is at Marengo, fifty miles from Algiers. I'll catch the two o'clock bus and get there in the afternoon.\".... \"I caught the two o'clock bus. It was very hot.\"",
      book: "The Outsider ",
      author: "Albert Camus",
    },
    {
      timeFragment: "1400 hours",
      quote:
        "At approximately 1400 hours a pair of enemy Skyhawks came flying in at deck level out of nowhere.",
      book: "Black Swan Green ",
      author: "David Mitchell",
    },
    {
      timeFragment: "two o'clock",
      quote:
        "At two o'clock Gatsby put on his bathing suit and left word with the butler that if any one phoned word was to be brought to him at the pool.",
      book: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    },
    {
      timeFragment: "At two",
      quote: "At two, the snowplows were in action in Lillestrom.",
      book: "The Snowman ",
      author: "Jo Nesbo",
    },
    {
      timeFragment: "two o'clock",
      quote:
        "I caught the two o'clock bus. It was very hot. I ate at C\u00e9leste's restaurant as usual. They all felt very sorry for me and C\u00e9leste told me, 'There's no one like a mother'.",
      book: "The Outsider ",
      author: "Albert Camus",
    },
    {
      timeFragment: "two o'clock",
      quote:
        "The Home for Aged Persons is at Marengo, some fifty miles from Algiers. With the two o'clock bus I should get there well before nightfall. Then I can spend the night there, keeping the usual vigil beside the body, and be back here by tomorrow evening.",
      book: "The Outsider ",
      author: "Albert Camus",
    },
    {
      timeFragment: "2.00",
      quote:
        "When Salander woke up it was 2.00 on Saturday afternoon and a doctor was poking at her.",
      book: "The Girl Who Kicked the Hornets' Nest ",
      author: "Stieg Larsson",
    },
  ],
  "14:01": [
    {
      timeFragment: "about two o' clock",
      quote:
        "At about two o' clock the owners young wife came, carrying a handleless cup and a pot with a quilted cover, to where I was still lying disconsolate",
      book: "A Single Pebble ",
      author: "John Hershey",
    },
    {
      timeFragment: "about two o'clock",
      quote:
        "The next day was Saturday and, now that Moon was done, I decided to bring the job to its end. So I sent word that I shouldn't be able to umpire for the team at Steeple Sinderby and, after working through the morning, came down about two o'clock.",
      book: "A Month in the Country ",
      author: "JL Carr",
    },
  ],
  "14:02": [
    {
      timeFragment: "14.02",
      quote:
        '"I\'m not dead. How did that happen?" He was right. It was 14.02 and twenty-six seconds. Destiny had not been fulfilled. We all looked at each other, confused."',
      book: "The Woman Who Died A Lot",
      author: "Jasper Fforde",
    },
  ],
  "14:04": [
    {
      timeFragment: "2.04pm.",
      quote:
        "2.04pm. Once again, the Quartermaster-General's office came on the line asking for Colonel Finckh, and once again Finckh heard the quiet, unemotional, unfamiliar voice",
      book: "The Night of the Generals",
      author: "Hans Hellmut Kirst",
    },
  ],
  "14:05": [
    {
      timeFragment: "five past two",
      quote:
        "...and at five past two on 17 September of that same unforgettable year 1916, I was in the Muryovo hospital yard, standing on trampled withered grass, flattened by the September rain.",
      book: "A Country Doctor's Notebook ",
      author: "Mikhail Bulgakov",
    },
  ],
  "14:06": [
    {
      timeFragment: "six minutes past two",
      quote:
        "A man driving a tractor saw her, four hundred yards from her house, six minutes past two in the afternoon.",
      book: "A Change of Climate",
      author: "Hilary Mantel",
    },
  ],
  "14:10": [
    {
      timeFragment: "ten past two",
      quote:
        '"Mrs Eunice Harris pulls back the sleeve of her good coat and checks her good watch. "Indeed yes. Half twelve," and waves a hand at the Town Hall clock as if it was hers. "Always ten past two. Someone put a nail in the time years back."',
      book: "The Coward's Tale",
      author: "Vanessa Gebbie",
    },
  ],
  "14:13": [
    {
      timeFragment: "two ... thirteen",
      quote:
        "At the third stroke, it will be two ... thirteen ... and fifty seconds.'",
      book: "So Long, and Thanks for All the Fish",
      author: "Douglas Adams",
    },
  ],
  "14:15": [
    {
      timeFragment: "2.15 P.M.",
      quote:
        "I had a date with her next day at 2.15 P.M. In my own rooms, but it was less successful, she seemed to have grown less juvenile, more of a woman overnight.",
      book: "Lolita ",
      author: "Vladimir Nabokov",
    },
    {
      timeFragment: "2.15 p.m.",
      quote: "2.15 p.m. Second afternoon class",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "2.15pm",
      quote:
        "I had a date with her next day at 2.15pm in my own rooms, but it was less successful, she seemed to have grown less juvenile, more of a woman overnight. A cold I caught from her led me to cancel a fourth assignment, nor was I sorry to break an emotional series that threatened to burden me with heart-rending fantasies and peter out in dull disappointment. So let her remain, sleek, slender Monique, as she was for a minute or two",
      book: "Lolita",
      author: "Vladimir Nabokov",
    },
  ],
  "14:16": [
    {
      timeFragment: "2.16",
      quote:
        "Oh, good evening. I think you were on the barrier when I came in at 2.16 this afternoon. Now, do you know that you let me get past without giving up my ticket? Yes, yes he-he! I really think you ought to be more careful",
      book: "Five Red Herrings",
      author: "Dorothy L. Sayers",
    },
  ],
  "14:19": [
    {
      timeFragment: "2:19",
      quote:
        "2:19: Duane Hinton walks out. He walks through the backyard. He lugs some clothes. He wore said clothes last night. He walks to the fence. He feeds the incinerator. He lights a match.",
      book: "The Cold Six Thousand",
      author: "James Ellroy",
    },
  ],
  "14:20": [
    {
      timeFragment: "twenty minutes past two",
      quote:
        "The having originated a precaution which was already in course of execution, was a great relief to Miss Pross. The necessity of composing her appearance so that it should attract no special notice in the streets, was another relief. She looked at her watch, and it was twenty minutes past two. She had no time to lose, but must get ready at once.",
      book: "A tale of two cities ",
      author: "Charles Dickens",
    },
    {
      timeFragment: "Twenty past two",
      quote:
        "Inevitable, implacable, the rainstorm wept itself out. She saw Tom look at his watch. 'What time is it?' 'Twenty past two. Want to go back to the hotel for a while?' 'All right.' They walked out of the gardens and down the rue de Vaugirard. This holiday, unlike those holidays long ago, would not end with her sleeping at home. Two nights from now I will be high over the Atlantic Ocean and on Saturday I will be walking around in the Other Place. I am going to America. I am starting my life over again. But as she said these words to herself, she found it hard to imagine what the new life would be like. And, again, she was afraid.",
      book: "The Doctor's Wife ",
      author: "Brian Moore",
    },
    {
      timeFragment: "twenty minutes past two",
      quote:
        "She looked at her watch and it was twenty minutes past two. She had no time to lose but must get ready at once.",
      book: "A Tale of Two Cities",
      author: "Charles Dickens",
    },
    {
      timeFragment: "twenty minutes past two",
      quote:
        "The watch found at the Weir was challenged by the jeweller as one he had wound and set for Edwin Drood, at twenty minutes past two on that same afternoon; and it had run down, before being cast into the water; and it was the jeweller's positive opinion that it had never been re-wound.",
      book: "The Mystery of Edwin Drood ",
      author: "Charles Dickens",
    },
  ],
  "14:22": [
    {
      timeFragment: "Two-twenty-two",
      quote:
        "Garth here. Sunday afternoon. Sorry to miss you, but I'll leave a brief message on your tape. Two-twenty-two or there-aboutish. Great party.",
      book: "Larry's Party",
      author: "Carol Shields",
    },
  ],
  "14:25": [
    {
      timeFragment: "2:25",
      quote:
        "Gary shut himself inside his office and flipped through the messages. Caroline had called at 1:35, 1:40, 1:50, 1:55, and 2:10; it was now 2:25. He pumped his fist in triumph. Finally, finally, some evidence of desperation.",
      book: "The Corrections ",
      author: "Jonathan Franzen",
    },
  ],
  "14:28": [
    {
      timeFragment: "28 minutes and 57 seconds after 2pm",
      quote:
        "It happened to be the case that the sixty-based system coincided with our our current method of keeping time... Apparently they wanted us to know that that something might happen at 28 minutes and 57 seconds after 2pm on a day yet to be specified.",
      book: "Ratner's Star",
      author: "Don DeLillo",
    },
  ],
  "14:30": [
    {
      timeFragment: "2:30",
      quote:
        "Ach! It's 2:30. Look how the time is flying. And it's still so much to do today.. It's dishes to clean, dinner to defrost, and my pills I haven't yet counted. I don't get it... Why didn't the Jews at least try to resist? It wasn't so easy like you think. Everybody was so starving and frightened, and tired they couldn't believe even what's in front of their eyes.",
      book: "Maus ",
      author: "Art Spiegelman",
    },
    {
      timeFragment: "2.30pm",
      quote:
        "At 2.30pm on the 13th inst. began to shadow Sir Bobadil the Ostrich, whom I suspect of being the criminal. Shadowing successful. Didn't lose sight of him once.",
      book: "The Wind on the Moon",
      author: "Eric Linklater",
    },
    {
      timeFragment: "half past two",
      quote:
        "At half past two the same afternoon the boy and the elderly man are standing in the room directly above the Inner Office and Waiting-Room.",
      book: "Corker's Freedom ",
      author: "John Berger",
    },
    {
      timeFragment: "half-past two",
      quote:
        "It was half-past two in the afternoon. The sun hung in the faded blue sky like a burning mirror, and away beyond the paddocks the blue mountains quivered and leapt like sea. Sid wouldn't be back until half-past ten. He had ridden over to the township with four of the boys to help hunt down the young fellow who'd murdered Mr. Williamson. Such a dreadful thing!",
      book: "Millie ",
      author: "Katherine Mansfield",
    },
    {
      timeFragment: "half-past two",
      quote:
        '"It was half-past two o\'clock when the knock came. I took my courage a deux mains and waited. In a few minutes Mary opened the door, and announced "Dr. Van Helsing"."',
      book: "Dracula ",
      author: "Bram Stoker",
    },
    {
      timeFragment: "1/2 past 2 o'clock",
      quote:
        "May 14th 1800. Wm and John set off into Yorkshire after dinner at 1/2 past 2 o'clock, cold pork in their pockets. I left them at the turning of the Low-wood bay under the trees. My heart was so full that I could barely speak to W. when I gave him a farewell kiss.",
      book: "The Journals of Dorothy Wordsworth ",
      author: "Dorothy Wordsworth",
    },
  ],
  "14:32": [
    {
      timeFragment: "2.32 p.m.",
      quote:
        "Like 2.32 p.m., Beecher and Avalon, L3 R2 (which meant left three blocks, right two) 2:35 p.m., and you wondered how you could pick up one box, then drive 5 blocks in 3 minutes and be finished cleaning out another box.",
      book: "Post Office",
      author: "Charles Bukowski",
    },
  ],
  "14:36": [
    {
      timeFragment: "Two thirty-six",
      quote:
        "I look at my watch. Two thirty-six. All I've got left today is take in the laundry and fix dinner.",
      book: "The Elephant Vanishes",
      author: "Haruki Murakami",
    },
  ],
  "14:39": [
    {
      timeFragment: "2.39",
      quote:
        "Noo, there's a report come in fra' the station-master at Pinwherry that there was a gentleman tuk the 2.39 at Pinwherry.",
      book: "Five Red Herrings",
      author: "Dorothy L. Sayers",
    },
  ],
  "14:40": [
    {
      timeFragment: "two-forty",
      quote:
        "If a girl looks swell when she meets you, who gives a damn when she's late? 'We better hurry', I said. 'The show starts at two-forty.'",
      book: "The Catcher in the Rye ",
      author: "J.D. Salinger",
    },
    {
      timeFragment: "twenty minutes to three",
      quote:
        "Members of Big Side marked Michael and Alan as the two most promising three-quarters for Middle Side next year, and when the bell sounded at twenty minutes to three, the members of Big Side would walk with Michael and Alan towards the changing room and encourage them by flattery and genial ragging.",
      book: "Sinister Street",
      author: "Compton Mackenzie",
    },
  ],
  "14:41": [
    {
      timeFragment: "2.41",
      quote:
        "At 2.41, when the afternoon fast train to London was pulling out of Larborough prompt to the minute, Miss Pym sat under the cedar on the lawn wondering whether she was a fool, and not caring much anyhow.",
      book: "Miss Pym Disposes",
      author: "Josephine Tey",
    },
  ],
  "14:43": [
    {
      timeFragment: "2.43pm",
      quote:
        "Jacobson died at 2.43pm the next day after slashing his wrists with a razor blade in the second cubicle from the left in the men's washroom on the third floor.",
      book: "Now: Zero",
      author: "JG Ballard",
    },
  ],
  "14:45": [
    {
      timeFragment: "quarter to three",
      quote: "He never came down till a quarter to three.",
      book: "The Diary of a Nobody ",
      author: "George and Weedon Grossmith",
    },
    {
      timeFragment: "two forty-five",
      quote:
        "Pull the other one, and tell it to the marines, and don't make me laugh, and fuck off out of it, and all that, but the fact remained that it was still only two forty-five'.",
      book: "The Pregnant Window ",
      author: "Martin Amis",
    },
    {
      timeFragment: "quarter to three",
      quote:
        "What time is it?' 'Look for yourself,' the old woman says to me. I look, and I see the clock has no hands. 'There are no hands,' I say. The old woman looks at the clock face and says to me, 'It's a quarter to three'.",
      book: "The Old Woman",
      author: "Daniil Ivanovich Kharms",
    },
  ],
  "14:50": [
    {
      timeFragment: "ten to three",
      quote:
        "Stands the Church clock at ten to three? And is there honey still for tea?",
      book: "The Old Vicarage, Grantchester ",
      author: "Rupert Brooke",
    },
  ],
  "14:54": [
    {
      timeFragment: "about 2.55",
      quote:
        "In the end, it was the Sunday afternoons he couldn't cope with, and that terrible listlessness that starts to set in about 2.55, when you know you've had all the baths you can usefully have that day, that however hard you stare at any given paragraph in the newspaper you will never actually read it, or use the revolutionary new pruning technique it describes, and that as you stare at the clock the hands will move relentlessly on to four o'clock, and you will enter the long dark teatime of the soul.",
      book: "Life, the universe and everything ",
      author: "Douglas Adams",
    },
  ],
  "14:55": [
    {
      timeFragment: "Five to three",
      quote:
        "The superior, the very reverend John Conmee SJ reset his smooth watch in his interior pocket as he came down the presbytery steps. Five to three. Just nice time to walk to Artane.",
      book: "Ulysses",
      author: "James Joyce",
    },
  ],
  "14:56": [
    {
      timeFragment: "2.56 P.M.",
      quote:
        "2.56 P.M. Helen is alone now. Her face is out of frame, and through the viewfinder I see only a segment of the pillow, an area of crumpled sheet and the upper section of her chest and shoulders.",
      book: "The 60 Minute Zoom",
      author: "JG Ballard",
    },
  ],
  "14:58": [
    {
      timeFragment: "two minutes to three",
      quote:
        "From twenty minutes past nine until twenty-seven minutes past nine, from twenty-five minutes past eleven until twenty-eight minutes past eleven, from ten minutes to three until two minutes to three the heroes of the school met in a large familiarity whose Olympian laughter awed the fearful small boy that flitted uneasily past and chilled the slouching senior that rashly paused to examine the notices in assertion of an unearned right.",
      book: "Sinister Street",
      author: "Compton Mackenzie",
    },
    {
      timeFragment: "two minutes to three",
      quote:
        "We betted that it would happen on the morrow; they took us up and gave us the odds of two to one; we betted that it would happen in the afternoon; we got odds of four to one on that; we betted that it would happen at two minutes to three; they willingly granted us the odds of ten to one on that.",
      book: "The Chronicle of Young Satan",
      author: "Mark Twain",
    },
  ],
  "15:00": [
    {
      timeFragment: "three o'clock",
      quote: "'I gotta get uptown by three o'clock.'",
      book: "A Confederacy of Dunces ",
      author: "John Kennedy Toole",
    },
    {
      timeFragment: "three o'clock",
      quote:
        '"Remember," they shouted, "battle at three o\'clock sharp. There\'s no time to lose."',
      book: "Swallows and Amazons ",
      author: "Arthur Ransome",
    },
    {
      timeFragment: "Three",
      quote:
        "And the sound of the bell flooded the room with its melancholy wave; which receded, and gathered itself together to fall once more, when she heard, distractedly, something fumbling, something scratching at the door. Who at this hour? Three, good Heavens! Three already!",
      book: "Mrs Dalloway",
      author: "Virginia Woolf",
    },
    {
      timeFragment: "three o'clock",
      quote:
        "At three o'clock on the afternoon of that same day, he called on her. She held out her two hands, smiling in her usual charming, friendly way; and for a few seconds they looked deep into each other's eyes.",
      book: "Bel-Ami ",
      author: "Guy de Maupassant",
    },
    {
      timeFragment: "three o'clock",
      quote:
        "At three o'clock precisely I was at Baker Street, but Holmes had not yet returned.",
      book: "A Scandal in Bohemia ",
      author: "Sir Arthur Conan Doyle",
    },
    {
      timeFragment: "At three",
      quote:
        "At three on the Wednesday afternoon, that bit of the painting was completed.",
      book: "The Moonstone ",
      author: "Wilkie Collins",
    },
    {
      timeFragment: "at three",
      quote:
        "Ditched by the woman I loved, I exalted my suffering into a sign of greatness (lying collapsed on a bed at three in the afternoon), and hence protected myself from experiencing my grief as the outcome of what was at best a mundane romantic break-up. Chloe's departure may have killed me, but it had at least left me in glorious possession of the moral high ground. I was a martyr.",
      book: "Essays in Love ",
      author: "Alain de Botton",
    },
    {
      timeFragment: "three o'clock",
      quote:
        "He walks into the Hospital for Broken Things at three o'clock on Monday afternoon. That was the arrangement. If he came in after six o'clock, he was to head straight for the house in Sunset Park.",
      book: "Sunset Park ",
      author: "Paul Auster",
    },
    {
      timeFragment: "three o'clock",
      quote:
        "I had a three o'clock class in psychology, the first meeting of the semester, and I suspected I was going to miss it. I was right. Victoria made a real ritual of the whole thing, clothes coming off with the masturbatory dalliance of a strip show, the covers rolling back periodically to show this patch of flesh or that, strategically revealed.",
      book: "Achates McNeil",
      author: "T.C. Boyle",
    },
    {
      timeFragment: "three o'clock",
      quote:
        "It was three o'clock in the beautiful breezy autumn day when Mr. Casaubon drove off to his Rectory at Lowick, only five miles from Tipton; and Dorothea, who had on her bonnet and shawl, hurried along the shrubbery and across the park that she might wander through the bordering wood with no other visible companionship than that of Monk, the Great St. Bernard dog, who always took care of the young ladies in their walks",
      book: "Middlemarch",
      author: "George Eliot",
    },
    {
      timeFragment: "three-o'clock",
      quote:
        "Ladies bathed before noon, after their three-o'clock naps, and by nightfall were like soft teacakes with frostings of sweat and sweet talcum.",
      book: "To kill a mockingbird ",
      author: "Harper Lee",
    },
    {
      timeFragment: "three o'clock",
      quote:
        "M. Madeleine usually came at three o'clock, and as punctuality was kindness, he was punctual.",
      book: "Les Miserables ",
      author: "Victor Hugo",
    },
    {
      timeFragment: "three o'clock",
      quote:
        "On Wednesday at three o'clock, Monsieur and Madame Bovary, seated in their dog-cart, set out for Vaubyessard, with a great trunk strapped on behind and a bonnet-box in front of the apron. Besides these Charles held a bandbox between his knees.",
      book: "Madame Bovary ",
      author: "Gustave Flaubert",
    },
    {
      timeFragment: "at three",
      quote:
        "The scent and smoke and sweat of a casino are nauseating at three in the morning. Then the soul-erosion produced by high gambling - a compost of greed and fear and nervous tension - becomes unbearable and the senses awake and revolt from it.",
      book: "Casino Royale ",
      author: "Ian Fleming",
    },
    {
      timeFragment: "Three o'clock",
      quote:
        "Three o'clock is always too late or too early for anything you want to do.",
      book: "Nausea ",
      author: "Jean-Paul Sartre",
    },
    {
      timeFragment: "Three o'clock",
      quote:
        "Three o'clock is the perfect time in Cham, because anything is possible. You can still ski, but also respectably start drinking, the shops have just reopened, the sun is still up. Three o'clock is never too late or too early.",
      book: "Cham ",
      author: "Jonathan Trigell",
    },
    {
      timeFragment: "three o'clock",
      quote:
        "Today was the day Alex had appointed for her 'punishment'. I became increasingly nervous as the hour of three o'clock approached. I was alone in the house, and paced restlessly from room to room, glancing at the clocks in each of them.",
      book: "Deaf Sentence ",
      author: "David Lodge",
    },
  ],
  "15:01": [
    {
      timeFragment: "about three",
      quote:
        "The sun was now setting. It was about three in the afternoon when Alisande had begun to tell me who the cowboys were; so she had made pretty good progress with it - for her. She would arrive some time or other, no doubt, but she was not a person who could be hurried.",
      book: "A Connecticut Yankee in King Arthur's Court ",
      author: "Mark Twain",
    },
  ],
  "15:03": [
    {
      timeFragment: "3.03pm.",
      quote:
        "I check Shingi's mobile phone - it says it's 3.03pm. I get out of bed, open my suitcase to take clean socks out and the smell of Mother hit my nose and make me feel dizzy.",
      book: "Harare North",
      author: "Brian Chikwava",
    },
  ],
  "15:04": [
    {
      timeFragment: "1504",
      quote: "Woken at 1504 by Michelangelo hammering away with his chisel.",
      book: "101 Reykjavik",
      author: "Hallgr\u00edmur Helgason",
    },
  ],
  "15:05": [
    {
      timeFragment: "five minutes past three",
      quote:
        '"Ultimately, at five minutes past three that afternoon, Smith admitted the falsity of the Fort Scott tale. "That was only something Dick told his family. So he could stay out overnight. Do some drinking."',
      book: "In Cold Blood",
      author: "Truman Capote",
    },
  ],
  "15:07": [
    {
      timeFragment: "seven minutes past three",
      quote:
        "The next day was grey, threatening rain. He was there at seven minutes past three. The clock on the church over the way pointed to it. They had arranged to be there at three fifteen. Therefore, if she had been there when he came, she would have been eight minutes before her time.",
      book: "Twenty Thousand Streets Under The Sky",
      author: "Patrick Hamilton",
    },
  ],
  "15:08": [
    {
      timeFragment: "3 hr 8 m p.m.",
      quote:
        "A private wireless telegraph which would transmit by dot and dash system the result of a national equine handicap (flat or steeplechase) of 1 or more miles and furlongs won by an outsider at odds of 50 to 1 at 3 hr 8 m p.m. at Ascot (Greenwich time), the message being received and available for betting purposes in Dublin at 2.59 p.m.",
      book: "Ulysses",
      author: "James Joyce",
    },
  ],
  "15:09": [
    {
      timeFragment: "3.09",
      quote:
        "On the next day he boarded the London train which reaches Hull at 3.09. At Paragon Station he soon singled out Beamish from Merriman's description.",
      book: "The Pit-Prop Syndicate",
      author: "Freeman Wills Crofts",
    },
  ],
  "15:10": [
    {
      timeFragment: "3.10pm",
      quote:
        "This time it was only the simple fact that the hands chanced to point to 3.10pm, the precise moment at which all the clocks of London had stopped.",
      book: "The Purple Cloud",
      author: "M.P. Shiel",
    },
  ],
  "15:13": [
    {
      timeFragment: "thirteen minutes past three",
      quote:
        "The lift moved. It was thirteen minutes past three. The bell gave out its ping. Two men stepped out of the lift, Alan Norman and another man. Tony Blair walked into the office.",
      book: "Virtual Assassin ",
      author: "Simon Kearns",
    },
  ],
  "15:14": [
    {
      timeFragment: "3.14",
      quote:
        '"A signal sounded. "There\'s the 3.14 up," said Perks. "You lie low till she\'s through, and then we\'ll go up along to my place, and see if there\'s any of them strawberries ripe what I told you about."',
      book: "The Railway Children ",
      author: "Edith Nesbit",
    },
    {
      timeFragment: "THREE fourteen",
      quote:
        "I shall be back at exactly THREE fourteen, for our hour of revery together, real sweet revery darling",
      book: "On the Road ",
      author: "Jack Kerouac",
    },
  ],
  "15:15": [
    {
      timeFragment: "quarter past three",
      quote:
        "Gordon was alone. He wandered back to the door. The strawberry-nosed man glanced over his shoulder, caught Gordon's eye, and moved off, foiled. He had been on the point of slipping Edgar Wallace into his pocket. The clock over the Prince of Wales struck a quarter past three.",
      book: "Keep the Aspidistra Flying",
      author: "George Orwell",
    },
    {
      timeFragment: "3:15",
      quote:
        '"I got out my old clothes. I put wool socks over my regular socks and took my time lacing up the boots. I made a couple of tuna sandwiches and some double-decker peanut-butter crackers. I filled my canteen and attached the hunting knife and the canteen to my belt. As I was going out the door, I decided to leave a note. So I wrote: "Feeling better and going to Birch Creek. Back soon. R. 3:15." That was about four hours from now."',
      book: "Where I'm Calling From ",
      author: "Raymond Carver",
    },
    {
      timeFragment: "3:15",
      quote:
        "July 3: 5 3/4 hours. Little done today. Deepening lethargy, dragged myself over to the lab, nearly left the road twice. Concentrated enough to feed the zoo and get the log up to date. Read through the operating manuals Whitby left for the last time, decided on a delivery rate of 40 rontgens/min., target distance of 530 cm. Everything is ready now. Woke 11:05. To sleep 3:15.",
      book: "The Voices of Time ",
      author: "JG Ballard",
    },
  ],
  "15:16": [
    {
      timeFragment: "1516",
      quote: "The Nimrod rendezvoused with the light aircraft at 1516 GMT.",
      book: "The Crow Road",
      author: "Iain Banks",
    },
  ],
  "15:20": [
    {
      timeFragment: "twenty minutes past three",
      quote:
        "At twenty minutes past three on Monday, 26 January 1948, in Tokyo, and I am drinking and I am drinking and I am drinking and I am drinking and I am drinking and I am drinking and I am drinking and I am drinking and I am drinking \u2026",
      book: "Occupied City",
      author: "David Peace",
    },
  ],
  "15:23": [
    {
      timeFragment: "Three twenty-three",
      quote:
        "Three twenty-three! Is that all? Doesn't time - no, I've already said that, thought that. I sit and watch the seconds change on the watch. I used to have a limited edition Rolex worth the price of a new car but I lost it. It was present from...Christine? No, Inez. She got fed up with me always having to ask other people what the time was; embarrassed on my behalf.",
      book: "Espedair Street ",
      author: "Iain Banks",
    },
  ],
  "15:25": [
    {
      timeFragment: "15.25",
      quote:
        "\"Hmm, let's see. It's a three-line rail-fence, a, d, g...d-a-r-l...Got it: 'Darling Hepzibah'\u2014Hepzibah? What kind of name is that?\u2014'Will meet you Reading Sunday 15.25 train Didcot-Reading.' Reading you all right, you idiots.\"",
      book: "C",
      author: "Tom McCarthy",
    },
  ],
  "15:27": [
    {
      timeFragment: "3.27pm",
      quote:
        "And she rang the Reverend Peters and he came into school at 3.27pm and he said, 'So, young man, are we ready to roll?'",
      book: "The Curious Incident Of The Dog In The Night-Time",
      author: "Mark Haddon",
    },
  ],
  "15:29": [
    {
      timeFragment: "nearly half-past three",
      quote:
        '"Good heavens!" she said, "it\'s nearly half-past three. I must fly. Don\'t forget about the funeral service," she added, as she put on her coat. "The tapers, the black coffin in the middle of the aisle, the nuns in their white-winged coifs, the gloomy chanting, and the poor cowering creature without any teeth, her face all caved in like an old woman\'s, wondering whether she wasn\'t really and in fact dead - wondering whether she wasn\'t already in hell. Goodbye."',
      book: "Nuns at Luncheon",
      author: "Aldous Huxley",
    },
  ],
  "15:30": [
    {
      timeFragment: "half-past thrrree",
      quote:
        '"Before I am rrroasting the alarm-clock, I am setting it to go off, not at nine o\'clock the next morning, but at half-past thrrree the next afternoon. Vhich means half-past thrrree this afternoon. And that", she said, glancing at her wrist-watch, "is in prrree-cisely seven minutes\' time!"',
      book: "The Witches ",
      author: "Roald Dahl",
    },
    {
      timeFragment: "3.30 p.m.",
      quote: "3.30 p.m. Catch school bus home",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "half past three",
      quote:
        "I must have completed my packing with time to spare, for when the knock came on my door at half past three precisely, I had been sitting in my chair waiting for a good while. I opened the door to a young Chinese man, perhaps not even twenty, dressed in a gown, his hat in his hand.",
      book: "When We Were Orphans",
      author: "Kazuo Ishiguro",
    },
  ],
  "15:32": [
    {
      timeFragment: "3:32",
      quote:
        "At 3:32 precisely, I noticed Kaitlyn striding confidently past the Wok House. She saw me the moment I raised my hand, flashed her very white and newly straightened teeth at me, and headed over.",
      book: "The Fault in Our Stars",
      author: "John Green",
    },
  ],
  "15:33": [
    {
      timeFragment: "Three thirty-three",
      quote:
        "I picked up my briefcase, glancing at my watch again as I did so. Three thirty-three.",
      book: "11/22/63",
      author: "Stephen King",
    },
  ],
  "15:35": [
    {
      timeFragment: "three-thirty-five",
      quote:
        "By three-thirty-five business really winds down. I have already sold my ladderback chairs and my Scottish cardigans. I'm not even sure now why I've sold all these things, except perhaps so as not to be left out of this giant insult to one's life that is a yard sale, this general project of getting rid quick.",
      book: "Anagrams",
      author: "Lorrie Moore",
    },
    {
      timeFragment: "3:35 P.M.",
      quote:
        "If Me flashed a little crazy after a restless night of smoking & prowling the darkened house with owl-eyes alert to suspicious noises outside & on the roof, it didn't inevitably mean she'd still be in such a state when the schoolbus deposited Wolfie back home at 3:35 P.M.",
      book: "I Am No One You Know: Stories ",
      author: "Joyce Carol Oates",
    },
  ],
  "15:37": [
    {
      timeFragment: "15.37",
      quote:
        '"The explosion was now officially designated an "Act of God". But, thought Dirk, what god? And why? What god would be hanging around Terminal Two of Heathrow Airport trying to catch the 15.37 flight to Oslo?"',
      book: "The Long Dark Tea Time of the Soul",
      author: "Douglas Adams",
    },
  ],
  "15:39": [
    {
      timeFragment: "three thirty-nine",
      quote:
        "I lived two lives in late 1965 and early 1963, one in Dallas and one in Jodie. They came together at three thirty-nine in the afternoon of April 10.",
      book: "11/22/63",
      author: "Stephen King",
    },
  ],
  "15:40": [
    {
      timeFragment: "three-forty",
      quote:
        'At three-forty, Cliff called to report that Dilworth and his lady friend were sitting on the deck of the Amazing Grace, eating fruit and sipping wine, reminiscing a lot, laughing a little. "From what we can pick up with directional microphones and from what we can see, I\'d say they don\'t have any intention of going anywhere. Except maybe to bed. They sure do seem to be a randy old pair." "Stay with them," Lem said. "I don\'t trust him."',
      book: "Watchers ",
      author: "Dean Koontz",
    },
  ],
  "15:41": [
    {
      timeFragment: "15:41",
      quote:
        "At 15:41 GMT, the Cessna's engine began to cut out and the plane - presumably out of fuel - began to lose altitude",
      book: "The Crow Road",
      author: "Iain Banks",
    },
  ],
  "15:44": [
    {
      timeFragment: "3.44 p.m.",
      quote:
        "The armed response team hastily assembled from Str\u00e4ngn\u00e4s arrived at Bjurman's summer cabin at 3.44 p.m.",
      book: "The Girl who Played with Fire",
      author: "Stieg Larsson",
    },
  ],
  "15:45": [
    {
      timeFragment: "3.45pm",
      quote:
        '"I opened my notebook, flipped almost to the end before I found a blank page, and wrote "October 5th, 3.45pm, Dunning to Longview Cem, puts flowers on parents\' (?) graves. Rain." I had what I wanted."',
      book: "11/22/63",
      author: "Stephen King",
    },
    {
      timeFragment: "3:45",
      quote:
        "One meal is enough now, topped up with a glucose shot. Sleep is still 'black', completely unrefreshing. Last night I took a 16 mm. film of the first three hours, screened it this morning at the lab. The first true-horror movie. I looked like a half-animated corpse. Woke 10:25. To sleep 3:45.",
      book: "The Voices of Time ",
      author: "JG Ballard",
    },
  ],
  "15:49": [
    {
      timeFragment: "3.49 p.m.",
      quote: "3.49 p.m. Get off school bus at home",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "3.49 pm",
      quote:
        "But there were more bad things than good things. And one of them was that Mother didn't get back from work til 5.30 pm so I had to go to Father's house between 3.49 pm and 5.30 pm because I wasn't allowed to be on my own and Mother said I didn't have a choice so I pushed the bed against the door in case Father tried to come in.",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
  ],
  "15:50": [
    {
      timeFragment: "3.50 p.m.",
      quote: "3.50 p.m. Have juice and snack",
      book: "The Curious Incident Of The Dog In The Night-Time",
      author: "Mark Haddon",
    },
  ],
  "15:51": [
    {
      timeFragment: "fifty-one minutes after fifteen o'clock",
      quote:
        '"Date of the telegram, Rome, November 24, ten minutes before twenty-three o\'clock. The telegram seems to say, "The Sovereigns and the Royal Children expect themselves at Rome tomorrow at fifty-one minutes after fifteen o\'clock."',
      book: "Italian Without a Master",
      author: "Mark Twain",
    },
  ],
  "15:53": [
    {
      timeFragment: "Seven minutes to four",
      quote:
        "It was like the clouds lifting away from the sun. Jodie glanced at Reacher. He glanced at the clock. Seven minutes to four. Less than three hours to go.",
      book: "Tripwire",
      author: "Lee Child",
    },
  ],
  "15:55": [
    {
      timeFragment: "3.55 p.m.",
      quote: "3.55 p.m. Give Toby food and water",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
  ],
  "15:56": [
    {
      timeFragment: "Four minutes to four",
      quote: "Four minutes to four. Newman sighed again, lost in thought.",
      book: "Tripwire",
      author: "Lee Child",
    },
  ],
  "15:57": [
    {
      timeFragment: "close upon four ",
      quote:
        "It was close upon four before the door opened, and a drunken-looking groom, ill-kempt and side-whiskered with an inflamed face and disreputable clothes, walked into the room. Accustomed as I was to my friend's amazing powers in the use of disguises, I had to look three times before I was certain that it was indeed he.",
      book: "The Adventures of Sherlock Holmes ",
      author: "Arthur Conan Doyle",
    },
  ],
  "15:58": [
    {
      timeFragment: "Towards four o'clock",
      quote:
        '"Towards four o\'clock the condition of the English army was serious. The Prince of Orange was in command of the centre, Hill of the right wing, Picton of the left wing. The Prince of Orange, desperate and intrepid, shouted to the Hollando-Belgians: "Nassau! Brunswick! Never retreat!"',
      book: "Les Miserables ",
      author: "Victor Hugo",
    },
  ],
  "15:59": [
    {
      timeFragment: "nearly 4",
      quote:
        "He looked at his watch: it was nearly 4. He helped Delphine to her feet and led her down a passage to a rear door that gave on to the hospital garden.",
      book: "The Blue Afternoon ",
      author: "William Boyd",
    },
  ],
  "16:00": [
    {
      timeFragment: "four o'clock",
      quote:
        "... when they all sat down to table at four o'clock, about three hours after his arrival, he had secured his lady, engaged her mother's consent, and was not only in the rapturous profession of the lover, but, in the reality of reason and truth, one of the happiest of men.",
      book: "Sense and Sensibility ",
      author: "Jane Austen",
    },
    {
      timeFragment: "at four",
      quote:
        '"What else can I answer, When the lights come on at four At the end of another year"',
      book: '"Toads Revisited" - The Whitsun Weddings ',
      author: "Philip Larkin",
    },
    {
      timeFragment: "4.00 p.m.",
      quote: "4.00 p.m. Take Toby out of his cage",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "four o'clock",
      quote:
        "As he turned off towards the fishing village of Cellardyke, the familiar pips announced the four o'clock news. The comforting voice of the newsreader began the bulletin. 'The convicted serial killer and former TV chat show host Jacko Vance has begun his appeal against conviction.",
      book: "The Last Temptation ",
      author: "Val McDermid",
    },
    {
      timeFragment: "at four",
      quote: "Charmian woke at four and sensed the emptiness of the house.",
      book: "Memento Mori ",
      author: "Muriel Spark",
    },
    {
      timeFragment: "at four o'clock",
      quote:
        "Djerzinski arrived punctually at four o'clock. Desplechin had asked to see him. The case was intriguing. Certainly, it was common for a researcher to take a year's sabbatical to work in Norway or Japan, or one of those sinister countries where middle aged people committed suicide en masse.",
      book: "Atomised ",
      author: "Michel Houellebecq",
    },
    {
      timeFragment: "Four o'clock",
      quote:
        "Four o'clock: wedge-shaped gardens lie Under a cavernous, a wind-picked sky.",
      book: "Sad Steps ",
      author: "Philip Larkin",
    },
    {
      timeFragment: "Four o'clock",
      quote:
        "Four o'clock: when time in the city quivers on its axis - the day not yet spent, the wheels of evening just beginning to turn. The handover hour, was how Marius liked to think of it.",
      book: "The Act of Love ",
      author: "Howard Jacobson",
    },
    {
      timeFragment: "Four o'clock",
      quote:
        "Four o'clock has just struck. Good! Arrangement, revision, reading from four to five. Short snooze of restoration for myself, from five to six. Affair of agent and sealed letter from seven to eight. At eight, en route.",
      book: "The Woman in White - The Story Continued ",
      author: "Walter Hartwright VII",
    },
    {
      timeFragment: "Four o'clock",
      quote:
        "Four o'clock has just struck. Good! Arrangement, revision, reading from four to five. Short snooze of restoration for myself, from five to six. Affair of agent and sealed letter from seven to eight. At eight, en route.",
      book: "The Woman in White - The Story Continued ",
      author: "Wilkie Collins",
    },
    {
      timeFragment: "four o'clock",
      quote:
        "He played for twenty-two days, just as he said he would. Every day at four o'clock in the afternoon, regardless of how much fighting was going on around him.",
      book: "The Cellist Of Sarajevo",
      author: "Steven Galloway",
    },
    {
      timeFragment: "four o'clock",
      quote:
        "Her eyes caught the kryptonite glow of the digital clock on the front of the microwave. Honest and true, the numbers spelled out the time although she, for a moment, found its calculation to be somehow erroneous. It was four o'clock in the afternoon.",
      book: "Blood Bride ",
      author: "Susan May Gudge",
    },
    {
      timeFragment: "four o'clock",
      quote:
        "I doubt whether anyone was commissioned to send the news along the actual telegraph, and yet Mrs. Proudie knew it before four o'clock. But she did not know it quite accurately.'Bishop', she said, standing at her husband's study door. 'They have committed that man to gaol. There was no help for them unless they had forsworn themselves.'",
      book: "The Last Chronicle of Barset ",
      author: "Anthony Trollope",
    },
    {
      timeFragment: "Four O'clock",
      quote:
        "I only found out much later that those flowers were called Four O'clock, and were not magic at all. The magic was in the seed, waiting to be watered and cared for, the real magic was life.",
      book: "Ghost Generations ",
      author: "Susan May Gudge",
    },
    {
      timeFragment: "four o'clock",
      quote:
        "In the end, it was the Sunday afternoons he couldn't cope with, and that terrible listlessness that starts to set in about 2.55, when you know you've had all the baths you can usefully have that day, that however hard you stare at any given paragraph in the newspaper you will never actually read it, or use the revolutionary new pruning technique it describes, and that as you stare at the clock the hands will move relentlessly on to four o'clock, and you will enter the long dark teatime of the soul.",
      book: "Life, the universe and everything ",
      author: "Douglas Adams",
    },
    {
      timeFragment: "struck four",
      quote:
        '"In the four thousand rooms of the Centre the four thousand electric clocks simultaneously struck four. Discarnate voices called from the trumpet mouths. "Main Day-shift off duty. Second Day-shift take over. Main Day-shift off \u2026"',
      book: "Brave New World ",
      author: "Aldous Huxley",
    },
    {
      timeFragment: "4 o'clock",
      quote:
        "It was my turn to cook the evening meal so I didn't linger in the common room. It was exactly 4 o'clock as I made my way out of the building, and doors opened behind and before me, discharging salvos of vocal babble and the noise of chair-legs scraping on wooden floors.",
      book: "Deaf Sentence ",
      author: "David Lodge",
    },
    {
      timeFragment: "Four? O'clock",
      quote:
        "Miss Douce took Boylan's coin, struck boldly the cashregister. It clanged. Clock clacked. Fair one of Egypt teased and sorted in the till and hummed and handed coins in change. Look to the west. A clack. For me. \u2014What time is that? asked Blazes Boylan. Four? O'clock. Lenehan, small eyes ahunger on her humming, bust ahumming, tugged Blazes Boylan's elbowsleeve. \u2014Let's hear the time, he said.",
      book: "Ulysses ",
      author: "James Joyce",
    },
    {
      timeFragment: "1600h.",
      quote:
        "The horrifying R.N. wipes Gately's face off as best she can with her hand and says she'll try to fit him in for a sponge bath before she goes off shift at 1600h., at which Gately goes rigid with dread.",
      book: "Infinite Jest ",
      author: "David Foster Wallace",
    },
  ],
  "16:01": [
    {
      timeFragment: "1601",
      quote:
        "Light is coming in through the curtains. Suddenly the digits on the clock radio look like a year. 1601. I woke up a bit early, don't have to be born for another 400 years.",
      book: "101 Reykjavik",
      author: "Hallgr\u00edmur Helgason",
    },
  ],
  "16:02": [
    {
      timeFragment: "two minutes after four",
      quote:
        "I'd just looked up at the clock, to make sure time wasn't getting away from me, when I heard the shot. It was two minutes after four. I didn't know what to do.",
      book: "Southern Ghost",
      author: "Carolyn G Hart",
    },
  ],
  "16:03": [
    {
      timeFragment: "16.03",
      quote:
        "She read the page carefully and then said, '16.03 - cat goes to the toilet in front garden.'",
      book: "What was Lost",
      author: "Catherine O'Flynn",
    },
  ],
  "16:04": [
    {
      timeFragment: "A little after four o'clock",
      quote:
        "A little after four o'clock, Pippa meandered over to Dot's house carrying a bottle of wine she had been keeping in reserve and wondering if she could possibly be pregnant in spite of the vestigial coil still lodged in her uterus like astronaut litter abandoned on the moon.",
      book: "The Private Lives of Pippa Lee ",
      author: "Rebecca Miller",
    },
  ],
  "16:05": [
    {
      timeFragment: "Five past four",
      quote:
        "I had met Irwin on the steps of the Widener Library. I was standing at the top of the long flight, overlooking the red brick buildings that walled the snow-filled quad and preparing to catch the trolley back to the asylum, when a tall young man with a rather ugly and bespectacled, but intelligent face, came up and said, 'Could you please tell me the time?' I glanced at my watch. 'Five past four.'",
      book: "The Bell Jar ",
      author: "Sylvia Plath",
    },
    {
      timeFragment: "Five past four",
      quote:
        "I was standing at the top of the long flight, overlooking the red brick buildings that walled the snow-filled quad and preparing to catch the trolley back to the asylum, when a tall young man with a rather ugly and bespectacled, but intelligent face, came up and said, 'Could you please tell me the time?' I glanced at my watch. 'Five past four.'",
      book: "The Bell Jar",
      author: "Sylvia Plath",
    },
    {
      timeFragment: "five minutes past four",
      quote:
        "IT was exactly five minutes past four as Mr. Robert Audley stepped out upon the platform at Shoreditch, and waited placidly \u2026 it took a long while to make matters agreeable to all claimants, and even the barrister's seraphic indifference to mundane affairs nearly gave way.",
      book: "Lady Audley's Secret ",
      author: "Mary Elizabeth Braddon",
    },
  ],
  "16:06": [
    {
      timeFragment: "six minutes after four",
      quote:
        "At six minutes after four, Benny's Cadillac pulled up in front of Mr. Botelia's store, and Benny's mother stepped out of the car with Penelope, who was gnawing on the tip of an ice cream cone.",
      book: "Follow Me: A Novel",
      author: "Joanna Scott",
    },
  ],
  "16:07": [
    {
      timeFragment: "seven minutes after four",
      quote:
        "But he released him immediately because the ladder slipped from under his feet and for an instant he was suspended in air and then he realised that he had died without Communion, without time to repent of anything or to say goodbye to anyone, at seven minutes after four on Pentecost Sunday.",
      book: "Love in the Time of Cholera",
      author: "Gabriel Garc\u00eda M\u00e1rquez",
    },
  ],
  "16:08": [
    {
      timeFragment: "eight minutes after four",
      quote:
        "It was eight minutes after four. I still don't have a plan. Maybe the guys in the Nova, maybe they had a plan.",
      book: "The Monkey's Raincoat",
      author: "Robert Crais",
    },
  ],
  "16:09": [
    {
      timeFragment: "nine minutes after four",
      quote:
        '"I have to hang up now, Rosemary said. "I just wanted to know if there was any improvement." "No, there isn\'t. It was nice of you to call." She hung up. It was nine minutes after four."',
      book: "Rosemary's Baby",
      author: "Ira Levin",
    },
  ],
  "16:10": [
    {
      timeFragment: "1610h.",
      quote:
        "1610h. E.T.A Weight room. Freestyle circuits. The clank and click of various resistance systems.",
      book: "Infinite Jest",
      author: "David Foster Wallace",
    },
    {
      timeFragment: "ten-past four",
      quote:
        "She looks at the clock. She's in the kitchen. A minute left. She waits. It's ten-past four. She picks up the eclair. She licks the cream out of it. She watches herself.It's fuckin' stupid. But. She bites into the chocolate, and the pastry that's been softened by the cream. Jack's not home yet. Leannes's at work. Paula will be leaving, herself, in a bit. She's a year off the drink. Exactly a year. She looks at the clock. A year and a minute.",
      book: "Paula Spencer ",
      author: "Roddy Doyle",
    },
  ],
  "16:11": [
    {
      timeFragment: "4:11 P.M.",
      quote:
        "4:11 P.M. Thurs. A Huey helicopter flies east overhead as the last of the U.S. Marines make ready to leave the beach; a buzzard dangles in the thermals closer over the town.",
      book: "Seek",
      author: "Denis Johnson",
    },
  ],
  "16:12": [
    {
      timeFragment: "twelve minutes after four",
      quote:
        "At precisely twelve minutes after four a body of cavalry rode into the square, four abreast, clearing a way for the funeral cortege.",
      book: "The Empty Mirror",
      author: "J Sydney Jones",
    },
  ],
  "16:13": [
    {
      timeFragment: "4.13pm",
      quote:
        "But at precisely 4.13pm, the fifty thousand spectators saw the totally unexpected happen, before their very eyes. From the most crowded section of the southern grandstand, an apparition suddenly emerged.",
      book: "Aunt Julia and the Scriptwriter",
      author: "Mario Vargas Llosa",
    },
  ],
  "16:14": [
    {
      timeFragment: "4.14pm",
      quote:
        "Then at 4.14pm on March 12 I moved behind zinc-zirconium-not-to-be-revealed-compounds protecting me in this hill, and God have mercy but the struggle is just exchanged for the next one, which is exhausting me further as I say, to separate the true from the false.",
      book: "Already Dead",
      author: "Denis Johnson",
    },
  ],
  "16:15": [
    {
      timeFragment: "quarter past four",
      quote:
        "I remember the dread with which I at quarter past four/ Let go with a bang behind me our house front door",
      book: "False Security ",
      author: "John Betjeman",
    },
    {
      timeFragment: "quarter past four",
      quote:
        "It is only a quarter past four, (shewing his watch) and you are not now in Bath. No theatre, no rooms to prepare for. Half an hour at Northanger must be enough.",
      book: "Northanger Abbey",
      author: "Jane Austen",
    },
    {
      timeFragment: "4:15",
      quote:
        "Must have the phone disconnected. Some contractor keeps calling me up about payment for 50 bags of cement he claims I collected ten days ago. Says he helped me load them onto a truck himself. I did drive Whitby's pick-up into town but only to get some lead screening. What does he think I'd do with all that cement? Just the sort of irritating thing you don't expect to hang over your final exit. (Moral: don't try too hard to forget Eniwetok.) Woke 9:40. To sleep 4:15.",
      book: "The Voices of Time ",
      author: "JG Ballard",
    },
    {
      timeFragment: "quarter past four",
      quote:
        "On the tenth day of October at quarter past four in the afternoon with a dry hot wind blowing through the passed Maria found herself in Baker. She had never meant to go as far as Baker, had started out that day as every day, her only destination the freeway. But she had driven out of San Bernadino and up the Barstow and instead of turning back at Barstow (she had been out that far before but never that late in the day, it was past time to navigate back, she was out too far too late, the rhythm was lost ) she kept driving.",
      book: "Play it as it Lays ",
      author: "Joan Didion",
    },
    {
      timeFragment: "4.15",
      quote:
        "The sun had begun to sink in the west, and the shadow of an oak branch had crept across my knees. My watch said it was 4.15.",
      book: "The Wind-up Bird Chronicle ",
      author: "Haruki Murakami",
    },
  ],
  "16:16": [
    {
      timeFragment: "4.16pm",
      quote:
        "4.16pm The terrace outside the bar is packed, and Igor feels proud of his ability to plan things, because even though he's never been to Cannes before, he had foreseen precisely this situation and reserved a table.",
      book: "The Winner Stands Alone",
      author: "Paulo Coelho",
    },
  ],
  "16:17": [
    {
      timeFragment: "four-seventeen",
      quote:
        "Apparently the great Percy has no sense of humour, for at four-seventeen he got tired of it, and hit Skinner crisply in the right eyeball, blacking the same as per illustration.",
      book: "A Prefect's Uncle ",
      author: "P.G. Wodehouse",
    },
    {
      timeFragment: "seventeen minutes after four",
      quote:
        "In the next instant she was running toward her house, unmindful of the bags she had dropped, seeing only the police cars, knowing as she glanced down at her watch and saw that it was seventeen minutes after four, that for her time had stopped.",
      book: "Life Penalty",
      author: "Joy Fielding",
    },
  ],
  "16:18": [
    {
      timeFragment: "4.18 p.m.",
      quote: "4.18 p.m. Put Toby into his cage",
      book: "The Curious Incident of the Dog in the Night-time",
      author: "Mark Haddon",
    },
  ],
  "16:19": [
    {
      timeFragment: "4:19 PM",
      quote:
        "Jessica [4:19 PM] Don't tease me like that. I haven't been to a play in years. Charles [4:19 PM] Then it'll be my treat. You and the hubby can have big fun on me.",
      book: "The Other Woman",
      author: "Eric Jerome Dickey",
    },
  ],
  "16:20": [
    {
      timeFragment: "4.20 p.m.",
      quote: "4.20 p.m. Watch television or a video",
      book: "The Curious Incident of the Dog in the Night-time",
      author: "Mark Haddon",
    },
    {
      timeFragment: "twenty minutes past four",
      quote:
        "At twenty minutes past four - or, to put it another, blunter way, an hour and twenty minutes past what seemed to be all reasonable hope - the unmarried bride, her head down, a parent stationed on either side of her, was helped out of the building...",
      book: "Raise High the Roof Beam, Carpenters ",
      author: "J. D. Salinger",
    },
  ],
  "16:21": [
    {
      timeFragment: "4.21pm",
      quote:
        '"4.21pm As they started on, Doug picked up a twig and after rubbing it off, started to move one end of it inside his mouth. "What are you doing?" Bob asked. "Brushing my teeth, nature style," Doug answered. Bob grunted, smiling slightly. "I\'ll use my toothbrush," he said."',
      book: "Hunted Past Reason",
      author: "Richard Matheson",
    },
  ],
  "16:22": [
    {
      timeFragment: "4.22pm",
      quote:
        "Monday, 4.22pm Washington, D.C. Paul Hood took his daily late-afternoon look at the list of names on his computer monitor.",
      book: "Balance of Power: Op-Center 05",
      author: "Tom Clancy, Steve Pieczenik, and Jeff Rovin",
    },
  ],
  "16:23": [
    {
      timeFragment: "4.23",
      quote:
        "They were hurrying west, trying to reach the river before sunset. The warming-related 'adjustments' to Earth's orbit had shortened the winter days, so that now, in January, sunset was taking place at 4.23.",
      book: "A Visit from the Goon Squad",
      author: "Jennifer Egan",
    },
  ],
  "16:24": [
    {
      timeFragment: "4:24",
      quote:
        "Mike winked at Ashley and continued with the remaining greetings and hugs and handshakes. The time was 4:24. Six hours to go. The minutes seemed to just melt away.",
      book: "Teardrop",
      author: "Travis Thrasher",
    },
  ],
  "16:25": [
    {
      timeFragment: "twenty-five minutes past four",
      quote:
        "As I dressed I glanced at my watch. It was no wonder that no one was stirring. It was twenty-five minutes past four. I had hardly finished when Holmes returned with the news that the boy was putting in the horse.",
      book: "The Man with the Twisted Lip",
      author: "Arthur Conan Doyle",
    },
  ],
  "16:26": [
    {
      timeFragment: "twenty-six minutes after four",
      quote:
        '"It seemed all wrong to have thought of such a thing. She thought, "I don\'t know him. Nor does he know me. Nor ever shall we." She put her bare hand in the sun, where the wind would weather it. It was twenty-six minutes after four."',
      book: "Catch-As-Catch-Can",
      author: "Charlotte Armstrong",
    },
  ],
  "16:28": [
    {
      timeFragment: "4.28pm",
      quote:
        "Same day: 4.28pm- Right turn at the second bus stop after the gas station. I stopped the car at the first ward post office and inquired at the corner tobacconists. Mr. M's house was the one to the right of the post office, visible diagonally in front of me.",
      book: "The Ruined Map: A Novel",
      author: "Kobo Abe",
    },
  ],
  "16:29": [
    {
      timeFragment: "4:29 pm.",
      quote:
        "October 21, 2007, 4:29 pm. The phone was red. And what William hated most about it, besides the fact that it was inconveniently mounted on a wall in a tight corner (and at a strange angle), was that when it rang it was so gratingly loud that you could actually see the cherry receiver quavering as you picked it up.",
      book: "Believing Cedric",
      author: "Mark Lavorato",
    },
  ],
  "16:30": [
    {
      timeFragment: "four-thirty",
      quote:
        "At four-thirty that afternoon in late January when I stepped into the parlour with Boo, my dog, Hutch was in his favourite armchair, scowling at the television, which he had muted.",
      book: "Odd Hours",
      author: "Dean Koontz",
    },
    {
      timeFragment: "four thirty",
      quote:
        "I leave the office at four thirty, head up to Xclusive where I work out on free weights for an hour, then taxi across the park to Gio's in the Pierre Room for a facial, a manicure and, if time permits, a pedicure.",
      book: "American Psycho ",
      author: "Bret Easton Ellis",
    },
    {
      timeFragment: "four-thirty",
      quote:
        "She hung up on me at first, then asked me whether I made a point of behaving like a 'small-time suburban punk' with women I had slept with. But after apologies, insults, laughter, and tears, Romeo and Juliet were to be seen together later that afternoon, mushily holding hands in the dark at a four-thirty screening of L ove and Death at the National Film Theatre. Happy endings \u2013 for now at least.",
      book: "Essays in Love ",
      author: "Alain de Botton",
    },
  ],
  "16:31": [
    {
      timeFragment: "4:31 PM",
      quote:
        "From: Renee Greene \u2013 August 5, 2011 \u2013 4:31 PM To: Shelley Manning Subject: Re: All Access What should I be worried about, then? JUST KIDDING. You're right. Well, I gotta run, my groupie friend. I actually have REAL work to do. I'll talk to you tonight.",
      book: "Click: An Online Love Story",
      author: "Lisa Becker",
    },
  ],
  "16:32": [
    {
      timeFragment: "4.32pm.",
      quote:
        '"4.32pm. Now the eight Marines next to us leave their emplacement and file quickly past, the last saying, "Go! Go! Go!" They break into a run."',
      book: "Seek",
      author: "Denis Johnson",
    },
  ],
  "16:33": [
    {
      timeFragment: "4.33pm",
      quote:
        "At 4.33pm, a short bald man puffing on a cigar arrived at the library. He approached a huge cabinet storing thousands of alphabetically arranged cards and slid a drawer out. The tips of his fingers were bandaged.",
      book: "Havana World Series",
      author: "Jos\u00e9 Latour",
    },
  ],
  "16:34": [
    {
      timeFragment: "4.34 p.m.",
      quote:
        "A bedroom stocked with all the ordinary, usual things. There was a wardrobe in the corner. A bedside table with a collection of water glasses of varying ages and an alarm clock with red digital numbers- 4.34 p.m.",
      book: "The Raw Shark Texts",
      author: "Steven Hall",
    },
  ],
  "16:35": [
    {
      timeFragment: "4.35",
      quote:
        "The Voice shut itself off with a click, and then reopened conversation by announcing the arrival at Platform 9 of the 4.35 from Birmingham and Wolverhampton.",
      book: "4.50 from Paddington",
      author: "Agatha Christie",
    },
  ],
  "16:37": [
    {
      timeFragment: "1637.",
      quote:
        "She should have been home by now. 1637. Yes. It's as if I had the date of a year on my arm. Every day is a piece of world history.",
      book: "101 Reykjavik",
      author: "Hallgr\u00edmur Helgason",
    },
  ],
  "16:39": [
    {
      timeFragment: "4:39 p.m.",
      quote:
        "Harlem enjoys lazy Sabbath mornings, although the pace picks up again in the afternoon, after church. My watch read 4:39 p.m., and I realized that I hadn't eaten all day. I bought two slices of pizza from a sidewalk vendor on 122nd and Lenox Avenue and washed it down with a grape Snapple.",
      book: "Blood Red Blues",
      author: "Teddy Hayes",
    },
  ],
  "16:40": [
    {
      timeFragment: "Four forty",
      quote:
        "Four forty P.M. Besta sang another hymn. Everyone knew something was wrong. How long did they wait? The mayor was going crazy inside, as was the mayor's wife, as was their daughter. Seiji could barely contain his rage. He was turning as red as his red tuxedo.",
      book: "Trouble & Triumph: A Novel of Power & Beauty",
      author: '"Tip "T.I." Harris with David Ritz"',
    },
  ],
  "16:42": [
    {
      timeFragment: "4:42pm.",
      quote:
        "I'm always happy when I reach the finish line of a long-distance race, but this time it really struck me hard. I pumped my right fist into the air. The time was 4:42pm. Eleven hours and forty-two minutes since the start of the race.",
      book: "What I Talk About When I Talk About Running",
      author: "Haruki Murakami",
    },
  ],
  "16:45": [
    {
      timeFragment: "four-forty-five",
      quote:
        "At four-forty-five Miss Haddon went to tea with the Principal, who explained why she desired all the pupils to learn the same duet. It was part of her new co-ordinative system.",
      book: "Co-ordination",
      author: "EM Forster",
    },
    {
      timeFragment: "fifteen minutes before five",
      quote:
        "The next day Bill took only ten minutes of the twenty-minute break allotted for the afternoon and left at fifteen minutes before five. He parked the car in the lot just as Arlene hopped down from the bus.",
      book: "Where I'm Calling From ",
      author: "Raymond Carver",
    },
  ],
  "16:46": [
    {
      timeFragment: "4:46",
      quote:
        "At 4:46 an obese, middle-aged man shuffled in. Wearing a starched guayabera and dark green pants, Ure\u00f1a asked for a book on confectionery, then took a seat at the end of the same reading room. Evelina and Leticia exchanged astonished glances. It definitely was one of those days.",
      book: "The Havana World Series",
      author: "Jos\u00e9 Latour",
    },
  ],
  "16:47": [
    {
      timeFragment: "4:47",
      quote:
        "But maybe it was more than that, maybe Affenlight had erred badly somehow, because here it was 4:49 by his watch, 4:47 by the wall clock, and Owen had not yet come.",
      book: "The Art of Fielding",
      author: "Chad Harbach",
    },
  ],
  "16:48": [
    {
      timeFragment: "4:48 a.m.",
      quote:
        "Thinking about the card warms me to the idea of walking under the arched doorway of the Newtons' home, but when I arrive at their house, the plan seems ridiculous. What am I doing? It's 4:48 a.m., and I'm parked outside their darkened house.",
      book: "What is the What",
      author: "Dave Eggers",
    },
  ],
  "16:49": [
    {
      timeFragment: "4:49 p.m.",
      quote:
        "4:49 p.m., a bald-headed man wearing khakis and ankle-high deck shoes came out through the front door of the purple house on 21st Avenue East. The detectives had nicknamed him the General.",
      book: "Beyond Recognition",
      author: "Ridley Pearson",
    },
  ],
  "16:50": [
    {
      timeFragment: "4.50",
      quote:
        '"The train standing at Platform 3," the Voice told her, "is the 4.50 for Brackhampton, Milchester, Waverton, Carvil Junction, Roxeter and stations to Chadmouth. Passengers for Brackhampton and Milchester travel at the rear of the train. Passengers for Vanequay change at Roxeter." The voice shut itself off with a click,"',
      book: "4.50 from Paddington ",
      author: "Agatha Christie",
    },
    {
      timeFragment: "ten minutes to five",
      quote:
        "They had all frozen at the same time, on a snowy night, seven years before, and after that it was always ten minutes to five in the castle.",
      book: "The 13 Clocks",
      author: "James Thurber",
    },
    {
      timeFragment: "ten minutes to five",
      quote:
        "When the clock said ten minutes to five, she began to listen, and a few moments later, punctually as always, she heard the tires on the gravel outside, and the car door slamming, the footsteps passing the window, the key turning in the lock. She laid aside her sewing, stood up, and went forward to kiss him as he came in.",
      book: "Lamb to the Slaughter",
      author: "Roald Dahl",
    },
  ],
  "16:51": [
    {
      timeFragment: "Nine minutes to five.",
      quote:
        "Nine minutes to five. If this wasn't some new ordeal, intended to fray her nerves to shreds, if this important person really did exist, if he'd actually set up this appointment, and if, moreover, he arrived on time, then there were nine minutes left.",
      book: "Compulsory Happiness",
      author: "Norman Manea and Linda Coverdale",
    },
  ],
  "16:52": [
    {
      timeFragment: "eight minutes to five",
      quote:
        "The corrida was to begin at five o'clock. The five-footed beasts make a point of arriving at the latest at eight or seven minutes to: ritual again. At eight minutes to five, there they were. The urchins gave them a tap on the shoulder: another bit of ritual.",
      book: "Chaos and Night",
      author: "Henry De Montherlant",
    },
  ],
  "16:53": [
    {
      timeFragment: "seven minutes before five",
      quote:
        "It was so quiet in the post office that Trinidad could hear the soft tick of the clock's second hand every time it moved. It was now seven minutes before five.",
      book: "The Silence of Bonaventure Arrow",
      author: "Rita Leganski",
    },
  ],
  "16:54": [
    {
      timeFragment: "six minutes before five",
      quote:
        "At six minutes before five o'clock, Daisy Robinson, about to reach her own apartment door, paused to look and to listen. Something was out of order. Tess Rogan's door was standing wide open and, from within, Daisy could hear something being broken.",
      book: "The Seventeen Widows of Sans Souci",
      author: "Charlotte Armstrong",
    },
    {
      timeFragment: "1654",
      quote:
        "It was 1654 local time when the Red October broke the surface of the Atlantic Ocean for the first time, forty-seven miles southeast of Norfolk. There was no other ship in sight.",
      book: "The Hunt for Red October ",
      author: "Tom Clancy",
    },
  ],
  "16:55": [
    {
      timeFragment: "five minutes to five",
      quote:
        "About five minutes to five, just as they were all putting their things away for the night, Nimrod suddenly appeared in the house. He had come hoping to find some of them ready dressed to go home before the proper time.",
      book: "The Ragged Trousered Philanthropists",
      author: "Robert Tressell",
    },
  ],
  "16:56": [
    {
      timeFragment: "4:56 P.M.",
      quote:
        "And when that final Friday came, when my packing was mostly done, she sat with my dad and me on the living-room couch at 4:56 P.M. and patiently awaited the arrival of the Good-bye to Miles Cavalry.",
      book: "Looking for Alaska",
      author: "John Green",
    },
  ],
  "16:57": [
    {
      timeFragment: "nearly five",
      quote:
        "It was nearly five in the evening when the cook came aboard. He did not have the cabbages.",
      book: "A Single Pebble ",
      author: "John Hershey",
    },
    {
      timeFragment: "three minutes to five",
      quote:
        "Then at three minutes to five \u2014 Pendel had somehow never doubted that Osnard would be punctual \u2014 along comes a brown Ford hatchback with an Avis sticker on the back window and pulls into the space reserved for customers.",
      book: "The Tailor of Panama",
      author: "John Le Carr\u00e9",
    },
  ],
  "16:58": [
    {
      timeFragment: "A minute and twenty-one seconds to five",
      quote:
        '"I was told that in his vest pocket he kept a chronometer instead of a watch. If someone asked him what time it was, he would say, "A minute and twenty-one seconds to five."',
      book: "The Collected Stories ",
      author: "Isaac Bashevis Singer",
    },
  ],
  "16:59": [
    {
      timeFragment: "around 5 p.m.",
      quote:
        "The rain stopped around 5 p.m. and a few of those people who were out and about expressed mild surprise when the rainbow failed to fade.",
      book: "Mortality -- 'The Rainbow' ",
      author: "Nicholas Royle",
    },
  ],
  "17:00": [
    {
      timeFragment: "5.00 p.m.",
      quote: "5.00 p.m. Read a book",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "five",
      quote:
        "About five, the Abbot, a young Manchester terrier, began chirruping. He stood on the body of his owner, Flora, with his forepaws on the sill of the balcony, stared through the green rattan blinds, and trembled. He could see the farmer in the field, and Edward asleep on the next balcony.",
      book: "The People With the Dogs ",
      author: "Christina Stead",
    },
    {
      timeFragment: "five o'clock",
      quote:
        "At five o'clock that afternoon, while Barbara waited in a taxi, Harold went into the convent in Auteuil and explained to the nun who sat in the concierge's glass cage that Mme. Straus-Muguet was expecting them. He assumed that men were not permitted any further, and that they would all three go out for tea.",
      book: "The Chateau ",
      author: "William Maxwell",
    },
    {
      timeFragment: "five o'clock",
      quote:
        "At five o'clock adieux were waved, and the ponderous liner edged away from the long pier, slowly turned its nose seaward, discarded its tug, and headed for the widening water spaces that led to old world wonders. By night the outer harbour was cleared, and late passengers watched the stars twinkling above an unpolluted ocean.",
      book: "The Horror at Red Hook ",
      author: "H. P. Lovecraft",
    },
    {
      timeFragment: "five o'clock",
      quote:
        "But I took the mixture at five o'clock in the afternoon. I run my tongue over my dry mouth. I feel dizzy. I know this dizziness: it's because I haven't had a cigarette for hours.",
      book: "The End of Mr Y ",
      author: "Scarlett Thomas",
    },
    {
      timeFragment: "five o'clock",
      quote:
        "ERE THE HALF-HOUR ended, five o'clock struck; school was dismissed, and all were gone into the refectory to tea. I now ventured to descend; it was deep dusk; I retired into a corner and sat down on the floor.",
      book: "Jane Eyre ",
      author: "Charlotte Bront\u00eb",
    },
    {
      timeFragment: "five o'clock",
      quote:
        "From five o'clock to eight is on certain occasions a little eternity; but on such an occasion as this the interval could be only an eternity of pleasure.",
      book: "The Portrait of a Lady ",
      author: "Henry James",
    },
    {
      timeFragment: "five o'clock",
      quote:
        "He found it harder to concentrate on drills that afternoon and when he left the building at five o'clock, he was still so worried that he walked straight into someone just outside the door.",
      book: "Harry Potter and the Philosopher's Stone ",
      author: "JK Rowling",
    },
    {
      timeFragment: "five o'clock",
      quote:
        "She had not seen her yet, as Osmond had given her to understand that it was too soon to begin. She drove at five o'clock to a high floor in a narrow street in the quarter of the Piazza Navona, and was admitted by the portress of the convent, a genial and obsequious person. Isabel had been at this institution before; she had come with Pansy to see the sisters.",
      book: "The Portrait of a Lady ",
      author: "Henry James",
    },
    {
      timeFragment: "five o'clock",
      quote:
        "Until five o'clock there was no sign of life from the room. Then he rang for his servant and ordered a cold bath.",
      book: "Embers ",
      author: "Sandor Marai",
    },
    {
      timeFragment: "five o'clock",
      quote:
        "We motored, I remember, leaving London in the morning in a heavy shower of rain, coming to Manderley about five o'clock, in time for tea. I can see myself now, unsuitably dressed as usual, although a bride of seven weeks, in a tan-coloured stockinette frock, a small fur known as a stone marten round my neck, and over all a shapeless mackintosh, far too big for me and dragging to my ankles.",
      book: "Rebecca ",
      author: "Daphne du Maurier",
    },
  ],
  "17:01": [
    {
      timeFragment: "One minute after five.",
      quote:
        "One minute after five. The seated guests were told that the ceremony would begin shortly. A little more patience was required.",
      book: "Trouble & Triumph: A Novel of Power & Beauty",
      author: '"Tip "T.I." Harris with David Ritz"',
    },
  ],
  "17:02": [
    {
      timeFragment: "two minutes past five",
      quote:
        "She stood up, shook her hair into place, smoothed her skirt and turned on the light. It was two minutes past five. She would have thought it midnight or five in the morning.",
      book: "Duplicate Keys",
      author: "Jane Smiley",
    },
  ],
  "17:03": [
    {
      timeFragment: "5:03",
      quote:
        '"Good evening, Mrs. Scheindlin," the man said before departing. "Good evening, Chris. Say hello to the wife for me." "I sure will. Thanks. Bye," he said, waving to Elliot, who returned the goodbye. It was 5:03 when Elliot rested the handset in its cradle."',
      book: "Comrades in Miami: A Novel",
      author: "Jos\u00e9 Latour",
    },
  ],
  "17:04": [
    {
      timeFragment: "5:04 P.M.",
      quote:
        "Frank Wamsley spotted his cousin Barbara and her husband and waved to them. Just ahead, he saw Marvin and his two friends. Suddenly the whole bridge convulsed. The time was 5:04 P.M. Steel screamed.",
      book: "The Mothman Prophecies",
      author: "John A. Keel",
    },
  ],
  "17:05": [
    {
      timeFragment: "5:05 p.m.",
      quote:
        "At approximately 5:05 p.m. Joe became aware of a man standing close to the table, about two metres away, talking in Mandarin into a mobile phone. He was a middle-aged Han wearing cheap leather slip-on shoes, high-waisted black trousers and a white short-sleeved shirt.",
      book: "Typhoon",
      author: "Charles Cumming",
    },
  ],
  "17:06": [
    {
      timeFragment: "around 5 p.m.",
      quote:
        "The rain stopped around 5 p.m. and a few of those people who were out and about expressed mild surprise when the rainbow failed to fade.",
      book: "Mortality -- 'The Rainbow' ",
      author: "Nicholas Royle",
    },
  ],
  "17:10": [
    {
      timeFragment: "Five ten P.M.",
      quote:
        "Five ten P.M. A ground-to-ground cruise missile, launched from a tractor installed in the backyard of Leonard Sudavico's former home by Rashan and a crew of technicians from Afghanistan, exploded onto the Paul Clay estate in the exact spot where the life-size mermaid had once swum in the waterfall.",
      book: "Trouble & Triumph: A Novel of Power & Beauty",
      author: '"Tip "T.I." Harris with David Ritz"',
    },
    {
      timeFragment: "ten minutes past five",
      quote:
        "Hours later, at ten minutes past five, Saturday afternoon, Nora and Travis and Jim Keene crowded in front of the mattress on which Einstein lay. The dog had just taken a few more ounces of water. He looked at them with interest, too. Travis tried to decide if those large brown eyes still had the strange depth, uncanny alertness, and undoglike awareness that he had seen in them so many times before.",
      book: "Watchers ",
      author: "Dean Koontz",
    },
  ],
  "17:12": [
    {
      timeFragment: "twelve minutes past five",
      quote:
        '"Well, here we are," said Colonel Julyan, "and it\'s exactly twelve minutes past five. We shall catch them in the middle of their tea. Better wait for a bit" Maxim lit a cigarette, and then stretched out his hand to me. He did not speak."',
      book: "Rebecca",
      author: "Daphne du Maurier",
    },
  ],
  "17:14": [
    {
      timeFragment: "fourteen minutes past five",
      quote:
        '"Do you know what time it is, Atticus?" she said. "Exactly fourteen minutes past five. The alarm clock\'s set for five-thirty. I want you to know that."',
      book: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
  ],
  "17:15": [
    {
      timeFragment: "17:15 hrs",
      quote:
        "When August Bach emerged from the gloomy chill of the air-conditioned Divisional Fighter Control bunker it was 17:15 hrs CET. The day had ripened into one of those mellow summer afternoons when the air is warm and sweet like soft toffee",
      book: "Bomber",
      author: "Len Deighton",
    },
  ],
  "17:18": [
    {
      timeFragment: "eighteen minutes past five",
      quote:
        "Lupin rose, without breaking his contemptuous silence, and took the sheet of paper. I remembered soon after that, at this moment, I happened to look at the clock. It was eighteen minutes past five.",
      book: "The Confessions of Ars\u00e8ne Lupin",
      author: "Maurice LeBlanc",
    },
  ],
  "17:19": [
    {
      timeFragment: "5.19 p.m.",
      quote:
        "The call came at 5.19 p.m. The line was surprisingly clear. A man introduced himself as Major Liepa from the Riga police. Wallander made notes as he listened, occasionally answering a question.",
      book: "The Dogs of Riga",
      author: "Henning Mankell",
    },
  ],
  "17:20": [
    {
      timeFragment: "1720",
      quote:
        "The Meeting was listed as starting at 1730, and it was only around 1720, and Hal thought the voices might signify some sort of pre-Meeting orientation for people who've come for the first time, sort of tentatively, just to scout the whole enterprise out, so he doesn't knock.",
      book: "Infinite Jest",
      author: "David Foster Wallace",
    },
  ],
  "17:21": [
    {
      timeFragment: "around 1720",
      quote:
        "The Meeting was listed as starting at 1730, and it was only around 1720, and Hal thought the voices might signify some sort of pre-Meeting orientation for people who've come for the first time, sort of tentatively, just to scout the whole enterprise out, so he doesn't knock.",
      book: "Infinite Jest",
      author: "David Foster Wallace",
    },
  ],
  "17:23": [
    {
      timeFragment: "Five twenty-three",
      quote:
        '"I was wondering if we could meet for a drink." "What for?" "Just for a chat. Do you know the Royal batsman, near Central Station? We could meet tomorrow at five?" "Five twenty-three," I said, to exert some control over the situation."',
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "17:25": [
    {
      timeFragment: "five-twenty-five",
      quote:
        "It was five-twenty-five when I pulled up in front of the library. Still early for our date, so I got out of the car and took a stroll down the misty streets. In a coffee shop, watched a golf match on television, then I went to an entertainment center and played a video game. The object of the game was to wipe out tanks invading from across the river. I was winning at first, but as the game went on, the enemy tanks bred like lemmings, crushing me by sheer number and destroying my base. An on-screen nuclear blast took care of everything, followed by the message game over insert coin.",
      book: "Hard Boiled Wonderland and the End of the World ",
      author: "Haruki Murakami",
    },
    {
      timeFragment: "twenty-five minutes past five",
      quote:
        '"Now said Handsley, when Angela had poured out the last cup, "it\'s twenty-five minutes past five, At half-past the Murder game is on"',
      book: "A Man Lay Dead",
      author: "Ngaio Marsh",
    },
  ],
  "17:30": [
    {
      timeFragment: "half-past five",
      quote:
        "He went up to his coachman, who was dozing on the box in the shadow, already lengthening, of a thick lime-tree; he admired the shifting clouds of midges circling over the hot horses, and, waking the coachman, he jumped into the carriage, and told him to drive to Bryansky's. It was only after driving nearly five miles that he had sufficiently recovered himself to look at his watch, and realise that it was half-past five, and he was late.",
      book: "Anna Karenina ",
      author: "Leo Tolstoy",
    },
    {
      timeFragment: "half-past five",
      quote:
        "It was half-past five before Holmes returned. He was bright, eager, and in excellent spirits, a mood which in his case alternated with fits of the blackest depression.",
      book: "The Sign Of Four ",
      author: "Arthur Conan Doyle",
    },
  ],
  "17:33": [
    {
      timeFragment: "5:33 p.m.",
      quote:
        "At 5:33 p.m. there is a blast of two deep, resonant notes a major third apart. On another day there is the same blast at 12:54 p.m. On another, exactly 8:00 a.m.",
      book: "Varieties of Disturbance",
      author: "Lydia Davis",
    },
  ],
  "17:37": [
    {
      timeFragment: "5:37",
      quote:
        '"Look, Lucille, said Joe when Lucille strolled into the office at 5:37. "I don\'t know what you said to this gal, but it seems to have had exactly the opposite of the desired effect. She\'s got some bee in her bonnet about Harvard Law School."',
      book: "Lightning Rods",
      author: "Helen DeWitt",
    },
  ],
  "17:40": [
    {
      timeFragment: "5:40",
      quote:
        "Hey, young man, what time is it? 'What?' I said, is it 5:30 yet? 'Er, 5:40.' Heavens, they'll be starving. But then that's a good thing. Let them.'",
      book: "I Love Dollars",
      author: "Zhu Wen",
    },
    {
      timeFragment: "five-forty",
      quote:
        "It's five-forty now. The party's at six. By about ten past, the eleventh floor should be clearing. Arnold is a very popular partner; no one's going to miss his farewell speech if they can help it. Plus, at Carter Spink parties, the speeches always happen early on, so people can get back to work if they need to. And while everyone's listening I'll slip down to Arnold's office. It should work. It has to work. As I stare at my own bizarre reflection, I feel a grim resolve hardening inside me. He's not going to get away with everyone thinking he's a cheery, harmless old teddy bear. He's not going to get away with it.",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
  ],
  "17:42": [
    {
      timeFragment: "around 5.45",
      quote:
        "Janice is not waiting for him in the lounge or beside the pool when at last around 5.45 they come home from playing the par-5 eighteenth. Instead one of the girls in their green and white uniforms comes over and tells him that his wife wants him to call home.",
      book: "Rabbit Is Rich",
      author: "John Updike",
    },
  ],
  "17:45": [
    {
      timeFragment: "5.45",
      quote:
        "Janice is not waiting for him in the lounge or beside the pool when at last around 5.45 they come home from playing the par-5 eighteenth. Instead one of the girls in their green and white uniforms comes over and tells him that his wife wants him to call home.",
      book: "Rabbit Is Rich",
      author: "John Updike",
    },
  ],
  "17:46": [
    {
      timeFragment: "fourteen minutes to six",
      quote:
        "Through the curtained windows of the furnished apartment which Mrs. Horace Hignett had rented for her stay in New York rays of golden sunlight peeped in like the foremost spies of some advancing army. It was a fine summer morning. The hands of the Dutch clock in the hall pointed to thirteen minutes past nine; those of the ormolu clock in the sitting-room to eleven minutes past ten; those of the carriage clock on the bookshelf to fourteen minutes to six. In other words, it was exactly eight; and Mrs. Hignett acknowledged the fact by moving her head on the pillow, opening her eyes, and sitting up in bed. She always woke at eight precisely.",
      book: "Three Men and a Maid ",
      author: "P.G. Wodehouse",
    },
  ],
  "17:48": [
    {
      timeFragment: "5:48 p.m.",
      quote:
        "Father came home at 5:48 p.m. I heard him come through the front door. Then he came into the living room. He was wearing a lime green and sky blue check shirt and there was a double knot on one of his shoes but not on the other.",
      book: "The Curious Incident Of The Dog In The Night-Time",
      author: "Mark Haddon",
    },
  ],
  "17:50": [
    {
      timeFragment: "Ten to six",
      quote:
        '"What time is it Jack?" "Ten to six"Ten more minutes then." I shuffle the cards. "Time for a quick game of rummy?"',
      book: "Noughts and Crosses",
      author: "Malorie Blackman",
    },
  ],
  "17:53": [
    {
      timeFragment: "Seven minutes to six",
      quote:
        '"That boy will be spoiled, as sure as I go on springs; he\'s made such a lot of. Have you been regulated?" "I should think I have!" exclaimed I, in indignant recollection of my education. "All right; keep your temper. What time are you?" "Seven minutes to six."',
      book: "The Adventures of a Three-Guinea Watch",
      author: "Talbot Baines Reed",
    },
  ],
  "17:54": [
    {
      timeFragment: "5:54 pm",
      quote:
        "\"It was 5:54 pm when Father came back into the living room. He said, 'What is this?\" but he said it very quietly and I didn't realise that he was angry because he wasn't shouting.\"",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
  ],
  "17:55": [
    {
      timeFragment: "five minutes to six",
      quote:
        "The wind moaned and sang dismally, catching the ears and lifting the shabby coat-tails of Mr Mortimer Jenkyn, 'Photographic Artist', as he stood outside and put the shutters up with this own cold hands in despair of further trade. It was five minutes to six.",
      book: "The Deferred Appointment ",
      author: "Algernon Blackwood",
    },
  ],
  "17:57": [
    {
      timeFragment: "nearly six o'clock",
      quote:
        "When he arrived it was nearly six o'clock, and the sun was setting full and warm, and the red light streamed in through the window and gave more colour to the pale cheeks.",
      book: "Dracula ",
      author: "Bram Stoker",
    },
  ],
  "17:58": [
    {
      timeFragment: "nearly six o'clock",
      quote:
        "It was nearly six o'clock in the evening, and the absurd bell in the six-foot tin steeple of the church went clank-clank, clank- clank! as old Mattu pulled the rope within.'",
      book: "Burmese Days",
      author: "George Orwell",
    },
  ],
  "17:59": [
    {
      timeFragment: "nearly six o'clock",
      quote:
        "When he arrived it was nearly six o'clock, and the sun was setting full and warm, and the red light streamed in through the window and gave more colour to the pale cheeks.",
      book: "Dracula",
      author: "Bram Stoker",
    },
  ],
  "18:00": [
    {
      timeFragment: "6.00 p.m.",
      quote: "6.00 p.m. Have tea",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "six o'clock",
      quote:
        "Although it was only six o'clock, the night was already dark. The fog, made thicker by its proximity to the Seine, blurred every detail with its ragged veils, punctured at various distances by the reddish glow of lanterns and bars of light escaping from illuminated windows.",
      book: "Le Club des Hachichins",
      author: "Th\u00e9ophile Gautier",
    },
    {
      timeFragment: "six o'clock",
      quote:
        "Did you go down to the farm while I was away?' 'No,' I said 'but I saw Ted.' 'Did he have a message for me ?' she asked. 'He said today was no good as he was going to Norwich. But Friday at six o'clock, same as usual.' 'Are you sure he said six o'clock?' she asked, puzzled. 'Quite sure.'",
      book: "The Go-Between ",
      author: "L.P. Hartley",
    },
    {
      timeFragment: "six o'clock",
      quote:
        "King Richard: What is o'clock? Catesby: It is six o'clock, full supper time. King Richard: I will not sup tonight. Give me some ink and paper.",
      book: "Richard III ",
      author: "William Shakespeare",
    },
    {
      timeFragment: "six o'clock",
      quote:
        "Leon waited all day for six o'clock to arrive; when he got to the inn, he found no one there but Monsieur Binet, already at the table.",
      book: "Madame Bovary ",
      author: "Gustave Flaubert",
    },
    {
      timeFragment: "Six o'clock",
      quote: "Oh oh oh. Six o'clock and the master not home yet.",
      book: "The skin of our teeth ",
      author: "Thornton Wilder",
    },
    {
      timeFragment: "six o'clock",
      quote:
        "The newspaper snaked through the door and there was suddenly a six o'clock feeling in the house",
      book: "The Prime of Miss Jean Brodie ",
      author: "Muriel Spark",
    },
    {
      timeFragment: "Six o'clock",
      quote:
        "The winter evening settles down With smell of steaks in passageways. Six o'clock.",
      book: "Preludes ",
      author: "T S Eliot",
    },
    {
      timeFragment: "six",
      quote:
        "When the bells of Calvary Church struck six, she saw Mr and Mrs Biggs hurrying down the front stoop, rushing off to the shops before they closed.",
      book: "The Interpretation Of Murder ",
      author: "Jed Rubenfeld",
    },
  ],
  "18:03": [
    {
      timeFragment: "three minutes past six",
      quote:
        "Above it all rose the Houses of Parliament, with the hands of the clock stopped at three minutes past six. It was difficult to believe that all that meant nothing any more, that now it was just a pretentious confection that could decay in peace.",
      book: "The Day of the Triffids",
      author: "John Wyndham",
    },
  ],
  "18:04": [
    {
      timeFragment: "Four minutes after six",
      quote:
        '"We will make record of it, my Rosannah; every year, as this dear hour chimes from the clock, we will celebrate it with thanksgivings, all the years of our life." "We will, we will, Alonzo!" "Four minutes after six, in the evening, my Rosannah..."',
      book: "The Loves of Alonzo Fitz Clarence and Rosannah Ethelton",
      author: "Mark Twain",
    },
  ],
  "18:05": [
    {
      timeFragment: "five past six",
      quote:
        "At about five past six Piers came in carrying an evening paper and a few books.",
      book: "A Glass of Blessings",
      author: "Barbara Pym",
    },
  ],
  "18:08": [
    {
      timeFragment: "6:08 p.m.",
      quote:
        '"6:08 p.m. The code-word "Valkyrie" reached von Seydlitz Gabler\'s headquarters"',
      book: "The Night of the Generals",
      author: "Hans Hellmut Kirst",
    },
  ],
  "18:10": [
    {
      timeFragment: "six ten",
      quote:
        "'Let me see now. You had a drink at the Continental at six ten.' 'Yes.' 'And at six forty-five you were talking to another journalist at the door of the Majestic?' 'Yes, Wilkins. I told you all this, Vigot, before. That night.'",
      book: "The Quiet American ",
      author: "Graham Greene",
    },
  ],
  "18:15": [
    {
      timeFragment: "Quarter past six",
      quote:
        "'Quarter past six,' said Tony. 'He's bound to have told her by now.'",
      book: "A Handful of Dust ",
      author: "Evelyn Waugh",
    },
    {
      timeFragment: "quarter past six",
      quote: "At a quarter past six he was through with them.",
      book: "The Photograph ",
      author: "Penelope Lively",
    },
    {
      timeFragment: "6.15 pm.",
      quote:
        "I checked the time on the corner of my screen. 6.15 pm. I was never going to finish my essay in forty-five minutes",
      book: "Girl Missing ",
      author: "Sophie McKenzie",
    },
  ],
  "18:20": [
    {
      timeFragment: "twenty past six",
      quote:
        "By the time Elliot's mother arrived at twenty past six, Mrs Sen always made sure all evidence of her chopping was disposed of.",
      book: "Interpreter of Maladies",
      author: "Jhumpa Lahiri",
    },
  ],
  "18:21": [
    {
      timeFragment: "6.21pm",
      quote:
        "5.20pm - 6.21pm: Miss Pettigrew found herself wafted into the passage. She was past remonstrance now, past bewilderment, surprise, expostulation. Her eyes shone. Her face glowed. Her spirits soared. Everything was happening too quickly. She couldn't keep up with things, but, by golly, she could enjoy them.",
      book: "Miss Pettigrew Lives for a Day",
      author: "Winifred Watson",
    },
  ],
  "18:22": [
    {
      timeFragment: "Twenty-two minutes past six",
      quote:
        "Clock overturned when he fell forward. That'll give us the time of the crime. Twenty-two minutes past six.",
      book: "The Murder at the Vicarage",
      author: "Agatha Christie",
    },
  ],
  "18:25": [
    {
      timeFragment: "twenty-five past six",
      quote:
        "At twenty-five past six I go into the bathroom and have a wash, then while the Old Lady's busy in the kitchen helping Chris with the washing up I get my coat and nip out down the stairs.",
      book: "A Kind of Loving ",
      author: "Stan Barstow",
    },
    {
      timeFragment: "6.25",
      quote:
        "I have this moment, while writing, had a wire from Jonathan saying that he leaves by the 6.25 tonight from Launceston and will be here at 10.18, so that I shall have no fear tonight.",
      book: "Dracula",
      author: "Bram Stoker",
    },
  ],
  "18:26": [
    {
      timeFragment: "around half past six",
      quote:
        "It is around half past six in the evening. Dusk is gathering in the living room, an early dusk due to the fog which has rolled in from the Sound and is like a white curtain drawn down outside the windows.",
      book: "Long Day's Journey Into Night ",
      author: "Eugene O'Neill",
    },
  ],
  "18:30": [
    {
      timeFragment: "six-thirty",
      quote:
        "At six-thirty I left the bar and walked outside. It was getting dark and the big Avenida looked cool and graceful. On the other side were homes that once looked out on the beach. Now they looked out on hotels and most of them had retreated behind tall hedges and walls that cut them off from the street.",
      book: "The Rum Diary ",
      author: "Hunter S. Thompson",
    },
    {
      timeFragment: "6.30 p.m.",
      quote: "6.30 p.m. Watch television or a video",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "half-past six",
      quote:
        "As I was turning away, grieved to be parting from him, a thought started up in me and I turned back. 'Shall I take one more message for you?' 'That's good of you' he said, 'but do you want to?' 'Yes, just this once.' It could do no harm, I thought; and I should be far away when the message takes effect, and I wanted to say something to show we were friends. 'Well,' he said, once more across the gap, 'say tomorrow's no good, I'm going to Norwich, but Friday at half-past six, same as usual.'",
      book: "The Go-Between ",
      author: "L.P. Hartley",
    },
    {
      timeFragment: "half past six",
      quote:
        "At five o'clock the two ladies retired to dress, and at half past six Elizabeth was summoned to dinner.",
      book: "Pride and Prejudice",
      author: "Jane Austen",
    },
    {
      timeFragment: "six thirty",
      quote:
        "It is six thirty. Now the dark night and the deafening racket of the crickets again engulf the garden and the veranda, all around the house",
      book: "Jealousy ",
      author: "Alain Robbe-Grillet",
    },
    {
      timeFragment: "half-past six",
      quote:
        "To a casual visitor it might have seemed that Mr Penicuik, who owned the house, had fallen upon evil days; but two of the three gentlemen assembled in the Saloon at half-past six on a wintry evening of late February were in no danger of falling into this error.",
      book: "Cotillion ",
      author: "Georgette Heyer",
    },
  ],
  "18:31": [
    {
      timeFragment: "a little after half past six",
      quote:
        "I had been delayed at a case and it was a little after half past six when I found myself at Baker Street once more",
      book: "The Adventure of The Blue Carbuncle",
      author: "Arthur Conan Doyle",
    },
  ],
  "18:32": [
    {
      timeFragment: "around half past six",
      quote:
        "It is around half past six in the evening. Dusk is gathering in the living room, an early dusk due to the fog which has rolled in from the Sound and is like a white curtain drawn down outside the windows.",
      book: "Long Day's Journey Into Night ",
      author: "Eugene O'Neill",
    },
  ],
  "18:33": [
    {
      timeFragment: "6.33pm",
      quote:
        "Every evening, Michel took the train home, changed at Esbly and usually arrived in Cr\u00e9cy on the 6.33pm train where Annabelle would be waiting at the station.",
      book: "Atomised",
      author: "Michel Houellebecq",
    },
  ],
  "18:34": [
    {
      timeFragment: "around half past six",
      quote:
        "It is around half past six in the evening. Dusk is gathering in the living room, an early dusk due to the fog which has rolled in from the Sound and is like a white curtain drawn down outside the windows.",
      book: "Long Day's Journey Into Night ",
      author: "Eugene O'Neill",
    },
  ],
  "18:35": [
    {
      timeFragment: "6.35 pm",
      quote:
        "And then it was 6.35 pm and I heard Father come home in his van and I moved the bed up against the door so he couldn't get in and he came into the house and he and Mother shouted at each other.",
      book: "The Curious Incident Of The Dog In The Night-Time",
      author: "Mark Haddon",
    },
  ],
  "18:36": [
    {
      timeFragment: "6:36",
      quote:
        "Kaldren pursues me like luminescent shadow. He has chalked up on the gateway '96,688,365,498,702'. Should confuse the mail man. Woke 9:05. To sleep 6:36.",
      book: "The Voices of Time ",
      author: "JG Ballard",
    },
  ],
  "18:40": [
    {
      timeFragment: "twenty to seven",
      quote:
        "Amy: What's that? I thought I saw someone pass the window. What time is it? Charles: Nearly twenty to seven.",
      book: "The Family Reunion ",
      author: "TS Eliot",
    },
    {
      timeFragment: "twenty minutes to seven",
      quote:
        "Having to change 'buses, I allowed plenty of time \u2014 in fact, too much; for we arrived at twenty minutes to seven, and Franching, so the servant said, had only just gone up to dress.",
      book: "Diary of a Nobody",
      author: "George and Weedon Grossmith",
    },
  ],
  "18:41": [
    {
      timeFragment: "six forty-one",
      quote:
        "He made it to Grand Central well in advance. Stillman's train was not due to arrive until six forty-one, but Quinn wanted time to study the geography of the place, to make sure that Stillman would not be able to slip away from him.",
      book: "The New York Trilogy",
      author: "Paul Auster",
    },
  ],
  "18:45": [
    {
      timeFragment: "six forty-five",
      quote:
        "'Let me see now. You had a drink at the Continental at six ten.' 'Yes.' 'And at six forty-five you were talking to another journalist at the door of the Majestic?' 'Yes, Wilkins. I told you all this, Vigot, before. That night.'",
      book: "The Quiet American ",
      author: "Graham Greene",
    },
    {
      timeFragment: "Six forty-five",
      quote:
        '"Six forty-five," called Louie. "Did you hear, Ming," he asked, "did you hear?" "Yes, Taddy, I heard." "What is it?\' asked Tommy. "The new baby, listen, the new baby."',
      book: "The Man Who Loved Children ",
      author: "Christina Stead",
    },
    {
      timeFragment: "quarter to seven",
      quote:
        "It was a quarter to seven when I let myself into the office and clicked the light on and picked a piece of paper off the floor. It was a notice from the Green Feather Messenger Service ...",
      book: "The High Window",
      author: "Raymond Chandler",
    },
  ],
  "18:49": [
    {
      timeFragment: "6:49 p.m.",
      quote:
        "6:49 p.m. Lieutenant-General Tanz escorted by a motorized unit, drove to Corps headquarters",
      book: "The Night of the Generals",
      author: "Hans Hellmut Kirst",
    },
  ],
  "18:50": [
    {
      timeFragment: "ten minutes to seven",
      quote:
        "At ten minutes to seven Dulcie was ready. She looked at herself in the wrinkly mirror. The reflection was satisfactory. The dark blue dress, fitting without a wrinkle, the hat with its jaunty black feather, the but-slightly-soiled gloves--all representing self- denial, even of food itself--were vastly becoming. Dulcie forgot everything else for a moment except that she was beautiful, and that life was about to lift a corner of its mysterious veil for her to observe its wonders. No gentleman had ever asked her out before. Now she was going for a brief moment into the glitter and exalted show.",
      book: "The Four Million ",
      author: "O. Henry",
    },
    {
      timeFragment: "ten minutes before seven",
      quote:
        "It was time to go see the Lady. When we arrived at her house at ten minutes before seven o'clock, Damaronde answered the door.",
      book: "Boy's Life",
      author: "Robert R. McCammon",
    },
    {
      timeFragment: "ten minutes before seven",
      quote:
        "It was time to go see the Lady. When we arrived at her house at ten minutes before seven o'clock, Damaronde answered the door.",
      book: "Boy's Life ",
      author: "Robert R. McCammon",
    },
  ],
  "18:51": [
    {
      timeFragment: "6:51",
      quote:
        "The square of light in the kitchen doorway had faded to thin purple; his watch said 6:51.",
      book: "Salem's Lot",
      author: "Stephen King",
    },
  ],
  "18:53": [
    {
      timeFragment: "near on seven o'clock",
      quote:
        "It was near on seven o'clock when I got to Mr. and Mrs. Fleming's house on 6th Street, where I was renting a room. It was late September, and though there was some sun left, I didn't want to visit a dead man's place with night coming on.",
      book: "All Aunt Hagar's Children",
      author: "Edward P Jones",
    },
  ],
  "18:55": [
    {
      timeFragment: "five to seven",
      quote:
        "\"... You had no reason to think the times important. Indeed how suspicious it would be if you had been completely accurate. ''Haven't I been?'' Not quite. It was five to seven that you talked to Wilkins. ''Another ten minutes.\"",
      book: "The Quiet American",
      author: "Graham Greene",
    },
    {
      timeFragment: "6:55",
      quote:
        "The play was set to begin at seven o'clock and finish before sunset. It was 6:55. Beyond the flats we could hear the hockey field filling up. the low rumble got steadily louder - voices, footsteps, the creaking of bleachers, the slamming of car doors in the parking lot.",
      book: "Middlesex ",
      author: "Jeffrey Eugenides",
    },
  ],
  "18:56": [
    {
      timeFragment: "6.56",
      quote:
        "Then it was 6.56. A black Rover - a Rover 90, registration PYX 520 - turned into the street that ran down the left-hand side of The Bunker. It parked. The door on the driver's side opened. A man got out.",
      book: "Dreams of leaving",
      author: "Rupert Thomson",
    },
  ],
  "18:57": [
    {
      timeFragment: "a few minutes before seven",
      quote:
        '"I feel a little awkward," Kay Randall said on the phone, "asking a man to do these errands ... but that\'s my problem, not yours. Just bring the supplies and try to be at the church meeting room a few minutes before seven."',
      book: "Bridging",
      author: "Max Apple",
    },
    {
      timeFragment: "three minutes to the hour; which was seven",
      quote:
        "Folded in this triple melody, the audience sat gazing; and beheld gently and approvingly without interrogation, for it seemed inevitable, a box tree in a green tub take the place of the ladies' dressing-room; while on what seemed to be a wall, was hung a great clock face; the hands pointing to three minutes to the hour; which was seven.'",
      book: "Between the Acts ",
      author: "Virginia Woolf",
    },
  ],
  "18:58": [
    {
      timeFragment: "two minutes to seven",
      quote:
        '"Walk fast," says Perry, "it\'s two minutes to seven, and I got to be home by\u2014\' "Oh, shut up," says I. "I had an appointment as chief performer at an inquest at seven, and I\'m not kicking about not keeping it."',
      book: "Roads of Destiny",
      author: "O. Henry",
    },
  ],
  "18:59": [
    {
      timeFragment: "About seven o'clock",
      quote:
        "About seven o'clock in the evening she had died, and her frantic husband had made a frightful scene in his efforts to kill West, whom he wildly blamed for not saving her life. Friends had held him when he drew a stiletto, but West departed amidst his inhuman shrieks, curses, and oaths of vengeance.",
      book: "Herbert West - Reanimator ",
      author: "H. P. Lovecraft",
    },
  ],
  "19:00": [
    {
      timeFragment: "seven o'clock",
      quote:
        "\u2026 in a word, seen always at the same evening hour, isolated from all its possible surroundings, detached and solitary against its shadowy background, the bare minimum of scenery necessary .. to the drama of my undressing, as though all Combray had consisted of but two floors joined by a slender staircase, and as though there had been no time there but seven o'clock at night.",
      book: "In Search of Lost Time: Swann's Way ",
      author: "Marcel Proust",
    },
    {
      timeFragment: "seven",
      quote:
        "The town clock struck seven. The echoes of the great chime wandered in the unlit halls of the library. An autumn leaf, very crisp, fell somewhere in the dark. But it was only the page of a book, turning.",
      book: "Something Wicked This Way Comes ",
      author: "Ray Bradbury",
    },
    {
      timeFragment: "7.00 p.m.",
      quote: "7.00 p.m. Do maths practice",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "seven o'clock",
      quote:
        "By seven o'clock the orchestra has arrived--no thin five-piece affair but a whole pitful of oboes and trombones and saxophones and viols and cornets and piccolos and low and high drums.",
      book: "The Great Gatsby ",
      author: "F. Scott Fitzgerald",
    },
    {
      timeFragment: "seven ",
      quote:
        "Edward had been allowed to see me only from seven till nine-thirty pm, always inside the confines of my home and under the supervision of my dad's unfailingly crabby glare.",
      book: "New Moon ",
      author: "Stephenie Meyer",
    },
    {
      timeFragment: "seven o'clock",
      quote:
        "It was seven o'clock and by this time she was not very far from Raveloe, but she was not familiar enough with those monotonous lanes to know how near she was to her journey's end. She needed comfort, and she knew but one comforter - the familiar demon in her bosom; but she hesitated a moment, after drawing out the black remnant, before she raised it to her lips.",
      book: "Silas Marner ",
      author: "George Eliot",
    },
    {
      timeFragment: "seven o'clock",
      quote:
        "It was seven o'clock when we got into the coup\u00e9 with him and started for Long Island. [...] So we drove on toward death through the cooling twilight.",
      book: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    },
  ],
  "19:01": [
    {
      timeFragment: "around seven",
      quote:
        "He waited until nearly eight, because around seven there were always more people coming in and out of the house than at other times.",
      book: "The Talented Mr Ripley ",
      author: "Patricia Highsmith",
    },
  ],
  "19:02": [
    {
      timeFragment: "about seven o'clock",
      quote:
        "Twas about seven o'clock at night, And the wind it blew with all its might, And the rain came pouring down, And the dark clouds seem'd to frown,",
      book: "The Tay Bridge Disaster ",
      author: "William McGonagall",
    },
  ],
  "19:08": [
    {
      timeFragment: "eight minutes past seven",
      quote:
        "It was eight minutes past seven and still no girl. I waited impatiently. I watched another crowd surge through the barriers and move quickly down the steps. My eyes were alert for the faintest recognition.",
      book: "The Girl from East Berlin",
      author: "James Furner",
    },
  ],
  "19:10": [
    {
      timeFragment: "in five minutes it would be a quarter past seven",
      quote:
        'He had already got to the point where, by rocking more strongly, he maintained his equilibrium with difficulty, and very soon he would finally have to make a final decision, for in five minutes it would be a quarter past seven. Then there was a ring at the door of the apartment. "That\'s someone from the office," he told himself, and he almost froze, while his small limbs only danced around all the faster. For one moment everything remained still. "They aren\'t opening," Gregor said to himself, caught up in some absurd hope.',
      book: "Metamorphosis ",
      author: "Franz Kafka",
    },
    {
      timeFragment: "seven-ten",
      quote:
        "The party was to begin at seven. The invitations gave the hour as six-thirty because the family knew everyone would come a little late, so as not to be the first to arrive. At seven-ten not a soul had come; somewhat acrimoniously, the family discussed the advantages and disadvantages of tardiness",
      book: "The Elderly Lady",
      author: "Jorge Luis Borges",
    },
  ],
  "19:11": [
    {
      timeFragment: "19:11",
      quote:
        "Good, you said. Run, or you won't get a seat. See you soon. Your voice was reassuring. 19:11:00, the clock said. I put the phone back on its hook and I ran. The seat I got, almost the last one in the carriage, was opposite a girl who started coughing as soon as there weren't any other free seats I could move to. She looked pale and the cough rattled deep in her chest as she punched numbers into her mobile. Hi, she said (cough). I'm on the train. No, I've got a cold. A cold (cough). Yeah, really bad. Yeah, awful actually. Hello? (cough) Hello?",
      book: "The Whole Story and Other Stories ",
      author: "Ali Smith",
    },
  ],
  "19:12": [
    {
      timeFragment: "7:12",
      quote:
        '"He taught me that if I had to meet someone for an appointment, I must refuse to follow the \'stupid human habit\' of arbitrarily choosing a time based on fifteen-minute intervals. "Never meet people at 7:45 or 6:30, Jasper, but pick times like 7:12 and 8:03!"',
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "19:14": [
    {
      timeFragment: "7:14",
      quote:
        "If he'd lived in New York and worked in an office, he might have thrived as the typical, over-martini'd, cheating husband, leaving every night on the 7:14 to White Plains, a smudge of lipstick high on his neck, and a tide of lies to see him through to the next day.",
      book: "The Life and Opinions of Maf the Dog, and of his friend Marilyn Monroe",
      author: "Andrew O'Hagan",
    },
  ],
  "19:15": [
    {
      timeFragment: "7:15",
      quote:
        "Cell count down to 400,000. Woke 8:10. To sleep 7:15. (Appear to have lost my watch without realising it, had to drive into town to buy another.)",
      book: "The Voices of Time ",
      author: "JG Ballard",
    },
    {
      timeFragment: "seven fifteen",
      quote:
        "Nick had a large wild plan of his own for the night, but for now he let Leo take charge: they were going to go back to Notting Hill and catch the seven fifteen screening of Scarface at the Gate.",
      book: "The Line of Beauty",
      author: "Alan Hollinghurst",
    },
    {
      timeFragment: "seven-fifteen",
      quote:
        "The party was to begin at seven. The invitations gave the hour as six-thirty because the famly knew everyone would come a little late, so as not to be the first to arrive. .. By seven-fifteen not another soul could squeeze into the house.",
      book: "The elderly lady ",
      author: "Jorge Luis Borges",
    },
  ],
  "19:16": [
    {
      timeFragment: "Sixteen past seven PM",
      quote:
        '"Sixteen past seven PM? That\'s when he came into the store or when he left after the fact?"',
      book: "The Last Precinct ",
      author: "Patricia Cornwell",
    },
  ],
  "19:17": [
    {
      timeFragment: "7.17 p.m.",
      quote:
        "Colonel Putnis knocked on his door at 7.17 p.m. The car was waiting in front of the hotel, and they drove through the dark streets to police headquarters. It had grown much colder during the evening, and the city was almost deserted.",
      book: "The Dogs of Riga",
      author: "Henning Mankell",
    },
  ],
  "19:19": [
    {
      timeFragment: "seven-nineteen",
      quote:
        "And it was me who spent about three hours this afternoon arguing one single contract. The term was best endeavors. The other side wanted to use reasonable efforts. In the end we won the point- but I can't feel my usual triumph. All I know is, it's seven-nineteen, and in eleven minutes I'm supposed to be halfway across town, sitting down to dinner at Maxim's with my mother and brother Daniel. I'll have to cancel. My own birthday dinner.",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
  ],
  "19:20": [
    {
      timeFragment: "seven-twenty",
      quote:
        "The clock read seven-twenty, but I felt no hunger. You'd think I might have wanted to eat something after the day I'd had, but I cringed at the very thought of food. I was short of sleep, my gut was slashed, and my apartment was gutted. There was no room for appetite.",
      book: "Hard Boiled Wonderland and the End of the World ",
      author: "Haruki Murakami",
    },
    {
      timeFragment: "7:20",
      quote:
        "The pause, we finally concluded, was to allow the other important people to catch up, those who had arrived at 7:10 waiting for those who had arrived at 7:20.",
      book: "Parkinson's Law or the Pursuit of Progress",
      author: "C Northcote Parkinson",
    },
  ],
  "19:21": [
    {
      timeFragment: "7:21",
      quote:
        "Gripping her gym bag in her right hand, Aomame, like Buzzcut, was waiting for something to happen. The clock display changed to 7:21, then 7:22, then 7:23.",
      book: "1Q84",
      author: "Haruki Murakami",
    },
  ],
  "19:22": [
    {
      timeFragment: "7:22",
      quote:
        "Gripping her gym bag in her right hand, Aomame, like Buzzcut, was waiting for something to happen. The clock display changed to 7:21, then 7:22, then 7:23.",
      book: "1Q84",
      author: "Haruki Murakami",
    },
  ],
  "19:23": [
    {
      timeFragment: "7:23",
      quote:
        "Gripping her gym bag in her right hand, Aomame, like Buzzcut, was waiting for something to happen. The clock display changed to 7:21, then 7:22, then 7:23.",
      book: "1Q84",
      author: "Haruki Murakami",
    },
  ],
  "19:24": [
    {
      timeFragment: "almost twenty-five after seven",
      quote:
        "He picked up his hat and coat and Clarice said hello to him and he said hello and looked at the clock and it was almost twenty-five after seven.",
      book: "The Evening's at Seven",
      author: "James Thurber",
    },
  ],
  "19:25": [
    {
      timeFragment: "twenty-five after seven",
      quote:
        "He picked up his hat and coat and Clarice said hello to him and he said hello and looked at the clock and it was almost twenty-five after seven.",
      book: "The Evening's at Seven",
      author: "James Thurber",
    },
  ],
  "19:30": [
    {
      timeFragment: "half-past seven",
      quote:
        "But now he was close - here was the house, here were the gates. Somewhere a clock beat a single chime. 'What, is it really half-past seven? That's impossible, it must be fast!'",
      book: "Crime and Punishment ",
      author: "Fyodor Dostoyevsky",
    },
    {
      timeFragment: "7:30",
      quote:
        "On July 25th, 8:30 a.m. the bitch Novaya dies whelping. At 10 o'clock she is lowered into her cool grave, at 7:30 that same evening we see our first floes and greet them wishing they were the last.",
      book: "The Terrors of Ice and Darkness ",
      author: "Christoph Ransmayr",
    },
    {
      timeFragment: "half-past seven",
      quote:
        "The clock showed half-past seven. This was the twilight time. He would be there now. I pictured him in his old navy-blue sweater and peaked cap, walking soft-footed up the track towards the wood. He told me he wore the sweater because navy-blue barely showed up in the dark, black was even better, he said. The peaked cap was important too, he explained, because the peak casts a shadow over one's face.",
      book: "Danny, the Champion of the World ",
      author: "Roald Dahl",
    },
    {
      timeFragment: "7.30",
      quote:
        "The telephone call came at 7.30 on the evening of March 18th, a Saturday, the eve of the noisy, colourful festival that the town held in honour of Saint Joseph the carpenter -",
      book: "A Simple Story ",
      author: "Leonardo Sciascia",
    },
  ],
  "19:35": [
    {
      timeFragment: "7.35",
      quote: "7.35-40. Yseut arrives at 'M. and S.', puts through phone call.",
      book: "The Case of the Gilded Fly",
      author: "Edmund Crispin",
    },
  ],
  "19:40": [
    {
      timeFragment: "7.40",
      quote:
        "She arrives at 7.40, ten minutes late, but the children, Jimmy and Bitsy, are still eating supper and their parents are not ready to go yet. From other rooms come the sound of a baby screaming, water running, a television musical (no words: probably a dance number - patterns of gliding figures come to mind).",
      book: "The Babysitter",
      author: "Robert Coover",
    },
  ],
  "19:42": [
    {
      timeFragment: "Seven forty-two",
      quote:
        "I glance at my watch as we speed along the Strand. Seven forty-two. I'm starting to feel quite excited. The street outside is still bright and warm and tourists are walking along in T-shirts and shorts, pointing at the High Court. It must have been a gorgeous summer's day. Inside the air-conditioned Carter Spink building you have no idea what the weather in the real world is doing.",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
  ],
  "19:45": [
    {
      timeFragment: "7:45",
      quote:
        '"He taught me that if I had to meet someone for an appointment, I must refuse to follow the \'stupid human habit\' of arbitrarily choosing a time based on fifteen-minute intervals. "Never meet people at 7:45 or 6:30, Jasper, but pick times like 7:12 and 8:03!"',
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
    {
      timeFragment: "19.45",
      quote:
        "\"He tells his old friend the train times and they settle on the 19.45 arriving at 23.27. 'I'll book us into the ultra-luxurious Francis Drake Lodge. Running water in several rooms. Have you got a mobile?\"",
      book: "Other People's Money",
      author: "Justin Cartwright",
    },
  ],
  "19:49": [
    {
      timeFragment: "eleven minutes to eight",
      quote:
        '"There\'s a big, old-fashioned clock in the surgery. Just as Dr. Wellesley went out I heard the Moot Hall clock chime half-past seven, and then the chimes of St. Hathelswide\'s Church. I noticed that our clock was a couple of minutes slow, and I put it right." When did you next see Dr. Wellesley?" "At just eleven minutes to eight." "Where?" "In the surgery." "He came back there?" "Yes." "How do you fix that precise time--eleven minutes to eight?" "Because he\'d arranged to see a patient in Meadow Gate at ten minutes to eight. I glanced at the clock as he came in, saw what time it was, and reminded him of the appointment."',
      book: "In the Mayor's Parlour ",
      author: "J. S. Fletcher",
    },
  ],
  "19:50": [
    {
      timeFragment: "ten to eight",
      quote:
        "At ten to eight, he strolled downstairs, to make sure that Signora Buffi was not pottering around in the hall and that her door was not open, and to make sure there really was no one in Freddie's car",
      book: "The Talented Mr Ripley",
      author: "Patricia Highsmith",
    },
  ],
  "19:52": [
    {
      timeFragment: "nearly eight",
      quote:
        "He waited until nearly eight, because around seven there were always more people coming in and out of the house than at other times. At ten to eight, he strolled downstairs, to make sure that Signora Buffi was not pottering around in the hall and that her door was not open, and to make sure there really was no one in Freddie's car, though he had gone down in the middle of the afternoon to look at the car and see if it was Freddie's.",
      book: "The Talented Mr Ripley ",
      author: "Patricia Highsmith",
    },
  ],
  "19:53": [
    {
      timeFragment: "7.53 p.m.",
      quote:
        '"Wednesday, 11 th December 1963. 7.53 p.m. "Help me. You\'ve got to help me." The woman\'s voice quavered on the edge of tears. The duty constable who had picked up the phone heard a hiccuping gulp, as if the caller was struggling to speak."',
      book: "A Place of Execution",
      author: "Val McDermid",
    },
  ],
  "19:54": [
    {
      timeFragment: "six minutes to eight",
      quote:
        "The body was found at six minutes to eight. Doctor Young arrived some thirty minutes later. Just let me get that clear - I've a filthy memory.",
      book: "A Man Lay Dead",
      author: "Ngaio Marsh",
    },
  ],
  "19:55": [
    {
      timeFragment: "five to eight",
      quote:
        "Flora drew her coat round her, and looked up into the darkening vault of the sky. Then she glanced at her watch. It was five to eight.",
      book: "Cold Comfort Farm",
      author: "Stella Gibbons",
    },
  ],
  "19:56": [
    {
      timeFragment: "four minutes to eight",
      quote:
        "I remember the cigarette in his hard face, against the now limitless storm cloud. Bernardo cried to him unexpectedly: 'What time is it, Ireno?' Without consulting the sky, without stopping, he replied: 'It's four minutes to eight, young Bernardo Juan Franciso.' His voice was shrill, mocking.",
      book: "Funes the Memorious-Labyrinths ",
      author: "Jorge Luis Borges",
    },
  ],
  "19:57": [
    {
      timeFragment: "three minutes till eight",
      quote:
        '"At three minutes till eight, Laszlo and His Yankee Hussars set up onstage. While the band played their Sousa medley, Carter thoroughly checked his kit, stuffing his pockets with scarves, examining the seals on decks of cards. He glanced toward his levitation device. "Good luck, Carter." The voice was quiet."',
      book: "Carter Beats The Devil",
      author: "Glen David Gold",
    },
  ],
  "19:58": [
    {
      timeFragment: "7.58pm.",
      quote:
        "Robert Langdon stole an anxious glance at his wristwatch: 7.58pm. The smiling face of Mickey Mouse did little to cheer him up.",
      book: "The Lost Symbol",
      author: "Dan Brown",
    },
  ],
  "19:59": [
    {
      timeFragment: "just before eight o' clock",
      quote:
        '"Kuniang made her appearance in my study just before eight o\' clock, arrayed in what had once ben a "party frock"."',
      book: "The Maker of Heavenly Trousers ",
      author: "Daniel Vare",
    },
    {
      timeFragment: "A minute to eight.",
      quote:
        "Quickly, quickly. A minute to eight. My hot water bottle was ready, and I filled a glass with water from the tap. Time was of the essence.",
      book: "The Thirteenth Tale",
      author: "Diane Setterfield",
    },
  ],
  "20:00": [
    {
      timeFragment: "eight o'clock",
      quote:
        "'TIS eight o'clock,--a clear March night, The moon is up,--the sky is blue, The owlet, in the moonlight air, Shouts from nobody knows where; He lengthens out his lonely shout, Halloo! halloo! a long halloo!",
      book: "The Idiot Boy ",
      author: "William Wordsworth",
    },
    {
      timeFragment: "at eight",
      quote:
        '"I trace the words, I\'ll arrive to collect you for drinks at eight on Saturday."',
      book: "Tell-All ",
      author: "Chuck Palahniuk",
    },
    {
      timeFragment: "8.00 p.m.",
      quote: "8.00 p.m. Have a bath",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "eight o'clock",
      quote:
        "Arthur thought he could even bear to listen to the album of bagpipe music he had won. It was eight o'clock and he decided he would make himself, force himself, to listen to the whole record before he phoned her.",
      book: "So Long, and Thanks for All the Fish",
      author: "Douglas Adams",
    },
    {
      timeFragment: "eight o'clock",
      quote:
        "At eight o'clock that evening, a Saturday, Pamela Chamcha stood with Jumpy Joshi - who had refused to let her go unaccompanied - next to the Photo-Me machine in a corner of the main concourse of Euston station, feeling ridiculously conspiratorial.",
      book: "Satanic Verses ",
      author: "Salman Rushdie",
    },
    {
      timeFragment: "eight",
      quote:
        "Freud had me knock on Jung's door, to no avail. They waited until eight, then set off for Brill's without him.",
      book: "The Interpretation Of Murder ",
      author: "Jed Rubenfeld",
    },
    {
      timeFragment: "eight o'clock",
      quote:
        "I have been drunk just twice in my life, and the second time was that afternoon; so everything that happened has a dim, hazy cast over it. although until after eight o'clock the apartment was full of cheerful sun.",
      book: "The Great Gatsby ",
      author: "F. Scott Fitzgerald",
    },
    {
      timeFragment: "eight o'clock",
      quote:
        "It's the twenty-third of June nineteen seventy-five, and it is eight o'clock in the evening, seated at his jigsaw puzzle, Bartlebooth has just died.",
      book: "Life: A User's Manual ",
      author: "Georges Perec",
    },
    {
      timeFragment: "eight o'clock",
      quote: "She looked at her watch- it was eight o'clock",
      book: "The Beautiful and Damned ",
      author: "F. Scott Fitzgerald",
    },
    {
      timeFragment: "at eight",
      quote:
        "That day he forgot to go to dinner; he noticed the fact at eight in the evening, and as it was too late to go to the Rue St Jaques, he ate a lump of bread.",
      book: "Les Miserables ",
      author: "Victor Hugo",
    },
    {
      timeFragment: "eight",
      quote:
        "The clock struck eight. Had it been ten, Elinor would have been convinced that at that moment she heard a carriage driving up to the house; and so strong was the persuasion that she did, in spite of the almost impossibility of their being already come, that she moved into the adjoining dressing-closet and opened a window-shutter, to be satisfied of the truth. She instantly saw that her ears had not deceived her.",
      book: "Sense and Sensibility ",
      author: "Jane Austen",
    },
  ],
  "20:01": [
    {
      timeFragment: "a little after eight o'clock",
      quote:
        "It was only a little after eight o'clock, so all the shows were about silliness or murder.",
      book: "Slaughterhouse 5",
      author: "Kurt Vonnegut",
    },
  ],
  "20:02": [
    {
      timeFragment: "two minutes past eight",
      quote:
        '"Yes, I must go to the railway station, and if he\'s not there, then go there and catch him." Anna looked at the railway timetable in the newspapers. An evening train went at two minutes past eight. "Yes, I shall be in time."',
      book: "Anna Karenina",
      author: "Leo Tolstoy",
    },
  ],
  "20:03": [
    {
      timeFragment: "8:03",
      quote:
        "He taught me that if I had to meet someone for an appointment, I must refuse to follow the 'stupid human habit' of arbitrarily choosing a time based on fifteen-minute intervals. 'Never meet people at 7:45 or 6:30, Jasper, but pick times like 7:12 and 8:03!'",
      book: "A Fraction of the Whole",
      author: "Steve Toltz",
    },
  ],
  "20:04": [
    {
      timeFragment: "8.04",
      quote:
        "The earth seems to cast its darkness upward into the air. The farm country is somber at night. He is grateful when the lights of Lankaster merge with his dim beams. He stops at a diner who's clock says 8.04.",
      book: "Rabbit, Run",
      author: "John Updike",
    },
  ],
  "20:05": [
    {
      timeFragment: "8.05 pm",
      quote:
        "December 23rd At 8.05 pm Prof. Preobrazhensky commenced the first operation of its kind to be performed in Europe: removal under anaesthesia of a dog's testicles and their replacement by implanted human testes, with appendages and seminal ducts, taken from a 28-year-old human male",
      book: "The Heart of a Dog",
      author: "Mikhail Bulgakov",
    },
    {
      timeFragment: "five minutes past eight",
      quote:
        "Ransom took out his watch, which he had adapted, on purpose, several hours before, to Boston time, and saw that the minutes had sped with increasing velocity during this interview, and that it now marked five minutes past eight.",
      book: "The Bostonians ",
      author: "Henry James",
    },
  ],
  "20:06": [
    {
      timeFragment: "after eight o'clock",
      quote:
        "I have been drunk just twice in my life, and the second time was that afternoon; so everything that happened has a dim, hazy cast over it, although until after eight o'clock the apartment was full of cheerful sun.",
      book: "The Great Gatsby ",
      author: "F. Scott Fitzgerald",
    },
  ],
  "20:07": [
    {
      timeFragment: "8:07 pm",
      quote:
        "And I could hear that there were fewer people in the little station when the train wasn't there, so I opened my eyes and I looked at my watch and it said 8:07 pm and I had been sitting on the bench for approximately 5 hours but it hadn't seemed like approximately 5 hours, except that my bottom hurt and I was hungry and thirsty.",
      book: "The Curious Incident of the Dog in the Night-Time",
      author: "Mark Haddon",
    },
    {
      timeFragment: "8:07",
      quote:
        "Bennie pulled the transcripts for that night. The first call had come in at 8:07, with a positive ID.",
      book: "Mistaken Identity ",
      author: "Lisa Scottoline",
    },
  ],
  "20:10": [
    {
      timeFragment: "2010h.",
      quote:
        "At 2010h. on 1 April Y.D.A.U., the medical attache is still watching the unlabelled entertainment cartridge.",
      book: "Infinite Jest",
      author: "David Foster Wallace",
    },
  ],
  "20:14": [
    {
      timeFragment: "fourteen minutes past eight",
      quote:
        "When a call came through to Dilworth's home number at fourteen minutes past eight o'clock, Olbier and Jones reacted with far more excitement than the situation warranted because they were desperate for action.",
      book: "Watchers ",
      author: "Dean Koontz",
    },
  ],
  "20:15": [
    {
      timeFragment: "8:15 p.m.",
      quote: "8:15 p.m. Cannot locate operating instructions (for video)",
      book: "Bridget Jones's Diary",
      author: "Helen Fielding",
    },
    {
      timeFragment: "8.15 p.m.",
      quote: "8.15 p.m. Get changed into pyjamas",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "quarter past eight",
      quote:
        "\"Natsha: I was looking to see if there wasn't a fire. It's Shrovetide, and the servant is simply beside herself; I must look out that something doesn't happen. When I came through the dining-room yesterday midnight, there was a candle burning. I couldn't get her to tell me who had lighted it. [Puts down her candle] What's the time? Andrey: [Looks at his watch] A quarter past eight. Natasha: And Olga and Irina aren't in yet. The poor things are still at work. Olga at the teachers' council, Irina at the telegraph office...[sighs] I said to your sister this morning, \"Irina, darling, you must take care of yourself.\" But she pays no attention. Did you say it was a quarter past eight?\"",
      book: "The Three Sisters ",
      author: "Anton Chekhov",
    },
  ],
  "20:16": [
    {
      timeFragment: "sixteen minutes past eight",
      quote:
        "He kissed her hand and after a while went to get two more drinks. When he got back, it was sixteen minutes past eight, and Lois was humming softly along with the jukebox",
      book: "The Rotters' Club",
      author: "Jonathan Coe",
    },
  ],
  "20:17": [
    {
      timeFragment: "20.17",
      quote:
        "20.17 A red warning light failed to go on in the Drive Room, beginning a chain of events which would lead, in a further twenty-three minutes, to the total annihilation of the entire crew of Red Dwarf.",
      book: "Red Dwarf",
      author: "Grant Naylor",
    },
  ],
  "20:18": [
    {
      timeFragment: "2018 hrs",
      quote:
        "2018 hrs Katya has arrived at the Odessa Hotel. Barley and Katya are talking in the canteen. Wicklow and one irregular observing. More.",
      book: "The Russia House",
      author: "John le Carre",
    },
  ],
  "20:20": [
    {
      timeFragment: "8.20 p.m.",
      quote: "8.20 p.m. Play computer games",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "20.20",
      quote:
        "At 20.20 all ships had completed oiling. Hove to, they had had the utmost difficulty in keeping position in that great wind; but they were infinitely safer than in the open sea",
      book: "H.M.S. Ulysses ",
      author: "Alistair MacLean",
    },
    {
      timeFragment: "twenty minutes past eight",
      quote:
        "Knowing that the dinner was only for us six, we never dreamed it would be a full dress affair. I had no appetite. It was quite twenty minutes past eight before we sat down to dinner.",
      book: "Diary of a Nobody",
      author: "George and Weedon Grossmith",
    },
  ],
  "20:21": [
    {
      timeFragment: "8.21",
      quote:
        '"At 8.21, after a knock at the door, a constable said a military police vehicle had just driven into the courtyard, the driver asking for "Mr." Murray."',
      book: "The Ipcress File",
      author: "Len Deighton",
    },
  ],
  "20:23": [
    {
      timeFragment: "20.23.",
      quote:
        "20.23. In a few minutes she would go down.She could have borrowed some mascara from her daughter Sally, but it was too late. She could have rung her mother in Northam, but it was too late. Seven minutes of solitude she had, and then she would descend.",
      book: "The Radiant Way",
      author: "Margaret Drabble",
    },
  ],
  "20:24": [
    {
      timeFragment: "8.24.",
      quote:
        "Peach checked his watch. 8.24. If he wasn't in a taxi in twenty minutes he'd be done for.",
      book: "Dreams of Leaving ",
      author: "Rupert Thomson",
    },
  ],
  "20:25": [
    {
      timeFragment: "five and twenty past eight",
      quote:
        "She sat down in her usual seat and smiled at her husband as he sank into his own chair opposite her. She was saved. It was only five and twenty past eight.",
      book: "The Listerdale Mystery",
      author: "Agatha Christie",
    },
  ],
  "20:27": [
    {
      timeFragment: "seven-and-twenty minutes past eight",
      quote:
        "At seven-and-twenty minutes past eight Mrs Lofthouse was seated at Aurora's piano, in the first agonies of a prelude in six flats; a prelude which demanded such extraordinary uses of the left hand across the right, and the right over the left, and such exercise of the thumbs in all positions",
      book: "Aurora Floyd",
      author: "Mary Elizabeth Braddon",
    },
  ],
  "20:29": [
    {
      timeFragment: "Twenty-nine and a half minutes past eight",
      quote:
        '"Twenty-nine and a half minutes past eight, sir." And then, from habit, he glanced at the clock in the tower, and made further oration. "By George! that clock\'s half an hour fast! First time in ten years I\'ve known it to be off. This watch of mine never varies a--" But the citizen was talking to vacancy. He turned and saw his hearer, a fast receding black shadow, flying in the direction of a house with three lighted upper windows."',
      book: "The Four Million ",
      author: "O. Henry",
    },
  ],
  "20:30": [
    {
      timeFragment: "Half-past eight",
      quote:
        '"Alix took up a piece of needlework and began to stitch. Gerald read a few pages of his book. Then he glanced up at the clock and tossed the book away. "Half-past eight. Time to go down to the cellar and start work."',
      book: "The Listerdale Mystery",
      author: "Agatha Christie",
    },
    {
      timeFragment: "Half-past eight",
      quote:
        "The bicycles go by in twos and threes - there's a dance on in Billy Brennan's barn tonight, and there's the half-talk code of mysteries and the wink-and-elbow language of delight. Half-past eight and there is not a spot upon a mile of road, no shadow thrown that might turn out a man or woman,",
      book: "Inniskeen Road: July Evening ",
      author: "Patrick Kavanagh",
    },
  ],
  "20:32": [
    {
      timeFragment: "eight thirty-two",
      quote:
        '"At the station he captured Miss Lantry out of the gadding mob at eight thirty-two. "We mustn\'t keep mamma and the others waiting," said she. "To Wallack\'s Theatre as fast as you can drive!"',
      book: "The Four Million ",
      author: "O. Henry",
    },
  ],
  "20:33": [
    {
      timeFragment: "20.33",
      quote:
        "20.33 Navigation officer Henri DuBois knocked his black cona coffee with four sugars over his computer console keyboard. As he mopped up the coffee, he noticed three red warning blips on his monitor screen, which he wrongly assumed were the result of his spillage.",
      book: "Red Dwarf",
      author: "Grant Naylor",
    },
  ],
  "20:35": [
    {
      timeFragment: "8:35pm.",
      quote: "8:35pm. Found operating instructions under Hello.",
      book: "Bridget Jones's Diary ",
      author: "Helen Fielding",
    },
    {
      timeFragment: "8.35 p.m.",
      quote:
        "Left Munich at 8.35 p.m. on 1st May, arriving at Vienna early the next morning",
      book: "Dracula",
      author: "Bram Stoker",
    },
    {
      timeFragment: "five and twenty to nine",
      quote:
        "She paused reflectively. He was keenly interested now, not a doubt of it. The murderer is bound to have an interest in murder. She had gambled on that, and succeeded. She stole a glance at the clock. It was five and twenty to nine.",
      book: "The Listerdale mystery ",
      author: "Agatha Christie",
    },
  ],
  "20:36": [
    {
      timeFragment: "20.36",
      quote:
        "20.36 Rimmer stood in the main wash-room on the stasis deck and combed his hair.",
      book: "Red Dwarf",
      author: "Grant Naylor",
    },
  ],
  "20:40": [
    {
      timeFragment: "twenty minutes to nine",
      quote:
        "It was when I stood before her, avoiding her eyes, that I took note of the surrounding objects in detail, and saw that her watch had stopped at twenty minutes to nine, and that a clock in the room had stopped at twenty minutes to nine.",
      book: "Great Expectations",
      author: "Charles Dickens",
    },
    {
      timeFragment: "twenty minutes to nine",
      quote: "The letter had been brought in at twenty minutes to nine.",
      book: "The Murder of Roger Ackroyd ",
      author: "Agatha Christie",
    },
  ],
  "20:42": [
    {
      timeFragment: "8.42",
      quote:
        "The hand at this moment pointed to 8.42. The players took up their cards, but their eyes were constantly on the clock. One may safely say that, however secure they might feel, never had minutes seemed so long to them.",
      book: "Around the World in Eighty Days",
      author: "Jules Verne",
    },
  ],
  "20:43": [
    {
      timeFragment: "8.43",
      quote:
        "'8.43,' said Thomas Flanagan, as he cut the cards placed before him by Gauthier Ralph. There was a moment's pause, during which the spacious room was perfectly silent.",
      book: "Around the world in eighty days ",
      author: "Jules Verne",
    },
  ],
  "20:44": [
    {
      timeFragment: "8.44!",
      quote:
        '"The clock\'s pendulum beat every second with mathematical regularity, and each player could count every sixtieth of a minute as it struck his ear."8.44!" said John Sullivan, in a voice that betrayed his emotion.Only one minute more and the wager would be won."',
      book: "Around the World in Eighty Days",
      author: "Jules Verne",
    },
  ],
  "20:45": [
    {
      timeFragment: "8.45",
      quote:
        "'It's not impossible,' Phileas said quietly.'I bet you 20,000 pounds I could do it. If I leave this evening on the 8.45 train to Dover, I can be back here at the Reform Club by 8.45 on Saturday 21 December. I'll get my passport stamped at every place i stop to prove I've been around the world.'",
      book: "Around the World in Eighty Days ",
      author: "Jules Verne",
    },
    {
      timeFragment: "quarter to nine",
      quote:
        "Beaver arrived at quarter to nine in a state of high self-approval; he had refused two invitations for dinner while dressing that evening; he had cashed a cheque for ten pounds at his club; he had booked a Divan table at Espinosa's.",
      book: "A Handful of Dust",
      author: "Evelyn Waugh",
    },
  ],
  "20:46": [
    {
      timeFragment: "eight forty six",
      quote:
        "At the tone, the time will be eight forty six, exactly. One cubic mile of seawater contains about 50 pounds of gold.",
      book: "Macedonia",
      author: "Tom Lichtenberg",
    },
  ],
  "20:49": [
    {
      timeFragment: "8.49",
      quote:
        "8.49. I took the phone, cleared my throat, and dialled the keep, the packs stronghold on the outskirts of Atlanta. Just keep it professional. Less pathetic that way.",
      book: "Magic Bleeds",
      author: "Ilona Andrews",
    },
  ],
  "20:50": [
    {
      timeFragment: "8.50pm.",
      quote:
        '"8.50pm. Ah Diagram "Buttons for IMC functions". But what are IMC functions?"',
      book: "Bridget Jones's Diary ",
      author: "Helen Fielding",
    },
    {
      timeFragment: "ten minutes before nine",
      quote: "all the clocks in London were striking ten minutes before nine.",
      book: "Around the world in eighty days ",
      author: "Jules Verne",
    },
    {
      timeFragment: "ten minutes to nine",
      quote:
        "He glanced at the bracket-clock on the mantelpiece, but as this had stopped, drew out his watch. 'It is already too late,' he said. 'It wants only ten minutes to nine.' 'Good God!' she exclaimed, turning quite pale. 'What am I to do?'",
      book: "The Reluctant Widow ",
      author: "Georgette Heyer",
    },
    {
      timeFragment: "2050",
      quote: "He was, yes, always home from work by 2050 on Thursdays.",
      book: "Infinite Jest",
      author: "David Foster Wallace",
    },
    {
      timeFragment: "ten minutes to nine",
      quote:
        "What did it mean by beginning to tick so loudly all of a sudden? Its face indicated ten minutes to nine. Mrs Verloc cared nothing for time, and the ticking went on.",
      book: "The Secret Agent ",
      author: "Joseph Conrad",
    },
  ],
  "20:53": [
    {
      timeFragment: "eight fifty-three",
      quote:
        "Only eight fifty-three. The partners' decision meeting starts in seven minutes. I'm not sure I can bear this.",
      book: "The Undomestic Goddess ",
      author: "Sophie Kinsella",
    },
  ],
  "20:55": [
    {
      timeFragment: "8:55pm.",
      quote:
        "And the past. The clock on the dash said 8:55pm. And the last pink shard of the sun was reaching up into the night sky, desperately trying to hold on for just one more minute.",
      book: "Such Great Heights",
      author: "Chris Cole",
    },
  ],
  "20:56": [
    {
      timeFragment: "four minutes to nine",
      quote:
        '"No. 7 berth\u2014a second-class. The gentleman has not yet come, and it is four minutes to nine."',
      book: "Murder on the Orient Express",
      author: "Agatha Christie",
    },
  ],
  "20:57": [
    {
      timeFragment: "three minutes to nine",
      quote:
        '"Wait," he said solemnly, "till the clock strikes. I have wealth and power and knowledge above most men, but when the clock strikes I am afraid. Stay by me until then. This woman shall be yours. You have the word of the hereditary Prince of Valleluna. On the day of your marriage I will give you $100,000 and a palace on the Hudson. But there must be no clocks in that palace--they measure our follies and limit our pleasures. Do you agree to that?" "Of course," said the young man, cheerfully, "they\'re a nuisance, anyway--always ticking and striking and getting you late for dinner." He glanced again at the clock in the tower. The hands stood at three minutes to nine."',
      book: "The Four Million ",
      author: "O. Henry",
    },
  ],
  "20:58": [
    {
      timeFragment: "Two minutes to nine",
      quote:
        '"What time is it?" she asked, quiet, definite, hopeless. "Two minutes to nine," he replied, telling the truth with a struggle."',
      book: "Sons and Lovers ",
      author: "D H Lawrence",
    },
  ],
  "21:00": [
    {
      timeFragment: "9.00 p.m.",
      quote: "9.00 p.m. Watch television or a video",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "2100",
      quote: "At 2100 at night it's cold out.",
      book: "Infinite Jest ",
      author: "David Foster Wallace",
    },
    {
      timeFragment: "nine o'clock",
      quote:
        "It was nine o'clock at night upon the second of August\u2014the most terrible August in the history of the world. One might have thought already that God's curse hung heavy over a degenerate world, for there was an awesome hush and a feeling of vague expectancy in the sultry and stagnant air",
      book: "His Last Bow An Epilogue of Sherlock Holmes ",
      author: "Arthur Conan Doyle",
    },
    {
      timeFragment: "nine o'clock",
      quote:
        "On the evening before K.'s thirty-first birthday - it was about nine o'clock, when there is a lull in the streets - two gentlemen came to his apartment.",
      book: "The Trial ",
      author: "Franz Kafka",
    },
    {
      timeFragment: "nine o'clock",
      quote:
        "On the stroke of nine o'clock Mr. and Mrs. De Voted took their places on either side of the drawing-room fire, in attitudes of gracefully combined hospitality and unconcern, Vivian De Voted wearing a black beard and black velvet jacket buttoned over his Bohemian bosom, his lady in a flowing purple gown embroidered in divers appropriate places with pomegranates and their leaves.",
      book: "A Marriage of Passion ",
      author: "Katherine Mansfield",
    },
    {
      timeFragment: "nine o'clock",
      quote:
        "Shortly after nine o'clock that evening, Weyrother drove with his plans to Kutuzov's quarters where the council of war was to be held. All the commanders of columns were summoned to the commander in chief's and with the exception of Prince Bagration, who declined to come, were all there at the appointed time.",
      book: "War and Peace ",
      author: "Leo Tolstoy",
    },
    {
      timeFragment: "nine o'clock",
      quote:
        "Standing in the chrome-and-tile desolation of the Polar-Shtern Kafeteria at nine o'clock on a Friday night, in a snowstorm, he's the loneliest Jew in the Sitka District.",
      book: "The Yiddish Policemen's Union",
      author: "Michael Chabon",
    },
    {
      timeFragment: "at nine",
      quote: "That night at nine the President addressed the nation.",
      book: "All the President's Men ",
      author: "Bernstein & Woodward",
    },
    {
      timeFragment: "nine o'clock",
      quote:
        "Then he put on a grey jacket and left the flat to make his way to Praca da Alegria. It was already nine o'clock, Pereira maintains.",
      book: "Pereira Maintains ",
      author: "Antonio Tabucchi",
    },
    {
      timeFragment: "nine o'clock",
      quote:
        "This time, the putting on of her best hat at nine o'clock at night with the idea of sallying forth from the castle, down the long drive and then northwards along the acacia avenue, had been enough to send her to her own doorway as though she suspected someone might be there, someone who was listening to her thoughts.",
      book: "Titus Groan ",
      author: "Mervyn Peake",
    },
  ],
  "21:01": [
    {
      timeFragment: "about nine o'clock",
      quote:
        "On the evening before K.'s thirty-first birthday - it was about nine o'clock, when there is a lull in the streets - two gentlemen came to his apartment.",
      book: "The Trial",
      author: "Franz Kafka",
    },
  ],
  "21:02": [
    {
      timeFragment: "after nine",
      quote:
        "The good Brants did not allow the boys to play out after nine in summer evenings; they were sent to bed at that hour; Eddie honorably remained, but Georgie usually slipped out of the window toward ten, and enjoyed himself until midnight.",
      book: "Edward Mills and George Benton: A Tale",
      author: "Mark Twain",
    },
  ],
  "21:03": [
    {
      timeFragment: "about nine o'clock",
      quote:
        "Billy Weaver had travelled down from London on the slow afternoon train, with a change at Swindon on the way, and by the time he got to Bath it was about nine o'clock in the evening and the moon was coming up out of a clear starry sky over the houses opposite the station entrance. But the air was deadly cold and the wind was like a flat blade of ice on his cheeks.",
      book: '"The Landlady" ',
      author: "Roald Dahl",
    },
  ],
  "21:04": [
    {
      timeFragment: "9.04pm",
      quote:
        "At 9.04pm trilobites swim onto the scene, followed more or less immediately by the shapely creatures of the Burgess Shale.",
      book: "A Short History of Nearly Everything",
      author: "Bill Bryson",
    },
  ],
  "21:05": [
    {
      timeFragment: "Nine-five",
      quote:
        '"Nine-five. A voice spoke from the study ceiling: "Mrs. McClellan, which poem would you like this evening?". The house was silent. The voice said at last, "Since you express no preference, I shall select a poem at random."',
      book: "There will come soft rains",
      author: "Ray Bradbury",
    },
  ],
  "21:09": [
    {
      timeFragment: "9.09",
      quote:
        "9.09. Too late to turn around and go back. Too late, too dangerous.",
      book: "Dreams of Leaving",
      author: "Rupert Thomson",
    },
  ],
  "21:10": [
    {
      timeFragment: "10.10pm.",
      quote:
        "10.10pm. When you turn your recorder on you must adjust clock and the calendar.......Press red and nothing happens. Press numbers and nothing happens. Wish stupid video had never been invented.",
      book: "Bridget Jones's Diary ",
      author: "Helen Fielding",
    },
  ],
  "21:11": [
    {
      timeFragment: "9.11",
      quote:
        "Every few seconds the house changed character, at one time menacing and sinister, and again the innocent abode of law-abiding citizens about to be attacked by my private army. The luminous watch said 9.11.",
      book: "The Ipcress File",
      author: "Len Deighton",
    },
  ],
  "21:12": [
    {
      timeFragment: "21.12",
      quote:
        "The crime was reported to us (with almost indecent alacrity, Rog) at 21.12, by Susan Trott - of Black Grouse Cottage - who had been, I quote: 'out looking for hedgehogs when I was horrified to notice the postbox door had fallen off and was just lying there, on the ground'.",
      book: "Burley Cross Postbox Theft",
      author: "Nicola Barker",
    },
  ],
  "21:15": [
    {
      timeFragment: "9.15",
      quote: "9.15. Did Roberts pay you yet?",
      book: "Ulysses",
      author: "James Joyce",
    },
    {
      timeFragment: "nine-fifteen",
      quote:
        "What are we going to do? Should we try to walk to Clapham High Street? But it's bloody miles away. I glance at my watch and am shocked to see that it's nine-fifteen. We've spent over an hour faffing about and we haven't even had a drink. And it's all my fault. I can't even organize one simple evening without its going catastrophically wrong.",
      book: "Can You Keep a Secret? ",
      author: "Sophie Kinsella",
    },
  ],
  "21:17": [
    {
      timeFragment: "21:17",
      quote:
        "21:17, Sunday Evening, Angbyplan. A man is observed outside the hair salon. He presses his face and hands against the glass, and appears extremely intoxicated.",
      book: "Let The Right One In",
      author: "John Ajvide Lindqvist",
    },
  ],
  "21:18": [
    {
      timeFragment: "eighteen minutes after nine",
      quote:
        "The same thing would hold true if there were someone in her apartment. In that case he would just say that he had been passing by, recognized her charming house, and thought to drop in. It was eighteen minutes after nine when Mr. Martin turned into Twelfth Street.",
      book: "The Catbird Seat",
      author: "James Thurber",
    },
  ],
  "21:20": [
    {
      timeFragment: "9.20 p.m.",
      quote: "9.20 p.m. Have juice and a snack",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
  ],
  "21:22": [
    {
      timeFragment: "21.22 hrs",
      quote:
        "Fifteen minutes later (21.22 hrs), Miss Squire arrives in Skipton where she is booked into a local B&B. This B&B is located directly across the road from Mhairi Callaghan's Feathercuts.",
      book: "Burley Cross Postbox Theft",
      author: "Nicola Barker",
    },
  ],
  "21:23": [
    {
      timeFragment: "9.23pm",
      quote:
        "My father met me at the station, the dog jumped up to meet me, missed, and nearly fell in front of the 9.23pm Birmingham express.",
      book: "The Secret Diary of Adrian Mole Aged 13 3/4",
      author: "Sue Townsend",
    },
  ],
  "21:25": [
    {
      timeFragment: "9:25 p.m.",
      quote:
        "9:25 p.m. Aargh. Suddenly main menu is on TV saying Press 6. Realize was using telly remote control by mistake. Now News has come on",
      book: "Bridget Jones's Diary",
      author: "Helen Fielding",
    },
  ],
  "21:28": [
    {
      timeFragment: "9:28",
      quote:
        "From that moment on--9:28 in the evening, June 18, 1941--everything was different.",
      book: "Everything is Illuminated",
      author: "Jonathan Safran Foer",
    },
  ],
  "21:30": [
    {
      timeFragment: "9.30 p.m.",
      quote: "9.30 p.m. Go to bed",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
    {
      timeFragment: "nine thirty",
      quote:
        "Forty-eight years old, profoundly asleep at nine thirty on a Friday night - this is modern professional life.",
      book: "Saturday",
      author: "Ian McEwan",
    },
    {
      timeFragment: "9:30 p.m.",
      quote:
        "It's 9:30 p.m. already. I've gotta head uptown for my appointment with Pavel. Pavel is my shrink. He sees patients at night. He's a Czech Jew, a survivor of Terezin and Auswitz. I see him once a week.",
      book: "Maus ",
      author: "Art Spiegelman",
    },
    {
      timeFragment: "nine-thirty",
      quote:
        "The light in Mr. Green's kitchen snapped off at nine-thirty, followed by the light in his bedroom at his usual ten o'clock. His house was the first on the street to go dark.",
      book: "A crime in the neighborhood ",
      author: "Suzanne Berne",
    },
  ],
  "21:31": [
    {
      timeFragment: "9:31",
      quote:
        '"I took some juice out of the refrigerator and sat down at the kitchen table with it. On the table was a note from my girlfriend: "Gone out to eat. Back by 9:30." The digital clock on the table read 9:30. I watched it flip over to 9:31, then to 9:32."',
      book: "A Wild Sheep Chase",
      author: "Haruki Murakami",
    },
  ],
  "21:32": [
    {
      timeFragment: "9:32",
      quote:
        '"I took some juice out of the refrigerator and sat down at the kitchen table with it. On the table was a note from my girlfriend: "Gone out to eat. Back by 9:30." The digital clock on the table read 9:30. I watched it flip over to 9:31, then to 9:32."',
      book: "A Wild Sheep Chase",
      author: "Haruki Murakami",
    },
  ],
  "21:34": [
    {
      timeFragment: "9.34 p.m.",
      quote:
        "Thanks; expect me 9.34 p.m. 26th'; which produced, three hours later, a reply: 'Delighted; please bring a No. 3 Rippingille stove' - a perplexing and ominous direction, which somehow chilled me in spite of its subject matter.",
      book: "The Riddle of the Sands",
      author: "Erskine Childers",
    },
  ],
  "21:35": [
    {
      timeFragment: "9.35 p.m.",
      quote:
        "The Sergeant jotted it down on a piece of paper. 'That checks up with his own story: 9.35 p.m. Budd leaves; the North dame arrives.'",
      book: "A Blunt Instrument",
      author: "Georgette Heyer",
    },
  ],
  "21:36": [
    {
      timeFragment: "9:36",
      quote:
        "My backpack was already packed, and I'd already gotten the other supplies together, like the altimeter and the granola bars and the Swiss army knife I'd dug up in Central Park, so there was nothing else to do. Mom tucked me in at 9:36.",
      book: "Extremely Loud and Incredibly Close",
      author: "Jonathan Safran Foer",
    },
  ],
  "21:38": [
    {
      timeFragment: "nine thirty-eight",
      quote:
        "At nine thirty-eight the waiter came back and offered us a second helping of cheese,salami and sardines, and Mr Yoshogi who had been converting sterling into yen looked extremely puzzled and said he had no idea that British Honduras had so large an export trade",
      book: "Pig and Pepper",
      author: "David Footman",
    },
  ],
  "21:42": [
    {
      timeFragment: "9:42 P.M.",
      quote: "Langdon looked at his Mickey Mouse watch. 9:42 P.M.",
      book: "The Lost Symbol",
      author: "Dan Brown",
    },
  ],
  "21:45": [
    {
      timeFragment: "9:45 PM",
      quote:
        "But for some unfathomable reason-birth, death, the end of the universe and all things available to man-Cody Menhoff's was closed at 9:45 PM on a Thursday...",
      book: "Riven Rock ",
      author: "T. C. Boyle",
    },
  ],
  "21:47": [
    {
      timeFragment: "thirteen minutes to ten",
      quote:
        "For Hunter, who was trained to note times exactly, the final emergency started at thirteen minutes to ten.",
      book: "Elegy for a Revolutionary",
      author: "CJ Driver",
    },
  ],
  "21:50": [
    {
      timeFragment: "ten minutes to ten",
      quote:
        "I passed out on to the road and saw by the lighted dial of a clock that it was ten minutes to ten. In front of me was a large building which displayed the magical name.",
      book: "Dubliners",
      author: "James Joyce",
    },
  ],
  "21:57": [
    {
      timeFragment: "21:57",
      quote:
        "Second to last, the inset clock blinks from 21:57 to 21:58. Napier's eyes sink, newborn sunshine slants through ancient oaks and on a lost river. Look, Joe, herons",
      book: "Cloud Atlas",
      author: "David Mitchell",
    },
    {
      timeFragment: "Three minutes to ten",
      quote:
        '"The waiting man pulled out a handsome watch, the lids of it set with small diamonds. "Three minutes to ten," he announced."',
      book: "The Four Million ",
      author: "O. Henry",
    },
  ],
  "21:58": [
    {
      timeFragment: "21:58",
      quote:
        "Second to last, the inset clock blinks from 21:57 to 21:58. Napier's eyes sink, newborn sunshine slants through ancient oaks and on a lost river. Look, Joe, herons",
      book: "Cloud Atlas",
      author: "David Mitchell",
    },
  ],
  "21:59": [
    {
      timeFragment: "about 10",
      quote:
        "The first night, as soon as the corporal had conducted my uncle Toby upstairs, which was about 10 - Mrs. Wadman threw herself into her arm chair",
      book: "The Life and Opinions of Tristram Shandy, Gentleman",
      author: "Laurence Sterne",
    },
  ],
  "22:00": [
    {
      timeFragment: "ten",
      quote:
        "By ten, Quoyle was drunk. The crowd was enormous, crushed together so densely that Nutbeem could not force his way down the hall or to the door and urinated on the remaining potato chips in the blue barrel, setting a popular example.",
      book: "The Shipping News ",
      author: "E. Annie Proulx",
    },
    {
      timeFragment: "Ten o'clock",
      quote:
        "Her body asserted itself with a restless movement of the knee, and she stood up. 'Ten o'clock,' she remarked, apparently finding the time on the ceiling. 'Time for this good girl to go to bed.'",
      book: "The Great Gatsby ",
      author: "F. Scott Fitzgerald",
    },
    {
      timeFragment: "till ten ",
      quote:
        '"I could not doubt that this was the BLACK SPOT; and taking it up, I found written on the other side, in a very good, clear hand, this short message: "You have till ten tonight."',
      book: "Treasure Island ",
      author: "Robert Louis Stevenson",
    },
    {
      timeFragment: "ten o'clock",
      quote:
        "I went back into the library, limp and exhausted. In a few minutes the telephone began ringing again. I did not do anything. I let it ring. I went and sat down at Maxim's feet. It went on ringing. I did not move. Presently it stopped, as though cut suddenly in exasperation. The clock on the mantelpiece struck ten o'clock. Maxim put his arms round me and lifted me against him. We began to kiss one another, feverishly, desperately, like guilty lovers who have not kissed before.",
      book: "Rebecca ",
      author: "Daphne du Maurier",
    },
    {
      timeFragment: "ten o'clock",
      quote:
        '"No one wanted to go to bed when at ten o\'clock Mrs. March put by the last finished job, and said, "Come girls." Beth went to the piano and played the father\'s favorite hymn."',
      book: "Little Women",
      author: "Louisa May Alcott",
    },
    {
      timeFragment: "ten ",
      quote: "The grandfather clock in the State Room strikes ten times.",
      book: "The Thousand Autumns of Jacob de Zoet ",
      author: "David Mitchell",
    },
    {
      timeFragment: "ten o'clock",
      quote:
        "The light in Mr. Green's kitchen snapped off at nine-thirty, followed by the light in his bedroom at his usual ten o'clock. His house was the first on the street to go dark.",
      book: "A crime in the neighborhood ",
      author: "Suzanne Berne",
    },
    {
      timeFragment: "ten o'clock",
      quote:
        "They were alone then, and theoretically free to do whatever they wanted, but they went on eating the dinner they had no appetite for. Florence set down her knife and reached for Edward's hand and squeezed. From downstairs they heard the wireless, the chimes of Big Ben at the start of the ten o'clock news.",
      book: "On Chesil Beach ",
      author: "Ian McEwan",
    },
    {
      timeFragment: "ten o'clock",
      quote:
        "We let our upstairs room to a certain Mr. Goudsmit, a divorced man in his thirties, who appeared to have nothing to do on this particular evening; we simply could not get rid of him without being rude; he hung about until ten o'clock.",
      book: "Anne Frank: The Diary of a Young Girl ",
      author: "Anne Frank",
    },
  ],
  "22:02": [
    {
      timeFragment: "10.02pm.",
      quote: "It was now 10.02pm. He has less than two hours.",
      book: "The Lost Symbol",
      author: "Dan Brown",
    },
  ],
  "22:05": [
    {
      timeFragment: "10:05 p.m.",
      quote:
        "The A-B elevator was our elevator, the elevator on which the paramedics came up at 9:20 p.m., the elevator on which they took John (and me) downstairs to the ambulance at 10:05 p.m.",
      book: "The Year of Magical Thinking",
      author: "Joan Didion",
    },
  ],
  "22:06": [
    {
      timeFragment: "after ten o'clock",
      quote:
        "Of course, they had good reason to be fussy on such a night. And then it was long after ten o'clock and yet there was no sign of Gabriel and his wife. Besides they were dreadfully afraid that Freddy Malins might turn up screwed.",
      book: "The Dead ",
      author: "James Joyce",
    },
  ],
  "22:08": [
    {
      timeFragment: "Ten eighteen",
      quote:
        '"My watch is always a little fast," I said. "What time do you make it now?" "Ten eight." "Ten eighteen by mine. You see."',
      book: "The Quiet American",
      author: "Graham Greene",
    },
  ],
  "22:10": [
    {
      timeFragment: "ten minutes past ten",
      quote:
        "That was the past, and now I had just died on the narrow couch of a Paris lodging house, and my wife was crouching on the floor, crying bitterly. The white light before my left eye was growing dim, but I remembered the room perfectly. On the left there was a chest of drawers, on the right a mantelpiece surmounted by a damaged clock without a pendulum, the hands of which marked ten minutes past ten. The window overlooked the Rue Dauphine, a long, dark street. All Paris seemed to pass below, and the noise was so great that the window shook.",
      book: "The Death of Olivier Becaille ",
      author: "Emile Zola",
    },
  ],
  "22:11": [
    {
      timeFragment: "eleven minutes past ten",
      quote:
        "Therefore a sergeant called Trifonov had been on post all day or all week and then he had left at eleven minutes past ten in the evening.",
      book: "The Enemy",
      author: "Lee Child",
    },
  ],
  "22:12": [
    {
      timeFragment: "2212",
      quote:
        "The Chinese women scuttled at an amazing rate, given their size and the bags' size. It was c. 2212:30-40h., smack in the middle of the former Interval of Issues Resolution.",
      book: "Infinite Jest",
      author: "David Foster Wallace",
    },
  ],
  "22:14": [
    {
      timeFragment: "2214",
      quote:
        "The shopping bags looked heavy and impressive, their weight making the Chinese women lean in slightly towards each other. Call it 2214:10h.",
      book: "Infinite Jest",
      author: "David Foster Wallace",
    },
  ],
  "22:15": [
    {
      timeFragment: "10:15 p.m.",
      quote: "10:15 p.m. Aargh Newsnight on in 15 minutes",
      book: "Bridget Jones's Diary",
      author: "Helen Fielding",
    },
  ],
  "22:17": [
    {
      timeFragment: "10:17 p. m.",
      quote: "10:17 p. m. Casette will not go in",
      book: "Bridget Jones's Diary",
      author: "Helen Fielding",
    },
  ],
  "22:18": [
    {
      timeFragment: "Ten eighteen",
      quote:
        '"My watch is always a little fast," I said. "What time do you make it now?" "Ten eight." "Ten eighteen by mine. You see."',
      book: "The Quiet American",
      author: "Graham Greene",
    },
    {
      timeFragment: "10:18pm.",
      quote: "10:18pm. Ah. Thelma and Louise is in there",
      book: "Bridget Jones's Diary ",
      author: "Helen Fielding",
    },
  ],
  "22:20": [
    {
      timeFragment: "10:20",
      quote:
        '"At 10:20 she returned with a shopping bag from the supermarket. In the bag were three scrub brushes, one box of paperclips and a well-chilled six-pack of canned beer. So I had another beer. "It was about sheep," I said. "Didn\'t I tell you?" she said."',
      book: "A Wild Sheep Chase",
      author: "Haruki Murakami",
    },
  ],
  "22:21": [
    {
      timeFragment: "10:21pm.",
      quote:
        "10:21pm. Frenziedly press all buttons. Cassette comes out and goes back in again",
      book: "Bridget Jones's Diary ",
      author: "Helen Fielding",
    },
    {
      timeFragment: "10:21pm.",
      quote: "10:21pm. Thelma and Louise will not come out",
      book: "Bridget Jones's Diary ",
      author: "Helen Fielding",
    },
    {
      timeFragment: "2221h",
      quote:
        "On a Saturday c. 2221h., Lenz found a miniature bird that had fallen out of some nest and was sitting bald and pencil-necked on the lawn of Unit #3 flapping ineffectually, and went in with Green and ducked Green and went back outside to # 3's lawn and put the thing in a pocket and went in and put it down the garbage disposal in the kitchen sink of the kitchen, but still felt largely impotent and unresolved.",
      book: "Infinite Jest ",
      author: "David Foster Wallace",
    },
    {
      timeFragment: "2221h",
      quote:
        "On a Saturday c. 2221h., Lenz found a miniature bird that had fallen out of some nest and was sitting bald and pencil-necked on the lawn of Unit #3 flapping ineffectually...",
      book: "Infinite Jest",
      author: "David Foster Wallace",
    },
  ],
  "22:24": [
    {
      timeFragment: "10:24",
      quote:
        "Thanks to ten minutes or so of balmy weather, by 10:24 the Earth is covered in the great carboniferous forests whose residues give us all our coal, and the first winged insects are evident.",
      book: "A Short History of Nearly Everything",
      author: "Bill Bryson",
    },
  ],
  "22:25": [
    {
      timeFragment: "10:25pm.",
      quote:
        '"10:25pm. Got new cassette in now. Right. Turn to "Recording.................. Aargh Newsnight is starting"',
      book: "Bridget Jones's Diary ",
      author: "Helen Fielding",
    },
  ],
  "22:26": [
    {
      timeFragment: "ten-twenty-six",
      quote:
        "As always, consciousness returned to me progressively from the edges of my field of vision. The first things to claim recognition were the bathroom door emerging from the far right and a lamp from the far left, from which my awareness gradually drifted inward like ice flowing together toward the middle of a lake. In the exact center of my visual field was the alarm clock, hands pointing to ten-twenty-six.",
      book: "Hard Boiled Wonderland and the End of the World ",
      author: "Haruki Murakami",
    },
  ],
  "22:27": [
    {
      timeFragment: "twenty-seven minutes past 10",
      quote:
        "Mr Harcourt woke up with mysterious suddenness at twenty-seven minutes past 10, and, by a curious coincidence, it was at that very instant that the butler came in with two footmen laden with trays of whisky, brandy, syphons, glasses and biscuits.",
      book: "England, Their England",
      author: "AG Macdonell",
    },
  ],
  "22:30": [
    {
      timeFragment: "ten thirty",
      quote:
        "She looked at the clock; it was ten thirty. If she could get there quickly on the subway, then she could be at his house in less than an hour, maybe a bit longer if the late trains did not come so often.",
      book: "Brooklyn",
      author: "Colm Toibin",
    },
    {
      timeFragment: "ten-thirty",
      quote:
        "The time was ten-thirty but it could have been three in the morning, because along its borders, West Berlin goes to bed with the dark",
      book: "Smiley's People ",
      author: "John Le Carre",
    },
  ],
  "22:31": [
    {
      timeFragment: "10.31pm.",
      quote:
        "10.31pm. Ok OK. Calm. Penny Husbands-Bosworth, so asbestos leukaemia item is not on yet.",
      book: "Bridget Jones's Diary ",
      author: "Helen Fielding",
    },
    {
      timeFragment: "10.31 pm",
      quote:
        "And, later on, at 10.31 pm, I went out onto the balcony to find out whether I could see any stars, but there weren't any because of all the clouds and what is called Light Pollution which is light from streetlights and car headlights and floodlights and lights in buildings reflecting off tiny particles in the atmosphere and getting in the way of light from the stars. So I went back inside.",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
  ],
  "22:33": [
    {
      timeFragment: "10:33 p.m.",
      quote:
        "10:33 p.m. Yessss, yessss. RECORDING CURRENT PROGRAMME. Have done it. Aargh. All going mad. Cassette has started rewinding and now stopped and ejected. Why? Shit. Shit. Realize in excitement have sat on remote control.",
      book: "Bridget Jones's Diary",
      author: "Helen Fielding",
    },
    {
      timeFragment: "10:33pm.",
      quote:
        "10:33pm. Yessss, yessss. RECORDING CURRENT PROGRAMME. Have done it. Aargh. All going mad. Cassette has started rewinding and now stopped and ejected. Why? Shit. Shit. Realize in excitement have sat on remote control.",
      book: "Bridget Jones's Diary ",
      author: "Helen Fielding",
    },
  ],
  "22:35": [
    {
      timeFragment: "10:35 p.m.",
      quote:
        "10:35 p.m. Frantic now. Have rung Sahzzer, Rebecca, Simon, Magda. Nobody knows how to programme their videos. Only person I know who knows how to do it is Daniel.",
      book: "Bridget Jones's Diary",
      author: "Helen Fielding",
    },
  ],
  "22:40": [
    {
      timeFragment: "twenty to eleven",
      quote:
        "The station clock told him the time: twenty to eleven. He went to the booking office and asked the clerk in a polite tone when was the next train to Paris. 'In twelve minutes.'",
      book: "The Man Who Watched the Trains Go By",
      author: "Georges Simenon",
    },
  ],
  "22:41": [
    {
      timeFragment: "10:41",
      quote:
        '"He climbed into the front seat and started the car. It started with a merry powerful hum, ready to go. "There, the bastards", said Julian, and smashed the clock with the bottom of the bottle, to give them an approximate time. It was 10:41"',
      book: "Appointment in Samarra",
      author: "John O'Hara",
    },
  ],
  "22:44": [
    {
      timeFragment: "About a quarter to eleven.",
      quote:
        '"Alec pricked up his ears. "When was that?" "Oh, yesterday evening." "What time?" "About a quarter to eleven. I was playing bridge."',
      book: "Dead in the Water",
      author: "Carola Dunn",
    },
  ],
  "22:45": [
    {
      timeFragment: "10.45pm.",
      quote:
        "10.45pm. Oh God Daniel fell about laughing when I said I could not programme video. Said he would do it for me. Still at least I have done best for Mum. It is exciting and historic when one's friends are on TV.",
      book: "Bridget Jones's Diary ",
      author: "Helen Fielding",
    },
    {
      timeFragment: "fifteen minutes before eleven",
      quote:
        "So the Lackadaisical Broadcasting Co. bids you farewell with the message that if you aren't grateful to be living in a world where so many things to be grateful for are yours as a matter of course. Why it is now five seconds until fifteen minutes before eleven o'clock and you are just an old Trojan Horse.",
      book: "Good Intentions ",
      author: "Ogden Nash",
    },
  ],
  "22:46": [
    {
      timeFragment: "10.46 p.m.",
      quote:
        "The 'night train' tallied to perfection, for high tide in the creek would be, as Davies estimated, between 10.30 and 11.00 p.m.on the night of the 25th; and the time-table showed that the only night train arriving at Norden was one from the south at 10.46 p.m.",
      book: "The Riddle of the Sands",
      author: "Erskine Childers",
    },
  ],
  "22:48": [
    {
      timeFragment: "10.48",
      quote:
        '"Oh! I don\'t know about that," said Mr. Satterthwaite, warming to his subject. "I was down there for a bit last summer. I found it quite convenient for town. Of course the trains only go every hour. 48 minutes past the hour from Waterloo-up to 10.48."',
      book: "The Sign in the Sky",
      author: "Agatha Christie",
    },
  ],
  "22:49": [
    {
      timeFragment: "well after 2245h",
      quote:
        "It's well after 2245h. The dog's leash slides hissing to the end of the Day-Glo line and stops the dog a couple of paces from the inside of the gate, where Lenz is standing, inclined in the slight forward way of somebody who's talking baby-talk to a dog.",
      book: "Infinite Jest",
      author: "David Foster Wallace",
    },
  ],
  "22:50": [
    {
      timeFragment: "10.50 P. M.",
      quote:
        "10.50 P. M. This diary-keeping of mine is, I fancy, the outcome of that scientific habit of mind about which I wrote this morning. I like to register impressions while they are fresh.",
      book: "The Parasite ",
      author: "Sir Arthur Conan Doyle",
    },
    {
      timeFragment: "ten to eleven",
      quote:
        "\"Saturday night. And I said, 'It's a hundred this year, ain't anybody noticed?'\"Jack said, 'What's a hundred?' I said, 'Pub is. Coach is. Look at the clock.' Jack said, 'It's ten to eleven'.\"",
      book: "Last Orders",
      author: "Graham Swift",
    },
    {
      timeFragment: "22.50",
      quote:
        "So think yourself lucky while you're awake and remember a happy crew. Think of Hamburg on the Magic Night. 22.50 and they went out neatly, just as they should - you couldn't fault Parks, he was always on his route.",
      book: "Day ",
      author: "A. L. Kennedy",
    },
  ],
  "22:55": [
    {
      timeFragment: "Eleven o'clock, all but five minutes!",
      quote:
        '"It is eleven o\'clock! Eleven o\'clock, all but five minutes!" "But which eleven o\'clock?" "The eleven o\'clock that is to decide life or death!...He told me so just before he went....He is terrible....He is quite mad: he tore off his mask and his yellow eyes shot flames!..."',
      book: "The Phantom of the Opera",
      author: "Gaston Leroux",
    },
  ],
  "22:58": [
    {
      timeFragment: "just about eleven o'clock",
      quote:
        "Then it grew dark; she would have had them to bed, but they begged sadly to be allowed to stay up; and, just about eleven o'clock, the door-latch was raised quietly, and in stepped the master.",
      book: "Wuthering Heights ",
      author: "Emily Bront\u00eb",
    },
  ],
  "22:59": [
    {
      timeFragment: "one minute to eleven",
      quote:
        "They parked the car outside Lowther's at precisely one minute to eleven. People were leaving, not all of them happy at having their evening curtailed. But the grumbling was muted, and even then it only started once they were safely on the street.",
      book: "The Complaints ",
      author: "Ian Rankin",
    },
  ],
  "23:00": [
    {
      timeFragment: "at eleven",
      quote:
        "'He will be here at eleven exactly, sir.' At the bar, naked couples had begun dancing.",
      book: "Smiley's People ",
      author: "John le Carre",
    },
    {
      timeFragment: "eleven o'clock",
      quote:
        "At eleven o'clock that night, having secured a bed at one of the hotels and telegraphed his address to his father immediately on his arrival, he walked out into the streets of Sandbourne.",
      book: "Tess of the d'Urbervilles ",
      author: "Thomas Hardy",
    },
    {
      timeFragment: "eleven o'clock",
      quote:
        "At eleven o'clock, I rang the bell for Betteredge, and told Mr. Blake that he might at last prepare himself for bed.",
      book: "The Moonstone ",
      author: "Wilkie Collins",
    },
    {
      timeFragment: "eleven o'clock",
      quote:
        '"He says, "They\'ve killed Jan. Clear out." "The suitcase?" I ask. "Take it away again. We want nothing to do with it now. Catch the eleven o\'clock express." "But it doesn\'t stop here...." "It will. Go to track six. Opposite the freight station. You have three minutes." "But..." "Move, or I\'ll have to arrest you."',
      book: "If on a winter's night a traveller ",
      author: "Italo Calvino",
    },
    {
      timeFragment: "eleven",
      quote:
        "The clock struck eleven. I looked at Adele, whose head leant against my shoulder; her eyes were waxing heavy, so I took her up in my arms and carried her off to bed. It was near one before the gentlemen and ladies sought their chambers.",
      book: "Jane Eyre",
      author: "Charlotte Bront\u00eb",
    },
    {
      timeFragment: "eleven",
      quote:
        "The clock struck eleven. I looked at Adele, whose head leant against my shoulder; her eyes were waxing heavy, so I took her up in my arms and carried her off to bed. It was near one before the gentlemen and ladies sought their chambers.",
      book: "Jane Eyre ",
      author: "Charlotte Bront\u00eb",
    },
    {
      timeFragment: "at eleven",
      quote: "The train arrived in New York at eleven that night.",
      book: "The Recognitions",
      author: "William Gaddis",
    },
    {
      timeFragment: "2300h",
      quote: "They didn't even sit down to eat until 2300h.",
      book: "Infinite Jest ",
      author: "David Foster Wallace",
    },
    {
      timeFragment: "eleven o'clock",
      quote:
        "When they reached the top of the Astronomy Tower at eleven o'clock, they found a perfect night for stargazing, cloudless and still.",
      book: "Harry Potter and the Order of the Phoenix ",
      author: "JK Rowling",
    },
  ],
  "23:03": [
    {
      timeFragment: "Eleven oh-three",
      quote:
        '"What makes you think it\'s for real?" "Just a hunch, really. He sounded for real. Sometimes you can just tell about people"-he smiled-"even if you\'re a dull old WASP." "I think it\'s a setup." "Why?" "I just do. Why would someone from the government want to help you?" "Good question. Guess I\'ll find out." She went back into the kitchen."What time are you meeting him?" she called out. "Eleven oh-three," he said. "That made me think he\'s for real. Military and intelligence types set precise appointment times to eliminate confusion and ambiguity. Nothing ambiguous about eleven oh-three."',
      book: "Little Green Men ",
      author: "Christopher Buckley",
    },
  ],
  "23:05": [
    {
      timeFragment: "11.05",
      quote:
        "It was 11.05, five minutes later than my habitual bedtime. I felt. I felt guilty at being still up, but the past kept pricking at me and I knew that all the events of those nineteen days in July were astir within me, like the loosening phlegm in an attack of bronchitis",
      book: "The Go-Between ",
      author: "L.P.Hartley",
    },
    {
      timeFragment: "five minutes past eleven",
      quote:
        "It was five minutes past eleven when I made my last entry. I remember winding up my watch and noting the time. So I have wasted some five hours of the little span still left to us. Who would have believed it possible? But I feel very much fresher, and ready for my fate--or try to persuade myself that I am. And yet, the fitter a man is, and the higher his tide of life, the more must he shrink from death. How wise and how merciful is that provision of nature by which his earthly anchor is usually loosened by many little imperceptible tugs, until his consciousness has drifted out of its untenable earthly harbor into the great sea beyond!",
      book: "The Poison Belt ",
      author: "Sir Arthur Conan Doyle",
    },
    {
      timeFragment: "11:05",
      quote: "My watch says 11:05. But whether AM or PM I don't know.",
      book: "Household Worms",
      author: "Stanley Donwood",
    },
  ],
  "23:07": [
    {
      timeFragment: "11.07 pm",
      quote:
        '"At 11.07 pm, Samuel "Gunner" Wilson was moving at 645 miles per hour over the Mojave Desert. Up ahead in the moonlinght, he saw the twin lead jets, their afterburners glowing angrily in the night sky."',
      book: "The Andromeda Strain",
      author: "Michael Crichton",
    },
  ],
  "23:10": [
    {
      timeFragment: "ten past eleven",
      quote:
        "Another Christmas day is nearly over. It's ten past eleven. Richard declined with thanks my offer to make up a bed for him here in my study, and has driven off back to Cambridge, so I am able to make some notes on the day before going to bed myself.",
      book: "Deaf Sentence ",
      author: "David Lodge",
    },
    {
      timeFragment: "ten minutes past eleven",
      quote:
        "He had not the strength to help himself, and at ten minutes past eleven no one could have helped him, no one in the world",
      book: "Appointment in Samarra",
      author: "John O'Hara",
    },
  ],
  "23:11": [
    {
      timeFragment: "11:11 p.m.",
      quote:
        '"Life changes fast Life changes in an instant You sit down to dinner and life as you know it ends. The Question of self-pity. Those were the first words I wrote after it happened. The computer dating on the Microsoft Word file ("Notes on change.doc") reads "May 20, 2004, 11:11 p.m.," but that would have been a case of my opening the file and reflexively pressing save when I closed it. I had made no changes to that file since I wrote the words, in January 2004, a day or two after the fact. For a long time I wrote nothing else. Life changes in the instant. The ordinary instant."',
      book: "The Year of Magical Thinking ",
      author: "Joan Didion",
    },
  ],
  "23:12": [
    {
      timeFragment: "23:12",
      quote:
        "There was a confirmatory identification done by undercover officer 6475 at 23:12 hours at the corner of 147th and Amsterdam.",
      book: "A Naked Singularity ",
      author: "Sergio De La Pava",
    },
  ],
  "23:15": [
    {
      timeFragment: "11.15pm. ",
      quote:
        "\"11.15pm. Humph. Mum just rang \"Sorry, darling. It isn't Newsnigtht, it's Breakfast News tomorrow. Could you set it for seven o'clock tomorrow morning, BBC1?\"",
      book: "Bridget Jones's Diary ",
      author: "Helen Fielding",
    },
    {
      timeFragment: "quarter-past eleven",
      quote:
        "On arriving home at a quarter-past eleven, we found a hansom cab, which had been waiting for me for two hours with a letter. Sarah said she did not know what to do, as we had not left the address where we had gone.",
      book: "Dairy of a Nobody ",
      author: "George and Weedon Grossmith",
    },
  ],
  "23:16": [
    {
      timeFragment: "11.16 pm.",
      quote:
        "But I couldn't get out of the house straight away because he would see me, so I would have to wait until he was asleep. The time was 11.16 pm. I tried doubling 2s again, but I couldn't get past 2(15) which was 32,768. So I groaned to make the time pass quicker and not think.",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
  ],
  "23:18": [
    {
      timeFragment: "11.18",
      quote:
        "It is 11.18. A row of bungalows in a round with a clump of larch tree in the middle.",
      book: "Trumpet",
      author: "Jackie Kay",
    },
  ],
  "23:19": [
    {
      timeFragment: "11:19",
      quote:
        "A whistle cut sharply across his words. Peter got onto his knees to look out the window, and Miss Fuller glared at him. Polly looked down at her watch: 11:19. The train. But the stationmaster had said it was always late.",
      book: "Blackout",
      author: "Connie Willis",
    },
  ],
  "23:20": [
    {
      timeFragment: "eleven-twenty",
      quote:
        "From Balboa Island, he drove south to Laguna Beach. At eleven-twenty, he parked his van across the street from the Hudston house.",
      book: "Watchers ",
      author: "Dean Koontz",
    },
    {
      timeFragment: "twenty past eleven",
      quote:
        '"Harvey looked at the clock, which marked twenty past eleven. "Then I\'ll sleep here till three and catch the four o\'clock freight. They let us men from the Fleet ride free as a rule."',
      book: "Captains Courageous",
      author: "Rudyard Kipling",
    },
  ],
  "23:22": [
    {
      timeFragment: "11.22",
      quote:
        "At 11.22 he handed his ticket to a yawning guard and walked down a long flight of wooden steps to the car-park. A breeze lifted and dropped the leaves of a tree, and he thought of the girl with the blonde hair. His bicycle lay where he had left it.",
      book: "Dreams of leaving",
      author: "Robert Thomson",
    },
  ],
  "23:25": [
    {
      timeFragment: "11.25 p.m.",
      quote:
        '"OK, Estelle, I willl be at Nice Airport at 11.25 p.m. on Saturday, BA: Could you send the driver?"',
      book: "Other People's Money",
      author: "Justin Cartwright",
    },
    {
      timeFragment: "eleven o'clock and twenty-five minutes",
      quote:
        "To test the intensity of the light whose nature and cause he could not determine, he took out his watch to see if he could make out the figures on the dial. They were plainly visible, and the hands indicated the hour of eleven o'clock and twenty-five minutes. At that moment the mysterious illumination suddenly flared to an intense, an almost blinding splendor\u2026",
      book: "A Wireless Message",
      author: "Ambrose Bierce",
    },
  ],
  "23:26": [
    {
      timeFragment: "11:26 p.m.",
      quote:
        "Los Angeles. 11:26 p.m. In a dark red room- the color of the walls is close to that of raw liver- is a tall woman dressed cartoonishly in too-tight silk shorts, her breasts pulled up and pressed forward by the yellow blouse tied beneath them.",
      book: "American Gods",
      author: "Neil Gaiman",
    },
  ],
  "23:27": [
    {
      timeFragment: "23.27",
      quote:
        '"He tells his old friend the train times and they settle on the 19.45 arriving at 23.27. "I\'ll book us into the ultra-luxurious Francis Drake Lodge. Running water in several rooms. Have you got a mobile?"',
      book: "Other People's Money",
      author: "Justin Cartwright",
    },
  ],
  "23:30": [
    {
      timeFragment: "2330",
      quote:
        "He loaded the player and turned on the viewer, his knees popping again as he squatted to set the cue to 2330.",
      book: "Infinite Jest ",
      author: "David Foster Wallace",
    },
    {
      timeFragment: "half past eleven",
      quote:
        "He would catch the night bus for Casablanca, the one that left the beach at half past eleven.",
      book: "'The Dismissal', in Midnight Mass & Other Stories ",
      author: "Paul Bowles",
    },
    {
      timeFragment: "half-past eleven",
      quote:
        "The Picton boat was due to leave at half-past eleven. It was a beautiful night, mild, starry, only when they got out of the cab and started to walk down the Old Wharf that jutted out into the harbour, a faint wind blowing off the water ruffled under Fenella's hat, and she put up her hand to keep it on.",
      book: '"The Voyage" ',
      author: "Katherine Mansfield",
    },
    {
      timeFragment: "half past eleven",
      quote:
        "The ship's clock in the bar says half past eleven. Half past eleven is opening time. The hands of the clock have stayed still at half past eleven for fifty years.",
      book: "Under Milk Wood",
      author: "Dylan Thomas",
    },
  ],
  "23:31": [
    {
      timeFragment: "twenty-nine minutes to midnight",
      quote:
        "It is twenty-nine minutes to midnight. Dr Narlikar's Nursing Home is running on a skeleton staff; there are many absentees, many employees who have preferred to celebrate the imminent birth of the nation, and will not assist tonight at the births of children.",
      book: "Midnight's Children",
      author: "Salman Rushdie",
    },
  ],
  "23:32": [
    {
      timeFragment: "In about twenty-eight minutes it will be midnight.",
      quote:
        '"This is the evening. This is the night. It is New Year\u00b4s Eve. In about twenty-eight minutes it will be midnight. I still have twenty-eight minutes left. I have to recollect my thoughts. At twelve o\u00b4clock, I should be done thinking." He looked at his father. "Help those that are depressed and consider themselves lost in this world," he thought. "Old fart."',
      book: "The Evenings ",
      author: "Gerard Reve",
    },
    {
      timeFragment: "11.32 pm",
      quote:
        "And then it started to rain and I got wet and I started shivering because I was cold. And then it was 11.32 pm and I heard voices of people walking along the street. And a voice said, 'I don't care whether you thought it was funny or not,' and it was a lady's voice.",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
  ],
  "23:33": [
    {
      timeFragment: "twenty-seven minutes to midnight",
      quote:
        "We are on Colaba Causeway now, just for a moment, to reveal that at twenty-seven minutes to midnight, the police are hunting for a dangerous criminal. His name: Joseph D'Costa. The orderly is absent, has been absent for several days, from his work at the Nursing Home, from his room near the slaughterhouse, and from the life of a distraught virginal Mary",
      book: "Midnight's Children",
      author: "Salman Rushdie",
    },
  ],
  "23:34": [
    {
      timeFragment: "Eleven thirty-four",
      quote:
        "Eleven thirty-four. We stand on the sidewalk in front of Jean's apartment on the Upper East Side. Her doorman eyes us warily and fills me with a nameless dread, his gaze piercing me from the lobby. A curtain of stars, miles of them, are scattered, glowing, across the sky and their multitude humbles me, which I have a hard time tolerating. She shrugs and nods after I say something about forms of anxiety. It's as if her mind is having a hard time communicating with her mouth, as if she is searching for a rational analysis of who I am, which is, of course, an impossibility: there ... is ... no ... key.",
      book: "American Psycho ",
      author: "Bret Easton Ellis",
    },
    {
      timeFragment: "eleven thirty-four",
      quote:
        "Reacher retrieved his G36 from under the saloon bar window at eleven thirty-four precisely and set out to walk back on the road, which he figured would make the return trip faster.",
      book: "The Hard Way",
      author: "Lee Child",
    },
  ],
  "23:35": [
    {
      timeFragment: "eleven thirty-five",
      quote:
        "Then at eleven thirty-five the door at the rear of the hall opened and a police sergeant and three constables entered, ushered by Bagot.",
      book: "Hamlet, Revenge!",
      author: "Michael Innes",
    },
  ],
  "23:36": [
    {
      timeFragment: "2336",
      quote:
        "Then Green knocks at the front door at 2336 - Gately has to Log the exact time and then it's his call whether to unlock the door.",
      book: "Infinite Jest",
      author: "David Foster Wallace",
    },
  ],
  "23:39": [
    {
      timeFragment: "11.39",
      quote:
        "\"There's a whisper down the line at 11.39 When the Night Mail's ready to depart, Saying \"Skimble where is Skimble has he gone to hunt the thimble? We must find him or the train can't start.\"",
      book: "Old Possum's Book of Practical Cats",
      author: "T S Eliot",
    },
  ],
  "23:40": [
    {
      timeFragment: "11:40",
      quote:
        "We all have the maps and appliances of various kinds that can be had. Professor Van Helsing and I are to leave by the 11:40 train tonight for Veresti, where we are to get a carriage to drive to the Borgo Pass. We are bringing a good deal of ready money, as we are to buy a carriage and horses.",
      book: "Dracula ",
      author: "Bram Stoker",
    },
  ],
  "23:41": [
    {
      timeFragment: "11:41",
      quote:
        "In a little while his mind cleared, but his head ached, arms ached, body ached. The phosphorescent figures on his watch attracted his attention. He peered at them. The time was 11:41. I remember...what do I remember?",
      book: "Noble House",
      author: "James Clavell",
    },
  ],
  "23:42": [
    {
      timeFragment: "11.42",
      quote:
        "At 11.42 then the signal's nearly due And the passengers are frantic to a man- Then Skimble will appear and he'll saunter to the rear:",
      book: "Old Possum's Book of Practical Cats",
      author: "TS Eliot",
    },
  ],
  "23:43": [
    {
      timeFragment: "eleven forty-three",
      quote:
        "The clock told him it was eleven forty-three and in that moment, in a flash of illumination, Mungo understood what the numbers at the end of Moscow Centre's messages were",
      book: "Talking to Strange Men",
      author: "Ruth Rendell",
    },
  ],
  "23:44": [
    {
      timeFragment: "eleven forty-four",
      quote:
        "'At eleven forty-four last night somebody stabbed this girl in the neck with a kitchen knife and immediately thereafter plunged the same knife through her skull, where it remained.'",
      book: "Dead Famous",
      author: "Ben Elton",
    },
  ],
  "23:45": [
    {
      timeFragment: "three quarters past eleven",
      quote:
        "The church clocks chimed three quarters past eleven, as two figures emerged on London Bridge. One, which advanced with a swift and rapid step, was that of a woman who looked eagerly about her as though in quest of some expected object; the other figure was that of a man...",
      book: "Oliver Twist",
      author: "Charles Dickens",
    },
    {
      timeFragment: "quarter to twelve",
      quote:
        "We struck the tow-path at length, and that made us happy because prior to this we had not been sure whether we were walking towards the river or away from it, and when you are tired and want to go to bed, uncertainties like that worry you. We passed Shiplake as the clock was striking the quarter to twelve and then George said thoughtfully: 'You don't happen to remember which of the islands it was, do you?'",
      book: "Three Men in a Boat ",
      author: "Jerome K. Jerome",
    },
  ],
  "23:46": [
    {
      timeFragment: "11:46 p.m.",
      quote:
        "In the Kismet Lounge, Mr. Early sees suddenly to his horror it's 11:46 p.m. He's been in this place far longer than he'd planned, and he's had more to drink than he'd planned. Shame! What if, back at the E-Z, his little girl is crying piteously for him?",
      book: "Doll: A Romance of the Mississippi",
      author: "Joyce Carol Oates",
    },
  ],
  "23:47": [
    {
      timeFragment: "thirteen minutes to midnight",
      quote:
        "If he had glanced at his watch, he would have seen that it was thirteen minutes to midnight. And if he had been interested in what was going on, he would have heard the voices and bawling of terrified men.",
      book: "Dead Soldiers Don't Sing",
      author: "Rudolf Ja\u0161\u00edk",
    },
  ],
  "23:48": [
    {
      timeFragment: "11.48pm.",
      quote:
        "Littell arranged a private charter.He told the pilot to fly balls-to-the-wall.The little two-seater rattled and shook-Kemper couldn't believe it. It was 11.48pm. They were thirty-six hours short of GO.",
      book: "American Tabloid",
      author: "James Ellroy",
    },
  ],
  "23:49": [
    {
      timeFragment: "eleven minutes to midnight",
      quote:
        "Tom shrugged. He pushed his pinkish ruffled sleeve back, and saw that it was eleven minutes to midnight. Tom finished his coffee.",
      book: "The Boy Who Followed Ripley",
      author: "The Patricia Highsmith",
    },
  ],
  "23:50": [
    {
      timeFragment: "11.50pm",
      quote:
        "At 11.50pm, I got up extremely quietly, took my things from under the bed, and opened the door one millimeter at a time, so it wouldn't make any noise.",
      book: "Extremely Loud and Incredibly Close",
      author: "Jonathan Safran Foer",
    },
  ],
  "23:51": [
    {
      timeFragment: "eleven-fifty-one",
      quote:
        '"Due at Waterloo at eleven-fifty-one," panted Smith."That gives us thirty-nine minutes to get to the other side of the river and reach his hotel."',
      book: "The Mystery of Dr Fu Manchu",
      author: "Sax Rohmer",
    },
  ],
  "23:52": [
    {
      timeFragment: "eight minutes to midnight",
      quote:
        "It was eight minutes to midnight. Just nice time, I said to myself. Indoors, everything was quiet and in darkness. Splendid. I went to the bar and fetched a tumbler, a siphon of soda and a bottle of Glen Grant, took a weak drink and a pill, and settled down in the public dining-room to wait the remaining two minutes.",
      book: "The Green Man",
      author: "Kingsley Amis",
    },
  ],
  "23:53": [
    {
      timeFragment: "7 minutes to midnight",
      quote:
        "It was 7 minutes to midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs. Shears' house.",
      book: "The Curious Incident of the Dog in the Night-time ",
      author: "Mark Haddon",
    },
  ],
  "23:54": [
    {
      timeFragment: "11.54pm",
      quote:
        "His watch read 11.54pm Eastern Standard Time. Already it was nearly 6.00am in Rome. He had left a city frozen by a harsh January storm, after a bleak, wet Christmas season.",
      book: "Conclave",
      author: "Greg Tobin",
    },
  ],
  "23:55": [
    {
      timeFragment: "five minutes to midnight",
      quote:
        '"I am going to lock you in. It is-" he consulted his watch, "five minutes to midnight. Miss Granger, three turns should do it. Good luck."',
      book: "Harry Potter and the Prisoner of Azkaban ",
      author: "J. K. Rowling",
    },
    {
      timeFragment: "five minutes to twelve",
      quote:
        '"I looked at my watch. It wanted five minutes to twelve, when the premonitory symptoms of the working of the laudanum first showed themselves to me. At this time, no unpractised eyes would have detected any change in him. But, as the minutes of the new morning wore away, the swiftly-subtle progress of the influence began to show itself more plainly. The sublime intoxication of opium gleamed in his eyes; the dew of a stealthy perspiration began to glisten on his face. In five minutes more, the talk which he still kept up with me, failed in coherence."',
      book: "The Moonstone ",
      author: "Wilkie Collins",
    },
  ],
  "23:56": [
    {
      timeFragment: "four minutes to midnight",
      quote:
        "The human race is at the end of the line, the doomsday clock ticks on. It's stopped for a decade at four minutes to midnight, but there the hands still stand. Any minute now they'll begin to move again.",
      book: "Wicked Women",
      author: "Fay Weldon",
    },
  ],
  "23:57": [
    {
      timeFragment: "Eleven fifty-seven",
      quote:
        '"Wells looked out at the street. "What time is it?" he said. Chigurh raised his wrist and looked at his watch. "Eleven fifty-seven" he said. Wells nodded. By the old woman\'s calendar I\'ve got three more minutes."',
      book: "No Country for Old Men",
      author: "Cormac McCarthy",
    },
  ],
  "23:58": [
    {
      timeFragment: "one minute and seventeen seconds before midnight",
      quote:
        "Humans emerge one minute and seventeen seconds before midnight. The whole of our recorded history, on this scale, would be no more than a few seconds, a single human lifetime barely an instant.",
      book: "A Short History of Nearly Everything",
      author: "Bill Bryson",
    },
  ],
  "23:59": [
    {
      timeFragment: "a minute to midnight",
      quote:
        "At a minute to midnight, Roquenton was holding his wife's hand and giving her some last words of advice. On the stroke of midnight, she felt her companion's hand melt away inside her own.",
      book: "The Man Who Walked Through Walls",
      author: "Marcel Aym\u00e9",
    },
    {
      timeFragment: "new day was still a minute away",
      quote:
        "Chigurgh rose and picked up the empty casing off the rug and blew into it and put it in his pocket and looked at his watch. The new day was still a minute away.",
      book: "No Country for Old Men ",
      author: "Cormac McCarthy",
    },
  ],
};

export const developmentQuotes: Quote[] = [
  {
    timeFragment: "2:30 a.m.",
    quote:
      '"Get into the mood, Shirl!" Lew said. "The party\'s already started! Yippee! You dressed for a party, Harry?" "Yep. Something told me to put on dinner clothes when I went to bed tonight." "I\'m in mufti myself: white gloves and matching tennis shoes. But I\'m sorry to report that Jo is still in her Dr. Dentons. What\'re you wearing, Shirl?" "My old drum majorette\'s outfit. The one I wore to the State Finals. Listen, we can\'t tie up the phones like this." "Why not?" said Harry. "Who\'s going to call at 2:30 a.m. with a better idea? Yippee, to quote Lew, we\'re having a party! What\'re we serving, Lew?" "Beer, I guess. Haven\'t got any wine, have we, Jo?" "Just for cooking."',
    book: "The Night People ",
    author: "Jack Finney",
  },
];

export default quotes;
