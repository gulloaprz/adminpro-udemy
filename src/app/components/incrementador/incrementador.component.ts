import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input() leyenda: string = "Leyenda";
  @Input() progreso: number;
  @Output() actualizaValor: EventEmitter<number> = new EventEmitter();
  @ViewChild("txtProgress", { static: true }) txtProgress: ElementRef;
  constructor() {}

  ngOnInit() {}

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso += valor;
    this.actualizaValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  onChangeProgress(nuevoValor) {
    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

    this.txtProgress.nativeElement.value = this.progreso;
    this.actualizaValor.emit(this.progreso);
  }
}
