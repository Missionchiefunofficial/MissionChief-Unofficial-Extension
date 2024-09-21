// ==UserScript==
// @name         MissionChief Unofficial Game Extension
// @namespace    https://missionchief-unofficial.com
// @version      4.0.0
// @description  Realism location markers with click to build option or view on OSM & Google Maps auto translates to the following languages: UK, US, AU, DE, PT, NL, ES, PL, SE, IT, FR, RU, CZ, DK, JP, KR, NO, RO, SK, TR, BR, MX, FL, UA
// @author       MissionChief Unofficial Team
// @icon         https://www.missionchief-unofficial.com/logo/MCUBS.png
// @match        https://www.operacni-stredisko.cz/*
// @match        https://policie.operacni-stredisko.cz/*
// @match        https://www.alarmcentral-spil.dk/*
// @match        https://politi.alarmcentral-spil.dk/*
// @match        https://www.leitstellenspiel.de/*
// @match        https://polizei.leitstellenspiel.de/*
// @match        https://www.missionchief-australia.com/*
// @match        https://police.missionchief-australia.com/*
// @match        https://www.missionchief.co.uk/*
// @match        https://police.missionchief.co.uk/*
// @match        https://www.missionchief.com/*
// @match        https://police.missionchief.com/*
// @match        https://www.centro-de-mando.es/*
// @match        https://www.centro-de-mando.mx/*
// @match        https://www.hatakeskuspeli.com/*
// @match        https://poliisi.hatakeskuspeli.com/*
// @match        https://www.operateur112.fr/*
// @match        https://police.operateur112.fr/*
// @match        https://www.operatore112.it/*
// @match        https://polizia.operatore112.it/*
// @match        https://www.missionchief-japan.com/*
// @match        https://www.missionchief-korea.com/*
// @match        https://www.nodsentralspillet.com/*
// @match        https://politiet.nodsentralspillet.com/*
// @match        https://www.meldkamerspel.com/*
// @match        https://politie.meldkamerspel.com/*
// @match        https://www.operatorratunkowy.pl/*
// @match        https://policja.operatorratunkowy.pl/*
// @match        https://www.operador193.com/*
// @match        https://www.jogo-operador112.com/*
// @match        https://policia.jogo-operador112.com/*
// @match        https://www.jocdispecerat112.com/*
// @match        https://www.dispetcher112.ru/*
// @match        https://www.dispecerske-centrum.com/*
// @match        https://www.larmcentralen-spelet.se/*
// @match        https://polis.larmcentralen-spelet.se/*
// @match        https://www.112-merkez.com/*
// @match        https://www.dyspetcher101-game.com/*
// @downloadURL  https://www.missionchief-unofficial.com/scripts/stable/STABLE-loader.user.js
// @updateURL    https://www.missionchief-unofficial.com/scripts/stable/STABLE-loader.user.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    function loadMissionChiefEnhancer() {
        const script = document.createElement('script');
        script.src = 'https://missionchief-unofficial.com/scripts/stable/missionchiefenhancer.js';
        script.onload = () => console.log('MissionChief Enhancer loaded successfully');
        script.onerror = (error) => console.error('Error loading MissionChief Enhancer:', error);
        document.head.appendChild(script);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadMissionChiefEnhancer);
    } else {
        loadMissionChiefEnhancer();
    }
})();
