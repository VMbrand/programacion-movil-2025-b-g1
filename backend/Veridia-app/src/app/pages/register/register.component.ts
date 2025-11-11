import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterComponent {
  usuario = {
    nombreCompleto: '',
    correo: '',
    nombreUsuario: '',
    genero: '',
    contrasena: ''
  };

  constructor(private router: Router) {}

  guardarUsuario() {
    const { nombreCompleto, correo, nombreUsuario, genero, contrasena } = this.usuario;

    if (!nombreCompleto || !correo || !nombreUsuario || !genero || !contrasena) {
      alert('⚠️ Por favor, complete todos los campos.');
      return;
    }

    // Guardar usuario en localStorage (simulación de base de datos local)
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    usuarios.push(this.usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('✅ Usuario registrado con éxito.');
    this.router.navigate(['/login']); // Redirige al login después de registrarse
  }
}
