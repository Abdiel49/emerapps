import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ServiceApiProvider } from '../../providers/service-api/service-api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-alistar-mochila',
  templateUrl: 'alistar-mochila.html',
})
export class AlistarMochilaPage {
  testCheckboxOpen: boolean;
  testCheckboxResult;
alimentos;
medicamentos;
gasas;
documentos;
utencilios;
primerosAuxilios;
cutters;

myForm: FormGroup;
mochila = [];

constructor(public alertCtrl: AlertController,
            private _serApi: ServiceApiProvider,
            public formBuilder: FormBuilder) {
  this.alimentos = this._serApi.getAlimentos();
  this.medicamentos = this._serApi.getMedicamentos();
  this.gasas = this._serApi.getGasas();
  this.documentos = this._serApi.getDocumentos();
  this.utencilios = this._serApi.getUtensilios();
  this.primerosAuxilios = this._serApi.getPrimerosAuxilios();
  this.cutters = this._serApi.getMetalicos();
  this.myForm = this.createMyForm();
  
  console.log(this.alimentos)
             }
  saveData(){
    this.mochila = this.myForm.value
    console.log(this.myForm.value);
    console.log(this.myForm.value.alimento);
    this.agregar()
    this.myForm.reset();
    
  }
  agregar() {
    this._serApi.agregar_mochila( this.mochila )
  }

  private createMyForm(){
      return this.formBuilder.group({
        alimento: ['', Validators],
        medicamento: ['', Validators],
        gasa: ['', Validators],
        documento: ['', Validators],
        utencilio: ['', Validators],
        primerosAuxilio: ['', Validators],
        cutter: ['', Validators]
      });
    }  
doCheckbox() {
  let alert = this.alertCtrl.create();
  alert.setTitle('Which planets have you visited?');

  
  alert.addInput({
    type: 'checkbox',
    label: 'Alderaan',
    value: 'value1',
    checked: true
  });

  alert.addInput({
    type: 'checkbox',
    label: 'Bespin',
    value: 'value2'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'Coruscant',
    value: 'value3'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'Endor',
    value: 'value4'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'Hoth',
    value: 'value5'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'Jakku',
    value: 'value6'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'Naboo',
    value: 'value6'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'Takodana',
    value: 'value6'
  });

  alert.addInput({
    type: 'checkbox',
    label: 'Tatooine',
    value: 'value6'
  });

  alert.addButton('Cancel');
  alert.addButton({
    text: 'Okay',
    handler: data => {
      console.log('Checkbox data:', data);
      this.testCheckboxOpen = false;
      this.testCheckboxResult = data;
    }
  });
  alert.present().then(() => {
    this.testCheckboxOpen = true;
  });
}
}
