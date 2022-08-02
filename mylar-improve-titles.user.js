// ==UserScript==
// @name         Mylar - Improve Titles
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:8090/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=forum.mylarcomics.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const wd = window.document;
    const wdt = wd.title;
    const [,significantTitle] = wdt.split('Mylar - ');

    wd.title = `${significantTitle} - Mylar`;

})();