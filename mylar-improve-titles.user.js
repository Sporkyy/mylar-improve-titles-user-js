// ==UserScript==
// @name         Mylar - Improve Titles
// @namespace    https://github.com/Sporkyy/
// @version      0.3
// @description  Move Mylar to the end of the title
// @author       Sporkyy
// @match        *://localhost:8090/*
// @match        *://mylar.lumpatio.us/*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const wd = window.document;
  const wdt = wd.title;
  const [, significantTitle] = wdt.split('Mylar - ');

  wd.title = `${significantTitle} - Mylar`;
})();
