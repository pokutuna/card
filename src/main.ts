/// <reference path="../DefinitelyTyped/vue/vue.d.ts" />

interface CardData {
    text: string;
    selected: boolean;
    isAmbiguous: boolean;
}

class App {
    static defaultCards: Array<string> = [
        '?', '1', '2', '3', '5', '8', '13', '∞'
    ];

    static isAmbiguousString(str: string): boolean {
        var ambiguousPattern = /^[698∞]+$/;
        return ambiguousPattern.test(str);
    }

    constructor() {
        var cardData = this.constructCardData();
        new Vue({
            el: '#card-container',
            data: { cards: cardData },
        });
    }

    constructCardData(): Array<CardData> {
        var cards: Array<string> = App.defaultCards;
        return cards.map(function(c: string): CardData {
            return {
                text: c,
                selected: false,
                isAmbiguous: App.isAmbiguousString(c),
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new App());
