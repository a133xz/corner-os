const apps = [
  {
    id: 'inicio',
    title: 'Inicio',
    icon: '🏠',
    content: `
      <div class="window-hero" style="height: 100%; display: flex; flex-direction: column; justify-content: center;">
        <h1>CORNER ESTUDIOS</h1>
        <p class="subtitle" style="font-size: 1.5rem; max-width: 800px;">Consultoría digital y tecnológica que transforma ideas en soluciones innovadoras que impulsan el crecimiento de tu negocio.</p>
        <button class="btn-primary" style="align-self: flex-start; margin-top: 20px;">Agenda una llamada</button>
      </div>
    `
  },
  {
    id: 'servicios',
    title: 'Servicios',
    icon: '⚙️',
    content: `
      <div class="window-servicios">
        <h2>¿Cómo te ayudamos?</h2>
        <p class="subtitle">Nos gusta trabajar con empresas pequeñas y medianas ya que nos especializamos en lanzamiento y escalada de empresas e ideas.</p>
        <div class="servicios-grid">
          <div class="servicio-card">
            <div class="num">01</div>
            <h3>Consultoría tecnológica</h3>
            <p>Te ayudamos a elegir e implementar las tecnologías que realmente impulsarán tu negocio.</p>
            <ul>
                <li>Arquitectura de sistemas escalables</li>
                <li>Migración a la nube</li>
                <li>AI integration</li>
                <li>Optimización de procesos</li>
            </ul>
          </div>
          <div class="servicio-card">
            <div class="num">02</div>
            <h3>Estrategia digital</h3>
            <p>Diseñamos roadmaps digitales personalizados que maximizan tu ROI y aceleran tu crecimiento online.</p>
            <ul>
                <li>Análisis de mercado y competencia</li>
                <li>Definición de KPIs y métricas clave</li>
                <li>Plan de marketing digital 360°</li>
                <li>Desarrollo de Pitch para inversores</li>
            </ul>
          </div>
          <div class="servicio-card">
            <div class="num">03</div>
            <h3>Transformación digital</h3>
            <p>Acompañamos tu empresa en cada paso hacia la digitalización completa y sostenible.</p>
            <ul>
                <li>Automatización de procesos</li>
                <li>Capacitación de equipos</li>
                <li>Change management</li>
                <li>Educación en nuevas herramientas</li>
            </ul>
          </div>
          <div class="servicio-card">
            <div class="num">04</div>
            <h3>Desarrollo e innovación</h3>
            <p>Creamos productos digitales únicos: desde websites hasta aplicaciones complejas, incluyendo mobile apps.</p>
            <ul>
                <li>Desarrollo web y móvil</li>
                <li>APIs y microservicios</li>
                <li>CI/CD integration</li>
                <li>Prototipado y MVP</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'nosotros',
    title: 'Nosotros',
    icon: '👥',
    content: `
      <div class="window-nosotros">
        <h2>Nosotros</h2>
        <p class="subtitle">En CORNER ESTUDIOS combinamos expertise tecnológico con metodologías educativas innovadoras para acelerar la transformación digital de las empresas.</p>
        
        <div class="mision-vision">
            <div class="mv-card">
                <h3>Nuestra misión</h3>
                <p>Transformar organizaciones mediante tecnología estratégica y formación especializada, creando capacidades internas para el futuro digital.</p>
            </div>
            <div class="mv-card">
                <h3>Nuestra visión</h3>
                <p>Liderar la convergencia entre tecnología y educación empresarial, generando organizaciones resilientes y preparadas para el futuro.</p>
            </div>
        </div>

        <h3 style="margin-bottom: 20px; color: #fff; font-size: 1.8rem;">Nuestro enfoque diferencial</h3>
        <div class="enfoque-grid">
            <div class="enfoque-card">
                <h4>Innovación aplicada</h4>
                <p style="color: #a1a1aa; margin-top: 10px; line-height: 1.5;">Tecnologías emergentes con metodologías probadas</p>
            </div>
            <div class="enfoque-card">
                <h4>Educación tecnológica</h4>
                <p style="color: #a1a1aa; margin-top: 10px; line-height: 1.5;">Formación de equipos para sostenibilidad a largo plazo</p>
            </div>
            <div class="enfoque-card">
                <h4>Impacto medible</h4>
                <p style="color: #a1a1aa; margin-top: 10px; line-height: 1.5;">Resultados cuantificables con KPIs específicos</p>
            </div>
        </div>
      </div>
    `
  },
  {
    id: 'proyectos',
    title: 'Proyectos',
    icon: '📁',
    content: `
      <div class="window-proyectos">
        <h2>Últimos proyectos</h2>
        <p class="subtitle">En Corner Estudios priorizamos proyectos diferentes dónde podemos tener un impacto. Aquí puedes ver una selección variada de proyectos recientes.</p>

        <div class="proyectos-grid">
            <div class="proyecto-card">
                <span class="tag">iOS & Android App</span>
                <h3>Showboat</h3>
                <p>Aplicación móvil para coleccionistas de camisetas. Desarrollo de la arquitectura de la app, diseño y código.</p>
                <div class="techs"><span>React Native</span><span>PostgreSQL</span><span>Stripe</span></div>
                <div class="impacto">Impacto: <strong>+1K usuarios (beta)</strong></div>
            </div>
            <div class="proyecto-card">
                <span class="tag">Data tools</span>
                <h3>Educación</h3>
                <p>Optimización y desarrollo de scripts, web apps y base de datos para una empresa en el sector educativo.</p>
                <div class="techs"><span>Python</span><span>OpenAI</span><span>Docker</span></div>
                <div class="impacto">Impacto: <strong>+200h ahorradas</strong></div>
            </div>
            <div class="proyecto-card">
                <span class="tag">Web Application</span>
                <h3>Arquitasa</h3>
                <p>Desarrollo de múltiples herramientas para ayudar a la empresa a comunicarse con sus clientes.</p>
                <div class="techs"><span>Firebase</span><span>Python</span><span>AWS</span></div>
                <div class="impacto">Impacto: <strong>+150% crecimiento en clientes</strong></div>
            </div>
            <div class="proyecto-card">
                <span class="tag">Website</span>
                <h3>casa nueve</h3>
                <p>Implementación y desarrollo de la web de casa nueve, la casa de artistas y proyectos creativos.</p>
                <div class="techs"><span>bigcartel</span><span>vanilla js</span></div>
                <div class="impacto">Impacto: <strong>+200% engagement en redes</strong></div>
            </div>
            <div class="proyecto-card">
                <span class="tag">Website</span>
                <h3>Cruz Arquitectura</h3>
                <p>Website para una empresa de arquitectura donde había una carga amplia de fotos y una performance por encima de la media.</p>
                <div class="techs"><span>React</span><span>Next.js</span></div>
                <div class="impacto">Impacto: <strong>+300% engagement en redes</strong></div>
            </div>
            <div class="proyecto-card">
                <span class="tag">Tool</span>
                <h3>HEIC converter</h3>
                <p>Herramienta de escritorio para convertir fotos en HEIC a PNG.</p>
                <div class="techs"><span>Electron</span><span>Vue</span></div>
                <div class="impacto">Impacto: <strong>Featured in Product Hunt</strong></div>
            </div>
        </div>
      </div>
    `
  },
  {
    id: 'contacto',
    title: 'Contacto',
    icon: '✉️',
    content: `
      <div class="window-contacto" style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h2>Contacto</h2>
        <p class="subtitle" style="text-align: center;">Nos encanta hablar sobre proyectos, ideas y conectar con personas que formen parte del espacio tecnológico. Escríbenos y coordinaremos una llamada.</p>
        <div class="email-box">
            <a href="mailto:contacto@corner-estudios.com">contacto@corner-estudios.com</a>
        </div>
        <div class="social-links">
            <a href="#">Aviso Legal</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos y Condiciones</a>
        </div>
      </div>
    `
  }
];

let zIndexCounter = 100;

document.addEventListener('DOMContentLoaded', () => {
    const taskbarApps = document.getElementById('taskbar-apps');
    const windowsContainer = document.getElementById('windows-container');
    const desktopShortcuts = document.getElementById('desktop-shortcuts');

    apps.forEach((app, index) => {
        // Taskbar Icon
        const icon = document.createElement('div');
        icon.className = 'taskbar-icon';
        icon.id = `icon-${app.id}`;
        icon.innerHTML = app.icon;
        icon.title = app.title;
        icon.addEventListener('click', () => toggleWindow(app.id));
        taskbarApps.appendChild(icon);

        // Desktop Shortcut
        const dIcon = document.createElement('div');
        dIcon.className = 'desktop-icon';
        dIcon.innerHTML = `
            <div class="icon-bg">${app.icon}</div>
            <div class="icon-label">${app.title}</div>
        `;
        dIcon.addEventListener('click', () => {
            if (!document.getElementById(`window-${app.id}`).classList.contains('visible')) {
                openWindow(app.id);
            } else {
                bringToFront(app.id);
            }
        });
        desktopShortcuts.appendChild(dIcon);

        // Window
        const win = document.createElement('div');
        win.className = 'os-window';
        win.id = `window-${app.id}`;
        
        // Initial staggered positioning
        const offsetX = 50 + (index * 40);
        const offsetY = 50 + (index * 40);
        win.style.left = `${offsetX}px`;
        win.style.top = `${offsetY}px`;

        win.innerHTML = `
            <div class="window-header" id="header-${app.id}">
                <div class="window-controls">
                    <button class="control-btn control-close" onclick="closeWindow('${app.id}')"></button>
                    <button class="control-btn control-min" onclick="minimizeWindow('${app.id}')"></button>
                    <button class="control-btn control-max" onclick="maximizeWindow('${app.id}')"></button>
                </div>
                <div class="window-title">${app.title} - Corner Estudios</div>
                <div style="width: 44px;"></div> <!-- Spacer -->
            </div>
            <div class="window-content">
                ${app.content}
            </div>
        `;

        win.addEventListener('mousedown', () => bringToFront(app.id));
        windowsContainer.appendChild(win);

        makeDraggable(win, document.getElementById(`header-${app.id}`));
    });

    // Clock
    setInterval(() => {
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        document.getElementById('taskbar-time').textContent = timeStr;
    }, 1000);

    // Initial load
    const now = new Date();
    document.getElementById('taskbar-time').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setTimeout(() => {
        openWindow('servicios');
        openWindow('inicio');
    }, 300);
});

function toggleWindow(id) {
    const win = document.getElementById(`window-${id}`);
    if (win.classList.contains('visible')) {
        if (win.classList.contains('active')) {
            minimizeWindow(id);
        } else {
            bringToFront(id);
        }
    } else {
        openWindow(id);
    }
}

function openWindow(id) {
    const win = document.getElementById(`window-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    win.classList.add('visible');
    icon.classList.add('open');
    bringToFront(id);
}

function closeWindow(id) {
    const win = document.getElementById(`window-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    win.classList.remove('visible');
    icon.classList.remove('open');
    icon.classList.remove('active');
}

function minimizeWindow(id) {
    const win = document.getElementById(`window-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    win.classList.remove('visible');
    icon.classList.remove('active');
}

function maximizeWindow(id) {
    const win = document.getElementById(`window-${id}`);
    if (win.style.width === '100vw') {
        win.style.width = '800px';
        win.style.height = '550px';
        win.style.top = win.dataset.prevTop || '50px';
        win.style.left = win.dataset.prevLeft || '50px';
        win.style.borderRadius = '16px';
    } else {
        win.dataset.prevTop = win.style.top;
        win.dataset.prevLeft = win.style.left;
        win.style.top = '0';
        win.style.left = '0';
        win.style.width = '100vw';
        win.style.height = 'calc(100vh - 80px)';
        win.style.borderRadius = '0';
    }
    bringToFront(id);
}

function bringToFront(id) {
    zIndexCounter++;
    const win = document.getElementById(`window-${id}`);
    win.style.zIndex = zIndexCounter;
    
    document.querySelectorAll('.os-window').forEach(w => w.classList.remove('active'));
    document.querySelectorAll('.taskbar-icon').forEach(i => i.classList.remove('active'));
    
    win.classList.add('active');
    const icon = document.getElementById(`icon-${id}`);
    if (icon && win.classList.contains('visible')) {
        icon.classList.add('active');
    }
}

function makeDraggable(element, handle) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    handle.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        bringToFront(element.id.replace('window-', ''));
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        if (element.style.width === '100vw') return;

        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
