const players = [
  {id:'alisson', name:'Alisson', position:'GOL', club:'Liverpool', price:18.0, rating:8.8, initials:'A', color:'#8d1d32'},
  {id:'ederson', name:'Ederson', position:'GOL', club:'Manchester City', price:17.3, rating:8.4, initials:'E', color:'#56a7d9'},
  {id:'bento', name:'Bento', position:'GOL', club:'Al-Nassr', price:11.2, rating:7.7, initials:'B', color:'#ef9d22'},
  {id:'danilo', name:'Danilo', position:'DEF', club:'Flamengo', price:13.6, rating:8.0, initials:'D', color:'#c61424'},
  {id:'vanderson', name:'Vanderson', position:'DEF', club:'Monaco', price:13.0, rating:8.1, initials:'V', color:'#d51d34'},
  {id:'marquinhos', name:'Marquinhos', position:'DEF', club:'PSG', price:19.1, rating:8.7, initials:'M', color:'#114a91'},
  {id:'gabriel', name:'Gabriel Magalhães', position:'DEF', club:'Arsenal', price:17.8, rating:8.6, initials:'GM', color:'#dc1832'},
  {id:'militao', name:'Éder Militão', position:'DEF', club:'Real Madrid', price:17.5, rating:8.5, initials:'EM', color:'#f0b129'},
  {id:'bremer', name:'Bremer', position:'DEF', club:'Juventus', price:15.2, rating:8.2, initials:'B', color:'#171717'},
  {id:'arana', name:'Guilherme Arana', position:'DEF', club:'Atlético-MG', price:14.9, rating:8.2, initials:'GA', color:'#242424'},
  {id:'carlos', name:'Carlos Augusto', position:'DEF', club:'Internazionale', price:13.3, rating:8.0, initials:'CA', color:'#1a3f9a'},
  {id:'casemiro', name:'Casemiro', position:'MEI', club:'Manchester United', price:18.2, rating:8.4, initials:'C', color:'#d51a35'},
  {id:'bruno', name:'Bruno Guimarães', position:'MEI', club:'Newcastle', price:18.7, rating:8.8, initials:'BG', color:'#202020'},
  {id:'joao', name:'João Gomes', position:'MEI', club:'Wolves', price:14.1, rating:8.1, initials:'JG', color:'#ef9e1b'},
  {id:'paqueta', name:'Lucas Paquetá', position:'MEI', club:'West Ham', price:17.4, rating:8.5, initials:'LP', color:'#752438'},
  {id:'andreas', name:'Andreas Pereira', position:'MEI', club:'Fulham', price:14.6, rating:8.0, initials:'AP', color:'#1a1a1a'},
  {id:'gerson', name:'Gerson', position:'MEI', club:'Cruzeiro', price:14.8, rating:8.1, initials:'G', color:'#1f61a7'},
  {id:'vinicius', name:'Vinícius Júnior', position:'ATA', club:'Real Madrid', price:22.5, rating:9.3, initials:'VJ', color:'#f0b629'},
  {id:'neymar', name:'Neymar Jr.', position:'ATA', club:'Santos', price:21.8, rating:9.1, initials:'NJ', color:'#ffffff'},
  {id:'rodrygo', name:'Rodrygo', position:'ATA', club:'Real Madrid', price:19.2, rating:8.7, initials:'R', color:'#e9ba2e'},
  {id:'raphinha', name:'Raphinha', position:'ATA', club:'Barcelona', price:18.9, rating:8.8, initials:'R', color:'#1c438e'},
  {id:'savinho', name:'Savinho', position:'ATA', club:'Manchester City', price:16.7, rating:8.4, initials:'S', color:'#5ba9dc'},
  {id:'endrick', name:'Endrick', position:'ATA', club:'Real Madrid', price:17.1, rating:8.3, initials:'E', color:'#f0b629'},
  {id:'estevao', name:'Estêvão', position:'ATA', club:'Chelsea', price:16.2, rating:8.2, initials:'E', color:'#1f4d9b'},
  {id:'richarlison', name:'Richarlison', position:'ATA', club:'Tottenham', price:15.8, rating:8.0, initials:'R', color:'#f4f4f4'}
];
players.forEach(player => Object.assign(player, {nation:'Brasil', flag:'🇧🇷'}));

