import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : 'fileSize'
})

export class FileSizePipe implements PipeTransform{
    transform(value: number) {
        console.log(value);
        return (value / (1024 * 1024)).toFixed(2) + 'mb'
    }
}