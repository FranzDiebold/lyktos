import { getGodUrl } from './getGodUrl';

it('should return the correct god url', () => {
    const zeus = {
        "type": "greek",
        "id": "zeus",
        "name": "Zeus",
        "gender": "male",
        "emoji": "⚡",
        "role": "God of the sky, lightning, thunder, law, order, and justice",
        "symbols": ["⚡ Thunderbolt", "🦅 Eagle", "🐂 Bull", "🌳 Oak"],
        "description": "Zeus is the sky and thunder god in ancient Greek religion, who rules as king of the gods of Mount Olympus.",
        "parents": ["cronus", "rhea"],
        "counterpart": "jupiter"
    };

    expect(getGodUrl(zeus)).toEqual('/compare/greek/zeus');
});
