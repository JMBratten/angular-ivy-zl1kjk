import { Component, Input, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

export enum e {
  value1 = 1,
  value2 = 2
};

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  ngOnInit() {
    const githubUsers = `https://api.github.com/users?per_page=2`;

    const users = ajax.getJSON(githubUsers);

    const subscribe = users.subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }
}