// Base mundial ilustrativa e extensível. Para adicionar atletas, inclua nome:posição
// na seleção correspondente. Os valores do card são gerados para manter o jogo leve.
const globalRosters = [
  ['Argentina','🇦🇷','#71c5ee','Emiliano Martínez:GOL|Cristian Romero:DEF|Lisandro Martínez:DEF|Otamendi:DEF|Nahuel Molina:DEF|Enzo Fernández:MEI|Mac Allister:MEI|De Paul:MEI|Messi:ATA|Lautaro Martínez:ATA|Julián Álvarez:ATA|Garnacho:ATA'],
  ['França','🇫🇷','#1d2f6f','Maignan:GOL|Saliba:DEF|Upamecano:DEF|Théo Hernández:DEF|Koundé:DEF|Tchouaméni:MEI|Camavinga:MEI|Griezmann:MEI|Mbappé:ATA|Dembélé:ATA|Olise:ATA|Barcola:ATA'],
  ['Inglaterra','🏴','#cf2736','Pickford:GOL|Stones:DEF|Guéhi:DEF|Trent Alexander-Arnold:DEF|Lewis Hall:DEF|Declan Rice:MEI|Bellingham:MEI|Cole Palmer:MEI|Foden:ATA|Saka:ATA|Harry Kane:ATA|Anthony Gordon:ATA'],
  ['Espanha','🇪🇸','#d7202f','Unai Simón:GOL|Carvajal:DEF|Pau Cubarsí:DEF|Cucurella:DEF|Le Normand:DEF|Rodri:MEI|Pedri:MEI|Gavi:MEI|Lamine Yamal:ATA|Nico Williams:ATA|Morata:ATA|Ferran Torres:ATA'],
  ['Portugal','🇵🇹','#13774c','Diogo Costa:GOL|Rúben Dias:DEF|Nuno Mendes:DEF|João Cancelo:DEF|Gonçalo Inácio:DEF|Palhinha:MEI|Vitinha:MEI|Bruno Fernandes:MEI|Cristiano Ronaldo:ATA|Rafael Leão:ATA|Bernardo Silva:ATA|Gonçalo Ramos:ATA'],
  ['Alemanha','🇩🇪','#202020','Neuer:GOL|Rüdiger:DEF|Tah:DEF|Kimmich:DEF|David Raum:DEF|Wirtz:MEI|Musiala:MEI|Gündogan:MEI|Havertz:ATA|Leroy Sané:ATA|Füllkrug:ATA|Karim Adeyemi:ATA'],
  ['Holanda','🇳🇱','#ef6c2f','Verbruggen:GOL|Van Dijk:DEF|Aké:DEF|De Ligt:DEF|Frimpong:DEF|Frenkie de Jong:MEI|Reijnders:MEI|Xavi Simons:MEI|Gakpo:ATA|Depay:ATA|Malen:ATA|Brobbey:ATA'],
  ['Itália','🇮🇹','#2458aa','Donnarumma:GOL|Bastoni:DEF|Calafiori:DEF|Dimarco:DEF|Di Lorenzo:DEF|Barella:MEI|Tonali:MEI|Jorginho:MEI|Chiesa:ATA|Retegui:ATA|Raspadori:ATA|Zaccagni:ATA'],
  ['Uruguai','🇺🇾','#70b8e1','Sergio Rochet:GOL|Ronald Araújo:DEF|Giménez:DEF|Mathías Olivera:DEF|Viña:DEF|Valverde:MEI|Ugarte:MEI|Bentancur:MEI|Darwin Núñez:ATA|Pellistri:ATA|Maxi Araújo:ATA|De Arrascaeta:ATA'],
  ['Colômbia','🇨🇴','#e5bc2e','Camilo Vargas:GOL|Davinson Sánchez:DEF|Lucumí:DEF|Daniel Muñoz:DEF|Mojica:DEF|Richard Ríos:MEI|Lerma:MEI|James Rodríguez:MEI|Luis Díaz:ATA|Jhon Durán:ATA|Sinisterra:ATA|Luis Suárez:ATA'],
  ['Japão','🇯🇵','#df2836','Zion Suzuki:GOL|Tomiyasu:DEF|Itakura:DEF|Hiroki Ito:DEF|Sugawara:DEF|Wataru Endo:MEI|Kamada:MEI|Doan:MEI|Kubo:ATA|Mitoma:ATA|Minamino:ATA|Ueda:ATA'],
  ['Marrocos','🇲🇦','#c72a38','Bounou:GOL|Hakimi:DEF|Mazraoui:DEF|Aguerd:DEF|Saïss:DEF|Amrabat:MEI|Ounahi:MEI|Brahim Díaz:MEI|Ziyech:ATA|En-Nesyri:ATA|El Khannouss:ATA|Abde:ATA'],
  ['Coreia do Sul','🇰🇷','#de2a37','Jo Hyeon-woo:GOL|Kim Min-jae:DEF|Kim Young-gwon:DEF|Lee Myung-jae:DEF|Seol Young-woo:DEF|Hwang In-beom:MEI|Lee Jae-sung:MEI|Lee Kang-in:MEI|Son:ATA|Cho Gue-sung:ATA|Hwang Hee-chan:ATA|Yang Hyun-jun:ATA'],
  ['Estados Unidos','🇺🇸','#244ba2','Matt Turner:GOL|Chris Richards:DEF|Antonee Robinson:DEF|Sergiño Dest:DEF|Tim Ream:DEF|Tyler Adams:MEI|McKennie:MEI|Gio Reyna:MEI|Pulisic:ATA|Balogun:ATA|Tim Weah:ATA|Kevin Paredes:ATA'],
  ['México','🇲🇽','#087649','Ochoa:GOL|César Montes:DEF|Johan Vásquez:DEF|Arteaga:DEF|Jorge Sánchez:DEF|Edson Álvarez:MEI|Luis Chávez:MEI|Orbelín Pineda:MEI|Hirving Lozano:ATA|Santiago Giménez:ATA|Vega:ATA|Quiñones:ATA'],
  ['Croácia','🇭🇷','#d92635','Livaković:GOL|Gvardiol:DEF|Šutalo:DEF|Stanišić:DEF|Juranović:DEF|Modrić:MEI|Kovačić:MEI|Brozović:MEI|Perišić:ATA|Kramarić:ATA|Budimir:ATA|Majer:ATA'],
  ['Senegal','🇸🇳','#0b7746','Édouard Mendy:GOL|Koulibaly:DEF|Moussa Niakhaté:DEF|Sabaly:DEF|Jakobs:DEF|Pape Matar Sarr:MEI|Idrissa Gueye:MEI|Lamine Camara:MEI|Sadio Mané:ATA|Nicolas Jackson:ATA|Ismaïla Sarr:ATA|Habib Diallo:ATA'],
  ['Nigéria','🇳🇬','#16804d','Nwabali:GOL|Troost-Ekong:DEF|Calvin Bassey:DEF|Ola Aina:DEF|Zaidu:DEF|Iwobi:MEI|Onyeka:MEI|Ndidi:MEI|Osimhen:ATA|Lookman:ATA|Chukwueze:ATA|Boniface:ATA']
];
globalRosters.forEach(([nation,flag,color,roster], nationIndex) => roster.split('|').forEach((entry,index) => {
  const [name, position] = entry.split(':');
  const rating = +(7.7 + ((index * 7 + nationIndex * 3) % 17) / 10).toFixed(1);
  const id = `world-${nation}-${name}`.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  players.push({id,name,position,club:'Seleção Nacional',price:+(9.5 + rating * 1.22).toFixed(1),rating,initials:name.split(' ').slice(0,2).map(word=>word[0]).join(''),color,nation,flag});
}));

