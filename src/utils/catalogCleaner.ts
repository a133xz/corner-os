export function normalizeLabel(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export interface PriceValidation {
  isValid: boolean;
  formatted: string;
  reason?: string;
}

export function validatePrice(raw: string): PriceValidation {
  const clean = raw.trim().replace(/\s*€?\s*eur\s*/gi, '').replace(',', '.');
  if (!clean) {
    return { isValid: false, formatted: '', reason: 'Precio vacío' };
  }
  if (/[a-z]/i.test(clean.replace('.', ''))) {
    return { isValid: false, formatted: clean, reason: 'El precio no puede contener texto' };
  }
  const value = Number.parseFloat(clean);
  if (Number.isNaN(value)) {
    return { isValid: false, formatted: clean, reason: 'Formato numérico inválido' };
  }
  if (value <= 0) {
    return { isValid: false, formatted: clean, reason: 'El precio debe ser mayor que 0' };
  }
  return { isValid: true, formatted: `${value.toFixed(2)} €` };
}

export interface SkuValidation {
  isValid: boolean;
  formatted: string;
  reason?: string;
}

export function validateSku(raw: string): SkuValidation {
  const clean = raw.trim().toUpperCase().replace(/\s+/g, '-');
  if (!clean) {
    return { isValid: false, formatted: '', reason: 'SKU vacío' };
  }
  if (!/^[A-Z0-9][A-Z0-9_-]{2,}$/.test(clean)) {
    return {
      isValid: false,
      formatted: clean,
      reason: 'SKU inválido — usa letras, números, guiones (mín. 3 caracteres)',
    };
  }
  return { isValid: true, formatted: clean };
}
