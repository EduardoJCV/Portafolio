import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  semaforo:boolean;


  constructor(){
    setTimeout(() => {
      this.iniciar();
    }, 400);
  }


  iniciar(){
    let ubicacionPrincipal = window.pageYOffset; //0
  
    window.addEventListener("scroll", function(){
        let desplazamientoActual = window.pageYOffset; //180
        if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
            document.getElementsByTagName("nav")[0].style.top = "0px"
        }else{
            document.getElementsByTagName("nav")[0].style.top = "-150px"
        }
        ubicacionPrincipal= desplazamientoActual; //200

    })

    // Menu

    
    this.semaforo = true;

    
  }

  hamburguer(){
    if(this.semaforo){
        // document.querySelector(".hamburguer").style.color ="#fff";
        this.semaforo= false;
    }else{
        // document.querySelector(".hamburguer").style.color ="#fff";
        this.semaforo= true;
    }
    let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
    enlacesHeader.classList.toggle("menudos");
  }

  topActive(id?){
    setTimeout(() => {
        document.getElementsByTagName("nav")[0].style.top = "0px"; 
    }, 200); 
  }

}
