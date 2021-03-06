# DT173G - Webbutveckling III

[Mittuniversitetet](https://www.miun.se/ "Mittuniversitetets Hemsida")

### Moment 5

REST API - Steg 2

Här finner du källkoden för Moment 5.

Länk till projektet: http://studenter.miun.se/~frfr1800/DT173G/M5/

Kortare sammanfattning över hur sajten fungerar: 

Kurser jag läst radas upp och ner med äldst överst. Denna information går att redigera, då information lagrats i input fields, och för att spara trycker man på den gröna spara-knappen. Jag har valt att lägga informationen i input-fields då jag tycker det är användarvänligt. 

Det går även att ta bort informationen genom att trycka på den röda ta bort-knappen. 

Ny data går att skapa längst ned på sidan. Tomma fält accepteras inte. Den nya informationen som du fyller i kommer med hjälp av fetch api automatiskt uppdatera listan utan refresh.

1.  Automatiserings-processens syfte

    Syftet med en automatiseringsprocess är att du ska bli mer effektiv och snabbt kunna gå ut i produktion med din produkt. Gulp avbelastar arbetet enormt och kan ses som ett verktyg till för att underlätta. Den kan exempelvis komprimera alla js filer samtidigt istället för att göra det manuellt en efter en.

2.  Paket & Verktyg

    Browsersync - Används för att uppdatera webbläsare utan att du behöver byta fönster. Du har även möjlighet att nå ditt projekt från andra enheter.

    Concat - Detta används för att slå samman filer, exempelvis .js- och .css-filer.

    Uglify-es - Används för att komprimera/minimera .js-filer.

    gulp-sass - Används för att konvertera scss-filerna till .css-filer
    
    gulp-babel - Används för att konvertera ES6-kod till ES5.
    
    gulp-sourcemaps - Används för att klargöra var någonstans felet ligger i respektive filer.

3.  Systemet

    Ett system som består av Gulp & Git tillsammans med startfiler som en index.html, _base.scss, _layout.scss, _normalize.scss, _reset.scss, main.scss.

    För att komma igång med systemet laddar du ner filerna och initierar arbetet med en 'npm install' i terminalen från projektets rotkatalog. Sen är det bara att köra igång!

    _Notering: För att systemet verkligen ska funka behöver alla js-filer befinna sig i samma katalog, likadant gäller för scss-filer._

4.  Övrigt

    Ett extra tillägg till systemet är att du kan nå projektet från olika enheter under samma wifi.

    Tillägget skapar en tillfällig lokal adress som du använder för att nå från olika enheter. Adressen du ska använda är den efter _Tunnel:_ om inte adressen efter _External:_ funkar.

```javascript
browserSync.init({
  server: {
    baseDir: "build/"
  },
  online: true,
  tunnel: true,
  logLevel: "debug"
});
```
