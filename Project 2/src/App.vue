<template>
    <div class="container">
        <app-header :numQuotes="quotes.length" :maxQuotes="maxQuotes">
            Quotes Added
        </app-header>
        <app-add-quote @quoteWasAdded="addQuote"></app-add-quote>
        <app-quote-grid :quotes="quotes" @quoteWasDeleted="deleteQuote"></app-quote-grid>
        <app-footer>
            Info: Click on a quote to delete it
        </app-footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import AddQuote from './components/AddQuote.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import Footer from './components/Footer.vue';

    export default {
        data: function () {
            return {
                maxQuotes: 10,
                quotes: [
                    'To be, or not to be',
                ]
            };
        },
        components: {
            appHeader: Header,
            appAddQuote: AddQuote,
            appQuoteGrid: QuoteGrid,
            appFooter: Footer
        },
        methods: {
            addQuote(quote) {
                if (this.quotes.length < 10) {
                    this.quotes.push(quote)
                }
                else {
                    alert('You cannot add more than 10 quotes!');
                }
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        }
    }
</script>
