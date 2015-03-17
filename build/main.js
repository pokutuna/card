/// <reference path="../DefinitelyTyped/vue/vue.d.ts" />
var App = (function () {
    function App() {
        var cardData = this.constructCardData();
        new Vue({
            el: '#card-container',
            data: { cards: cardData }
        });
    }
    App.isAmbiguousString = function (str) {
        var ambiguousPattern = /^[698∞]+$/;
        return ambiguousPattern.test(str);
    };
    App.prototype.constructCardData = function () {
        var cards = App.defaultCards;
        return cards.map(function (c) {
            return {
                text: c,
                selected: false,
                isAmbiguous: App.isAmbiguousString(c)
            };
        });
    };
    App.defaultCards = [
        '?',
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
