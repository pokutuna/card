/// <reference path="../DefinitelyTyped/vue/vue.d.ts" />
var App = (function () {
    function App() {
        var cardData = this.constructCardData();
        new Vue({
            el: '#card-container',
            data: {
                cards: cardData
            }
        });
    }
    App.prototype.constructCardData = function () {
        var cards = App.defaultCards;
        return cards.map(function (c) {
            return {
                text: c,
                isNumber: !isNaN(parseInt(c)),
                selected: false
            };
        });
    };
    App.defaultCards = [
        '1/2',
        '1',
        '2',
        '3',
        '5',
        '8',
        '13',
        '∞'
    ];
    return App;
})();
document.addEventListener('DOMContentLoaded', function () { return new App(); });
