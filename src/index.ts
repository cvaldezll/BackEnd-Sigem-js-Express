import "dotenv/config";
import app from "./app";

try {
    const PORT: number = Number(process.env.PORT) || 3000;
    app.listen(PORT, () => {
        console.log("Servidor activo en el puerto " + PORT);
    });
} catch (e) {
    console.log(e);
}