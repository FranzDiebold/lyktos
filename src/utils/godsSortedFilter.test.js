import { godsSortedFilter, godsCounterpartsSortedFilter } from './godsSortedFilter';

const zeus = {
    "type": "greek",
    "id": "zeus",
    "name": "Zeus",
    "gender": "male",
    "emoji": "⚡",
    "role": "God of the sky, lightning, thunder, law, order, and justice",
    "symbols": ["⚡ Thunderbolt", "🦅 Eagle", "🐂 Bull", "🌳 Oak"],
    "description": "Zeus is the sky and thunder god in ancient Greek religion, who rules as king of the gods of Mount Olympus. His name is cognate with the first element of his Roman equivalent Jupiter. His mythologies and powers are similar, though not identical, to those of Indo-European deities such as Indra, Jupiter, Perkūnas, Perun, and Thor. Zeus is the child of Cronus and Rhea, the youngest of his siblings to be born, though sometimes reckoned the eldest as the others required disgorging from Cronus's stomach. In most traditions, he is married to Hera, by whom he is usually said to have fathered Ares, Hebe, and Hephaestus. At the oracle of Dodona, his consort was said to be Dione, by whom the Iliad states that he fathered Aphrodite. Zeus was also infamous for his erotic escapades. These resulted in many divine and heroic offspring, including Athena, Apollo, Artemis, Hermes, Persephone, Dionysus, Perseus, Heracles, Helen of Troy, Minos, and the Muses.",
    "parents": ["cronus", "rhea"],
    "counterpart": "jupiter"
};
const hera = {
    "type": "greek",
    "id": "hera",
    "name": "Hera",
    "gender": "female",
    "emoji": "🐄",
    "role": "Goddess of marriage, women, childbirth, and family",
    "symbols": ["Pomegranate", "Peacock feather", "Diadem", "🐄 Cow", "Lily", "Lotus", "🐦 Cuckoo", "Panther", "Scepter", "Throne", "🦁 Lion"],
    "description": "Hera is the goddess of women, marriage, family, and childbirth in ancient Greek religion and myth, one of the Twelve Olympians and the sister-wife of Zeus. She is the daughter of the Titans Cronus and Rhea. Hera rules over Mount Olympus as queen of the gods. A matronly figure, Hera served as both the patroness and protectress of married women, presiding over weddings and blessing marital unions. One of Hera's defining characteristics is her jealous and vengeful nature against Zeus' numerous lovers and illegitimate offspring, as well as the mortals who cross her.",
    "parents": ["cronus", "rhea"],
    "counterpart": "juno"
};
const poseidon = {
    "type": "greek",
    "id": "poseidon",
    "name": "Poseidon",
    "gender": "male",
    "emoji": "🔱",
    "role": "God of the sea, earthquakes, soil, storms, and horses",
    "symbols": ["🔱 Trident", "🐟 Fish", "🐬 Dolphin", "🐎 Horse", "🐂 Bull"],
    "description": "Poseidon was one of the Twelve Olympians in ancient Greek religion and myth. He was god of the Sea and other waters; of earthquakes; and of horses. In pre-Olympian Bronze Age Greece, he was venerated as a chief deity at Pylos and Thebes. His Roman equivalent is Neptune. Poseidon was protector of seafarers, and of many Hellenic cities and colonies. In Homer's Iliad, Poseidon supports the Greeks against the Trojans during the Trojan War. In the Odyssey, during the sea-voyage from Troy back home to Ithaca, the Greek hero Odysseus provokes Poseidon's fury by blinding his son, the Cyclops Polyphemus, resulting in Poseidon punishing him with storms, the complete loss of his ship and companions, and a ten-year delay. Poseidon is also the subject of a Homeric hymn. In Plato's Timaeus and Critias, the island of Atlantis was Poseidon's domain.",
    "parents": ["cronus", "rhea"],
    "counterpart": "neptune"
};
const athena = {
    "type": "greek",
    "id": "athena",
    "name": "Athena",
    "gender": "female",
    "emoji": "🦉",
    "role": "Goddess of wisdom, handicraft, and war",
    "symbols": ["🦉 Owl", "🌳 Olive tree", "🐍 Snake", "Aegis", "Armour", "⛑️ Helmet", "Spear", "Gorgoneion"],
    "description": "Athena or Athene, often given the epithet Pallas, is an ancient Greek goddess associated with wisdom, handicraft, and warfare, who was later syncretized with the Roman goddess Minerva. Athena was regarded as the patron and protectress of various cities across Greece, particularly the city of Athens, from which she most likely received her name. She is usually shown in art wearing a helmet and holding a spear. Her major symbols include owls, olive trees, snakes, and the Gorgoneion. From her origin as an Aegean palace goddess, Athena was closely associated with the city. She was known as Polias and Poliouchos (both derived from polis, meaning 'city-state'), and her temples were usually located atop the fortified Acropolis in the central part of the city. The Parthenon on the Athenian Acropolis is dedicated to her, along with numerous other temples and monuments. As the patron of craft and weaving, Athena was known as Ergane. She was also a warrior goddess, and was believed to lead soldiers into battle as Athena Promachos. Her main festival in Athens was the Panathenaia, which was celebrated during the month of Hekatombaion in midsummer and was the most important festival on the Athenian calendar.",
    "parents": ["zeus"],
    "counterpart": "minerva"
};
const inputGodsList = [zeus, hera, poseidon, athena];

