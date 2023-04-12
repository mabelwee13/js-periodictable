var table = [
    "Aaron", "26", "M", 1, 1,
    "Brenda", "29", "F", 18, 1,
    "Affiq", "18", "M", 1, 2,
    "Peter", "33", "M", 2, 2,
    "Jian Xiang", "24", "M",13, 2,
    "Ai Qi", "24", "F", 14, 2,
    "Joe", "40", "M", 15, 2,
    "Alena", "24", "F", 16, 2,
    "Zi Yuan", "24", "M", 17, 2,
    "Daiyan", "25", "M", 18, 2,
    "Sharon", "30", "F", 1, 3,
    "Alvin", "35", "M", 2, 3,
    "Amilyn", "19", "F", 13, 3,
    "Pauline", "43", "F", 14, 3,
    "Amaris", "19", "M", 15, 3,
    "Julee", "45", "F", 16, 3,
    "Kelly", "32", "F", 17, 3,
    "Evon", "34", "F", 18, 3,
    "Amirah", "26", "F", 1, 4,
    "Perly", "32", "F", 2, 4,
    "Andrew", "24", "M", 3, 4,
    "Ling Li", "24", "F", 4, 4,
    "Chai Lyn", "22", "F", 5, 4,
    "Eugene", "38", "M", 6, 4,
    "Swee Lan", "50", "F", 7, 4,
    "Cindy", "40", "F", 8, 4,
    "Danny", "32", "M", 9, 4,
    "Jenny", "65", "F", 10, 4,
    "Sheril", "33", "F", 11, 4,
    "Amanda", "23", "F", 12, 4,
    "Darrel", "35", "M", 13, 4,
    "Amy", "26", "F", 14, 4,
    "Sally", "41", "F", 15, 4,
    "Cassie", "58", "F", 16, 4,
    "Josef", "24", "M", 17, 4,
    "Noreen", "62", "F", 18, 4,
    "Rose", "59", "F", 1, 5,
    "Emelda", "15", "F", 2, 5,
    "Sherlyn", "17", "F", 3, 5,
    "Eric", "32", "M", 4, 5,
    "Susan", "68", "F", 5, 5,
    "Anabel", "24", "F", 6, 5,
    "Zainul", "22", "M", 7, 5,
    "Litizia", "25", "F", 8, 5,
    "Pei Rui", "24", "M", 9, 5,
    "Ajlaa", "24", "F", 10, 5,
    "Kuhan", "24", "M", 11, 5,
    "Nicholas", "26", "M", 12, 5,
    "Mike", "66", "M", 13, 5,
    "Simz", "19", "F", 14, 5,
    "Terence", "24", "M", 15, 5,
    "Amber", "27", "F", 16, 5,
    "Angely", "24", "F", 17, 5,
    "Michael", "58", "M", 18, 5,
    "Jacky", "27", "M", 1, 6,
    "Wan Lin", "24", "F", 2, 6,
    "Nithia", "24", "F", 4, 9,
    "Wei Kang", "24", "M", 5, 9,
    "Yin Yin", "24", "F", 6, 9,
    "Linda", "24", "F", 7, 9,
    "Amir", "24", "M", 8, 9,
    "Ming Jie", "24", "F", 9, 9,
    "Wan Ting", "24", "F", 10, 9,
    "Jia Yi", "24", "F", 11, 9,
    "Thurga", "24", "F", 12, 9,
    "Swee Chen", "26", "F", 13, 9,
    "James", "21", "M", 14, 9,
    "Yu Chen", "23", "M", 15, 9,
    "Ezuan", "24", "M", 16, 9,
    "Nicol", "24", "F", 17, 9,
    "Hui Mei", "25", "F", 18, 9,
    "Zhu Er", "25", "F", 4, 6,
    "Rozimy", "40", "M", 5, 6,
    "Wen Sin", "22", "F", 6, 6,
    "Xin Qi", "24", "F", 7, 6,
    "Teng Chow", "56", "M", 8, 6,
    "Rajeev", "46", "M", 9, 6,
    "Prima", "24", "M", 10, 6,
    "Ke Xin", "24", "M", 11, 6,
    "Kaylee", "24", "F", 12, 6,
    "Zhi Yen", "24", "F", 13, 6,
    "Shuk Yee", "24", "F", 14, 6,
    "Hui Yi", "24", "F", 15, 6,
    "Wei Bin", "25", "M", 16, 6,
    "Xiao Jiun", "25", "F", 17, 6,
    "Eric", "24", "M", 18, 6,
    "Chang Zhen", "24", "M", 1, 7,
    "Yang Yi", "24", "M", 2, 7,
    "Amelia", "29", "F", 4, 10,
    "Tiffany", "25", "F", 5, 10,
    "Suria", "26", "F", 6, 10,
    "Chai Xuan", "24", "F", 7, 10,
    "Jeslyn", "24", "F", 8, 10,
    "Gary", "23", "M", 9, 10,
    "Adryan", "24", "M", 10, 10,
    "Xin Yee", "24", "F", 11, 10,
    "Kah Mun", "24", "F", 12, 10,
    "Chee Keat", "24", "M", 13, 10,
    "Mei Chin", "24", "F", 14, 10,
    "Mei Seng", "24", "F", 15, 10,
    "Izati", "24", "F", 16, 10,
    "Nurul", "30", "F", 17, 10,
    "Farah", "23", "F", 18, 10,
    "Zulfan", "24", "M", 4, 7,
    "Aimi", "24", "F", 5, 7,
    "Alex", "34", "M", 6, 7,
    "Laura", "24", "F", 7, 7,
    "Dee Sheng", "24", "M", 8, 7,
    "Zhi Rong", "24", "M", 9, 7,
    "Zafyra", "24", "F", 10, 7,
    "Jing Teng", "24", "F", 11, 7,
    "Ali", "47", "M", 12, 7,
    "Azmil", "35", "M", 13, 7,
    "Cheng Xi", "25", "M", 14, 7,
    "David", "24", "M", 15, 7,
    "Megan", "24", "F", 16, 7,
    "Nixon", "30", "M", 17, 7,
    "Winsley", "24", "M", 18, 7
];

