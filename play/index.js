// let stagesData = {
//     "stages" : [
//         {
//             stageID: "start",
//             stageTitle: "Start",
//             stageBody: "blah",
//             nextStage: [
//                 {
//                     btnText: "button 1",
//                     link: "stage2"
//                 },
//                 {
//                     btnText: "button 2",
//                     link: "stage3"
//                 },
//             ]
//         },
//         {
//             stageID: "stage2",
//             stageTitle: "2",
//             stageBody: "blah blah",
//             nextStage: [
//                 {
//                     btnText: "button 1",
//                     link: "stage2"
//                 },
//                 {
//                     btnText: "button 2",
//                     link: "stage3"
//                 },
//             ]
//         },
//         {
//             stageID: "stage3",
//             stageTitle: "3",
//             stageBody: "blah blah blah",
//             nextStage: [
//                 {
//                     btnText: "button 1",
//                     link: "stage2"
//                 },
//                 {
//                     btnText: "button 2",
//                     link: "stage3"
//                 },
//             ]
//         }
//     ]
// };

import stagesData from './stages.json' assert { type: 'json' };
// const stagesData = response.json();
console.log(stagesData);

function findIndex(queryString){
    for (let i=0; i < stagesData.stages.length; i++){
        if (stagesData.stages[i].stageID === queryString){
            return i;
        }
    }
}

const urlParams = new URLSearchParams(window.location.search);
let id;
if (urlParams.has('stageID')){
    id = urlParams.get('stageID');
} else{
    id = "start";
}
let stagesDataIndex = findIndex(id);

console.log(id);
console.log(stagesDataIndex.toString());

// first clear the div
let gameContainer = document.getElementById('gameScreen');
console.log(gameContainer.hasChildNodes());

while(gameContainer.hasChildNodes()){
    gameContainer.removeChild(gameContainer.firstChild);
}

// now we can add fresh children

let header = document.createElement('h2');
header.innerHTML = stagesData.stages[stagesDataIndex].stageTitle;
gameContainer.appendChild(header);

let body = document.createElement('p');
body.innerHTML = stagesData.stages[stagesDataIndex].stageBody;
gameContainer.append(body);

for (let x = 0; x < stagesData.stages[stagesDataIndex].nextStage.length; x++){
    let linkToNext = document.createElement('a');
    linkToNext.innerHTML = stagesData.stages[stagesDataIndex].nextStage[x].btnText;
    linkToNext.setAttribute('href', '?stageID=' + stagesData.stages[stagesDataIndex].nextStage[x].link);
    linkToNext.setAttribute('class', 'buttonLink');
    gameContainer.append(linkToNext);
}