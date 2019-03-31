function getGodUrl(god) {
    return `/compare/${god.type}/${god.id}`;
}

export {
    getGodUrl
};
