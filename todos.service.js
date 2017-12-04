class TodosService {
    constructor() {
        this.todos = [{
            text: 'Сходить на работу',
            time: new Date(),
            done: 0
        }, {
            text: 'Заплатить за квартиру',
            time: new Date(),
            done: 0
        }];

        this.addTodo = (todo) => this.todos = this.todos.concat(todo);
        this.getTodos = () => this.todos;
    }
}

export default new TodosService();