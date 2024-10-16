function moverStickers(coor1, coor2, coor3, coor4) {
    const c1 = document.getElementById(coor1);
    const c2 = document.getElementById(coor2);
    const c3 = document.getElementById(coor3);
    const c4 = document.getElementById(coor4);

    let aux = c1.getAttribute('data-color')

    c1.removeAttribute('data-color')
    c1.setAttribute('data-color', c2.getAttribute('data-color'));

    c2.removeAttribute('data-color')
    c2.setAttribute('data-color', c3.getAttribute('data-color'));

    c3.removeAttribute('data-color')
    c3.setAttribute('data-color', c4.getAttribute('data-color'));

    c4.removeAttribute('data-color')
    c4.setAttribute('data-color', aux);
}

document.addEventListener('keydown', function(event) {

    ///////////////////  CENTROS  ////////////////////////

    if (event.shiftKey && (event.key === 'm' || event.key === 'M')) { 

        mp()

    }else if (event.key === 'm' || event.key === 'M') { 

        m()
    }

    if (event.shiftKey && (event.key === 'e' || event.key === 'E')) { 

        ep()

    }else if (event.key === 'e' || event.key === 'E') { 

        e()
    }

    if (event.shiftKey && (event.key === 's' || event.key === 'S')) { 

        sp()

    }else if (event.key === 's' || event.key === 'S') { 

        s()
    }

    ///////////////////  LADOS  ////////////////////////

    if (event.shiftKey && (event.key === 'r' || event.key === 'R')) { 

        rp()

    }else if (event.key === 'r' || event.key === 'R') { 

        r()
    }

    if (event.shiftKey && (event.key === 'l' || event.key === 'L')) { 

        lp()

    }else if (event.key === 'l' || event.key === 'L') { 

        l()
    }

    if (event.shiftKey && (event.key === 'u' || event.key === 'U')) { 

        up()

    }else if (event.key === 'u' || event.key === 'U') { 

        u()
    }

    if (event.shiftKey && (event.key === 'd' || event.key === 'D')) { 

        dp()

    }else if (event.key === 'd' || event.key === 'D') { 

        d()
    }

    if (event.shiftKey && (event.key === 'f' || event.key === 'F')) { 

        fp()

    }else if (event.key === 'f' || event.key === 'F') { 

        f()
    }

    if (event.shiftKey && (event.key === 'b' || event.key === 'B')) { 

        bp()
        
    }else if (event.key === 'b' || event.key === 'B') { 

        b()
    }

    ///////////////////  ORIENTACION  ////////////////////////

    if (event.shiftKey && (event.key === 'x' || event.key === 'X')) { 

        m(); rp(); l();

    }else if (event.key === 'x' || event.key === 'X') { 
        
        mp(); r(); lp();
    }

    if (event.shiftKey && (event.key === 'y' || event.key === 'Y')) { 
        
        e(); up(); d();

    }else if (event.key === 'y' || event.key === 'Y') { 
        
        ep(); u(); dp();
    }

    if (event.shiftKey && (event.key === 'z' || event.key === 'Z')) { 
        
        sp(); fp(); b();
        
    }else if (event.key === 'z' || event.key === 'Z') { 
        
        s(); f(); bp();
    }
});


function m(){
    moverStickers('O-1-1', 'W-1-1', 'R-1-1', 'Y-1-1') //mover centros
    moverStickers('O-0-1', 'W-0-1', 'R-0-1', 'Y-0-1') //mover esquinas
    moverStickers('O-2-1', 'W-2-1', 'R-2-1', 'Y-2-1') //mover esquinas
}

function mp() {
    moverStickers('Y-1-1', 'R-1-1', 'W-1-1', 'O-1-1') //mover centros
    moverStickers('Y-0-1', 'R-0-1', 'W-0-1', 'O-0-1') //mover esquinas
    moverStickers('Y-2-1', 'R-2-1', 'W-2-1', 'O-2-1') //mover esquinas
}


function e(){
    moverStickers('B-1-1', 'Y-1-1', 'G-1-1', 'W-1-1') //mover centros
    moverStickers('B-1-2', 'Y-1-0', 'G-1-2', 'W-1-2') //mover esquinas
    moverStickers('B-1-0', 'Y-1-2', 'G-1-0', 'W-1-0') //mover esquinas
}

