chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      const url = new URL(details.url);
      if (url.protocol === 'http:') {
        return {redirectUrl: url.href.replace("http:", "https:")};
      }
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
  );
  