it('should not filter and not change sorting of gods if no/empty filterText is given', () => {
    expect(godsSortedFilter(inputGodsList, '')).toEqual(inputGodsList);
});

it('should completely filter out all gods if non-matching filterText is given', () => {
    expect(godsSortedFilter(inputGodsList, 'thisisanonmatchingfiltertext')).toEqual([]);
});

it('should filter and sort gods if matching filterText is given', () => {
    const resultList = godsSortedFilter(inputGodsList, 'ath');
    expect(resultList.length).toEqual(3);
    expect(resultList[0].id).toEqual('athena');
    expect(resultList[1].id).toEqual('hera');
    expect(resultList[2].id).toEqual('zeus');
});

it('should handle an empty input gods list', () => {
    expect(godsSortedFilter([], '')).toEqual([]);
});


const jupiter = {
    "type": "roman",
    "id": "jupiter",
    "name": "Jupiter",
    "gender": "male",
    "emoji": "⚡",
    "role": "God of the sky and lightning",
    "symbols": ["⚡ Lightning bolt", "🦅 Eagle", "🌳 Oak tree"],
    "description": "Jupiter, also known as Jove, was the god of the sky and thunder and king of the gods in Ancient Roman religion and mythology. Jupiter was the chief deity of Roman state religion throughout the Republican and Imperial eras, until Christianity became the dominant religion of the Empire. In Roman mythology, he negotiates with Numa Pompilius, the second king of Rome, to establish principles of Roman religion such as offering, or sacrifice. Jupiter is usually thought to have originated as an aerial god. His identifying implement is the thunderbolt and his primary sacred animal is the eagle, which held precedence over other birds in the taking of auspices and became one of the most common symbols of the Roman army (see Aquila). The two emblems were often combined to represent the god in the form of an eagle holding in its claws a thunderbolt, frequently seen on Greek and Roman coins. As the sky-god, he was a divine witness to oaths, the sacred trust on which justice and good government depend. Many of his functions were focused on the Capitoline Hill, where the citadel was located. In the Capitoline Triad, he was the central guardian of the state with Juno and Minerva. His sacred tree was the oak.",
    "parents": ["saturn", "ops"],
    "counterpart": "zeus"
};
const juno = {
    "type": "roman",
    "id": "juno",
    "name": "Juno",
    "gender": "female",
    "emoji": "🦆",
    "role": "Goddess of marriage and childbirth",
    "symbols": ["🦆 Goose"],
    "description": "Juno was an ancient Roman goddess, the protector and special counselor of the state. A daughter of Saturn, she is the wife of Jupiter and the mother of Mars, Vulcan, Bellona and Juventas. She is the Roman equivalent of Hera, queen of the gods in Greek mythology; like Hera, her sacred animal was the peacock. Her Etruscan counterpart was Uni, and she was said to also watch over the women of Rome. As the patron goddess of Rome and the Roman Empire, Juno was called Regina ('Queen') and was a member of the Capitoline Triad (Juno Capitolina), centered on the Capitoline Hill in Rome; it consisted of her, Jupiter, and Minerva, goddess of wisdom.",
    "parents": ["saturn"],
    "counterpart": "hera"
};
const neptune = {
    "type": "roman",
    "id": "neptune",
    "name": "Neptune",
    "gender": "male",
    "emoji": "🐎",
    "role": "God of the seas",
    "symbols": ["🐎 Horse", "🔱 Trident", "🐬 Dolphin", "🐂 Bull"],
    "description": "Neptune was the god of freshwater and the sea in Roman religion. He is the counterpart of the Greek god Poseidon. In the Greek-influenced tradition, Neptune was the brother of Jupiter and Pluto; the brothers presided over the realms of Heaven, the earthly world, and the Underworld. Salacia was his wife. Depictions of Neptune in Roman mosaics, especially those of North Africa, are influenced by Hellenistic conventions. Neptune was likely associated with fresh water springs before the sea. Like Poseidon, Neptune was worshipped by the Romans also as a god of horses, under the name Neptunus Equester, a patron of horse-racing.",
    "parents": ["saturn", "ops"],
    "counterpart": "poseidon"
};
const minerva = {
    "type": "roman",
    "id": "minerva",
    "name": "Minerva",
    "gender": "female",
    "emoji": "🦉",
    "role": "Goddess of poetry, medicine, wisdom, strategic warfare, commerce, weaving, and the crafts",
    "symbols": ["🦉 Owl", "🌳 Olive tree", "Serpent of Jupiter", "Parthenon", "Spear", "Spindle", "🕷️ Spider", "Hellebore"],
    "description": "Minerva was the Roman goddess of wisdom and strategic warfare and the sponsor of arts, trade, and strategy. From the second century BC onward, the Romans equated her with the Greek goddess Athena, though the Romans did not stress her relation to battle and warfare as the Greeks did. Following the Greek myths around Athena, she was born of Metis, who had been swallowed by Jupiter, and burst from her father's head, fully armed and clad in armor. Jupiter forcefully impregnated the titaness Metis, which resulted in her attempting to change shape (or shapeshift) to escape him. Jupiter then recalled the prophecy that his own child would overthrow him as he had Saturn, and in turn, Saturn had Caelus.",
    "parents": ["jupiter", "metis"],
    "counterpart": "athena"
};
const inputGodCounterpartsList = [
    {
        greek: zeus,
        roman: jupiter
    },
    {
        greek: hera,
        roman: juno
    },
    {
        greek: poseidon,
        roman: neptune
    },
    {
        greek: athena,
        roman: minerva
    },
];

it('should not filter and not change sorting of god counterparts if no/empty filterText is given', () => {
    expect(godsCounterpartsSortedFilter(inputGodCounterpartsList, '')).toEqual(inputGodCounterpartsList);
});

it('should completely filter out all god counterparts if non-matching filterText is given', () => {
    expect(godsCounterpartsSortedFilter(inputGodCounterpartsList, 'thisisanonmatchingfiltertext')).toEqual([]);
});

it('should filter and sort god counterparts if matching filterText is given', () => {
    const resultList = godsCounterpartsSortedFilter(inputGodCounterpartsList, 'ath');
    expect(resultList.length).toEqual(3);
    expect(resultList[0].greek.id).toEqual('athena');
    expect(resultList[1].greek.id).toEqual('hera');
    expect(resultList[2].greek.id).toEqual('zeus');
});

it('should handle an empty input god counterparts list', () => {
    expect(godsCounterpartsSortedFilter([], '')).toEqual([]);
});
