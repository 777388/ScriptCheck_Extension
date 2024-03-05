chrome.contextMenus.create({
    id: "ScriptCheck",
    title: "ScriptCheck",
    contexts: ["selection"]
})

chrome .contextMenus.onClicked.addListener(function (info, tab) {
    if(info.menuItemId == "ScriptCheck"){
        //`${info.menuItemId} ${variableName}`
        const ScriptName = info.selectionText;
        chrome.tabs.create({ url: `https://www.google.com/search?q=site:https://www.simplyscripts.com/%20%26%20${ScriptName}` });
    }
});
