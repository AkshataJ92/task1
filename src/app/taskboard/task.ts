export class Task {
  public constructor(
    public task_id:string,
    public title:string,
    public due_date:string,
    public description:string,
    public priority:string,
    public assign_to:string,
    public assign_date:string,
    public comments:string,
    public status:string
  ){}
}
