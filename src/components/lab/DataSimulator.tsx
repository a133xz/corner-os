import { useState } from 'react';
import { Play, RotateCcw, Terminal } from 'lucide-react';
import { normalizeLabel, validatePrice, validateSku } from '../../utils/catalogCleaner';

interface TerminalLine {
  text: string;
  type: 'success' | 'error' | 'info' | 'warning' | 'default';
}

const defaultData = `camiseta azul ; 29,99 ; prod_001
MOCHILA viaje;15; SKU-8821
gorra verde; gratis; GRV-003
auriculares BT; 89.5 EUR;
Zapatillas Run; -12; ZAP-009
taza ceramica; 8,50; TC-2024`;

const introLogs: TerminalLine[] = [
  { text: '# Corner Estudios — Feed Cleaner v1.2', type: 'info' },
  { text: 'Pega un volcado sucio (Producto; Precio; SKU) y ejecuta el pipeline.', type: 'default' },
];

export default function DataSimulator() {
  const [inputData, setInputData] = useState(defaultData);
  const [logs, setLogs] = useState<TerminalLine[]>(introLogs);
  const [isRunning, setIsRunning] = useState(false);
  const [stats, setStats] = useState({ total: 0, valid: 0, errors: 0 });

  const handleRun = () => {
    setIsRunning(true);
    setLogs([{ text: 'Iniciando pipeline de catálogo (normalize → price → sku)...', type: 'info' }]);

    const lines = inputData.split('\n').filter((l) => l.trim() !== '');
    let currentLineIndex = 0;
    let validCount = 0;
    let errorCount = 0;

    const runStep = () => {
      if (currentLineIndex >= lines.length) {
        setIsRunning(false);
        setLogs((prev) => [
          ...prev,
          { text: '=========================================', type: 'default' },
          {
            text: `PIPELINE LISTO. Total: ${lines.length} | Listos: ${validCount} | Revisar: ${errorCount}`,
            type: validCount === lines.length ? 'success' : 'warning',
          },
          {
            text: `Export simulado: /tmp/corner_feed/catalog_${new Date().toISOString().slice(0, 10)}.csv`,
            type: 'info',
          },
        ]);
        setStats({ total: lines.length, valid: validCount, errors: errorCount });
        return;
      }

      const rawLine = lines[currentLineIndex];
      const parts = rawLine.split(';');
      const rawProduct = parts[0] || '';
      const rawPrice = parts[1] || '';
      const rawSku = parts[2] || '';
      const product = normalizeLabel(rawProduct);
      const issues: string[] = [];

      if (!product) issues.push('nombre vacío');

      const price = validatePrice(rawPrice);
      if (!price.isValid) issues.push(price.reason ?? 'precio inválido');

      const sku = validateSku(rawSku);
      if (!sku.isValid) issues.push(sku.reason ?? 'SKU inválido');

      if (issues.length === 0) {
        validCount++;
        setLogs((prev) => [
          ...prev,
          {
            text: `[LÍNEA ${currentLineIndex + 1}] OK: "${product}" · ${price.formatted} · ${sku.formatted}`,
            type: 'success',
          },
        ]);
      } else {
        errorCount++;
        setLogs((prev) => [
          ...prev,
          {
            text: `[LÍNEA ${currentLineIndex + 1}] REVISAR: "${product || 'Sin nombre'}" → ${issues.join(' · ')}`,
            type: 'error',
          },
        ]);
      }

      currentLineIndex++;
      setTimeout(runStep, 450);
    };

    setTimeout(runStep, 600);
  };

  const handleReset = () => {
    setInputData(defaultData);
    setStats({ total: 0, valid: 0, errors: 0 });
    setLogs(introLogs);
  };

  return (
    <div className="simulator-box">
      <div className="simulator-header">
        <div className="simulator-dots">
          <div className="simulator-dot sim-dot-red" />
          <div className="simulator-dot sim-dot-yellow" />
          <div className="simulator-dot sim-dot-green" />
        </div>
        <div className="simulator-title">feed_cleaner.py</div>
        <div style={{ width: '40px' }} />
      </div>

      <div className="simulator-grid">
        <div className="simulator-input-panel">
          <div>
            <label className="sim-label">Volcado de catálogo (Producto; Precio; SKU)</label>
            <p className="sim-hint">
              Simula un CSV caótico antes de subirlo a tu tienda o ERP.
            </p>
            <textarea
              className="sim-textarea"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              disabled={isRunning}
              placeholder="Producto; 19,99; SKU-001"
            />
          </div>

          <div className="sim-actions">
            <button
              type="button"
              onClick={handleRun}
              disabled={isRunning || !inputData.trim()}
              className="btn btn-primary sim-run-btn"
            >
              <Play size={14} /> {isRunning ? 'Ejecutando...' : 'Ejecutar pipeline'}
            </button>

            <button
              type="button"
              onClick={handleReset}
              disabled={isRunning}
              className="btn btn-outline-white"
              title="Restablecer datos"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>

        <div className="simulator-output-panel">
          <div className="terminal-header">
            <div className="terminal-header-title">
              <Terminal size={14} /> Console Output
            </div>
            <span>Python 3.10</span>
          </div>

          <div className="terminal-body">
            {logs.map((log, idx) => (
              <div key={idx} className={`terminal-line ${log.type}`}>
                {log.text}
              </div>
            ))}
          </div>

          <div className="terminal-stat-grid">
            <div className="stat-item">
              <div className="stat-value">{stats.total}</div>
              <div className="stat-label">Total</div>
            </div>
            <div className="stat-item">
              <div className="stat-value stat-value--valid">{stats.valid}</div>
              <div className="stat-label">Listos</div>
            </div>
            <div className="stat-item">
              <div className="stat-value stat-value--error">{stats.errors}</div>
              <div className="stat-label">Revisar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
