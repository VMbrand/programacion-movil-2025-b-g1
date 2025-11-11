import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../../core/services/auth';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario = { nombre: '', contrasena: '' };

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService
  ) {}

  async login() {
    if (!this.usuario.nombre || !this.usuario.contrasena) {
      return this.showToast('Completa usuario y contraseña.');
    }

    const loading = await this.loadingCtrl.create({ message: 'Iniciando sesión...' });
    await loading.present();

    try {
      const ok = await this.authService.login(this.usuario.nombre, this.usuario.contrasena);
      await loading.dismiss();
      if (ok) {
        this.router.navigate(['/accounts']);
      } else {
        this.showToast('Usuario o contraseña incorrectos.');
      }
    } catch (err) {
      await loading.dismiss();
      console.error('Login error', err);
      this.showToast('Error al iniciar sesión. Intenta de nuevo.');
    }
  }

  goToRegistro() {
    this.router.navigate(['/register']); // ✅ Redirige correctamente al componente Register
  }

  private async showToast(message: string) {
    const t = await this.toastCtrl.create({ message, duration: 2000, position: 'bottom' });
    await t.present();
  }
}
