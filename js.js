class Calculator {
    static REMOVE () {return 'C'};
    static CLEAR_ALL () {return 'CE'};
    static RESULT () {return '='};

    constructor (container) {
        this.$container = $(container);
        this.$btns      = this.$container.find('button');
        this.$input     = this.$container.find('input[type=text]');

        this.string = '';

        this.$btns
            .on('click', (ev) => {
                this.initTextInput();
                this.getResult(ev.currentTarget);
            });
    }

    getResult(btn)
    {
        const symbol = $(btn).html();
        switch (symbol) {
            case Calculator.REMOVE():
                this.string = this.string.slice(0, this.string.length - 1);
                break;
            case Calculator.CLEAR_ALL():
                this.string = '';
                break;
            case Calculator.RESULT():
                try {
                    return alert(eval(this.$input.val()));
                } catch (ex) {
                    return alert('Хуйню ввел, базарю');
                }
            default:
                this.string += symbol;
        }

        this.$input.val(this.string);
    }

    initTextInput()
    {
        this.string = this.$input.val();
    }
}

$(document).ready(() => new Calculator('.container'));
