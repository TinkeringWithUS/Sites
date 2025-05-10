import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Roadmap } from './routes/roadmap/Roadmap.tsx'
import { Map } from './routes/next/Map.tsx'
import { FileUpload } from './routes/file_upload/FileUpload.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "/roadmap",
    element: <Roadmap />
  }, 
  {
    path: "/map", 
    element: <Map />
  }, 
  {
    path: "/upload",
    element: <FileUpload />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
