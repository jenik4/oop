/*class Kocka {
    name = "Špunt";
    constructor (name){
        this.name = name;
        console.log("kocka se vytvořila");
    }
    sound(){
        console.log( this.name + " Mňau");
    }
}
const myFirstkocka = new Kocka("Mourek");

myFirstkocka.sound();
const mySecondkocka = new Kocka("Špunt");
mySecondkocka.sound();
*/
class Muz{
    
    constructor(name,reforma, plet, vlasy, status){
        this.name = name;
        this.reforma = reforma;
        this.plet = plet;
        this.vlasy = vlasy;
        this.status = status;
        console.log("Péťa se vytvořil");
        console.log(this);
    }
         sound(){ 
             console.log("Jsem prezident pico");
         }
 }

const laska = new Muz("Péťa Pavel","zavede úžasný školský vzdělávací plán", "černá", "bílá", "multimilirardář, prezident" );