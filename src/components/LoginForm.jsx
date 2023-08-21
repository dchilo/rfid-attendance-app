'use client'
import { useContext, useState } from 'react';

import { getLogin } from '@/services/user';
import { UserContext } from '@/app/context/userContext';
import { useRouter } from 'next/navigation';

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { user, login, logout} = useContext(UserContext)

    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault();
    
        // Crea un objeto con los datos del formulario
        const credentials = {
          email,
          password,
        };
    
        // Realiza la petición a la API para autenticar al usuario
        const userLogin = await getLogin(credentials)
        await login(userLogin)
        console.log(userLogin)

        if(userLogin != null){
          router.push('/')
        }
    
        // Reinicia los campos del formulario después de enviar los datos
        setEmail("");
        setPassword("");
    };

    return (
        <div className="flex rounded-xl justify-center items-center dark:bg-black shadow-md border-gray-100 border-2 dark:border-neutral-800">
          <div className="dark:bg-neutral-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold dark:text-gray-100 mb-2">Iniciar sesión</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {/* Icono de correo electrónico */}
                </svg>
                <input
                  type="email"
                  id="email"
                  className="dark:bg-gray-900 text-white border border-gray-600 rounded-md px-3 py-2 mt-2 w-full"
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {/* Icono de contraseña */}
                </svg>
                <input
                  type="password"
                  id="password"
                  className="dark:bg-gray-900 text-white border border-gray-600 rounded-md px-3 py-2 mt-2 w-full"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                onClick={handleLogin}
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      );
}

export default LoginForm;