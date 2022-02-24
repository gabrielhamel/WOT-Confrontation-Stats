import fetch from 'node-fetch';
import ExcelJs from 'exceljs';

const appId = "";
let chiefNb = 0;

async function player_has_chieftain(player_id) {
  const request = fetch(`https://api.worldoftanks.eu/wot/tanks/stats/?application_id=${appId}&account_id=${player_id}&tank_id=${57937}&fields=all.battles`);
  const body = await (await request).json();
  try {
    const all = body.data[player_id][0].all;
    if (all.battles == 0) {
      console.log(`player ${player_id} has chieftain but with 0 battles`);
    }
    chiefNb++;
    return 'Yes';
  } catch (e) {
    return 'No';
  }
}

async function get_players(page, page_size) {
  const request = fetch(`https://worldoftanks.eu/en/clanwars/rating/alley/users/?event_id=confrontation&front_id=confrontation_bg&page=${page}&page_size=${page_size}&user=&clan=`, {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrftoken": "hXuUQ99ojHet0IrQuLCHVaIVGrR3MtsF",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "uvt=1; csrftoken=hXuUQ99ojHet0IrQuLCHVaIVGrR3MtsF; _ym_uid=1627382089536185388; cm.internal.bs_id=e981fd90-68a5-47a3-7d03-53c6baa20d4b; cm.internal.spa_id=502442366; cm.internal.realm=eu; _rdt_uuid=1627411236118.950556dc-f74d-4ef9-adaf-04e1bab3c421; __qca=P0-1246260385-1627411236364; _rollupGa=GA1.2.1284710042.1628629110; tmr_lvid=33404597a3cbe24d48da8f4247873a54; tmr_lvidTS=1628629110399; tmr_reqNum=5; product_lvl=GA1.2.845474289.1627382031; wot_wgnet_lvl=GA1.2.845474289.1627382031; _cq_duid=1.1633991804.eCNgL0HeQCanba5O; _scid=a4c365a5-7450-4a27-addf-e9a741edfcf3; wgc-wot-portal=1; cto_bundle=9DgP7F9MVEV6d3JMc0ZxcE9xMHRMc3hKYklIb2lKaFNxTDc2RnRROWg2SkNKRkVvaWduWEFWaUlyd2s1c2E1TXZramRHdllxUGFMQnBDdFNVdFJ2JTJGU2w2RTFyJTJCckNlNmgxNFE5TFVNaUdwazdaaHlFeW8zcTFhS2JtdFR3Sm5MdzhuTHZTUjRQUGFyUjE0bUZEZnJWTmNKR3lBJTNEJTNE; OptanonAlertBoxClosed=2022-01-10T16:34:03.149Z; _ym_d=1643215406; __atuvc=1%7C5; __atssc=google%3B1; _gcl_au=1.1.1216763729.1644271404; C360i=D002B215310B0147571AA2FEBA23B491|eyJjcmVhdGVkIjoxNjI3MzgyMDg5NTg5LCJ1cGRhdGVkIjoxNjQ0NTIyMzkxMDAyLCJ0YWdfaWQiOiI0LjMuMCIsImNvdW50IjoyMDQsImV4cCI6MTY1ODkxODA4OTU4OX0=; sessionid=17io9z8km85rzpdggkdics9ra5xf6c5i; hlauth=1; hllang=fr; ref_domain=www.google.com; WGAI=\"eyJsb2dpbm5hbWUiOiAiIiwgInRpbWVzdGFtcCI6IDE2NDU3Mjk0MjcsICJjbGFuX25hbWUiOiAiT2ggbm8gISBDUklOR08gLi4uIiwgImlzX3N0YWZmIjogZmFsc2UsICJjbGFuX2JhbiI6IG51bGwsICJnYW1lX2JhbiI6IG51bGwsICJjbGFuX3RhZyI6ICJDUk5HTyIsICJjbGFuX2NvbG9yIjogIiNmZjAwMDAiLCAiaGFzX2ZyaWVuZHMiOiB0cnVlLCAic3BhX3N0YXRlIjogbnVsbCwgIm5pY2tuYW1lIjogIkdhYm91Y2hldCIsICJzcGFfaWQiOiA1MDI0NDIzNjYsICJoYXNfY2xhbm1hdGVzIjogdHJ1ZSwgImJhdHRsZXNfY291bnQiOiAyMTU3NiwgImNsYW5faWQiOiA1MDAxOTg5NzIsICJpc19wcmVtaXVtX2FjdGl2ZSI6IGZhbHNlfQ==\"; cm.options.user_id=502442366; cm.options.user_name=Gabouchet; wot_wgnet_lvl_gid=GA1.2.2038137655.1645729423; _gid=GA1.2.1737773414.1645729423; product_lvl_gid=GA1.2.1721966249.1645729423; _ym_isad=1; _ym_visorc=w; outbrain_cid_fetch=true; _clck=h2xlz5|1|ez9|0; reg_ref_domain=www.google.com; newbie_lifetime=1627382088235-1645729561591; authentication_confirmation_expires_at=1644859698; OptanonConsent=isIABGlobal=false&datestamp=Thu+Feb+24+2022+20%3A06%3A02+GMT%2B0100+(heure+normale+d%E2%80%99Europe+centrale)&version=6.28.0&hosts=&consentId=9542411d-5810-4aa2-b9a4-eb849248a43f&interactionCount=11&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1%2CC0005%3A1&geolocation=FR%3BBRE&AwaitingReconsent=false; _ga_281KMWX0KQ=GS1.1.1645729422.117.1.1645729562.16; _uetsid=7c11f13095a411ec9e01c7343a53e890; _uetvid=454b4f80eec611eb859ce534c8584538; _ga=GA1.2.1440312351.1627382089; _clsk=rgd13q|1645729563550|3|0|a.clarity.ms/collect",
    "Referer": "https://worldoftanks.eu/en/clanwars/rating/alley/",
    "Referrer-Policy": "unsafe-url"
  },
  "body": null,
  "method": "GET"
  });
  const data = await (await request).json();
  const res = [];
  for (const player of data.accounts_ratings) {
    res.push([`${player.id}`, player.name, await player_has_chieftain(player.id)]);
  }
  return res.slice(0, page_size);
}

async function main() {
  const workbook = new ExcelJs.Workbook();
  const worksheet = workbook.addWorksheet('Players');
  let playersProcessed = 0;
  const pageSize = 100;
  const nbOfPage = 40;
  let data = [];

  for (let i = 0; i < nbOfPage; i++) {
    console.log(`Page: ${i} / ${nbOfPage}`);
    const res = await get_players(i, pageSize);
    playersProcessed += pageSize;
    data = data.concat(res);
  }

  worksheet.addTable({
    name : 'PlayersTable',
    columns: [
      {name: 'Id'},
      {name: 'Nickname'},
      {name: 'hasChieftain'},
    ],
    rows: data,
    ref: 'A1',
  });

  await workbook.xlsx.writeFile('./players.xlsx');

  console.log(`Number of chiefs: ${chiefNb}`);
  console.log(`Number of players: ${playersProcessed}`);
  console.log(`ratio: ${((100.0 * chiefNb) / playersProcessed).toFixed(2)}%`);
}

main();
