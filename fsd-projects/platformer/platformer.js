$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 0, 30, 290);
createPlatform(50, 400, 150, 50, "blue");
createPlatform(350, 400, 1, 50, "blue");
createPlatform(500, 420, 200, 60, "blue");
createPlatform(700, 350, 200, 60, "blue");
createPlatform(1000, 500, 100, 60, "blue");
createPlatform( 1300, 500, 100, 60, "lime");
createPlatform(500, 240, 100, 60, "blue");
createPlatform(800, 600, 100, 60, "blue");
    // TODO 3 - Create Collectables
createCollectable("diamond", 1300, 170, 0.5, 0.7);
createCollectable( "steve", 550, 200);
createCollectable( "steve", 840, 570);
    
    // TODO 4 - Create Cannons
createCannon("top", 300, 1000);
createCannon("right", 220, 1000);
createCannon("bottom", 1150,1000);
createCannon("bottom", 900, 950);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
