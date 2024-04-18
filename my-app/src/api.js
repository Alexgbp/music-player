const logHost = 'https://skypro-music-api.skyeng.tech/user/'

export const getToken = async ({ email, password }) => {
  const response = await fetch('https://skypro-music-api.skyeng.tech/user/token/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (response.status === 401) {
    throw new Error("Токен недействителен или просрочен");
  }
  return response.json();

}

export async function registerUser({ email, password, username }) {
  const response = await fetch(logHost + 'signup/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      username,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    return { ...data, error: true }
  }

  const token = await getToken({ email, password });
  if (token)
    return {...data, token};

  return data
}

export async function loginUser({ email, password }) {
  const response = await fetch(logHost + 'login/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
  const data = await response.json()

  if (!response.ok) {
    return { ...data, error: true }
  }
  const token = await getToken({ email, password });
  if (token)
    return {...data, token};
  
  return data
}
