// Add scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
const renderer = new THREE.WebGLRenderer();

// Set size of screen to 800x800
renderer.setSize(800, 800);
document.body.appendChild(renderer.domElement);

camera.position.z = 1;


// Plane Geometry
const geometry = new THREE.PlaneGeometry(0.3, 0.2);
const material = new THREE.MeshBasicMaterial();

const dvd = new THREE.Mesh(geometry, material);

// Start at origin
dvd.position.set(0, 0, 0);

scene.add(dvd);


// DVD Speed
let xSpeed = 0.0023;
let ySpeed = 0.0043;


// Change DVD color
function randomColor()
{
    dvd.material.color.setRGB(
        Math.random(),
        Math.random(),
        Math.random()
    );

    console.log("Color changed!");
}


// Make DVD smaller
function makeSmaller()
{
    dvd.scale.x *= 0.5;
    dvd.scale.y *= 0.5;

    console.log("DVD became smaller!");
}


// Change color and size at the start
randomColor();


// Animate
function animate()
{
    renderer.render(scene, camera);

    dvd.position.x += xSpeed;
    dvd.position.y += ySpeed;

    console.log(dvd.position);


    // Right side
    if (dvd.position.x > 0.85)
    {
        xSpeed = -0.0023;

        randomColor();
        makeSmaller();
    }


    // Left side
    else if (dvd.position.x < -0.85)
    {
        xSpeed = 0.0023;

        randomColor();
        makeSmaller();
    }


    // Top side
    else if (dvd.position.y > 0.9)
    {
        ySpeed = -0.0043;

        randomColor();
        makeSmaller();
    }


    // Bottom side
    else if (dvd.position.y < -0.9)
    {
        ySpeed = 0.0043;

        randomColor();
        makeSmaller();
    }
}


renderer.setAnimationLoop(animate);