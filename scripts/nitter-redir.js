// ==UserScript==
// @name         Redirect to Nitter
// @namespace    https://doamatto.xyz/
// @version      0.1
// @description  Redirect to Nitter because I don't use Twitter (anymore).
// @run-at       document-start
// @author       Matt Ronchetto (https://www.doamatto.xyz)
// @match        https://*.twitter.com/*
// @icon         https://www.google.com/s2/favicons?domain=nitter.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.location.href = "https://nitter.net"+location.pathname;
})();