const nationalTeams = [
  ['argentina','Argentina','🇦🇷',8.9,'#71c5ee',['Messi','Lautaro Martínez','Julián Álvarez'],5],
  ['france','França','🇫🇷',9.0,'#1d2f6f',['Mbappé','Dembélé','Griezmann'],5],
  ['england','Inglaterra','🏴',8.8,'#cf2736',['Kane','Saka','Foden'],5],
  ['spain','Espanha','🇪🇸',8.8,'#d7202f',['Lamine Yamal','Morata','Nico Williams'],4],
  ['portugal','Portugal','🇵🇹',8.7,'#13774c',['Cristiano Ronaldo','Rafael Leão','Bruno Fernandes'],4],
  ['germany','Alemanha','🇩🇪',8.7,'#202020',['Wirtz','Musiala','Havertz'],4],
  ['netherlands','Holanda','🇳🇱',8.5,'#ef6c2f',['Gakpo','Depay','Malen'],4],
  ['italy','Itália','🇮🇹',8.4,'#2458aa',['Chiesa','Retegui','Barella'],3],
  ['uruguay','Uruguai','🇺🇾',8.5,'#70b8e1',['Darwin Núñez','Valverde','Pellistri'],4],
  ['colombia','Colômbia','🇨🇴',8.4,'#e5bc2e',['Luis Díaz','Jhon Durán','James Rodríguez'],3],
  ['japan','Japão','🇯🇵',8.1,'#df2836',['Mitoma','Kubo','Minamino'],3],
  ['morocco','Marrocos','🇲🇦',8.2,'#c72a38',['Hakimi','Brahim Díaz','En-Nesyri'],3],
  ['south-korea','Coreia do Sul','🇰🇷',8.2,'#de2a37',['Son','Lee Kang-in','Cho Gue-sung'],3],
  ['usa','Estados Unidos','🇺🇸',8.0,'#244ba2',['Pulisic','Balogun','Reyna'],2],
  ['mexico','México','🇲🇽',7.9,'#087649',['Lozano','Santiago Giménez','Luis Chávez'],2],
  ['croatia','Croácia','🇭🇷',8.1,'#d92635',['Kramarić','Perišić','Modrić'],3],
  ['senegal','Senegal','🇸🇳',8.0,'#0b7746',['Mané','Jackson','Pape Matar Sarr'],2],
  ['nigeria','Nigéria','🇳🇬',8.0,'#16804d',['Osimhen','Lookman','Chukwueze'],2]
].map(([id,name,flag,rating,color,attack,difficulty]) => ({id,name,flag,rating,color,attack,difficulty}));

