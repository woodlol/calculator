class Calculator {
    static REMOVE = 'C';
    static CLEAR_ALL = 'CE';
    static RESULT = '=';

    constructor (container) {
        this.$container = $(container);
        this.$btns      = this.$container.find('button');
        this.$input     = this.$container.find('input[type=text]');

        this.string = '';

        this.$btns.on('click', (ev) => {
            this.initTextInput();
            this.getResult(ev.currentTarget);
        });
    }

    getResult(btn)
    {
        const symbol = $(btn).html();
        switch (symbol) {
            case Calculator.REMOVE:
                this.string = this.string.slice(0, this.string.length - 1);
                break;
            case Calculator.CLEAR_ALL:
                this.string = '';
                break;
            case Calculator.RESULT:
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

    static getTable()
    {
        return `
        <table class="table">
					<tr>
						<td colspan="3">
							<label>
								<input type="text" class="form-control">
							</label>
						</td>
						<td>
							<button class="btn btn-primary">/</button>
						</td>
					</tr>
					<tr>
						<td>
							<button class="btn btn-primary">7</button>
						</td>
						<td>
							<button class="btn btn-primary">8</button>
						</td>
						<td>
							<button class="btn btn-primary">9</button>
						</td>
						<td>
							<button class="btn btn-primary">*</button>
						</td>
					</tr>
					<tr>
						<td>
							<button class="btn btn-primary">4</button>
						</td>
						<td>
							<button class="btn btn-primary">5</button>
						</td>
						<td>
							<button class="btn btn-primary">6</button>
						</td>
						<td>
							<button class="btn btn-primary">-</button>
						</td>
					</tr>
					<tr>
						<td>
							<button class="btn btn-primary">1</button>
						</td>
						<td>
							<button class="btn btn-primary">2</button>
						</td>
						<td>
							<button class="btn btn-primary">3</button>
						</td>
						<td>
							<button class="btn btn-primary">+</button>
						</td>
					</tr>
					<tr>
						<td><button class="btn btn-danger">CE</button></td>
						<td>
							<button class="btn btn-primary">0</button>
						</td>
						<td>
							<button class="btn btn-warning" id="c">C</button></td>
						<td>
							<button class="btn btn-primary" id="result">=</button>
						</td>
					</tr>
				</table>
        `;
    }
}
