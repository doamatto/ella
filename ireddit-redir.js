// ==UserScript==
// @name         Redirect to iReddit
// @namespace    https://doamatto.xyz/
// @version      0.1
// @description  Redirect to iReddit because I don't like the modern versions.
// @run-at       document-start
// @author       Matt Ronchetto (https://www.doamatto.xyz)
// @match        https://*.reddit.com/*
// @icon         https://www.google.com/s2/favicons?domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.location.href = "https://i.reddit.com"+location.pathname;
})();
