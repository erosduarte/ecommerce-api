import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { saldoRoutes } from './routes/saldo.routes';
import { ErrorApp } from './utils';
import { productRoutes } from './routes/product.routes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/saldo', saldoRoutes);
app.use("/api/catalogo", productRoutes);
app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof ErrorApp) {
    res.status(error.status).json({ mensaje: error.message });
    return;
  }
  res.status(500).json({ mensaje: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
