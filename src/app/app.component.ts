import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-demo';
  isMacOs = false;
  isUbuntu = false;
  isWindows = false;
  isIos = true;
  listOfProducts = [
    { name: 'iPhone', price: '$999' },
    { name: 'iMac', price: '$1999' },
    { name: 'iWatch', price: '$399' },
    { name: 'iPad', price: '$299' }
  ];

  courses = [
    'Angular',
    'React',
    'Data Science',
    'Python',
    'DevOps'
  ];
  selectedCourse = '';
  isHidden = false;
  proficiency = '';
  myColor = '';

  startUsingMac() {
    this.isMacOs = true;
  }

  startUsingLinux() {
    this.isUbuntu = true;
  }

  startUsingWindows() {
    this.isMacOs = false;
    this.isUbuntu = false;
    this.isWindows = true;
  }

  toggleMobileOS() {
    this.isIos = !this.isIos;
  }

  selectAngular() {
    this.selectedCourse = 'Angular';
    this.proficiency = 'good';
    this.myColor = 'tomato';
  }
  selectReact() {
    this.selectedCourse = 'React';
    this.proficiency = 'ok';
    this.myColor = 'skyblue';
  }
  selectDataScience() {
    this.selectedCourse = 'Data Science';
    this.proficiency = 'bad';
    this.myColor = 'purple';
  }
  selectPython() {
    this.selectedCourse = 'Python';
    this.proficiency = 'good';
    this.myColor = 'yellow';
  }
  selectDevOps() {
    this.selectedCourse = 'DevOps';
    this.proficiency = 'ok';
    this.myColor = 'gray';
  }
}
