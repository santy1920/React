import Task from './Task';

class List {
    private name: string;
    private id: string;
    private tasks: Task[] = [];

    constructor(id:string,name:string,tasks:Task[]) {
        this.id= id;
        this.name = name;
        this.tasks = tasks;
    } 

    public getId() : string {
        return this.id;
    }
    public setId(id: string) : void {
        this.id = id;
    }
    public getName() : string {
        return this.name;
    }
    public setName(name: string) : void {
        this.name = name;
    }
    public getTasks() : Task[] {
        return this.tasks;
    }
    public setTasks(tasks: Task[]) : void {
        this.tasks = tasks;
    }
}

export default List;