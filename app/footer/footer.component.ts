import {Component} from "angular2/core";
import {Resource} from "./resource";
@Component({
    selector: "footer",
    templateUrl: "app/footer/footer.component.html"
})
export class FooterComponent {
  public resources: Resource[] = [
      new Resource("https://angular.io/", "Angular 2"),
      new Resource("http://semantic-ui.com/", "Semantic UI"),
      new Resource("https://icons8.com/", "Icons8")
  ];
}
