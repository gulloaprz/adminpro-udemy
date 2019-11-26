import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() {
    this.subscription = this.regresaObservable().subscribe(
      numero => {
        console.log("Subs", numero);
      },
      error => {
        console.error("Hubo un error", error);
      },
      () => {
        console.log("Terminó el observador");
      }
    );
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    let contador = 0;
    return new Observable(observer => {
      const intervalo = setInterval(() => {
        contador++;

        const salida = {
          contador
        };

        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   clearInterval(intervalo);
        //   contador = 0;
        //   observer.error(":(");
        // }
      }, 1000);
    }).pipe(
      map(resp => resp["contador"]),
      filter((valor, index) => {
        if (valor % 2 == 1) {
          return true;
        }
      })
    );
  }
}
