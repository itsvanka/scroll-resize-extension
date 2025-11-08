chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'ctxm-scroll-resize',
    title: 'Scroll Lock',
    contexts: ['all']
  })
});

async function contextClick(info, tab) {
  chrome.tabs.sendMessage(tab.id, {text: "getClickedEl" });
}

chrome.contextMenus.onClicked.addListener(contextClick);