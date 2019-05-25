/* eslint-disable camelcase */

const pkg = require('./package.json');

module.exports = {
    manifest_version: 2,
    name: 'Q Bookmarks',
    version: pkg.version,
    description: pkg.description,
    browser_action: {
        default_icon: 'assets/images/browser-action-64.png',
        default_popup: 'assets/views/popup.html',
        default_title: 'Q Bookmarks',
    },
    content_security_policy: `default-src 'self'; img-src 'self' chrome://favicon`,
    icons: {
        16: 'assets/images/icon-16.png',
        48: 'assets/images/icon-48.png',
        128: 'assets/images/icon-128.png',
    },
    minimum_chrome_version: '73',
    options_ui: {
        chrome_style: true,
        page: 'assets/views/options-page.html',
    },
    permissions: [
        'activeTab',
        'bookmarks',
        'chrome://favicon/',
        'storage',
    ],
};
