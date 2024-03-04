import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import loginTheme from '../../public/themes/loginTheme';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import React, { useState } from "react";

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginButton = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user, password })
            });
            if (response != null) {
                if (response.ok) {
                    console.log("Inicio de sesión exitoso");
                    //Some code to redirect to launcher panel
                } else {
                    console.log("Error al iniciar sesion.");
                }
            } else {
                console.log("Valor NULL de response.");
            }
        } catch (error) {
            console.log("Error en la petición: ", error);
        }
    };

    return (
        <ThemeProvider theme={loginTheme}>
            <div className="flex flex-col items-center justify-center h-screen">
                <Image src="/logo-color.png" alt="Logo" width={200} height={200} />
                <form className="space-y-5 mt-10">
                    <TextField
                        id="username"
                        label="Usuario"
                        variant="outlined"
                        className="w-full"
                        onChange={(e) => {setUser(e.target.value);console.log(user)}}
                    />
                    <TextField
                        id="password"
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        className="w-full"
                        onChange={(e) => {setPassword(e.target.value);console.log(password)}}
                    />
                    <Button
                        onClick={handleLoginButton}
                        variant="contained"
                        color="primary"
                        className="w-full"
                    >
                        Iniciar Sesión
                    </Button>
                </form>
            </div>
        </ThemeProvider>
    );
};

export default Login;