import { IAsset } from 'src/components/models';
import { v4 as uuid } from 'uuid';

export const NewAsset = (): IAsset => {
  return {
    id: uuid(),
    title: 'Custom Asset',
    type: 'Custom',
    items: [
      {
        text: 'Asset item text 1',
        marked: false,
      },
      {
        text: 'Asset item text 2',
        marked: false,
      },
      {
        text: 'Asset item text 3',
        marked: false,
      },
    ],
  };
};

export const Assets: { [index: string]: IAsset } = {
  Alchemist: {
    type: 'Path',
    title: 'Alchemist',

    items: [
      {
        text: '<p>When you create an elixir, choose an effect: Deftness (edge), audacity (heart), vigor (iron), slyness (shadow), or clarity (wits). Then, suffer -1 supply and roll +wits. On a strong hit, you create a single dose. The character who consumes the elixir must <em>Face Danger</em> +iron and score a hit, after which they add +1 when making moves with the related stat until their health, spirit, or momentum fall below +1. On a weak hit, as above, but suffer an additional -1 supply to create it.</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and you may choose two effects for a single dose, or create two doses of the same effect.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you prepare an elixir, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  'Animal Kin': {
    type: 'Path',
    title: 'Animal Kin',

    items: [
      {
        text: '<p>When you make a move to pacify, calm, control, aid, or fend off an animal (or an animal or beast companion), add +1 and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>You may add or upgrade an animal or beast companion asset for 1 fewer experience. Once you mark all their abilities, you may <em>Forge a Bond</em> with them and take an automatic strong hit. When you do, mark a bond twice and take 1 experience.</p>\n',
        marked: false,
      },
      {
        text: '<p>Once per fight, when you leverage your animal or beast companion to make a move, reroll any dice. On a hit, take +1 momentum.</p>\n',
        marked: false,
      },
    ],
  },
  Archer: {
    type: 'Combat Talent',
    title: 'Archer',
    subtitle: '<p>If you wield a bow&hellip;.</p>\n',

    items: [
      {
        text: '<p>When you <em>Secure an Advantage</em> by taking a moment to aim, choose your approach and add +1.\n  <ul><li> Trust your instincts: Roll +wits, and take +2 momentum on a strong hit.\n</li><li> Line up your shot: Roll +edge, and take +1 momentum on a hit.</li></ul></p>\n',
        marked: true,
      },
      {
        text: '<p>Once per fight, when you <em>Strike</em> or <em>Clash</em>, you may take extra shots and suffer -1 supply (decide before rolling). When you do, reroll any dice. On a hit, inflict +2 harm and take +1 momentum.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Resupply</em> by hunting, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Augur: {
    type: 'Ritual',
    title: 'Augur',

    items: [
      {
        text: '<p>When you summon a flock of crows and ask a single question, roll +wits. On a strong hit, you interpret their calls as a helpful omen. Envision the response (<em>Ask the Oracle</em> if unsure) and take +2 momentum. On a weak hit, the crows ignore your question and offer a clue to an unrelated problem or opportunity in this area. Envision what you learn (<em>Ask the Oracle</em> if unsure), and take +1 momentum.</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and the crows will also help guide you on the proper path. On a hit, add +1 on the next segment when you <em>Undertake a Journey</em>.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Awakening: {
    type: 'Ritual',
    title: 'Awakening',

    items: [
      {
        text: '<p>When you create a simulacrum, roll +heart. On a strong hit, your creation is given unnatural life. If it aids you as you make a move to assault or overcome an obstacle through strength, add +2. It has 3 health and suffers harm as appropriate, but is not a companion and may not be healed. At 0 health, it is dead. On a weak hit, as above, but if you roll a 1 on your action die when aided by your creation, you must <em>Face Danger</em> +heart to keep it from turning on you (as a formidable foe).</p>\n',
        marked: true,
      },
      {
        text: '<p>Your simulacrum has 6 health.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 3,
      min: 0,
    },
  },
  'Banner-Sworn': {
    type: 'Path',
    title: 'Banner-Sworn',
    subtitle: '<p>Once you mark a bond with a leader or faction&hellip;</p>\n',
    input: {
      label: 'Name',
      text: '',
    },
    items: [
      {
        text: '<p>When you <em>Swear an Iron Vow</em> to serve your leader or faction on a mission, you may reroll any dice. When you <em>Fulfill Your Vow</em> and mark experience, take +1 experience.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Sojourn</em> or <em>Make Camp</em> in the company of your banner-kin, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Enter the Fray</em> bearing your banner, add +1 and take +1 momentum on a hit. When you burn momentum while carrying your banner in combat, take +1 momentum after you reset.</p>\n',
        marked: false,
      },
    ],
  },
  'Battle-Scarred': {
    type: 'Path',
    title: 'Battle-Scarred',
    subtitle: '<p>Once you become maimed&hellip;</p>\n',

    items: [
      {
        text: '<p>You focus your energies: Reduce your edge or iron by 1 and add +2 to wits or heart, or +1 to each (to a maximum of +4).</p>\n',
        marked: false,
      },
      {
        text: '<p>You overcome your limitations: Reduce your maximum health by 1. Maimed no longer counts as a debility, and does not reduce your maximum momentum or reset value. When you <em>Endure Stress</em> +heart, take +1 momentum on a strong hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>You have stared down death before: When you are at 0 health and <em>Endure Harm</em>, you may roll +wits or +heart (instead of +health or +iron). If you do, take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Berserker: {
    type: 'Combat Talent',
    title: 'Berserker',
    subtitle: '<p>If you are clad only in animal pelts&hellip;</p>\n',

    items: [
      {
        text: '<p>When you <em>Secure an Advantage</em> or <em>Compel</em> by embodying your wild nature, add +1 and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Strike</em> or <em>Clash</em> by unleashing your rage (decide before rolling), inflict +1 harm on a hit. Then, choose one.</p>\n\n<ul>\n<li>Push yourself: <em>Endure Harm</em> (1 harm).</li>\n<li>Lose yourself: <em>Endure Stress</em> (1 stress).</li>\n</ul>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Endure Harm</em> in a fight, and your health is above 0, you may let the pain inflame your wildness (decide before rolling). If you then score a strong hit and choose to embrace the pain, take +momentum equal to your remaining health. A weak hit counts as a miss.</p>\n',
        marked: false,
      },
    ],
  },
  Bind: {
    type: 'Ritual',
    title: 'Bind',

    items: [
      {
        text: '<p>When you wear an animal pelt and dance in moonlight, roll +wits. On a strong hit, you or an ally may wear the pelt and add +1 when making moves with the related stat (wolf-edge; bear-iron; deer-heart; fox-shadow; boar-wits). If the wearer rolls a 1 on their action die while making a move using the pelt, the magic is spent. On a weak hit, as above, but the wilds call as you dance; <em>Endure Stress</em> (2 stress).</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and you may instead perform this ritual wearing the pelt of a beast. If you do, name the related stat and add +2 (instead of +1).</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  'Blade-Bound': {
    type: 'Path',
    title: 'Blade-Bound',
    subtitle:
      '<p>Once you mark a bond with a kin-blade, a sentient weapon imbued with the spirit of your ancestor&hellip;</p>\n',
    input: {
      label: 'Name',
      text: '',
    },
    items: [
      {
        text: '<p>When you <em>Enter the Fray</em> or <em>Draw the Circle</em> while wielding your kin-blade, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Gather Information</em> by listening to the whispers of your kin- blade, add +1 and take +2 momentum on a hit. Then, <em>Endure Stress</em> (2 stress).</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Strike</em> with your kin-blade to inflict savage harm (decide before rolling), add +1 and inflict +2 harm on a hit. Then, <em>Endure Stress</em> (2 stress).</p>\n',
        marked: false,
      },
    ],
  },
  Bonded: {
    type: 'Path',
    title: 'Bonded',

    items: [
      {
        text: '<p>When you make a move which gives you an add for sharing a bond, add +1 more.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you completely fill a box on your bonds progress track, envision what your relationships have taught you. Then, take 1 experience and +2 momentum.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you make a move in a crucial moment and score a miss, you may cling to thoughts of your bond-kin for courage or encouragement. If you do, reroll any dice. On another miss, in addition to the outcome of the move, you must mark shaken or corrupted. If both debilities are already marked, <em>Face Desolation</em>.</p>\n',
        marked: false,
      },
    ],
  },
  Brawler: {
    type: 'Combat Talent',
    title: 'Brawler',
    subtitle: '<p>If you are unarmed or fighting with a non-deadly weapon&hellip;</p>\n',

    items: [
      {
        text: '<p>When you <em>Secure an Advantage</em> +iron by engaging in close-quarters brawling (such as punching, tripping, or grappling), add +1. If you score a hit, you may also inflict 1 harm.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you use an unarmed attack or simple weapon to <em>Strike</em> with deadly intent, add +2 and inflict 2 harm on a hit (instead of 1). On a weak hit or miss, suffer -1 momentum (in addition to any other outcome of the move).</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Face Danger</em> or <em>Clash</em> against a brawling attack, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  'Cave Lion': {
    type: 'Companion',
    title: 'Cave Lion',
    subtitle: '<p>Your cat takes down its prey.</p>\n',
    input: {
      label: 'Name',
      text: '',
    },
    items: [
      {
        text: '<p>When your cat chases down big game, you may <em>Resupply</em> with +edge (instead of +wits). If you do, take +1 supply or +1 momentum on a strong hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Enter the Fray</em> or <em>Strike</em> by sending your cat to attack, roll +edge. On a hit, take +2 momentum.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Make Camp</em>, your cat is alert to trouble. If you or an ally choose to relax, take +1 spirit. If you focus, take +1 momentum.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 4,
      min: 0,
    },
  },
  Commander: {
    type: 'Path',
    title: 'Commander',

    items: [
      {
        text: '<p>You lead a warband with +4 strength. Roll +strength when you command your warband to <em>Face Danger</em>, <em>Secure an Advantage</em>, <em>Compel</em>, or <em>Battle</em>. When you face the negative outcome of any move, you may suffer -1 strength as the cost. When you <em>Make Camp</em> or <em>Sojourn</em> and score a hit, take +1 strength. While at 0 strength, this asset counts as a debility.</p>\n',
        marked: true,
      },
      {
        text: '<p>You may dispatch scouts from your warband to <em>Gather Information</em> or <em>Resupply</em>; if you do, roll +strength.</p>\n',
        marked: false,
      },
      {
        text: '<p>Once you <em>Forge a Bond</em> with your warband, take +1 momentum on a hit when you leverage a warband ability.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 4,
      min: 0,
    },
  },
  Communion: {
    type: 'Ritual',
    title: 'Communion',

    items: [
      {
        text: '<p>When you surround the remains of a recently deceased intelligent creature with lit candles, and summon its spirit, roll +heart. Add +1 if you share a bond. On a strong hit, the spirit appears and you may converse for a few minutes. Make moves as appropriate (add +1). On a weak hit, as above, but the spirit also delivers troubling news unrelated to your purpose. Envision what it tells you (<em>Ask the Oracle</em> if unsure) and <em>Endure Stress</em> (1 stress).</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and you may also commune with the long-dead.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Cutthroat: {
    type: 'Combat Talent',
    title: 'Cutthroat',
    subtitle: '<p>If you wield a dagger or knife&hellip;</p>\n',

    items: [
      {
        text: '<p>When you are in position to <em>Strike</em> at an unsuspecting foe, choose one (before rolling).\n  <ul><li> Add +2 and take +1 momentum on a hit.\n</li>  <li> Inflict +2 harm on a hit.</li></ul></p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Compel</em> someone at the point of your blade, or when you rely on your blade to <em>Face Danger</em>, add +1.</p>\n',
        marked: false,
      },
      {
        text: '<p>Once per fight, when you <em>Secure an Advantage</em> +shadow by performing a feint or misdirection, reroll any dice and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Dancer: {
    type: 'Path',
    title: 'Dancer',

    items: [
      {
        text: '<p>When you <em>Secure an Advantage</em> +edge by dancing for an audience, add +1 and take +2 momentum on a hit. On a strong hit, also add +2 (one time only) if you make a move to interact with someone in the audience.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Face Danger</em> +edge in a fight by nimbly avoiding your foe’s attacks, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you or an ally make a progress move and score a hit, you may perform a dance to commemorate the event. If you do, roll +edge. On a strong hit, you and each of your allies take +2 momentum and +1 spirit. On a weak hit, you take +1 momentum or +1 spirit, but your allies are unmoved.</p>\n',
        marked: false,
      },
    ],
  },
  Devotant: {
    type: 'Path',
    title: 'Devotant',
    input: {
      label: "God's Name",
      text: '',
    },
    items: [
      {
        text: '<p>When you say your daily prayers, you may <em>Secure an Advantage</em> by asking your god to grant a blessing. If you do, roll +your god’s stat. On a hit, take +2 momentum.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Swear an Iron Vow</em> to serve your god on a divine quest, you may roll +your god’s stat and reroll any dice. When you <em>Fulfill Your Vow</em> and mark experience, take +1 experience.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Sojourn</em> by sharing the word of your god, you may roll +your god’s stat. If you do, take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Divination: {
    type: 'Ritual',
    title: 'Divination',

    items: [
      {
        text: '<p>When you take a drop of blood from a willing subject (not yourself) and cast the rune-carved stones, roll +heart. On a strong hit, you may read the runes to gain insight about the subject and people close to them, including information you and the subject have no knowledge of. If you use the reading to <em>Gather Information</em>, <em>Compel</em>, or <em>Forge a Bond</em>, add +1. On a weak hit, as above, but the runes reveal their secrets only with extra time and focus; suffer -2 momentum.</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and your divination can also reveal information about the subject’s future.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Duelist: {
    type: 'Combat Talent',
    title: 'Duelist',
    subtitle: '<p>If you wield a bladed weapon in each hand&hellip;</p>\n',

    items: [
      {
        text: '<p>When you <em>Strike</em> or <em>Clash</em>, you may add +2. If you do (decide before rolling), inflict +1 harm on a strong hit and count a weak hit as a miss.</p>\n',
        marked: true,
      },
      {
        text: '<p>Once per fight, when you <em>Secure an Advantage</em> +edge by making a bold display of your combat prowess, you may reroll any dice.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Draw the Circle</em>, choose one (before rolling).\n  * Add+2.\n  * Take+2 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Empowered: {
    type: 'Path',
    title: 'Empowered',
    input: {
      label: 'Title/Lineage',
      text: '',
    },
    items: [
      {
        text: '<p>When you <em>Sojourn</em> and score a weak hit or miss, you may claim the rights of hospitality warranted by your title or lineage. If you do, roll all dice again and add +1. On a miss, you are refused, and your presumption causes significant new trouble.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you exert your title or lineage to <em>Compel</em>, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you forgo your title or lineage and <em>Forge a Bond</em> as an equal, or when you <em>Swear an Iron Vow</em> to serve someone of a lower station, add +1 and take +1 momentum or +1 spirit on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Fated: {
    type: 'Path',
    title: 'Fated',

    items: [
      {
        text: '<p>When you <em>Face Death</em> or <em>Face Desolation</em> while your epic background vow is unfulfilled, it is not yet your time. Instead of rolling, you may take an automatic strong hit. If you do, this asset counts as a debility (and you no longer have this protection) until you next <em>Reach a Milestone</em> on the background vow.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Reach a Milestone</em> on your background vow, take +2 momentum or +1 spirit.</p>\n',
        marked: false,
      },
      {
        text: '<p>For every two boxes filled on your background vow progress track, take 1 experience. When you <em>Fulfill Your Vow</em>, your fate is at hand. Envision your final sacrifice and reroll any dice.</p>\n',
        marked: false,
      },
    ],
  },
  Fletcher: {
    type: 'Combat Talent',
    title: 'Fletcher',

    items: [
      {
        text: '<p>When you <em>Secure an Advantage</em> by crafting arrows of fine quality, add +1. Then, take +1 supply or +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Resupply</em> by recovering or gathering arrows after a battle, add +2.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you craft a single arrow designated for a specific foe, envision the process and materials, and roll +wits. On a strong hit, take both. On a weak hit, choose one.</p>\n\n<ul>\n<li>Seeker: When a shooter uses the arrow to <em>Strike</em> or <em>Clash</em> against this foe, reroll any dice (one time only).</li>\n<li>Ravager: When a shooter uses the arrow to inflict harm against this foe, inflict +1d6 harm (one time only).</li>\n</ul>\n',
        marked: false,
      },
    ],
  },
  'Fortune Hunter': {
    type: 'Path',
    title: 'Fortune Hunter',

    items: [
      {
        text: '<p>When you <em>Swear an Iron Vow</em> to someone under the promise of payment, add +1 and give the quest a special mark. When you successfully <em>Fulfill Your Vow</em> to them, take +wealth equal to the rank of the quest. If you leverage wealth when making a move where resources are a factor, add +wealth and suffer -1 wealth.</p>\n',
        marked: true,
      },
      {
        text: '<p>When in a community or trading, you may suffer -1 wealth and take +2 supply.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Resupply</em> by scavenging or looting, and score a strong hit with a match, you may envision finding an object of value. If you do, take +1 supply (instead of +2) and +1 wealth.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 5,
      min: 0,
    },
  },
  'Giant Spider': {
    type: 'Companion',
    title: 'Giant Spider',
    subtitle: '<p>Your spider uncovers secrets.</p>\n',
    input: {
      label: 'Name',
      text: '',
    },
    items: [
      {
        text: '<p>When you <em>Secure an Advantage</em> by sending your spider to scout a place, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>You may <em>Face Danger</em> +shadow by sending your spider to secretly study someone. On a hit, the spider returns to reveal the target’s deepest fears through a reflection in its glassy eyes. Use this to <em>Gather Information</em> and reroll any dice.</p>\n',
        marked: false,
      },
      {
        text: '<p>When your spider sets a trap, add +1 as you <em>Enter the Fray</em> +shadow. On a strong hit, also inflict 2 harm.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 4,
      min: 0,
    },
  },
  Hawk: {
    type: 'Companion',
    title: 'Hawk',
    subtitle: '<p>Your hawk can aid you while it is aloft.</p>\n',
    input: {
      label: 'Name',
      text: '',
    },
    items: [
      {
        text: '<p>When you <em>Undertake a Journey</em>, or when you <em>Resupply</em> by hunting for small game, add +1.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Secure an Advantage</em> +edge using your hawk to harass and distract your foes, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Face Danger</em> +wits to detect an approaching threat, or when you <em>Enter the Fray</em> +wits against an ambush, add +2.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 3,
      min: 0,
    },
  },
  Herbalist: {
    type: 'Path',
    title: 'Herbalist',

    items: [
      {
        text: '<p>When you attempt to <em>Heal</em> using herbal remedies, and you have at least +1 supply, choose one (decide before rolling).</p>\n\n<ul>\n<li>Add +2.</li>\n<li>On a hit, take or give an additional +1 health.</li>\n</ul>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Heal</em> a companion, ally, or other character, and score a hit, take +1 spirit or +1 momentum.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Make Camp</em> and choose the option to partake, you can create a restorative meal. If you do, you and your companions take +1 health. Any allies who choose to partake also take +1 health, and do not suffer -supply.</p>\n',
        marked: false,
      },
    ],
  },
  Honorbound: {
    type: 'Path',
    title: 'Honorbound',

    items: [
      {
        text: '<p>When you <em>Turn the Tide</em>, envision how your vows give you strength in this moment. Then, when you make your move, add +2 (instead of +1) and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Secure an Advantage</em> or <em>Compel</em> by telling a hard truth, add +1 and take +1 momentum on a hit. On a weak hit or miss, envision how this truth complicates your current situation.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Fulfill Your Vow</em> and score a miss, you may reroll one challenge die. If you score a miss again, reduce your maximum spirit by 1. You may recover this lost spirit when you next <em>Fulfill Your Vow</em> and score a strong hit.</p>\n',
        marked: false,
      },
    ],
  },
  Horse: {
    type: 'Companion',
    title: 'Horse',
    subtitle: '<p>You and your horse ride as one.</p>\n',
    input: {
      label: 'Name',
      text: '',
    },
    items: [
      {
        text: '<p>When you <em>Face Danger</em> +edge using your horse’s speed and grace, or when you <em>Undertake a Journey</em>, add +1.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Enter the Fray</em> or <em>Secure an Advantage</em> +heart by charging into combat, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Strike</em> or <em>Clash</em> at close range while mounted, add +1 and inflict +1 harm on a hit.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 5,
      min: 0,
    },
  },
  Hound: {
    type: 'Companion',
    title: 'Hound',
    subtitle: '<p>Your hound is your steadfast companion.</p>\n',
    input: {
      label: 'Name',
      text: '',
    },
    items: [
      {
        text: '<p>When you <em>Gather Information</em> using your hound’s keen senses to track your quarry or investigate a scene, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Strike</em> or <em>Clash</em> alongside your hound and score a hit, inflict +1 harm or take +1 momentum.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Endure Stress</em> in the company of your hound, add +1.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 4,
      min: 0,
    },
  },
  Improviser: {
    type: 'Path',
    title: 'Improviser',

    items: [
      {
        text: '<p>When you <em>Check your Gear</em>, you may roll +wits (instead of +supply). If you do, envision how you make do with a clever solution, and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Secure an Advantage</em> or <em>Face Danger</em> by cobbling together an ad hoc tool or apparatus, add +1 and take +1 momentum on a hit. After rolling, you may also suffer -1 supply and add +1 more.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you throw caution to the wind and make an impulsive move in a risky situation, you may add +2. If you do, take +1 momentum on a strong hit, but count a weak hit as a miss.</p>\n',
        marked: false,
      },
    ],
  },
  Infiltrator: {
    type: 'Path',
    title: 'Infiltrator',

    items: [
      {
        text: '<p>When you make a move to breach, traverse, or hide within an area held by an enemy, add +1 and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Gather Information</em> within an enemy area to discover their positions, plans, or methods, or when you <em>Secure an Advantage</em> within that area through observation, you may roll +shadow (instead of +wits). If you do, take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Resupply</em> within an enemy area by scavenging or looting, you may roll +shadow (instead of +wits). If you do, take +1 momentum or +1 supply on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Invoke: {
    type: 'Ritual',
    title: 'Invoke',

    items: [
      {
        text: '<p>When you consume the mystical essence of your surroundings, roll +wits. On a strong hit, add the value of your action die to your essence track (max 6). You may then <em>Secure an Advantage</em> or <em>Face Danger</em> +essence to create minor mystical effects or illusions. If you do, suffer -1 essence and take +1 momentum on a hit. On a weak hit, as above, but capturing these energies is harrowing; <em>Endure Stress</em> (2 stress).</p>\n',
        marked: true,
      },
      {
        text: '<p>You may <em>Compel</em> +essence (and suffer -1 essence) through a show of power.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 essence on a hit.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 6,
      min: 0,
    },
  },
  Ironclad: {
    type: 'Combat Talent',
    title: 'Ironclad',
    subtitle: '<p>If you wear armor&hellip;</p>\n',

    items: [
      {
        text: '<p>When you equip or adjust your armor, choose one.</p>\n\n<ul>\n<li>Lightly armored: When you <em>Endure Harm</em> in a fight, add +1 and take +1 momentum on a hit.</li>\n<li>Geared for war: Mark encumbered. When you <em>Endure Harm</em> in a fight, add +2 and take +1 momentum on a hit.</li>\n</ul>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Clash</em> while you are geared for war, add +1.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Compel</em> in a situation where strength of arms is a factor, add +2.</p>\n',
        marked: false,
      },
    ],
  },
  Keen: {
    type: 'Ritual',
    title: 'Keen',

    items: [
      {
        text: '<p>When you hold a weapon and sing a keen for those it has killed, roll +heart. On a strong hit, the wielder inflicts +1 harm when they <em>Strike</em> or <em>Clash</em>. If they roll a 1 on their action die when making a move to inflict harm, the magic is spent. On a weak hit, as above, but the voices of those who were slain join in your song; <em>Endure Stress</em> (2 stress).</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and the wielder may also (one time only) add +1 and take +2 momentum on a hit when they <em>Draw the Circle</em>, <em>Enter the Fray</em>, or <em>Battle</em>.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Kindred: {
    type: 'Companion',
    title: 'Kindred',
    subtitle: '<p>Your friend stands by you.</p>\n',
    input: {
      label: 'Name',
      text: '',
    },
    items: [
      {
        text: '<p>When you make a move outside of combat aided by your companion’s expertise, add +1.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Clash</em> or <em>Battle</em> alongside your companion, or when you <em>Face Danger</em> against an attack by standing together, add +1.</p>\n',
        marked: false,
      },
      {
        text: '<p>Once you mark a bond with your companion, add +1 when you <em>Face Desolation</em> in their presence.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 4,
      min: 0,
    },
  },
  Leech: {
    type: 'Ritual',
    title: 'Leech',

    items: [
      {
        text: '<p>When you mark your hands or weapon with an intricate blood rune, roll +iron. On a strong hit, the rune thirsts for fresh blood. One time only, when you make a move to inflict harm, reroll any dice and inflict +2 harm on a hit. Then, for each point of harm inflicted, take +1 and allocate it as +health or +momentum. On a weak hit, as above, but this asset counts as a debility until the rune’s thirst is quenched.</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and you may also touch an ally or companion and let them take any remaining points as +health or +momentum.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Lightbearer: {
    type: 'Ritual',
    title: 'Lightbearer',

    items: [
      {
        text: '<p>When you focus on a source of light and capture its essence, roll +wits. On a strong hit, set your light track to +6. On a weak hit, make it +3. Then, when you make a move to overcome or navigate darkness, you may add +2 and suffer -1 light.</p>\n',
        marked: true,
      },
      {
        text: '<p>You may use your light to <em>Strike</em> or <em>Clash</em> against a dark-dwelling foe. Choose the amount of light to unleash, and roll +light (instead of +iron or +edge). Suffer -light equal to that amount. On a hit, your harm is 1+your unleashed light.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 6,
      min: 0,
    },
  },
  'Long-Arm': {
    type: 'Combat Talent',
    title: 'Long-Arm',
    subtitle: '<p>If you wield a staff&hellip;</p>\n',

    items: [
      {
        text: '<p>In your hands, a humble staff is a deadly weapon (2 harm). When you instead use it as a simple weapon (1 harm), you may <em>Strike</em> or <em>Clash</em> +edge (instead of iron). If you do, add +1 and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Secure an Advantage</em> +edge using your staff to disarm, trip, shove, or stun your foe, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Undertake a Journey</em> and score a strong hit, or if you accompany an ally who scores a strong hit on that move, your staff provides support and comfort in your travels; take +1 momentum.</p>\n',
        marked: false,
      },
    ],
  },
  Lorekeeper: {
    type: 'Path',
    title: 'Lorekeeper',

    items: [
      {
        text: '<p>You are the bearer of a mystical archive. When you <em>Secure an Advantage</em> or <em>Gather Information</em> using lore recalled from your studies, add +1. If you have a few hours to search the archive, add +2. On a hit, envision the obscure but helpful knowledge you put to use (<em>Ask the Oracle</em> if unsure), and take +1 momentum.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you learn of a site or object holding lost knowledge, and <em>Swear an Iron Vow</em> to recover it for the archive, reroll any dice. When you <em>Fulfill Your Vow</em> and mark experience, take +1 experience.</p>\n',
        marked: false,
      },
      {
        text: '<p>One time only, you may browse the archive’s forbidden depths. If you do, raise your wits by 1 and roll an action die. On 1-3, you must also mark corrupted or <em>Face Desolation</em> (ignoring momentum).</p>\n',
        marked: false,
      },
    ],
  },
  Loyalist: {
    type: 'Path',
    title: 'Loyalist',

    items: [
      {
        text: '<p>When you <em>Aid Your Ally</em>, add +1 and take +1 momentum on a hit. This is in addition to the benefits taken by your ally.</p>\n',
        marked: true,
      },
      {
        text: '<p>When an ally makes the <em>Endure Stress</em> move in your company, they add +1 and you take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you stand with your ally as they make a progress move, envision how you support them. Then, roll one challenge die. On a 1-9, your ally may replace one of their challenge dice with yours. On a 10, envision how you inadvertently undermine their action; your ally must replace their lowest challenge die with yours.</p>\n',
        marked: false,
      },
    ],
  },
  Mammoth: {
    type: 'Companion',
    title: 'Mammoth',
    subtitle: '<p>Your mammoth walks a resolute path.</p>\n',
    input: {
      label: 'Name',
      text: '',
    },
    items: [
      {
        text: '<p>When your mammoth travels with you as you <em>Undertake a Journey</em>, you may add +2 but suffer -1 momentum (decide before rolling).</p>\n',
        marked: false,
      },
      {
        text: '<p>When you make a move which requires you to roll +supply, you may instead roll +your mammoth’s health.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Strike</em> or <em>Clash</em> by riding your mammoth against a pack of foes, add +1 and inflict +1 harm on a hit.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 5,
      min: 0,
    },
  },
  Masked: {
    type: 'Path',
    title: 'Masked',
    subtitle: '<p>Once you mark a bond with elves, and are gifted a mask of precious elderwood&hellip;</p>\n',

    items: [
      {
        text: '<p>Choose your mask’s material.</p>\n\n<ul>\n<li>Thunderwood: Edge / Health</li>\n<li>Bloodwood: Iron / Health</li>\n<li>Ghostwood: Shadow / Spirit</li>\n<li>Whisperwood: Wits / Spirit</li>\n</ul>\n\n<p>When you wear the mask and make a move which uses its stat, add +1. If you roll a 1 on your action die, suffer -1 to the associated track (in addition to any other outcome of the move).</p>\n',
        marked: false,
      },
      {
        text: '<p>As above, and you may instead add +2 and suffer -2 (decide before rolling).</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Face Death</em> or <em>Face Desolation</em> while wearing the mask, you may roll +its stat (instead of +heart).</p>\n',
        marked: false,
      },
    ],
  },
  Oathbreaker: {
    type: 'Path',
    title: 'Oathbreaker',
    subtitle: '<p>Once you <em>Forsake Your Vow</em>&hellip;</p>\n',

    items: [
      {
        text: '<p>This asset counts as a debility. One time only, when you <em>Swear an Iron Vow</em> to redeem yourself (extreme or greater), give that vow a special mark. When you <em>Reach a Milestone</em> on the marked vow, take +2 momentum.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Secure an Advantage</em> or <em>Compel</em> by reaffirming your commitment to your marked vow, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Fulfill Your Vow</em> on your marked quest and score a hit, you find redemption and automatically activate this ability at no cost. You may then improve one of your stats by +1 and discard this asset.</p>\n',
        marked: false,
      },
    ],
  },
  Outcast: {
    type: 'Path',
    title: 'Outcast',

    items: [
      {
        text: '<p>When your supply is reduced to 0, suffer any remaining -supply as -momentum. Then, roll +wits. On a strong hit, you manage to scrape by and take +1 supply. On a weak hit, you may suffer -2 momentum in exchange for +1 supply. On a miss, you are <em>Out of Supply</em>.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Sojourn</em>, you may reroll any dice. If you do (decide before your first roll), your needs are few, but your isolation sets you apart from others. A strong hit counts as a weak hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Reach Your Destination</em> and score a strong hit, you recall or recognize something helpful about this place. Envision what it is, and take +2 momentum.</p>\n',
        marked: false,
      },
    ],
  },
  Owl: {
    type: 'Companion',
    title: 'Owl',
    subtitle: '<p>Your owl soars through the darkness.</p>\n',
    input: {
      label: 'Name',
      text: '',
    },
    items: [
      {
        text: '<p>If you <em>Resupply</em> at night by sending your owl to hunt, take +2 momentum on a hit. When you <em>Enter the Fray</em> +wits against an ambush in darkness, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you leverage your owl’s secret knowledge to perform a ritual, add +1 or take +1 momentum on a hit (decide before rolling).</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Face Death</em>, take your owl’s health as +momentum before you roll.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 3,
      min: 0,
    },
  },
  Pretender: {
    type: 'Path',
    title: 'Pretender',

    items: [
      {
        text: '<p>When you establish a false identity, roll +shadow. On a strong hit, you may add +2 when you make moves using this identity to deceive or influence others. If you roll a 1 on your action die when using your false identity, someone doubts you. Make appropriate moves to reassure them or prevent them from revealing the truth. On a weak hit, as above, but add +1 (instead of +2).</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and you may roll +shadow (instead of +heart) when you <em>Sojourn</em> under your false identity. If you do, take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Secure an Advantage</em> by revealing your true identity in a dramatic moment, reroll any dice.</p>\n',
        marked: false,
      },
    ],
  },
  Raven: {
    type: 'Companion',
    title: 'Raven',
    subtitle: '<p>Your raven heeds your call.</p>\n',
    input: {
      label: 'Name',
      text: '',
    },
    items: [
      {
        text: '<p>When you <em>Secure an Advantage</em> or <em>Face Danger</em> +shadow using your raven to perform trickery (such as creating a distraction or stealing a small object) add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Face Death</em>, add +2 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When your raven carries messages for you, you may <em>Secure an Advantage</em>, <em>Gather Information</em>, or <em>Compel</em> from a distance.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 2,
      min: 0,
    },
  },
  Revenant: {
    type: 'Path',
    title: 'Revenant',
    subtitle: '<p>Once you <em>Face Death</em> and return to the world of the living&hellip;</p>\n',

    items: [
      {
        text: '<p>When you are at 0 health, and <em>Endure Harm</em> or <em>Face Death</em>, add +1. If you then burn momentum to improve your result, envision what bond or vow binds you to this world, and take +2 momentum after you reset.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you make a move to investigate, oppose, or interact with a horror, spirit, or other undead being, add +1.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you bring death to your foe to <em>End the Fight</em>, you may burn momentum to cancel one (not both) of the challenge dice if your momentum is greater than the value of that die. If you do, <em>Endure Stress</em> (2 stress).</p>\n',
        marked: false,
      },
    ],
  },
  Rider: {
    type: 'Path',
    title: 'Rider',
    subtitle: '<p>If you are with your horse companion&hellip;</p>\n',

    items: [
      {
        text: '<p>When you <em>Heal</em> your horse, or when you <em>Face Danger</em> to calm or encourage it, add +1 and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Undertake a Journey</em>, you may push your horse harder and add +1 (after rolling). If you do, make the <em>Companion Endure Harm</em> move (1 harm).</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Secure an Advantage</em> +wits by sizing up a perilous situation from the saddle, you are one with your horse’s instincts. Add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Ritualist: {
    type: 'Path',
    title: 'Ritualist',
    subtitle:
      '<p>Once you <em>Fulfill Your Vow</em> (formidable or greater) in service to an elder mystic, and <em>Forge a Bond</em> to train with them&hellip;</p>\n',

    items: [
      {
        text: '<p>When you <em>Secure an Advantage</em> to ready yourself for a ritual, envision how you prepare. Then, add +1 and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you perform a ritual, you may suffer -1 supply and add +1 (decide before rolling).</p>\n',
        marked: false,
      },
      {
        text: '<p>When you tattoo the essence of a new ritual onto your skin, envision the mark you create. You may then purchase and upgrade that ritual asset for 1 fewer experience.</p>\n',
        marked: false,
      },
    ],
  },
  Scry: {
    type: 'Ritual',
    title: 'Scry',

    items: [
      {
        text: '<p>When you look into flames to study a remote person or location, roll +shadow. You or someone with you must have knowledge of the target. On a strong hit, you may <em>Gather Information</em> through observation using +shadow or +wits. On a weak hit, as above, but the flames are hungry; choose one to sacrifice.\n  * Your blood: <em>Endure Harm</em> (2 harm).\n  * Something precious: <em>Endure Stress</em> (2 stress).\n  * Provisions: Suffer -2 supply.</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and you may instead study a past event.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  'Shadow-Kin': {
    type: 'Path',
    title: 'Shadow-Kin',
    subtitle: '<p>Once you become corrupted&hellip;</p>\n',

    items: [
      {
        text: '<p>You harden your heart: Reduce your heart stat by 1 and add up to +2 to shadow (to a maximum of +4).</p>\n',
        marked: false,
      },
      {
        text: '<p>You are attuned to the realms of shadow: When you perform a ritual, add +1.</p>\n',
        marked: false,
      },
      {
        text: '<p>You know the sly ways of death: When you <em>Face Death</em>, you may roll +shadow (instead of +heart). On a weak hit, if you choose to undertake a deathbound quest, you may roll +shadow (instead of +heart) and reroll any dice as you <em>Swear an Iron Vow</em>. When you <em>Fulfill Your Vow</em> on that quest and and mark experience, take +2 experience.</p>\n',
        marked: false,
      },
    ],
  },
  'Shadow-Walk': {
    type: 'Ritual',
    title: 'Shadow-Walk',

    items: [
      {
        text: '<p>When you cloak yourself with the gossamer veil of the shadow realms, roll +shadow. On a strong hit, take +1 momentum. Then, reroll any dice (one time only) when you make a move by ambushing, hiding, or sneaking. On a weak hit, as above, but the shadows try to lead you astray. You must first <em>Face Danger</em> to find your way.</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and you may also travel along the hidden paths of the shadow realms to <em>Undertake a Journey</em> using +shadow (instead of +wits). If you do, <em>Endure Stress</em> (1 stress) and mark progress twice on a strong hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  'Shield-Bearer': {
    type: 'Combat Talent',
    title: 'Shield-Bearer',
    subtitle: '<p>If you wield a shield&hellip;</p>\n',

    items: [
      {
        text: '<p>When you <em>Face Danger</em> using your shield as cover, add +1. When you <em>Clash</em> in close quarters, take +1 momentum on a strong hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you paint your shield with a meaningful symbol, envision what you create. Then, if you <em>Endure Stress</em> as you face off against a fearsome foe, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When forced to <em>Endure Harm</em> in a fight, you may instead sacrifice your shield and ignore all harm. If you do, the shield is destroyed. Once per fight, you also take initiative when you sacrifice your shield to avoid harm.</p>\n',
        marked: false,
      },
    ],
  },
  Sighted: {
    type: 'Path',
    title: 'Sighted',

    items: [
      {
        text: '<p>When you <em>Face Danger</em> or <em>Gather Information</em> to identify or detect mystic forces, add +1 and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Compel</em>, <em>Forge a Bond</em>, or <em>Test Your Bond</em> with a fellow mystic or mystical being, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Secure an Advantage</em> by studying someone or something in a charged situation, add +1 and take +1 momentum on a hit. When you also pierce the veil to explore deeper truths (decide before rolling), you may reroll any dice. If you do, count a weak hit as a miss.</p>\n',
        marked: false,
      },
    ],
  },
  Skirmisher: {
    type: 'Combat Talent',
    title: 'Skirmisher',
    subtitle: '<p>If you wield a spear&hellip;</p>\n',

    items: [
      {
        text: '<p>When you <em>Face Danger</em> by holding a foe at bay using your spear’s reach, roll +iron or +edge. If you score a hit, you may&hellip;\n  * Iron: <em>Strike</em> (if you have initiative) or <em>Clash</em> now, and add +1.\n  * Edge: Take+1 momentum.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Strike</em> in close combat, you may attempt to drive your spear home (decide before rolling). If you do, add +1 and inflict +2 harm on a hit. If you score a hit and the fight continues, <em>Face Danger</em> +iron to recover your spear.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Secure an Advantage</em> by bracing your spear against a charging foe, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Slayer: {
    type: 'Path',
    title: 'Slayer',

    items: [
      {
        text: '<p>When you <em>Gather Information</em> by tracking a beast or horror, or when you <em>Secure an Advantage</em> by readying yourself for a fight against them, add +1 and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Swear an Iron Vow</em> to slay a beast or horror, you may reroll any dice. When you <em>Fulfill Your Vow</em> and mark experience, take +1 experience.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you slay a beast or horror (at least formidable), you may take a trophy and choose one.</p>\n\n<ul>\n<li>Power a ritual: When you or an ally make a ritual move, reroll any dice (one time only).</li>\n<li>Prove your worth: When you <em>Sojourn</em>, reroll any dice (one time only).</li>\n</ul>\n',
        marked: false,
      },
    ],
  },
  Slinger: {
    type: 'Combat Talent',
    title: 'Slinger',
    subtitle: '<p>If you wield a sling&hellip;</p>\n',

    items: [
      {
        text: '<p>When launched from a sling, a simple stone inflicts deadly harm (2 harm). When you <em>Enter the Fray</em> by barraging your foe with sling-bullets, inflict harm on a strong hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Strike</em> by launching stones at an advancing foe, you may choose one (before rolling).\n  * Hold them back: Retain initiative on a weak hit, but inflict only 1 harm.\n  * Hit them hard: Inflict +1 harm on a hit, but suffer -1 momentum.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Secure an Advantage</em> by preparing stones of a special quality or material, add +1. Then, take +1 momentum or +1 supply on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  'Spirit-Bound': {
    type: 'Path',
    title: 'Spirit-Bound',

    items: [
      {
        text: '<p>You are haunted by someone whose death you caused through your actions or failures. When you consult with their spirit to <em>Secure an Advantage</em> or <em>Gather Information</em>, add +1 and take +2 momentum on a hit. On a weak hit, also <em>Endure Stress</em> (1 stress).</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Face Death</em> guided by the spirit, add +1. On a strong hit, envision what you learn and take 1 experience.</p>\n',
        marked: false,
      },
      {
        text: '<p>One time only, when you successfully <em>Fulfill Your Vow</em> (formidable or greater) in service to the spirit, choose one.</p>\n\n<ul>\n<li>Let them go: Take 2 experience for each marked ability and discard this asset.</li>\n<li>Deepen your connection: Add +1 more when you leverage this asset.</li>\n</ul>\n',
        marked: false,
      },
    ],
  },
  Storyweaver: {
    type: 'Path',
    title: 'Storyweaver',

    items: [
      {
        text: '<p>When you <em>Secure an Advantage</em>, <em>Compel</em>, or <em>Forge a Bond</em> by sharing an inspiring or enlightening song, poem, or tale, envision the story you tell. Then, add +1 and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Make Camp</em> and choose the option to relax, you may share a story with your allies or compose a new story if alone. If you do, envision the story you tell and take +1 spirit or +1 momentum. Any allies who choose to relax in your company may also take +1 spirit or +1 momentum.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Sojourn</em> within a community with which you share a bond, add +2 (instead of +1).</p>\n',
        marked: false,
      },
    ],
  },
  Sunderer: {
    type: 'Combat Talent',
    title: 'Sunderer',
    subtitle: '<p>If you wield an axe&hellip;</p>\n',

    items: [
      {
        text: '<p>When you <em>Strike</em> or <em>Clash</em> in close quarters, you may suffer -1 momentum and inflict +1 harm on a hit (decide before rolling).</p>\n',
        marked: true,
      },
      {
        text: '<p>When you have your axe in hand, and use the promise of violence to <em>Compel</em> or <em>Secure an Advantage</em>, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you make a tribute to a fallen foe (formidable or greater) by carving a rune in the haft of your axe, roll +heart. On a strong hit, inflict +1d6 harm (one time only) when you <em>Strike</em> or <em>Clash</em>. On a weak hit, as above, but this death weighs on you; <em>Endure Stress</em> (2 stress).</p>\n',
        marked: false,
      },
    ],
  },
  Sway: {
    type: 'Ritual',
    title: 'Sway',

    items: [
      {
        text: '<p>When you speak a person’s name three times to the wind, roll +wits. On a strong hit, the wind whispers of this person’s need. Envision what you hear (<em>Ask the Oracle</em> if unsure). If you use this information or fulfill this need when you <em>Compel</em> them, you may reroll any dice (one time only). On a weak hit, as above, but this person’s need creates a troubling dilemma or complication; <em>Endure Stress</em> (1 stress).</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and if you score a strong hit when you <em>Compel</em>, you may also reroll any dice (one time only) when you <em>Gather Information</em> from this person.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Swordmaster: {
    type: 'Combat Talent',
    title: 'Swordmaster',
    subtitle: '<p>If you wield a sword&hellip;</p>\n',

    items: [
      {
        text: '<p>When you <em>Strike</em> or <em>Clash</em> and burn momentum to improve your result, inflict +2 harm. If the fight continues, add +1 on your next move.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Clash</em> and score a strong hit, add +1 if you immediately follow with a <em>Strike</em>.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Swear an Iron Vow</em> by kneeling and grasping your sword’s blade, add +1 and take +1 momentum on a hit. If you let the edge draw blood from your hands, <em>Endure Harm</em> (1 harm) in exchange for an additional +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Talisman: {
    type: 'Ritual',
    title: 'Talisman',

    items: [
      {
        text: '<p>When you fashion a charm, envision it and name the specific person or creature it protects against. Then roll +wits. On a strong hit, when the wearer opposes the target through a move, add +2. If a 1 is rolled on the action die while making a move using the charm, the magic is spent. On a weak hit, as above, but the wearer adds +1 when making a move (instead of +2).</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and you may instead fashion a charm which aids the wearer against all supernatural threats, such as mystic rituals or horrors.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Tether: {
    type: 'Ritual',
    title: 'Tether',

    items: [
      {
        text: '<p>When you commune with the spirits of a place, roll +heart. If you share a bond with someone there, add +1. On a strong hit, you are tethered. When you <em>Undertake a Journey</em> to return, you may roll +spirit or +heart (instead of +wits), and take +1 momentum on a hit. When you <em>Reach Your Destination</em>, take +2 momentum on a strong hit. The tether is lost if you perform this ritual elsewhere, or when you <em>Face Desolation</em>. On a weak hit, as above, but the spirits reveal a disturbing aspect of the place; <em>Endure Stress</em> (2 stress).</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and you may also reroll any dice when you <em>Sojourn</em> in the tethered place.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  'Thunder-Bringer': {
    type: 'Combat Talent',
    title: 'Thunder-Bringer',
    subtitle: '<p>If you wield a mighty hammer&hellip;</p>\n',

    items: [
      {
        text: '<p>When you <em>Face Danger</em>, <em>Secure an Advantage</em>, or <em>Compel</em> by hitting or breaking an inanimate object, add +1 and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Strike</em> a foe to knock them back, stun them, or put them off balance, inflict 1 harm (instead of 2) and take +2 momentum on a hit. On a strong hit, you also create an opening and add +1 on your next move.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Turn the Tide</em>, you may <em>Strike</em> with all the fury and power you can muster. If you do (decide before rolling), you may reroll any dice and inflict +2 harm on a strong hit, but count a weak hit as a miss.</p>\n',
        marked: false,
      },
    ],
  },
  Totem: {
    type: 'Ritual',
    title: 'Totem',

    items: [
      {
        text: '<p>When you hold a totem of your animal or beast companion and focus on it, roll +heart. On a strong hit, you are bound together. Add +1 and take +1 momentum on a hit when you use a companion ability. If you roll a 1 on your action die when using a companion ability, the magic is spent. On a weak hit, as above, but creating this connection is unsettling; <em>Endure Stress</em> (1 stress).</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and you may also perceive the world through your companion’s senses while you make moves aided by them (even when you are apart).</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Trickster: {
    type: 'Path',
    title: 'Trickster',

    items: [
      {
        text: '<p>When you <em>Face Danger</em>, <em>Secure an Advantage</em>, or <em>Compel</em> by lying, bluffing, stealing, or cheating, add +1.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Gather Information</em> by investigating a devious scheme, you may roll +shadow (instead of +wits). If you do, take +2 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Forge a Bond</em> for a relationship founded on a lie, choose one.</p>\n\n<ul>\n<li>Keep your secret: Roll +shadow (instead of +heart).</li>\n<li>Reveal the truth: Roll +heart. On a strong hit, mark a bond twice and take 1 experience. A weak hit counts as a miss.</li>\n</ul>\n',
        marked: false,
      },
    ],
  },
  Veteran: {
    type: 'Path',
    title: 'Veteran',

    items: [
      {
        text: '<p>When you burn momentum to improve your result in combat, envision how your hard-won fighting experience gives you the upper hand. Then, take +1 momentum after you reset, and add +1 when you make your next move. Once per fight, you also take initaitive when burning momentum to improve a miss to a weak hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Swear an Iron Vow</em> to someone who fought beside you, or <em>Forge a Bond</em> with them, add +2 and take +2 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Resupply</em> by looting the dead on a field of battle, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Visage: {
    type: 'Ritual',
    title: 'Visage',

    items: [
      {
        text: '<p>When you paint yourself in blood and ash, roll +wits. On a strong hit, you may add +2 and take +1 momentum on a hit when you <em>Secure an Advantage</em> or <em>Compel</em> using fear or intimidation. If you roll a 1 on your action die when making a move aided by your visage, the magic is spent. On a weak hit, as above, but the blood must be your own; <em>Endure Harm</em> (2 harm).</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and you may also add +1 when you <em>Strike</em>, <em>Clash</em>, or <em>Battle</em>.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Ward: {
    type: 'Ritual',
    title: 'Ward',

    items: [
      {
        text: '<p>When you walk a wide circle, sprinkling the ground with salt, roll +wits. On a strong hit, choose two. On a weak hit, choose one.</p>\n\n<ul>\n<li>When a foe first crosses the boundary, take +1 momentum.</li>\n<li>When you first inflict harm against a foe within the boundary, inflict +1 harm.</li>\n<li>Your ward is ‘likely’ (<em>Ask the Oracle</em>) to trap a foe within the boundary.</li>\n</ul>\n',
        marked: true,
      },
      {
        text: '<p>As above, and improve the effect of your ward (+2 momentum, +2 harm, and ‘almost certain’).</p>\n',
        marked: false,
      },
      {
        text: '<p>When you perform this ritual, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Waterborn: {
    type: 'Path',
    title: 'Waterborn',

    items: [
      {
        text: '<p>When you <em>Face Danger</em>, <em>Gather Information</em>, or <em>Secure an Advantage</em> related to your knowledge of watercraft, water travel, or aquatic environments or creatures, add +1 and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Undertake a Journey</em> by boat or ship, add +1. On a strong hit, also choose one.</p>\n\n<ul>\n<li>The wind is at your back: Mark progress twice.</li>\n<li>Find safe anchor: <em>Make Camp</em> now and reroll any dice.</li>\n<li>Reap the bounty: <em>Resupply</em> now and reroll any dice.</li>\n</ul>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Enter the Fray</em> aboard a boat or ship, reroll any dice.</p>\n',
        marked: false,
      },
    ],
  },
  Wayfinder: {
    type: 'Path',
    title: 'Wayfinder',

    items: [
      {
        text: '<p>When you <em>Undertake a Journey</em>, take +1 momentum on a strong hit. If you burn momentum to improve your result, also take +1 momentum after you reset.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Secure an Advantage</em> or <em>Gather Information</em> by carefully surveying the landscape or scouting ahead, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Swear an Iron Vow</em> to safely guide someone on a perilous journey, you may reroll any dice. When you <em>Fulfill Your Vow</em> and mark experience, take +1 experience.</p>\n',
        marked: false,
      },
    ],
  },
  Weaponmaster: {
    type: 'Path',
    title: 'Weaponmaster',
    subtitle:
      '<p>Once you <em>Fulfill Your Vow</em> (formidable or greater) in service to a seasoned warrior, and <em>Forge a Bond</em> to train with them&hellip;</p>\n',

    items: [
      {
        text: '<p>When you <em>Secure an Advantage</em> by sizing up your foe in a fight, or in a charged situation which may lead to a fight, add +1 and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you study or train in a new weapon or technique, you may obtain and upgrade that combat talent for 1 fewer experience.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Turn the Tide</em> with a sudden change of weapon or technique, and your next move is a <em>Strike</em>, add +1 and inflict +2 harm on a strong hit.</p>\n',
        marked: false,
      },
    ],
  },
  Wildblood: {
    type: 'Path',
    title: 'Wildblood',

    items: [
      {
        text: '<p>When you <em>Face Danger</em>, <em>Secure an Advantage</em>, or <em>Gather Information</em> using your knowledge of tracking, woodcraft, or woodland creatures, add +1.</p>\n',
        marked: true,
      },
      {
        text: '<p>When you <em>Face Danger</em> or <em>Secure an Advantage</em> by hiding or sneaking in the woodlands, add +1 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Make Camp</em> in the woodlands, you may roll +wits (instead of +supply). If you do, you and your allies each choose 1 more option on a hit.</p>\n',
        marked: false,
      },
    ],
  },
  Wright: {
    type: 'Path',
    title: 'Wright',
    input: {
      label: 'Specialty',
      text: '',
    },
    items: [
      {
        text: '<p>When you <em>Secure an Advantage</em> by crafting a useful item using your specialty, or when you <em>Face Danger</em> to create or repair an item in a perilous situation, add +1 and take +1 momentum on a hit.</p>\n',
        marked: true,
      },
      {
        text: '<p>As above, and you may suffer -1 supply (after rolling) to add an additional +1.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you give the item you create as a gift to commemorate an important event or relationship, you may (one time only) reroll any dice when you <em>Compel</em>, <em>Forge a Bond</em>, or <em>Test Your Bond</em>.</p>\n',
        marked: false,
      },
    ],
  },
  'Young Wyvern': {
    type: 'Companion',
    title: 'Young Wyvern',
    subtitle: '<p>Your wyvern won’t devour you. For now.</p>\n',
    input: {
      label: 'Name',
      text: '',
    },
    items: [
      {
        text: '<p>When you <em>Undertake a Journey</em> and score a hit, you may suffer -1 supply in exchange for +2 momentum.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you make the <em>Companion Endure Harm</em> move for your wyvern, add +2 and take +1 momentum on a hit.</p>\n',
        marked: false,
      },
      {
        text: '<p>When you <em>Strike</em> by commanding your wyvern to attack, roll +heart. Your wyvern inflicts 3 harm on a hit.</p>\n',
        marked: false,
      },
    ],
    track: {
      value: 0,
      max: 5,
      min: 0,
    },
  },
};
