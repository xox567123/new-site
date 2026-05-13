<!DOCTYPE html>
<html>
<head>
    <title>Stickman Runner</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background: #444;
            font-family: Arial, sans-serif;
        }


        #coinCounter, #healthBar {
            position: fixed;
            left: 10px;
            color: white;
            font-size: 24px;
            font-weight: bold;
            text-shadow: 2px 2px 4px black;
        }
        #coinCounter { top: 10px; }
        #healthBar { top: 45px; }


        #waveCounter {
            position: fixed;
            top: 10px;
            right: 10px;
            color: white;
            font-size: 28px;
            font-weight: bold;
            text-shadow: 2px 2px 4px black;
        }
/* SHOP BUTTON */
#shopButton {
    position: fixed;
    left: 10px;
    top: 130px;
    width: 120px;
    height: 35px;
    background: rgba(255,255,255,0.2);
    border: 2px solid white;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
    user-select: none;
}


/* SHOP OVERLAY */
#shopOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.8);
    display: none;
    z-index: 99999;
}


/* SHOP BOX */
#shopBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    background: #111;
    border: 3px solid white;
    border-radius: 15px;
    padding: 20px;
    color: white;
    text-align: center;
}


/* TABS */
#shopTabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
}


.shopTab {
    padding: 10px 20px;
    border: 2px solid white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    color: white;
}


.activeTab {
    background: white;
    color: black;
}


/* CONTENT */
.shopContent {
    display: block;
}


.hidden {
    display: none;
}


/* SHOP ITEMS (centered, vertical, spaced) */
.shopItem {
    width: 80%;
    margin: 12px auto;
    padding: 12px;
    background: rgba(255,255,255,0.15);
    border: 2px solid white;
    border-radius: 12px;
    cursor: pointer;
    font-size: 20px;
    color: white;
    transition: background 0.2s;
}


.shopItem:hover {
    background: rgba(255,255,255,0.3);
}




/* ===========================
   SWORD MENU (unchanged)
=========================== */


#swordMenuButton {
    position: fixed;
    left: 10px;
    top: 85px;
    width: 120px;
    height: 35px;
    background: rgba(255,255,255,0.2);
    border: 2px solid white;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
    user-select: none;
}


#swordMenuOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.7);
    display: none;
    z-index: 9999;
}


#swordMenuBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    background: #222;
    border: 3px solid white;
    border-radius: 15px;
    padding: 20px;
    color: white;
    text-align: center;
}


.swordOption {
    width: 90%;
    margin: 10px auto;
    padding: 12px;
    background: rgba(255,255,255,0.15);
    border: 2px solid white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
}


.swordOption:hover {
    background: rgba(255,255,255,0.3);
}




/* ===========================
   REMOVED OLD SHOP BUTTONS
=========================== */
/* (All 3-column shop buttons deleted) */




/* ===========================
   WORLD + PLAYER (unchanged)
=========================== */


#ground {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 25vh;
    background: #6b4f2a;
    z-index: -2;
}


#grass {
    position: fixed;
    bottom: 25vh;
    left: 0;
    width: 100%;
    height: 10vh;
    background: #3fa63f;
    z-index: -1;
}


#stickman {
    position: absolute;
    width: 10px;
    height: 60px;
    background: white;
    transform-origin: center;
    transition: transform 0.18s ease-in-out;
}


#stickman::before {
    content: "";
    position: absolute;
    top: -22px;
    left: -10px;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 50%;
}


/* ARMOR 0 */
#armorPlate {
    position: absolute;
    width: 30px;
    height: 35px;
    background: #8b5a2b;
    border: 3px solid #5c3a1a;
    border-radius: 6px;
    top: 15px;
    left: -10px;
    display: none;
    z-index: 4;
}


/* ARMOR 1 */
#armorPlate1 {
    position: absolute;
    width: 30px;
    height: 35px;
    background: linear-gradient(135deg,#d9d9d9,#bfbfbf,#e6e6e6,#a6a6a6);
    border: 3px solid #7a7a7a;
    border-radius: 6px;
    top: 15px;
    left: -10px;
    display: none;
    z-index: 5;
}


/* ARMOR 2 */
#armorPlate2 {
    position: absolute;
    width: 30px;
    height: 35px;
    background: linear-gradient(135deg,#00eaff,#00c8ff,#00aaff,#0088ff);
    border: 3px solid #005f99;
    border-radius: 6px;
    top: 15px;
    left: -10px;
    display: none;
    z-index: 6;
}


.arm {
    position: absolute;
    width: 12px;
    height: 35px;
    background: white;
    border-radius: 10px;
    top: 20px;
    transform-origin: top center;
    transition: transform 0.1s;
    z-index: 5;
}


#leftArm { left: -15px; transform: rotate(20deg); }
#rightArm { left: 13px; transform: rotate(-20deg); }


.leg {
    position: absolute;
    width: 8px;
    height: 40px;
    background: white;
    border-radius: 5px;
    top: 60px;
}


#leftLeg { left: -5px; }
#rightLeg { left: 10px; }


.sword {
    position: absolute;
    width: 8px;
    height: 45px;
    background: silver;
    border-radius: 4px;
    top: 25px;
    left: 2px;
    transform-origin: top center;
    transform: rotate(20deg);
    z-index: 10;
    box-shadow: 0 0 6px white;
}


.fireSword {
    position: absolute;
    width: 8px;
    height: 45px;
    background: orange;
    border-radius: 4px;
    top: 25px;
    left: 2px;
    transform-origin: top center;
    transform: rotate(20deg);
    z-index: 10;
    box-shadow: 0 0 10px orange, 0 0 20px red;
}


.lightningSword {
    position: absolute;
    width: 8px;
    height: 45px;
    background: #b0f7ff;
    border-radius: 4px;
    top: 25px;
    left: 2px;
    transform-origin: top center;
    transform: rotate(20deg);
    z-index: 10;
    box-shadow:
        0 0 8px #00eaff,
        0 0 16px #00c8ff,
        0 0 28px #00aaff,
        0 0 40px #0088ff;
}


/* ENEMIES */
.enemy, .redEnemy, .blueEnemy, .yellowEnemy, .superEnemy, .pinkEnemy {
    position: absolute;
    width: 10px;
    height: 60px;
}


.enemy { background: black; }
.redEnemy { background: red; }
.blueEnemy { background: blue; }
.yellowEnemy { background: yellow; }
.pinkEnemy { background: pink; }
.superEnemy { background: black; }


.enemy::before, .redEnemy::before, .blueEnemy::before, .yellowEnemy::before, .superEnemy::before, .pinkEnemy::before {
    content: "";
    position: absolute;
    top: -22px;
    left: -10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}


.enemy::before { background: black; }
.redEnemy::before { background: red; }
.blueEnemy::before { background: blue; }
.yellowEnemy::before { background: yellow; }
.superEnemy::before { background: black; }
.pinkEnemy::before { background: pink; }


.enemyArm, .enemyLeg {
    position: absolute;
}


.enemyArm {
    width: 12px;
    height: 35px;
    border-radius: 10px;
    top: 20px;
}


.enemyLeftArm { left: -15px; }
.enemyRightArm { left: 13px; }


.enemyLeg {
    width: 8px;
    height: 40px;
    border-radius: 5px;
    top: 60px;
}


.enemyLeftLeg { left: -5px; }
.enemyRightLeg { left: 10px; }


.enemy .enemyArm, .enemy .enemyLeg { background: black; }
.redEnemy .enemyArm, .redEnemy .enemyLeg { background: red; }
.blueEnemy .enemyArm, .blueEnemy .enemyLeg { background: blue; }
.yellowEnemy .enemyArm, .yellowEnemy .enemyLeg { background: yellow; }
.superEnemy .enemyArm, .superEnemy .enemyLeg { background: black; }
.pinkEnemy .enemyArm, .pinkEnemy .enemyLeg { background: pink; }










