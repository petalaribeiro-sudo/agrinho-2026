let ALTURA_GRAMA = 450, caminhao_x = -180, estado = 1, milhos = [];
let aviao_x = -150, textos = ["AGRINHO 2026", "PÉTALA CLARA"], idx_txt = 0;

function setup() { createCanvas(800, 600); }

function draw() {
  background(135, 206, 235); // Céu
  noStroke(); fill(34, 139, 34); rect(0, ALTURA_GRAMA, 800, 150); // Grama
  fill(128); rect(0, ALTURA_GRAMA - 5, 800, 10); // Estrada

  // ESCOLA COSTA E SILVA
  fill(10, 35, 110); rect(30, 270, 200, 180); // Fachada Azul Escuro
  fill(240); rect(25, 240, 210, 30); // Aba superior branca
  fill(10, 35, 110); textSize(20); textStyle(BOLD); textAlign(CENTER); text("COSTA E SILVA", 130, 262); 
  fill(255, 235, 59); rect(110, 370, 40, 80); // Porta Amarela
  fill(200, 255, 255); rect(50, 300, 40, 35); rect(170, 300, 40, 35); // Janelas

  // AVIÃO REALISTA E FAIXA
  aviao_x += 2.5; // Velocidade do vôo
  if (aviao_x > 1000) { aviao_x = -150; idx_txt = (idx_txt + 1) % 2; }
  
  // Linha que puxa a faixa
  stroke(100); strokeWeight(2); line(aviao_x - 10, 90, aviao_x - 40, 90); noStroke();
  
  // Faixa de Tecido Branca
  fill(255); rect(aviao_x - 180, 72, 140, 35, 3); 
  fill(0); textSize(14); textStyle(NORMAL); textAlign(CENTER, CENTER); text(textos[idx_txt], aviao_x - 110, 90); 

  // DESENHO DETALHADO DO AVIÃO (Substituindo a antiga bola branca)
  let ax = aviao_x;
  let ay = 90;
  
  fill(220, 50, 50); // Cauda traseira vertical (Leme vermelho)
  triangle(ax - 5, ay - 4, ax - 15, ay - 20, ax - 15, ay - 4);
  
  fill(200); // Estabilizador horizontal traseiro (Asa menor de trás)
  ellipse(ax - 10, ay + 6, 15, 6);
  
  fill(245); // Corpo Principal do Avião (Fuselagem cilíndrica aerodinâmica)
  ellipse(ax + 15, ay, 55, 16); 
  
  fill(30, 144, 255); // Para-brisa / Cabine do Piloto (Cockpit azul)
  arc(ax + 30, ay - 2, 12, 10, PI, TWO_PI);
  
  fill(180); // Asa Principal Dianteira (Inclinada para trás com design dinâmico)
  quad(ax + 5, ay + 2, ax + 20, ay + 2, ax + 10, ay + 25, ax - 2, ay + 25);

  // LÓGICA DO CAMINHÃO E REVERSO
  if (estado === 1) {
    caminhao_x += 4;
    if (caminhao_x > 220 && caminhao_x < 550) { 
      for (let i = 0; i < 3; i++) milhos.push({ x: caminhao_x, y: 380, vy: random(2, 5), cy: ALTURA_GRAMA + random(10, 40) });
    }
    if (caminhao_x > 800) estado = 2;
  } else {
    if (milhos.length > 0) {
      milhos.forEach((m, i) => { m.y -= m.vy * 1.5; m.x += 4; if (m.y < 380) milhos.splice(i, 1); });
    } else { caminhao_x = -180; estado = 1; }
  }

  // DESENHO DOS MILHOS (Realistas)
  milhos.forEach(m => {
    if (estado === 1 && m.y < m.cy) m.y += m.vy;
    fill(230, 160, 10); ellipse(m.x, m.y, 7, 9);
    fill(255, 215, 0); ellipse(m.x, m.y - 1, 6, 7);
    fill(255, 255, 200); ellipse(m.x - 1, m.y - 2, 2, 3);
  });

  // CAMINHÃO E BANDEIRA
  if (caminhao_x < 800) {
    fill(220, 20, 60); rect(caminhao_x, 380, 180, 80); 
    fill(50); rect(caminhao_x + 180, 400, 40, 60); 
    fill(200, 255, 255); rect(caminhao_x + 195, 405, 20, 20); 
    fill(30); [30, 70, 200].forEach(cx => circle(caminhao_x + cx, 460, 36)); 

    // BANDEIRA DO BRASIL
    let bx = caminhao_x + 190;
    stroke(50); strokeWeight(2); line(bx, 400, bx, 365); noStroke();
    fill(0, 156, 59); rect(bx, 365, 30, 20);
    fill(255, 223, 0); quad(bx + 15, 367, bx + 28, 375, bx + 15, 383, bx + 2, 375);
    fill(0, 34, 147); circle(bx + 15, 375, 10);
    
    // PINHEIRO DO PARANÁ (ARAUCÁRIA)
let px = 710; // Posição central do pinheiro no eixo X
fill(115, 60, 20); rect(px - 10, 220, 20, 230); // Tronco longo e vertical

fill(34, 90, 40); // Verde musgo escuro para as copas
// Galhos inferiores recurvados para cima (formato de taça)
ellipse(px, 215, 110, 35);
ellipse(px - 45, 200, 60, 25);
ellipse(px + 45, 200, 60, 25);

// Camadas superiores da copa do pinheiro
ellipse(px - 25, 175, 55, 22);
ellipse(px + 25, 175, 55, 22);
ellipse(px, 155, 70, 25);

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }
}
