import { Component, OnInit } from '@angular/core';
import { weAre } from '../../../assets/info/data';
import $ from 'jquery';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  data;
  constructor() {
    this.data = weAre.date;
  }

  ngOnInit(): void {
    $(document).ready(function () {
      var date = new Date(weAre.date.englishDate).getTime();
      var myfunc = setInterval(function () {
        // code goes here
        var now = new Date().getTime();
        var timeleft = date - now;

        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));

        $(".days .number").html(days)
        $(".hours .number").html(hours)
        $(".minutes .number").html(minutes)

      }, 1000);
    });
  }

}