.coin {
    position: absolute;
    width: 25px;
    height: 25px;
    background: gold;
    border-radius: 50%;
    border: 3px solid orange;
    box-shadow: 0 0 10px yellow;
}


</style>
</head>
<body>






<div id="ground"></div>
<div id="grass"></div>


<div id="coinCounter">Coins: 0</div>
<div id="healthBar">Health: 100</div>
<div id="swordMenuButton">Swords</div>
<div id="waveCounter">Wave: 1</div>




<div id="shopButton">Shop</div>
<div id="swordMenuOverlay">
    <div id="swordMenuBox">
        <h2>Select Sword</h2>
        <div id="optionNone" class="swordOption">No Sword</div>
        <div id="optionNormal" class="swordOption">Normal Sword</div>
        <div id="optionFire" class="swordOption">Fire Sword</div>
        <div id="optionSuper" class="swordOption">Super Sword</div>
        <div id="optionLightning" class="swordOption">Lightning Sword</div>
    </div>
</div>
<div id="shopOverlay">
    <div id="shopBox">


        <div id="shopTabs">
            <div class="shopTab activeTab" data-tab="swordsTab">Swords</div>
            <div class="shopTab" data-tab="armorTab">Armor</div>
            <div class="shopTab" data-tab="healthTab">Health</div>
        </div>


        <div id="swordsTab" class="shopContent">
            <div class="shopItem" id="swordShop">Buy Sword (100)</div>
            <div class="shopItem" id="fireSwordShop">Fire Sword (500)</div>
            <div class="shopItem" id="lightningSwordShop">Lightning Sword (1000)</div>
        </div>


        <div id="armorTab" class="shopContent hidden">
            <div class="shopItem" id="armorShop">Armor (250)</div>
            <div class="shopItem" id="armor1Shop">Armor 1 (500)</div>
            <div class="shopItem" id="armor2Shop">Armor 2 (1000)</div>
        </div>


        <div id="healthTab" class="shopContent hidden">
            <div class="shopItem" id="hpShop">Max HP (100)</div>
            <div class="shopItem" id="healShop">Heal (100)</div>
            <div class="shopItem" id="regenShop">Regen (200)</div>
        </div>


    </div>
</div>






<div id="stickman">
    <div id="armorPlate"></div>
    <div id="armorPlate1"></div>
    <div id="armorPlate2"></div>
    <div id="leftArm" class="arm"></div>
    <div id="rightArm" class="arm"></div>
    <div id="leftLeg" class="leg"></div>
    <div id="rightLeg" class="leg"></div>
</div>


<script>














/* ===========================
   GAME STATE
=========================== */
let coins = 0;
let wave = 1;
let easyMode = false; 
let health = 100;
let maxHealth = 100;


let hasSword = false;
let hasFireSword = false;
let hasSuperSword = false;
let hasLightningSword = false;


let ownsNormalSword = false;
let ownsFireSword = false;
let ownsSuperSword = false;
let ownsLightningSword = false;


let hasArmor = false;
let hasArmor1 = false;
let hasArmor2 = false;


let healthRegen = 0; // MUST be a number

let fly = false;

let hardcore = false;

let enemiesRemaining = 0;
let enemiesSpawned = 0;


let facing = "right";
let spawnInterval = null;


const stickman = document.getElementById("stickman");
const leftArm = document.getElementById("leftArm");
const rightArm = document.getElementById("rightArm");


let swordLeft = null;
let swordRight = null;






/* ===========================
   POSITIONING
=========================== */
const grassHeight = window.innerHeight * 0.10;
const groundHeight = window.innerHeight * 0.25;
const stickmanHeight = 60;


const grassTop = window.innerHeight - (groundHeight + grassHeight);
const groundLevel = grassTop - stickmanHeight;


let x = window.innerWidth / 2;
let y = groundLevel;


let velY = 0;
const speed = 4;
const gravity = 0.6;
const jumpForce = -10;


const keys = { ArrowUp: false, ArrowLeft: false, ArrowRight: false };


let lastHit = 0;
const hitCooldown = 600;


let cheatBuffer = "";


/* ===========================
   UI UPDATE
=========================== */
function updateCoins() {
    document.getElementById("coinCounter").textContent = "Coins: " + coins;
}
function updateHealth() {
    document.getElementById("healthBar").textContent = "Health: " + health;
}
function updateWave() {
    document.getElementById("waveCounter").textContent = "Wave: " + wave;
}








/* ===========================
   INPUT
=========================== */
document.addEventListener("keydown", e => {
    if (keys.hasOwnProperty(e.key)) keys[e.key] = true;




    if (e.key === "ArrowLeft") {
        facing = "left";
        stickman.style.transform = "scaleX(-1)";
    }
    if (e.key === "ArrowRight") {
        facing = "right";
        stickman.style.transform = "scaleX(1)";
    }




if (e.code === "Space" && !gamePaused) {
    attack();
}








// ONE cheatBuffer update, not two
cheatBuffer += e.key;
if (cheatBuffer.length > 10) cheatBuffer = cheatBuffer.slice(-10);


// coin cheat
if (cheatBuffer.endsWith("coin")) {

    // Hardcore mode: give coins, no penalty
    if (hardcore === true) {
        coins += 100;
        updateCoins();
        cheatBuffer = "";
        return;
    }

    // Normal mode: risk-reward coin cheat
    if (health <= 50) {
        return; // prevents the cheat from running if health is too low
    }

    coins += 100;
    maxHealth -= 50;

    updateHealth();
    updateCoins();

    cheatBuffer = "";
}


// fly cheat
if (cheatBuffer.endsWith("fly")) {
fly = true;
    cheatBuffer = "";
}





// boss cheat
if (cheatBuffer.endsWith("bss")) {


    // Turn off all other swords
    hasNormalSword = false;
    hasFireSword = false;
    hasLightningSword = false;


    // Only roll for the sword if you DON'T already have it
    if (!hasSuperSword) {
        const chance = Math.random(); // 0.0 to 1.0


        if (chance < 0.20) {
            hasSuperSword = true;


            // Left sword
            swordLeft = document.createElement("div");
            swordLeft.classList.add("superSword");
            leftArm.appendChild(swordLeft);


            // Right sword
            swordRight = document.createElement("div");
            swordRight.classList.add("superSword");
            rightArm.appendChild(swordRight);
        }
    }


    // Boss cheat rewards
    coins += 100;
    maxHealth += 100;
    health = maxHealth;


    updateHealth();
    updateCoins();
    spawnCSBoss();


    cheatBuffer = "";
}












// hardcore
if (cheatBuffer.endsWith("hardcore")) {
    maxHealth = 200;
    health = maxHealth;
    updateHealth();

     hardcore = true;
    ownsSuperSword = true; 
     hasSword = false;
     hasFireSword = false;
     hasLightingSword = false;
    hasSupersword = true;
    hasArmor2 = true;

    if (swordLeft) swordLeft.remove();
    if (swordRight) swordRight.remove();


    swordLeft = document.createElement("div");
    swordLeft.classList.add("superSword");
    leftArm.appendChild(swordLeft);


    swordRight = document.createElement("div");
    swordRight.classList.add("superSword");
    rightArm.appendChild(swordRight);


    document.getElementById("armorPlate2").style.display = "block";


    // 🔥 Hide the shop permanently
    const shop = document.getElementById("shopButton");
    shop.style.display = "none";
   swordMenuButton.style.display = "none";

    // 🔁 Keep it hidden (in case other code tries to show it)
    setInterval(() => {
        shop.style.display = "none";
   swordMenuButton.style.display = "none";
    }, 50);


    updateCoins();
    cheatBuffer = "";
}




// easy
if (cheatBuffer.endsWith("easy")) {
    coins += 1000;
    maxHealth = 500;
    easyMode = true;
    health = maxHealth;
    healthRegen = 250;
    updateHealth();
    ownsSuperSword = true;
    hasArmor2 = true;
    document.getElementById("armorPlate2").style.display = "block"; // FIXED
    updateCoins();
    cheatBuffer = "";
}
// wave cheat
if (cheatBuffer.endsWith("wave")) {
    coins += 10000;
    maxHealth = 1000;
    health = 1000;
    updateHealth();
    updateCoins();
    cheatBuffer = "";
}
// EMPause cheat
if (cheatBuffer.endsWith("em-type")) {
    pauseGame();
    emtypes();
    cheatBuffer = "";
}

// super cheat
if (cheatBuffer.endsWith("super")) {
    superSpawn();
    gamePaused = false;
    cheatBuffer = "";
}

// black cheat
if (cheatBuffer.endsWith("black")) {
    blackSpawn();
    gamePaused = false;
    cheatBuffer = "";
}

// red cheat
if (cheatBuffer.endsWith("red")) {
    redSpawn();
    gamePaused = false;
    cheatBuffer = "";
}

// blue cheat  <-- FIXED QUOTES
if (cheatBuffer.endsWith("blue")) {
    blueSpawn();
    gamePaused = false;
    cheatBuffer = "";
}

// yellow cheat
if (cheatBuffer.endsWith("yellow")) {
    yellowSpawn();
    gamePaused = false;
    cheatBuffer = "";
}

// pink cheat
if (cheatBuffer.endsWith("pink")) {
    pinkSpawn();
    gamePaused = false;
    cheatBuffer = "";
}
// EMPause cheat
if (cheatBuffer.endsWith("devmode")) {
    pauseGame();
    devmode();
    cheatBuffer = "";
}











    if (e.key === "O" || e.key === "o") megaSkipWave();
    if (e.key === "N" || e.key === "n") skipWave();
 if (e.key === "P" || e.key === "p") {
    if (gamePaused) {
      gamePaused = false
    } else {
        pauseGame();
    }
}




});


