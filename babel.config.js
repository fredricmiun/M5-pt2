module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          // Lägg till browsers här ...
        },
        useBuiltIns: "usage"
      }
    ]
  ]
};
