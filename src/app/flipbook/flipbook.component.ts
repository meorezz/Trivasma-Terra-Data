import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import PageFlip from 'page-flip';

@Component({
  selector: 'app-flipbook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flipbook.component.html',
  styleUrls: ['./flipbook.component.css']
})
export class FlipbookComponent implements AfterViewInit {
  @ViewChild('flipbook', { static: true }) flipbookRef!: ElementRef;
  private pageFlip!: InstanceType<typeof PageFlip>;

  pages = [
    'Page 1: Welcome',
    'Page 2: Gif 1',
    'Page 3: Gif 2',
    'Page 4: Gif 3',
    'Page 5: Gif 4',
    'Page 6: Gif 5',
    'Page 7: Gif 6',
    'Page 8: Gif 7',
    'Page 9: Gif 8',
    'Page 10: Gif 9',
    'Page 11: Gif 10'
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      this.pageFlip = new PageFlip(this.flipbookRef.nativeElement, {
        width: 550,
        height: 733,
        size: 'stretch',
        autoSize: true, // Ensures natural scaling
        showCover: true,
        mobileScrollSupport: true,
        flippingTime: 700, // Faster for natural feel
        drawShadow: true,
        maxShadowOpacity: 0.7, // Enhanced shadow for depth
        swipeDistance: 20, // More sensitive swipe
        useMouseEvents: true,
        usePortrait: true,
        startZIndex: 0
      });

      this.pageFlip.loadFromHTML(
        this.flipbookRef.nativeElement.querySelectorAll('.page')
      );
    }, 100);
  }
}