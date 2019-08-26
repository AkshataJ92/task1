import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {

  arr1:Task[]=[];
  arr2:Task[]=[];
  arr3:Task[]=[];
  arr4:Task[]=[];
  arr5:Task[]=[];
  arr:Task[]=[
    (new Task('1','Surgical','08/13/2019','Surgical request dashboard','High','Kiran','08/10/2019','work with the team','To-Do')),
    (new Task('2','Surgical','08/13/2019','Surgical request dashboard','High','Kiran','08/10/2019','work with the team','To-Do')),
    (new Task('3','Surgical','08/13/2019','Surgical request dashboard','High','Kiran','08/10/2019','work with the team','To-Do')),
    (new Task('4','Surgical','08/13/2019','Surgical request dashboard','High','Kiran','08/10/2019','work with the team','To-Do')),
    (new Task('5','Surgical','08/13/2019','Surgical request dashboard','High','Kiran','08/10/2019','work with the team','To-Do')),
    (new Task('6','Surgical','08/13/2019','Surgical request dashboard','High','Kiran','08/10/2019','work with the team','To-Do'))
  ];
  updatedItem;
  closeResult: string;
  task_id:string='';
  title:string='';
  due_date:string='';
  description:string='';
  priority:string='';
  assign_to:string='';
  assign_date:string='';
  comments:string='';
  status:string='';

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  // Edit modal popup
openEdit(content, i) {
  console.log(i);
  this.task_id = this.arr[i].task_id;
  this.title = this.arr[i].title;
  this.due_date = this.arr[i].due_date;
  this.description = this.arr[i].description;
  this.priority = this.arr[i].priority;
  this.assign_to = this.arr[i].assign_to;
  this.assign_date = this.arr[i].assign_date;
  this.comments = this.arr[i].comments;
  this.status = this.arr[i].status;
  console.log('updating');

  this.updatedItem = i;

  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

// modal
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

UpdateItem() {
  let data = this.updatedItem;
  for (let i = 0; i < this.arr.length; i++) {
    if (i == data) {
        this.arr[i].task_id = this.task_id;
        this.arr[i].title = this.title;
        this.arr[i].due_date = this.due_date;
        this.arr[i].description = this.description;
        this.arr[i].priority = this.priority;
        this.arr[i].assign_to = this.assign_to;
        this.arr[i].assign_date = this.assign_date;
        this.arr[i].comments = this.comments;
        this.arr[i].status = this.status;
          console.log(this.arr);

      this.modalService.dismissAll();
    }
  }

}

 //pushCard(item:Task)
// {
//   this.arr1.push(new Task(this.task_id,this.title,this.due_date,this.description,this.priority,this.assign_to,this.assign_date,this.comments,this.status));
//   this.arr.splice(this.arr.indexOf(item),1);
//   alert("Added Successfully");
// }

modo(value: string,item:Task){
  switch(value) {
    case "In-progress":
      this.arr1.push(new Task(this.task_id,this.title,this.due_date,this.description,this.priority,this.assign_to,this.assign_date,this.comments,this.status));
      this.arr.splice(this.arr.indexOf(item),1);
      alert("Added Successfully");
      break;
    case "Ready_for_QA":
      this.arr2.push(new Task(this.task_id,this.title,this.due_date,this.description,this.priority,this.assign_to,this.assign_date,this.comments,this.status));
      this.arr.splice(this.arr.indexOf(item),1);
      alert("Added Successfully");
    break;
    case "System_testing_start":
      this.arr3.push(new Task(this.task_id,this.title,this.due_date,this.description,this.priority,this.assign_to,this.assign_date,this.comments,this.status));
      this.arr.splice(this.arr.indexOf(item),1);
      alert("Added Successfully");
       break;

       case "System_end":
        this.arr4.push(new Task(this.task_id,this.title,this.due_date,this.description,this.priority,this.assign_to,this.assign_date,this.comments,this.status));
        this.arr.splice(this.arr.indexOf(item),1);
        alert("Added Successfully");
       break;

       case "Development_complete":
        this.arr5.push(new Task(this.task_id,this.title,this.due_date,this.description,this.priority,this.assign_to,this.assign_date,this.comments,this.status));
        this.arr.splice(this.arr.indexOf(item),1);
        alert("Added Successfully");
  }
}



}
