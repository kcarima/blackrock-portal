const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
  async fetchData(endpoint) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      return null;
    }
  }

  async getCompany() {
    return this.fetchData('/company');
  }

  async getServices() {
    return this.fetchData('/services');
  }

  async getSpecialties() {
    return this.fetchData('/specialties');
  }

  async getHeroSlides() {
    return this.fetchData('/hero-slides');
  }

  async getProjects() {
    return this.fetchData('/projects');
  }

  async getPortfolio() {
    return this.fetchData('/portfolio');
  }

  async getTestimonials() {
    return this.fetchData('/testimonials');
  }

  async getTeam() {
    return this.fetchData('/team');
  }

  async getStats() {
    return this.fetchData('/stats');
  }

  async getQuotes() {
    return this.fetchData('/quotes');
  }

  async getAcademy() {
    return this.fetchData('/academy');
  }

  async getRoles() {
    return this.fetchData('/roles');
  }

  async getIcons() {
    return this.fetchData('/icons');
  }

  normalizeRole(role) {
    if (!role) return '';
    const normalized = String(role).toLowerCase();
    if (normalized.includes('admin') || normalized.includes('administrador')) return 'Administrador';
    if (normalized.includes('inspector')) return 'Inspector';
    if (normalized.includes('analyst') || normalized.includes('analista')) return 'Analista';
    if (normalized.includes('assistant') || normalized.includes('asistente')) return 'Asistente';
    if (normalized.includes('client') || normalized.includes('cliente')) return 'Cliente';
    if (normalized.includes('student') || normalized.includes('estudiante') || normalized.includes('user')) return 'Estudiante';
    return String(role);
  }

  async login(email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        const message = data?.message || `HTTP error ${response.status}`;
        throw new Error(message);
      }
      const roleValue = data.role || data.role_name || data.roleId || data.user?.role || data.user?.role_name || '';
      return {
        ...data,
        role: this.normalizeRole(roleValue),
      };
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }

  async getUsers() {
    return this.fetchData('/users');
  }
}

export const apiService = new ApiService();