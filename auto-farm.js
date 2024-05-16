// ==UserScript==
// @name         auto farm tw - by printescrol
// @namespace    http://tampermonkey.net/
// @version      2024-05-16
// @description  auto farm
// @author       printescrol
// @match        https://br126.tribalwars.com.br/game.php?village=82890&screen=am_farm
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tribalwars.com.br
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const farmType = (type) => document.querySelectorAll('#plunder_list .farm_icon.farm_icon_'+type+':not(.done)')[0]

  const clicksPerSeconds = 1;
  const mileseconds = 1000

  const typeToFarm = prompt("Qual é a opção que você deseja iniciar: a, b ou c",)

  const choosedTypeToFarm = typeToFarm.toLowerCase()

  alert('tipo escolhido: ' + choosedTypeToFarm)

  let interval = null
  const handleClickInTypeChoosed = (type) => {
    const item = farmType(choosedTypeToFarm)

    if(item) {
        return item.click()
    }

    interval = null
  }

  handleClickInTypeChoosed()
  setInterval(handleClickInTypeChoosed, clicksPerSeconds * mileseconds)


})();