import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'manosalaobra';
  nombre = "juanchi";
  tareas = ["Task N","Task N-1","Completed task N-2","Task k","Task 2","Completed task 1"];

  input:string = "";
//Metodo para agregar tareas a la lista 
creartareas(nuevatarea:any){
  if (!nuevatarea) return
  this.tareas.unshift(nuevatarea);
}
// Metodo para borrar tareas de la lista
borrartarea(tarea:any){
  var i = this.tareas.indexOf(tarea);
  if (i !== -1) {
    this.tareas.splice(i,1);
  }
} 
  
}