function ep(){
    moverStickers('W-1-1', 'G-1-1', 'Y-1-1', 'B-1-1') //mover centros
    moverStickers('W-1-2', 'G-1-2', 'Y-1-0', 'B-1-2') //mover esquinas
    moverStickers('W-1-0', 'G-1-0', 'Y-1-2', 'B-1-0') //mover esquinas
}


function s(){
    moverStickers('B-1-1', 'O-1-1', 'G-1-1', 'R-1-1') //mover centros
    moverStickers('B-2-1', 'O-1-2', 'G-0-1', 'R-1-0') //mover esquinas
    moverStickers('B-0-1', 'O-1-0', 'G-2-1', 'R-1-2') //mover esquinas
}

function sp(){
    moverStickers('R-1-1', 'G-1-1', 'O-1-1', 'B-1-1') //mover centros
    moverStickers('R-1-0', 'G-0-1', 'O-1-2', 'B-2-1') //mover esquinas
    moverStickers('R-1-2', 'G-2-1', 'O-1-0', 'B-0-1') //mover esquinas
}


function r() {
    moverStickers('G-1-0', 'G-2-1', 'G-1-2', 'G-0-1') //mover esquinas
    moverStickers('G-2-0', 'G-2-2', 'G-0-2', 'G-0-0') //mover aristas

    moverStickers('W-1-2', 'O-1-2', 'Y-1-2', 'R-1-2') //mover esquinas
    moverStickers('O-0-2', 'Y-0-2', 'R-0-2', 'W-0-2') //mover aristas
    moverStickers('Y-2-2', 'R-2-2', 'W-2-2', 'O-2-2') //mover aristas
}

function rp() {
    moverStickers('G-0-1', 'G-1-2', 'G-2-1', 'G-1-0') //mover esquinas
    moverStickers('G-0-0', 'G-0-2', 'G-2-2', 'G-2-0') //mover aristas
        
    moverStickers('R-1-2', 'Y-1-2', 'O-1-2', 'W-1-2') //mover esquinas
    moverStickers('W-0-2', 'R-0-2', 'Y-0-2', 'O-0-2') //mover aristas
    moverStickers('R-2-2', 'Y-2-2', 'O-2-2', 'W-2-2') //mover aristas
}

function l() {
    moverStickers('B-1-0', 'B-2-1', 'B-1-2', 'B-0-1') //mover esquinas
    moverStickers('B-2-0', 'B-2-2', 'B-0-2', 'B-0-0') //mover aristas

    moverStickers('Y-1-0', 'O-1-0', 'W-1-0', 'R-1-0') //mover esquinas
    moverStickers('W-2-0', 'R-2-0', 'Y-2-0', 'O-2-0') //mover aristas
    moverStickers('O-0-0', 'W-0-0', 'R-0-0', 'Y-0-0') //mover aristas
}

function lp() {
    moverStickers('B-0-1', 'B-1-2', 'B-2-1', 'B-1-0') //mover esquinas
    moverStickers('B-0-0', 'B-0-2', 'B-2-2', 'B-2-0') //mover aristas

    moverStickers('R-1-0', 'W-1-0', 'O-1-0', 'Y-1-0') //mover esquinas
    moverStickers('O-2-0', 'Y-2-0', 'R-2-0', 'W-2-0') //mover aristas
    moverStickers('R-0-0', 'W-0-0', 'O-0-0', 'Y-0-0') //mover aristas
}


function u() {
    moverStickers('R-1-0', 'R-2-1', 'R-1-2', 'R-0-1') //mover esquinas
    moverStickers('R-2-0', 'R-2-2', 'R-0-2', 'R-0-0') //mover aristas

    moverStickers('B-0-1', 'W-0-1', 'G-0-1', 'Y-2-1') //mover esquinas
    moverStickers('W-0-0', 'G-0-0', 'Y-2-2', 'B-0-0') //mover aristas
    moverStickers('B-0-2', 'W-0-2', 'G-0-2', 'Y-2-0') //mover aristas
}

