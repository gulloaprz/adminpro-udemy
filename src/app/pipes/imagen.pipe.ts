import { Pipe, PipeTransform } from "@angular/core";
import { environment } from "src/environments/environment";
const BASE_URL = environment.BASE_URL;

@Pipe({
  name: "imagen"
})
export class ImagenPipe implements PipeTransform {
  transform(imagen: string, tipo: string): any {
    const url = `${BASE_URL}/imagenes/${tipo}/${imagen || "xxx"}`;
    return url;
  }
}
