import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class AccountsComponent {

  constructor(private router: Router) {}

  // ✅ Ir al registro de cuentas
  nuevaCuenta() {
    this.router.navigate(['/account-registration']);
  }

  // ✅ Ir al historial (listado) de cuentas
  listarCuentas() {
    this.router.navigate(['/account-history']);
  }
}
