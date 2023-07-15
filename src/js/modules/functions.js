/* Проверка поддержки webp, добавление класса webp или no-webp для html*/
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function() {
            callback(webP.height == 2);
        };
        webP.src = "data:image/gif;base64,R0lGODlhDQAMANUAAFRVVtHd74S192aZzHqVuLq0rvf39+zr6bXI4qizwufdz5WhsmSt/5rC+r3Ezm1zeJiSjmum8tzm9bvZ/6bB5a6qpn+t5dvVzZK88+v8/7vg/7DJ4P/99V5gY8zMzObm5ofD/6zQ/3Fua8fX69fm+vDy9OPi4czh/4SXrJLC/////+7u7Wmt/87f9oG2/5Oku5mZmf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUUADEALAAAAAANAAwAAAZTwJhwSIwhDsUixZEkWhLNYeQVjYUYBIVKSCKeGIOCymCISTATISsCu5RKW1VAkHKBUBDToRxTcUYNGhsdFR8GW0IqJS0ZDyIrh0kqCwBIVR4eTUEAOw==";
    }
    // добавление класса _webp или _no-webp для HTML
    testWebP(function(support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}