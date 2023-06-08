const cells = document.querySelectorAll('.cell');
let currentPlayer = 'circle';

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (!cell.classList.contains('circle') && !cell.classList.contains('x')) {
      const symbol = currentPlayer === 'circle' ? 'o' : 'x';
      const symbolImage = document.createElement('img');
      symbolImage.src = currentPlayer === 'circle' ? "https://www.clipartmax.com/png/middle/447-4475603_tic-tac-toe-png-tic-tac-toe-x-and-o.png" : "https://www.clipartmax.com/png/middle/2-23154_logo-clip-art-logo-clip-art-free-logo-clip-art-free-letter.png"
      symbolImage.alt = symbol;
      symbolImage.classList.add('symbol');
      cell.appendChild(symbolImage);
      cell.classList.add(currentPlayer);
      currentPlayer = currentPlayer === 'circle' ? 'x' : 'circle';
    }
  });
});