function up() {
    moverStickers('R-0-1', 'R-1-2', 'R-2-1', 'R-1-0') //mover esquinas
    moverStickers('R-0-0', 'R-0-2', 'R-2-2', 'R-2-0') //mover aristas
        
    moverStickers('Y-2-1', 'G-0-1', 'W-0-1', 'B-0-1') //mover esquinas
    moverStickers('B-0-0', 'Y-2-2', 'G-0-0', 'W-0-0') //mover aristas
    moverStickers('Y-2-0', 'G-0-2', 'W-0-2', 'B-0-2') //mover aristas 
}

function d() {
    moverStickers('O-0-1', 'O-1-0', 'O-2-1', 'O-1-2') //mover esquinas
    moverStickers('O-0-0', 'O-2-0', 'O-2-2', 'O-0-2') //mover aristas

    moverStickers('W-2-1', 'B-2-1', 'Y-0-1', 'G-2-1') //mover esquinas
    moverStickers('B-2-2', 'Y-0-0', 'G-2-2', 'W-2-2') //mover aristas
    moverStickers('W-2-0', 'B-2-0', 'Y-0-2', 'G-2-0') //mover aristas
}

function dp() {
    moverStickers('O-1-2', 'O-2-1', 'O-1-0', 'O-0-1') //mover esquinas
    moverStickers('O-0-2', 'O-2-2', 'O-2-0', 'O-0-0') //mover aristas

    moverStickers('G-2-1', 'Y-0-1', 'B-2-1', 'W-2-1') //mover esquinas
    moverStickers('W-2-2', 'G-2-2', 'Y-0-0', 'B-2-2') //mover aristas
    moverStickers('G-2-0', 'Y-0-2', 'B-2-0', 'W-2-0') //mover aristas
}


function f() {
    moverStickers('W-1-0', 'W-2-1', 'W-1-2', 'W-0-1') //mover esquinas
    moverStickers('W-2-0', 'W-2-2', 'W-0-2', 'W-0-0') //mover aristas

    moverStickers('B-1-2', 'O-0-1', 'G-1-0', 'R-2-1') //mover esquinas
    moverStickers('O-0-0', 'G-2-0', 'R-2-2', 'B-0-2') //mover aristas
    moverStickers('B-2-2', 'O-0-2', 'G-0-0', 'R-2-0') //mover aristas
}

function fp() {
    moverStickers('W-0-1', 'W-1-2', 'W-2-1', 'W-1-0') //mover esquinas
    moverStickers('W-0-0', 'W-0-2', 'W-2-2', 'W-2-0') //mover aristas

    moverStickers('R-2-1', 'G-1-0', 'O-0-1', 'B-1-2') //mover esquinas
    moverStickers('B-0-2', 'R-2-2', 'G-2-0', 'O-0-0') //mover aristas
    moverStickers('R-2-0', 'G-0-0', 'O-0-2', 'B-2-2') //mover aristas
}


function b() {
    moverStickers('Y-1-0', 'Y-2-1', 'Y-1-2', 'Y-0-1') //mover esquinas
    moverStickers('Y-2-0', 'Y-2-2', 'Y-0-2', 'Y-0-0') //mover aristas

    moverStickers('B-1-0', 'R-0-1', 'G-1-2', 'O-2-1') //mover esquinas
    moverStickers('R-0-0', 'G-0-2', 'O-2-2', 'B-2-0') //mover aristas
    moverStickers('B-0-0', 'R-0-2', 'G-2-2', 'O-2-0') //mover aristas
}

function bp() {
    moverStickers('Y-0-1', 'Y-1-2', 'Y-2-1', 'Y-1-0') //mover esquinas
    moverStickers('Y-0-0', 'Y-0-2', 'Y-2-2', 'Y-2-0') //mover aristas

    moverStickers('O-2-1', 'G-1-2', 'R-0-1', 'B-1-0') //mover esquinas
    moverStickers('B-2-0', 'O-2-2', 'G-0-2', 'R-0-0') //mover aristas
    moverStickers('O-2-0', 'G-2-2', 'R-0-2', 'B-0-0') //mover aristas
}