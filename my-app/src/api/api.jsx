export  async function getAllTracks() {
  const fetchTracks =  await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/', {
      method: "GET"
    });
    if(!fetchTracks.ok){
      throw new Error("Не удалось загрузить плейлист, попробуйте позже")
    }
  const response =  await fetchTracks.json();
  return response;
}

export async function regUser(email, password, userName) {
  const regUser =  await fetch('https://skypro-music-api.skyeng.tech/user/signup/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      username: userName,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
  if(regUser.status === 400){
    throw new Error("Такой пользователь уже существует")
  }else{
    const response = await regUser.json();
    return response
  }
}

export async function logUser(email, password) {

  const logingUser =  await fetch('https://skypro-music-api.skyeng.tech/user/login/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
  if(logingUser.status === 401){
    throw new Error("Пользователь с таким email или паролем не найден")
  }else{
    const response = await logingUser.json();
    return response
  }
}

export async function tokenUser(email, password) {
  const tokenUser = await fetch(
    'https://skypro-music-api.skyeng.tech/user/token/',
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }
  );
  const response = await tokenUser.json();
  return response
}
export async function refreshTokenUser(token) {
  const refreshTokenUser = await fetch(
    'https://skypro-music-api.skyeng.tech/user/token/refresh/',
    {
      method: 'POST',
      body: JSON.stringify({
        refresh: token
      }),
      headers: {
        'content-type': 'application/json',
      },
    }
  );
  const response = await refreshTokenUser.json();
  return response
}