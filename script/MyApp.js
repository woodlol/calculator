class MyApp {
    static RENDER(container, table) {
        $(container).append(table);

        return new MyApp(container);
    }

    constructor(container) {
        this.container = container;
    }

    run(obj)
    {
        return new obj(this.container);
    }
}
