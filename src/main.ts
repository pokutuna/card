/// <reference path="../DefinitelyTyped/vue/vue.d.ts" />

interface CardData {
    text: string;
    isNumber: boolean;
    selected: boolean;
}

class App {
    static defaultCards: Array<string> = [
        '1/2', '1', '2', '3', '5', '8', '13', '∞'
    ];

    constructor() {
        var cardData = this.constructCardData();
        new Vue({
            el: '#card-container',
            data: {
                cards: cardData
            },
        });
    }

    constructCardData(): Array<CardData> {
        var cards: Array<string> = App.defaultCards;
        return cards.map(function(c: string): CardData {
            return {
                text: c,
                isNumber: !isNaN(parseInt(c)),
                selected: false,
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new App());