document.addEventListener("keyup", e => {
    if (keys.hasOwnProperty(e.key)) keys[e.key] = false;
});




/* ===========================
   COINS
=========================== */
function spawnCoin(xPos) {
    const coin = document.createElement("div");
    coin.classList.add("coin");
    coin.style.left = xPos + "px";
    coin.style.top = (grassTop - 25) + "px";
    document.body.appendChild(coin);
}


function checkCoinCollision() {
    const coinsOnScreen = document.querySelectorAll(".coin");
    const rect1 = stickman.getBoundingClientRect();


    coinsOnScreen.forEach(coin => {
        const rect2 = coin.getBoundingClientRect();
        const overlap =
            rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top;


        if (overlap) {
            coin.remove();
            coins += 1;
            updateCoins();
        }
    });
}




/* ===========================
   ENEMY SPAWNING
=========================== */
function createEnemy(type, side) {
    const enemy = document.createElement("div");


    if (type === "black") {
        enemy.classList.add("enemy");
        enemy.hp = 30;
        enemy.damage = 3;
        enemy.speed = 1.6;
    }
    if (type === "red") {
        enemy.classList.add("redEnemy");
        enemy.hp = 60;
        enemy.damage = 7;
        enemy.speed = 1.4;
    }
    if (type === "blue") {
        enemy.classList.add("blueEnemy");
        enemy.hp = 80;
        enemy.damage = 12;
        enemy.speed = 2.2;
    }
    if (type === "yellow") {
        enemy.classList.add("yellowEnemy");
        enemy.hp = 100;
        enemy.damage = 15;
        enemy.speed = 2.4;
    }
    if (type === "super") {
        enemy.classList.add("superEnemy");
        enemy.hp = 500;
        enemy.damage = 35;
        enemy.speed = 2.4;
    }
    if (type === "pink") {
        enemy.classList.add("pinkEnemy");
        enemy.hp = 200;      // 2x yellow HP
        enemy.damage = 19;   // 25% more than yellow
        enemy.speed = 1.8;   // 25% slower than yellow
    }


    enemy.style.left = side === "left" ? "0px" : (window.innerWidth - 20) + "px";
    enemy.style.top = groundLevel + "px";


    enemy.innerHTML = `
        <div class="enemyArm enemyLeftArm"></div>
        <div class="enemyArm enemyRightArm"></div>
        <div class="enemyLeg enemyLeftLeg"></div>
        <div class="enemyLeg enemyRightLeg"></div>
    `;


    document.body.appendChild(enemy);
}




function spawnWave() {
    enemiesSpawned = 0;


    // MAX 50 enemies
    enemiesRemaining = Math.min(50, 2 * wave + 1);


    // Red start at wave 10
    let redCount = Math.max(0, wave - 9);
    if (redCount > enemiesRemaining) redCount = enemiesRemaining;


    // Blue start at wave 20
    let blueCount = Math.max(0, wave - 19);
    if (blueCount > redCount) blueCount = redCount;


    redCount -= blueCount;


    // Yellow start at wave 30
    let yellowCount = Math.max(0, wave - 29);
    if (yellowCount > blueCount) yellowCount = blueCount;


    blueCount -= yellowCount;


    // ⭐ Pink start at wave 51
    let pinkCount = Math.max(0, wave - 50);
    if (pinkCount > yellowCount) pinkCount = yellowCount;


    yellowCount -= pinkCount;


    // Remaining are black
    let blackCount = enemiesRemaining - redCount - blueCount - yellowCount - pinkCount;


    clearInterval(spawnInterval);
    spawnInterval = setInterval(() => {


        if (enemiesSpawned >= enemiesRemaining) {
            clearInterval(spawnInterval);
            return;
        }


        for (let i = 0; i < 2; i++) {


            if (enemiesSpawned >= enemiesRemaining) break;


            let type = "black";


            if (pinkCount > 0) {
                type = "pink";
                pinkCount--;
            } else if (yellowCount > 0) {
                type = "yellow";
                yellowCount--;
            } else if (blueCount > 0) {
                type = "blue";
                blueCount--;
            } else if (redCount > 0) {
                type = "red";
                redCount--;
            } else if (blackCount > 0) {
                type = "black";
                blackCount--;
            }


            const side = (enemiesSpawned % 2 === 0) ? "left" : "right";
            createEnemy(type, side);


            enemiesSpawned++;
        }


    }, 3000);


    // Heal player slightly each wave
    health = Math.min(maxHealth, health + 20);
    updateHealth();
}
function superSpawn() {
    const side = Math.random() < 0.5 ? "left" : "right";
    createEnemy("super", side);
}
function blackSpawn() {
    const side = Math.random() < 0.5 ? "left" : "right";
    createEnemy("black", side);
}
function redSpawn() {
    const side = Math.random() < 0.5 ? "left" : "right";
    createEnemy("red", side);
}
function blueSpawn() {
    const side = Math.random() < 0.5 ? "left" : "right";
    createEnemy("blue", side);
}

function yellowSpawn() {
    const side = Math.random() < 0.5 ? "left" : "right";
    createEnemy("yellow", side);
}
function pinkSpawn() {
    const side = Math.random() < 0.5 ? "left" : "right";
    createEnemy("pink", side);
}


















/* ===========================
   MOVEMENT (FLY FIXED)
=========================== */
function updateMovement() {

    // LEFT / RIGHT stays the same
    if (keys.ArrowLeft) x -= speed;
    if (keys.ArrowRight) x += speed;

    /* ===========================
       FLY MODE
    ============================ */
    if (fly === true) {

        // Move UP
        if (keys.ArrowUp) {
            y -= speed * 2;
        }

        // Move DOWN
        if (keys.ArrowDown) {
            y += speed * 2;
        }

        // No gravity while flying
        velY = 0;
    }

    /* ===========================
       NORMAL JUMPING
    ============================ */
    else {
        if (keys.ArrowUp && y >= groundLevel) {
            velY = jumpForce;
        }

        velY += gravity;
        y += velY;

        // Only snap to ground when NOT flying
        if (y > groundLevel) {
            y = groundLevel;
            velY = 0;
        }
    }

    // WALL LIMITS
    if (x < 0) x = 0;
    if (x > window.innerWidth - 20) x = window.innerWidth - 20;

    // APPLY POSITION
    stickman.style.left = x + "px";
    stickman.style.top = y + "px";
}






