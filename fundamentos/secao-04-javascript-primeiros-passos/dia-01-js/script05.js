let piece = 'BISPO'

let chessPiece = piece.toLowerCase()

console.log(chessPiece);

switch (chessPiece) {
    case bispo:
        console.log('diagonal');
        break;
    case cavalo:
        console.log('em l');
        break;
    case torre:
        console.log('em linha reta');
        break;
    default:
        console.log('peça não identificada');
}