import { useState, useRef, useEffect } from 'react';
import { Send, Hash } from 'lucide-react';

interface Message {
  id: number;
  user: string;
  text: string;
  time: string;
  own?: boolean;
  topic?: string;
}

interface Channel {
  id: string;
  name: string;
  unread?: number;
  messages: Message[];
}

const initialChannels: Channel[] = [
  {
    id: 'general',
    name: 'general',
    unread: 2,
    messages: [
      { id: 1, user: 'María', text: '¿Alguien ha visto el último deploy?', time: '10:24' },
      { id: 2, user: 'Carlos', text: 'Sí, está en staging desde las 9', time: '10:31' },
      { id: 3, user: 'Corner Bot', text: 'Recordad actualizar el changelog antes del viernes', time: '10:45', topic: 'Aviso equipo' },
    ],
  },
  {
    id: 'proyectos',
    name: 'proyectos',
    messages: [
      { id: 4, user: 'Ana', text: 'El cliente quiere mover la demo al martes', time: '09:15' },
      { id: 5, user: 'Luis', text: 'Perfecto, lo dejo anotado en el board', time: '09:16', topic: 'Planning' },
    ],
  },
  {
    id: 'random',
    name: 'random',
    unread: 1,
    messages: [
      { id: 6, user: 'Lucía', text: 'Café en la cocina ☕', time: '11:02' },
      { id: 7, user: 'Pablo', text: 'Llego en 5', time: '11:18' },
    ],
  },
];

export default function ChatDemo() {
  const [channels] = useState(initialChannels);
  const [activeId, setActiveId] = useState('general');
  const [input, setInput] = useState('');
  const [extraByChannel, setExtraByChannel] = useState<Record<string, Message[]>>({});
  const messagesContainer = useRef<HTMLDivElement>(null);

  const channel = channels.find((c) => c.id === activeId)!;
  const allMessages = [...channel.messages, ...(extraByChannel[activeId] ?? [])];

  useEffect(() => {
    const container = messagesContainer.current;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  }, [allMessages.length, activeId]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setExtraByChannel((prev) => ({
      ...prev,
      [activeId]: [
        ...(prev[activeId] ?? []),
        {
          id: Date.now(),
          user: 'Tú',
          text: input.trim(),
          time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
          own: true,
        },
      ],
    }));
    setInput('');
  };

  return (
    <div className="chat-app chat-app-embedded">
      <aside className="chat-sidebar">
        <div className="chat-sidebar-header">
          Chat <span>demo</span>
        </div>
        <ul className="chat-channels">
          {channels.map((ch) => (
            <li key={ch.id}>
              <button
                type="button"
                className={`chat-channel ${activeId === ch.id ? 'active' : ''}`}
                onClick={() => setActiveId(ch.id)}
              >
                <Hash size={14} />
                {ch.name}
                {ch.unread ? <span className="chat-channel-unread">{ch.unread}</span> : null}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="chat-main">
        <div className="chat-main-header">#{channel.name}</div>
        <div className="chat-messages" ref={messagesContainer}>
          {allMessages.map((msg) => (
            <div key={msg.id} className={`chat-msg ${msg.own ? 'own' : ''}`}>
              <div className="chat-msg-bubble">
                {!msg.own && <strong className="chat-msg-user">{msg.user}</strong>}
                {msg.text}
                {msg.topic && <span className="chat-task-chip">{msg.topic}</span>}
              </div>
              <div className="chat-msg-meta">{msg.time}</div>
            </div>
          ))}
        </div>
        <form className="chat-input-bar" onSubmit={send}>
          <input
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un mensaje..."
          />
          <button type="submit" className="chat-send" aria-label="Enviar">
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