const formations = {
  '4-3-3': {GOL:1, DEF:4, MEI:3, ATA:3},
  '4-4-2': {GOL:1, DEF:4, MEI:4, ATA:2},
  '3-5-2': {GOL:1, DEF:3, MEI:5, ATA:2}
};
const coordinates = {
  '4-3-3': {GOL:[[50,87]], DEF:[[16,70],[38,73],[62,73],[84,70]], MEI:[[22,49],[50,54],[78,49]], ATA:[[20,28],[50,20],[80,28]]},
  '4-4-2': {GOL:[[50,87]], DEF:[[16,70],[38,73],[62,73],[84,70]], MEI:[[15,48],[38,53],[62,53],[85,48]], ATA:[[34,25],[66,25]]},
  '3-5-2': {GOL:[[50,87]], DEF:[[22,71],[50,74],[78,71]], MEI:[[12,49],[31,53],[50,48],[69,53],[88,49]], ATA:[[34,24],[66,24]]}
};

const defaults = ['world-franca-maignan','world-portugal-ruben-dias','world-espanha-carvajal','world-holanda-van-dijk','world-franca-theo-hernandez','world-espanha-rodri','world-alemanha-musiala','world-croacia-modric','world-argentina-messi','world-franca-mbappe','world-portugal-cristiano-ronaldo'];
const storageKey = 'world-xi-cup-squad-v1';
const state = JSON.parse(localStorage.getItem(storageKey) || 'null') || {formation:'4-3-3', selected:defaults, captain:'world-argentina-messi'};
const gameStorageKey = 'world-xi-cup-tour-v1';
const gameState = JSON.parse(localStorage.getItem(gameStorageKey) || 'null') || {coins:1500,wins:0,draws:0,losses:0,history:[],opponent:nationalTeams[Math.floor(Math.random() * nationalTeams.length)].id};
gameState.knockout ||= {round:0, wins:[], eliminated:false, champion:false};
let activeFilter = 'TODOS';
let activeNation = 'TODOS';
let matchResult = null;
let matchInProgress = false;
let liveMatch = null;

const byId = id => players.find(player => player.id === id);
const selectedPlayers = () => state.selected.map(byId).filter(Boolean);
const positionName = {GOL:'GOLEIRO', DEF:'DEFENSOR', MEI:'MEIA', ATA:'ATACANTE'};
const elements = {
  field: document.getElementById('formationSlots'), playersGrid:document.getElementById('playersGrid'), bench:document.getElementById('benchList'),
  formation:document.getElementById('formationSelect'), count:document.getElementById('selectedCount'), budget:document.getElementById('budgetValue'),
  rating:document.getElementById('ratingValue'), captain:document.getElementById('captainName'), formationReadout:document.getElementById('formationReadout'),
  search:document.getElementById('playerSearch'), toast:document.getElementById('toast'), available:document.getElementById('availableCount'),
  nation:document.getElementById('nationFilter'), opponents:document.getElementById('opponentsGrid'), coinValue:document.getElementById('coinValue'),
  recordValue:document.getElementById('recordValue'), streakValue:document.getElementById('streakValue'), matchStatus:document.getElementById('matchStatus'),
  homeScore:document.getElementById('homeScore'), awayScore:document.getElementById('awayScore'), minute:document.getElementById('matchMinute'),
  competition:document.getElementById('matchCompetition'), opponentName:document.getElementById('opponentName'), opponentFlag:document.getElementById('opponentFlag'),
  opponentRating:document.getElementById('opponentRating'), userRating:document.getElementById('userRating'), events:document.getElementById('matchEvents'),
  play:document.getElementById('playMatchButton'), history:document.getElementById('historyList'), randomOpponent:document.getElementById('randomOpponentButton'),
  knockout:document.getElementById('knockoutBracket'), knockoutStatus:document.getElementById('knockoutStatus')
};

function save() { localStorage.setItem(storageKey, JSON.stringify(state)); localStorage.setItem(gameStorageKey, JSON.stringify(gameState)); }
function showToast(message) { elements.toast.textContent = message; elements.toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => elements.toast.classList.remove('show'), 2600); }
function limitFor(position) { return formations[state.formation][position]; }
function groupedSelection(position) { return selectedPlayers().filter(player => player.position === position).sort((a,b) => b.rating - a.rating); }
function initials(name) { return name.split(' ').slice(0,2).map(word => word[0]).join(''); }
function squadRating() { const selected = selectedPlayers(); return selected.length ? selected.reduce((sum, player) => sum + player.rating, 0) / selected.length : 0; }
function currentOpponent() { return nationalTeams.find(team => team.id === gameState.opponent) || nationalTeams[0]; }
const knockoutRounds = ['OITAVAS DE FINAL','QUARTAS DE FINAL','SEMIFINAL','FINAL'];
function currentRound() { return knockoutRounds[Math.min(gameState.knockout.round, knockoutRounds.length - 1)]; }
function resetKnockout() { gameState.knockout = {round:0, wins:[], eliminated:false, champion:false}; }

