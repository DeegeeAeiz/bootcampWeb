import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Soporte para __dirname en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors());

// Middleware para JSON
app.use(express.json());

// Servir archivos estáticos (HTML y JS)
app.use(express.static(path.join(__dirname, "public")));

// Ruta para guardar usuarios
app.post("/api/signup", (req, res) => {
  const { username, password, email } = req.body;

  let users = [];
  const filePath = path.join(__dirname, "users.json");

  if (fs.existsSync(filePath)) {
    users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  const lastId = users.at(-1)?.id || 0;

  const newUser = {
    id: lastId + 1,
    username,
    password,
    email,
  };

  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8");

  res.json({ message: "Usuario registrado", user: newUser });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