function getEnemyRange(enemy) {
    if (enemy.classList.contains("bossEnemy")) return 180;   // still big, but not unfair
    if (enemy.classList.contains("superEnemy")) return 120; // elite but manageable
    if (enemy.classList.contains("pinkEnemy")) return 120; // elite but manageable
    if (enemy.classList.contains("yellowEnemy")) return 120; // elite but manageable
    if (enemy.classList.contains("blueEnemy")) return 100;   // fast but short reach
    if (enemy.classList.contains("redEnemy")) return 130;    // mid-range
    return 110; // black enemy = short reach
}












/* ===========================
   ENEMY AI (FIXED)
=========================== */
function updateEnemies() {
    const enemies = document.querySelectorAll(
        ".enemy, .redEnemy, .blueEnemy, .yellowEnemy, .superEnemy, .pinkEnemy, .bossEnemy"
    );


    const now = Date.now();
    const rect1 = stickman.getBoundingClientRect();


    let enemiesHitting = 0; // COUNT how many enemies are attacking


    enemies.forEach(enemy => {


        if (health <= 0) return;


        let ex = parseFloat(enemy.style.left);
        const speed = enemy.speed;


        // Move toward player
        if (ex < x) ex += speed;
        else ex -= speed;


        enemy.style.left = ex + "px";


        // Face player
        enemy.style.transform = ex < x ? "scaleX(1)" : "scaleX(-1)";


        const enemyRect = enemy.getBoundingClientRect();
        const range = getEnemyRange(enemy);


        const inRange =
            enemyRect.left < rect1.right + range &&
            enemyRect.right > rect1.left - range;


        if (inRange) {


            /* ===========================
               ARM SWING ANIMATION (FIXED)
            ============================ */
            if (!enemy.classList.contains("bossEnemy")) {
                const leftA = enemy.querySelector(".enemyLeftArm");
                const rightA = enemy.querySelector(".enemyRightArm");


                if (leftA && rightA) {
                    leftA.style.transformOrigin = "top center";
                    rightA.style.transformOrigin = "top center";


                    leftA.style.transform = "rotate(45deg)";
                    rightA.style.transform = "rotate(-45deg)";


                    setTimeout(() => {
                        leftA.style.transform = "rotate(20deg)";
                        rightA.style.transform = "rotate(-20deg)";
                    }, 120);
                }
            }


            enemiesHitting++;
        }
    });


    /* ===========================
       APPLY STACKED DAMAGE
    ============================ */
    if (enemiesHitting > 0 && now - lastHit > hitCooldown) {
        lastHit = now;


        let totalDamage = 0;


        enemies.forEach(enemy => {
            if (enemy.isConnected) {
                const enemyRect = enemy.getBoundingClientRect();
                const range = getEnemyRange(enemy);


                const inRange =
                    enemyRect.left < rect1.right + range &&
                    enemyRect.right > rect1.left - range;


                if (inRange) {
                    let dmg = enemy.classList.contains("bossEnemy")
                        ? 50
                        : enemy.damage;


                    totalDamage += dmg;
                }
            }
        });


        /* ===========================
           ARMOR REDUCTION (APPLIED ONCE)
        ============================ */
        if (hasArmor) totalDamage = Math.floor(totalDamage * 0.8);
        if (hasArmor1) totalDamage = Math.floor(totalDamage * 0.7);
        if (hasArmor2) totalDamage = Math.floor(totalDamage * 0.6);


        health -= totalDamage;


        if (health <= 0) {
            updateHealth();
            restartGame();
            return;
        }


        updateHealth();
    }
}
















































/* ===========================
   ATTACK
=========================== */
function attack() {
    const enemies = document.querySelectorAll(
        ".enemy, .redEnemy, .blueEnemy, .yellowEnemy, .superEnemy, .pinkEnemy, .bossEnemy"
    );
    const playerRect = stickman.getBoundingClientRect();


    let enemyLeft = false;
    let enemyRight = false;


    enemies.forEach(enemy => {
        const rect = enemy.getBoundingClientRect();
        if (rect.left < playerRect.left) enemyLeft = true;
        if (rect.right > playerRect.right) enemyRight = true;
    });


    if (enemyLeft && enemyRight) {
        leftArm.style.transform = "rotate(80deg)";
        rightArm.style.transform = "rotate(-80deg)";
        setTimeout(() => {
            leftArm.style.transform = "rotate(20deg)";
            rightArm.style.transform = "rotate(-20deg)";
        }, 150);
    } else {
        if (enemyLeft) {
            leftArm.style.transform = "rotate(80deg)";
            setTimeout(() => leftArm.style.transform = "rotate(20deg)", 150);
        }
        if (enemyRight) {
            rightArm.style.transform = "rotate(-80deg)";
            setTimeout(() => rightArm.style.transform = "rotate(-20deg)", 150);
        }
    }


    dealDamage();
}




/* ===========================
   DAMAGE
=========================== */
function dealDamage() {
    const enemies = document.querySelectorAll(
        ".enemy, .redEnemy, .blueEnemy, .yellowEnemy, .superEnemy, .pinkEnemy, .bossEnemy"
    );
    const playerRect = stickman.getBoundingClientRect();


    // Base range: normal vs super
    let range = hasSuperSword ? 320 : 160;


    // Lightning sword: 10% less than normal sword range
    if (hasLightningSword) {
        range = 160 * 0.9;
    }


    enemies.forEach(enemy => {
        const rect = enemy.getBoundingClientRect();


        const inRange =
            rect.left < playerRect.right + range &&
            rect.right > playerRect.left - range;


        if (!inRange) return;


        // BASE DAMAGE
        let dmg = 10;
        if (hasSword) dmg = 20;
        if (hasFireSword) dmg = 20;
        if (hasSuperSword) dmg = 50;
        if (hasLightningSword) dmg = 25;


        // Ensure HP exists
        if (enemy.hp == null) enemy.hp = 20;
        if (!enemy.maxHP) enemy.maxHP = enemy.hp;


        // LIGHTNING SWORD ONE-TAP (10% chance, non-boss)
        if (hasLightningSword && !enemy.classList.contains("bossEnemy")) {
            if (Math.random() < 0.10) {
                enemy.hp = 0;
            }
        }


        // Apply normal damage if still alive
        if (enemy.hp > 0) {
            enemy.hp -= dmg;
        }


        // FIRE SWORD BURN EFFECT
        if (hasFireSword) {
            applyBurn(enemy);
        }


        // Boss HP bar update
        if (enemy.classList.contains("bossEnemy")) {
            const fill = enemy.querySelector(".bossHPFill");
            const maxHP = parseInt(fill.getAttribute("data-maxhp"));
            const percent = Math.max(0, (enemy.hp / maxHP) * 100);
            fill.style.width = percent + "%";
        }


        // Enemy dies
        if (enemy.hp <= 0) {
            const xPos = parseFloat(enemy.style.left);


            // COIN DROP AMOUNTS
            let coinCount = 2; // default for black + blue


            if (enemy.classList.contains("redEnemy")) coinCount = 4;
            if (enemy.classList.contains("blueEnemy")) coinCount = 6;
            if (enemy.classList.contains("yellowEnemy")) coinCount = 8;
            if (enemy.classList.contains("pinkEnemy")) coinCount = 10; // ⭐ pink drops more
            if (enemy.classList.contains("superEnemy")) coinCount = 100; // ⭐ super drops more
            if (enemy.classList.contains("bossEnemy")) coinCount = 20;


            // DROP THE COINS
            for (let i = 0; i < coinCount; i++) {
                spawnCoin(xPos + i * 10);
            }


            // Boss special drop
            if (enemy.classList.contains("bossEnemy")) {
                if (!ownsSuperSword && Math.random() < 0.10) {
                    giveSuperSword();
                }
            }


            enemy.remove();
            enemiesRemaining--;
        }
    });
}
































