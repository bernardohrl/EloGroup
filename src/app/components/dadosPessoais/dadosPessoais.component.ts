import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mocker } from 'src/helpers/Mocker';

import { Location } from 'src/models/location.model'
import { PersonalData } from 'src/models/personalData.model'
import { SocialMedia } from 'src/models/socialMedia.model'

@Component({
  selector: 'dadosPessoais',
  templateUrl: './dadosPessoais.component.html',
  styleUrls: ['./dadosPessoais.component.scss']
})

export class DadosPessoaisComponent implements OnInit {
  public locations: Array<Location> = null;
  public socialMedias: Array<SocialMedia> = null;
  public submitted: boolean = false;

  public dataForm = this.fb.group({
    name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
    phone: [null, [Validators.required, Validators.minLength(15), Validators.maxLength(15)]],
    hasMedias: [null, Validators.required],
    knownFrom: [[0], Validators.required],
    socialMediaArray: [],
  });


  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.locations = Mocker.mockLocations();
    this.socialMedias = Mocker.mockSocialMedias();
  }


  updated() {
    console.log("\n\n")
    console.log("name", this.dataForm.get('name').value)
    console.log("phone", this.dataForm.get('phone').value)
    console.log("knownFrom", this.dataForm.get('knownFrom').value)
    console.log("hasMedias", this.dataForm.get('hasMedias').value)
    console.log("socialMediaArray", this.dataForm.get('socialMediaArray').value)
  }

  maskPhone(event) { 
    var phone = event.target.value;
    phone = phone.replace(/\D/g,"");
    phone = phone.replace(/^(\d{2})(\d)/g,"($1) $2");
    phone = phone.replace(/(\d)(\d{4})$/,"$1-$2");
    event.target.value = phone;
  }

  socialMediaSelected(event) {
    var button = event.path[1];
    var selected = event.srcElement.checked;

    var selectedStyle: string = "background-color: var(--PRIMARY-COLOR); color: white; border-color: var(--PRIMARY-COLOR); font-weight: 500";
    var defaultStyle: string = "background-color: white; color: black; border-color: black; font-weight: 100";
    selected ? button.setAttribute("style", selectedStyle) : button.setAttribute("style", defaultStyle);

    this.toggle(event.srcElement.id)

    this.updated();
  }

  onSubmit() {
    console.log("aaaa")
    console.log(this.dataForm.valid)
    console.log(this.dataForm.get('name').errors)
    
    this.submitted = true;
  }


  private toggle(media) {
    var array = this.dataForm.get('socialMediaArray').value;
    var index = array.indexOf(media);

    if (index === -1) array.push(media);
    else              array.splice(index, 1);
    
  }
}
