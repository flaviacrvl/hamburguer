import express from 'express';
import categoriaRoutes from './routes/categoriaRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js'; 
import avaliacaoRoutes from './routes/avaliacaoRoutes.js'; 
import produtoRoutes from './routes/produtoRoutes.js'; 
import entregaRoutes from './routes/entregaRoutes.js'; 

const app = express();
const port = 3000;

app.use(express.json());

app.use('/categorias', categoriaRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/avaliacoes', avaliacaoRoutes);
app.use('/produtos', produtoRoutes);
app.use('/entregas', entregaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

export default app;
