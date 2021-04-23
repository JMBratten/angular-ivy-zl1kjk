import { Component, Input, OnInit } from "@angular/core";
import { ajax, AjaxRequest } from "rxjs/ajax";

export enum e {
  value1 = 1,
  value2 = 2
}

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  private ajaxRequest: AjaxRequest = {
    url:
      'https://dev.api.agvancesky.com/customerblendtickets/zzzzzz?customerGuid=A23F837A-101A-42B8-A6DC-A08517E4C1A3',
    method: 'GET',
    headers: {
      authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjgxRjc0QkI1ODU2OENBOEI3ODE1QzBCNEZEQzIyODZCM0EyRjZGNUEiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJnZmRMdFlWb3lvdDRGY0MwX2NJb2F6b3ZiMW8ifQ.eyJuYmYiOjE2MTkxODMwNTYsImV4cCI6MTYxOTIyNjI1NiwiaXNzIjoiaHR0cHM6Ly9za3lkZW50aXR5YXBpLWRldi5hZ3ZhbmNlc2t5LmNvbSIsImF1ZCI6WyJodHRwczovL3NreWRlbnRpdHlhcGktZGV2LmFndmFuY2Vza3kuY29tL3Jlc291cmNlcyIsInNreWRlbnRpdHkiXSwiY2xpZW50X2lkIjoic2t5ZGVudGl0eS1wYXNzd29yZC1ncmFudC1jbGllbnQiLCJzdWIiOiI2OTcyMmRmNC1lNDY5LTRlN2UtYjg0Yy1kOGI3ZWNhOTYyZmYiLCJhdXRoX3RpbWUiOjEyMzQsImlkcCI6ImlkcCIsIm5hbWUiOiJKb24gQnJhdHRlbiIsImVtYWlsIjoiamJyYXR0ZW5AYWd2YW5jZS5vbm1pY3Jvc29mdC5jb20iLCJmZWF0dXJlcyI6WyJnbG9iYWwtc2VhcmNoIiwibGVkZ2VyIiwib3JkZXIiLCJtYXBwaW5nIiwiYW5hbHl0aWNzIiwiZGlzcGF0Y2giXSwiYW5hbHl0aWNzQXV0aG9yIjoiVHJ1ZSIsImlzR3Jvd2VyMzYwVXNlciI6ImZhbHNlIiwicm9sZXMiOlsiQ29tcGFueUFkbWluIiwiT3JkZXJBZG1pbiJdLCJhZ3ZhbmNlQ29tcGFueUlkIjoiMjYyZmE3MjctZTYzMi00YTM4LWI2OWYtYjRkYzQxZjM4YzYwIiwibGVnYWN5ZGIiOiJCU0NIRVJaVFNUIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInNreWRlbnRpdHkiXSwiYW1yIjpbImFtciJdfQ.cidlUsjp22usgB7MZUxWEmM9dou6vM1Dl3-hFgySKpuLCi5M1AwhanoBy3tsUetfMZ7hrh8s6l9SxYRvs_3KWERHwUngakQasBF0QoZXMxvUzERdKxO9as_UYi94A1zd8VHPlobQQGdP8hzpTVuWkPz2w_1LeGoTH4VaULrW0cneIDbWzRpLT9OGywsivHE7VVjWp0keUFKNULpSSSEDoDEnGYrAVuyW4EXiXew4Im85jk6745JIOi0Er1z49BPtRSGNfv5IYhMCVGk6lMd_OamrmMU1fCA7bmFkqslJLUjCDNTF2KxPzK1eXEWMDL8Q2zEEwlj_vStCAyzILe6giQ'
    }
  };

  ngOnInit() {
    const githubUsers = `https://api.github.com/users?per_page=2`;

    const users = ajax(this.ajaxRequest);

    const subscribe = users.subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }
}
