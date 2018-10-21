import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

import { Storage } from '@ionic/storage';
/*
  Generated class for the ServiceApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceApiProvider {

  items:any[] = [];

  constructor(public http: HttpClient,
              private platform:Platform,
              private storage:Storage) {
    console.log('Hello ServiceApiProvider Provider');
  }
  getApi(lat, lng) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&units=metric&appid=b4f40e87863723f4113d1ffb292b2018&fbclid=IwAR2K4lsio-ojHnHCek6Ie1mmLqbXL4ufmQH8U30XdnvcH9mdpS2AGQHIwl0'
    return this.http.get(url);
  }
  agregar_mochila( item_parametro:any ) {

    this.items.push( item_parametro );
    //this.guardar_storage();
    console.log("llego el det producto");
    console.log(item_parametro);
  }
  guardar_storage() {

    if( this.platform.is("cordava") ) {
      this.storage.set('items', this.items)
    }
    else{
      localStorage.setItem("item", JSON.stringify( this.items))
    }

  }

  cargar_storage() {

    let promesa = new Promise( ( resolve, reject )=>{ 
    if( this.platform.is("cordava") ) {
      this.storage.ready()
                .then( ()=>{
                  this.storage.get("items")
                            .then( items => {
                              if( items ) {
                                this.items = items
                              }
                              resolve();
                            })
                } )
      
    }
    else{
      if ( localStorage.getItem("items") ){
        this.items = JSON.parse( localStorage.getItem("items") );
      }
      resolve();
    }
    });
    return promesa;
  }


  alimentos = [{
      nombre: "Agua",
      descripcion: "3.9 Litros por persona"
  },
  {
      nombre: "Galletas",
      descripcion: "galletas integrales o galletas no saladas"
  },
  {
      nombre: "Enlatados/Conservas",
      descripcion: "Enlatados de atún, carne, frutas, otros."
  },
  {
      nombre: "Golosinas",
      descripcion: "Golosinas"
  }
  ];

  medicamentos = [{
    nombre: "Aspirina",
    descripcion: "aspirina para dolores de cabeza"
  },
  {
    nombre: "Ibuprofeno",
    descripcion: "calmante"
  }, {
    nombre: "Amoxicilina",
    descripcion: "antibiotico"
  },
  {
    nombre: "Alcohol",
    descripcion: "desinfectante"
  },
  {
    nombre: "Agua oxigenada",
    descripcion: "para lavar y desinfectar heridas"
  },
  {
    nombre: "Ungüento ",
    descripcion: "antiviotico"
  },
  {
    nombre: "Toallas de Alcohol",
    descripcion: "para desinfectar heridas"
  },
  {
    nombre: "Antidiarreicos",
    descripcion: "evitan la diarrea"
  },
  {
    nombre: "Gotas para los ojos",
    descripcion: "Gotas para los ojos"
  }

  ];

  gasas = [{
    nombre: "Curitas",
    descripcion: "para heridas leves"
  },
  {
    nombre: "vendas",
    descripcion: "Ayudan a recubrir heridas"
  },
  {
    nombre: "Rollos de gaza",
    descripcion: "Tambien conocidos como vendas"
  },
  {
    nombre: "Hisopos de algodón",
    descripcion: "Ayuda al limpiado de heridas"
  },
  {
    nombre: "Rollos de cinta adhesiva",
    descripcion: "Ayuda a sostener las vendas"
  }
  ];

  documentos = [
    {
        nombre: "Pasaporte",
        descripcion: "Pasaporte "
    },
    {
        nombre: "Certificado de nacimiento",
        descripcion: ""
    },
    {
        nombre: "Certificado de títulos académicos",
        descripcion: ""
    }, 
    {
        nombre: "Certificado de enfermedades alergias vacunas",
        descripcion: ""
    }, 
    {
        nombre: "Cédula de identidad",
        descripcion: "Cédula de identidad o fotocopia"
    }
  ];

  utensilios = [
    {
      nombre: "Termometro",
      descripcion: "para medir la temperatura"
    },
    {
      nombre: "Libro: Primeros Auxilicios el buen doctor",
      descripcion: "Libro de consulta en caso de accidente"
    },
    {
      nombre: "Jabon",
      descripcion: "Ayuda en el lavado de heridas"
    },
    {
      nombre: "Paños de papel",
      descripcion: "Usados para limpiar heridas"
    },
    {
      nombre: "Protector solar",
      descripcion: "Crema para protejerce de los rayos utra violeta"
    },
    {
      nombre: "Vasos de papel",
      descripcion: "usados en momentos de sed "
    },
    {
      nombre: "bolsas plasticas",
      descripcion: "para levantar cosas que necesiten llevarse"
    },
    {
      nombre: "alfiler",
      descripcion: "sirve para sujetar las vendas "
    },
    {
      nombre: "hilo y aguja",
      descripcion: "para suturar heridas"
    },
    {
      nombre: "enfriadores",
      descripcion: "sirve para bajar la temperatura del cuerpo "
    },
    {
      nombre: "toallas sanitarias",
      descripcion: "para hacer precion sobre emorageas"
    },
    {
      nombre: "tablillas",
      descripcion: "en casos de entablillar una fracturua"
    }
  ];

  metalicos = [
    {
    nombre: "tijeras",
    tamanio: 3.5,
  },
  {
    nombre: "pinzas",
    tamanio: "pequenio"
  },
  {
    nombre: "Navaja de bolsillo",
    tamanio: "pequenio"
  }
  ];

  primerosAuxilios = [
    {
      nombre: "Linterna",
      descripcion: "Linterna a pilas y unas pilas de repuesto"
    },
    {
      nombre: "Mapa",
      descripcion: "Mapa del lugar donde nos encontramos"
    },
    {
      nombre: "Silbato",
      descripcion: "Silbato para llamados de emergencias"
    },
    {
      nombre: "Radio",
      descripcion: "Radio a cuerda o a pilas"
    },
    {
      nombre: "Abrelatas Manual",
      descripcion: "Abrelatas de mano para las conservas enlatadas"
    },
    {
      nombre: "Telefono Celular",
      descripcion: "Telefono celular y un cargador portatil (PowerBank), solar de ser posible"
    },
    {
      nombre: "Purificadores de Agua",
      descripcion: "Productos para purificar el agua, como tabletas de cloro o yodo, o cloro común de uso doméstico sin aroma"
    },
    {
      nombre: "Paños desechables",
      descripcion: "Paños desechables de limpieza"
    },
    {
      nombre: "Repelentes de insectos",
      descripcion: "Repelentes de insectos con DEET o Picaridina (los mosquitos que pueden reunirse en agua estancada"
    }

  ];

  terremoto = {
    nombre: "Terremotos",
    gasas: this.gasas,
    alimentos: this.alimentos,
    medicamentos: this.medicamentos,
    metalicos: this.metalicos,
    utensilios: this.utensilios,
    documentos: this.documentos
  }

  tsunamis = {
    nombre: "Tsunamis",
    medicamentos: this.medicamentos,
    gasas: this.gasas,
    alimentos: this.alimentos,
    documentos: this.documentos,
    primerosAuxilios: this.primerosAuxilios
  }

  tornados = {
    nombre: "Tornados",
    medicamentos: this.medicamentos,
    gasas: this.gasas,
    primerosAuxilios: this.primerosAuxilios,
    alimentacion: this.alimentos,
    documentos: this.documentos
  };

  inundaciones = {
    nombre: "Inundaciones",
    medicamentos: this.medicamentos,
    gasas: this.gasas,
    primerosAuxilios: this.primerosAuxilios,
    alimentacion: this.alimentos,
    documentos: this.documentos
  }

  getTornados() {
    return this.tornados;
  }
  getTsunamis() {
    return this.tsunamis;
  }
  getTerremoto() {
    return this.terremoto;
  }
  getGasas() {
    return this.gasas;
  }
  getMetalicos() {
    return this.metalicos;
  }
  getUtensilios() {
    return this.utensilios;
  }

  getDocumentos() {
    return this.documentos;
  }

  getAlimentos() {
    return this.alimentos;
  }
  getMedicamentos() {
    return this.medicamentos;
  }
  getPrimerosAuxilios(){
    return this.primerosAuxilios;
  }

}