var camera,scene,renderer;

var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [], cone:[], };
var controls;

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 3000;
    scene = new THREE.Scene();

    simpleObjectsLayout();
    tableLayout();
    sphereLayout();
    helixLayout();
    gridLayout();
    coneLayout();
    addClickListener(targets.table,'table');
    addClickListener(targets.sphere,'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid,'grid');
    addClickListener(targets.cone,'cone');

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById( 'container' ).appendChild( renderer.domElement );

    initTrackbarControls();

    transform( targets.table, 2000 );

    window.addEventListener( 'resize', onWindowResize, false );

}

function simpleObjectsLayout() {
    for ( var i = 0; i < table.length; i += 5 ) {
        var element = document.createElement( 'div' );
        element.className = 'element';
        
        var number = document.createElement( 'div' );
        number.className = 'number';
        number.textContent = ( i / 5 ) + 1;
        element.appendChild( number );
        
        var symbol = document.createElement( 'div' );
        symbol.className = 'symbol';
        symbol.textContent = table[ i ];
        element.appendChild( symbol );

        var details = document.createElement( 'div' );
        details.className = 'details';
        details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
        if(table[ i + 2 ] == "F"){
            element.style.backgroundColor = 'rgba(255,20,147,' + ( Math.random() * 0.5 + 0.25 ) + ')';
        }else{
            element.style.backgroundColor = 'rgba(0,0,225,' + ( Math.random() * 0.5 + 0.25 ) + ')';
        }
        element.appendChild( details );

        var object = new THREE.CSS3DObject( element );
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;
        scene.add( object );
        objects.push( object );
    }
}

function tableLayout() {
    for ( var i = 0; i < table.length; i += 5 ) {
        var object = new THREE.Object3D();
        object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
        object.position.y = - ( table[ i + 4 ] * 180 ) + 990;
        targets.table.push( object );
    }
}

function addClickListener(target,elementId){
    var button = document.getElementById( elementId );
    button.addEventListener( 'click', function () {
        transform( target, 2000 );
    }, false );
}

function initTrackbarControls() {
    controls = new THREE.TrackballControls( camera, renderer.domElement );
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener( 'change', render );
}

function sphereLayout() {
    var vector = new THREE.Vector3();
    for ( var i = 0, l = objects.length; i < l; i ++ ) {
        var phi = Math.acos( - 1 + ( 2 * i ) / l );
        var theta = Math.sqrt( l * Math.PI ) * phi;
        var object = new THREE.Object3D();
        object.position.setFromSphericalCoords( 800, phi, theta );
        vector.copy( object.position ).multiplyScalar( 2 );
        object.lookAt( vector );
        targets.sphere.push( object );
    }
}

function helixLayout() {
    var vector = new THREE.Vector3();
    for ( var i = 0, l = objects.length; i < l; i ++ ) {
        var theta = i * 0.175 + Math.PI;
        var y = - ( i * 8 ) + 450;
        var object = new THREE.Object3D();
        object.position.setFromCylindricalCoords( 900, theta, y );
        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;
        object.lookAt( vector );
        targets.helix.push( object );
    }
}

function gridLayout() {
    for ( var i = 0; i < objects.length; i ++ ) {
        var object = new THREE.Object3D();
        object.position.x = ( ( i % 5 ) * 400 ) - 800;
        object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
        object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;
        targets.grid.push( object );
    }
}

function coneLayout(){
    var vector = new THREE.Vector3();
    for(var i = 0, l = objects.length; i < l; i++ ){
        var theta = i * 4 + Math.PI;
        var y = - (i *12) + 450;
        var object = new THREE.Object3D();
        object.position.setFromCylindricalCoords (theta , y );
        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;  
        object.lookAt(vector);
        targets.cone.push (object);
    }
}

function transform( targets, duration ) {
    TWEEN.removeAll();
    for ( var i = 0; i < objects.length; i ++ ) {
        var object = objects[ i ];
        var target = targets[ i ];
        new TWEEN.Tween( object.position )
        .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
        .easing( TWEEN.Easing.Exponential.InOut )
        .start();
        new TWEEN.Tween( object.rotation )
        .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
       .easing( TWEEN.Easing.Exponential.InOut )
       .start();
    }
    new TWEEN.Tween( this )
    .to( {}, duration * 2 )
    .onUpdate( render )
    .start();
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
}

function render() {
    renderer.render( scene, camera );
}

function animate() {
    requestAnimationFrame( animate );
    TWEEN.update();
    controls.update();
}