/* ===========================
   WAVE CONTROL
=========================== */
function nextWave() {
    wave++;
    updateWave();


    // Boss every 50 waves
    if (wave % 50 === 0) {
        spawnBoss();
        return;
    }


    spawnWave(); // Yellow enemies already handled inside spawnWave()
}


function megaSkipWave() {


    // How many enemies are left in this wave (max 50)
    let remaining = enemiesRemaining;
    let coinsToGive = 0;


    // ===========================
    // REBUILD WAVE DISTRIBUTION
    // (exact same logic as spawnWave)
    // ===========================


    // Red start at wave 10
    let redCount = Math.max(0, wave - 9);
    if (redCount > remaining) redCount = remaining;


    // Blue start at wave 20
    let blueCount = Math.max(0, wave - 19);
    if (blueCount > redCount) blueCount = redCount;


    redCount -= blueCount;


    // Yellow start at wave 30
    let yellowCount = Math.max(0, wave - 29);
    if (yellowCount > blueCount) yellowCount = blueCount;


    blueCount -= yellowCount;


    // Remaining are black
    let blackCount = remaining - redCount - blueCount - yellowCount;


    // Safety clamp (never exceed 50)
    if (blackCount < 0) blackCount = 0;


    // ===========================
    // COIN DROP AMOUNTS (your rules)
    // ===========================
    coinsToGive += blackCount  * 2;
    coinsToGive += redCount    * 4;
    coinsToGive += blueCount   * 8;
    coinsToGive += yellowCount * 8;
    // Bosses later if you add them:
    // coinsToGive += bossCount * 20;


    // Award coins
    coins += coinsToGive;
    updateCoins();


    // Remove any enemies currently on screen
    document.querySelectorAll(
        ".enemy, .redEnemy, .blueEnemy, .yellowEnemy, .bossEnemy"
    ).forEach(e => e.remove());


    enemiesRemaining = 0;


    nextWave();
}












function skipWave() {
    // Added .yellowEnemy
    const enemies = document.querySelectorAll(".enemy, .redEnemy, .blueEnemy, .yellowEnemy, .bossEnemy");


    // Skip locked until player presses an arrow key
    if (skipLocked) return;


    // Only skip if NO enemies are on screen
    if (enemies.length !== 0) return;


    // Lock skipping until arrow key is pressed
    skipLocked = true;


    nextWave();
}




































/* ===========================
   BOSS SPAWN (Every 50 Waves)
=========================== */
function spawnBoss() {


    // How many bosses to spawn this cycle
    const bossCount = Math.floor(wave / 50);


    // Boss stats scale every 50 waves
    const baseHP = 660;
    const baseDMG = 100;


    const bonusHP = (bossCount - 1) * 50;
    const bonusDMG = (bossCount - 1) * 50;


    const finalHP = baseHP + bonusHP;
    const finalDMG = baseDMG + bonusDMG;


    enemiesRemaining = bossCount;


    for (let i = 0; i < bossCount; i++) {


        const boss = document.createElement("div");
        boss.classList.add("bossEnemy");
        boss.style.position = "absolute";


        // 3x size of normal enemy
        boss.style.width = "30px";
        boss.style.height = "180px";


        // Spread bosses evenly across screen
        const spacing = window.innerWidth / (bossCount + 1);
        boss.style.left = (spacing * (i + 1)) + "px";
        boss.style.top = (groundLevel - 120) + "px";


        boss.hp = finalHP;
        boss.damage = finalDMG;
        boss.speed = 1.2;


        // Boss body parts (head, arms, legs)
        boss.innerHTML = `
            <!-- Head -->
            <div style="
                position:absolute;
                top:-60px;
                left:-35px;
                width:100px;
                height:100px;
                background:purple;
                border-radius:50%;
            "></div>


            <!-- Left Arm -->
            <div style="
                position:absolute;
                width:30px;
                height:120px;
                background:purple;
                border-radius:15px;
                top:20px;
                left:-40px;
            "></div>


            <!-- Right Arm -->
            <div style="
                position:absolute;
                width:30px;
                height:120px;
                background:purple;
                border-radius:15px;
                top:20px;
                left:40px;
            "></div>


            <!-- Left Leg -->
            <div style="
                position:absolute;
                width:25px;
                height:140px;
                background:purple;
                border-radius:12px;
                top:180px;
                left:-10px;
            "></div>


            <!-- Right Leg -->
            <div style="
                position:absolute;
                width:25px;
                height:140px;
                background:purple;
                border-radius:12px;
                top:180px;
                left:15px;
            "></div>


<!-- Boss HP bar -->
<div class="bossHPBar" style="
    position:absolute;
    width:200px;
    height:20px;
    background:black;
    border:3px solid white;
    top:-90px;
    left:-85px;">
    
    <div class="bossHPFill" 
         data-maxhp="${finalHP}" 
         style="
            width:100%;
            height:100%;
            background:red;">
    </div>


</div>
     `;


        document.body.appendChild(boss);
    }
}
setInterval(() => {


const enemiesOnScreen = document.querySelectorAll(
    ".enemy, .redEnemy, .blueEnemy, .yellowEnemy, .pinkEnemy, .superEnemy, .bossEnemy"
).length > 0;




    if (!enemiesOnScreen) return;


    // STOP if already full health
    if (health >= maxHealth) {
        health = maxHealth;
        return;
    }


    if (healthRegen > 0 && health > 0) {
        health += healthRegen;


        // HARD CAP
        if (health > maxHealth) {
            health = maxHealth;
        }


        updateHealth();
    }


}, 1000);
function spawnCSBoss() {


    // How many bosses to spawn this cycle
const bossCount = Math.max(1, Math.floor(wave / 50));






    // Boss stats scale every 50 waves
    const baseHP = 660;
    const baseDMG = 100;


    const bonusHP = (bossCount - 1) * 50;
    const bonusDMG = (bossCount - 1) * 50;


    const finalHP = baseHP + bonusHP;
    const finalDMG = baseDMG + bonusDMG;


    enemiesRemaining = bossCount;


    for (let i = 0; i < bossCount; i++) {


        const boss = document.createElement("div");
        boss.classList.add("bossEnemy");
        boss.style.position = "absolute";


        // 3x size of normal enemy
        boss.style.width = "30px";
        boss.style.height = "180px";


        // Spread bosses evenly across screen
        const spacing = window.innerWidth / (bossCount + 1);
        boss.style.left = (spacing * (i + 1)) + "px";
        boss.style.top = (groundLevel - 120) + "px";


        boss.hp = finalHP;
        boss.damage = finalDMG;
        boss.speed = 1.2;


        // Boss body parts (head, arms, legs)
        boss.innerHTML = `
            <!-- Head -->
            <div style="
                position:absolute;
                top:-60px;
                left:-35px;
                width:100px;
                height:100px;
                background:purple;
                border-radius:50%;
            "></div>


            <!-- Left Arm -->
            <div style="
                position:absolute;
                width:30px;
                height:120px;
                background:purple;
                border-radius:15px;
                top:20px;
                left:-40px;
            "></div>


            <!-- Right Arm -->
            <div style="
                position:absolute;
                width:30px;
                height:120px;
                background:purple;
                border-radius:15px;
                top:20px;
                left:40px;
            "></div>


            <!-- Left Leg -->
            <div style="
                position:absolute;
                width:25px;
                height:140px;
                background:purple;
                border-radius:12px;
                top:180px;
                left:-10px;
            "></div>


            <!-- Right Leg -->
            <div style="
                position:absolute;
                width:25px;
                height:140px;
                background:purple;
                border-radius:12px;
                top:180px;
                left:15px;
            "></div>


<!-- Boss HP bar -->
<div class="bossHPBar" style="
    position:absolute;
    width:200px;
    height:20px;
    background:black;
    border:3px solid white;
    top:-90px;
    left:-85px;">
    
    <div class="bossHPFill" 
         data-maxhp="${finalHP}" 
         style="
            width:100%;
            height:100%;
            background:red;">
    </div>


</div>
     `;


        document.body.appendChild(boss);
    }
}
setInterval(() => {


    const enemiesOnScreen = document.querySelectorAll(
        ".enemy, .redEnemy, .blueEnemy, .yellowEnemy, .bossEnemy"
    ).length > 0;


    if (!enemiesOnScreen) return;


    // STOP if already full health
    if (health >= maxHealth) {
        health = maxHealth;
        return;
    }


    if (healthRegen > 0 && health > 0) {
        health += healthRegen;


        // HARD CAP
        if (health > maxHealth) {
            health = maxHealth;
        }


        updateHealth();
    }


}, 1000);






























