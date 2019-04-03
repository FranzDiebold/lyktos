import { getGodPairUrl } from './getGodPairUrl';

it('should return correct god pair url', () => {
    const zeus =     {
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
    const pair = {
        greek: zeus,
        roman: jupiter,
    };

    expect(getGodPairUrl(pair)).toEqual('/compare/zeus-vs-jupiter');
});
