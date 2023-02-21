import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  tareas:Tarea[] = [
    {
    id:'1',
    nombre: 'Examen Cliente',
    estado: 'Pendiente'
    },
    {
    id:'2',
    nombre: 'Examen Servidor',
    estado: 'Pendiente'
    },
    {
    id:'3',
    nombre: 'Examen Interfaces',
    estado: 'Realizada'
    },
    {
    id:'4',
    nombre: 'Examen Despliegue',
    estado: 'Pendiente'
    }
    ]

    getTareas(){
      return this.tareas;
    }

    getTarea(id:string){
      let pos = this.tareas.findIndex(t => t.id == id);
      return this.tareas[pos];
    }

    getTotales(){

      return  {
        "totRealizadas":this.tareas.filter(t => t.estado == "Realizada").length,
        "totPendientes":this.tareas.filter(t => t.estado == "Pendiente").length
      }
    }

    deleteTareas(id:string){
      let pos = this.tareas.findIndex(t => t.id == id);
      this.tareas.splice(pos,1);
    }

    filtrarTareas(estado:string){
      return this.tareas.filter(t=>t.estado==estado);
    }

    endTarea(id:string){
      let tareaIndex = this.tareas.findIndex(t=> t.id == id);

      let tarea = this.tareas[tareaIndex];

      tarea.estado = "Realizada";
      return true;
    }

}
