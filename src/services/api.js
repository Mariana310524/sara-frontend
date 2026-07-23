const API_URL = "http://localhost:8000";

// Verificar backend
export async function obtenerEstadoGmail() {
  const respuesta = await fetch(`${API_URL}/health`);
  return await respuesta.json();
}

// Buscar correos en Gmail
export async function buscarCorreos() {
  const respuesta = await fetch(`${API_URL}/gmail/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      account_key: "juan",
      query: "newer_than:30d",
      max_results: 20
    })
  });

  return await respuesta.json();
}