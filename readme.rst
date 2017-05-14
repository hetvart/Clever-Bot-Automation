Main concept:
=============

To implement this library we used Nightwatch.js. It's Node.js based End-to-End (E2E) testing solution for browser based
apps and websites. It uses the powerful W3C WebDriver API to perform commands and assertions on DOM elements.

More detailed info on how Nightwatch.js is configured you can find here_.

.. _here: http://nightwatchjs.org/gettingstarted

Installation and run:
*********************

You need to install Nightwatch.js globally to be able to run tests:

.. code-block:: sh

    $ npm install -g nightwatch

To run tests use -g key grouping them by functionality or scenarios:

.. code-block:: sh

    $ nightwatch -g registerNewUserAndTalkToBot.js

Reporting:
**********

There is a custom reporter defined in *globals.js* file which opens automatically in browser when tests are finished
and shows tests' results in html format. If you need to disallow automatic test results opening change *openBrowser* key.

.. code-block:: javascript

    openBrowser: false