function renderStats() {
  const selected = selectedPlayers();
  const budget = selected.reduce((sum, player) => sum + player.price, 0);
  const rating = selected.length ? selected.reduce((sum, player) => sum + player.rating, 0) / selected.length : 0;
  elements.count.textContent = selected.length;
  elements.budget.textContent = `C$ ${budget.toFixed(1)}`;
  elements.rating.textContent = rating.toFixed(1);
  elements.captain.textContent = byId(state.captain)?.name || 'Escolha o capitão';
  elements.formationReadout.textContent = state.formation;
  elements.available.textContent = players.length;
}

function playerButton(player, isEmpty=false) {
  const node = document.createElement(isEmpty ? 'div' : 'button');
  node.className = `field-slot${isEmpty ? ' empty' : ''}`;
  node.style.left = `${player.x}%`;
  node.style.top = `${player.y}%`;
  if (!isEmpty) {
    node.type = 'button'; node.title = `Remover ${player.name}`;
    node.innerHTML = `<span class="field-player ${state.captain === player.id ? 'captain' : ''}" style="--player-color:${player.color}">${player.initials}</span><span>${player.name}</span><small>${player.position} · ${player.rating.toFixed(1)}</small>`;
    node.addEventListener('click', () => togglePlayer(player.id));
  } else node.innerHTML = '<span class="field-player">+</span><span>VAGA EM ABERTO</span><small>ESCOLHA NO ELENCO</small>';
  return node;
}

function renderPitch() {
  elements.field.innerHTML = '';
  Object.entries(formations[state.formation]).forEach(([position, needed]) => {
    const group = groupedSelection(position);
    const spots = coordinates[state.formation][position];
    for (let index = 0; index < needed; index++) {
      const player = group[index]; const [x,y] = spots[index];
      elements.field.append(player ? playerButton({...player,x,y}) : playerButton({x,y}, true));
    }
  });
}

function playerCard(player) {
  const selected = state.selected.includes(player.id);
  const card = document.createElement('article');
  card.className = `player-card${selected ? ' selected' : ''}`;
  card.innerHTML = `<span class="position-tag">${player.position}</span><div class="player-avatar" style="--player-color:${player.color}">${player.initials}</div><div class="player-info"><h3>${player.name}</h3><p>${player.flag} ${player.nation.toUpperCase()} · ${player.club.toUpperCase()}</p></div><strong class="player-rating">${player.rating.toFixed(1)}</strong><div class="player-actions"><button class="scale-player" type="button">${selected ? '✓ ESCALADO' : '+ ESCALAR'}</button>${selected ? `<button class="captain-player ${state.captain === player.id ? 'is-captain' : ''}" type="button">${state.captain === player.id ? '© CAPITÃO' : '© CAPITÃO'}</button>` : ''}</div>`;
  card.querySelector('.scale-player').addEventListener('click', event => { event.stopPropagation(); togglePlayer(player.id); });
  const captainButton = card.querySelector('.captain-player');
  if (captainButton) captainButton.addEventListener('click', event => { event.stopPropagation(); state.captain = player.id; showToast(`${player.name} agora é o capitão.`); render(); });
  card.addEventListener('click', () => togglePlayer(player.id));
  return card;
}

function renderPlayers() {
  const term = elements.search.value.trim().toLocaleLowerCase('pt-BR');
  const filtered = players.filter(player => (activeFilter === 'TODOS' || player.position === activeFilter) && (activeNation === 'TODOS' || player.nation === activeNation) && `${player.name} ${player.club} ${player.nation}`.toLocaleLowerCase('pt-BR').includes(term));
  elements.playersGrid.innerHTML = '';
  filtered.sort((a,b) => b.rating - a.rating).forEach(player => elements.playersGrid.appendChild(playerCard(player)));
  if (!filtered.length) elements.playersGrid.innerHTML = '<p class="empty-roster">Nenhum jogador encontrado com estes filtros.</p>';
}

function renderBench() {
  const bench = players.filter(player => !state.selected.includes(player.id)).sort((a,b) => b.rating - a.rating).slice(0,5);
  elements.bench.innerHTML = bench.map((player,index) => `<div class="bench-player"><span class="bench-number">0${index + 1}</span><div><strong>${player.name}</strong><small>${positionName[player.position]} · ${player.rating.toFixed(1)}</small></div></div>`).join('');
}

