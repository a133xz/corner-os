import { useMemo, useState } from 'react';
import {
  BedDouble,
  CalendarDays,
  ChevronRight,
  DoorOpen,
  LayoutGrid,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react';

type RoomStatus = 'libre' | 'ocupada' | 'limpieza' | 'mantenimiento';

interface Room {
  id: string;
  number: number;
  floor: number;
  type: 'Suite' | 'Doble' | 'Individual';
  status: RoomStatus;
  guest?: string;
  checkout?: string;
  nights?: number;
}

const initialRooms: Room[] = [
  { id: '101', number: 101, floor: 1, type: 'Doble', status: 'ocupada', guest: 'García López', checkout: 'Hoy 11:00', nights: 2 },
  { id: '102', number: 102, floor: 1, type: 'Individual', status: 'libre' },
  { id: '103', number: 103, floor: 1, type: 'Doble', status: 'limpieza' },
  { id: '104', number: 104, floor: 1, type: 'Individual', status: 'ocupada', guest: 'Martín Ruiz', checkout: 'Mañana', nights: 4 },
  { id: '201', number: 201, floor: 2, type: 'Suite', status: 'ocupada', guest: 'Equipo EVL', checkout: 'Vie 14:00', nights: 3 },
  { id: '202', number: 202, floor: 2, type: 'Doble', status: 'libre' },
  { id: '203', number: 203, floor: 2, type: 'Doble', status: 'mantenimiento' },
  { id: '204', number: 204, floor: 2, type: 'Individual', status: 'libre' },
  { id: '301', number: 301, floor: 3, type: 'Suite', status: 'ocupada', guest: 'Navarro S.A.', checkout: 'Dom', nights: 5 },
  { id: '302', number: 302, floor: 3, type: 'Doble', status: 'limpieza' },
  { id: '303', number: 303, floor: 3, type: 'Individual', status: 'libre' },
  { id: '304', number: 304, floor: 3, type: 'Doble', status: 'ocupada', guest: 'Pérez Díaz', checkout: 'Hoy 12:00', nights: 1 },
];

const statusLabels: Record<RoomStatus, string> = {
  libre: 'Libre',
  ocupada: 'Ocupada',
  limpieza: 'Limpieza',
  mantenimiento: 'Mantenimiento',
};

const filters: Array<{ id: 'all' | RoomStatus; label: string }> = [
  { id: 'all', label: 'Todas' },
  { id: 'libre', label: 'Libres' },
  { id: 'ocupada', label: 'Ocupadas' },
  { id: 'limpieza', label: 'Limpieza' },
  { id: 'mantenimiento', label: 'Mantenimiento' },
];

export default function HotelManagerDemo() {
  const [rooms, setRooms] = useState(initialRooms);
  const [filter, setFilter] = useState<'all' | RoomStatus>('all');
  const [selectedId, setSelectedId] = useState<string | null>('201');

  const stats = useMemo(() => ({
    total: rooms.length,
    libres: rooms.filter((r) => r.status === 'libre').length,
    ocupadas: rooms.filter((r) => r.status === 'ocupada').length,
    limpieza: rooms.filter((r) => r.status === 'limpieza').length,
  }), [rooms]);

  const visibleRooms = filter === 'all' ? rooms : rooms.filter((r) => r.status === filter);
  const selected = rooms.find((r) => r.id === selectedId) ?? null;

  const markClean = (id: string) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.id === id
          ? { ...room, status: 'libre' as const, guest: undefined, checkout: undefined, nights: undefined }
          : room,
      ),
    );
  };

  const checkIn = (id: string) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.id === id && room.status === 'libre'
          ? {
              ...room,
              status: 'ocupada' as const,
              guest: 'Huésped walk-in',
              checkout: 'Mañana',
              nights: 1,
            }
          : room,
      ),
    );
  };

  return (
    <div className="hotel-app">
      <aside className="hotel-app-sidebar">
        <div className="hotel-app-brand">
          <span className="hotel-app-brand-mark">SD</span>
          <div>
            <strong>StayDesk</strong>
            <span>Hotel Valle · Demo</span>
          </div>
        </div>
        <nav className="hotel-app-nav" aria-label="Secciones del panel">
          <button type="button" className="hotel-app-nav-item hotel-app-nav-item--active">
            <LayoutGrid size={16} />
            Panel
          </button>
          <button type="button" className="hotel-app-nav-item">
            <BedDouble size={16} />
            Habitaciones
          </button>
          <button type="button" className="hotel-app-nav-item">
            <CalendarDays size={16} />
            Reservas
          </button>
        </nav>
        <div className="hotel-app-sidebar-foot">
          <span>Ocupación hoy</span>
          <strong>{Math.round((stats.ocupadas / stats.total) * 100)}%</strong>
        </div>
      </aside>

      <div className="hotel-app-main">
        <header className="hotel-app-header">
          <div>
            <p className="hotel-app-eyebrow">Gestión de alojamiento</p>
            <h3 className="hotel-app-heading">Estado de habitaciones</h3>
          </div>
          <div className="hotel-app-header-meta">
            <span>{new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
            <span className="hotel-app-badge">{stats.limpieza} en limpieza</span>
          </div>
        </header>

        <div className="hotel-app-stats">
          <div className="hotel-app-stat">
            <span>Total</span>
            <strong>{stats.total}</strong>
          </div>
          <div className="hotel-app-stat hotel-app-stat--free">
            <span>Libres</span>
            <strong>{stats.libres}</strong>
          </div>
          <div className="hotel-app-stat hotel-app-stat--busy">
            <span>Ocupadas</span>
            <strong>{stats.ocupadas}</strong>
          </div>
          <div className="hotel-app-stat hotel-app-stat--clean">
            <span>Limpieza</span>
            <strong>{stats.limpieza}</strong>
          </div>
        </div>

        <div className="hotel-app-toolbar">
          <div className="hotel-app-filters" role="tablist" aria-label="Filtrar habitaciones">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={filter === item.id}
                className={`hotel-app-filter${filter === item.id ? ' hotel-app-filter--active' : ''}`}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <span className="hotel-app-toolbar-hint">Pulsa una habitación para ver detalle</span>
        </div>

        <div className="hotel-app-body">
          <div className="hotel-app-rooms">
            {visibleRooms.map((room) => (
              <button
                key={room.id}
                type="button"
                className={`hotel-room-card hotel-room-card--${room.status}${selectedId === room.id ? ' hotel-room-card--selected' : ''}`}
                onClick={() => setSelectedId(room.id)}
              >
                <div className="hotel-room-card-top">
                  <span className="hotel-room-number">{room.number}</span>
                  <span className={`hotel-room-status hotel-room-status--${room.status}`}>
                    {statusLabels[room.status]}
                  </span>
                </div>
                <p className="hotel-room-type">{room.type} · Planta {room.floor}</p>
                {room.guest ? (
                  <p className="hotel-room-guest">{room.guest}</p>
                ) : (
                  <p className="hotel-room-guest hotel-room-guest--muted">Sin huésped</p>
                )}
              </button>
            ))}
          </div>

          <aside className="hotel-app-detail" aria-live="polite">
            {selected ? (
              <>
                <p className="hotel-app-eyebrow">Habitación {selected.number}</p>
                <h4 className="hotel-app-detail-title">{selected.type}</h4>
                <dl className="hotel-app-detail-list">
                  <div>
                    <dt>Estado</dt>
                    <dd>{statusLabels[selected.status]}</dd>
                  </div>
                  <div>
                    <dt>Planta</dt>
                    <dd>{selected.floor}ª</dd>
                  </div>
                  {selected.guest && (
                    <div>
                      <dt>Huésped</dt>
                      <dd>{selected.guest}</dd>
                    </div>
                  )}
                  {selected.checkout && (
                    <div>
                      <dt>Salida</dt>
                      <dd>{selected.checkout}</dd>
                    </div>
                  )}
                  {selected.nights != null && (
                    <div>
                      <dt>Noches</dt>
                      <dd>{selected.nights}</dd>
                    </div>
                  )}
                </dl>

                <div className="hotel-app-detail-actions">
                  {selected.status === 'limpieza' && (
                    <button type="button" className="hotel-app-action hotel-app-action--primary" onClick={() => markClean(selected.id)}>
                      <Sparkles size={15} />
                      Marcar limpia
                    </button>
                  )}
                  {selected.status === 'libre' && (
                    <button type="button" className="hotel-app-action hotel-app-action--primary" onClick={() => checkIn(selected.id)}>
                      <DoorOpen size={15} />
                      Check-in rápido
                    </button>
                  )}
                  {selected.status === 'ocupada' && (
                    <button type="button" className="hotel-app-action">
                      <Users size={15} />
                      Ver reserva
                      <ChevronRight size={14} />
                    </button>
                  )}
                  {selected.status === 'mantenimiento' && (
                    <button type="button" className="hotel-app-action">
                      <Wrench size={15} />
                      Orden de trabajo
                      <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              </>
            ) : (
              <p className="hotel-app-detail-empty">Selecciona una habitación del listado.</p>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
