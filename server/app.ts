import { Hono } from 'hono'
import {logger} from 'hono/logger'
import { expenseRoutes } from './routes/expenses'
import { serveStatic } from 'hono/bun'

const app = new Hono()

app.use('*', logger())

const apiRoutes = app.basePath("/api").route("/expenses", expenseRoutes)

app.get("*", serveStatic({ root: "./client/dist" }));
app.get("*", serveStatic({ path: "./client/dist/index.html" }));

export default app
export type ApiRoutes = typeof apiRoutes