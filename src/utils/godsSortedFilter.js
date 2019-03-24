function getSuitabilityForProperty(god, propertyName, filterText) {
    const propertyValue = god[propertyName];
    if (Array.isArray(propertyValue)) {
        return propertyValue.reduce((suitability, currentPropertyValueItem) => {
            return suitability + currentPropertyValueItem.toLowerCase().includes(filterText) ? 1 : 0
        }, 0);
    } else {
        return propertyValue.toLowerCase().includes(filterText) ? 1 : 0;
    }
}

function getSuitability(god, filterText) {
    filterText = filterText ? filterText.toLowerCase() : '';

    return [
        ['type'],
        ['name'],
        ['role', 'emoji'],
        ['symbols', 'gender'],
        ['parents'],
        ['description', 'counterpart']
    ]
        .reduce((listSuitability, currentPropertyList, idx) => {
            return listSuitability + (Math.pow(8, -1 * idx) * currentPropertyList.reduce((suitability, currentProperty) => {
                return suitability + getSuitabilityForProperty(god, currentProperty, filterText);
                }, 0)
            );
            }, 0
        );
}

function godsSortedFilter(godsList, filterText) {
    if (! filterText) {
        return godsList;
    }

    return godsList
        .map(god => {
            return {
                god,
                suitability: getSuitability(god, filterText),
            };
        })
        .filter(({_, suitability}) => suitability > 0)
        .sort((godSuitabilityA, godSuitabilityB) => godSuitabilityB.suitability - godSuitabilityA.suitability)
        .map(({god, _}) => god);
}

function godsCounterpartsSortedFilter(godCounterparts, filterText) {
    if (! filterText) {
        return godCounterparts;
    }

    return godCounterparts
        .map(godPair => {
            return {
                godPair,
                suitability: getSuitability(godPair.greek, filterText) + getSuitability(godPair.roman, filterText),
            };
        })
        .filter(({_, suitability}) => suitability > 0)
        .sort((godPairSuitabilityA, godPairSuitabilityB) => godPairSuitabilityB.suitability - godPairSuitabilityA.suitability)
        .map(({godPair, _}) => godPair);
}

export {
    godsSortedFilter,
    godsCounterpartsSortedFilter,
};
