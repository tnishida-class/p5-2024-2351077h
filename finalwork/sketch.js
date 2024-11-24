// 最終課題を制作しよう

let cX, cY; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  cX = width / 2 - 20;
  cY = height / 4;
}
//画面サイズを変更すると黒目がずれてしまいます（アニメーションにより） 
// rを押したら初期位置になりました

function draw() {
  background(220);
  
  //顔
  let X = width / 2;
  let Y = height / 2;
  let diameters = [500, 400];
  let offsets = [
    { x: 0, y: 0 },
    { x: 0, y: 50 }
  ];

  for (let i = 0; i < diameters.length; i++) {
    let d = diameters[i];
    let offset = offsets[i];

    stroke(0);
    strokeWeight(2);
    fill(i === 0 ? [0, 0, 255, 150] : [255]);
    ellipse(X + offset.x, Y + offset.y, d, d);
  }

  // 白目
  let centerX = X - 50;
  let centerY = height / 4;
  let offset = 100;
  let ellipses = [
    { width: 100, height: 200, color: [255] },
    { width: 100, height: 200, color: [255] }
  ];

  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    fill(e.color);
    ellipse(centerX + i * offset, centerY, e.width, e.height);
  }

  //黒目
  let coffset = 40;
  let c = [
    { width: 40, height: 80, color: [0] },
    { width: 40, height: 80, color: [0] }
  ];

  for (let i = 0; i < c.length; i++) {
    let e = c[i];
    fill(e.color);
    ellipse(cX + i * coffset, cY, e.width, e.height);
  }

  // 鼻
  fill(255, 0, 0);
  ellipse(X, height / 2 - 35, 60, 60);

  let x = X;
  line(x, height / 2 - 5, x, height * 2 / 3);

  // 口
  fill(255, 0, 0); 

  let aX = X; 
  let aY = height * 2 / 3; 
  let w = 200; 
  let h = 150; 

  arc(aX, aY, w, h, 0, PI, OPEN); 

  let x1 = X - 100;
  line(x1, height * 2 / 3, x1 + 200, height * 2 / 3);

  // ひげ
  let whiskerLength = 200;
  drawWhiskers(X, Y + 30, 500 / 2, whiskerLength);
}

// ひげオリジナル定義
function drawWhiskers(wX, wY, faceRadius, whiskerLength) {
  stroke(0);
  strokeWeight(2);
  for (let i = -1; i <= 1; i++) {
    drawWhisker(wX - faceRadius * 0.3, wY + i * 15, radians(-180 - i * 30), whiskerLength);
    drawWhisker(wX + faceRadius * 0.3, wY + i * 15, radians(0 + i * 30), whiskerLength);
  }
}

// ひげ1本定義
function drawWhisker(x1, y1, angle, length) {
  let x2 = x1 + cos(angle) * length;
  let y2 = y1 + sin(angle) * length;
  line(x1, y1, x2, y2);
}

// 黒目ぎょろぎょろ
function keyPressed() {
  if (keyCode == LEFT_ARROW) { cX -= 7; } 
  else if (keyCode == RIGHT_ARROW) { cX += 7; }
  else if (keyCode == DOWN_ARROW) { cY += 7; }
  else if (keyCode == UP_ARROW) { cY -= 7; }
  else if (key == "d") { cX += 10; } 
  else if (key == "e") { cX -= 10; } 
  else if (key == "r") { cX = width / 2 - 20, cY = height / 4; } 
}

// サイズ合わせ
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
