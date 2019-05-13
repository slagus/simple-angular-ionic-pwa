import { Component, AfterViewInit } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{
  public banners = [
    {"src" : "/assets/samples/banner.png"},
    {"src" : "/assets/samples/banner.png"},
    {"src" : "/assets/samples/banner.png"},
    {"src" : "/assets/samples/banner.png"},
    {"src" : "/assets/samples/banner.png"},
    {"src" : "/assets/samples/banner.png"}
  ]

  public tvChannels = [
    {"src": "/assets/samples/tv-channel.png"},
    {"src": "/assets/samples/tv-channel.png"},
    {"src": "/assets/samples/tv-channel.png"},
    {"src": "/assets/samples/tv-channel.png"},
    {"src": "/assets/samples/tv-channel.png"},
    {"src": "/assets/samples/tv-channel.png"}
  ]

  public tvPosters = [
    {"src": "/assets/samples/tv-poster.png"},
    {"src": "/assets/samples/tv-poster.png"},
    {"src": "/assets/samples/tv-poster.png"},
    {"src": "/assets/samples/tv-poster.png"},
    {"src": "/assets/samples/tv-poster.png"},
    {"src": "/assets/samples/tv-poster.png"}
  ]

  public movies = [
    {"src": "/assets/samples/movie.png"},
    {"src": "/assets/samples/movie-2.png"},
    {"src": "/assets/samples/movie-2.png"},
    {"src": "/assets/samples/movie.png"},
    {"src": "/assets/samples/movie-2.png"},
    {"src": "/assets/samples/movie.png"}
  ]

  ngAfterViewInit () {
    $('.dpad-focusable')
      .SpatialNavigation({
        straightOnly: true,
      })
      .first()
      .focus();

      $('.dpad-focusable')
          .on('sn:enter-down', function() {
            $('.dpad-focusable')
              .removeClass('clickdown')
              .filter(this)
              .addClass('clickdown');
          });


  }

}