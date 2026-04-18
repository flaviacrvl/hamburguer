
import categoriaRoutes from './routes/categoriaRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import entregaRoutes from './routes/entregaRoutes.js';

const app = express(); 
app.use(express.json()); 

app.use('/categorias', categoriaRoutes);
app.use('/avaliacoes', avaliacaoRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/produtos', produtoRoutes);
app.use('/entregas', entregaRoutes);

export default app;