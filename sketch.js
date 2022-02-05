let rows, cols, scl, board, next;

function setup() 
{
  //createCanvas(displayWidth, displayHeight);
  createCanvas(500, 500);
  scl = 15;
  rows = floor(height/scl);
  cols = floor(width/scl);

  board = new Array(rows);
  for(let i = 0; i < rows; i++)
  {
    board[i] = new Array(cols);
  }

  next = new Array(rows);
  for(let i = 0; i < rows; i++)
  {
    next[i] = new Array(cols);
  }

  ellipseMode(CORNER);
  init();

}

function draw() 
{
  frameRate(70);
  background(0);
  generate();
  stroke(30, 40, 40);
  strokeWeight(2);

  for(let i = 0; i < rows; i++)
  {
    for(let j = 0; j < cols; j++)
    { 
      if(board[i][j] == 1)
      {
        fill(10, 100, 70);
        ellipse(j * scl + 5, i * scl + 5, scl - 4);
      }
      else
      {
        fill(0);
        ellipse(j * scl + 5, i * scl + 5, scl - 4);
      }
    }
  }
}


function init()
{
  for(let i = 0; i < rows; i++)
  {
    for(let j = 0; j < cols; j++)
    {
      if(i == 0 || j == 0 || i == rows - 1 || j == cols - 1)
      {
        board[i][j] = 0;
      }
      else
      {
        board[i][j] = floor(random(2));
      }
      // board[i][j] = 0;
      next[i][j] = 0;
    }

    // board[5][1] = 1;
    // board[5][2] = 1;
    // board[6][1] = 1;
    // board[6][2] = 1;
    // board[5][11] = 1;
    // board[6][11] = 1;
    // board[7][11] = 1;
    // board[4][12] = 1;
    // board[8][12] = 1;
    // board[3][13] = 1;
    // board[3][14] = 1;
    // board[9][13] = 1;
    // board[9][14] = 1;
    // board[6][15] = 1;
    // board[4][16] = 1;
    // board[8][16] = 1;
    // board[5][17] = 1;
    // board[6][17] = 1;
    // board[7][17] = 1;
    // board[6][18] = 1;
    // board[3][21] = 1;
    // board[4][21] = 1;
    // board[5][21] = 1;
    // board[3][22] = 1;
    // board[4][22] = 1;
    // board[5][22] = 1;
    // board[2][23] = 1;
    // board[6][23] = 1;
    // board[1][25] = 1;
    // board[2][25] = 1;
    // board[6][25] = 1;
    // board[7][25] = 1;
    // board[3][35] = 1;
    // board[4][35] = 1;
    // board[3][36] = 1;
    // board[4][36] = 1;
  }




}

function mousePressed()
{
  init();
}

function generate()
{
  for(let i = 1; i < rows - 1; i++)
  {
    for(let j = 1; j < cols - 1; j++)
    {
      let neighbors = 0;
      for(let x = -1; x <= 1; x++)
      {
        for(let y = -1; y <= 1; y++)
        {
          neighbors+= board[i + x][j + y];
        }
      }
      neighbors-= board[i][j];

      if((board[i][j] == 1) && ((neighbors == 2) || (neighbors == 3))) 
        next[i][j] = 1;
      else
      if((board[i][j] == 0) && (neighbors == 3))
        next[i][j] = 1;
      else
        next[i][j] = 0;
    }
  }

  let temp = board;
  board = next;
  next = temp;

}