/* ===========================
   RESTART
=========================== */
function restartGame() {
    coins = 0;
    wave = 1;
    maxHealth = 100;
    health = 100;


    hasSword = false;
    hasFireSword = false;
    hasSuperSword = false;


    ownsNormalSword = false;
    ownsFireSword = false;
    ownsSuperSword = false;


    hasLightningSword = false;
    ownsLightningSword = false;


    hasArmor = false;
    hasArmor1 = false;
    hasArmor2 = false;


    healthRegen = 0;


    /* ===========================
       REMOVE ALL ARMOR VISUALS
    ============================ */
    document.getElementById("armorPlate").style.display = "none";
    document.getElementById("armorPlate1").style.display = "none";
    document.getElementById("armorPlate2").style.display = "none";


/* ===========================
   REMOVE ALL ENEMIES + COINS
=========================== */
document.querySelectorAll(
    ".enemy, .redEnemy, .blueEnemy, .yellowEnemy, .pinkEnemy, .superEnemy, .bossEnemy, .coin"
).forEach(e => e.remove());




    /* ===========================
       REMOVE SWORD VISUALS
    ============================ */
    if (swordLeft) swordLeft.remove();
    if (swordRight) swordRight.remove();


    swordLeft = null;
    swordRight = null;


    updateCoins();
    updateHealth();
    updateWave();


    spawnWave();
}








/* ===========================
   SHOPS
=========================== */


/* NORMAL SWORD */
document.getElementById("swordShop").addEventListener("click", () => {
    const price = getPrice(100);
    if (ownsNormalSword || coins < price) return;


    coins -= price;
    updateCoins();
    ownsNormalSword = true;
});


/* FIRE SWORD */
document.getElementById("fireSwordShop").addEventListener("click", () => {
    const price = getPrice(500);
    if (ownsFireSword || coins < price) return;


    coins -= price;
    updateCoins();
    ownsFireSword = true;
});


/* LIGHTNING SWORD */
document.getElementById("lightningSwordShop").addEventListener("click", () => {
    const price = getPrice(1000);
    if (ownsLightningSword || coins < price) return;


    coins -= price;
    updateCoins();
    ownsLightningSword = true;
});




/* ===========================
   ARMOR UPGRADES
=========================== */


/* ARMOR 0 — Leather */
document.getElementById("armorShop").addEventListener("click", () => {
    const price = getPrice(250);
    if (hasArmor || coins < price) return;


    coins -= price;
    updateCoins();
    hasArmor = true;


    document.getElementById("armorPlate").style.display = "block";
});


/* ARMOR 1 — Iron */
document.getElementById("armor1Shop").addEventListener("click", () => {
    const price = getPrice(500);
    if (hasArmor1 || coins < price) return;


    coins -= price;
    updateCoins();
    hasArmor1 = true;


    document.getElementById("armorPlate").style.display = "none";
    document.getElementById("armorPlate1").style.display = "block";
});


/* ARMOR 2 — Diamond */
document.getElementById("armor2Shop").addEventListener("click", () => {
    const price = getPrice(1000);
    if (hasArmor2 || coins < price) return;


    coins -= price;
    updateCoins();
    hasArmor2 = true;


    document.getElementById("armorPlate").style.display = "none";
    document.getElementById("armorPlate1").style.display = "none";
    document.getElementById("armorPlate2").style.display = "block";
});




/* ===========================
   MAX HP UPGRADE (NO HEAL)
=========================== */
document.getElementById("hpShop").addEventListener("click", () => {
    const price = getPrice(100);
    if (coins < price) return;


    coins -= price;
    updateCoins();


    maxHealth += 20;
    updateHealth();
});


function getPrice(basePrice) {
    return easyMode ? Math.floor(basePrice * 0.10) : basePrice;
}








/* ===========================
   HEAL BUTTON (100 coins)
=========================== */
document.getElementById("healShop").addEventListener("click", () => {
    if (coins < 100) return;


    coins -= 100;
    updateCoins();


    health = Math.min(maxHealth, health + 30);


    updateHealth();
});




/* ===========================
   HEALTH REGEN UPGRADE (200)
=========================== */
document.getElementById("regenShop").addEventListener("click", () => {
    if (coins < 200) return;


    coins -= 200;
    updateCoins();


    healthRegen += 1; // +1 regen per second
});




















/* ===========================
   SHOP OPEN/CLOSE
=========================== */


document.getElementById("shopButton").addEventListener("click", () => {
    gamePaused = true;
    document.getElementById("shopOverlay").style.display = "block";
});


/* Close shop when clicking outside the box */
document.getElementById("shopOverlay").addEventListener("click", (e) => {
    if (e.target.id === "shopOverlay") {
        gamePaused = false;
        document.getElementById("shopOverlay").style.display = "none";
    }
});




/* ===========================
   SHOP TAB SWITCHING
=========================== */


document.querySelectorAll(".shopTab").forEach(tab => {
    tab.addEventListener("click", () => {


        // Remove active highlight from all tabs
        document.querySelectorAll(".shopTab").forEach(t => t.classList.remove("activeTab"));


        // Highlight clicked tab
        tab.classList.add("activeTab");


        // Hide all content sections
        document.querySelectorAll(".shopContent").forEach(c => c.classList.add("hidden"));


        // Show selected tab content
        const target = tab.dataset.tab;
        document.getElementById(target).classList.remove("hidden");
    });
});




/* ===========================
   SHOP ITEM CLICK HANDLERS
=========================== */


/* NORMAL SWORD */
document.getElementById("swordShop").addEventListener("click", () => {
    if (ownsNormalSword || coins < 100) return;
    coins -= 100;
    updateCoins();
    ownsNormalSword = true;
});


/* FIRE SWORD */
document.getElementById("fireSwordShop").addEventListener("click", () => {
    if (ownsFireSword || coins < 500) return;
    coins -= 500;
    updateCoins();
    ownsFireSword = true;
});


/* LIGHTNING SWORD */
document.getElementById("lightningSwordShop").addEventListener("click", () => {
    if (ownsLightningSword || coins < 1000) return;
    coins -= 1000;
    updateCoins();
    ownsLightningSword = true;
});




/* ARMOR 0 — Leather */
document.getElementById("armorShop").addEventListener("click", () => {
    if (hasArmor || coins < 250) return;
    coins -= 250;
    updateCoins();
    hasArmor = true;
    document.getElementById("armorPlate").style.display = "block";
});