function renderNations() {
  const nations = [...new Set(players.map(player => player.nation))].sort((a,b) => a.localeCompare(b,'pt-BR'));
  elements.nation.innerHTML = '<option value="TODOS">TODOS OS PAÍSES</option>' + nations.map(nation => `<option value="${nation}">${nation.toUpperCase()}</option>`).join('');
  elements.nation.value = activeNation;
}

function renderHistory() {
  if (!gameState.history.length) {
    elements.history.innerHTML = '<span class="history-empty">Sua primeira partida vai aparecer aqui.</span>';
    return;
  }
  elements.history.innerHTML = gameState.history.slice(0,5).map(match => `<article class="history-card ${match.result.toLowerCase()}"><span>${match.result}</span><div><strong>SEU XI ${match.home} × ${match.away} ${match.flag} ${match.opponent}</strong><small>+${match.reward} moedas · ${match.competition}</small></div></article>`).join('');
}

function renderKnockout() {
  const knockout = gameState.knockout;
  const stateLabel = knockout.champion ? 'CAMPEÃO DO MUNDO' : knockout.eliminated ? 'ELIMINADO — INICIE UMA NOVA COPA' : `EM JOGO · ${currentRound()}`;
  elements.knockoutStatus.textContent = stateLabel;
  elements.knockout.innerHTML = knockoutRounds.map((round, index) => {
    const result = knockout.wins[index];
    const isCurrent = !knockout.eliminated && !knockout.champion && index === knockout.round;
    const isChampion = knockout.champion && index === knockoutRounds.length - 1;
    const status = result ? 'concluida' : isChampion ? 'campeao' : isCurrent ? 'atual' : 'aguardando';
    const detail = result ? `✓ ${result.opponent}` : isChampion ? '★ CAMPEÃO' : isCurrent ? 'SEU PRÓXIMO DESAFIO' : 'AGUARDANDO';
    return `<article class="knockout-stage ${status}"><span>${String(index + 1).padStart(2,'0')}</span><strong>${round}</strong><small>${detail}</small></article>`;
  }).join('');
}

function renderOpponents() {
  elements.opponents.innerHTML = nationalTeams.map(team => `<button type="button" class="opponent-card ${team.id === gameState.opponent ? 'selected' : ''}" data-team="${team.id}" style="--team-color:${team.color}"><span class="opponent-flag">${team.flag}</span><span><strong>${team.name}</strong><small>NOTA ${team.rating.toFixed(1)} · ${'★'.repeat(team.difficulty)}</small></span><i>›</i></button>`).join('');
  elements.opponents.querySelectorAll('.opponent-card').forEach(button => button.addEventListener('click', () => {
    if (matchInProgress) return;
    gameState.opponent = button.dataset.team;
    matchResult = null;
    showToast(`${currentOpponent().name} aceita o desafio.`);
    renderGame();
    save();
  }));
}

function renderGame() {
  const rival = currentOpponent();
  const rating = squadRating();
  elements.coinValue.textContent = gameState.coins.toLocaleString('pt-BR');
  elements.recordValue.textContent = `${gameState.wins}V · ${gameState.draws}E · ${gameState.losses}D`;
  elements.streakValue.textContent = gameState.history.length ? gameState.history.slice(0,5).reverse().map(match => match.result).join('') : '—';
  elements.userRating.textContent = `NOTA ${rating.toFixed(1)}`;
  elements.opponentName.textContent = rival.name.toUpperCase();
  elements.opponentFlag.textContent = rival.flag;
  elements.opponentRating.textContent = `NOTA ${rival.rating.toFixed(1)}`;
  if (matchInProgress && liveMatch) {
    elements.homeScore.textContent = liveMatch.home;
    elements.awayScore.textContent = liveMatch.away;
    elements.minute.textContent = `${liveMatch.minute}'`;
    elements.competition.textContent = `MATA-MATA · ${currentRound()} · AO VIVO`;
    elements.matchStatus.textContent = `${currentRound()} · ${rival.name.toUpperCase()} CAIU NO SEU CAMINHO`;
    elements.events.innerHTML = liveMatch.events.length ? liveMatch.events.map(liveEventMarkup).join('') : '<span class="scoreless">—</span>';
    elements.play.textContent = '● PARTIDA EM ANDAMENTO';
    elements.play.disabled = true;
  } else if (matchResult) {
    elements.homeScore.textContent = matchResult.home;
    elements.awayScore.textContent = matchResult.away;
    elements.minute.textContent = '90+';
    elements.competition.textContent = matchResult.penalties ? `${matchResult.competition} · PÊN. ${matchResult.penalties.home}×${matchResult.penalties.away}` : matchResult.competition;
    elements.matchStatus.textContent = matchResult.label;
    elements.events.innerHTML = matchResult.events.map(liveEventMarkup).join('');
    elements.play.textContent = gameState.knockout.champion ? '★ INICIAR NOVA COPA' : gameState.knockout.eliminated ? '↻ RECOMEÇAR MATA-MATA' : '↻ SORTEAR PRÓXIMO DESAFIO';
    elements.play.disabled = false;
  } else {
    elements.homeScore.textContent = '—';
    elements.awayScore.textContent = '—';
    elements.minute.textContent = selectedPlayers().length === 11 ? 'PRÉ-JOGO' : 'ELENCO INCOMPLETO';
    elements.competition.textContent = `MATA-MATA · ${currentRound()}`;
    elements.matchStatus.textContent = gameState.knockout.champion ? 'VOCÊ CONQUISTOU A COPA' : gameState.knockout.eliminated ? 'FIM DE TORNEIO' : 'PRONTO PARA O DESAFIO';
    elements.events.innerHTML = `<span>${gameState.knockout.champion ? 'Sua campanha terminou com a taça.' : gameState.knockout.eliminated ? 'Você caiu no mata-mata. Comece uma nova caminhada.' : selectedPlayers().length === 11 ? `Seu XI está pronto para ${currentRound().toLowerCase()}.` : `Faltam ${11 - selectedPlayers().length} jogador(es) para iniciar a partida.`}</span>`;
    elements.play.textContent = gameState.knockout.champion ? '★ INICIAR NOVA COPA' : gameState.knockout.eliminated ? '↻ RECOMEÇAR MATA-MATA' : '▶ SORTEAR E SIMULAR PARTIDA';
    elements.play.disabled = false;
  }
  renderOpponents();
  renderKnockout();
  renderHistory();
}

