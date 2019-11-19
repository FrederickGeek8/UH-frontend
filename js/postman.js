const server = "http://localhost:5000";

export class Postman {
  static async login(phone, password, role) {
    const body = {
      phone: phone,
      password: password,
      role: role
    };

    return await Postman._post(body, '/login');
  }

  static async register(username, phone, password, role) {
    const body = {
      username: username,
      phone: phone,
      password: password,
      role: role
    };

    return await Postman._post(body, '/register');
  }

  static async get_patient(phone_number) {
    const body = {
      phone: phone_number
    };

    return await Postman._post(body, '/get/data');
  }

  static async _post(body, path) {
    const response = await fetch(server + path, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    return await response.json();
  }
}