/* ARMOR 1 — Iron */
document.getElementById("armor1Shop").addEventListener("click", () => {
    if (hasArmor1 || coins < 500) return;
    coins -= 500;
    updateCoins();
    hasArmor1 = true;
    document.getElementById("armorPlate").style.display = "none";
    document.getElementById("armorPlate1").style.display = "block";
});


/* ARMOR 2 — Diamond */
document.getElementById("armor2Shop").addEventListener("click", () => {
    if (hasArmor2 || coins < 1000) return;
    coins -= 1000;
    updateCoins();
    hasArmor2 = true;
    document.getElementById("armorPlate").style.display = "none";
    document.getElementById("armorPlate1").style.display = "none";
    document.getElementById("armorPlate2").style.display = "block";
});




/* MAX HP UPGRADE (NO HEAL) */
document.getElementById("hpShop").addEventListener("click", () => {
    if (coins < 100) return;
    coins -= 100;
    updateCoins();
    maxHealth += 20;
    updateHealth();
});




/* HEAL BUTTON */
document.getElementById("healShop").addEventListener("click", () => {
    if (coins < 100) return;
    coins -= 100;
    updateCoins();
    health = Math.min(maxHealth, health + 30);
    updateHealth();
});




/* HEALTH REGEN UPGRADE */
document.getElementById("regenShop").addEventListener("click", () => {
    if (coins < 200) return;
    coins -= 200;
    updateCoins();
    healthRegen += 1;
});




/* ===========================
   PASSIVE HEALTH REGEN LOOP
=========================== */


setInterval(() => {


    if (gamePaused) return; // regen stops while shop is open


    const enemiesOnScreen = document.querySelectorAll(
        ".enemy, .redEnemy, .blueEnemy, .yellowEnemy, .bossEnemy"
    ).length > 0;


    if (!enemiesOnScreen) return;


    if (healthRegen > 0 && health > 0) {
        health = Math.min(maxHealth, health + healthRegen);
        updateHealth();
    }


}, 1000);






/* ===========================
   NORMAL SWORD
=========================== */
function giveSword() {
    hasSword = true;
    document.getElementById("swordShop").classList.add("disabled");


    swordLeft = document.createElement("div");
    swordLeft.classList.add("sword");
    leftArm.appendChild(swordLeft);


    swordRight = document.createElement("div");
    swordRight.classList.add("sword");
    rightArm.appendChild(swordRight);
}


function giveFireSword() {
    hasFireSword = true;
    hasSword = false;
    hasSuperSword = false;
    hasLightningSword = false;


    if (swordLeft) swordLeft.remove();
    if (swordRight) swordRight.remove();


    swordLeft = document.createElement("div");
    swordLeft.classList.add("fireSword");
    leftArm.appendChild(swordLeft);


    swordRight = document.createElement("div");
    swordRight.classList.add("fireSword");
    rightArm.appendChild(swordRight);


    document.getElementById("fireSwordShop").classList.add("disabled");
}


/* ===========================
   LIGHTNING SWORD
=========================== */
function giveLightningSword() {
    hasLightningSword = true;
    hasSword = false;
    hasFireSword = false;
    hasSuperSword = false;


    if (swordLeft) swordLeft.remove();
    if (swordRight) swordRight.remove();


    swordLeft = document.createElement("div");
    swordLeft.classList.add("lightningSword");
    leftArm.appendChild(swordLeft);


    swordRight = document.createElement("div");
    swordRight.classList.add("lightningSword");
    rightArm.appendChild(swordRight);


    document.getElementById("lightningSwordShop").classList.add("disabled");
}


/* ===========================
   FIRE SWORD BURN EFFECT
=========================== */
function applyBurn(enemy) {
    if (enemy.isBurning) return;


    enemy.isBurning = true;


    const maxHP = enemy.maxHP || enemy.hp;
    const burnDamage = maxHP * 0.05;
    let ticks = 5;


    const burnInterval = setInterval(() => {
        if (!document.body.contains(enemy)) {
            clearInterval(burnInterval);
            return;
        }


        enemy.hp -= burnDamage;


        if (enemy.classList.contains("bossEnemy")) {
            const fill = enemy.querySelector(".bossHPFill");
            const maxHP = parseInt(fill.getAttribute("data-maxhp"));
            const percent = Math.max(0, (enemy.hp / maxHP) * 100);
            fill.style.width = percent + "%";
        }


        if (enemy.hp <= 0) {
            enemy.remove();
            enemiesRemaining--;
            clearInterval(burnInterval);
            return;
        }


        ticks--;
        if (ticks <= 0) {
            enemy.isBurning = false;
            clearInterval(burnInterval);
        }


    }, 1000);
}


let gamePaused = false;


function pauseGame() {
    gamePaused = true;
}


function resumeGame() {
    gamePaused = false;
}


document.getElementById("swordMenuButton").addEventListener("click", () => {
    pauseGame();
    updateSwordMenu();
    document.getElementById("swordMenuOverlay").style.display = "block";
});


/* Show only swords the player OWNS */
function updateSwordMenu() {
    document.getElementById("optionNormal").style.display = ownsNormalSword ? "block" : "none";
    document.getElementById("optionFire").style.display = ownsFireSword ? "block" : "none";
    document.getElementById("optionSuper").style.display = ownsSuperSword ? "block" : "none";
    document.getElementById("optionLightning").style.display = ownsLightningSword ? "block" : "none";
}


/* EQUIP SWORD — does NOT remove ownership */
function equipSword(type) {


    if (swordLeft) swordLeft.remove();
    if (swordRight) swordRight.remove();


    hasSword = false;
    hasFireSword = false;
    hasSuperSword = false;
    hasLightningSword = false;


    if (type === "normal" && ownsNormalSword) {
        hasSword = true;
        giveSword();
    }


    if (type === "fire" && ownsFireSword) {
        hasFireSword = true;
        giveFireSword();
    }


    if (type === "super" && ownsSuperSword) {
        hasSuperSword = true;
        giveSuperSword();
    }


    if (type === "lightning" && ownsLightningSword) {
        hasLightningSword = true;
        giveLightningSword();
    }


    document.getElementById("swordMenuOverlay").style.display = "none";
    resumeGame();
}


/* Menu button events */
document.getElementById("optionNone").onclick = () => equipSword("none");
document.getElementById("optionNormal").onclick = () => equipSword("normal");
document.getElementById("optionFire").onclick = () => equipSword("fire");
document.getElementById("optionSuper").onclick = () => equipSword("super");
document.getElementById("optionLightning").onclick = () => equipSword("lightning");




/* ===========================
   SUPER SWORD (BOSS DROP)
=========================== */
function giveSuperSword() {


    // DO NOT block the function if the player already owns it
    ownsSuperSword = true;


    hasSuperSword = true;
    hasSword = false;
    hasFireSword = false;
    hasLightningSword = false;


    if (swordLeft) swordLeft.remove();
    if (swordRight) swordRight.remove();


    swordLeft = document.createElement("div");
    swordLeft.classList.add("superSword");
    leftArm.appendChild(swordLeft);


    swordRight = document.createElement("div");
    swordRight.classList.add("superSword");
    rightArm.appendChild(swordRight);
}




















/* ===========================
   SUPER SWORD STYLE
=========================== */
const style = document.createElement("style");
style.textContent = `
.superSword {
    position: absolute;
    width: 24px;   /* 3x normal width */
    height: 135px; /* 3x normal height */
    background: black;
    border-radius: 6px;
    top: 25px;
    left: -6px;
    transform-origin: top center;
    transform: rotate(20deg);
    z-index: 10;
    box-shadow: 0 0 10px black;
}
`;
document.head.appendChild(style);


document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
        skipLocked = false;
    }
});




