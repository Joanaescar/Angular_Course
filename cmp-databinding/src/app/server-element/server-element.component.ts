import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, OnDestroy {
  @Input('srvElement') element!: { type: string, name: string, content: string };
  @Input() name!: string;
  @ViewChild('heading', { static: true }) header!: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(this.header.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnDestroy(): void {

  }
}
