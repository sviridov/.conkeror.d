
var proxyServerDefault = "127.0.0.1";
var proxyPortDefault = 8080;

function setProxySession (window, server, port) {
    if (server == "N") {
       session_pref ('network.proxy.type', 0);
       window.minibuffer.message ("Direction connection to the internet enabled for this session");
    } else {
      if (server == "") server = proxyServerDefault;
      (port == "") ? port = proxyPortDefault : port = Number (port);

      session_pref ('network.proxy.socks',  server);
      session_pref ("network.proxy.socks_version", 5);
      session_pref ('network.proxy.socks_port',  port);
      session_pref ('network.proxy.type', 1);

      window.minibuffer.message ("All protocols using " + server + ":" + port + " for this session");
    }
}

interactive ("set-proxy-session",
             "set the proxy server for all protocols for this session only",
             function (I) {
                 setProxySession (
                     I.window,
                     (yield I.minibuffer.read ($prompt = "server [" + proxyServerDefault + "] or N: ")),
                     (yield I.minibuffer.read ($prompt = "port [" + proxyPortDefault + "]: ")));
             });

provide ("initProxy");
