# Mono-tasking-Tabs
## Google Chrome procrastination prevention extension

Limit number of tabs that can be opened in a single window, limit number of windows open at one time. Number of tabs is limited to 3 by default (excluding pinned tabs). Settings can be changed in Extensions > Single tasking tabs > Options or via Popup. 

__Does this take into account pinned tabs?__ 

No. Pinned tabs are not taken into account.

__Does this take into account the incognito windows?__

No. The extension does not count the incognito windows? 

__Does this take into account `*chrome://*`, `*file:///*` and other none `*http://*` URLs?__

This extension only works on tabs with URLs that match the following patterns: `https://*/*`, `http://*/*`.
