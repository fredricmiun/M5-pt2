# DT173G - Webbutveckling III

[Mittuniversitetet](https://www.miun.se/ "Mittuniversitetets Hemsida")

### Moment 2

Gulp

1.  Automatiserings-processens syfte

    Syftet med en automatiseringsprocess är att du ska bli mer effektiv och snabbt kunna gå ut i produktion med din produkt. Gulp avbelastar arbetet enormt och kan ses som ett verktyg till för att underlätta. Den kan exempelvis komprimera alla js filer samtidigt istället för att göra det manuellt en efter en.

2.  Paket & Verktyg

    Browsersync - Används för att uppdatera webbläsare utan att du behöver byta fönster. Du har även möjlighet att nå ditt projekt från andra enheter.

    Concat - Detta används för att slå samman filer, exempelvis .js- och .css-filer.

    Uglify-es - Används för att komprimera/minimera .js-filer.

    Uglifycss - Används för att komprimera/minimera .css-filer.

3.  Skapa GitHub-konto

    Ett system som består av Gulp & Git tillsammans med startfiler som en index.html, 1-normalize.css, 2-reset.css, 3-layout.css och 4-base.css. Css-filerna är numrerade för att ihopslagningen skall ske i rätt ordning.

    För att komma igång med systemet laddar du ner filerna och initierar arbetet med en 'npm install' från projektets rotkatalog. Sen är det bara att köra igång!

    _Notering: För att systemet verkligen ska funka behöver alla js-filer befinna sig i samma katalog, likadant gäller för css-filer._

4.  Övrigt

    Ett extra tillägg till systemet är att du kan nå projektet från olika enheter under samma wifi.

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

    Tillägget skapar en tillfällig lokal adress som du använder för att nå från olika enheter. Adressen du ska använda är den efter _Tunnel:_ om inte adressen efter _External:_ funkar.