function randomGoal(power) {
  const raw = .6 + (power - 8) * .7 + Math.random() * 2.3;
  return Math.max(0, Math.min(5, Math.round(raw)));
}
function randomFrom(list) { return list[Math.floor(Math.random() * list.length)]; }
function drawOpponent(excludeId = '') {
  const candidates = nationalTeams.filter(team => team.id !== excludeId);
  const rival = randomFrom(candidates);
  gameState.opponent = rival.id;
  return rival;
}

function buildTimeline(goals) {
  const checkpoints = [1, 15, 30, 45, 60, 75, 90].map(minute => ({minute, type:'clock', side:'neutral'}));
  return [...checkpoints, ...goals].sort((a,b) => a.minute - b.minute || (a.type === 'goal' ? -1 : 1));
}

function liveEventMarkup(event) {
  return `<span class="${event.side} goal"><b>${event.minute}'</b> ⚽ ${event.text || event.scorer}</span>`;
}

async function simulateMatch() {
  if (matchInProgress) return;
  if (selectedPlayers().length !== 11) return showToast('Escalone 11 jogadores antes de entrar em campo.');
  if (gameState.knockout.eliminated || gameState.knockout.champion) resetKnockout();
  const rival = drawOpponent(currentOpponent().id);
  const round = currentRound();
  const captainBonus = byId(state.captain)?.rating > 9 ? .18 : .05;
  let home = randomGoal(squadRating() + captainBonus);
  let away = randomGoal(rival.rating + Math.random() * .24);
  if (home === 0 && away === 0 && Math.random() > .5) home = 1;
  let result = home > away ? 'V' : home < away ? 'D' : '';
  let penalties = null;
  if (!result) {
    const userWinsPenalties = Math.random() + (squadRating() - rival.rating) * .13 + captainBonus > .56;
    let homePenalties = userWinsPenalties ? 5 : 3 + Math.floor(Math.random() * 2);
    let awayPenalties = userWinsPenalties ? 3 + Math.floor(Math.random() * 2) : 5;
    penalties = {home:homePenalties, away:awayPenalties};
    result = userWinsPenalties ? 'V' : 'D';
  }
  const reward = result === 'V' ? 160 + rival.difficulty * 30 : 30 + rival.difficulty * 8;
  const scorers = selectedPlayers().filter(player => player.position !== 'GOL').sort((a,b) => b.rating - a.rating);
  const minutes = Array.from({length:home + away + 5}, () => Math.floor(Math.random() * 82) + 7).sort((a,b) => a-b);
  const goals = [];
  for (let index = 0; index < home; index++) goals.push({minute:minutes.pop() || 90, scorer:randomFrom(scorers).name, side:'home', type:'goal'});
  for (let index = 0; index < away; index++) goals.push({minute:minutes.pop() || 90, scorer:randomFrom(rival.attack), side:'away', type:'goal'});
  goals.sort((a,b) => a.minute - b.minute);
  goals.forEach(goal => goal.text = goal.side === 'home' ? `GOL DO SEU XI — ${goal.scorer}` : `GOL DA ${rival.name.toUpperCase()} — ${goal.scorer}`);
  const label = result === 'V' ? (penalties ? 'VITÓRIA NOS PÊNALTIS' : 'VITÓRIA — VOCÊ AVANÇOU') : (penalties ? 'DERROTA NOS PÊNALTIS' : 'DERROTA — FIM DA CAMPANHA');
  const competition = `MATA-MATA · ${round}`;
  matchResult = {home,away,events:goals,label,competition,penalties};
  const timeline = buildTimeline(goals);
  matchInProgress = true;
  liveMatch = {home:0,away:0,minute:0,events:[]};
  render();
  for (const event of timeline) {
    liveMatch.minute = event.minute;
    if (event.type === 'goal') event.side === 'home' ? liveMatch.home++ : liveMatch.away++;
    if (event.type === 'goal') {
      liveMatch.events.unshift(event);
      liveMatch.events = liveMatch.events.slice(0,4);
    }
    renderGame();
    await new Promise(resolve => setTimeout(resolve, event.type === 'goal' ? 560 : 220));
  }
  matchInProgress = false;
  liveMatch = null;
  gameState.coins += reward;
  if (result === 'V') {
    gameState.wins++;
    gameState.knockout.wins[gameState.knockout.round] = {opponent:rival.name};
    if (gameState.knockout.round === knockoutRounds.length - 1) gameState.knockout.champion = true;
    else gameState.knockout.round++;
  } else {
    gameState.losses++;
    gameState.knockout.eliminated = true;
  }
  gameState.history.unshift({result,home,away,opponent:rival.name,flag:rival.flag,reward,competition});
  gameState.history = gameState.history.slice(0,12);
  showToast(`${label}. Você recebeu ${reward} moedas.`);
  render();
}

