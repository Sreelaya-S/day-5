import { Component } from '@angular/core';
import { Form } from "../../ui/form/form";
import { Accordion } from "../../ui/accordion/accordion";

@Component({
  selector: 'app-contact',
  imports: [Form, Accordion],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
