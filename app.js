var app = new Vue({
    el: '#app',
    data: {
        ufont: false,
        ps: [],
        ys: [],
        qs: [16, 15, 14, 13, 12],
        form: {
            k: null,
            p: 0,
            y: 0,
            currentGoldPrice: null,
            q: 16,
        },
        result: 0,
    },
    methods: {
        cp() {
            for (let i = 0; i < 16; i++) {
                this.ps[i] = i;
            }
        },
        cy() {
            for (let i = 0; i < 8; i++) {
                this.ys[i] = i;
            }
        },
        calc() {
            let k = this.form.k;
            let p = this.form.p;
            let y = this.form.y;
            let price = this.form.currentGoldPrice;
            let totalKyats = k + ( p / 16 ) + ( ( y / 8) / 16 );
            let amount = ( this.form.q / 16 ) * price;
            this.result = Math.floor(totalKyats * amount).toLocaleString();
            this.form = { k: null, p: 0, y: 0, currentGoldPrice: null, q: 16 }
        },
        changeFont() {
            this.ufont = !this.ufont;
        }
    },
    created() {
        this.cp(),
        this.cy()
    }
})