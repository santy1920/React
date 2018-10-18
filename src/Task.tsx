class Task  {
    private id: string;
    private name: string;
    private isSelected: boolean;
    private isImportant: boolean;
    private note: string;
    private dueDate: string;

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
    public getIsSelected() : boolean {
        return this.isSelected;
    }
    public setIsSelected(isSelected: boolean) : void {
        this.isSelected = isSelected;
    }
    public getIsImportant() : boolean {
        return this.isImportant;
    }
    public setIsImportant(isImportant: boolean) : void {
        this.isImportant = isImportant;
    }
    public getNote() : string {
        return this.note;
    }
    public setNote(note: string) : void {
        this.note = note;
    }
    public getDueDate() : string {
        return this.dueDate;
    }
    public setDueDate(dueDate: string) : void {
        this.dueDate = dueDate;
    }
}

export default Task;