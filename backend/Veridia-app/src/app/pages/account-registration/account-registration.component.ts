import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accounts-registration',
  templateUrl: './account-registration.component.html',
  styleUrls: ['./account-registration.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgIf, NgFor]
})
export class AccountsRegistrationComponent {
  nuevaCuenta = {
    nombre: '',
    fecha: '',
    descripcion: '',
    valor: null
  };

  cuentasGuardadas: any[] = [];

  constructor() {}

  guardarCuenta() {
    if (!this.nuevaCuenta.nombre || !this.nuevaCuenta.fecha || !this.nuevaCuenta.descripcion || !this.nuevaCuenta.valor) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Guardar cuenta
    this.cuentasGuardadas.push({ ...this.nuevaCuenta });

    // Limpiar formulario
    this.nuevaCuenta = { nombre: '', fecha: '', descripcion: '', valor: null };

    alert('✅ Cuenta registrada con éxito.');
  }
}
