import React from 'react';

export const Content = () => {
  const baseUrl = import.meta.env.BASE_URL;

  const productos = [
    { id: 1, nombre: 'Audífonos Pro', precio: '159.900', stock: 'En stock', badge: 'bg-success', img: 'img/audifono.jpg' },
    { id: 2, nombre: 'Teclado Mecánico', precio: '249.000', stock: 'Pocas unidades', badge: 'bg-warning text-dark', img: 'img/teclado.jpg' },
    { id: 3, nombre: 'Smartwatch', precio: '329.000', stock: 'Agotado', badge: 'bg-secondary', img: 'img/smartwatch.jpg' },
    { id: 4, nombre: 'Cámara HD', precio: '1.099.000', stock: 'En stock', badge: 'bg-success', img: 'img/camara.jpg' }
  ];

  return (
    <main className="container my-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {productos.map((p) => (
              <div className="col" key={p.id}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="row g-0 align-items-center">
                    {/* Lado de la Imagen */}
                    <div className="col-4 p-3">
                      <img 
                        src={`${baseUrl}${p.img}`} 
                        className="img-fluid rounded" 
                        alt={p.nombre}
                        style={{ maxHeight: '120px', width: '100%', objectFit: 'contain' }}
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} 
                      />
                    </div>
                    {/* Lado del Texto (Esto es lo que te faltaba) */}
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title h6 fw-bold mb-1">{p.nombre}</h5>
                        <p className="text-primary fw-bold mb-1">COP ${p.precio}</p>
                        <span className={`badge ${p.badge}`}>{p.stock}</span>
                        <div className="mt-2">
                           <button className="btn btn-outline-primary btn-sm">Ver detalle</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};