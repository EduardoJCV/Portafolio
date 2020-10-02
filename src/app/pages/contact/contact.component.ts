import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ContactService } from './../../services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  forma:FormGroup;

  errors = {
    name: '',
    email: '',
    affair: '',
    message: ''
  };

  constructor( private fb: FormBuilder, public contactService: ContactService ) { 
    
    this.crearFormulario();
  }

  crearFormulario(){
    this.forma = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      email: ['', [
        Validators.required,
        Validators.minLength(7)
      ]],
      affair: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(10)
      ]]
    });
  }

  guardar(){

    let form = this.forma.controls;

    if ( form.name.status == 'INVALID' ) {
      this.errors.name = 'INVALID';
    }else if( form.name.status == 'VALID' ){
      this.errors.name = '';
    }

    if ( form.email.status == 'INVALID' ) {
      this.errors.email = 'INVALID';
    }else if( form.email.status == 'VALID' ){
      this.errors.email = '';
    }

    if ( form.affair.status == 'INVALID' ) {
      this.errors.affair = 'INVALID';
    }else if( form.affair.status == 'VALID' ){
      this.errors.affair = '';
    }

    if ( form.message.status == 'INVALID' ) {
      this.errors.message = 'INVALID';
    }else if( form.message.status == 'VALID' ){
      this.errors.message = '';
    }

    if ( this.errors.name == '' && this.errors.email == '' && this.errors.affair == '' && this.errors.message == '' ) {

      this.contactService.newMessage({
        name: form.name.value,
        email: form.email.value,
        affair: form.affair.value,
        message: form.message.value
      }).subscribe(res=>{
        if( res != null || res != undefined || res != false ){
          window.location.reload();
        }else{
          window.location.reload();
        }
      });

    }

  }

  ngOnInit(): void {
  }

}
