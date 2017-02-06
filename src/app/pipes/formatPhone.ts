import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatPhone' })
export class FormatPhone implements PipeTransform {
  transform(phone: string) {
    if (!phone) return ``;

    if (phone.length < 8) {
        return phone;
    }

    if (phone.length < 9) {
      return `${phone.slice(0, 4)} ${phone.slice(4, 8)}` ;
    }

    if (phone.length === 9) {
      return `${phone.slice(0, 5)} ${phone.slice(5, 9)}` ;
    }

    if (phone.length > 10) {
      return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)} ${phone.slice(7, phone.length + 1)}`;
    }

    return `(${phone.slice(0, 2)}) ${phone.slice(2, 6)} ${phone.slice(6, phone.length + 1)}`;

  }
}