/* ===========================
   GAME LOOP
=========================== */
function gameLoop() {
    if (!gamePaused) {
        updateMovement();
        updateEnemies();
        checkCoinCollision();
    }


    // ONE BLOCK — fixed so it DOES NOT loop waves
    if (!gameLoop.lastEnemyTime) gameLoop.lastEnemyTime = Date.now();


    const anyEnemy = document.querySelector(
        ".enemy, .redEnemy, .blueEnemy, .yellowEnemy, .bossEnemy"
    );


    if (anyEnemy) {
        // enemies exist → reset timer
        gameLoop.lastEnemyTime = Date.now();
    } else {
        // no enemies → check timer
        if (Date.now() - gameLoop.lastEnemyTime >= 6000) {


            // IMPORTANT FIX:
            // Reset timer BEFORE starting next wave
            gameLoop.lastEnemyTime = Date.now();


            nextWave();
        }
    }


    requestAnimationFrame(gameLoop);
}
/* ===========================
   ENEMY TYPE MENU
=========================== */

function emtypes() {
    // If menu already exists, remove it (toggle behavior)
    const oldMenu = document.getElementById("enemyTypeMenu");
    if (oldMenu) {
        oldMenu.remove();
        return;
    }
// Create menu container
const menu = document.createElement("div");
menu.id = "enemyTypeMenu";
menu.style.position = "absolute";
menu.style.top = "20%";                 // moves it up so it doesn't touch ground
menu.style.right = "20px";              // sticks it to the right side
menu.style.left = "auto";               // disables center positioning
menu.style.transform = "none";          // removes centering transform
menu.style.background = "#222";
menu.style.padding = "15px";            // slightly smaller
menu.style.border = "3px solid white";
menu.style.borderRadius = "10px";
menu.style.zIndex = "9999";
menu.style.display = "flex";
menu.style.flexDirection = "column";
menu.style.gap = "8px";                 // smaller spacing
menu.style.width = "180px";             // smaller width
menu.style.textAlign = "center";
menu.style.color = "white";
menu.style.fontFamily = "Arial";



    // Title
    const title = document.createElement("h2");
    title.innerText = "Enemy Types";
    title.style.margin = "0 0 10px 0";
    menu.appendChild(title);

    // Helper to create buttons
    function makeButton(label, onClickFunction) {
        const btn = document.createElement("button");
        btn.innerText = label;
        btn.style.padding = "10px";
        btn.style.fontSize = "16px";
        btn.style.cursor = "pointer";
        btn.style.border = "2px solid white";
        btn.style.background = "#444";
        btn.style.color = "white";
        btn.style.borderRadius = "6px";

        btn.onclick = onClickFunction;
        menu.appendChild(btn);
    }

    /* ===========================
       BUTTONS (PUT YOUR FUNCTIONS HERE)
    ============================ */

    makeButton("Black Enemy", () => {
        blackSpawn();
       gamePaused = false;
        menu.remove();
    });

    makeButton("Red Enemy", () => {
        redSpawn();
       gamePaused = false;
        menu.remove();
    });

    makeButton("Blue Enemy", () => {
        blueSpawn();
       gamePaused = false;
        menu.remove();
    });

    makeButton("Yellow Enemy", () => {
        yellowSpawn();
       gamePaused = false;
        menu.remove();
    });

    makeButton("Pink Enemy", () => {
        pinkSpawn();
       gamePaused = false;
        menu.remove();
    });

    makeButton("Super Enemy", () => {
        superSpawn();
       gamePaused = false;
        menu.remove();
    });

    makeButton("Boss Enemy", () => {
        spawnCSBoss();
       gamePaused = false;
        menu.remove();
    });

    /* ===========================
       CLOSE BUTTON
    ============================ */
    makeButton("Close", () => {
        menu.remove();
    });

    // Add menu to page
    document.body.appendChild(menu);
}
/* ===========================
   DEV MODE MENU
=========================== */

function devmode() {
    // Toggle off if already open
    const oldMenu = document.getElementById("devModeMenu");
    if (oldMenu) {
        oldMenu.remove();
        return;
    }

    // Create menu container
    const menu = document.createElement("div");
    menu.id = "devModeMenu";
    menu.style.position = "absolute";
    menu.style.top = "20%";
    menu.style.right = "20px";
    menu.style.background = "#222";
    menu.style.padding = "15px";
    menu.style.border = "3px solid white";
    menu.style.borderRadius = "10px";
    menu.style.zIndex = "9999";
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.gap = "10px";
    menu.style.width = "220px";
    menu.style.textAlign = "center";
    menu.style.color = "white";
    menu.style.fontFamily = "Arial";

    // Title
    const title = document.createElement("h2");
    title.innerText = "Dev Mode";
    title.style.margin = "0 0 10px 0";
    menu.appendChild(title);

    /* ===========================
       Helper: Create a labeled input
    ============================ */
    function makeInput(label, onEnter) {
        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.gap = "4px";

        const lbl = document.createElement("span");
        lbl.innerText = label;

        const input = document.createElement("input");
        input.type = "text";
        input.style.padding = "6px";
        input.style.borderRadius = "5px";
        input.style.border = "2px solid white";
        input.style.background = "#444";
        input.style.color = "white";

        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") onEnter(input.value);
        });

        container.appendChild(lbl);
        container.appendChild(input);
        menu.appendChild(container);
    }

    /* ===========================
       Helper: Create a button
    ============================ */
    function makeButton(label, onClickFunction) {
        const btn = document.createElement("button");
        btn.innerText = label;
        btn.style.padding = "10px";
        btn.style.fontSize = "16px";
        btn.style.cursor = "pointer";
        btn.style.border = "2px solid white";
        btn.style.background = "#444";
        btn.style.color = "white";
        btn.style.borderRadius = "6px";

        btn.onclick = onClickFunction;
        menu.appendChild(btn);
    }

    /* ===========================
       HEALTH INPUT
    ============================ */
    makeInput("Health:", (value) => {
        const num = Number(value);
        if (!isNaN(num) && num > 0) {
            health = num;
            maxHealth = Math.max(maxHealth, num);
            updateHealth();
        }
    });

    /* ===========================
       COINS INPUT
    ============================ */
    makeInput("Coins:", (value) => {
        const num = Number(value);
        if (!isNaN(num)) {
            coins = num;
            updateCoins();
        }
    });

    /* ===========================
       WAVE INPUT
    ============================ */
    makeInput("Wave:", (value) => {
        const num = Number(value);
        if (!isNaN(num) && num > 0) {
            wave = num;
            updateWave();

            // Clear all enemies
            document.querySelectorAll(
                ".enemy, .redEnemy, .blueEnemy, .yellowEnemy, .pinkEnemy, .superEnemy, .bossEnemy, .coin"
            ).forEach(e => e.remove());

            // Spawn new wave
            spawnWave();
        }
    });

    /* ===========================
       SUPER SWORD BUTTON
       (You plug in your function)
    ============================ */
    makeButton("SuperSword", () => {
    ownsSuperSword = true; 
     hasSword = false;
     hasFireSword = false;
     hasLightingSword = false;
    hasSupersword = true;
    if (swordLeft) swordLeft.remove();
    if (swordRight) swordRight.remove();
    swordLeft = document.createElement("div");
    swordLeft.classList.add("superSword");
    leftArm.appendChild(swordLeft);
    swordRight = document.createElement("div");
    swordRight.classList.add("superSword");
    rightArm.appendChild(swordRight);
    });

    /* ===========================
       ARMOR2 BUTTON
       (You plug in your function)
    ============================ */
    makeButton("Armor2", () => {
     hasArmor = false;
    hasArmor1 = false;
    hasArmor2 = true;
    document.getElementById("armorPlate2").style.display = "block";
    });

    /* ===========================
       CLOSE BUTTON
    ============================ */
    makeButton("Close", () => {
        menu.remove();
    });

    // Add menu to page
    document.body.appendChild(menu);
}














/* ===========================
   INITIALIZE
=========================== */
updateCoins();
updateHealth();
updateWave();
spawnWave();
gameLoop();
</script>


</body>
</html>


