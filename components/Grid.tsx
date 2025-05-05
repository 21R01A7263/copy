import React from 'react'
import HeroCard from './HeroCard'; // Import HeroCard

const quips = {
  "adam_warlock": {
    "title": "Adam Warlock",
    "quip1": "You play with souls, Warlock? Let's see how yours tastes.",
    "quip2": "Soul Stone or not, your essence will feed our hunger, Warlock.",
    "quip3": "Cosmic awareness won't prepare you for what we're about to do."
  },
  "black_panther": {
    "title": "Black Panther",
    "quip1": "Vibranium won't stop me, T'Challa. I'll chew through it—and you.",
    "quip2": "The Black Panther becomes our prey tonight. Wakanda can't save you now.",
    "quip3": "Your ancestors watch as we feast on their chosen protector."
  },
  "black_widow": {
    "title": "Black Widow",
    "quip1": "Nice moves, Widow, but I'm hungry for more than just your tricks.",
    "quip2": "Red Room trained you well, but nothing prepares you for our darkness.",
    "quip3": "No bite in this Widow. Just a fragile human with cute toys."
  },
  "captain_america": {
    "title": "Captain America",
    "quip1": "That's for every lecture on 'honor'—boring me was your final mistake, Cap.",
    "quip2": "The symbol of America? We'll wear your shield as a trophy.",
    "quip3": "No super soldier serum can match our strength, Rogers."
  },
  "cloak_and_dagger": {
    "title": "Cloak and Dagger",
    "quip1": "Light and shadow? I consume both.",
    "quip2": "Two powers, one meal. Double the pleasure for us.",
    "quip3": "Your darkness is nothing compared to the void we bring."
  },
  "doctor_strange": {
    "title": "Doctor Strange",
    "quip1": "You might control the mystic arts, Strange, but you can't control me.",
    "quip2": "Sorcerer Supreme? Supreme disappointment when we tear through your barriers.",
    "quip3": "Your dimensions have no refuge from our hunger, Sorcerer."
  },
  "groot": {
    "title": "Groot",
    "quip1": "Big tree, Groot, but I'm the root of your problems.",
    "quip2": "I am Venom! You are kindling!",
    "quip3": "We'll feast on your sap and leave nothing but splinters."
  },
  "hawkeye": {
    "title": "Hawkeye",
    "quip1": "All those arrows, Clint, and you still couldn't hit the mark.",
    "quip2": "Perfect aim? Perfect fear when we're through with you.",
    "quip3": "No arrow in your quiver can pierce our hide, archer."
  },
  "hela": {
    "title": "Hela",
    "quip1": "All that death talk... and you still didn't see yours coming, Hela.",
    "quip2": "Goddess of Death meets creature of nightmares. We'll see who reigns.",
    "quip3": "Your underworld will become our feeding ground."
  },
  "bruce_banner": {
    "title": "Hulk",
    "quip1": "Big and green? I'm bigger and meaner.",
    "quip2": "We feed on your rage, Banner. The angrier you get, the stronger we become.",
    "quip3": "HULK SMASH? VENOM CONSUME!"
  },
  "invisible_woman": {
    "title": "Invisible Woman",
    "quip1": "Invisibility's cute, but it won't save you from me, Invisible Woman.",
    "quip2": "We smell your fear, Susan. Can't hide what we can sense.",
    "quip3": "Force fields are just appetizers before the main course."
  },
  "iron_fist": {
    "title": "Iron Fist",
    "quip1": "Your chi won't protect you from my bite, Danny.",
    "quip2": "The heart of the dragon? We'll tear it from your chest.",
    "quip3": "K'un-Lun taught you to channel power. We'll teach you to feel pain."
  },
  "iron_man": {
    "title": "Iron Man",
    "quip1": "Nice suit, Stark. Too bad it can't save you from this.",
    "quip2": "Your armor is our can opener, genius.",
    "quip3": "No A.I. can calculate how thoroughly we'll dismember you."
  },
  "jeff_the_land_shark": {
    "title": "Jeff",
    "quip1": "Cute shark. Bet you taste better than you bite.",
    "quip2": "Land shark meets space parasite. Evolution loses today.",
    "quip3": "We'll make fin soup from your remains, little one."
  },
  "loki": {
    "title": "Loki",
    "quip1": "Tricks won't save you, Loki. Nothing does when you're facing me.",
    "quip2": "God of Mischief? We are gods of consumption.",
    "quip3": "Your illusions fade, but our hunger is eternal."
  },
  "luna_snow": {
    "title": "Luna Snow",
    "quip1": "Cool powers, Luna. Let's see if they freeze my appetite.",
    "quip2": "Your music stops when we crush your vocal cords.",
    "quip3": "Ice powers meet our burning hunger. Guess which melts first?"
  },
  "magik": {
    "title": "Magik",
    "quip1": "Teleport all you want, Magik. I'll still find you.",
    "quip2": "Limbo itself won't shelter you from our reach.",
    "quip3": "That soul sword? Just another toothpick for us."
  },
  "magneto": {
    "title": "Magneto",
    "quip1": "Metal manipulation? My symbiote doesn't play by your rules, Magneto.",
    "quip2": "Pull all the metal you want. Our tendrils will still find your throat.",
    "quip3": "Master of magnetism? Master of nothing when we're done."
  },
  "mantis": {
    "title": "Mantis",
    "quip1": "Empathy won't stop me, Mantis. I feel nothing but hunger.",
    "quip2": "Touch us, empath. Feel the endless void of our appetite.",
    "quip3": "Your antennae will make fine snacks when we're through."
  },
  "mister_fantastic": {
    "title": "Mr. Fantastic",
    "quip1": "Stretch all you want, Reed. I'll still wrap you up.",
    "quip2": "Your elastic body will make an excellent cocoon for our offspring.",
    "quip3": "The smartest man alive? Not smart enough to avoid us."
  },
  "moon_knight": {
    "title": "Moon Knight",
    "quip1": "Multiple personalities? More flavors for me.",
    "quip2": "Your god Khonshu can't save you from our darkness.",
    "quip3": "We'll consume Marc, Steven, Jake—all of you at once."
  },
  "namor": {
    "title": "Namor",
    "quip1": "King of Atlantis? I'll drag you to deeper depths.",
    "quip2": "Half-human, half-Atlantean, all food to us.",
    "quip3": "Your kingdom will watch their ruler become our meal."
  },
  "peni_parker": {
    "title": "Peni Parker",
    "quip1": "Nice mech, Peni. Let's see how it handles a symbiote invasion.",
    "quip2": "Your spider is nothing compared to us. We are the perfect symbiosis.",
    "quip3": "That robot won't protect you when we seep through its circuits."
  },
  "psylocke": {
    "title": "Psylocke",
    "quip1": "Mind tricks won't save you, Psylocke. I'm all instinct.",
    "quip2": "Psychic knife? Our teeth are sharper than your thoughts.",
    "quip3": "We'll consume your mind and leave nothing but an empty shell."
  },
  "punisher": {
    "title": "Punisher",
    "quip1": "Guns and grit? I've got teeth and terror.",
    "quip2": "Your arsenal means nothing against our hide, Castle.",
    "quip3": "Your punishment ends. Our feast begins."
  },
  "rocket_raccoon": {
    "title": "Rocket Raccoon",
    "quip1": "Furry and armed? I'll declaw you, Rocket.",
    "quip2": "Experiments made you? We'll unmake you, rodent.",
    "quip3": "Your wisecracks end when our teeth close around your throat."
  },
  "scarlet_witch": {
    "title": "Scarlet Witch",
    "quip1": "Chaos magic? I thrive in chaos, Wanda.",
    "quip2": "Reality warping? We are your new reality.",
    "quip3": "Your hexes fade before our hunger, witch."
  },
  "spider_man": {
    "title": "Spider Man",
    "quip1": "Still sticking around, bug? Thought I squashed you hours ago, Spidey.",
    "quip2": "Parker! Your blood sings to us like no other.",
    "quip3": "Remember when we were one? We'll be reunited—inside our digestive tract."
  },
  "squirrel_girl": {
    "title": "Squirrel Girl",
    "quip1": "Squirrels? I'll snack on them and you.",
    "quip2": "Unbeatable? We'll test that theory with our jaws.",
    "quip3": "Your furry friends will make appetizers before the main course."
  },
  "star_lord": {
    "title": "Star Lord",
    "quip1": "Leader of misfits? I'll lead you to your end.",
    "quip2": "No mix tape can drown out the sound of your screams, Quill.",
    "quip3": "Half-celestial blood must taste divine. We can't wait to find out."
  },
  "storm": {
    "title": "Storm",
    "quip1": "Weather control? Let's see you forecast your defeat.",
    "quip2": "Lightning won't hurt us—we've consumed electricity before.",
    "quip3": "Goddess of storms? We are the hurricane that devours all."
  },
  "thor": {
    "title": "Thor",
    "quip1": "God of Thunder? I'm the storm you didn't see coming, Thor.",
    "quip2": "Asgardian flesh will sustain us for eons, Odinson.",
    "quip3": "Your hammer is nothing against the weight of our hunger."
  },
  "winter_soldier": {
    "title": "Winter Soldier",
    "quip1": "Metal arm? I'll rip it off and beat you with it.",
    "quip2": "Your Soviet programming is nothing compared to our alien instinct.",
    "quip3": "You've seen horrors, Barnes? You haven't met us yet."
  },
  "wolverine": {
    "title": "Wolverine",
    "quip1": "Healing factor? Let's test its limits, Logan.",
    "quip2": "You'll regenerate, Logan. Perfect for endless feeding.",
    "quip3": "Your adamantium bones will make fine toothpicks, runt."
  }
};

const Grid = () => {
  return (
    <div className="bg-zinc-900 grid grid-cols-2 gap-x-8 gap-y-6 p-4 max-w-100%"> 
      {Object.entries(quips).map(([key, value]) => (
        <HeroCard 
          key={key}
          img={key}
          title={value.title} 
          quip1={value.quip1} 
          quip2={value.quip2} 
          quip3={value.quip3} 
        />
      ))}
    </div>
  )
}

export default Grid