function render() { elements.formation.value = state.formation; renderStats(); renderPitch(); renderPlayers(); renderBench(); renderGame(); save(); }

function togglePlayer(id) {
  const player = byId(id); const index = state.selected.indexOf(id);
  if (index >= 0) {
    state.selected.splice(index, 1);
    if (state.captain === id) state.captain = state.selected.find(selectedId => byId(selectedId)?.position === 'ATA') || state.selected[0] || null;
    showToast(`${player.name} saiu da escalação.`);
  } else {
    const inPosition = groupedSelection(player.position).length;
    if (state.selected.length >= 11) return showToast('Seu time já tem 11 jogadores. Tire alguém antes de escalar outro.');
    if (inPosition >= limitFor(player.position)) return showToast(`Sua formação permite ${limitFor(player.position)} ${positionName[player.position].toLowerCase()}(s).`);
    state.selected.push(id);
    if (!state.captain) state.captain = id;
    showToast(`${player.name} foi escalado!`);
  }
  matchResult = null;
  render();
}

function trimForFormation() {
  const next = [];
  ['GOL','DEF','MEI','ATA'].forEach(position => next.push(...groupedSelection(position).slice(0, limitFor(position)).map(player => player.id)));
  state.selected = next;
  if (!state.selected.includes(state.captain)) state.captain = state.selected.find(id => byId(id)?.position === 'ATA') || state.selected[0] || null;
}
function autoScale() {
  state.selected = [];
  ['GOL','DEF','MEI','ATA'].forEach(position => players.filter(player => player.position === position).sort((a,b) => b.rating - a.rating).slice(0,limitFor(position)).forEach(player => state.selected.push(player.id)));
  state.captain = state.selected.sort((a,b) => byId(b).rating - byId(a).rating)[0];
  matchResult = null;
  showToast('Super XI escalado com os maiores ratings do elenco global.'); render();
}

elements.formation.addEventListener('change', event => { state.formation = event.target.value; trimForFormation(); matchResult = null; showToast(`Formação alterada para ${state.formation}.`); render(); });
elements.search.addEventListener('input', renderPlayers);
elements.nation.addEventListener('change', event => { activeNation = event.target.value; renderPlayers(); });
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { activeFilter = button.dataset.filter; document.querySelectorAll('.filter').forEach(item => item.classList.toggle('active', item === button)); renderPlayers(); }));
document.getElementById('autoButton').addEventListener('click', autoScale);
document.getElementById('resetButton').addEventListener('click', () => { state.selected = []; state.captain = null; matchResult = null; showToast('Prancheta limpa. Monte o seu XI mundial.'); render(); });
elements.play.addEventListener('click', simulateMatch);
elements.randomOpponent.addEventListener('click', () => {
  if (matchInProgress) return;
  const rival = drawOpponent(currentOpponent().id);
  matchResult = null;
  showToast(`SORTEIO DA COPA: ${rival.name.toUpperCase()} caiu no seu caminho.`);
  render();
});
const helpModal = document.getElementById('helpModal');
document.getElementById('helpButton').addEventListener('click', () => helpModal.showModal());
document.getElementById('closeHelp').addEventListener('click', () => helpModal.close());
document.getElementById('understoodButton').addEventListener('click', () => helpModal.close());
helpModal.addEventListener('click', event => { if (event.target === helpModal) helpModal.close(); });

if (!state.selected.every(byId)) state.selected = defaults;
renderNations();
render();
