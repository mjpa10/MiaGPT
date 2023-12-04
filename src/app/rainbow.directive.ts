import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey',
    'lightgoldenrodyellow',
    'darkolivegreen',
    'mediumseagreen',
    'gainsboro',
    'lightcyan',
    'lightpink',
    'mediumslateblue',
    'darkorange',
    'powderblue',
    'darkslategray',
    'darkturquoise',
    'deepskyblue',
    'mediumorchid',
    'darkmagenta',
    'darkviolet',
    'darkgoldenrod',
    'firebrick',
    'indianred',
    'darkred',
    'orchid',
    'palevioletred',
    'lightcoral',
    'darkseagreen',
    'mediumaquamarine',
    'lightsteelblue',
    'lavender',
    'thistle',
    'plum',
    'lightgray',
    'khaki',
    'burlywood',
    'rosybrown',
    'linen',
    'darkkhaki',
    'lemonchiffon',
    'cornsilk',
    'seashell',
    'honeydew',
    'mintcream'
  ];

  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];
  }

}
