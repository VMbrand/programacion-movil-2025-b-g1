import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'veridia_token';
  private readonly USERS_KEY = 'veridia_users';

  constructor() {}

  async login(username: string, password: string): Promise<boolean> {
    const users = this.getUsers();
    const found = users.find(u => (u.email === username || u.nombre === username) && u.password === password);
    if (found) {
      localStorage.setItem(this.TOKEN_KEY, this.createFakeToken(found.email || found.nombre));
      return true;
    }
    const valid = !!username && password && password.length >= 4;
    if (valid) {
      localStorage.setItem(this.TOKEN_KEY, this.createFakeToken(username));
      return true;
    }
    return false;
  }

  async register(nombre: string, email: string, password: string): Promise<boolean> {
    const users = this.getUsers();
    if (users.some(u => u.email === email)) return false;
    users.push({ nombre, email, password });
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    return true;
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  private getUsers(): Array<{ nombre: string; email: string; password: string }> {
    const raw = localStorage.getItem(this.USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  private createFakeToken(user: string) {
    return btoa(JSON.stringify({ user, iat: Date.now() }));
  }
}