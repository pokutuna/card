/// <reference path="../DefinitelyTyped/vue/vue.d.ts" />

interface CardData {
    text: string;
    selected: boolean;
    isAmbiguous: boolean;
}

class App {
    static defaultCards: string[] = [
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

    constructCardData(): CardData[] {
        var cards: string[] = this.cardsFromQueryParam() || App.defaultCards;

        return cards.map(function(c: string): CardData {
            return {
                text: c,
                selected: false,
                isAmbiguous: App.isAmbiguousString(c),
            }
        });
    }

    cardsFromQueryParam(): any { // (null | string[])
        if (!(location.search.length > 1)) return null;
        var cardParam = document.location.search.substring(1).split('&')
            .filter(function(p) { return /^cards=/.test(p) })[0];
        if (!cardParam) return null;
        return cardParam.split('=')[1].split(',').map(
            (item): string => { return decodeURIComponent(item) }
        );
    }
}

document.addEventListener('DOMContentLoaded', () => new App());
