class calculator {
    constructor() {
        this.str = '';
        this.click();
        this.calculate();
    }

    click() {
        $(".row span").click((event) => {
            this.str += $(event.currentTarget).text();
            this.display(this.str);

        });
        $(".row strong").click((event) => {
            this.str += $(event.currentTarget).text();
            this.display(this.str);

        });
        $(".clear").click((event) => {
            this.str = '';
            this.display(this.str);

        });
    }
    calculate() {
        $(".calculate").click(() => {
            let wrapStr = this.str.slice(0, -1);
            var results = eval(wrapStr);
            this.display(results);
            this.str = results;
        })
    }
    display(n) {
        $('.display').text(n);
    }
}
new calculator();
