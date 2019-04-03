function filterByType(godsList, type) {
    return godsList.filter(god => god.type === type);
}

function getGodsMap(godsList) {
    return godsList.reduce((godsMap, god) => {
        godsMap[god.id] = god;
        return godsMap;
    }, {});
}

function getGodsCounterparts(greekGods, godsMap) {
    return greekGods.map(greekGod => {
        return {
            greek: greekGod,
            roman: godsMap[greekGod.counterpart],
        };
    });
}

function LoadGods() {
    return fetch('/data/gods-data.json')
        .then(response => response.json())
        .then(godsList => {
            const greekGods = filterByType(godsList, 'greek');
            const romanGods = filterByType(godsList, 'roman');
            const godsMap = getGodsMap(godsList);
            const godCounterparts = getGodsCounterparts(greekGods, godsMap);

            return {
                godsList,
                godCounterparts,
                godsMap,
                greekGods,
                romanGods,
            };
        })
        .catch(error => {
            console.log(`Error loading gods data: ${error}`);
            throw error;
        });
}

export default LoadGods;
