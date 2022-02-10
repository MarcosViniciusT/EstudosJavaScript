let xBolinha = 350; // posição Xinicial da Bolinha
let yBolinha = 200; // posição YInicial da Bolinha
let diametro = 20;  // Diametro da Bolinha
let raio = diametro / 2; // Raio da Bolinha

// Parametros da RaqueteA
let xRaqueteA = 5;
let yRaqueteA = 160;
let larguraRaqueteA = 10;
let alturaRaqueteA = 90;

// Parametros RaqueteB
let xRaqueteB = 685;
let yRaqueteB = 160;
let larguraRaqueteB = 10;
let alturaRaqueteB = 90;
let velocidadeYOponente = 0;

let velocidadeXBolinha = 8; // Velocidade da Bolinha
let velocidadeYBolinha = 8;
let colidiu = false; // variavel para verificar a colisão nas raquetes
let meusPontos = 0; // armazena minha pontuação
let pontosOponente = 0; // armazena pontuação do oponente;

//Sons do Jogo

let Raquetada;
let ponto;
let trilha;

function preload()
{
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(700, 400); // Tamanho da area de desenho
  trilha.loop();
}

function draw() {
  
  background(0);        // Define a cor do fundo
  incluiPlacar();       // Mostra placar na tela
  mostraBolinha();      // Chama a função para desenhar a bolinha;
  mostraRaquete();      // Chama a funcação para desenhar raquete;
  verificaToqueNaBorda(); // Chama a função que verifica o toque nas bordas
  movimentaBolinha(); // Chama a função que faz o bolinha se movimentar
  movimentaRaqueteA(); // Chama a função que movimenta raquete
  movimentaRaqueteB(); // Chama a função para movimentar a raquete B
  verificaColisaoRaquete(xRaqueteA, yRaqueteA); // Chama função que verifica colisão com a RaqueteA
  verificaColisaoRaquete(xRaqueteB, yRaqueteB); // Chama função que verifica colisão com a RaqueteA
  marcaPontos();

}

function mostraBolinha()
{
  circle(xBolinha, yBolinha, diametro); // Cria a bolinha na àrea de desenho
}

function movimentaBolinha()
{
  xBolinha += velocidadeXBolinha; // Incrementa a posição da bolinha
  yBolinha += velocidadeYBolinha;
}

function verificaToqueNaBorda()
{
   // Verificação do toque nas bordas 
   // A variavel raio serve para fazer com o que bolinha não entre metade para dentro, pois o        diametro e contado a partir do centro da bolinha
  if (xBolinha + raio >= width || xBolinha - raio <= 0)
    {
      velocidadeXBolinha *= -1;     
    }
  
  if(yBolinha + raio >= height || yBolinha -raio <= 0)
    {
      velocidadeYBolinha *= -1;
    }
}
function mostraRaquete ()
{
  rect(xRaqueteA, yRaqueteA, larguraRaqueteA, alturaRaqueteA); // Desenha as raquetes na tela
  rect(xRaqueteB, yRaqueteB, larguraRaqueteB, alturaRaqueteB);
}
function movimentaRaqueteA()
{
  if (keyIsDown(UP_ARROW))
    {
      yRaqueteA -= 10;
    }
  if(keyIsDown(DOWN_ARROW))
    {
      yRaqueteA +=10;
    }
  
}

function verificaColisaoRaquete(x, y)
{
  colidiu = collideRectCircle(x, y, larguraRaqueteA, alturaRaqueteA, xBolinha, yBolinha, raio)
  
  if (colidiu)
    {
      velocidadeXBolinha *= -1;
      raquetada.play();
    }
  
}
function movimentaRaqueteB ()
{
  if (keyIsDown(87))
    {
      yRaqueteB -= 10;
    }
  if(keyIsDown(83))
    {
      yRaqueteB +=10;
    }
}

function incluiPlacar()
{ 
  stroke(255);
  fill(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0));
  rect(530,10,40,20);
  fill(255);
  text(pontosOponente, 550, 26);
}

function marcaPontos()
{
  if(xBolinha >= 690)
    {
      meusPontos += 1;
      ponto.play();
    }
  
  if(xBolinha <=10)
    {
      pontosOponente += 1;
      ponto.play();
    }
}











