function getGodPairUrl(godPair) {
    return `/compare/${godPair.greek.id}-vs-${godPair.roman.id}`;
}

export {
    getGodPairUrl
};
