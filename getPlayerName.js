import fetch from 'node-fetch';

const appId = "";

async function getPlayerName(playerId) {
    const response = await fetch(`https://api.worldoftanks.eu/wot/account/info/?application_id=${appId}&account_id=${playerId}&fields=nickname`);
    const body = await response.json();
    return body.data[playerId].nickname;
}

async function main() {
    console.log(await getPlayerName(529737585));
}

main();
