import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class AccounthistoryComponent {

  cuentas = [
    { nombre: 'Cuenta de Ahorros', descripcion: 'Ahorros personales', fecha: '2025-10-10', valor: 2500.00 },
    { nombre: 'Cuenta Corriente', descripcion: 'Gastos del hogar', fecha: '2025-10-11', valor: 1500.50 },
    { nombre: 'Cuenta de Nómina', descripcion: 'Depósito mensual', fecha: '2025-10-12', valor: 3000.75 }
  ];

  constructor(private router: Router) {}

  editarCuenta(cuenta: any) {
    alert(`✏️ Editando ${cuenta.nombre}\nValor actual: $${cuenta.valor.toFixed(2)}`);
    // Aquí puedes navegar a un formulario de edición si lo deseas
    // this.router.navigate(['/edit-account', cuenta.id]);
  }

  regresar() {
    this.router.navigate(['/accounts']);
  }
}

